import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem('name', name);
    localStorage.setItem('phone', phone);
    localStorage.setItem('email', email);
    if (name==='' || phone==='' || email==='') {
      navigate('/first-page');
      alert("Please enter your details before accessing this page");
    }
    else{
    navigate('/second-page');}
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      </label>
      <label>
        Phone number:
        <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </label>
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;