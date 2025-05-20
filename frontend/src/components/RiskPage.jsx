import { useEffect } from 'react';
import Footer from "./Footer";
import Header from "./Header";
import '../styles/riskPage.css';

const RiskPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="riskPageMainWrapper">
            <Header />
            <div className="riskPageWrapper navPage">
                <div>
                    <h1>Riskutbildning 1 Eskilstuna</h1>
                    <div className="risk1PageImagesWrapper">
                        <div className="riskImageWrapper"><img src="/images/riskImage1.jpg" alt="img" /></div>
                        <div className="riskImageWrapper"><img src="/images/riskImage2.png" alt="img" /></div>
                        <div className="riskImageWrapper"><img src="/images/riskImage3.avif" alt="img" /></div>
                    </div>
                    <p>Riskettan är en obligatoriska teoretisk kurs på 180 minuter som behandlar alkohol, andra drogar, trötthet och riskfyllda beteenden i övrigt. Riskettan ger dig kunskap om – och insikt i – hur alkohol, andra droger och trötthet samt andra beteenden och faktorer kan påverka körförmågan. Under utbildningen får du delta aktiv med reflektion och diskussioner om vilka konsekvenserna kan bli, vad som ökar riskerna och hur de kan undvikas. Du är närvarande under hela kursen i Eskilstuna Trfaikskola. Kom ihåg att ta med dig giltig legitimation när du skall gå Riskettan.</p>
                </div>
                <div>
                    <h1>Riskutbildning 2 (Halkbana) Eskilstuna</h1>
                    <div className="risk2PageImagesWrapper">
                        <div className="riskImageWrapper"><img src="/images/riskImage4.jpg" alt="img" /></div>
                        <div className="riskImageWrapper"><img src="/images/riskImage5.jpg" alt="img" /></div>
                        <div className="riskImageWrapper"><img src="/images/riskImage6.jpg" alt="img" /></div>
                    </div>
                    <p>Halkbana är en kurs på 180 minuter där du får köra en egen övningsbil på halt underlag. Den omfattar hastighet, säkerhet och körning under särskilda förhållanden. Det ska genomföras sent i utbildningen, när eleven verkligen lärt sig att behärska fordonet.</p>
                </div>
                <div>
                    <h2>Både del 1 och 2 ska vara godkända innan du gör ett kunskapsprov och körprov.</h2>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default RiskPage;