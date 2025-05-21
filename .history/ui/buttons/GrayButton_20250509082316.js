import styles from "@/ui/buttons/GrayButton.module.css";

const GrayButton = ({ label }) => {
    return (
        <div className={styles.buttonContainer}>
            <button className={styles.buttonContainer}>{label}</button>
        </div>
    );
};
export default GrayButton;
