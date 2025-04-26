import React, { useState } from 'react';

const ControlledInput = () => {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <div className="flex-row bg-secondary">
        <h2>Input contrôlé</h2>
      <label htmlFor="controlled-input">Saisissez quelque chose :</label>
      <input
        type="text"
        id="controlled-input"
        value={inputValue}
        onChange={handleChange}
      />
      <p>Vous avez saisi : {inputValue}</p>
    </div>
  );
};

export default ControlledInput;
