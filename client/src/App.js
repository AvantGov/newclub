// * DEPENDS 
import React, {useEffect} from 'react';
import Display from './Components/Display';
// * CSS 
import './App.css';

// * MODS
const Hydra = require('hydra-synth');


function App() {
  // creating background
  var texture = document.createElement("canvas")
  texture.setAttribute("class","texture")
  texture.setAttribute("id","txtr_main")

  // init module 
  const createHydra = (context) => {
    const hydra = new Hydra({
      detectAudio: false,
      canvas: texture,
      makeGlobal: false
    }).synth
    hydra.gradient(1).out()
  }

  // add the module output after DOM rendering
  useEffect(() => {
    createHydra()
    const A = document.getElementById("App")
    A.insertBefore(texture, A.childNodes[0])
  },[texture])

  return (
    <div id="App" className="App">
      <Display />
    </div>
  );
}

export default App;
