import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const GetAQuote = () => {
  const form = useRef();
  const [formError, setFormError] = useState(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [selectedService, setSelectedService] = useState('');

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
    .sendForm('service_dv7wh96', 'template_bsvmkq7', form.current, {
        publicKey: 'bD4Vm_zoa3MYX5QBf',
        selectedService: selectedService,
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setFormError(null);
          form.current.reset(); // Reset form after successful submission
          setSelectedService('');
          toast.success('Quote request sent successfully to Fischer Telesec');
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

  const handleSelectChange = (e) => {
    setSelectedService(e.target.value);
  };

  return (
    <div>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', margin: '20px 0' }}>Get a Quote</h1>
      <form ref={form} onSubmit={sendEmail} style={{ maxWidth: '400px', margin: '0 auto', paddingBottom: '20px' }}>
        <label style={{ display: 'block', marginBottom: '10px' }}>Name</label>
        <input type="text" name="user_name" required onChange={handleInputChange} style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }} />
        
        <label style={{ display: 'block', marginBottom: '10px' }}>Email</label>
        <input type="email" name="user_email" required onChange={handleInputChange} style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }} />
        
        <label style={{ display: 'block', marginBottom: '10px' }}>Service</label>
        <select name="service" onChange={handleSelectChange} value={selectedService} required style={{ width: '100%', padding: '10px', marginBottom: '20px', border: '1px solid #ccc', borderRadius: '5px' }}>
          <option value="">Select Service</option>
          <option value="Telecomunication Service">Telecomunication Service</option>
          <option value="Communication Site Maintanance">Communication Site Maintanance</option>
          <option value="IT Service">IT Service</option>
          <option value="Data Center Services">Data Center Services</option>
          <option value="Management As a Service">Management As a Service</option>
        </select>
        
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
