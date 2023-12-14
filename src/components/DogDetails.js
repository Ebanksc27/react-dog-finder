import React from 'react';
import { useParams, Navigate } from 'react-router-dom';

function DogDetails({ dogs }) {
  const { name } = useParams(); // Get the dog name from URL parameter

  // Find the dog whose name matches the URL parameter
  const dog = dogs.find(d => d.name.toLowerCase() === name.toLowerCase());

  // If no dog is found, redirect to the /dogs route
  if (!dog) {
    return <Navigate replace to="/dogs" />;
  }

  return (
    <div>
      <h1>{dog.name}</h1>
      <img src={dog.src} alt={dog.name} style={{ width: "250px" }} />
      <p>Age: {dog.age}</p>
      <ul>
        {/* List out the facts about the dog */}
        {dog.facts.map((fact, index) => (
          <li key={index}>{fact}</li>
        ))}
      </ul>
    </div>
  );
}

export default DogDetails;
