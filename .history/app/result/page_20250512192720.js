"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import YellowFilledButton from "@/ui/buttons/YellowFilledButton";
import styles from "./page.module.css";
import resultClock from "@/ui/images/result_clock.png";

export default function Result() {
    const router = useRouter();

    return (
        <main className={styles.container}>
            <div className={styles.textContainer}>
                <h1 className={styles.title}>
                    Let's build a good sleep habit together!
                </h1>
                <p className={styles.subtitle}>Your Level is</p>
                <p className={styles.level}>1</p>
                <p className={styles.goal}>✨ Goal : 8 hours of sleep ✨</p>
            </div>
            <div className={styles.imageContainer}>
                <Image
                    src={resultClock}
                    alt="Result Clock"
                    width={200}
                    height={200}
                    priority
                    className={styles.resultClock}
                />
            </div>
            <p className={styles.editButton}>Edit</p>
            <div className={styles.buttonContainer}>
                <div className={styles.otherButtons}>
                    <span onClick={() => router.push("/home/home")}>
                        <YellowFilledButton label="Get Started!" />
                    </span>
                </div>
            </div>
        </main>
    );
}
