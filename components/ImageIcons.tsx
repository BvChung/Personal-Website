import React from "react";
import { DevIconInfo } from "../types/projectTypes";
import Image from "next/image";

export default function ImageIcons({ webLink, imgSource, title }: DevIconInfo) {
	return (
		<div className="tooltip" data-tip={title}>
			<a
				href={webLink}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Link to developer tool"
			>
				<Image
					width={32}
					height={32}
					className="h-8 w-8"
					alt="Developer tool icon"
					src={imgSource}
				/>
			</a>
		</div>
	);
}
