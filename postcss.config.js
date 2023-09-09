import cssnano from 'cssnano';
import atImport from 'postcss-import';
import postcssPresetEnv from 'postcss-preset-env';

export default {
	plugins: [
		cssnano({ preset: 'default' }),
		atImport(),
		postcssPresetEnv({
			stage: 3,
			features: {
				'nesting-rules': true,
				'custom-media-queries': true,
				'media-query-ranges': true
			}
		})
		// TODO: add autoprefixer?
	]
};
