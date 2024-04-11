const { app, BrowserWindow } = require('electron');

function createWindow() {
    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        frame: false, //on running set frame as false
        //transparent: true,
       
    });

    mainWindow.loadFile('index.html');

    // Set the window to fullscreen
    mainWindow.setFullScreen(true);

    mainWindow.on('closed', function () {
        mainWindow = null;
    });
}

app.whenReady().then(createWindow);
