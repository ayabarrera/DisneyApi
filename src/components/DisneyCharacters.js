import React from "react";

function DisneyCharacters({ name, imageUrl }) {
  return (
    <article className="card">
      <img
        src={imageUrl}
        alt={name}
      />
      <h2>{name}</h2> 
    </article>
  );
}

export default DisneyCharacters;
