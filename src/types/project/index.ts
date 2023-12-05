type Links = {
	live?: string;
	github: string;
};

export type ScreenshotHrefs = {
	portrait: string;
	landscape: string;
};

export type Project = {
	title: string;
	description: string;
	links: Links;
	screenshotHrefs: ScreenshotHrefs;
};
