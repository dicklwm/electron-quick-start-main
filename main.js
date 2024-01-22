// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain, Menu } = require('electron')
const path = require('node:path')


// app.commandLine.appendSwitch('touch-events', 'enabled');

// let mainWindow: BrowserWindow;
let mainWindow;
function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    fullscreen: false,
    frame: true,
    // focusable: false,
    // type: 'toolbar',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    }
  })

  // mainWindow.webContents.openDevTools();

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()
  
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.
ipcMain.on('open', () => {

  console.log('open');
  const win = new BrowserWindow({
    fullscreen: true,
    transparent: true,
    resizable: false,
    show: false,
    // skipTaskbar: true,
    // parent: mainWindow,
    // focusable: false,
    // type: 'toolbar',
  });
  win.loadURL('https://www.google.com')
  win.addListener('ready-to-show', () => {
    win.show();
  })
  return win;
})

ipcMain.on('fix', (event, args) => {
  // mainWindow.setBounds({
  //   width: 810,
  //   height: 610,
  //   ...args,
  // })
  // mainWindow.flashFrame(true);
  const menu = new Menu();
  menu.popup();
  menu.closePopup();

  // mainWindow.webContents.addListener('input-event', (e, ine) => {
  //   if (ine.type === 'gestureTap') {
  //     console.log('input-event', ine);
  //   }
    
  // })
  // mainWindow.setEnabled(false);
  // setTimeout(() => {
  //   mainWindow.setEnabled(true);
  // }, 2000);
  // mainWindow.webContents.enableDeviceEmulation({
  //   screenPosition: 'mobile',
  // });
  // setTimeout(() => {
  //   mainWindow.webContents.disableDeviceEmulation();
  // }, 2000);
  // mainWindow.webContents.inp();
  // mainWindow.webContents.executeJavaScript('console.clear()')
  // mainWindow.webContents.executeJavaScriptInIsolatedWorld(999, {code: 'console.clear()'})
  // mainWindow.webContents.forcefullyCrashRenderer();
})