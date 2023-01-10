import React from "react";
import Link from "next/link";

export default function Custom404() {
	return (
		<div className="w-full h-screen flex flex-col items-center justify-center">
			<span className="font-medium text-lg text-gray-900 dark:text-white mb-4">
				<strong>404</strong> | This page could no be found
			</span>
			<Link
				href={"/"}
				className="btn btn-outline min-h-0 h-12 w-28 border-0 bg-blue1 rounded-md hover:bg-blue2 text-white"
			>
				Return
			</Link>
		</div>
	);
}
