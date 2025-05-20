import React, { useEffect, useRef, useState } from 'react';
import HeaderSettings from './HeaderSettings';
import FooterSettings from './FooterSettings';
import '../styles/aboutPage.css';
import { useUploadAboutImagesMutation, useReadAboutImagesQuery, useDeleteAboutImagesMutation } from '../features/schoolsApi';

const AboutPage = () => {
    const buttonRef = useRef(null);
    const [file, setFile] = useState(null);
    const [uploadImage] = useUploadAboutImagesMutation();
    const { data: images = [] } = useReadAboutImagesQuery();
    const [deleteImage] = useDeleteAboutImagesMutation();

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        if(file) {
            handleUpload();
            if (buttonRef.current) buttonRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
    }, [file]);

    const handleUpload = async () => {
        if (!file) return;
        const formData = new FormData();
        formData.append('image', file);
        try {
            await uploadImage(formData).unwrap();
            setFile('');
        } catch (err) {
            console.error('Upload error:', err);
            alert('Kunde inte ladda upp.');
        }
    }

    const handleDelete = async (url) => {
        const deleteConfirm = confirm('Vill du radera bilder?');
        if(!deleteConfirm) return;
        const filename = url.split('/').pop();
        try {
            await deleteImage(filename).unwrap();
        } catch (err) {
            console.error('Delete error:', err);
            alert('Kunde inte radera.');
        }
    }

    return (
        <div>
            <HeaderSettings />
            <div className="aboutPageWrapper navPage">
                <div>
                    <h1>Katrineholm Trafikskola</h1>
                    <br />
                    <p>Vårt mål är att du skall få en bra och effektiv utbildning. Vi strävar alltid efter en effektiv utbildning för varje individ. Att gå till en trafikskola och få sin körkortsutbildning innebär att man får en professionell inlärning.</p>
                    <br />
                    <p>Vi på <span>Katrineholm Trafikskola</span> AB utbildar bara inom behörighet B-körkort. För oss är anpassbarhet i körkortsutbildning en viktig grund för goda resultat.</p>
                    <br />
                    <p>Vi bemöter alla med förtroende och respekt. Vi tar gemensamt och personligt ansvar för din körkortsutbildning.</p>
                    <br />
                    <p>Vi hjälper dig med att planera din utbildning så att du lär dig det mesta möjliga på kortast möjliga tid.</p>
                    <br />
                    <p>Vi arbetar efter en given undervisningsplan. Kontakta oss på <span>Katrineholm Trafikskola</span>, så kan vi tillsammans kolla på hur just du ska göra för att nå målet med körkortet.</p>
                    <br />
                    <p>Du skall vara 16 år innan du får börja övningsköra. För bästa möjliga resultat rekommenderar vi att du börjar tidigt.</p>
                    <br />
                    <p>Kombinera gärna körningen på skolan med mängdträning hemma med din handledare. Givetvis har vi även intensivkurser för den som vill bli klar på kortare tid.</p>
                    <br />
                    <div className="aboutPageImageWrapper">
                        {images.map((url, idx) => (
                            <div key={idx} onClick={() => handleDelete(url)}>
                                <img src={`${import.meta.env.VITE_API_BASE_URL.replace('/api', '')}${url}`} alt={`Uploaded ${idx}`} />
                            </div>
                        ))}
                        <div ref={buttonRef} className='aboutPageSettingsWrapper'>
                            <label className="customFileUpload flexCenter">
                                <input type="file" onChange={(e) => setFile(e.target.files[0])} />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <FooterSettings />
        </div>
    )
}

export default AboutPage;