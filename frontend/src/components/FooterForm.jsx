import { useSendMessageMutation } from '../features/schoolsApi';
import { useState } from 'react';

const FooterForm = () => {
    const [sendMessage] = useSendMessageMutation();
    const [newMessage, setNewMessage] = useState({
        name: '',
        mobile: '',
        email: '',
        message: '',
    });

    const handlePreparemessage = (e) => {
        setNewMessage(prev => ({
            ...prev, [e.target.name]: e.target.value
        }));
    }

    const handleSendMessage = () => {
        if(!newMessage.name || !newMessage.mobile || !newMessage.message) {
            alert('För att kunna skicka, vänligen fyll i samtliga fält.');
            return;
        }
        sendMessage(newMessage);
        clearFields();
        alert('Tack för att du kontaktade oss, vi hör av oss så snart som möjligt.');
    }

    const clearFields = () => {
        setNewMessage({
            name: '',
            mobile: '',
            email: '',
            message: '',
        });
    }

    return (
        <div className='footerContact flexColumn'>
            <p>Kontakta oss eller Boka Direkt Här:</p>
            <div className='flexColumn'>
                <div>
                    <input type="text" className='styledInput1' title='Namn' placeholder='Ditt namn' name='name' value={newMessage.name} onChange={handlePreparemessage} />
                    <input type="number" className='styledInput1' title='Nummer' placeholder='Ditt nummer' name='mobile' value={newMessage.mobile} onChange={handlePreparemessage} />
                </div>
                <textarea className='styledInput1' title='Meddelande' placeholder='Meddelande' name='message' value={newMessage.message} onChange={handlePreparemessage}></textarea>
                <button className='styledInput1' onClick={handleSendMessage}>Skicka</button>
            </div>
        </div>
    )
}

export default FooterForm;