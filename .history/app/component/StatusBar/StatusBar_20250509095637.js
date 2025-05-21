"use client";

import styles from "./StatusBar.module.css";

export default function StatusBar() {
    return (
        <div className={styles.statusBar}>
            <div className={styles.time}>9:41</div>
            <div className={styles.icons}>
                <span className={styles.signal}></span>
                <span className={styles.wifi}></span>
                <span className={styles.battery}></span>
            </div>
        </div>
    );
}
