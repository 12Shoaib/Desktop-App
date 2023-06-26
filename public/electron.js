const electron = require("electron");
const { app, BrowserWindow } = electron;
const path = require("path");
const isDev = require('electron-is-dev');

let mainWindow = null;
app.on("ready", createWindow );
app.on("window-all-closed", function () {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
app.on("activate", function () {
  if (mainWindow === null) {
    createWindow();
  }
});
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 600,
    height: 400,
    title: "My-First-Electron",
    webPreferences:{
      nodeIntegration:true,
      contextIsolation: false
    }
  });
  const indexPath = isDev ? 'http://localhost:3000' : `${path.join(__dirname, '../build/index.html')}`
  console.log(indexPath)
  mainWindow.loadURL(isDev ? 'http://localhost:3000' : `${path.join(__dirname, '../build/index.html')}`);
  mainWindow.on("closed", function () {
    mainWindow = null;
  });
  mainWindow.on("page-title-updated", function (e) {
    e.preventDefault();
  });

  mainWindow.webContents.openDevTools()
}

