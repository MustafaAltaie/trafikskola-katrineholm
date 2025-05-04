import Footer from "./Footer";
import Header from "./Header";
import '../styles/intergityAndTerms.css';
import { useEffect } from "react";

const Integritytspolicy = () => {
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="integrityspolicy">
            <Header />
            <div className="integrityWrapper">
                <h1>Integritetspolicy</h1>
                <p>Vi på Katrinehom-Eskilstuna trafikskola värnar om din integritet. När du kontaktar oss, bokar lektioner eller använder vår webbplats kan vi samla in personuppgifter som namn, kontaktuppgifter och information kopplad till din utbildning. Dessa uppgifter används enbart för att kunna tillhandahålla våra tjänster, kommunicera med dig och uppfylla lagkrav, exempelvis rapportering till myndigheter. Dina uppgifter hanteras säkert och delas inte med tredje part i marknadsföringssyfte. Du har alltid rätt att få veta vilka uppgifter vi har om dig, begära ändringar eller radering. Vid frågor är du välkommen att kontakta oss.</p>
            </div>
            <Footer />
        </div>
    )
}

export default Integritytspolicy;