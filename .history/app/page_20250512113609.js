"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import YellowButton from "@/ui/buttons/YellowButton";
import BlueButton from "@/ui/buttons/BlueButton";
import GrayButton from "@/ui/buttons/GrayButton";
import ProgressIndicator from "@/ui/progressIndicator/ProgressIndicator";
import styles from "./page.module.css";

export default function Home() {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <h1>Welcome to Sleepixie</h1>
        </div>
    );
}
