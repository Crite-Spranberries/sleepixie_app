"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import YellowButton from "@/ui/buttons/YellowButton";
import ProgressIndicator from "@/ui/progressIndicator/ProgressIndicator";
import styles from "../page.module.css";

export default function WelcomePage() {
    const router = useRouter();

    return (
        <main className={styles.container}>
            <ProgressIndicator currentStep={1} />
            <div className={styles.textContainer}>
                <h1 className={styles.title}>Welcome to Sleepixie</h1>
                <p className={styles.subtitle}>
                    Your personal sleep companion that helps you understand and
                    improve your sleep quality.
                </p>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.otherButtons}>
                    <span onClick={() => router.push("/")}>
                        <YellowButton label="Get Started" />
                    </span>
                </div>
            </div>
        </main>
    );
}
