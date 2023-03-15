

import React, { useState, useEffect } from "react";
import { getCharacter } from "rickmortyapi";
import "./App.css";

function App() {
  const [character, setCharacter] = useState(null);

  useEffect(() => {
    getCharacter(1).then((data) => setCharacter(data.data));
  }, []);

  return (
    <div className="App">
      {character && (
        <div>
          <h1>{character.name}</h1>
          <img src={character.image} alt={character.name} />
        </div>
      )}
    </div>
  );
}

export default App;
