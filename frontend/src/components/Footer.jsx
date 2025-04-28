import '../styles/footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footerMainWrapper flexColumn">
                <div className="footerTop flexColumn">
                    <div>
                        <p><i className="fa-solid fa-phone-volume"></i></p>
                        <p><i className="fa-brands fa-facebook-messenger"></i></p>
                        <p><i className="fa-solid fa-location-dot"></i></p>
                    </div>
                    <p>Hitta oss snabbt</p>
                </div>

                <div className="footerMiddle">
                    <div className="footerInfo flexColumn">
                        <p><i className="fa-solid fa-phone-volume"></i>0737025139</p>
                        <p><i className="fa-solid fa-coins"></i><span>Swish:</span> 123 354 20 65</p>
                        <p><i className="fa-solid fa-credit-card"></i><span>Bankgiro:</span> 135-5031</p>
                        <p><i className="fa-solid fa-location-dot"></i>Torshällavägen 39 63344 Eskilstuna</p>
                        <p><i className="fa-solid fa-car-side"></i><span>Körning:</span> Mån-Fre 08:00-18:00</p>
                    </div>
                    <div className="footerAbout">
                        <p><span>Katrineholm-Eskilstuna Trafikskola</span> ligger i nära Eskilstuna centrum 9 minuter buss linje 1 vid Busshållplats Munktellsgan och nära Trafikverket förarprov 10 minuter med foten.Vår målsättning är att erbjuda en lugn och trivsam studiemiljö med modern utrustning.</p>
                        <p><span style={{ color: '#57d', fontWeight: 'bold' }}>Läs mer om oss ...</span></p>
                    </div>
                </div>

                <div className="footerSocial flexColumn">
                    <p>Följ oss på:</p>
                    <div>
                        <i className="fa-brands fa-instagram"></i>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-facebook-messenger"></i>
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