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
		<div className="flex flex-col gap-4 md:flex-row md:items-center justify-between p-5 md:p-7 bg-white hover:bg-gray-100 dark:bg-gray2 border-gray-200 dark:border-transparent border-[1px] rounded-md dark:hover:border-blue1 hover:border-blue2 hover:bg-opacity-30 shadow-md transition-all">
			<div>
				<h2 className="mb-[14px] text-xl font-semibold text-gray-800 dark:text-gray-100">
					{title}
				</h2>
				<p
					className={`text-base font-medium text-gray-700 dark:text-gray-300 mb-[14px]`}
				>
					{description}
				</p>
				<div className="flex flex-col justify-center">
					<div className="flex items-center mb-2">
						<span className="text-sm font-medium mr-2 text-gray-700 dark:text-gray-200">
							Built With
						</span>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-5 h-5 stroke-gray-700 dark:stroke-gray-300"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z"
							/>
						</svg>
					</div>
					<div className="flex items-center gap-4">
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

			<div className="flex items-center gap-4">
				<div className="tooltip" data-tip="Source code">
					<a href={githubLink} target="_blank" rel="noopener noreferrer">
						<svg
							viewBox="0 0 24 24"
							aria-hidden="true"
							className="h-10 w-10 fill-gray-500 hover:fill-gray-700 dark:fill-white dark:hover:fill-gray-400 transition-colors"
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
						className="btn min-h-0 h-11 w-28 border-0
						bg-blue1 rounded-md hover:bg-blue2"
						href={demoLink}
						target="_blank"
						rel="noopener noreferrer"
					>
						<div className="flex items-center gap-2">
							<p className="normal-case font-medium text-base text-white">
								Demo
							</p>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={2}
								stroke="currentColor"
								className="w-4 h-4 stroke-white"
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
