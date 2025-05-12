import { useState, useEffect } from "react";
import SupplementCard from "./Button/SupplementCard";
import SupplementModal from "./SupplementModal";
import styles from "./SupplementList.module.css";

// State and effect for load supplements
const SupplementList = ({ searchQuery = "" }) => {
  const [supplements, setSupplements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSupplement, setSelectedSupplement] = useState(null);

  useEffect(() => {
    const loadSupplements = async () => {
      try {
        setIsLoading(true);
        const response = await fetch("/data/supplements.json");
        if (!response.ok) {
          throw new Error("Failed to load supplements");
        }
        const data = await response.json();
        setSupplements(data.supplements);
      } catch (error) {
        console.error("Error loading supplements:", error);
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    loadSupplements();
  }, []);

  // Handle add supplement logic (open modal)
  const handleAddSupplement = (supplement) => {
    setSelectedSupplement(supplement);
    setModalOpen(true);
  };

  // Handle save from modal (log data and close modal)
  const handleModalSave = (modalData) => {
    console.log("Modal data:", modalData);
    setModalOpen(false);
  };

  // Handle close modal
  const handleModalClose = () => {
    setModalOpen(false);
  };

  // Filter supplements by search query
  const filteredSupplements = supplements.filter((supplement) =>
    supplement.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Render loading, error, no result or supplement list
  if (isLoading) {
    return <div className={styles.loading}>Loading supplements...</div>;
  }

  if (error) {
    return <div className={styles.error}>Error: {error}</div>;
  }

  if (searchQuery && filteredSupplements.length === 0) {
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
        {filteredSupplements.map((supplement) => (
          <SupplementCard
            key={supplement.id}
            name={supplement.name}
            image={supplement.image}
            frequency={supplement.frequency}
            onAdd={() => handleAddSupplement(supplement)}
          />
        ))}
      </div>
      {/* Modal for supplement details */}
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
