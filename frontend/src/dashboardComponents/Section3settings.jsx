import { useEffect, useRef, useState } from 'react';
import '../styles/section3.css';
import { useCreateEducationMutation, useReadEducationsQuery, useUpdateEducationMutation } from '../features/schoolsApi';
import Section3SettingsCard from './Section3SettingsCard';

const Section3 = () => {
    const [form, setForm] = useState(false);
    const [option, setOption] = useState('');
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [list, setList] = useState([]);
    const optionRef = useRef(null);
    const formRef = useRef(null);
    const [createEducation] = useCreateEducationMutation();
    const [updateEducation] = useUpdateEducationMutation();
    const { data: educations, isLoading } = useReadEducationsQuery();

    useEffect(() => {
        if(form && formRef.current) {
            formRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [form]);

    if(isLoading) return <p>Loading...</p>

    const handleAddToList = () => {
        if(!list.includes(option) && option.trim()) {
            setList(prev => [...prev, option]);
            setOption('');
            optionRef.current.focus();
        }
    }

    const handleRemoveOption = (option) => {
        if (confirm('Delete option ?')) {
            setList(list.filter(o => o !== option));
        }
    }

    const handleCreateEducation = () => {
        if(title && price) {
           const newEducation = {
                id: id || '',
                title,
                price: Number(price),
                discount: Number(discount),
                list
            }
            if(id) {
                updateEducation(newEducation);
            } else {
                createEducation(newEducation);
            }
            clearFields(); 
        }
    }

    const clearFields = () => {
        setId('');
        setTitle('');
        setPrice('');
        setDiscount('');
        setList([]);
        setForm(false);
    }

    const handlePrepareUpdate = (education) => {
        setId(education._id);
        setTitle(education.title);
        setPrice(education.price);
        setDiscount(education.discount);
        setList(education.list);
        setForm(true);
    }

    return (
        <section className="section3">
            <h1>Våra Utbildningar</h1>
            <div>
                <div className="sec3CardWrapper">
                    {/* Card */}
                    {educations?.map(education => (
                    <Section3SettingsCard key={education._id} education={education} handlePrepareUpdate={handlePrepareUpdate} />
                    ))}
                </div>
                {!form &&
                <h1 className='addEducationButton' onClick={() => setForm(true)}>+</h1>}
                {form &&
                <div ref={formRef} className="addEducationForm flexColumn">
                    <h1 style={{ textAlign: 'center', cursor: 'pointer' }} onClick={() => {setForm(false); clearFields()}}>X</h1>
                    <input type="text" placeholder='Titel' value={title} onChange={e => setTitle(e.target.value)} />
                    <input type="number" placeholder='Pris' value={price} onChange={e => setPrice(e.target.value)} />
                    <input type="number" placeholder='Rabatt' value={discount} onChange={e => setDiscount(e.target.value)} />
                    <div>
                        <input type="text" placeholder='Alternativ' ref={optionRef} value={option} onChange={e => setOption(e.target.value)} />
                        <button onClick={handleAddToList}>Lägg till</button>
                    </div>
                    <ul className='flexColumn'>
                        {list.map(o => <li key={o} onClick={() => handleRemoveOption(o)}>- {o}</li>)}
                    </ul>
                    <button onClick={handleCreateEducation}>{id ? 'Uppdatera' : 'Spara'}</button>
                </div>}
            </div>
        </section>
    )
}

export default Section3;