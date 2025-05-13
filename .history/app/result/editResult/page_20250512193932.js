"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import YellowFilledButton from "@/ui/buttons/YellowFilledButton";
import styles from "./page.module.css";
import resultClock from "@/ui/images/result_clock.png";

export default function EditResult() {
    const router = useRouter();

    return (
        <div className={styles.screen}>
            <div className={styles.header}>
                <span className={styles.cancel}>Cancel</span>
                <span className={styles.confirm}>Confirm</span>
            </div>
            <div className={styles.card}>
                <div className={styles.timeRow}>
                    <div className={styles.timeBlock}>
                        <FaBed className={styles.icon} />
                        <div className={styles.label}>BEDTIME</div>
                        <div className={styles.time}>12:00 AM</div>
                    </div>
                    <div className={styles.timeBlock}>
                        <FaClock className={styles.icon} />
                        <div className={styles.label}>WAKE UP</div>
                        <div className={styles.time}>7:00 AM</div>
                    </div>
                </div>
                <div className={styles.editRow}>
                    <FaEdit className={styles.editIcon} />
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
            </div>
        </div>
    );
}
