import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // 中身は空ですが、一旦残しておきます

// 1. フォントの読み込みを追加
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// 2. ブラウザのデフォルトスタイルをリセットする機能をインポート
import CssBaseline from '@mui/material/CssBaseline';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* 3. ここに CssBaseline を置くことで、画面全体の変な余白が消えます */}
    <CssBaseline />
    <App />
  </React.StrictMode>,
);
