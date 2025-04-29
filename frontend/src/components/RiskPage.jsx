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
                        <div className="riskImageWrapper"><img src="https://cdn.pixabay.com/photo/2020/02/02/19/55/cars-4814015_1280.jpg" alt="img" /></div>
                        <div className="riskImageWrapper"><img src="https://plus.unsplash.com/premium_photo-1683121325125-ba6c794177d6?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c3RyZXNzZWQlMjBkcml2ZXJ8ZW58MHx8MHx8fDA%3D" alt="img" /></div>
                        <div className="riskImageWrapper"><img src="https://images.unsplash.com/photo-1605550974023-ad0bc955c692?w=1200&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c3RyZXNzZWQlMjBkcml2ZXJ8ZW58MHx8MHx8fDA%3D" alt="img" /></div>
                    </div>
                    <p>Riskettan är en obligatoriska teoretisk kurs på 180 minuter som behandlar alkohol, andra drogar, trötthet och riskfyllda beteenden i övrigt. Riskettan ger dig kunskap om – och insikt i – hur alkohol, andra droger och trötthet samt andra beteenden och faktorer kan påverka körförmågan. Under utbildningen får du delta aktiv med reflektion och diskussioner om vilka konsekvenserna kan bli, vad som ökar riskerna och hur de kan undvikas. Du är närvarande under hela kursen i Eskilstuna Trfaikskola. Kom ihåg att ta med dig giltig legitimation när du skall gå Riskettan.</p>
                </div>
                <div>
                    <h1>Riskutbildning 2 (Halkbana) Eskilstuna</h1>
                    <div className="risk2PageImagesWrapper">
                        <div className="riskImageWrapper"><img src="https://cdn.pixabay.com/photo/2016/03/26/22/34/snow-1281636_1280.jpg" alt="img" /></div>
                        <div className="riskImageWrapper"><img src="https://cdn.pixabay.com/photo/2022/06/07/16/22/drift-7248723_1280.jpg" alt="img" /></div>
                        <div className="riskImageWrapper"><img src="https://cdn.pixabay.com/photo/2021/10/10/08/20/car-6695943_1280.jpg" alt="img" /></div>
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