import logo from "./logo.svg";
import React from 'react';
import ReactDOM from 'react-dom';
import { Nav } from './Tag.js';
import { Image } from './image.js';
import "./App.css";

class App extends React.Component {
  render() {
    function tryfirst(){
      alert("Great Shot!");
    }
    function tryagain(){
      alert("keep practising!");
    }
   
    return (
      <div id='container'>
        <Nav  menu={tryfirst} />
        <Nav  menu={tryagain}/>
        <h1>RANDOM SENTENCE</h1>
        <p>
          Turning away from the ledge, he started slowly down the mountain, deciding that he would, that very night, satisfy his curiosity about the man-house. In the meantime, he would go down into the canyon and get a cool drink, after which he would visit some berry patches just over the ridge, and explore among the foothills a bit before his nap-time, which always came just after the sun had walked past the middle of the sky. At that period of the day the sun’s warm rays seemed to cast a sleepy spell over the silent mountainside, so all of the animals, with one accord, had decided it should be the hour for their mid-day sleep.
        </p>
        <Image />
        
        
      </div>
    );
  }
}

export default App;
