import { useDeletePricePageMutation } from "../features/schoolsApi";

const PricePageCard = ({ priceCard, prepareUpdate }) => {
    const [deletePricePage] = useDeletePricePageMutation();

    const handleDeleteCard = async () => {
        if(confirm('Är du säker du vill radera priset?')) {
            const res = await deletePricePage(priceCard._id);
            if (!res.error) {
                alert('Priset är borta');
            } else {
                alert('Något gick fel vid raderingen.');
            }
        }
    }

    return (
        <>
            <div className='pricePageCard glassMorphism' style={{ paddingBottom: '50px', position: 'relative' }}>
                <div className='flexColumn'>
                    <h2>{priceCard.title}</h2>
                    <p>{priceCard.description}</p>
                </div>
                <div>
                    <h1>{priceCard.price}:-</h1>
                </div>
                <div className="pricePageCardSettings">
                    <h1 onClick={handleDeleteCard}>🗑️</h1>
                    <h1 onClick={() => prepareUpdate(priceCard)}>🖋️</h1>
                </div>
            </div>
        </>
    )
}

export default PricePageCard;