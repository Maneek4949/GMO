import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from '@mui/material/Input';
import FormLabel from '@mui/material/FormLabel';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Card from '@mui/material/Card';

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
    <Card style={{minHeight:"300px",maxWidth:"300px",margin:"auto", padding:"30px"}}>
    <form onSubmit={handleSubmit} >
      <FormLabel style={{marginTop:"30px", display:"block"}}>
        Name:</FormLabel>
        <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <FormLabel style={{marginTop:"30px", display:"block"}}>
        Phone number:</FormLabel>
        <Input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
      <FormLabel style={{marginTop:"30px", display:"block"}}>
        Email:</FormLabel>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Button style={{marginTop:"30px", display:"block"}} variant="contained" type="submit">Submit</Button>
    </form>
    </Card>
  );
};

export default Form;