import styles from "@/ui/buttons/YellowButton.module.css";

const YellowButton = ({ label }) => {
    return (
        <div>
            <button className={styles.buttonContainer}>{label}</button>
        </div>
    );
};
export default YellowButton;
