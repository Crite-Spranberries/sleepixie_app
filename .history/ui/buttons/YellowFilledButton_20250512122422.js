import styles from "@/ui/buttons/YellowFilledButton.module.css";

const YellowFilledButton = ({ label }) => {
    return <button className={styles.buttonContainer}>{label}</button>;
};
export default YellowFilledButton;
