export const getStackAssetPaths = () => {
	const imageModules = import.meta.glob('$lib/assets/stacks/*.svg', {
		as: 'raw'
	});

	const modulePaths: string[] = [];

	for (const modulePath in imageModules) {
		modulePaths.push(modulePath);
	}

	return modulePaths;
};
