"use client";

import { useState } from "react";
import Link from "next/link";
import Layout from "@/app/layout";
import ProgressIndicator from "@/ui/progressIndicator/ProgressIndicator";
import BlueButton from "@/ui/buttons/BlueButton";
import YellowButton from "@/ui/buttons/YellowButton";
import GrayButton from "@/ui/buttons/GrayButton";
import styles from "./page.module.css";
import { useRouter } from "next/navigation";

export default function OnboardingPage() {
    const router = useRouter();
    return (
        <Layout>
            <div className={styles.container}>
                <ProgressIndicator currentStep={2} />
                <div className={styles.textContainer}>
                    <h1 className={styles.title}></h1>
                    <p className={styles.subtitle}>
                        Do you ever wake up at night and have trouble to getting
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
                        <YellowButton label="Next" />
                        <GrayButton label="Skip" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
