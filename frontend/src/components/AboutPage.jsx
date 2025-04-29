import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/aboutPage.css';

const AboutPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div>
            <Header />
            <div className="aboutPageWrapper navPage">
                <div>
                    <h1>Katrineholm Trafikskola</h1>
                    <br />
                    <p>Vårt mål är att du skall få en bra och effektiv utbildning. Vi strävar alltid efter en effektiv utbildning för varje individ. Att gå till en trafikskola och få sin körkortsutbildning innebär att man får en professionell inlärning.</p>
                    <br />
                    <p>Vi på <span>Katrineholm Trafikskola</span> AB utbildar bara inom behörighet B-körkort. För oss är anpassbarhet i körkortsutbildning en viktig grund för goda resultat.</p>
                    <br />
                    <p>Vi bemöter alla med förtroende och respekt. Vi tar gemensamt och personligt ansvar för din körkortsutbildning.</p>
                    <br />
                    <p>Vi hjälper dig med att planera din utbildning så att du lär dig det mesta möjliga på kortast möjliga tid.</p>
                    <br />
                    <p>Vi arbetar efter en given undervisningsplan. Kontakta oss på <span>Katrineholm Trafikskola</span>, så kan vi tillsammans kolla på hur just du ska göra för att nå målet med körkortet.</p>
                    <br />
                    <p>Du skall vara 16 år innan du får börja övningsköra. För bästa möjliga resultat rekommenderar vi att du börjar tidigt.</p>
                    <br />
                    <p>Kombinera gärna körningen på skolan med mängdträning hemma med din handledare. Givetvis har vi även intensivkurser för den som vill bli klar på kortare tid.</p>
                    <div className="aboutPageImageWrapper">
                        <div><img src="https://cdn.pixabay.com/photo/2022/07/04/10/46/vintage-car-7300881_1280.jpg" alt="image" /></div>
                        <div><img src="https://cdn.pixabay.com/photo/2020/07/15/13/12/lotus-5407670_1280.jpg" alt="image" /></div>
                        <div><img src="https://cdn.pixabay.com/photo/2017/11/19/23/25/bmw-2964072_1280.jpg" alt="image" /></div>
                        <div><img src="https://cdn.pixabay.com/photo/2024/07/13/07/40/cars-8891625_1280.jpg" alt="image" /></div>
                        <div><img src="https://cdn.pixabay.com/photo/2017/03/27/14/56/auto-2179220_1280.jpg" alt="image" /></div>
                        <div><img src="https://cdn.pixabay.com/photo/2015/06/05/15/02/audi-798530_1280.jpg" alt="image" /></div>
                        <div><img src="https://cdn.pixabay.com/photo/2016/03/26/22/34/car-1281640_1280.jpg" alt="image" /></div>
                        <div><img src="https://cdn.pixabay.com/photo/2023/02/22/15/27/steering-wheel-7806865_1280.jpg" alt="image" /></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage;