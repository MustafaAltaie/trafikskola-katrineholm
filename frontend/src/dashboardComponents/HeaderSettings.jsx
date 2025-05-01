import { useState } from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = ({ scrollToSec3, scrollToSec4 }) => {
    const [toggleBtn, setToggleBtn] = useState(false);
    const location = useLocation();

    return (
        <header>
            <div>
                <div>
                    <p>LOGO IMAGE</p>
                </div>
                <div className='navToggleButton' onClick={() => setToggleBtn(!toggleBtn)}>
                    <div style={{ transform: `translateY(${toggleBtn ? '400%' : '0'}) rotate(${ toggleBtn ? '45' : '0' }deg)` }}></div>
                    <div style={{ opacity: toggleBtn ? '0' : '1' }}></div>
                    <div style={{ transform: `translateY(${toggleBtn ? '-400%' : '0'}) rotate(${ toggleBtn ? '-45' : '0' }deg)` }}></div>
                </div>
            </div>
            <nav className={toggleBtn ? 'navOpened' : ''}>
                <ul>
                    <li><Link to={'/dashboard-secret-9xJq_v7Z-UltimateAccess88'} className={location.pathname === '/dashboard-secret-9xJq_v7Z-UltimateAccess88' ? 'active' : ''}>Hem</Link></li>
                    <li><Link to={'/priserSettings'} className={location.pathname === '/priserSettings' ? 'active' : ''}>Priser</Link></li>
                    <li><Link to={'/riskutbildningSettings'} className={location.pathname === '/riskutbildningSettings' ? 'active' : ''}>Riskutbildning</Link></li>
                    <li><Link to={'/handledarutbildningSettings'} className={location.pathname === '/handledarutbildningSettings' ? 'active' : ''}>Handledarutbildning</Link></li>
                    <li><Link to={'/intensivkursSettings'} className={location.pathname === '/intensivkursSettings' ? 'active' : ''}>Intensivkurs</Link></li>
                    <li><Link to={'/om-ossSettings'} className={location.pathname === '/om-ossSettings' ? 'active' : ''}>Om Oss</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;