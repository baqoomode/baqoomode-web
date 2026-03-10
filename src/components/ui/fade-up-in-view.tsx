"use client";

import type { ReactNode } from "react";
import { motion } from "framer-motion";

interface FadeUpInViewProps {
    children: ReactNode;
    className?: string;
    amount?: number;
    delay?: number;
    duration?: number;
}

export function FadeUpInView({
    children,
    className,
    amount = 0.2,
    delay = 0,
    duration = 0.8,
}: FadeUpInViewProps) {
    return (
        <motion.div
            className={className}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount }}
            transition={{ duration, delay }}
        >
            {children}
        </motion.div>
    );
}