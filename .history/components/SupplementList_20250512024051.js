import { useState, useEffect } from "react";
import SupplementCard from "./Button/SupplementCard";
import styles from "./SupplementList.module.css";

const SupplementList = ({ searchQuery = "" }) => {
  const [supplements, setSupplements] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

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

  const handleAddSupplement = (supplementId) => {
    setSupplements((prevSupplements) =>
      prevSupplements.map((supplement) =>
        supplement.id === supplementId
          ? { ...supplement, frequency: supplement.frequency + 1 }
          : supplement
      )
    );
  };

  const filteredSupplements = supplements.filter((supplement) =>
    supplement.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

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
    <div className={styles.supplementList}>
      {filteredSupplements.map((supplement) => (
        <SupplementCard
          key={supplement.id}
          name={supplement.name}
          image={supplement.image}
          frequency={supplement.frequency}
          onAdd={() => handleAddSupplement(supplement.id)}
        />
      ))}
    </div>
  );
};

export default SupplementList;
