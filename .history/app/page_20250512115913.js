"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import YellowButton from "@/ui/buttons/YellowButton";
import BlueButton from "@/ui/buttons/BlueButton";
import GrayButton from "@/ui/buttons/GrayButton";
import ProgressIndicator from "@/ui/progressIndicator/ProgressIndicator";
import Image from "next/image";
import sleepixieLogo from "@/ui/image/sleepixie_logo.png";
import styles from "./page.module.css";

export default function Home() {
    const router = useRouter();
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonLabel) => {
        setSelectedButton(buttonLabel);
    };

    return (
        <main className={styles.container}>
            <ProgressIndicator currentStep={1} />
            <div className={styles.textContainer}>
                <div className={styles.imageContainer}>
                    <Image
                        src={sleepixieLogo}
                        alt="Sleepixie Logo"
                        width={200}
                        height={200}
                        className={styles.welcomeImage}
                    />
                </div>
                <h1 className={styles.title}>Welcome to Sleepixie</h1>
                <p className={styles.subtitle}>
                    Your personal sleep companion that helps you understand and
                    improve your sleep quality.
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
                    <span onClick={() => router.push("/onboarding/page1")}>
                        <YellowButton label="Get Started" />
                    </span>
                </div>
            </div>
        </main>
    );
}
