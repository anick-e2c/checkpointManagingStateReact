import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Valeur de l'entrée: ${inputRef.current.value}`);
  };

  return (  
    
    <div className="flex-row bg-secondary">
        <h2>Input non contrôlé</h2>

        <form onSubmit={handleSubmit}>
        <label>
            Nom:
            <input type="text" ref={inputRef} />
        </label>
        <button type="submit">Soumettre</button>
        </form>
    </div>
  );
}

export default UncontrolledInput;
