"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

import YellowFilledButton from "@/ui/buttons/YellowFilledButton";
import styles from "./page.module.css";

export default function Result() {
    return (
        <main className={styles.container}>
            <YellowFilledButton label="Get Started!😴" />
        </main>
    );
}
