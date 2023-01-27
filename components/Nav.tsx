import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function Nav() {
	const [isMounted, setIsMounted] = useState(false);
	const { resolvedTheme, setTheme } = useTheme();
	useEffect(() => {
		setIsMounted(true);
	}, []);

	return (
		<header className="bg-opacity-95 bg-primary1 dark:bg-gray2 border-b-[1px] dark:border-dark2 w-full fixed top-0 z-10">
			<div className="flex items-center justify-center">
				<nav className="flex items-center w-full h-16 py-4 px-4 md:px-2 max-w-3xl">
					<div className="flex justify-between w-full">
						<div className="flex items-center gap-5">
							<a
								href="https://github.com/BvChung"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Link to personal github"
							>
								<svg
									viewBox="0 0 24 24"
									aria-hidden="true"
									className="h-10 w-10 fill-gray-300 hover:fill-gray-200 dark:fill-white dark:hover:fill-gray-400 transition-colors"
								>
									<path
										fillRule="evenodd"
										clipRule="evenodd"
										d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
									></path>
								</svg>
							</a>

							<a
								href="https://www.linkedin.com/in/brandon-chung-260821260/"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Link to personal linkedin"
							>
								<svg
									stroke="currentColor"
									fill="currentColor"
									strokeWidth={0}
									viewBox="0 0 448 512"
									className="h-10 w-10 fill-gray-300 hover:fill-gray-200 dark:fill-white dark:hover:fill-gray-400 transition-colors"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"></path>
								</svg>
							</a>
						</div>

						<button
							onClick={() => {
								setTheme(resolvedTheme === "dark" ? "light" : "dark");
							}}
							className="flex items-center justify-center rounded-md bg-gray-400 hover:bg-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 p-2 transition-colors"
							aria-label={`Enable ${
								isMounted && resolvedTheme === "dark" ? "light" : "dark"
							} mode`}
						>
							{isMounted && resolvedTheme === "dark" ? (
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									strokeWidth={1.5}
									stroke="currentColor"
									className="w-6 h-6 stroke-white"
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
									className="w-6 h-6 stroke-white"
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
