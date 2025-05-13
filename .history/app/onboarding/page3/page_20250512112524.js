"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import YellowButton from "@/ui/buttons/YellowButton";
import BlueButton from "@/ui/buttons/BlueButton";
import GrayButton from "@/ui/buttons/GrayButton";
import ProgressIndicator from "@/ui/progressIndicator/ProgressIndicator";
import styles from "../../page.module.css";

export default function OnboardingPage3() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <ProgressIndicator currentStep={3} />
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Let's get you started.</h1>
                <p className={styles.subtitle}>
                    How many hours of sleep do you usually get?
                </p>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.blueButtons}>
                    <BlueButton label="Less than 5 hours" />
                    <BlueButton label="5-6 hours" />
                    <BlueButton label="6-7 hours" />
                    <BlueButton label="7-8 hours" />
                    <BlueButton label="More than 8 hours" />
                </div>
                <div className={styles.otherButtons}>
                    <span onClick={() => router.push("/home")}>
                        <YellowButton label="Next" />
                    </span>
                    <GrayButton label="Skip" />
                </div>
            </div>
        </div>
    );
}
