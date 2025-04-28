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
                    <li><Link to={'/'}>Hem</Link></li>
                    <li><Link to={'/priser'}>Priser</Link></li>
                    <li><Link to={'/riskutbildning'}>Riskutbildning</Link></li>
                    <li><Link to={'/handledarutbildning'}>Handledarutbildning</Link></li>
                    <li><Link to={'/intensivkurs'}>Intensivkurs</Link></li>
                    {!location.pathname.includes('priser') &&
                    !location.pathname.includes('riskutbildning') &&
                    !location.pathname.includes('handledarutbildning') &&
                    !location.pathname.includes('intensivkurs') &&
                    !location.pathname.includes('om-oss') &&
                        <>
                            <li><a onClick={() => {scrollToSec3(); setToggleBtn(false)}}>Våra Utbildningar</a></li>
                            <li><a onClick={() => {scrollToSec4(); setToggleBtn(false)}}>Kontakta Oss</a></li>
                        </>
                    }
                    <li><Link to={'/om-oss'}>Om Oss</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;