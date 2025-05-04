import '../styles/footer.css';
import { Link } from 'react-router-dom';
import FooterForm from './FooterForm';
import { useReadFooterTopLinksQuery, useReadFooterMiddleLinksQuery } from '../features/schoolsApi';

const Footer = () => {
    const { data: topLinks, isLoading } = useReadFooterTopLinksQuery();
    const { data: middleLinks, isMiddleLoading } = useReadFooterMiddleLinksQuery();

    return (
        <footer>
            <div className="footerMainWrapper flexColumn">
                <div className="footerTop flexColumn">
                    {isLoading && <p>Loading...</p>}
                    <div>
                        <p style={{  pointerEvents: topLinks?.mobile ? 'all' : 'none' }}><a href={topLinks?.mobile ? `tel:${topLinks?.mobile}` : '#'} target='_blank' rel='noopener noreferrer'><i className="fa-solid fa-phone-volume"></i></a></p>
                        <p style={{  pointerEvents: topLinks?.messenger ? 'all' : 'none' }}><a href={topLinks?.messenger ? `https://m.me/${topLinks?.messenger}` : '#'} target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-facebook-messenger"></i></a></p>
                        <p style={{  pointerEvents: topLinks?.location ? 'all' : 'none' }}><a href={topLinks?.location ? `https://www.google.com/maps?q=${topLinks?.location}` : '#'} target='_blank' rel='noopener noreferrer'><i className="fa-solid fa-location-dot"></i></a></p>
                    </div>
                    <p>Hitta oss snabbt</p>
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
                        <Link to='/om-oss'><p><span style={{ color: '#57d', fontWeight: 'bold' }}>Läs mer om oss ...</span></p></Link>
                    </div>

                    <FooterForm />
                </div>

                <div className="footerSocial flexColumn">
                    <p><span>Följ oss på:</span></p>
                    <div>
                        {isMiddleLoading && <p>Loading...</p>}
                        <p style={{ pointerEvents: middleLinks?.link1 ? 'all' : 'none' }}><a href={middleLinks?.link1 ? `https://www.instagram.com/${middleLinks?.link1}` : '#'} target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-instagram"></i></a></p>
                        <p style={{ pointerEvents: middleLinks?.link2 ? 'all' : 'none' }}><a href={middleLinks?.link2 ? `https://www.facebook.com/${middleLinks?.link2}` : '#'} target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-facebook-f"></i></a></p>
                        <p style={{ pointerEvents: middleLinks?.link3 ? 'all' : 'none' }}><a href={middleLinks?.link3 ? `` : '#'} target='_blank' rel='noopener noreferrer'><i className="fa-brands fa-facebook-messenger"></i></a></p>
                    </div>
                </div>

                <div className="footerLegal">
                        <p>© 2025 Trafikskola <span>Mohanad-Nasri/Katrineholm</span>-Trafikskola. Alla rättigheter förbehållna.</p>
                        <p><a href="/integritetspolicy"><span style={{ color: '#55f', fontWeight: 'bold' }}>Integritetspolicy</span></a> | <a href="/allmanna-villkor"><span style={{ color: '#55f', fontWeight: 'bold' }}>Allmänna villkor</span></a></p>
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