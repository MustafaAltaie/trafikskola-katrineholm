import Footer from "./Footer";
import Header from "./Header";
import '../styles/intergityAndTerms.css';
import { useEffect } from "react";
import { useReadIntegrityTermQuery } from "../features/schoolsApi";

const Integritytspolicy = () => {
    const { data: intergityTermsData, isLoading, isError } = useReadIntegrityTermQuery();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    if(isError) return <h1>Inga information tillgängliga för tillfället.</h1>;

    return (
        <div className="integrityspolicy">
            <Header />
            <div className="integrityWrapper">
                <h1>Integritetspolicy</h1>
                {isLoading && <p>Laddning...</p>}
                <p>{intergityTermsData?.integrity}</p>
            </div>
            <Footer />
        </div>
    )
}

export default Integritytspolicy;