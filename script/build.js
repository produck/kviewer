const { Arch, build, createTargets } = require('electron-builder');
const fs = require('fs').promises;
const path = require('path');
const lernaConfig = require('../lerna.json');

const WINDOW_PACKAGE_REG = /kviewer-window-(.*)/;
const ASSEMBLY_DIRECTORY = path.join(__dirname, '../app');
const WINDOW_NAMESPACE_DIRECTORY = path.join(ASSEMBLY_DIRECTORY, '_windows');

(async function() {
	/**
	 * Create a directory for assembly.
	 */
	await fs.rm(ASSEMBLY_DIRECTORY, { recursive: true, force: true });
	await fs.mkdir(ASSEMBLY_DIRECTORY);
	await fs.mkdir(WINDOW_NAMESPACE_DIRECTORY);

	/**
	 * Moving window resources in `dist` to `/app/window`.
	 */
	const windowList = lernaConfig.packages.filter(pathname => WINDOW_PACKAGE_REG.test(pathname));

	for (const windowDirname of windowList) {
		const windowPathname = path.join(__dirname, `../${windowDirname}`);
		// const packageJson = require(path.join(windowPathname, 'package.json'));
		const windowName = windowDirname.match(WINDOW_PACKAGE_REG)[1];

		const from = path.join(windowPathname, 'dist');
		const to = path.join(WINDOW_NAMESPACE_DIRECTORY, windowName);

		await fs.rename(from, to);
	}

	/**
	 * Moving main process resource into `/app`.
	 */

	/**
	 * Running electron-builder
	 */
	// await build();
}());