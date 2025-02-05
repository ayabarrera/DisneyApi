import { useEffect, useState } from "react";
import DisneyCharacters from "./components/DisneyCharacters";
import './Style.css';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    fetch("https://api.disneyapi.dev/character")
      .then((response) => response.json())
      .then((data) => setCharacters(data.data));
  }, []);

 return (
    <main className="character-container">
      <h1>Disney Characterssss</h1>
      <div>
        {characters.map((character) => (
          <DisneyCharacters
            key={character.id}
            name={character.name}
            imageUrl={character.imageUrl}
          />
        ))}
      </div>
    </main>
  );
}
export default App;