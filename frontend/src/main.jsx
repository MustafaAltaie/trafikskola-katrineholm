import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './App/store.js';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Dashboard from './Dashboard.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <Routes>
          <Route path="/" element={ <App /> } />
          <Route path="/dashboard-secret-9xJq_v7Z-UltimateAccess88" element={ <Dashboard /> } />
        </Routes>
      </StrictMode>
    </BrowserRouter>
  </Provider>
);