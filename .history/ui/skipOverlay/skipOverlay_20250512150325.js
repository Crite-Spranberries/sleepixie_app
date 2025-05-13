"use client";

import { useRouter } from "next/navigation";
import styles from "./SkipOverlay.module.css";

export default function SkipOverlay({ isOpen, onClose }) {
    const router = useRouter();

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.modal}>
                <h2 className={styles.title}>Skip Onboarding?</h2>
                <p className={styles.message}>
                    Are you sure you want to skip the onboarding process? You
                    can always complete it later.
                </p>
                <div className={styles.buttonContainer}>
                    <button
                        className={styles.cancelButton}
                        onClick={onClose}
                    >
                        Cancel
                    </button>
                    <button
                        className={styles.skipButton}
                        onClick={() => router.push("/result")}
                    >
                        Skip
                    </button>
                </div>
            </div>
        </div>
    );
}
