import { useRef } from 'react';

import Footer from './Footer';
import Nav from './Nav';
import { FiMapPin } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import { LuLinkedin } from 'react-icons/lu';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKey = process.env.REACT_APP_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKey,
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
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
        <form ref={form} onSubmit={sendEmail} className='contactContainer_form'>
          <label htmlFor='name' className='contactContainer_form--label'>
            Complete name / Nombre completo
          </label>
          <input
            type='text'
            id='name'
            name='user_name'
            placeholder='Name last Name / Nombre Apellido'
            className='contactContainer_form--input'
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
          />
          <label htmlFor='message' className='contactContainer_form--label'>
            Message / Mensaje
          </label>
          <textarea
            type='text'
            id='message'
            name='message'
            placeholder='Write your message here'
            className='contactContainer_form--inputMessage'
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
