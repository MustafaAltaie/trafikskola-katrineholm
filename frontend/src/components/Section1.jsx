import '../styles/section1.css';
import { useReadHomeImageQuery } from '../features/schoolsApi';

const Section1 = () => {
    const { data: files = [] } = useReadHomeImageQuery();

    return (
        <section className="section1">
            <div className='Sec1ImageWrapper'>
            {files.length > 0 &&
            <img src={`${import.meta.env.VITE_API_BASE_URL.replace('/api', '')}/images/home-image/homeImage.png`} alt="homeImage" />}
            </div>
            <div className="sec1DetailsWrapper">
                <h1>Välkommen till katrineholm-Eskilstuna trafikskolan i katrineholm</h1>
                <p>Skaffa ditt körkort snabbt och smidigt hos oss. Erfaren lärare, flexibla tider och personligt stöd hela vägen.</p>
            </div>
        </section>
    )
}

export default Section1;