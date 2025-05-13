"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import YellowButton from "@/ui/buttons/YellowButton";
import BlueButton from "@/ui/buttons/BlueButton";
import GrayButton from "@/ui/buttons/GrayButton";
import ProgressIndicator from "@/ui/progressIndicator/ProgressIndicator";
import SkipOverlay from "@/ui/SkipOverlay/SkipOverlay";
import styles from "../../page.module.css";

export default function OnboardingPage1() {
    const router = useRouter();
    const [selectedButton, setSelectedButton] = useState(null);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const handleButtonClick = (buttonLabel) => {
        setSelectedButton(buttonLabel);
    };

    return (
        <main className={styles.container}>
            <ProgressIndicator currentStep={1} />
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Let's get you started.</h1>
                <p className={styles.subtitle}>
                    How satisfied are you with your sleep?
                </p>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.blueButtons}>
                    <BlueButton
                        label="Very satisfied"
                        isSelected={selectedButton === "Very satisfied"}
                        onClick={() => handleButtonClick("Very satisfied")}
                    />
                    <BlueButton
                        label="Satisfied"
                        isSelected={selectedButton === "Satisfied"}
                        onClick={() => handleButtonClick("Satisfied")}
                    />
                    <BlueButton
                        label="Neutral"
                        isSelected={selectedButton === "Neutral"}
                        onClick={() => handleButtonClick("Neutral")}
                    />
                    <BlueButton
                        label="Dissatisfied"
                        isSelected={selectedButton === "Dissatisfied"}
                        onClick={() => handleButtonClick("Dissatisfied")}
                    />
                    <BlueButton
                        label="Very dissatisfied"
                        isSelected={selectedButton === "Very dissatisfied"}
                        onClick={() => handleButtonClick("Very dissatisfied")}
                    />
                </div>
                <div className={styles.otherButtons}>
                    <span onClick={() => router.push("/onboarding/page2")}>
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
