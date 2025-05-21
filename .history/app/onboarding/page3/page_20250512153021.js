"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import YellowButton from "@/ui/buttons/YellowButton";
import BlueButton from "@/ui/buttons/BlueButton";
import GrayButton from "@/ui/buttons/GrayButton";
import ProgressIndicator from "@/ui/progressIndicator/ProgressIndicator";
import styles from "../../page.module.css";
import SkipOverlay from "@/ui/SkipOverlay/SkipOverlay";

export default function OnboardingPage3() {
    const router = useRouter();
    const [selectedButton, setSelectedButton] = useState(null);
    const [isOverlayOpen, setIsOverlayOpen] = useState(false);

    const handleButtonClick = (buttonLabel) => {
        setSelectedButton(buttonLabel);
    };

    return (
        <main className={styles.container}>
            <ProgressIndicator currentStep={3} />
            <div className={styles.textContainer}>
                <h1 className={styles.title}></h1>
                <p className={styles.subtitle}>
                    How is your sleep environment?
                </p>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.blueButtons}>
                    <BlueButton
                        label="Perfect for sleeping"
                        isSelected={selectedButton === "Perfect for sleeping"}
                        onClick={() =>
                            handleButtonClick("Perfect for sleeping")
                        }
                    />
                    <BlueButton
                        label="Cool, dark, and quiet"
                        isSelected={selectedButton === "Cool, dark, and quiet"}
                        onClick={() =>
                            handleButtonClick("Cool, dark, and quiet")
                        }
                    />
                    <BlueButton
                        label="A little hot or cold"
                        isSelected={selectedButton === "A little hot or cold"}
                        onClick={() =>
                            handleButtonClick("A little hot or cold")
                        }
                    />
                    <BlueButton
                        label="Some disruptions are there."
                        isSelected={
                            selectedButton === "Some disruptions are there."
                        }
                        onClick={() =>
                            handleButtonClick("Some disruptions are there.")
                        }
                    />
                    <BlueButton
                        label="Not very good"
                        isSelected={selectedButton === "Not very good"}
                        onClick={() => handleButtonClick("Not very good")}
                    />
                </div>
                <div className={styles.otherButtons}>
                    <span onClick={() => router.push("/result/page")}>
                        <YellowButton label="Complete" />
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
