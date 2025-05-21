"use client";

import styles from "./page.module.css";
import { useState } from "react";

export default function Profile() {
    const [darkMode, setDarkMode] = useState(true);
    const [pushNotifications, setPushNotifications] = useState(false);

    return (
        <div className={styles.screen}>
            <div className={styles.profileCard}>
                <FaUserCircle className={styles.avatar} />
                <div className={styles.profileTitle}>Profile</div>
                <div className={styles.profileName}>Jane</div>
            </div>

            <div className={styles.section}>
                <div className={styles.row}>
                    <span>Account Information</span>
                    <FaChevronRight />
                </div>
                <div className={styles.row}>
                    <span>Accessibility Settings</span>
                    <FaChevronRight />
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.row}>
                    <span>Dark Mode</span>
                    <label className={styles.switch}>
                        <input
                            type="checkbox"
                            checked={darkMode}
                            onChange={() => setDarkMode((v) => !v)}
                        />
                        <span className={styles.slider}></span>
                    </label>
                </div>
                <div className={styles.row}>
                    <span>Push Notifications</span>
                    <label className={styles.switch}>
                        <input
                            type="checkbox"
                            checked={pushNotifications}
                            onChange={() => setPushNotifications((v) => !v)}
                        />
                        <span className={styles.slider}></span>
                    </label>
                </div>
            </div>

            <div className={styles.section}>
                <div className={styles.row}>
                    <span>Frequently Asked Questions</span>
                    <FaChevronRight />
                </div>
                <div className={styles.row}>
                    <span>Feedback</span>
                    <FaChevronRight />
                </div>
                <div className={styles.row}>
                    <span>Policy</span>
                    <FaChevronRight />
                </div>
            </div>

            <div className={styles.version}>Version v0.0.1</div>
        </div>
    );
}
