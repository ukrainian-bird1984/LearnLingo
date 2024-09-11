import React from 'react'; 
import { Link, useNavigate } from 'react-router-dom';
import Icon from '../components/Icon/Icon';

const Navbar = () => {
  const navigate = useNavigate(); // хук для навігації

  const handleRegistrationClick = () => {
    navigate('/register'); // перенаправлення на сторінку реєстрації
  };

  return (
    <nav>
      <Icon id="icon-logo28x28" />
      <Link to="/">Home</Link>
      <Link to="/teachers">Teachers</Link>
      <Icon id="icon-log-in20x20" />
      <Link to="/login">Log In</Link>
      <button onClick={handleRegistrationClick}>Registration</button>
    </nav>
  );
};

export default Navbar;
