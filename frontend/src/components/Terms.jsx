import { useEffect } from 'react';
import '../styles/intergityAndTerms.css';
import Footer from './Footer';
import Header from './Header';

const Terms = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div>
      <Header />
      <div className='termsWrapper'>
        <h1>Allmänna Villkor för Katrineholm-Eskilstuna Trafikskola</h1>
        <p>
          Genom att boka kurs eller tjänst hos oss accepterar du våra allmänna villkor. Tjänsterna omfattar körlektioner, teorikurser och andra utbildningsprogram enligt Trafikskolans regler. Avbokning eller ombokning av lektioner måste göras senast 24 timmar innan bokad tid. För mer information om betalningsvillkor, återbetalningar och ansvar, vänligen läs våra fullständiga villkor på vår hemsida.
        </p>
      </div>
      <Footer />
    </div>
  )
}

export default Terms;