"use client";

import "./globals.css";

export default function RootLayout({ children }) {
    return (
        <div className={styles.container}>
            <main className={styles.main}>{children}</main>
        </div>
    );
}
