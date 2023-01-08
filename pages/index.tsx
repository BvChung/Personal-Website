import Head from "next/head";
import Projects from "../components/Projects";
import { projectsArr } from "../config/config";

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
							<p className="text-xl font-bold text-blue1 dark:text-blue4 mb-2">
								Hi, my name is
							</p>
							<p className="text-5xl font-bold dark:text-white text-gray-900 mb-4">
								Brandon Chung.
							</p>
							<p className="text-gray-600 font-medium dark:text-gray-300 max-w-lg">
								I am an aspiring software engineer and currently a
								post-baccalaureate CS Major at the University of Houston.
							</p>
						</div>
					</div>

					<div>
						<h1 className="text-3xl text-gray-900 dark:text-white font-bold mb-6 pb-1 border-b-2 border-gray-200 dark:border-gray-500">
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
