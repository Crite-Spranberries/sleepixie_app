import styles from "@/ui/buttons/BlueButton.module.css";

const BlueButton = ({ label }) => {
    return <button className={styles.buttonContainer}>{label}</button>;
};
export default BlueButton;
