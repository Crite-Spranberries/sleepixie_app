"use client";

import { useState } from "react";
import Link from "next/link";
import Layout from "@/app/layout";
import ProgressIndicator from "@/ui/progressIndicator/ProgressIndicator";
import styles from "./page.module.css";

export default function OnboardingPage() {
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
                        <BlueButton label="Absolutely satisfied!" />
                        <BlueButton label="Pretty good!" />
                        <BlueButton label="Not bad, Not good" />
                        <BlueButton label="Usually meh." />
                        <BlueButton label="Not satisfied at all" />
                    </div>
                    <div className={styles.otherButtons}>
                        <Link
                            href="/onboarding"
                            className={styles.link}
                        >
                            <YellowButton label="Next" />
                        </Link>
                        <GrayButton label="Skip" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
