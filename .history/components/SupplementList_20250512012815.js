import { useState, useEffect } from "react";
import SupplementCard from "./Button/SupplementCard";
import styles from "./SupplementList.module.css";

const SupplementList = () => {
  const [supplements, setSupplements] = useState([]);

  useEffect(() => {
    // Load supplements from JSON file
    const loadSupplements = async () => {
      try {
        const response = await fetch("/data/supplements.json");
        const data = await response.json();
        setSupplements(data.supplements);
      } catch (error) {
        console.error("Error loading supplements:", error);
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

  return (
    <div className={styles.supplementList}>
      {supplements.map((supplement) => (
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
