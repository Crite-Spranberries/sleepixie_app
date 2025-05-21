"use client";

import { useState } from "react";
import Link from "next/link";
import YellowButton from "@/ui/buttons/YellowButton";
import BlueButton from "@/ui/buttons/BlueButton";
import GrayButton from "@/ui/buttons/GrayButton";

export default function Loading() {
    return (
        <div>
            <p className="test-text">Test Text</p>
            <YellowButton label="Sleep now" />
            <BlueButton label="Next" />
            <GrayButton label="Skip" />
        </div>
    );
}
