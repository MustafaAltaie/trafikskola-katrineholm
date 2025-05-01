import { useEffect, useState, useRef } from 'react';
import '../styles/section5.css';
import {
    useCreateReviewMutation,
    useReadReviewQuery,
    useReadReviewWrapperQuery,
    useUpdateReviewWrapperMutation
} from '../features/schoolsApi';
import SchoolsRating from '../components/SchoolsRating';
import Section5SettingsReview from './Section5SettingsReview';

const Section5 = () => {
    const [form, setForm] = useState(false);
    const formRef = useRef(null);
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [message, setMessage] = useState('');
    const [rating, setRating] = useState('');
    const [lock, setLock] = useState(false);
    const [createReview] = useCreateReviewMutation();
    const { data: reviews, isLoading } = useReadReviewQuery();
    const [ratingAverage, setRatingAverage] = useState(0);
    const { data: lockCase } = useReadReviewWrapperQuery();
    const [updateReviewWrapper] = useUpdateReviewWrapperMutation();

    useEffect(() => {
        if(reviews && reviews.length > 0) {
            const average = reviews.reduce((acc, review) => acc + Number(review.rating), 0);
            setRatingAverage((average/reviews.length).toFixed(1));
        }
    }, [reviews]);

    useEffect(() => {
        if (form) {
            formRef.current.style.display = 'flex';
            formRef.current.scrollIntoView({ behavior: 'smooth' });
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
                formRef.current.style.display = 'none';
            }, 700);
        }
    }, [form]);

    useEffect(() => {
        if (lockCase !== undefined) {
            setLock(Boolean(lockCase?.reviewState));
        }
    }, [lockCase]);

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

    const handleUpdateLock = () => {
        const newLockState = !lock;
        setLock(newLockState);
        updateReviewWrapper({ reviewState: newLockState });
    }

    return (
        <section className="section5 flexColumn">
            <h1 className='sec5Lock' onClick={handleUpdateLock} style={{ fontSize: '40px' }}>{lock ? '🔒' : '🔓'}</h1>
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
                        <Section5SettingsReview key={review._id} review={review} />
                    ))}
                </div>
            </div>}
            <form ref={formRef} className='glassMorphism flexColumn'>
                <h3 className='sec5FormCloseButton' onClick={() => setForm(false)}>X</h3>
                <div>
                    <p>Ditt namn</p>
                    <input type="text" className='glassMorphism' title='Namn' placeholder='Namn' value={name} onChange={e => setName(e.target.value)} />
                </div>
                <div>
                    <p>Ditt ålder</p>
                    <input type="number" className='glassMorphism' title='Ålder' placeholder='Ålder' value={age} onChange={e => setAge(e.target.value)} />
                </div>
                <div>
                    <p>Ditt meddelande</p>
                    <textarea className='glassMorphism' value={message} title='Meddelande' placeholder='Sms' onChange={e => setMessage(e.target.value)}></textarea>
                </div>
                <div>
                    <div>
                        <p>Hur många stjärnor vill du ge oss ?</p>
                        <input type="number" min='1' max='5' className='glassMorphism' title='Omdöme' placeholder='1 - 5' value={rating} onChange={e => setRating(e.target.value)} />
                    </div>
                </div>
                <button className='glassMorphism' onClick={e => {handleCreateReview(); e.preventDefault()}}>Skicka</button>
            </form>
        </section>
    )
}

export default Section5;