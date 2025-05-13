"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import YellowButton from "@/ui/buttons/YellowButton";
import BlueButton from "@/ui/buttons/BlueButton";
import GrayButton from "@/ui/buttons/GrayButton";
import ProgressIndicator from "@/ui/progressIndicator/ProgressIndicator";
import styles from "../page.module.css"; // Reusing the same styles
import Layout from "@/app/layout";

export default function OnboardingPage() {
    const router = useRouter();

    return (
        <Layout>
            <div className={styles.container}>
                <ProgressIndicator currentStep={2} />
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Let's get you started.</h1>
                    <p className={styles.subtitle}>
                        Do you ever wake up at night and have trouble getting
                        back to sleep?
                    </p>
                </div>
                <div className={styles.buttonContainer}>
                    <div className={styles.blueButtons}>
                        <BlueButton label="Never!" />
                        <BlueButton label="Sometimes" />
                        <BlueButton label="Often" />
                        <BlueButton label="Most of nights, yes." />
                        <BlueButton label="Every single night" />
                    </div>
                    <div className={styles.otherButtons}>
                        <span onClick={() => router.push("/onboarding/page3")}>
                            <YellowButton label="Next" />
                        </span>
                        <GrayButton label="Skip" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
