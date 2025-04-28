import { useState } from 'react';
import '../styles/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const [toggleBtn, setToggleBtn] = useState(false);

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
                    <li><Link to={'/booking'}>Boka - Avboka</Link></li>
                    <li><Link to={'/prices'}>Priser</Link></li>
                    <li><Link to={'/riskEducation'}>Riskutbildning</Link></li>
                    <li><Link to={'/supervisorEducation'}>Handledarutbildning</Link></li>
                    <li><Link to={'/intensivecourse'}>Intensivkurs</Link></li>
                    <li><Link to={'/contact'}>Kontakta Oss</Link></li>
                    <li><Link to={'/about'}>Om Oss</Link></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;