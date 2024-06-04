import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './App.css'

const AddUser = ({ addUser }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    if (!termsAccepted) {
      alert("You must accept the terms and conditions!");
      return;
    }
    addUser({ name, email });
    navigate('/');
  };

  return (
    <div className="add-user-container">
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Enter your name</label>
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Enter your email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Create a password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>
        <div>
          <label>Confirm a password</label>
          <input 
            type="password" 
            value={confirmPassword} 
            onChange={(e) => setConfirmPassword(e.target.value)} 
            required 
          />
        </div>
        <div className="terms">
          <input 
            type="checkbox" 
            checked={termsAccepted} 
            onChange={(e) => setTermsAccepted(e.target.checked)} 
            required 
          />
          <label>I accept all terms & conditions</label>
        </div>
        <button type="submit">Register Now</button>
      </form>
      <div className="login-link">
        Already have an account? <a href="/login">Login now</a>
      </div>
    </div>
  );
};

export default AddUser;
