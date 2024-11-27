import React from 'react';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
import Popup from '@/popup';
// 引入自定义全局公用样式import
import '@/common/styles/global.css';
import { createRoot } from 'react-dom/client';

const antdConfig = { locale: zhCN };

const container = document.getElementById('app');
const root = createRoot(container); // createRoot(container!) if you use TypeScript
root.render(
    <ConfigProvider {...antdConfig}>
        <Popup />
    </ConfigProvider>
);
