"use client";

import Floor from "@/components/Floor";
import Coin from "@/components/Coin";
import ShapeForum from "@/components/shapeForum/ShapeForum";

import "./page.css"

import { Canvas } from '@react-three/fiber'
import { Selection, Select, EffectComposer, Outline } from '@react-three/postprocessing'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'

import { useState } from "react";

export default function Home() {

  const [turkeySize, setTurkeySize] = useState("");
  const [stuffingSize, setStuffingSize] = useState("");
  const [map, setMap] = useState([]);
  
  function request() {
    // fetch(`https://penny-packing-backend-gwwxnnosfq-uw.a.run.app/api/square/${turkeySize}`)
    fetch(`http://localhost:8080/api/square/${turkeySize}/${stuffingSize}`)
      .then(response => { 
        if (response.ok) { 
          return response.json(); 
        } else { 
          console.log("fail: " + response)
          throw new Error('API request failed'); 
        } 
      }) 
      .then(data => { 
        console.log("API success"); 
        console.log(data);
        setMap(data.map(p => <Coin index={p} position={[p.x, p.y, p.z]} size={stuffingSize}/>));
        return data;
      }) 
      .catch(error => {  
        console.error(error);
      });
  }

  return (
    <div className="w-screen h-screen">

      <Canvas className="canvas">
        <PerspectiveCamera makeDefault position={[40,20,40]}/>
        <ambientLight/>
        <pointLight position={[10,10,10]}/>
        <OrbitControls enablePan={false} maxPolarAngle={Math.PI/2 - 0.2}/>
        
        <Selection>
          <EffectComposer multisampling={8} autoClear={false}>
            <Outline blur visibleEdgeColor="green" invisibleEdgeColor="green" edgeStrength={1000} width={1000} />
          </EffectComposer>
          {map}
        </Selection>
        
        <Floor/>
      </Canvas>

      <ShapeForum className="shapeForum" turkeyHandler={setTurkeySize} turkey={turkeySize} stuffing={stuffingSize} stuffingHandler={setStuffingSize}/>
      
      <div className="run" onClick={request}>
        <button > Run </button>
      </div>
    </div>
  );
}