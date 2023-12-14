import React from 'react';
import { NavLink } from 'react-router-dom';

// The Nav component receives the dogs prop from App.js
function Nav({ dogs }) {
  return (
    <nav>
      {/* Map through the dogs array to create a NavLink for each dog */}
      {dogs.map(dog => (
        <NavLink key={dog.name} to={`/dogs/${dog.name.toLowerCase()}`}>
          {dog.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
