import { useState } from "react";
import { send } from 'emailjs-com';
import './ContactForm.scss'

const ContactForm = () => {

    const [toSend, setToSend] = useState({
        from_name: '',
        to_name: 'Michał',
        message: '',
        reply_to: '',
      });
    
      const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_un3ff2i',
            'template_4scfuld',
            toSend,
            'Alv4PVFllGOstuSqJ'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
      };
    
      const handleChange = (e) => {
        setToSend({ ...toSend, [e.target.name]: e.target.value });
      };

    return (
        <div className="ContactForm">
            <form onSubmit={onSubmit}>
                <input
                    className="name-input"
                    type='text'
                    name='from_name'
                    placeholder='Your name'
                    value={toSend.from_name}
                    onChange={handleChange}
                />
                <input
                    className="email-input"
                    type='text'
                    name='reply_to'
                    placeholder='Your email'
                    value={toSend.reply_to}
                    onChange={handleChange}
                />
                <textarea
                    className="msg-input"
                    type='text'
                    name='message'
                    placeholder='Your message'
                    value={toSend.message}
                    onChange={handleChange}
                />
                
                <button type='submit' className="submit-btn">Send</button>
            </form>
        </div>
    );
}
 
export default ContactForm;