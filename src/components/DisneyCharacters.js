import React, { useEffect, useState } from "react";

const CharacterList = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://api.disneyapi.dev/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.data));
  }, []);

  return (
    <div id="characters">
      {characters.map((character) => (
        <div className="character-card" key={character.id}>
          <img src={character.imageUrl} alt={character.name} />
          <h3>{character.name}</h3>
        </div>
      ))}
    </div>
  );
};

export default CharacterList;
