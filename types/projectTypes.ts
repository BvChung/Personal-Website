export type ProjectsInfo = {
	id: number;
	githubLink: string;
	demoLink: string;
	title: string;
	description: string;
	devIconArr: DevIconInfo[];
};

export type DevIconInfo = {
	id: number;
	webLink: string;
	imgSource: string;
	title: string;
};
