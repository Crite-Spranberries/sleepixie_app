import styles from "@/ui/buttons/BlueButton.module.css";

const BlueButton = ({ label }) => {
    return (
        <div className={styles.buttonContainer}>
            <button className={styles.buttonContainer}>{label}</button>
        </div>
    );
};
export default BlueButton;
