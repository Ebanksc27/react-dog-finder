import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Nav from './components/Nav';
import DogList from './components/DogList';
import DogDetails from './components/DogDetails';
import whiskey from './Images/whiskey.jpg'; 
import perry from './Images/perry.jpg'; 
import duke from './Images/duke.jpg'; 
import tubby from './Images/tubby.jpg'; 

function App() {
  // Your default props
  App.defaultProps = {
    dogs: [
      {
        name: "Whiskey",
        age: 5,
        src: whiskey,
        facts: [
          "Whiskey loves eating popcorn.",
          "Whiskey is a terrible guard dog.",
          "Whiskey wants to cuddle with you!"
        ]
      },
      {
        name: "Duke",
        age: 3,
        src: duke,
        facts: [
          "Duke believes that ball is life.",
          "Duke likes snow.",
          "Duke enjoys pawing other dogs."
        ]
      },
      {
        name: "Perry",
        age: 4,
        src: perry,
        facts: [
          "Perry loves all humans.",
          "Perry demolishes all snacks.",
          "Perry hates the rain."
        ]
      },
      {
        name: "Tubby",
        age: 4,
        src: tubby,
        facts: [
          "Tubby is really stupid.",
          "Tubby does not like walks.",
          "Angelina used to hate Tubby, but claims not to anymore."
        ]
      }
    ]
  };

  return (
    <div>
      <Nav dogs={App.defaultProps.dogs} />
      <Routes>
        {/* Use the element prop to pass components to your routes */}
        <Route path="/dogs" element={<DogList dogs={App.defaultProps.dogs} />} />
        <Route path="/dogs/:name" element={<DogDetails dogs={App.defaultProps.dogs} />} />
        {/* Redirect any other path to "/dogs" using the Navigate component */}
        <Route path="*" element={<Navigate to="/dogs" replace />} />
      </Routes>
    </div>
  );
}

export default App;
