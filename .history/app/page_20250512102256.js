"use client";

import { useState } from "react";
import Link from "next/link";
import YellowButton from "@/ui/buttons/YellowButton";
import BlueButton from "@/ui/buttons/BlueButton";
import GrayButton from "@/ui/buttons/GrayButton";
import Layout from "@/app/layout";
import ProgressIndicator from "@/ui/progressIndicator/ProgressIndicator";
import styles from "./page.module.css";

export default function Loading() {
    return (
        <Layout>
            <div className={styles.container}>
                <ProgressIndicator />
                <div className={styles.textContainer}>
                    <h1 className={styles.title}>Let's get you started.</h1>
                    <p className={styles.subtitle}>
                        How satisfied are you with your sleep?
                    </p>
                </div>
                <div className={styles.buttonContainer}>
                    <div className={styles.blueButtons}>
                        <BlueButton label="Very satisfied" />
                        <BlueButton label="Satisfied" />
                        <BlueButton label="Neutral" />
                        <BlueButton label="Dissatisfied" />
                        <BlueButton label="Very dissatisfied" />
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
