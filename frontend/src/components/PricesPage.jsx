import '../styles/PricesPage.css';
import Footer from './Footer';
import Header from './Header';

const PricesPage = () => {
    return (
        <div className="pricesPageMainWrapper">
            <Header />
            <section className="pricePageWrapper navPage">
                <div>
                    <div className="pricePageDetailsWrapper glassMorphism flexColumn">
                        <p>Körlektioner betalas kontant vid köptillfället eller i förskott via <span>bankgiro 135-5031</span> eller <span>Swish 123 354 20 65</span> till Katrineholm Trfaikskola
                        Vid betalning till Bankgiro eller Swish vänligen lämna namn och personnummer som meddelande.</p>
                        <div>
                            <b>För att kunna genomföra en körkortsutbildning behöver du:</b>
                            <p>– Körkortstillstånd, ansökan hittar du på körkortsportalen.</p>
                            <p>– Giltig legitimation.</p>
                        </div>
                        <p>I Katrineholm Trfaikskola kan vi hjälpa er att ansöka körkortstillstånd.</p>
                    </div>
                    <h1>Prislistan</h1>
                    <div className='pricePageList flexColumn'>
                        <div className='pricePageCard glassMorphism'>
                            <div className='flexColumn'>
                                <h2>Kostnad för lån av bil vid körprovet hos Trafikverket	</h2>
                                <p>inkl. uppvärmning 30 min (obs endast till elever som gjort sin utbildning hos oss), ej för privat uppkörning!</p>
                            </div>
                            <div>
                                <h1>1600:-</h1>
                            </div>
                        </div>
                        <div className='pricePageCard glassMorphism'>
                            <div className='flexColumn'>
                                <h2>STARTPAKET personbil</h2>
                                <p>Teorihjälp inskrivningsavgift 300kr, Riskutbildning 1, 900 kr, 6 st 60 minuters körlektioner 5970 kr, Rabatt 240 kr</p>
                            </div>
                            <div>
                                <h1>6 930:-</h1>
                            </div>
                        </div>
                        <div className='pricePageCard glassMorphism'>
                            <div className='flexColumn'>
                                <h2>Körlektion</h2>
                                <p>60 min</p>
                            </div>
                            <div>
                                <h1>1000:-</h1>
                            </div>
                        </div>
                        <div className='pricePageCard glassMorphism'>
                            <div className='flexColumn'>
                                <h2>Teoristöd</h2>
                                <p>60 min lektion - Enskild teoriundervisning med lärare.</p>
                            </div>
                            <div>
                                <h1>1450:-</h1>
                            </div>
                        </div>
                    </div>
                    <div>
                        <b>Observera att Trafikverkets kostnad tillkommer</b>
                        <p>– Kunskapsprov 420 kr</p>
                        <p>– Körprov 1000 kr</p>
                        <p>– Fotografering 120 kr</p>
                        <p>– Körkortstillverkning 250 kr</p>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default PricesPage;