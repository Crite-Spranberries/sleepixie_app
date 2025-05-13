"use client";

import { useState } from "react";
import Link from "next/link";
import YellowButton from "@/ui/buttons/YellowButton";
import BlueButton from "@/ui/buttons/BlueButton";
import GrayButton from "@/ui/buttons/GrayButton";
import Layout from "@/app/layout";
import StatusBar from "./components/StatusBar/StatusBar";

export default function Loading() {
    return (
        <Layout>
            <StatusBar />
            <div className="content">
                <YellowButton label="Sleep now" />
                <BlueButton label="Next" />
                <GrayButton label="Skip" />
            </div>
        </Layout>
    );
}
