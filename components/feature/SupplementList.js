import { useState, useEffect } from "react";
import SupplementCard from "./SupplementCard";
import SupplementModal from "./SupplementModal";
import SelectedSupplementCard from "./SelectedSupplementCard";
import styles from "./SupplementList.module.css";

// Handles loading, searching, and displaying supplement cards
const SupplementList = ({ searchQuery = "" }) => {
  const [supplements, setSupplements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Modal state
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSupplement, setSelectedSupplement] = useState(null);
  const [selectedSupplements, setSelectedSupplements] = useState({});

  // Load supplements from JSON on mount
  useEffect(() => {
    async function fetchSupplements() {
      setLoading(true);
      try {
        const res = await fetch("/data/supplements.json");
        if (!res.ok) throw new Error("Failed to load supplements");
        const data = await res.json();
        setSupplements(data.supplements);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchSupplements();
  }, []);

  // Open modal for a supplement
  const openModal = (supplement) => {
    setSelectedSupplement(supplement);
    setModalOpen(true);
  };

  // Save selected supplement data
  const handleModalSave = (modalData) => {
    setSelectedSupplements((prev) => ({
      ...prev,
      [selectedSupplement.id]: { ...selectedSupplement, ...modalData },
    }));
    setModalOpen(false);
  };

  // Remove selected supplement
  const handleRemove = (id) => {
    setSelectedSupplements((prev) => {
      const copy = { ...prev };
      delete copy[id];
      return copy;
    });
  };

  // Close modal
  const handleModalClose = () => setModalOpen(false);

  // Filter supplements by search
  const filtered = supplements.filter((s) =>
    s.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Handle different states with early returns
  if (loading) {
    return <div className={styles.loading}>Loading supplements...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (searchQuery && filtered.length === 0) {
    return (
      <div className={styles.noResults}>
        <p>No supplements found matching "{searchQuery}"</p>
        <p className={styles.noResultsSubtext}>
          Try searching for a different supplement.
        </p>
      </div>
    );
  }

  return (
    <>
      <div className={styles.supplementList}>
        {filtered.map((supplement) => {
          const selected = selectedSupplements[supplement.id];
          return selected ? (
            <SelectedSupplementCard
              key={supplement.id}
              name={supplement.name}
              image={supplement.image}
              frequency={selected.frequency}
              usageCount={selected.usageCount}
              time={selected.time}
              days={selected.selectedDays}
              onRemove={() => handleRemove(supplement.id)}
            />
          ) : (
            <SupplementCard
              key={supplement.id}
              name={supplement.name}
              image={supplement.image}
              frequency={supplement.frequency}
              onAdd={() => openModal(supplement)}
            />
          );
        })}
      </div>
      {modalOpen && selectedSupplement && (
        <SupplementModal
          open={modalOpen}
          onClose={handleModalClose}
          onSave={handleModalSave}
          title={selectedSupplement.name}
        />
      )}
    </>
  );
};

export default SupplementList;
