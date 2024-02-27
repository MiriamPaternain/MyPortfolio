import Footer from './Footer';
import Nav from './Nav';
import { FiMapPin } from 'react-icons/fi';
import { GoMail } from 'react-icons/go';
import { LuLinkedin } from 'react-icons/lu';

function Contact() {
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
        <form action='' className='contactContainer_form'>
          <label htmlFor='name' className='contactContainer_form--label'>
            Complete name
          </label>
          <input
            type='text'
            id='name'
            placeholder='Miriam Paternáin'
            className='contactContainer_form--input'
          />
          <label htmlFor='email' className='contactContainer_form--label'>
            Your email
          </label>
          <input
            type='text'
            id='email'
            placeholder='example@example.com'
            className='contactContainer_form--input'
          />
          <label htmlFor='issue' className='contactContainer_form--label'>
            Issue
          </label>
          <input
            type='text'
            id='issue'
            placeholder='Hello!'
            className='contactContainer_form--input'
          />
          <label htmlFor='message' className='contactContainer_form--label'>
            Message
          </label>
          <input
            type='text'
            id='message'
            placeholder='Write your message here'
            className='contactContainer_form--inputMessage'
          />
          <button className='contactContainer_form--btn'>Send Message</button>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
