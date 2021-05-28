const { app, BrowserWindow } = require('electron');
// const { default: installExtension, VUEJS_DEVTOOLS } = require('electron-devtools-installer');
const path = require('path');

function createWindow() {
	const win = new BrowserWindow({
		width: 800,
		height: 600,
		webPreferences: {
			sandbox: false,
			// preload: path.join(__dirname, 'preload.js'),
			nodeIntegration: true,
			contextIsolation: false
		}
	})

	// win.loadURL('http://localhost:8080/');
	win.loadFile('index.html');
	win.webContents.openDevTools();
}

(async function bootstrap() {
	await app.whenReady();
	// await installExtension(VUEJS_DEVTOOLS);

	createWindow();
}());