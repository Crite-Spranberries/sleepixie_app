"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import YellowButton from "@/ui/buttons/YellowButton";
import ProgressIndicator from "@/ui/progressIndicator/ProgressIndicator";
import styles from "../page.module.css";

export default function WelcomePage() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <h1>Welcome to Sleepixie!</h1>
        </div>
    );
}
