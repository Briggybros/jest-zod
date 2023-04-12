const {build} = require('esbuild');
const {peerDependencies} = require('./package.json');

const sharedConfig = {
	entryPoints: ['src/index.ts'],
	bundle: true,
	minify: true,
	external: Object.keys(peerDependencies),
};

build({
	...sharedConfig,
	platform: 'node',
	outfile: 'dist/index.cjs',
});

build({
	...sharedConfig,
	outfile: 'dist/index.mjs',
	platform: 'neutral',
	format: 'esm',
});
