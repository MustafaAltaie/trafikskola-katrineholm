import { useEffect, useState, forwardRef, useRef } from 'react';
import '../styles/Section4.css';
import { useSendMessageMutation, useUpdateSec4SocialLinksMutation, useReadSec4SocialLinksQuery } from '../features/schoolsApi';

const Section4 = forwardRef(( props, ref ) => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isFilled, setIsFilled] = useState(false);
    const [sendMessage] = useSendMessageMutation();
    const [menu, setMenu] = useState(false);
    const menuRef = useRef(null);
    const [updateSec4SocialLinks] = useUpdateSec4SocialLinksMutation();
    const { data: mediaLinks, isLoading } = useReadSec4SocialLinksQuery();
    const [links, setLinks] = useState({
        link1: '',
        link2: '',
        link3: '',
        link4: '',
    });

    useEffect(() => {
        if(name.trim() && (mobile.trim() || email.trim())) {
            setIsFilled(true);
        } else {
            setIsFilled(false);
        }
    }, [name, mobile, email]);

    useEffect(() => {
        if (menu) {
            if (menuRef.current) {
                menuRef.current.classList.add('sec4SettingsOn');
                menuRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        } else {
            if (menuRef.current)
                menuRef.current.classList.remove('sec4SettingsOn');
        }
    }, [menu]);

    useEffect(() => {
        if(mediaLinks) {
            setLinks({
                link1: mediaLinks?.link1 || '',
                link2: mediaLinks?.link2 || '',
                link3: mediaLinks?.link3 || '',
                link4: mediaLinks?.link4 || '',
            });
        }
    }, [mediaLinks]);

    const handleMessage = () => {
        const isValidEmail = (email) => /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email);
        if (!isValidEmail(email) && !mobile) {
            alert('Please enter a valid email address or mobile number');
            return;
        }

        const newMessage = {
            name,
            mobile: mobile.trim() ? Number(mobile) : null,
            email,
            message,
        }

        sendMessage(newMessage);

        clearFields();

        alert('Tack för att du kontaktade oss, vi hör av oss så snart som möjligt.');
    }

    const clearFields = () => {
        setName('');
        setMobile('');
        setEmail('');
        setMessage('');
        setIsFilled(false);
    }

    const prepareLinks = (e) => {
        setLinks(prev => ({
            ...prev, [e.target.name]: e.target.value
        }));
    }

    const handleUpdateLinks = async () => {
        try {
            const res = await updateSec4SocialLinks(links);
            if(res) {
                setMenu(false);
            }
        } catch (err) {
            console.log('Error updating links', err);
            alert('Uppdateringen gick inte!');
        }
    }

    const icons = [
        { key: 'link1', perfix: 'https://www.facebook.com/', icon: 'fa-brands fa-facebook' },
        { key: 'link2', perfix: 'https://m.me/', icon: 'fa-brands fa-facebook-messenger' },
        { key: 'link3', perfix: 'https://www.instagram.com/', icon: 'fa-brands fa-instagram' },
        { key: 'link4', perfix: 'tel:', icon: 'fa-solid fa-mobile-screen-button' },
    ];

    return (
        <section className='section4' ref={ref}>
            <div className="sec4MainWrapper">
                <h1>Kontakta oss</h1>
                <div className='sec4Contact flexColumn'>
                    <p><i className="fa-solid fa-phone"></i>0737025139</p>
                    <p><i className="fa-solid fa-envelope"></i>mohanad@gmail.com</p>
                </div>
                <h1>Låt oss kontakta dig. Lämna oss ett meddelande så att vi kontaktar dig så snabb som möjligt.</h1>
                <div className="sec4Form flexColumn">
                    <div>
                        <p>Ditt Namn</p>
                        <input type="text" value={name} onChange={e => setName(e.target.value)} />
                    </div>
                    <div>
                        <p>Ditt Mobilnummer</p>
                        <input type="number" value={mobile} onChange={e => setMobile(e.target.value)} />
                    </div>
                    <div>
                        <p>Ditt Email</p>
                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <p>Ditt Meddelande</p>
                        <textarea  value={message} onChange={e => setMessage(e.target.value)}></textarea>
                    </div>
                    <button onClick={handleMessage} disabled={!isFilled}>Skicka</button>
                </div>
                <div className='sec4SocialMediaWrapper'>
                    <h1>Du kan också kontakta oss på sociala medier.</h1>
                    <div className='ec4SocialMedia'>
                        <h2 className='footerSettingsButton' onClick={() => setMenu(!menu)} style={{ transform: 'translateY(-100%)' }}>🖋️</h2>
                        {isLoading && <p>Loading...</p>}
                        {icons.map(icon => (
                            <div key={icon.key} style={{ pointerEvents: links[icon.key] ? 'all' : 'none' }}>
                                <a href={links[icon.key] ? icon.perfix + links[icons[0].key] : '#'} target='_blank' rel='noopener noreferrer'>
                                    <i className={icon.icon}></i>
                                </a>
                            </div>
                        ))}
                    </div>
                    <div ref={menuRef} className='sec4Settings flexColumn'>
                        <input type="text" className='styledInput1' title='Facebook' placeholder='Facebook' name='link1' value={links.link1} onChange={prepareLinks} />
                        <input type="text" className='styledInput1' title='Messenger' placeholder='Messenger' name='link2' value={links.link2} onChange={prepareLinks} />
                        <input type="text" className='styledInput1' title='Instagram' placeholder='Instagram' name='link3' value={links.link3} onChange={prepareLinks} />
                        <input type="text" className='styledInput1' title='Mobile' placeholder='Mobile' name='link4' value={links.link4} onChange={prepareLinks} />
                        <button className='styledInput1' onClick={handleUpdateLinks}>Spara</button>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Section4;