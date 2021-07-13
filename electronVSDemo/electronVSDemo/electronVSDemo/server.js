'use strict';

// Ӧ�õĿ���ģ��
const electron = require('electron');
const app = electron.app;

// ����ԭ����������ڵ�ģ��
const BrowserWindow = electron.BrowserWindow;
var mainWindow = null;

// �����д��ڶ��رյ�ʱ���˳�Ӧ��
app.on('window-all-closed', function () {
    if (process.platform != 'darwin') {
        app.quit();
    }
});

// �� Electron ������ʱ���������������Ч
// ��ʼ����׼���������������
app.on('ready', function () {

    // �������������.
    mainWindow = new BrowserWindow({
        //���ڴ�С
        width: 1080,
        height: 750
    });

    // ����Ӧ�õ� main.html
    mainWindow.loadURL('file://' + __dirname + '/app/main.html');

    // �򿪿�������
    // mainWindow.openDevTools();

    //���ſ���̨
    /*mainWindow.webContents.openDevTools({
        //����̨λ��
        mode:'bottom'
      });*/

    // ���ڹر�ʱ����
    mainWindow.on('closed', function () {
        // ��Ҫȡ�����ڶ�������ã�������Ӧ��֧�ֶര�ڣ�
        // ͨ������Ҫ�����еĴ��ڶ���洢��һ�������У�
        // �����ʱ����Ӧ��ɾ����Ӧ��Ԫ��
        mainWindow = null;
    });
});
