import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Layout from "../components/Container";
import Head from "next/head";

export default function Home() {
	return (
		<>
			<Head>
				<title>Create Next App</title>
				<meta name="description" content="Generated by create next app" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex justify-center w-full">
				<div
					className="flex flex-col w-full max-w-3xl px-4
				mt-20"
				>
					<div className="flex items-center justify-between mb-20">
						<div className="flex flex-col max-w-md">
							<p className="text-4xl font-semibold dark:text-white text-gray-900 mb-2">
								Hello, I'm Brandon Chung
							</p>
							<p className="text-gray-600 dark:text-gray-400">
								Aspiring software engineer and currently a CS Major at the
								University of Houston.
							</p>
						</div>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
							/>
						</svg>
					</div>

					<div className="">
						<h1 className="text-2xl font-medium mb-6 pb-1 border-b-[1px] border-gray-500">
							Projects
						</h1>

						<div className="grid gap-4 grid-cols-1">
							<a
								href="https://github.com/BvChung/ModernfyDesign-frontend"
								className="p-4 border-gray-500 border-[1px] rounded-md hover:border-gray-600 hover:bg-gray-800 hover:bg-opacity-30 transition-colors"
								target="_blank"
								rel="noopener noreferrer"
							>
								<h2 className="mb-3 font-semibold">ModernfyDesign Frontend</h2>
								<p className="text-sm font-semibold text-gray-400 mb-3">
									Frontend of an online modern furniture store.
								</p>
								<div className="flex items-center">
									<div className="text-sm font-semibold text-gray-400 mr-3">
										Built with:
									</div>
									<div className="flex items-center gap-3">
										<img
											className="h-8 w-8"
											src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
										/>
										<img
											className="h-8 w-8"
											src="https://tailwindcss.com/_next/static/media/tailwindcss-mark.79614a5f61617ba49a0891494521226b.svg"
										/>
									</div>
								</div>
							</a>

							<a
								href="https://github.com/BvChung/ModernfyDesign-frontend"
								className={styles.card}
								target="_blank"
								rel="noopener noreferrer"
							>
								<h2>ModernfyDesign Backend</h2>
								<p>Backend REST API of an online modern furniture store.</p>
							</a>

							<a
								href="https://github.com/BvChung/ModernfyDesign-frontend"
								className={styles.card}
								target="_blank"
								rel="noopener noreferrer"
							>
								<h2 className="mb-2 font-semibold">Groupcord</h2>
								<p>Full stack group chat web application.</p>
							</a>

							<a
								href="https://github.com/BvChung/ModernfyDesign-frontend"
								className={styles.card}
								target="_blank"
								rel="noopener noreferrer"
							>
								<h2>Sticky note</h2>
								<p>Note taking application.</p>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
