import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import { store } from './App/store.js';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.jsx';
import Dashboard from './Dashboard.jsx';
import PricesPage from './components/PricesPage.jsx';
import RiskPage from './components/RiskPage.jsx';
import SupervisorPage from './components/SupervisorPage.jsx';
import IntensivePage from './components/IntensivePage.jsx';
import AboutPage from './components/AboutPage.jsx';
import PricesPageSettings from './dashboardComponents/PricesPageSettings.jsx';
import IntensivePageSettings from './dashboardComponents/IntensivePageSettings.jsx';
import AboutPageSettings from './dashboardComponents/AboutPageSettings.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
      <StrictMode>
        <Routes>
          <Route path="/" element={ <App /> } />
          <Route path="/dashboard-secret-9xJq_v7Z-UltimateAccess88" element={ <Dashboard /> } />
          <Route path="/priser" element={ <PricesPage /> } />
          <Route path="/riskutbildning" element={ <RiskPage /> } />
          <Route path="/handledarutbildning" element={ <SupervisorPage /> } />
          <Route path="/intensivkurs" element={ <IntensivePage /> } />
          <Route path="/om-oss" element={ <AboutPage /> } />
          <Route path="/dashboard-secret-9xJq_v7Z-UltimateAccess88/priserSettings" element={ <PricesPageSettings /> } />
          <Route path="/dashboard-secret-9xJq_v7Z-UltimateAccess88/intensivkursSettings" element={ <IntensivePageSettings /> } />
          <Route path="/dashboard-secret-9xJq_v7Z-UltimateAccess88/om-ossSettings" element={ <AboutPageSettings /> } />
        </Routes>
      </StrictMode>
    </BrowserRouter>
  </Provider>
);