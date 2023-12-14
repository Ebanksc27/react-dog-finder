import React from 'react';
import { Link } from 'react-router-dom';

// The DogList component also receives the dogs prop from App.js
function DogList({ dogs }) {
  return (
    <div>
      <h1>Dogs</h1>
      {/* Display each dog's name as a link */}
      {dogs.map(dog => (
        <div key={dog.name}>
          <img src={dog.src} alt={dog.name} style={{ width: "150px" }} />
          <h2><Link to={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</Link></h2>
        </div>
      ))}
    </div>
  );
}

export default DogList;
