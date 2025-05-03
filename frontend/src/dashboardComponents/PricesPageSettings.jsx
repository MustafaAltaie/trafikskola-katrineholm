import { useEffect, useRef, useState } from 'react';
import '../styles/pricesPage.css';
import FooterSettings from './FooterSettings';
import HeaderSettings from './HeaderSettings';
import { useCreatePricePageMutation, useReadPricePageQuery, useUpdatePricePageMutation } from '../features/schoolsApi';
import PricePageCard from './PricePageCard';

const PricesPage = () => {
    const [menu, setMenu] = useState(false);
    const menuRef = useRef(null);
    const listRef = useRef(null);
    const [priceCard, setPriceCard] = useState({
        id: '',
        title: '',
        description: '',
        price: '',
    });
    const [createPricePage] = useCreatePricePageMutation();
    const { data: priceCards, isPriceLoading } = useReadPricePageQuery();
    const [updatePricePage] = useUpdatePricePageMutation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        if(menuRef.current) {
            if(menu) {
                menuRef.current.classList.add('pricePageSettingsMenuOn');
                menuRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            } else {
                menuRef.current.classList.remove('pricePageSettingsMenuOn');
            }
        }
    }, [menu]);

    const handlePreparePrice = (e) => {
        setPriceCard(prev => ({
            ...prev, [e.target.name]: e.target.value
        }));
    }

    const handleCreatePrice = async () => {
        if(!priceCard.title || !priceCard.description || !priceCard.price) {
            alert('Alla fält måste fyllas i.');
            return;
        }
        if(!priceCard.id) {
            const res = await createPricePage(priceCard);
            if(res && listRef.current) {
                setMenu(false);
                clearPriceFields();
                listRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
            }
        } else {
            const res = await updatePricePage(priceCard);
            if(res) {
                setMenu(false);
                clearPriceFields();
            }
        }
    }

    const clearPriceFields = () => {
        setPriceCard({
            id: '',
            title: '',
            description: '',
            price: '',
        });
    }

    const prepareUpdate = (card) => {
        setMenu(true);
        setPriceCard({
            id: card._id,
            title: card.title,
            description: card.description,
            price: card.price,
        });
        if(menuRef.current)
            menuRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }

    return (
        <div className="pricesPageMainWrapper">
            <HeaderSettings />
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
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h1>Prislistan</h1>
                        <h1 className='pricePageAddPriceButton' onClick={() => {setMenu(!menu); clearPriceFields()}} style={{ transform: `rotate(${menu ? '45deg' : '0deg'})` }}>+</h1>
                    </div>
                    <div ref={menuRef} className="pricePageSettingsMenu flexColumn gap5">
                        <input type="text" className='styledInput1 padding10' title='Titel' placeholder='Titel' name='title' value={priceCard.title} onChange={handlePreparePrice} />
                        <input type="text" className='styledInput1 padding10' title='Deskription' placeholder='Deskription' name='description' value={priceCard.description} onChange={handlePreparePrice} />
                        <input type="number" className='styledInput1 padding10' title='Pris' placeholder='Pris' name='price' value={priceCard.price} onChange={handlePreparePrice} />
                        <button className='styledInput1 padding10' onClick={handleCreatePrice}>{priceCard.id ? 'Uppdatera' : 'Spara'}</button>
                    </div>
                    <br />
                    <div ref={listRef} className='pricePageList flexColumn'>
                        {isPriceLoading && <p>Laddar priser...</p>}
                        {priceCards?.map(priceCard => (
                            <PricePageCard
                                key={priceCard._id}
                                priceCard={priceCard}
                                prepareUpdate={prepareUpdate}
                            />
                        ))}
                    </div>
                    <br />
                    <div>
                        <b>Observera att Trafikverkets kostnad tillkommer</b>
                        <p>– Kunskapsprov 420 kr</p>
                        <p>– Körprov 1000 kr</p>
                        <p>– Fotografering 120 kr</p>
                        <p>– Körkortstillverkning 250 kr</p>
                    </div>
                </div>
            </section>
            <FooterSettings />
        </div>
    )
}

export default PricesPage;