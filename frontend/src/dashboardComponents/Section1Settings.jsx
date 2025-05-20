import { useEffect, useRef, useState } from 'react';
import '../styles/section1.css';
import { useUploadHomeImagesMutation, useReadHomeImagesQuery, useDeleteHomeImagesMutation } from '../features/schoolsApi';

const Section1 = () => {
    const [menu, setMenu] = useState(false);
    const [imageMenu, setImageMenu] = useState(false);
    const [file, setFile] = useState(null);
    const [uploadHomeImages] = useUploadHomeImagesMutation();
    const { data: images = [] } = useReadHomeImagesQuery();
    const [deleteHomeImages] = useDeleteHomeImagesMutation();
    const galleryRef = useRef(null);
    const [count, setCount] = useState(0);
    const imagesLength = images.length;

    useEffect(() => {
        if(file) {
            handleAddFile();
            if(galleryRef.current) {
                setTimeout(() => {
                    galleryRef.current.scrollTo({ top: galleryRef.current.scrollHeight, behavior: 'smooth' });
                }, 100);
            }
        }
    }, [file]);

    useEffect(() => {
        if(imagesLength > 0) {
            const imageInt = setInterval(() => {
                setCount(prev => (prev + 1) % imagesLength);
            }, 5000);

            return () => clearInterval(imageInt);  
        }
    }, [imagesLength]);


    const handleAddFile = async () => {
        if(!file) return;
        const formData = new FormData();
        formData.append('image', file);
        try {
            await uploadHomeImages(formData).unwrap();
            setFile('');
        } catch (err) {
            console.log('Error occurred while uploading', err);
            alert('Kunde inte ladda upp bilden');
        }
    }

    const handleDelete = async (img) => {
        const deleteConfirm = confirm('Vill du radera bilder?');
        if(!deleteConfirm) return;
        const file = img.split('/').pop();
        try {
            await deleteHomeImages(file).unwrap();
        } catch (err) {
            console.error('Delete error:', err);
            alert('Kunde inte radera.');
        }
    }

    return (
        <section className="section1">
            <div className='Sec1ImageWrapper'>
                {images?.map((image, indx) =>
                    <img key={indx} className={(indx === count && imagesLength > 0) ? 'viewedHomeImage' : 'homeImage'} src={`${import.meta.env.VITE_API_BASE_URL.replace('/api', '')}${image}`} alt="img" />)}
                <div className="settingsBtn" onClick={() => setMenu(true)}>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                {menu &&
                <div className="sec1SettingsMenu bgLines">
                    <label>Lägg till bilder
                        <input type="file" onChange={e => setFile(e.target.files[0])} />
                    </label>
                    <p onClick={() => setImageMenu(!imageMenu)}>{imageMenu ? 'Dölj bilderna' : 'Visa bilderna'}</p>
                    {imageMenu &&
                    <div ref={galleryRef} className="sec1ImagesWrapper">
                        {images.map((image, index) =>
                        <div key={index} onClick={() => handleDelete(image)}><img src={`${import.meta.env.VITE_API_BASE_URL.replace('/api', '')}${image}`} alt="image" /></div>)}
                    </div>}
                    <p onClick={() => setMenu(false)}>Stäng meny</p>
                </div>}
            </div>
            <div className="sec1DetailsWrapper">
                <h1>Välkommen till <span>katrineholm</span>-Eskilstuna <span>trafikskolan i katrineholm</span></h1>
                <p>Skaffa ditt körkort snabbt och smidigt hos oss. Erfaren lärare, flexibla tider och personligt stöd hela vägen.</p>
            </div>
        </section>
    )
}

export default Section1;