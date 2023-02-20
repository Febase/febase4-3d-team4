import * as THREE from "three";
import { useRef, useState } from "react";
import { useFrame, ThreeElements } from "@react-three/fiber";
import { TextureLoader } from 'three/src/loaders/TextureLoader'; 
import { useLoader } from '@react-three/fiber'; 

export function GenZPlanet(props: ThreeElements["mesh"]) {
  const ref = useRef<THREE.Mesh>(null!);
  const [selectedGenZIdx, setSelectedGenZIdx] = useState(0);
  
  const textures = [
    './genz-pink.jpeg',
    './genz-yellow.jpg',
    './genz.jpg',
    './genz-mix.jpeg',
  ]
  const textureArr = useLoader(TextureLoader, textures);

  useFrame((state, delta) => {ref.current.rotation.x += (delta/6); ref.current.rotation.y += (delta/8); });

  const onPlanetClick = () => {
    setSelectedGenZIdx(Math.floor(Math.random() * textures.length))
  }

  return (
    <mesh
      {...props}
      ref={ref}
      onClick={onPlanetClick}
    >
     <sphereBufferGeometry attach="geometry" args={[1, 28,28]} scale={4} />
     <meshStandardMaterial map={textureArr[selectedGenZIdx]} attach="material" />
    </mesh>
  );
}

export default GenZPlanet;