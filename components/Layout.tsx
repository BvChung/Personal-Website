import React from "react";
import Nav from "./Nav";
import Footer from "./Footer";
import { Inter } from "@next/font/google";
import { useTheme } from "next-themes";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

type LayoutProps = {
	children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps) {
	const { theme } = useTheme();

	return (
		<main
			className={`${inter.className} ${theme === "dark" ? "dark" : "light"} `}
		>
			<div className="bg-gray-50 dark:bg-gray-900 min-h-screen h-full">
				<Nav />
				{children}
				{/* <Footer /> */}
			</div>
		</main>
	);
}
