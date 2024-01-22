/**
 * The preload script runs before. It has access to web APIs
 * as well as Electron's renderer process modules and some
 * polyfilled Node.js functions.
 *
 * https://www.electronjs.org/docs/latest/tutorial/sandbox
 */
const electron = require('electron');

const openUrl = () => {
  electron.ipcRenderer.send('open');
}

const fix = (s) => {
  electron.ipcRenderer.send('fix', s);
}

const preloadSDK = {
  openUrl,
  fix,
}

electron.contextBridge.exposeInMainWorld('preloadSDK', preloadSDK)