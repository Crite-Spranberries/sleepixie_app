"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import YellowButton from "@/ui/buttons/YellowButton";
import Image from "next/image";
import styles from "./page.module.css";
import sleepixieLogo from "@/ui/images/sleepixie_logo.png";

export default function Home() {
    const router = useRouter();

    return (
        <main className={styles.container}>
            <div className={styles.textContainer}>
                <div className={styles.imageContainer}>
                    <Image
                        src={sleepixieLogo}
                        alt="Sleepixie Logo"
                        width={200}
                        height={200}
                        priority
                        className={styles.welcomeImage}
                    />
                </div>
                <h1 className={styles.title}>Welcome to Sleepixie!</h1>
                <p className={styles.subtitle}></p>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.otherButtons}>
                    <span onClick={() => router.push("/onboarding/page1")}>
                        <YellowButton label="Get Started" />
                    </span>
                </div>
            </div>
        </main>
    );
}
