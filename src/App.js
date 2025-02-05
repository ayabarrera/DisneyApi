import React from "react";
import DisneyCharacters from "./components/DisneyCharacters";
import './Style.css';


function App() {
  return (
    <main className="character-container">
      <h1>Disney Characters</h1>
       <div>
        <DisneyCharacters />
        </div>
    </main>

  );
}

export default App;
