//采用javascript严格模式
'use strict';
 
const {app, BrowserWindow, BrowserView, WebContentsView, session } = require('electron')
const path = require('path')

// 保持对window对象的全局引用，如果不这么做的话，当JavaScript对象被
// 垃圾回收的时候，window对象将会自动的关闭
let win

function createWindow () {  
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true, // enable node processes in electron app
      nodeIntegrationInWorker: true, // enable node processes in web workers
      contextIsolation: false // separate context btw internal logic and website in webContents (make 'require' work)
    }
  })

  session.defaultSession.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) huya-pc exe/8.0.0.0 Chrome/126.0.6478.234 Webview2/31.7.6 Safari/537.36');

  // win.loadURL('https://test-hd.huya.com/h5/huya-kiwi-demo-vite/test/index.html')

  win.loadURL('https://www.huya.com/')
 
  //win.loadFile('main.html') 

  //win.webContents.openDevTools()

  //创建对象
  // const view = new BrowserView()
  // //设置到主窗口
  // win.setBrowserView(view)
  // view.webContents.loadURL('https://test-hd.huya.com/h5/huya-kiwi-demo-vite/test/index.html')

  // // 设置 BrowserView 在主窗口的初始位置和大小
  // view.setBounds({ x: 0, y: 0, width: 800, height: 600 });

  // // 当窗口大小变化时，更新 BrowserView 的大小
  // win.on('resize', () => {
  //   const [width, height] = win.getSize(); // 获取窗口的新大小
  //   view.setBounds({ x: 0, y: 0, width, height }); // 设置 BrowserView 的新大小
  // });

 // 创建 WebContentsView
//  const view = new WebContentsView();

//  // 将 WebContentsView 设置为主窗口的视图
//  win.setContentView(view);

//  // 获取 WebContents 对象并加载 URL
//  const webContents = view.webContents;
//  webContents.loadURL('https://test-hd.huya.com/h5/huya-kiwi-demo-vite/test/index.html');

// //  const customUserAgent = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) huya-pc exe/8.0.0.0 Chrome/126.0.6478.234 Webview2/31.7.6 Safari/537.36';
// //  webContents.setUserAgent(customUserAgent); 

//  // 设置 WebContentsView 在主窗口的初始位置和大小
//  view.setBounds({ x: 0, y: 0, width: 800, height: 600 });

//  // 当窗口大小变化时，更新 WebContentsView 的大小
//  win.on('resize', () => {
//    const [width, height] = win.getSize(); // 获取窗口的新大小
//    view.setBounds({ x: 0, y: 0, width, height }); // 设置 WebContentsView 的新大小
//  });
   
  win.on('closed', () => {    
    win = null
  })
}

// Electron 会在初始化后并准备
// 创建浏览器窗口时，调用这个函数。
// 部分 API 在 ready 事件触发后才能使用。
app.on('ready', ()=>{
  createWindow()
  // const userAgent = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) huya-pc exe/8.0.0.0 Chrome/126.0.6478.234 WebView2/31.7.6 Safari/537.36"; // 你想设置的全局 UA
  // session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
  //     details.requestHeaders['User-Agent'] = userAgent;
  //     callback({ cancel: false, requestHeaders: details.requestHeaders });
  // });
})

// 当全部窗口关闭时退出。
app.on('window-all-closed', () => { 
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})




