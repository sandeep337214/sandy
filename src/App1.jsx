import React, { useState } from 'react';
import UserTable from './components/UserTable';
import AddUserForm from './AddUserForm';

const App1= () => {
  const [users, setUsers] = useState([
    { name: 'Lindsay Walton', title: 'Front-end Developer', email: 'lindsay.walton@example.com', role: 'Member' },
    { name: 'Courtney Henry', title: 'Designer', email: 'courtney.henry@example.com', role: 'Admin' },
    { name: 'Tom Cook', title: 'Director of Product', email: 'tom.cook@example.com', role: 'Member' },
    { name: 'Whitney Francis', title: 'Copywriter', email: 'whitney.francis@example.com', role: 'Admin' },
    { name: 'Leonard Krasner', title: 'Senior Designer', email: 'leonard.krasner@example.com', role: 'Owner' },
    { name: 'Floyd Miles', title: 'Principal Designer', email: 'floyd.miles@example.com', role: 'Member' },
  ]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div>
      <UserTable users={users} />
      <AddUserForm addUser={addUser} />
    </div>
  );
};

export default App1;
