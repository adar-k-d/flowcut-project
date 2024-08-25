

const { app, BrowserWindow } = require('electron');
const { exec } = require('child_process');
const path = require('path');

function createWindow() {
    // Hide desktop icons
    toggleDesktopIcons('hide');

    let mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        //frame: false,
       // transparent: true,
        //fullscreen: true,
        //type: 'desktop' 
        webPreferences: {
        nodeIntegration:true,
        contextIsolation:false,
        enableRemoteModule: true
        
        }
    });

    mainWindow.loadFile('index.html');
    mainWindow.webContents.openDevTools(); // DEV TOOLS REMOVE BEFORE EXECUTION

    mainWindow.setPosition(0, 0);

    mainWindow.on('closed', function () {
        // Show desktop icons
        toggleDesktopIcons('show');
        mainWindow = null;
    });
}

function toggleDesktopIcons(action) {
    const scriptPath = path.join(__dirname, 'hide_ico.py').replace(/\\/g, '\\\\');
    exec(`python "${scriptPath}" ${action}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error executing Python script: ${error.message}`);
            return;
        }
        if (stderr) {
            console.error(`Python script stderr: ${stderr}`);
            return;
        }
        console.log(`Python Script Output: ${stdout}`);
    });
}

app.whenReady().then(createWindow);
