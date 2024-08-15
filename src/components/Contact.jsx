import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';
import { FaFacebook, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';

const Contact = ({ isDaylightMode }) => {
  return (
    <div
      name='contact'
      className={`w-full h-screen flex flex-col justify-center items-center p-4 mt-10 ${isDaylightMode ? 'bg-gray-100' : 'bg-[#0a192f]'} text-gray-300`}
    >
      <div className='flex flex-col justify-center items-center'>
        <form
          method='POST'
          action="https://usebasin.com/f/0b9b7194d0f2"
          className='flex flex-col max-w-[600px] w-full'
        >
          <div className='pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300'>
              Contact
            </p>
            <p className='text-[#8892b0] py-4'>
              Submit the form below or shoot me an email - josiahmonday700@gmail.com
            </p>
          </div>
          <input
            className='bg-[#ccd6f6] text-gray-800 p-2'
            type="text"
            placeholder='Name'
            name='name'
          />
          <input
            className='my-4 p-2 text-gray-800 bg-[#ccd6f6]'
            type="email"
            placeholder='Email'
            name='email'
          />
          <textarea
            className='bg-[#ccd6f6] text-gray-800 p-2'
            name="message"
            rows="10"
            placeholder='Message'
          ></textarea>
          <button className='text-gray-400 border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
            Let's Collaborate
          </button>
        </form>
      </div>
      <div className="flex items-center justify-center mt-10 pb-6 gap-10">
        <a href="https://www.facebook.com/josiah.monday.58"><FaFacebook className="text-2xl cursor-pointer" /></a>
        <a href="https://www.linkedin.com/in/josiah-monday/"><FaLinkedinIn className="text-2xl cursor-pointer" /></a>
        <a href="https://www.instagram.com/josiah_fx"><FaInstagram className="text-2xl cursor-pointer" /></a>
        <a href="https://twitter.com/emperor542"><FontAwesomeIcon icon={faXTwitter} className="text-2xl cursor-pointer" /></a>
        <a href="https://github.com/Josiahmonday"><FaGithub className="text-2xl cursor-pointer" /></a>
      </div>
    </div>
  );
};

export default Contact;
