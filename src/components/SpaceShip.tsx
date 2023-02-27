import React, { useEffect, useRef, useState } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useDecelerateInterval } from "../hooks/useDecelerateInterval";
import { EUNSIK_SPACE_POSITION } from "../constant";

interface SpaceShipProps {
  timer?: number;
}

export function SpaceShip({ timer = 2000 }: SpaceShipProps) {
  const { nodes, materials } = useGLTF("/spaceship/scene.gltf") as any;
  const spaceShipRef = useRef<THREE.Group>(null!);
  const { startInterval } = useDecelerateInterval(
    () => {
      const x = spaceShipRef.current.position.x;
      const y = spaceShipRef.current.position.y;
      const z = spaceShipRef.current.position.z;
      spaceShipRef.current.position.set(x + 0.02, y, z);
    },
    {
      startMs: 2,
      interval: 1.005,
      maxMs: 1000,
    }
  );

  useEffect(() => {
    const x = Math.random() * 3 - 1.5;
    const y = Math.random() * 3 - 1.5;
    spaceShipRef.current.position.set(
      EUNSIK_SPACE_POSITION,
      EUNSIK_SPACE_POSITION + x,
      EUNSIK_SPACE_POSITION + y
    );
    spaceShipRef.current.rotateY(-1.6);
    spaceShipRef.current.scale.set(0, 0, 0);
    const timeout = setTimeout(() => {
      startInterval();
      spaceShipRef.current.scale.set(0.07, 0.07, 0.07);
    }, timer);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <group ref={spaceShipRef} dispose={null} scale={0.03}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh
          geometry={nodes.Spaceship_Osn_0.geometry}
          material={materials.material}
        />
        <mesh
          geometry={nodes.Spaceship_Turbine_0.geometry}
          material={materials.Turbine}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/scene.gltf");
