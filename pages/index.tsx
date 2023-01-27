import Head from "next/head";
import Projects from "../components/Projects";
import { projectsArr } from "../config/config";
import homeStyles from "../styles/Home.module.css";

export default function Home() {
	return (
		<>
			<Head>
				<title>Brandon Chung</title>
				<meta name="description" content="Personal Website" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="flex justify-center w-full px-2 md:px-0">
				<div
					className="flex flex-col w-full max-w-3xl px-4
				mt-40 mb-20"
				>
					<div className="flex items-center w-full mb-24">
						<div className="flex flex-col">
							<p className="text-2xl font-bold text-gray-800 dark:text-gray-200 mb-2">
								Hi, my name is
							</p>
							<p className="text-5xl font-bold dark:text-primary6 text-primary2 mb-4">
								Brandon Chung.
							</p>
							<p className="text-gray-700 font-medium dark:text-gray-300 max-w-lg">
								I am an aspiring software engineer and currently a
								post-baccalaureate CS Major at the University of Houston.
							</p>
						</div>
					</div>

					<div>
						<h1 className="text-3xl text-primary1 dark:text-primary6 font-bold mb-6 pb-1 border-b-[1px] border-gray-300 dark:border-gray-500">
							Projects
						</h1>

						<div className="grid gap-6 grid-cols-1">
							{projectsArr.map((project) => (
								<Projects
									key={project.id}
									id={project.id}
									description={project.description}
									devIconArr={project.devIconArr}
									demoLink={project.demoLink}
									githubLink={project.githubLink}
									title={project.title}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
