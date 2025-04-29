import { useEffect } from 'react';
import Header from './Header'
import Footer from './Footer'
import '../styles/supervisorPage.css';

const SupervisorPage = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div>
            <Header />
            <div className="supervisorPageWrapper navPage">
                <div className='flexColumn glassMorphism'>
                    <h1>Introduktionsutbildning För Privata Handledare Eskilstuna</h1>
                    <p>Den som är handledare eller elev vid privat övningskörning ska ha gått en introduktionsutbildning. Utbildningen kommer att ha en giltighetstid på 5 år från det datum den genomfördes i Eskilstuna trafikskola.</p>
                    <br />
                    <b>Introduktionsutbildningen innehåller följande:</b>
                    <p>– Körkortsutbildningens mål och innehåll samt regler för övningskörning.</p>
                    <p>– Hur man planerar och strukturerar övningskörning.</p>
                    <p>– Viktiga faktorer för trafiksäkerheten.</p>
                    <p>– Introduktionsutbildningen registreras hos Transportstyrelse efter utbildning i Eskilstuna Trafikskola direkt och gäller i fem år från den dag utbildningen genomfördes, både för handledaren och för eleven.</p>
                    <br />
                    <p>Eleven måste vara minst 15 år och 9 månader för att få gå utbildningen.
                    Övningskörningen får påbörjas från 16 års ålder.</p>
                    <br />
                    <h2>Handledarutbildning: 450 kr per person</h2>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default SupervisorPage