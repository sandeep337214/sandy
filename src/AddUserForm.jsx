import React, { useState } from 'react';

const AddUserForm = ({ addUser }) => {
  const [name, setName] = useState('');
  const [title, setTitle] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser({ name, title, email, role });
    setName('');
    setTitle('');
    setEmail('');
    setRole('');
  };

  return (
    <div>
      <h2>Add User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label>Email</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Role</label>
          <input type="text" value={role} onChange={(e) => setRole(e.target.value)} required />
        </div>
        <button type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUserForm;
