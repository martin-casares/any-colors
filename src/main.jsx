import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { ColorProvider } from './ColorContext';

ReactDOM.createRoot(document.getElementById('root')).render(
	<ColorProvider>
		<App />
	</ColorProvider>
);
