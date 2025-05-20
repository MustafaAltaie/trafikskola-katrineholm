import '../styles/section3.css';
import { useReadEducationsQuery } from '../features/schoolsApi';
import { forwardRef } from 'react';
import Section3Card from './Section3Card';

const Section3 = forwardRef((props, ref) => {
    const { data: educations, isLoading } = useReadEducationsQuery();

    if(isLoading) return <p>Loading...</p>

    return (
        <section className="section3" ref={ref}>
            {isLoading &&
            <div className="startServerModel">
                <h1>Vänta lite medan servern startas upp...</h1>
            </div>}
            <h1>Våra Utbildningar</h1>
            <div>
                <div className="sec3CardWrapper">
                    {/* Card */}
                    {educations?.map(education => (
                        <Section3Card key={education._id} education={education} />
                    ))}
                </div>
            </div>
        </section>
    )
})

export default Section3;