import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { useEffect, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { EUNSIK_SPACE_POSITION } from "../constant";

export function StarGage() {
  const { nodes, materials } = useGLTF("/stargate/scene.gltf") as any;
  const starGateRef = useRef<THREE.Group>(null!);

  useFrame((_, delta) => (starGateRef.current.rotation.x += delta * 0.1));

  useEffect(() => {
    starGateRef.current.position.set(
      EUNSIK_SPACE_POSITION,
      EUNSIK_SPACE_POSITION,
      EUNSIK_SPACE_POSITION
    );
  }, []);

  return (
    <group ref={starGateRef} dispose={null}>
      <group scale={30.3}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group rotation={[-Math.PI / 2, Math.PI / 2, 0]} scale={0.03}>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                geometry={nodes.chevron_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0.01, -0.46, 2.87]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 1.86]}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, -Math.PI]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.chevron_back_Chevron_unlit_0.geometry}
                material={materials.Chevron_unlit}
                position={[0.01, -0.46, 2.87]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 1.86]}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0.7, Math.PI]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.chevron_back001_Chevron_unlit_0.geometry}
                material={materials.Chevron_unlit}
                position={[0.01, -0.46, 2.87]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 1.86]}
              />
            </group>
            <group rotation={[-Math.PI / 2, 1.4, Math.PI]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.chevron_back002_Chevron_unlit_0.geometry}
                material={materials.Chevron_unlit}
                position={[0.01, -0.46, 2.87]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 1.86]}
              />
            </group>
            <group rotation={[Math.PI / 2, Math.PI / 3, 0]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.chevron_back003_Chevron_unlit_0.geometry}
                material={materials.Chevron_unlit}
                position={[0.01, -0.46, 2.87]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 1.86]}
              />
            </group>
            <group rotation={[Math.PI / 2, Math.PI / 9, 0]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.chevron_back004_Chevron_unlit_0.geometry}
                material={materials.Chevron_unlit}
                position={[0.01, -0.46, 2.87]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 1.86]}
              />
            </group>
            <group rotation={[Math.PI / 2, -Math.PI / 9, 0]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.chevron_back005_Chevron_unlit_0.geometry}
                material={materials.Chevron_unlit}
                position={[0.01, -0.46, 2.87]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 1.86]}
              />
            </group>
            <group rotation={[Math.PI / 2, -Math.PI / 3, 0]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.chevron_back006_Chevron_unlit_0.geometry}
                material={materials.Chevron_unlit}
                position={[0.01, -0.46, 2.87]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 1.86]}
              />
            </group>
            <group rotation={[-Math.PI / 2, -1.4, -Math.PI]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.chevron_back007_Chevron_unlit_0.geometry}
                material={materials.Chevron_unlit}
                position={[0.01, -0.46, 2.87]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 1.86]}
              />
            </group>
            <group rotation={[-Math.PI / 2, -0.7, Math.PI]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.chevron_back008_Chevron_unlit_0.geometry}
                material={materials.Chevron_unlit}
                position={[0.01, -0.46, 2.87]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 1.86]}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                geometry={nodes.chevron_frame_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0, 0, 3.2]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0.7, 0]}>
              <mesh
                geometry={nodes.chevron_frame001_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0, 0, 3.2]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[-Math.PI / 2, 1.4, 0]}>
              <mesh
                geometry={nodes.chevron_frame002_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0, 0, 3.2]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[Math.PI / 2, Math.PI / 3, Math.PI]}>
              <mesh
                geometry={nodes.chevron_frame003_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0, 0, 3.2]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[Math.PI / 2, Math.PI / 9, Math.PI]}>
              <mesh
                geometry={nodes.chevron_frame004_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0, 0, 3.2]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[Math.PI / 2, -Math.PI / 9, Math.PI]}>
              <mesh
                geometry={nodes.chevron_frame005_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0, 0, 3.2]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[Math.PI / 2, -Math.PI / 3, -Math.PI]}>
              <mesh
                geometry={nodes.chevron_frame006_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0, 0, 3.2]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[-Math.PI / 2, -1.4, 0]}>
              <mesh
                geometry={nodes.chevron_frame007_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0, 0, 3.2]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[-Math.PI / 2, -0.7, 0]}>
              <mesh
                geometry={nodes.chevron_frame008_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0, 0, 3.2]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0, 0]}>
              <mesh
                geometry={nodes.chevron_light_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0, 0, 3.27]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[Math.PI, 0, -Math.PI]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.chevron_light_back_Chevron_unlit_0.geometry}
                material={materials.Chevron_unlit}
                position={[0, 3.27, 0]}
              />
            </group>
            <group rotation={[Math.PI, 0, -2.44]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.chevron_light_back001_Chevron_unlit_0.geometry}
                material={materials.Chevron_unlit}
                position={[0, 3.27, 0]}
              />
            </group>
            <group rotation={[Math.PI, 0, -1.75]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.chevron_light_back002_Chevron_unlit_0.geometry}
                material={materials.Chevron_unlit}
                position={[0, 3.27, 0]}
              />
            </group>
            <group rotation={[Math.PI, 0, -Math.PI / 3]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.chevron_light_back003_Chevron_unlit_0.geometry}
                material={materials.Chevron_unlit}
                position={[0, 3.27, 0]}
              />
            </group>
            <group rotation={[-Math.PI, 0, -Math.PI / 9]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.chevron_light_back004_Chevron_unlit_0.geometry}
                material={materials.Chevron_unlit}
                position={[0, 3.27, 0]}
              />
            </group>
            <group rotation={[-Math.PI, 0, Math.PI / 9]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.chevron_light_back005_Chevron_unlit_0.geometry}
                material={materials.Chevron_unlit}
                position={[0, 3.27, 0]}
              />
            </group>
            <group rotation={[Math.PI, 0, Math.PI / 3]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.chevron_light_back006_Chevron_unlit_0.geometry}
                material={materials.Chevron_unlit}
                position={[0, 3.27, 0]}
              />
            </group>
            <group rotation={[-Math.PI, 0, 1.75]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.chevron_light_back007_Chevron_unlit_0.geometry}
                material={materials.Chevron_unlit}
                position={[0, 3.27, 0]}
              />
            </group>
            <group rotation={[-Math.PI, 0, 2.44]} scale={[-1, 1, 1]}>
              <mesh
                geometry={nodes.chevron_light_back008_Chevron_unlit_0.geometry}
                material={materials.Chevron_unlit}
                position={[0, 3.27, 0]}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0.7, 0]}>
              <mesh
                geometry={nodes.chevron_light001_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0, 0, 3.27]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[-Math.PI / 2, 1.4, 0]}>
              <mesh
                geometry={nodes.chevron_light002_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0, 0, 3.27]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[Math.PI / 2, Math.PI / 3, Math.PI]}>
              <mesh
                geometry={nodes.chevron_light003_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0, 0, 3.27]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[Math.PI / 2, Math.PI / 9, Math.PI]}>
              <mesh
                geometry={nodes.chevron_light004_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0, 0, 3.27]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[Math.PI / 2, -Math.PI / 9, Math.PI]}>
              <mesh
                geometry={nodes.chevron_light005_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0, 0, 3.27]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[Math.PI / 2, -Math.PI / 3, -Math.PI]}>
              <mesh
                geometry={nodes.chevron_light006_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0, 0, 3.27]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[-Math.PI / 2, -1.4, 0]}>
              <mesh
                geometry={nodes.chevron_light007_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0, 0, 3.27]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[-Math.PI / 2, -0.7, 0]}>
              <mesh
                geometry={nodes.chevron_light008_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0, 0, 3.27]}
                rotation={[Math.PI / 2, 0, 0]}
              />
            </group>
            <group rotation={[-Math.PI / 2, 0.7, 0]}>
              <mesh
                geometry={nodes.chevron001_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0.01, -0.46, 2.87]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 1.86]}
              />
            </group>
            <group rotation={[-Math.PI / 2, 1.4, 0]}>
              <mesh
                geometry={nodes.chevron002_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0.01, -0.46, 2.87]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 1.86]}
              />
            </group>
            <group rotation={[Math.PI / 2, Math.PI / 3, Math.PI]}>
              <mesh
                geometry={nodes.chevron003_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0.01, -0.46, 2.87]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 1.86]}
              />
            </group>
            <group rotation={[Math.PI / 2, Math.PI / 9, Math.PI]}>
              <mesh
                geometry={nodes.chevron004_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0.01, -0.46, 2.87]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 1.86]}
              />
            </group>
            <group rotation={[Math.PI / 2, -Math.PI / 9, Math.PI]}>
              <mesh
                geometry={nodes.chevron005_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0.01, -0.46, 2.87]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 1.86]}
              />
            </group>
            <group rotation={[Math.PI / 2, -Math.PI / 3, -Math.PI]}>
              <mesh
                geometry={nodes.chevron006_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0.01, -0.46, 2.87]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 1.86]}
              />
            </group>
            <group rotation={[-Math.PI / 2, -1.4, 0]}>
              <mesh
                geometry={nodes.chevron007_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0.01, -0.46, 2.87]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 1.86]}
              />
            </group>
            <group rotation={[-Math.PI / 2, -0.7, 0]}>
              <mesh
                geometry={nodes.chevron008_Chevron_0.geometry}
                material={materials.Chevron}
                position={[0.01, -0.46, 2.87]}
                rotation={[Math.PI / 2, 0, 0]}
                scale={[1, 1, 1.86]}
              />
            </group>
            <mesh
              geometry={nodes.gate_Gate_0.geometry}
              material={materials.Gate}
            />
            <mesh
              geometry={nodes.gate_ring_Ring_0.geometry}
              material={materials.Ring}
            />
          </group>
        </group>
      </group>
    </group>
  );
}
