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
                <h1 className={styles.title}></h1>
                <p className={styles.subtitle}>
                    How is your sleep environment?
                </p>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.blueButtons}>
                    <BlueButton label="Perfect for sleeping" />
                    <BlueButton label="Cool, dark and quiet" />
                    <BlueButton label="A little hot or cold" />
                    <BlueButton label="Some disruptions are there." />
                    <BlueButton label="Not very good" />
                </div>
                <div className={styles.otherButtons}>
                    <span onClick={() => router.push("/result")}>
                        <YellowButton label="Complete" />
                    </span>
                    <GrayButton label="Skip" />
                </div>
            </div>
        </div>
    );
}
