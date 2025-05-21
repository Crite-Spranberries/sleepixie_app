"use client";

import { useRouter } from "next/navigation";
import GrayButton from "@/ui/buttons/GrayButton";
import styles from "./SkipOverlay.module.css";
import YellowFilledButton from "../buttons/YellowFilledButton";

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
                    <span onClick={onClose}>
                        <GrayButton label="Skip" />
                    </span>
                    <button
                        className={styles.skipButton}
                        onClick={() => router.push("/home")}
                    >
                        Skip
                    </button>
                    <span onClick={onClose}>
                        <YellowFilledButton label="Continue" />
                    </span>
                    <button
                        className={styles.skipButton}
                        onClick={() => router.push("/page1/page.js")}
                    >
                        Continue
                    </button>
                </div>
            </div>
        </div>
    );
}
