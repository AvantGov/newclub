// * DEPENDS
import React, { useEffect } from "react";
import Display from "./Components/Display";
// * CSS
import "./App.css";

// * MODS
const Hydra = require("hydra-synth");

function App() {
  // creating background
  var texture = document.createElement("canvas");
  texture.setAttribute("class", "texture");
  texture.setAttribute("id", "txtr_main");

  // init module
  const createHydra = (context) => {
    const hydra = new Hydra({
      detectAudio: false,
      canvas: texture,
      makeGlobal: false,
    }).synth;
    hydra.setResolution(1920,1080)
    hydra.bpm = 142
    hydra.gradient(0.1)
    .color(0,1,2)
    .scrollX(0, () => Math.sin(hydra.bpm)*0.05 )
    .scrollY(0, () => Math.sin(hydra.bpm)*-0.07 )
    .pixelate(10,8)
    .scale(0.15)
    .modulate(hydra.noise(1,0.25))
    .mult(
      hydra.gradient(() => Math.cos(hydra.bpm)/4)
      .color(0,.5,1.5)
      .colorama(() => Math.sin(hydra.bpm)/4)
    )
    .diff(
      hydra.osc(10,.25,() => Math.cos(hydra.bpm)/8)
    )  
    .diff( 
      hydra.shape(4, .4)
        .repeat(() => hydra.mouse.x/10, () => hydra.mouse.y/10)
        .rotate(() => (hydra.time%360)/8) 
      )
    .out(hydra.o0)
  };

  // .colorama(1).color(0,() => Math.sin(hydra.time),.45).colorama(.01).colorama(.01).colorama(.01).colorama(.01)
  // .mult(hydra.shape(4,() => Math.sin(hydra.time/2)).repeat(1,10))
  //.color(0,() => Math.sin(hydra.time),() => Math.cos(hydra.time/2))
  // add the module output after DOM rendering
  useEffect(() => {
    createHydra();
    const A = document.getElementById("App");
    A.insertBefore(texture, A.childNodes[0]);
  }, [texture]);

  return (
    <div id="App" className="App">
      <Display />
    </div>
  );
}

export default App;
