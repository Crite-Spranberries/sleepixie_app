"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import styles from "./page.module.css";

export default function Profile() {
    return (
        <div className={styles.screen}>
            <div className={styles.header}>
                <span className={styles.title}>Profile</span>
            </div>
            <div className={styles.card}>
                <div className={styles.profileRow}>
                    <div className={styles.profileBlock}>
                        <div className={styles.label}>Name</div>
                        <div className={styles.value}>John Doe</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
