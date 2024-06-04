import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import UserTable from './UserTable';
import AddUser from './AddUser';


const App = () => {
  const [users, setUsers] = useState([
    
  ]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    
      <div className="app">
        <nav>
          <Link to="/">User Table</Link>
          <Link to="/add-user">Add User</Link>
        </nav>
        <Routes>
          <Route path="/" element={<UserTable users={users} />} />
          <Route path="/add-user" element={<AddUser addUser={addUser} />} />
        </Routes>
      </div>
   
  );
};

export default App;
