import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Inter } from "@next/font/google";
import { useTheme } from "next-themes";

const inter = Inter({
	subsets: ["latin"],
});

type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	const [isMounted, setIsMounted] = useState(false);
	const { resolvedTheme } = useTheme();
	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<main
			className={`${inter.className} ${
				isMounted && resolvedTheme === "dark" ? "dark" : "light"
			} `}
			data-theme="light"
		>
			<div className="bg-white dark:bg-dark2 min-h-full h-full">
				<Nav />
				{children}
				{/* <Footer /> */}
			</div>
		</main>
	);
}
