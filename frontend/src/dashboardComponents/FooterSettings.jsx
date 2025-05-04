import '../styles/footer.css';
import { Link } from 'react-router-dom';
import FooterForm from '../components/FooterForm';
import { useEffect, useState } from 'react';
import {
    useUpdateFooterTopLinksMutation,
    useReadFooterTopLinksQuery,
    useUpdateFooterMiddleLinksMutation,
    useReadFooterMiddleLinksQuery
} from '../features/schoolsApi';

const Footer = () => {
    const [updateFooterTopLinks] = useUpdateFooterTopLinksMutation();
    const [updateFooterMiddleLinks] = useUpdateFooterMiddleLinksMutation();
    const { data: topLinks, isLoading } = useReadFooterTopLinksQuery();
    const { data: middleLinks, isMiddleLoading } = useReadFooterMiddleLinksQuery();

    const [topMenu, setTopMenu] = useState(false);
    const [footerTop, setFooterTop] = useState({
        mobile: '',
        messenger: '',
        location: ''
    });
    const [middleMenu, setMiddleMenu] = useState(false);
    const [footerMiddle, setFooterMiddle] = useState({
        link1: '',
        link2: '',
        link3: ''
    });

    useEffect(() => {
        if(!topLinks) return;

        setFooterTop({
            mobile: topLinks.mobile || '',
            messenger: topLinks.messenger || '',
            location: topLinks.location || ''
        });
    }, [topLinks]);

    useEffect(() => {
        if(!middleLinks) return;

        setFooterMiddle({
            link1: middleLinks.link1 || '',
            link2: middleLinks.link2 || '',
            link3: middleLinks.link3 || ''
        });
    }, [middleLinks]);

    const handlePrepareLinks = (e) => {
        setFooterTop(prev => ({
            ...prev, [e.target.name]: e.target.value
        }));
    }

    const handleUpdateTopLinks = async () => {
        try {
            const res = await updateFooterTopLinks(footerTop).unwrap();
            if (res) setTopMenu(false);
        } catch (error) {
            console.error('Update failed:', error);
            alert('Fel uppstod vid uppdateringen.');
        }
    }

    const handleLocationText = (e) => {
        const newText = e.target.value.replace(/[^a-zA-Z0-9]/g, '+');
        const nameTarget = e.target.name;
        setFooterTop(prev => ({
            ...prev, [nameTarget]: newText
        }));
    }

    // Middle settings

    const handlePrepareMiddleLinks = (e) => {
        setFooterMiddle(prev => ({
            ...prev, [e.target.name]: e.target.value
        }));
    }

    const handleUpdateMiddleLinks = async () => {
        try {
            const res = await updateFooterMiddleLinks(footerMiddle);
            if (res) setMiddleMenu(false);
        } catch (err) {
            console.error('Update failed', err);
            alert('Fel uppstod vid uppdateringen.');
        }
    }

    return (
        <footer>
            <div className="footerMainWrapper flexColumn">
                <div className="footerTop flexColumn">
                    {isLoading && <p>Loading...</p>}
                    <div>
                        <h2 className='footerSettingsButton' onClick={() => setTopMenu(!topMenu)}>🖋️</h2>
                        <p style={{  pointerEvents: footerTop.mobile ? 'all' : 'none' }}><a href={footerTop.mobile ? `tel:${footerTop.mobile}` : '#'} target='_blank' rel='noopener noreferrer'><i className="fa-solid fa-phone-volume"></i></a></p>
                        <p style={{  pointerEvents: footerTop.messenger ? 'all' : 'none' }}><a href={footerTop.messenger ? `https://m.me/${footerTop.messenger}` : '#'} target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-facebook-messenger"></i></a></p>
                        <p style={{  pointerEvents: footerTop.location ? 'all' : 'none' }}><a href={footerTop.location ? `https://www.google.com/maps?q=${footerTop.location}` : '#'} target='_blank' rel='noopener noreferrer'><i className="fa-solid fa-location-dot"></i></a></p>
                    </div>
                    <p>Hitta oss snabbt</p>
                </div>

                <div className={!topMenu ? "footerTopSettings flexColumn" : "footerTopSettings flexColumn footerTopSettingsOn"}>
                    <input className='styledInput1' type="number" placeholder='Nummer' name='mobile' value={footerTop.mobile} onChange={handlePrepareLinks} />
                    <input className='styledInput1' type="text" placeholder='Messenger länk' name='messenger' value={footerTop.messenger} onChange={handlePrepareLinks} />
                    <input className='styledInput1' type="text" placeholder='Adress' name='location' value={footerTop.location} onChange={e => handleLocationText(e)} />
                    <button className='styledInput1' onClick={handleUpdateTopLinks}>Updatera</button>
                </div>

                <div className='footerMiddleMainWrapper'>
                    <div className="footerMiddle">
                        <div className="footerInfo flexColumn">
                            <p><i className="fa-solid fa-phone-volume"></i>0737025139</p>
                            <p><i className="fa-solid fa-coins"></i><span>Swish:</span> 123 354 20 65</p>
                            <p><i className="fa-solid fa-credit-card"></i><span>Bankgiro:</span> 135-5031</p>
                            <p><i className="fa-solid fa-location-dot"></i>Torshällavägen 39 63344 Eskilstuna</p>
                            <p><i className="fa-solid fa-car-side"></i><span>Körning:</span> Mån-Fre 08:00-18:00</p>
                        </div>
                    </div>

                    <div className="footerAbout">
                        <p><span>Katrineholm-Eskilstuna Trafikskola</span> ligger i nära Eskilstuna centrum 9 minuter buss linje 1 vid Busshållplats Munktellsgan och nära Trafikverket förarprov 10 minuter med foten.Vår målsättning är att erbjuda en lugn och trivsam studiemiljö med modern utrustning.</p>
                        <Link to='/dashboard-secret-9xJq_v7Z-UltimateAccess88/om-ossSettings'><p><span style={{ color: '#57d', fontWeight: 'bold' }}>Läs mer om oss ...</span></p></Link>
                    </div>

                    <FooterForm />
                </div>

                <div className="footerSocial flexColumn">
                    <p>Följ oss på:</p>
                    <h2 className='footerSettingsButton' onClick={() => setMiddleMenu(!middleMenu)}>🖋️</h2>
                    <div>
                        {isMiddleLoading && <p>Loading...</p>}
                        <p style={{ pointerEvents: middleLinks?.link1 ? 'all' : 'none' }}><a href={middleLinks?.link1 ? `https://www.instagram.com/${middleLinks?.link1}` : '#'} target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-instagram"></i></a></p>
                        <p style={{ pointerEvents: middleLinks?.link2 ? 'all' : 'none' }}><a href={middleLinks?.link2 ? `https://www.facebook.com/${middleLinks?.link2}` : '#'} target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-facebook-f"></i></a></p>
                        <p style={{ pointerEvents: middleLinks?.link3 ? 'all' : 'none' }}><a href={middleLinks?.link3 ? `` : '#'} target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-facebook-messenger"></i></a></p>
                    </div>
                    <div className={!middleMenu ? "footerMiddleSettings flexColumn" : "footerMiddleSettings flexColumn footerMiddleSettingsOn"}>
                        <input className='styledInput1' type="text" placeholder='Instagram' name='link1' value={footerMiddle.link1} onChange={handlePrepareMiddleLinks} />
                        <input className='styledInput1' type="text" placeholder='Facebook' name='link2' value={footerMiddle.link2} onChange={handlePrepareMiddleLinks} />
                        <input className='styledInput1' type="text" placeholder='Messenger' name='link3' value={footerMiddle.link3} onChange={handlePrepareMiddleLinks} />
                        <button className='styledInput1' onClick={handleUpdateMiddleLinks}>Updatera</button>
                    </div>
                </div>

                <div className="footerLegal">
                    <p>© 2025 Trafikskola <span>Mohanad-Nasri/Katrineholm</span>-Trafikskola. Alla rättigheter förbehållna.</p>
                    <p><span style={{ color: '#55f', fontWeight: 'bold' }}><Link to='/integritetspolicy' style={{ fontWeight: 'inherit' }}>Integritetspolicy</Link></span> | <span style={{ color: '#55f', fontWeight: 'bold' }}><Link to='/villkor' style={{ fontWeight: 'inherit' }}>Allmänna villkor</Link></span></p>
                </div>

                <div className="footerDeveloper">
                    <a href="https://www.linkedin.com/in/mustafa-altaie-b35356178" target="_blank">
                        <p>Webbutveckling av Mustafa Altaie | Fullstack Developer</p>
                    </a>
                </div>
            </div>
        </footer>
    )
}

export default Footer;