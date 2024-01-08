import cssnano from 'cssnano';
import atImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';
import postcssPresetEnv from 'postcss-preset-env';
import postcssCustomMedia from 'postcss-custom-media';

export default {
	plugins: [
		cssnano({ preset: 'default' }),
		atImport(),
		postcssMixins(),
		postcssPresetEnv({
			stage: 3,
			features: {
				'nesting-rules': true,
				'custom-media-queries': true,
				'media-query-ranges': true
			}
		}),
		postcssCustomMedia()
		// TODO: add autoprefixer?
	]
};
