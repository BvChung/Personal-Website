import React from "react";
import { DevIconInfo } from "../types/projectTypes";

export default function ImageIcons({ webLink, imgSource, title }: DevIconInfo) {
	return (
		<div className="tooltip" data-tip={title}>
			<a
				href={webLink}
				target="_blank"
				rel="noopener noreferrer"
				aria-aria-label="Link to developer tool"
			>
				<img className="h-8 w-8" alt="Developer tool icon" src={imgSource} />
			</a>
		</div>
	);
}
