import React, { useState } from 'react';

const App = () => {
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  function handleChange(e) {
    setPassword(e.target.value);
  }

  function togglePasswordVisibility() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  return (
    <div>
      <h1>{isPasswordVisible ? password : '****'}</h1>
      <label>
        {isPasswordVisible ? 'Text' : 'Password'}:
        <input type={isPasswordVisible ? 'text' : 'password'} onChange={handleChange} />
      </label>
      <button onClick={togglePasswordVisibility}>Toggle</button>
    </div>
  );
};

export default App;
