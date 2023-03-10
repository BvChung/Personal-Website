import React, { useState, useEffect } from "react";
import Nav from "./Nav";
import { Inter } from "@next/font/google";
import { useTheme } from "next-themes";

const inter = Inter({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
	preload: true,
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
			<div className="bg-gray1 dark:bg-dark2 min-h-full h-full">
				<Nav />
				{children}
			</div>
		</main>
	);
}
