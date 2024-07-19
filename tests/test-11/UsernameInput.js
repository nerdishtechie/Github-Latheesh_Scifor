import React, { useState } from 'react';
const UsernameInput = () => {
  const [username, setUsername] = useState('');

  const handleInputChange = (event) => {
    setUsername(event.target.value);
  };

  return (
    <div className="username-input-container">
      <label htmlFor="username" className="username-label">Username:</label>
      <input
        type="text"
        id="username"
        className="username-input"
        value={username}
        onChange={handleInputChange}
      />
      <p className="username-display">Your username is : {username}</p>
    </div>
  );
};

export default UsernameInput;
