const { app, BrowserWindow,ipcMain } = require('electron')
const { hide_Icons,show_Icons } = require('./script1');
/*
const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {

  createWindow()

  ipcMain.on('run-python-script', () => {
    hideDesktopIcons();
  })
})

    // Listen for the window-all-closed event
app.on('before-quit', () => {
    unhideDesktopIcons();
});
*/
let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({ width: 800, height: 600 });
    mainWindow.loadFile('index.html');

    ipcMain.on('hide-desktop-icons', () => {
        hide_Icons();
    });
    app.on('before-quit', () => {
        show_Icons();
  });
});
