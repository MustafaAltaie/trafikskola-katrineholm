import { useEffect, useState, forwardRef } from 'react';
import '../styles/Section4.css';
import { useSendMessageMutation } from '../features/schoolsApi';

const Section4 = forwardRef(( props, ref ) => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [isFilled, setIsFilled] = useState(false);
    const [sendMessage] = useSendMessageMutation();

    useEffect(() => {
        if(name.trim() && (mobile.trim() || email.trim())) {
            setIsFilled(true);
        } else {
            setIsFilled(false);
        }
    }, [name, mobile, email]);

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
        };

        sendMessage(newMessage);

        clearFields();

        alert('Your message has been sent successfully!');
    }

    const clearFields = () => {
        setName('');
        setMobile('');
        setEmail('');
        setMessage('');
        setIsFilled(false);
    }

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
                        <div>
                            <i className="fa-brands fa-facebook"></i>
                        </div>
                        <div>
                            <i className="fa-brands fa-facebook-messenger"></i>
                        </div>
                        <div>
                            <i className="fa-brands fa-instagram"></i>
                        </div>
                        <div>
                            <i className="fa-solid fa-mobile-screen-button"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
})

export default Section4;