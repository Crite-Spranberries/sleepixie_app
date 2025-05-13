"use client";

import { useState } from "react";
import Link from "next/link";
import Layout from "@/app/layout";
import ProgressIndicator from "@/ui/progressIndicator/ProgressIndicator";
import styles from "./page02.module.css";

export default function OnboardingPage02() {
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
            </div>
        </Layout>
    );
}
