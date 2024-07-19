import React, { useState, useEffect } from 'react';


const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://dummyjson.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setUsers(data.users); // Adjusted to match the API's data structure
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return <div className="user-list-container">Loading...</div>;
  }

  if (error) {
    return <div className="user-list-container">Error: {error}</div>;
  }

  return (
    <div className="user-list-container">
      <h1 className="user-list-title">User List</h1>
      <ul className="user-list">
        {users.map(user => (
          <li key={user.id} className="user-list-item">
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
