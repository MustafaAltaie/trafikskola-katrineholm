import { useEffect, useRef, useState } from 'react';
import FooterSettings from "./FooterSettings";
import HeaderSettings from "./HeaderSettings";
import '../styles/intensivePage.css';
import IntensivePageSettingsCard from './IntensivePageSettingsCard';
import { useCreateIntensiveMutation, useReadIntensiveQuery, useUpdateIntensiveMutation, useDeleteIntensiveMutation } from '../features/schoolsApi';

const IntensivePage = () => {
    const [menu, setMenu] = useState(false);
    const menuRef = useRef(null);
    const optionRef = useRef(null);
    const [intensiveObject, setIntensiveObject] = useState({
        id: '',
        title: '',
        price: '',
        discount: '',
        list: []
    });
    const [option, setOption] = useState('');
    const [createIntensive] = useCreateIntensiveMutation();
    const [deletedOption, setDeletedOption] = useState('');
    const [highlightedOption, setHighlightedOption] = useState('');
    const [addedOption, setAddedOption] = useState('');
    const { data: intensiveCards, isCardsLoading } = useReadIntensiveQuery();
    const [updateIntensive] = useUpdateIntensiveMutation();
    const [deleteIntensive] = useDeleteIntensiveMutation();
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        if(menu) {
            if(menuRef.current) {
                menuRef.current.style.maxHeight = menuRef.current.scrollHeight + 'px';
                setTimeout(() => {
                    menuRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }, 200);
            }
        } else if (menuRef.current) {
            menuRef.current.style.maxHeight = '0px';
        }
    }, [menu, intensiveObject]);

    const handlePrepareObject = (e) => {
        setIntensiveObject(prev => ({
            ...prev, [e.target.name]: e.target.value
        }));
    }

    const handleAddToList = () => {
        const trimmedOption = option.trim();
        if(!intensiveObject.list.find(o => o === trimmedOption) && trimmedOption) {
            setIntensiveObject(prev => ({
                ...prev, list: [...prev.list, trimmedOption]
            }));
            setOption('');
            if(optionRef.current)
                optionRef.current.focus();
            setAddedOption(trimmedOption);
            setTimeout(() => {
                setAddedOption('');
            }, 50);
        } else {
            setHighlightedOption(trimmedOption);
            setTimeout(() => {
                setHighlightedOption('');
            }, 200);
        }
    }

    const handleRemoveFromList = (option) => {
        setTimeout(() => {
            setDeletedOption('');
            setIntensiveObject(prev => ({
                ...prev, list: prev.list.filter(o => o !== option)
            }));
        }, 200);
        setDeletedOption(option);
    }

    const handleCreateUpdateIntensive = async () => {
        const { id, title, price, list } = intensiveObject;
        const saveRules = title && price && list?.length > 0;
        if(!saveRules) return;
        setIsSaving(true);
        try {
            id ? await updateIntensive(intensiveObject).unwrap() : await createIntensive(intensiveObject).unwrap()
            handleClearFields();
            setMenu(false);
            setIsSaving(false);
        } catch (err) {
            console.error('Error occurred while saving data', err);
            alert(err?.data?.message || 'Något gick fel.');
        }
    }

    const handlePrepareUpdate = (education) => {
        setIntensiveObject({
            id: education._id,
            title: education.title,
            price: education.price,
            discount: education.discount,
            list: education.list
        });
        setMenu(true);
    }

    const handleDeleteIntensive = async (id) => {
        const confirmDelete = window.confirm('Vill du ta bort kursen?');
        if (!confirmDelete) return;
        try {
            await deleteIntensive(id).unwrap();
            handleClearFields();
        } catch (err) {
            console.error('Error deleting intensive course:', err);
            alert(err?.data?.message || 'Något gick fel.');
        }
    }

    const handleClearFields = () => {
        setIntensiveObject({
            id: '',
            title: '',
            price: '',
            discount: '',
            list: []
        });
        setOption('');
    }

    return (
        <div>
            <HeaderSettings />
            <div className="intensivePageWrapper navPage">
                <div className="flexColumn">
                    <h1>PAKET</h1>
                    <hr />
                    <h2>Delbetala ditt paket med <img src="https://docs.klarna.com/static/assets/Marketing%20Badge%20With%20Clear%20Space.png" alt="Klarna" /></h2>
                    <b>Man måste betala i förskott, minst halv summan en vecka innan. Om man vill avboka eller sluta med kursen måste man meddela oss en vecka innan annars debiteras man halv summan.</b>
                    <hr />
                    <b>För att börja en intensivkurs krävs det att man klarar av olika utbildningsnivåer enligt trafikskolans undervisningsplan, som är godkänd av Transportstyrelse. Därför måste man först göra en testlektion (körtest) med en av våra trafiklärare.</b>
                    <p>Våra elever som går på intensivkurser skall vara väl förbereda inför körprovet och för att klara av att alla möjliga situationer i framtiden. Det är vårt mål!</p>
                    <hr />
                    <button><h3>BOKA HÄR</h3></button>
                    <hr />
                    {intensiveCards?.length > 0 &&
                    <div className="intensivePageEducationWrapper flexColumn">
                        {isCardsLoading && <p>Laddning...</p>}
                        {intensiveCards?.map(education =>
                            <IntensivePageSettingsCard
                                key={education._id}
                                education={education}
                                handlePrepareUpdate={handlePrepareUpdate}
                                handleDeleteIntensive={handleDeleteIntensive}
                            />
                        )}
                    </div>}
                    <h1
                        className='intensivePageSettingsButton squared40 flexCenter'
                        onClick={() => {setMenu(!menu); handleClearFields()}}
                        style={{ transform: `translate(-50%, 50%) rotate(${menu ? '45deg' : 0})` }}
                    >+</h1>
                </div>
            </div>
            <div ref={menuRef} className='intensivePageSettings flexColumn gap5'>
                <input type="text" className='styledInput1 bordered7' name='title' placeholder='Titel' title='Titel' value={intensiveObject.title} onChange={handlePrepareObject} />
                <input type="number" className='styledInput1 bordered7' name='price' placeholder='Pris' title='Pris' value={intensiveObject.price} onChange={handlePrepareObject} />
                <input type="number" className='styledInput1 bordered7' name='discount' placeholder='Rabatt' title='Rabatt' value={intensiveObject.discount} onChange={handlePrepareObject} />
                {intensiveObject.list?.length > 0 &&
                <ul className='flexColumn gap5'>
                    {intensiveObject.list?.map(option =>
                        <li key={option} style={{ transform: `translateX(${option === deletedOption ? '-100%' : '0%'}) scale(${option === highlightedOption ? '1.1' : '1'})`, width: option === addedOption ? '20%' : '100%' }}>
                            <p>- {option}</p>
                            <b onClick={() => handleRemoveFromList(option)}>🗑️</b>
                        </li>
                    )}
                </ul>}
                <div className='flexCenter gap5'>
                    <input ref={optionRef} type="text" className='styledInput1 bordered7' placeholder='Alternativ' title='Alternativ' value={option} onChange={e => setOption(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleAddToList()} />
                    <button className='styledInput1' onClick={handleAddToList}><h3>Lägg till alternativet</h3></button>
                </div>
                <button className='styledInput1' disabled={isSaving} onClick={handleCreateUpdateIntensive}><h3>{intensiveObject.id ? 'Uppdatera' : 'Spara'}</h3></button>
            </div>
            <FooterSettings />
        </div>
    )
}

export default IntensivePage;