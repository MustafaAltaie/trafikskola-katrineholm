import { useEffect } from 'react';
import '../styles/intergityAndTerms.css';
import Footer from './Footer';
import Header from './Header';
import { useReadIntegrityTermQuery } from "../features/schoolsApi";

const Terms = () => {
  const { data: intergityTermsData, isLoading, isError } = useReadIntegrityTermQuery();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  if(isError) return <h1>Inga villkor tillgängliga för tillfället.</h1>;

  return (
    <div>
      <Header />
      <div className='termsWrapper'>
        <h1>Allmänna Villkor för Katrineholm-Eskilstuna Trafikskola</h1>
        {isLoading && <p>Laddning...</p>}
        <p>{intergityTermsData?.terms}</p>
      </div>
      <Footer />
    </div>
  )
}

export default Terms;