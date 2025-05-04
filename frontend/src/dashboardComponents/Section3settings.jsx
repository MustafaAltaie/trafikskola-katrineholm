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
    const listRef = useRef(null);
    const [addedOption, setAddedOption] = useState('');
    const [thisOption, setThisOption] = useState('');
    const [deletedOption, setDeletedOption] = useState('');

    useEffect(() => {
        if(form) {
            if(formRef.current) {
                formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                formRef.current.style.maxHeight = formRef.current.scrollHeight + 'px';
            }
        } else if(formRef.current) {
            formRef.current.style.maxHeight = '0px';
        }
    }, [form, list]);

    useEffect(() => {
        if(listRef.current) listRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, [educations]);

    if(isLoading) return <p>Loading...</p>

    const handleAddToList = () => {
        const trimmedOption = option.trim();
        if(!trimmedOption) return;
        const isExistedOption = list.find(option => option === trimmedOption);
        if(isExistedOption) {
            setThisOption(trimmedOption);
            setTimeout(() => {
                setThisOption('');
            }, 200);
            return;
        }
        setAddedOption(trimmedOption);
        setList(prev => [...prev, option]);
        optionRef.current.focus();
        setOption('');
        setTimeout(() => {
            setAddedOption('');
        });
    }

    const handleRemoveOption = (option) => {
        const isConfirmed = confirm('Delete option ?');
        if(!isConfirmed) return;
        setDeletedOption(option);
        setTimeout(() => {
            setList(list.filter(o => o !== option));
            setDeletedOption('');
        }, 200);
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
        <section className="section3" style={{ paddingTop: '70px' }}>
            <h1>Våra Utbildningar</h1>
            <div>
                <div ref={listRef} className="sec3CardWrapper">
                    {/* Card */}
                    {educations?.map(education => (
                    <Section3SettingsCard key={education._id} education={education} handlePrepareUpdate={handlePrepareUpdate} />
                    ))}
                </div>
                <h1 className='addEducationButton' onClick={() => setForm(!form)}>{form ? 'x' : '+'}</h1>
                <div ref={formRef} className={form ? 'addEducationForm flexColumn addEducationFormOpened' : 'addEducationForm flexColumn'}>
                    <input type="text" placeholder='Titel' value={title} onChange={e => setTitle(e.target.value)} />
                    <input type="number" placeholder='Pris' value={price} onChange={e => setPrice(e.target.value)} />
                    <input type="number" placeholder='Rabatt' value={discount} onChange={e => setDiscount(e.target.value)} />
                    <div>
                        <input type="text" placeholder='Alternativ' ref={optionRef} value={option} onChange={e => setOption(e.target.value)} />
                        <button onClick={handleAddToList}>Lägg till</button>
                    </div>
                    <ul className='flexColumn'>
                        {list.map(option =>
                            <li
                                key={option}
                                className={
                                    `
                                        sec3SettingsOption
                                        ${addedOption === option ? 'sec3NewSettingsOption' : ''}
                                        ${thisOption === option ? 'sec3SettingsThisOption' : ''}
                                        ${deletedOption === option ? 'sec3SettingsDeletedOption' : ''}
                                    `
                                }
                            >
                                - {option}<p onClick={() => handleRemoveOption(option)}>🗑️</p>
                            </li>)}
                    </ul>
                    <button onClick={handleCreateEducation}>{id ? 'Uppdatera' : 'Spara'}</button>
                </div>
            </div>
        </section>
    )
}

export default Section3;