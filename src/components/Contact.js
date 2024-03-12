import { useRef, useState } from 'react';

import Footer from './Footer';
import Nav from './Nav';
import { FiMapPin } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import { LuLinkedin } from 'react-icons/lu';
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef();
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    const serviceId = process.env.REACT_APP_SERVICE_ID;
    const templateId = process.env.REACT_APP_TEMPLATE_ID;
    const publicKeyEmail = process.env.REACT_APP_PUBLIC_KEY;

    emailjs
      .sendForm(serviceId, templateId, form.current, {
        publicKey: publicKeyEmail,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setShowSuccessMessage(true);
          form.current.reset();
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
        <p className='contactContainer_formTitle'>Formulario de contacto</p>
        <p className='contactContainer_formText'>
          ¿Tienes preguntas? No dudes en escribirme un mensaje rellenando el
          siguiente formulario:{' '}
        </p>
        <form ref={form} onSubmit={sendEmail} className='contactContainer_form'>
          <label htmlFor='name' className='contactContainer_form--label'>
            Nombre completo
          </label>
          <input
            type='text'
            id='name'
            name='user_name'
            placeholder='Nombre Apellido'
            className='contactContainer_form--input'
          />
          <label htmlFor='email' className='contactContainer_form--label'>
            Tu email
          </label>
          <input
            type='text'
            id='email'
            name='email'
            placeholder='ejemplo@ejemplo.com'
            className='contactContainer_form--input'
          />
          <label htmlFor='subject' className='contactContainer_form--label'>
            Asunto
          </label>
          <input
            type='text'
            id='subject'
            name='subject'
            placeholder='¡Hola!'
            className='contactContainer_form--input'
          />
          <label htmlFor='message' className='contactContainer_form--label'>
            Mensaje
          </label>
          <textarea
            type='text'
            id='message'
            name='message'
            placeholder='Escribe tu mensaje aquí'
            className='contactContainer_form--inputMessage'
          />
          <button className='contactContainer_form--btn' type='submit'>
            Enviar
          </button>
          {showSuccessMessage && (
            <p className='contactContainer_succesMessage'>
              ¡Gracias por tu mensaje! <br />
              <br />
              Me pondré en contacto contigo lo antes posible.
            </p>
          )}
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
