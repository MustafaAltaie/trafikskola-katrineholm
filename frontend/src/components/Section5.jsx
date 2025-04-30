import { useEffect, useState, useRef } from 'react';
import '../styles/section5.css';
import { useCreateReviewMutation, useReadReviewQuery, useReadReviewWrapperQuery } from '../features/schoolsApi';
import SchoolsRating from './SchoolsRating';

const Section5 = () => {
    const [form, setForm] = useState(false);
    const formRef = useRef(null);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState('');
    const [createReview] = useCreateReviewMutation();
    const { data: reviews, isLoading } = useReadReviewQuery();
    const { data: lockCase } = useReadReviewWrapperQuery();
    const [ratingAverage, setRatingAverage] = useState(0);

    useEffect(() => {
        if(reviews && reviews.length > 0) {
            const average = reviews.reduce((acc, review) => acc + Number(review.rating), 0);
            setRatingAverage((average/reviews.length).toFixed(1));
        }
    }, [reviews]);

    useEffect(() => {
        if (form) {
            if (formRef.current) {
                formRef.current.style.display = 'flex';
                formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
            clearFields();
            setTimeout(() => {
                if(formRef.current) {
                    formRef.current.classList.add('showsed5Form');
                    formRef.current.classList.remove('hidden5Form');
                }
            }, 10);
        } else {
            if(formRef.current) {
                formRef.current.classList.add('hidden5Form');
                formRef.current.classList.remove('showsed5Form'); 
            }
            setTimeout(() => {
                if(formRef.current)
                formRef.current.style.display = 'none';
            }, 700);
        }
    }, [form]);

    const handleCreateReview = () => {
        const newReview = {
            name,
            age: Number(age),
            message,
            rating: Number(rating)
        }
        if(rating) {
            createReview(newReview);
            setForm(false);
        } else {
            alert('Ge oss åtminstone ett omdöme mellan 1–5.');
        }
    }

    const clearFields = () => {
        setName('');
        setAge('');
        setMessage('');
        setRating('');
    }

    if (lockCase?.reviewState === false) {
    return (
        <section className="section5 flexColumn">
            <h1>Se vad tidigare elever säger om sin upplevelse hos oss!</h1>
            <div className='sec5HeaderText'>
                <p>Våra omdömen:{ratingAverage}</p>
                <SchoolsRating rating={ratingAverage} size='medium' colorFill='#fa0' colorEmpty='#bbb' />
            </div>

            {reviews?.length > 0 &&
            <div className="sec5ColumnsWrapper glassMorphism">
                <div className="sec5Column">
                    {isLoading && <p>...Loading</p>}
                    {/* Comment */}
                    {reviews?.map(review => (
                        <div key={review._id} className="sec5Comment">
                            <div className='sec5CommentPart1'>
                                <h1>{review.name.slice(0, 1).toUpperCase() || 'A'}</h1>
                            </div>
                            <div className='sec5CommentPart2 flexColumn'>
                                <div>
                                    <p>{review.name || 'Anonym'}, {review.age > 0 && review.age + ' år'}</p>
                                    <h5 className='yellowStars'><SchoolsRating rating={review.rating} size='small' colorFill='#d90' colorEmpty='#aaa' /></h5>
                                </div>
                                {review.message ?
                                <p>{review.message}</p> :
                                <p style={{ color: '#00000055' }}>Eleven lämnade inget meddelande.</p>}
                            </div>
                        </div>
                    ))}
                </div>
            </div>}
            <form ref={formRef} className='glassMorphism flexColumn'>
                <h3 className='sec5FormCloseButton' onClick={() => setForm(false)}>X</h3>
                <div>
                    <p>Ditt namn</p>
                    <input type="text" title='Namn' className='glassMorphism' placeholder='Namn' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <p>Ditt ålder</p>
                    <input type="number" title='Ålder' className='glassMorphism' placeholder='Ålder' value={age} onChange={e => setAge(e.target.value)} />
                </div>
                <div>
                    <p>Ditt meddelande</p>
                    <textarea className='glassMorphism' title='Meddelande' placeholder='Sms' value={message} onChange={e => setMessage(e.target.value)}></textarea>
                </div>
                <div>
                    <div>
                        <p>Hur många stjärnor vill du ge oss ?</p>
                        <input type="number" min='1' max='5' className='glassMorphism' title='Omdöme' placeholder='1 - 5' value={rating} onChange={e => setRating(e.target.value)} />
                    </div>
                </div>
                <button className='glassMorphism' onClick={e => {handleCreateReview(); e.preventDefault()}}>Skicka</button>
            </form>
            {!form &&
            <button className='glassMorphism' onClick={() => setForm(true)}><h3>Dela gärna din upplevelse med oss!</h3></button>}
        </section>
    )}
}

export default Section5;