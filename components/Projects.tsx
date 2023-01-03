import React, { useId } from "react";
import ImageIcons from "./ImageIcons";
import { ProjectsInfo } from "../types/projectTypes";

export default function Projects({
	demoLink,
	description,
	devIconArr,
	githubLink,
	title,
}: ProjectsInfo) {
	return (
		<div className="flex flex-col md:flex-row md:items-center justify-between p-4 border-gray-500 border-[1px] rounded-md hover:border-gray-600 hover:bg-gray-800 hover:bg-opacity-30 transition-colors">
			<div className="">
				<h2 className="mb-3 text-lg font-semibold">{title}</h2>
				<p className="text-sm font-medium text-gray-300 mb-3">{description}</p>
				<div className="flex items-center">
					<div className="text-sm font-medium text-gray-400 mr-3">
						Built with:
					</div>
					<div className="flex items-center gap-3">
						{devIconArr.map((el) => (
							<ImageIcons
								key={useId()}
								imgSource={el.imgSource}
								webLink={el.webLink}
								title={el.title}
							/>
						))}
					</div>
				</div>
			</div>

			<div className="flex items-center gap-3">
				<div className="tooltip" data-tip="Source code">
					<a href={githubLink} target="_blank" rel="noopener noreferrer">
						<svg
							viewBox="0 0 24 24"
							aria-hidden="true"
							className="h-10 w-10 fill-gray-800 dark:fill-white dark:hover:fill-gray-400 transition-colors"
						>
							<path
								fillRule="evenodd"
								clipRule="evenodd"
								d="M12 2C6.477 2 2 6.463 2 11.97c0 4.404 2.865 8.14 6.839 9.458.5.092.682-.216.682-.48 0-.236-.008-.864-.013-1.695-2.782.602-3.369-1.337-3.369-1.337-.454-1.151-1.11-1.458-1.11-1.458-.908-.618.069-.606.069-.606 1.003.07 1.531 1.027 1.531 1.027.892 1.524 2.341 1.084 2.91.828.092-.643.35-1.083.636-1.332-2.22-.251-4.555-1.107-4.555-4.927 0-1.088.39-1.979 1.029-2.675-.103-.252-.446-1.266.098-2.638 0 0 .84-.268 2.75 1.022A9.607 9.607 0 0 1 12 6.82c.85.004 1.705.114 2.504.336 1.909-1.29 2.747-1.022 2.747-1.022.546 1.372.202 2.386.1 2.638.64.696 1.028 1.587 1.028 2.675 0 3.83-2.339 4.673-4.566 4.92.359.307.678.915.678 1.846 0 1.332-.012 2.407-.012 2.734 0 .267.18.577.688.48 3.97-1.32 6.833-5.054 6.833-9.458C22 6.463 17.522 2 12 2Z"
							></path>
						</svg>
					</a>
				</div>

				{demoLink && (
					<a
						className="btn btn-sm"
						href={demoLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="flex items-center gap-2">
							<p className="normal-case">Demo</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={1.5}
								stroke="currentColor"
								className="w-5 h-5"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
								/>
							</svg>
						</div>
					</a>
				)}
			</div>
		</div>
	);
}
