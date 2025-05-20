import { useState, useEffect } from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const [toggleBtn, setToggleBtn] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth >= 1024) {
                setToggleBtn(false);
            }
        }

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <header>
            <div>
                <Link to='/dashboard-secret-9xJq_v7Z-UltimateAccess88'>
                    <div className='logoWrapper'>
                        <img src="/images/logo1.png" alt="Katrineholm" />
                    </div>
                </Link>
                <div className='navToggleButton' onClick={() => setToggleBtn(!toggleBtn)}>
                    <div style={{ transform: `translateY(${toggleBtn ? '400%' : '0'}) rotate(${ toggleBtn ? '45' : '0' }deg)` }}></div>
                    <div style={{ opacity: toggleBtn ? '0' : '1' }}></div>
                    <div style={{ transform: `translateY(${toggleBtn ? '-400%' : '0'}) rotate(${ toggleBtn ? '-45' : '0' }deg)` }}></div>
                </div>
            </div>
            <nav className={toggleBtn ? 'navOpened' : 'navClosed'}>
                <ul>
                    <li><Link to={'/dashboard-secret-9xJq_v7Z-UltimateAccess88'} className={location.pathname === '/dashboard-secret-9xJq_v7Z-UltimateAccess88' ? 'active' : ''}>Hem</Link></li>
                    <li><Link to={'/dashboard-secret-9xJq_v7Z-UltimateAccess88/priserSettings'} className={location.pathname === '/dashboard-secret-9xJq_v7Z-UltimateAccess88/priserSettings' ? 'active' : ''}>Priser</Link></li>
                    {/* <li><Link to={'/dashboard-secret-9xJq_v7Z-UltimateAccess88/riskutbildningSettings'} className={location.pathname === '/dashboard-secret-9xJq_v7Z-UltimateAccess88/riskutbildningSettings' ? 'active' : ''}>Riskutbildning</Link></li> */}
                    {/* <li><Link to={'/dashboard-secret-9xJq_v7Z-UltimateAccess88/handledarutbildningSettings'} className={location.pathname === '/dashboard-secret-9xJq_v7Z-UltimateAccess88/handledarutbildningSettings' ? 'active' : ''}>Handledarutbildning</Link></li> */}
                    <li><Link to={'/dashboard-secret-9xJq_v7Z-UltimateAccess88/intensivkursSettings'} className={location.pathname === '/dashboard-secret-9xJq_v7Z-UltimateAccess88/intensivkursSettings' ? 'active' : ''}>Intensivkurs</Link></li>
                    <li><Link to={'/dashboard-secret-9xJq_v7Z-UltimateAccess88/om-ossSettings'} className={location.pathname === '/dashboard-secret-9xJq_v7Z-UltimateAccess88/om-ossSettings' ? 'active' : ''}>Om Oss</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;