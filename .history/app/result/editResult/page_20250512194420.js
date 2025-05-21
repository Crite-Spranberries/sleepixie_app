"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import styles from "./page.module.css";
import resultClock from "@/ui/images/result_clock.png";

export default function EditResult() {
    const router = useRouter();

    return (
        <div className={styles.screen}>
            <div className={styles.header}>
                <span
                    className={styles.cancel}
                    onClick={() => router.push("/result")}
                >
                    Cancel
                </span>
                <span
                    className={styles.confirm}
                    onClick={() => router.push("/result")}
                >
                    Confirm
                </span>
            </div>
            <div className={styles.card}>
                <div className={styles.timeRow}>
                    <div className={styles.timeBlock}>
                        <div className={styles.icon} />
                        <div className={styles.label}>BEDTIME</div>
                        <div className={styles.time}>12:00 AM</div>
                    </div>
                    <div className={styles.timeBlock}>
                        <div className={styles.icon} />
                        <div className={styles.label}>WAKE UP</div>
                        <div className={styles.time}>7:00 AM</div>
                    </div>
                </div>
                <div className={styles.editRow}>
                    <div className={styles.editIcon} />
                    <span className={styles.editText}>Edit</span>
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
                <div className={styles.recommendation}>
                    Based on your sleep analysis result,
                    <br />I recommend <b>8 Hours</b> sleep time!
                </div>
            </div>
        </div>
    );
}
