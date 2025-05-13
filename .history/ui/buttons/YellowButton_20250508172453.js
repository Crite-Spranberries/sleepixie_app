import styles from "@/ui/buttons/YellowButton.module.css";

const YellowButton = ({ label }) => {
    return (
        <div className={styles.buttonContainer}>
            <button className={styles.buttonContainer}>{label}</button>
        </div>
    );
};
export default YellowButton;
