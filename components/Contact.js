import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ContactUs = () => {
  const form = useRef();
  const [formError, setFormError] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const sendEmail = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    const formData = new FormData(form.current);
    let isFormValid = true;
    formData.forEach((value) => {
      if (!value) {
        isFormValid = false;
      }
    });

    if (!isFormValid) {
      setFormError('Please fill in all fields.');
      return;
    }

    // Send email if form is valid
    emailjs
      .sendForm('service_dv7wh96', 'template_nf3bs2w', form.current, {
        publicKey: 'bD4Vm_zoa3MYX5QBf',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormError(null);
          form.current.reset(); // Reset form after successful submission
          toast.success('Message sent successfully');
        },
        (error) => {
          console.log('FAILED...', error.text);
          setFormError('Failed to send message. Please try again later.');
        },
      );
  };

  const handleInputChange = () => {
    // Check if all fields are filled
    const formData = new FormData(form.current);
    let isFormValid = true;
    formData.forEach((value) => {
      if (!value) {
        isFormValid = false;
      }
    });
    setIsButtonDisabled(!isFormValid);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', margin: '20px 0' }}>Contact Us</h1>
      <form ref={form} action="https://formspree.io/f/xrgnqjeo" method="POST" style={{ maxWidth: '400px', margin: '0 auto', paddingBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '10px' }}>Name</label>
        <input type="text" name="user_name" required onChange={handleInputChange} style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }} />
        
        <label style={{ display: 'block', marginBottom: '10px' }}>Email</label>
        <input type="email" name="user_email" required onChange={handleInputChange} style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }} />
        
        <label style={{ display: 'block', marginBottom: '10px' }}>Message</label>
        <textarea name="message" required onChange={handleInputChange} style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }}></textarea>
        
        {isButtonDisabled && <p style={{ color: 'red', marginBottom: '20px' }}>All fields are required.</p>}
        {formError && <p style={{ color: 'red', marginBottom: '20px' }}>{formError}</p>}
        
        <div style={{ textAlign: 'center' }}>
          <button type="submit" disabled={isButtonDisabled} style={{ backgroundColor: isButtonDisabled ? '#6c757d' : '#007bff', color: '#fff', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer' }}>Send</button>
        </div>
      </form>
    </div>
  );
};