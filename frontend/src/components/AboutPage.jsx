import React, { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/aboutPage.css';
import { useReadAboutImagesQuery } from '../features/schoolsApi';

const AboutPage = () => {
    const { data: images = [] } = useReadAboutImagesQuery();

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
                    <br />
                    <div className="aboutPageImageWrapper">
                        {images.map((url, idx) => (
                            <div key={idx} onClick={() => handleDelete(url)}>
                                <img src={`http://localhost:5000${url}`} alt={`Uploaded ${idx}`} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default AboutPage;