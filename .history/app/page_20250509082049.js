"use client";

import { useState } from "react";
import Link from "next/link";
import YellowButton from "@/ui/buttons/YellowButton";
import BlueButton from "@/ui/buttons/BlueButton";

export default function Loading() {
    return (
        <div>
            <YellowButton label="Sleep now" />
            <BlueButton label="Next" />
        </div>
    );
}
