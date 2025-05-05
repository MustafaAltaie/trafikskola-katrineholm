import { useEffect } from 'react';
import '../styles/pricesPage.css';
import Footer from './Footer';
import Header from './Header';
import { useReadPricePageQuery } from '../features/schoolsApi';
import { motion } from 'framer-motion';

const PricesPage = () => {
    const { data: priceCards, isPriceLoading } = useReadPricePageQuery();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    return (
        <div className="pricesPageMainWrapper">
            <Header />
            <section className="pricePageWrapper navPage">
                <div>
                    <div className="pricePageDetailsWrapper flexColumn">
                        <p>Körlektioner betalas kontant vid köptillfället eller i förskott via <span>bankgiro 135-5031</span> eller <span>Swish 123 354 20 65</span> till Katrineholm Trfaikskola
                        Vid betalning till Bankgiro eller Swish vänligen lämna namn och personnummer som meddelande.</p>
                        <div>
                            <b>För att kunna genomföra en körkortsutbildning behöver du:</b>
                            <p>– Körkortstillstånd, ansökan hittar du på körkortsportalen.</p>
                            <p>– Giltig legitimation.</p>
                        </div>
                        <p>I Katrineholm Trfaikskola kan vi hjälpa er att ansöka körkortstillstånd.</p>
                    </div>
                    <br />
                    <div className='flexColumn gap5'>
                        <b>Observera att Trafikverkets kostnad tillkommer</b>
                        <p>– Kunskapsprov 420 kr</p>
                        <p>– Körprov 1000 kr</p>
                        <p>– Fotografering 120 kr</p>
                        <p>– Körkortstillverkning 250 kr</p>
                    </div>
                    <br /><hr /><br />
                    <h1>Prislistan</h1>
                    <br />
                    <div className='pricePageList flexColumn'>
                        {priceCards?.map(priceCard => (
                            <motion.div
                                key={priceCard._id}
                                className='pricePageCard glassMorphism'
                                initial={{ opacity: 0, x: -200 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, ease: 'easeInOut' }}
                                viewport={{ once: true, amount: 0.2 }}
                            >
                                <div className='flexColumn'>
                                    <h2>{priceCard.title}</h2>
                                    <p>{priceCard.description}</p>
                                </div>
                                <div>
                                    <h1>{priceCard.price}:-</h1>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    <br />
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default PricesPage;