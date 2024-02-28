import { useState } from 'react';
import axios from 'axios';
import Footer from './Footer';
import Nav from './Nav';
import { FiMapPin } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import { LuLinkedin } from 'react-icons/lu';

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('subject', subject);
    formData.append('message', message);

    try {
      await axios.post(
        'https://formsubmit.co/miriampaternain@gmail.com',
        formData
      );
      setName('');
      setEmail('');
      setSubject('');
      setMessage('');
    } catch (error) {
      console.error('Error sending the form:', error);
    }
  };
  return (
    <>
      <Nav />
      <div className='contactContainer'>
        <div className='contactContainer_info'>
          <p className='contactContainer_info--words'>
            <FiMapPin className='contactContainer_info--icon' />
            Madrid, Spain
          </p>
          <p className='contactContainer_info--words'>
            <GoMail className='contactContainer_info--icon' />
            miriampaternain@gmail.com
          </p>
          <a
            href='https://www.linkedin.com/in/miriam-paternain/'
            className='contactContainer_info--words openLinkedin'
            target='_blank'
            rel='noreferrer'>
            <LuLinkedin className='contactContainer_info--icon' />
            www.linkedin.com/in/miriam-paternain
          </a>
        </div>
        <p className='contactContainer_formTitle'>Contact Form</p>
        <form
          onSubmit={handleSubmit}
          action={`https://formsubmit.co/${process.env.REACT_APP_FORMSUBMIT_ID}`}
          className='contactContainer_form'>
          <label htmlFor='name' className='contactContainer_form--label'>
            Complete name / Nombre completo
          </label>
          <input
            type='text'
            id='name'
            name='name'
            placeholder='Name last Name / Nombre Apellido'
            className='contactContainer_form--input'
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label htmlFor='email' className='contactContainer_form--label'>
            Your email / Email
          </label>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='example@example.com'
            className='contactContainer_form--input'
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
          <label htmlFor='subject' className='contactContainer_form--label'>
            Subject / Asunto
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            placeholder='Hello!'
            className='contactContainer_form--input'
            value={subject}
            onChange={(event) => setSubject(event.target.value)}
          />
          <label htmlFor='message' className='contactContainer_form--label'>
            Message / Mensaje
          </label>
          <textarea
            type='text'
            id='message'
            name='Message'
            placeholder='Write your message here'
            className='contactContainer_form--inputMessage'
            value={message}
            onChange={(event) => setMessage(event.target.value)}
          />
          <button className='contactContainer_form--btn' type='submit'>
            Send / Enviar
          </button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
