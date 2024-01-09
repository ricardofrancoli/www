const cssnano = require('cssnano');
const atImport = require('postcss-import');
const postcssMixins = require('postcss-mixins');
const postcssPresetEnv = require('postcss-preset-env');
const postcssCustomMedia = require('postcss-custom-media');
const autoprefixer = require('autoprefixer');

module.exports = {
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
		postcssCustomMedia(),
		autoprefixer()
	]
};
