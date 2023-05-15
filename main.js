// Modules
const {app, BrowserWindow, ipcMain} = require('electron')

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow, catWindow

// Create a new BrowserWindow when `app` is ready
function createWindow () {

  mainWindow = new BrowserWindow({
    x: 0, y: 0,
    width: 500, height: 882,
    backgroundColor: 'gray',
    webPreferences: {
      // --- !! IMPORTANT !! ---
      // Disable 'contextIsolation' to allow 'nodeIntegration'
      // 'contextIsolation' defaults to "true" as from Electron v12
      contextIsolation: false,
      nodeIntegration: true
    }
  })

  

  // Load index.html into the new BrowserWindow
  mainWindow.loadFile('./renderer/main.html')

  // Open DevTools - Remove for PRODUCTION!
  mainWindow.webContents.openDevTools();
 
  // Listen for window being closed
  mainWindow.on('closed',  () => {
    mainWindow = null
  })
}
function createChildWindow ( cat){
  if(cat === "settings"){
    catWindow = new BrowserWindow({
      x:500,y: 0,
      width: 1000, height: 900,
      webPreferences: {
        contextIsolation: false, 
        nodeIntegration: true
      }
    })   
} else if (cat === 'quartermaster'){
  catWindow = new BrowserWindow({
    x:500,y: 0,
    width: 1000, height: 900,
    webPreferences: {
      contextIsolation: false, 
      nodeIntegration: true
    }
  }) 
} else if (cat === 'treasury'){
  catWindow = new BrowserWindow({
    x:500,y: 0,
    width: 1000, height: 900,
    webPreferences: {
      contextIsolation: false, 
      nodeIntegration: true
    }
  }) 
} else if (cat === 'secretary'){
  catWindow = new BrowserWindow({
    x:500,y: 0,
    width: 1000, height: 900,
    webPreferences: {
      contextIsolation: false, 
      nodeIntegration: true
    }
  }) 
} else{
  catWindow = new BrowserWindow({
    x:500,y: 0,
    width: 1000, height: 900,
    webPreferences: {
      contextIsolation: false, 
      nodeIntegration: true
    }
  }) 
}
console.log(cat)
catWindow.loadFile(`./renderer/categories/${cat}/${cat}.html`)
}

// Electron `app` is ready
app.whenReady().then(() =>{
  createWindow()

  app.on('activate', () => {
    if (mainWindow === null) createWindow()
  })
}) 


ipcMain.on('category', (e,args) => {
  createChildWindow(args)
  console.log(args)
})
// Quit when all windows are closed - (Not macOS - Darwin)
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})

// When app icon is clicked and app is running, (macOS) recreate the BrowserWindow
// app.on('activate', () => {
//   if (mainWindow === null) createWindow()
// })
