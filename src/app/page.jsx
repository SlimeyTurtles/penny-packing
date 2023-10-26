"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Floor from "@/components/Floor";
import Coin from "@/components/Coin";
import ShapeForum from "@/components/shapeForum/ShapeForum";

export default function Home() {
  return (
    <div className="w-screen h-screen">
      <ShapeForum />
      <Canvas>
        <PerspectiveCamera makeDefault position={[40,20,40]}/>
        <ambientLight/>
        <pointLight position={[10,10,10]}/>
        <OrbitControls enablePan={false} maxPolarAngle={Math.PI/2 - 0.2}/>

        <Floor/>
      </Canvas>
    </div>
  );
}