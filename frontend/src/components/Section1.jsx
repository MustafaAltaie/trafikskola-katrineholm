import '../styles/section1.css';
import { useReadHomeImagesQuery } from '../features/schoolsApi';
import { useEffect, useState } from 'react';

const Section1 = () => {
    const { data: images = [] } = useReadHomeImagesQuery();
    const imagesLength = images.length;
    const [count, setCount] = useState(0);
    const imageBaseUrl = import.meta.env.VITE_API_BASE_URL.replace('/api', ''); 

    useEffect(() => {
        if(imagesLength > 0) {
            const imageInt = setInterval(() => {
                setCount(prev => (prev + 1) % imagesLength);
            }, 5000);
    
            return () => clearInterval(imageInt);  
        }
    }, [imagesLength]);

    return (
        <section className="section1">
            <div className='Sec1ImageWrapper'>
                {images?.map((image, indx) =>
                    <img
                        key={indx}
                        className={(indx === count && imagesLength > 0) ? 'viewedHomeImage' : 'homeImage'}
                        src={`${imageBaseUrl}${image}`}
                        alt="img"
                    />
                )}
            </div>
            <div className="sec1DetailsWrapper">
                <h1>Välkommen till katrineholm-Eskilstuna trafikskolan i katrineholm</h1>
                <p>Skaffa ditt körkort snabbt och smidigt hos oss. Erfaren lärare, flexibla tider och personligt stöd hela vägen.</p>
            </div>
        </section>
    )
}

export default Section1;