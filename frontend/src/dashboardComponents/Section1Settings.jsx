import { useEffect, useState } from 'react';
import '../styles/section1.css';
import {
    useUploadHomeImageMutation,
    useReadHomeImageQuery,
    useDeleteHomeImageMutation
} from '../features/schoolsApi';

const Section1 = () => {
    const [file, setFile] = useState('');
    const [uploadHomeImage] = useUploadHomeImageMutation();
    const { data: files = [], refetch } = useReadHomeImageQuery();
    const [deleteHomeImage] = useDeleteHomeImageMutation();

    useEffect(() => {
        if(file) {
            handleAddFile();
        }
    }, [file]);


    const handleAddFile = async () => {
        if(!file) return;
        const formData = new FormData();
        formData.append('image', file);
        try {
            await uploadHomeImage(formData).unwrap();
            setFile('');
            await refetch();
        } catch (err) {
            console.log('Error occurred while uploading', err);
            alert('Kunde inte ladda upp bilden');
        }
    }

    const handleDelete = async () => {
        const deleteConfirm = confirm('Vill du radera bilder?');
        if(!deleteConfirm) return;
        try {
            await deleteHomeImage(file).unwrap();
        } catch (err) {
            console.error('Delete error:', err);
            alert('Kunde inte radera.');
        }
    }

    return (
        <section className="section1">
            <div className='Sec1ImageWrapper'>
                <div className='homeImageSettingsWrapper flexColumn'>
                    <label className='changeImageLabel'>
                        <input type="file" name='file' placeholder='File' onChange={e => setFile(e.target.files[0])} />
                        <p>{files.length > 0 ? 'Byta bilden' : 'Ladda upp en bild'}</p>
                    </label>
                    {files.length > 0 &&
                    <p onClick={handleDelete}>Radera bilden</p>}
                </div>
                {files.length > 0 &&
                <img src={`${import.meta.env.VITE_API_BASE_URL.replace('/api', '')}/images/home-image/homeImage.png`} alt="homeImage" />}
            </div>
            <div className="sec1DetailsWrapper">
                <h1>Välkommen till <span>katrineholm</span>-Eskilstuna <span>trafikskolan i katrineholm</span></h1>
                <p>Skaffa ditt körkort snabbt och smidigt hos oss. Erfaren lärare, flexibla tider och personligt stöd hela vägen.</p>
            </div>
        </section>
    )
}

export default Section1;