import Footer from "./Footer";
import Header from "./Header";
import '../styles/intensivePage.css';
import Section3Card from './Section3Card';

const IntensivePage = () => {
    const education = {
        _id: 12434,
        title: 'TITLE IS HERE',
        price: '35',
        discount: '2',
        list: ['sdgv', 'sssss'],
    }

    return (
        <div>
            <Header />
            <div className="intensivePageWrapper navPage">
                <div className="flexColumn">
                    <h1>PAKET</h1>
                    <h2>Delbetala ditt paket med <img src="https://docs.klarna.com/static/assets/Marketing%20Badge%20With%20Clear%20Space.png" alt="Klarna" /></h2>
                    <b>Man måste betala i förskott, minst halv summan en vecka innan. Om man vill avboka eller sluta med kursen måste man meddela oss en vecka innan annars debiteras man halv summan.</b>
                    <hr />
                    <b>För att börja en intensivkurs krävs det att man klarar av olika utbildningsnivåer enligt trafikskolans undervisningsplan, som är godkänd av Transportstyrelse. Därför måste man först göra en testlektion (körtest) med en av våra trafiklärare.</b>
                    <p>Våra elever som går på intensivkurser skall vara väl förbereda inför körprovet och för att klara av att alla möjliga situationer i framtiden. Det är vårt mål!</p>
                    <hr />
                    <button><h1>BOKA HÄR</h1></button>
                    <hr />
                    <div className="intensivePageEducationWrapper flexColumn">
                        <Section3Card education={education} />
                        <Section3Card education={education} />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default IntensivePage;