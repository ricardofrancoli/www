export const getLibAssetPaths = () => {
	const imageModules = import.meta.glob('$lib/assets/*.svg', { as: 'raw' });

	const modulePaths: string[] = [];

	for (const modulePath in imageModules) {
		modulePaths.push(modulePath);
	}

	return modulePaths;
};
