import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Nav() {
	const [isMounted, setIsMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();
	useEffect(() => {
		setIsMounted(true);
	}, []);

	const navLink =
		"py-2 px-3 rounded-md dark:hover:border-gray-100 dark:hover:bg-gray-800";

	return (
		<header className="bg-opacity-80 bg-gray-50 dark:bg-gray2 border-b-[1px] dark:border-dark2 w-full fixed top-0">
			<div className="flex items-center justify-center">
				<nav className="flex items-center w-full h-16 py-4 px-2 max-w-3xl">
					<div className="flex justify-between w-full">
						<div className="flex items-center gap-5">
							<Link className={navLink} href="/">
								Home
							</Link>

							<Link className={navLink} href="/about">
								About
							</Link>

							<Link className={navLink} href="projects">
								Projects
							</Link>
						</div>

						<button
							onClick={() => {
								setTheme(resolvedTheme === "dark" ? "light" : "dark");
							}}
							className="flex items-center justify-center rounded-md bg-gray-200 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 p-2 transition-colors"
						>
							{isMounted && resolvedTheme === "dark" ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6 dark:stroke-white"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
									/>
								</svg>
							) : (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6 stroke-gray-900"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
									/>
								</svg>
							)}
						</button>
					</div>
				</nav>
			</div>
		</header>
	);
}
