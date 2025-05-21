"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import YellowButton from "@/ui/buttons/YellowButton";
import BlueButton from "@/ui/buttons/BlueButton";
import GrayButton from "@/ui/buttons/GrayButton";
import ProgressIndicator from "@/ui/progressIndicator/ProgressIndicator";
import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
    const router = useRouter();

    return (
        <main className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.imageContainer}>
                    <img
                        src="ui/image/sleepixie_logo.png"
                        alt="Welcome to Sleepixie"
                        width={200}
                        height={200}
                        className={styles.welcomeImage}
                    />
                </div>
                <h1 className={styles.title}>Welcome to Sleepixie</h1>
                <p className={styles.subtitle}></p>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.otherButtons}>
                    <span onClick={() => router.push("/onboarding")}>
                        <YellowButton label="Get Started" />
                    </span>
                </div>
            </div>
        </main>
    );
}
