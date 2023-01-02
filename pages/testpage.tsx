import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import { Inter } from "@next/font/google";
const inter = Inter({ subsets: ["latin"] });

export default function testpage() {
	return (
		<div className="flex">
			test route
			<Link href="/" className={styles.card}>
				<h2 className={inter.className}>
					Deploy <span>-&gt;</span>
				</h2>
				<p className={inter.className}>
					Instantly deploy your Next.js site to a shareable URL
					with&nbsp;Vercel.
				</p>
			</Link>
		</div>
	);
}
