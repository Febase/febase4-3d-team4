import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import { EUNSIK_SPACE_POSITION } from "../constant";

export function Portal() {
  const { nodes, materials } = useGLTF("/lightening/scene.gltf") as any;
  const [animate, setAnimate] = useState(false);
  const portalRef = useRef<THREE.Group>(null!);

  useFrame(() => {
    if (animate) {
      const scale = portalRef.current.scale.x || 0.005;
      const nextScale = Math.min(0.315, scale + 0.008);
      portalRef.current.scale.set(nextScale, nextScale, nextScale);
    }
  });
  useEffect(() => {
    portalRef.current.position.set(
      EUNSIK_SPACE_POSITION,
      EUNSIK_SPACE_POSITION,
      EUNSIK_SPACE_POSITION
    );
    portalRef.current.scale.set(0, 0, 0);
    portalRef.current.rotation.y = 1.6;

    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 4000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <group ref={portalRef} dispose={null} scale={0.315}>
      <mesh
        geometry={nodes.Object_4.geometry}
        material={materials.material_0}
        rotation={[-1.57, 0, 0]}
      />
      <mesh
        geometry={nodes.Object_6.geometry}
        material={materials["Material.001"]}
        position={[0, 0, 4.23]}
      />
    </group>
  );
}

useGLTF.preload("/scene.gltf");
