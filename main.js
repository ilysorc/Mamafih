const electron = require('electron');
const path = require('path');
const url = require('url');
var newsite = require(path.join(__dirname, './app/js/newsite.js'));

const app = electron.app;

const browserWindow = electron.BrowserWindow;

let mainWindow;

function createWindow() {
    mainWindow = new browserWindow({ width: 900, height: 700, show: false });

    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname, './index.html'),
        protocol: 'file:',
        slashes: true
    }));

    mainWindow.once('ready-to-show', () => {
        mainWindow.show();
    });

    mainWindow.webContents.openDevTools();

    mainWindow.on('closed', function() {
        mainWindow = null
    });
}

app.on('ready', createWindow);