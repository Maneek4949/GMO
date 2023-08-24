
import { useNavigate } from 'react-router-dom';
import Component1 from './component1';
import Component2 from './component2';
const SecondPage = () => {
  const navigate = useNavigate();

  const name = localStorage.getItem('name');
  const phone = localStorage.getItem('phone');
  const email = localStorage.getItem('email');

  if (!name || !phone || !email) {
    navigate('/first-page');
    alert("Please enter your details before accessing this page");
  }

  return (
    <div>
      <h2>Welcome to the second page!</h2>
      <p>Name: {name}</p>
      <p>Phone number: {phone}</p>
      <p>Email: {email}</p>
      <h2>Task 3 </h2>
      <Component1 />
      <h2>Task 4</h2>
      <Component2/>

    </div>
  );
};

export default SecondPage;