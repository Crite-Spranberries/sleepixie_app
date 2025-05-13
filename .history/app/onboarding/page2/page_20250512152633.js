"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import YellowButton from "@/ui/buttons/YellowButton";
import BlueButton from "@/ui/buttons/BlueButton";
import GrayButton from "@/ui/buttons/GrayButton";
import ProgressIndicator from "@/ui/progressIndicator/ProgressIndicator";
import styles from "./page.module.css";
import SkipOverlay from "@/ui/SkipOverlay/SkipOverlay";

export default function OnboardingPage() {
    const router = useRouter();
    const [selectedButton, setSelectedButton] = useState(null);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const handleButtonClick = (buttonLabel) => {
        setSelectedButton(buttonLabel);
    };

    return (
        <main className={styles.container}>
            <ProgressIndicator currentStep={2} />
            <div className={styles.textContainer}>
                <p className={styles.subtitle}>
                    Do you ever wake up at night and have trouble getting back
                    to sleep?
                </p>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.blueButtons}>
                    <BlueButton
                        label="Never!"
                        isSelected={selectedButton === "Never!"}
                        onClick={() => handleButtonClick("Never!")}
                    />
                    <BlueButton
                        label="Sometimes"
                        isSelected={selectedButton === "Sometimes"}
                        onClick={() => handleButtonClick("Sometimes")}
                    />
                    <BlueButton
                        label="Often"
                        isSelected={selectedButton === "Often"}
                        onClick={() => handleButtonClick("Often")}
                    />
                    <BlueButton
                        label="Most of nights, yes"
                        isSelected={selectedButton === "Most of nights, yes"}
                        onClick={() => handleButtonClick("Most of nights, yes")}
                    />
                    <BlueButton
                        label="Every single night"
                        isSelected={selectedButton === "Every single night"}
                        onClick={() => handleButtonClick("Every single night")}
                    />
                </div>
                <div className={styles.otherButtons}>
                    <span onClick={() => router.push("/onboarding/page3")}>
                        <YellowButton label="Next" />
                    </span>
                    <span onClick={() => setIsOverlayOpen(true)}>
                        <GrayButton label="Skip" />
                    </span>
                </div>
            </div>
            <SkipOverlay
                isOpen={isOverlayOpen}
                onClose={() => setIsOverlayOpen(false)}
            />
        </main>
    );
}
