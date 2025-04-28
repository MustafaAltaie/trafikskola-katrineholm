import '../styles/section3.css';
import { useReadEducationsQuery } from '../features/schoolsApi';

const Section3 = () => {
    const { data: educations, isLoading } = useReadEducationsQuery();

    if(isLoading) return <p>Loading...</p>

    return (
        <section className="section3">
            <h1>Våra Utbildningar</h1>
            <div>
                <div className="sec3CardWrapper">
                    {/* Card */}
                    {educations?.map(education => (
                    <div key={education._id} className="sec3Card flexColumn">
                            {education.discount > 0 &&
                            <i>Spara {education.discount}:-</i>}
                            <h3>{education.title}</h3>
                            <div className='sec3CardInnerWrapper flexColumn'>
                                <div className='flexColumn'>
                                    <h1>{education.price}:-</h1>
                                    {education.discount > 0 &&
                                    <p>Du sparar {education.discount}:-</p>}
                                </div>
                                <ul className='flexColumn'>
                                    {education.list?.map(option => <li key={option}>- {option}</li>)}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Section3;