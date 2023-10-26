// @ts-nocheck
import { useFrame } from "@react-three/fiber";
import { useRef } from "react";
import { Mesh } from "three";

function Cube() {
    const meshRef = useRef(Mesh);

    useFrame(() => {
      if (!meshRef.current) {
          return;
      }

      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    })

    return (
      <mesh ref={meshRef}>
        <boxGeometry />
        <meshStandardMaterial color="blue"/>
      </mesh>
    )
}

export default Cube;