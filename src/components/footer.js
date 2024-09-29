import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const Footer = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4gr6dbe', 'template_0c21rmn', form.current, {
        publicKey: 'd9hxUKoy0n9s-scve',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          e.target.reset();
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <div>
      {/* Email Form Section */}
      <div className='w-full h-auto bg-gray-800 text-center p-20'>
        <h1 className='font-black text-xl font-serif text-lime-400'>Send an Email</h1>
        <form ref={form} onSubmit={sendEmail} className='flex flex-col items-start space-y-6 mx-auto max-w-lg mt-10'>
          <div className="w-full flex flex-col sm:flex-row items-center">
            <label className='w-24 text-white mb-2 sm:mb-0'>Name:</label>
            <input type="text" name="to_name" className="w-full p-2 rounded-md border-2 border-gray-300" />
          </div>

          <div className="w-full flex flex-col sm:flex-row items-center">
            <label className='w-24 text-white mb-2 sm:mb-0'>Email:</label>
            <input type="email" name="user_email" className="w-full p-2 rounded-md border-2 border-gray-300" />
          </div>

          <div className="w-full flex flex-col sm:flex-row items-center">
            <label className='w-24 text-white mb-2 sm:mb-0'>Message:</label>
            <textarea name="message" className="w-full p-2 rounded-md border-2 border-gray-300" rows="4" />
          </div>

          <button className='p-3 mt-4 ml-60 rounded-lg text-white bg-red-500 font-serif font-black hover:bg-purple-900 border-3 border-black'>
            Send
          </button>
        </form>
      </div>
</div>
  );
};

export default Footer;
