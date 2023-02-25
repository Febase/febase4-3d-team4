import { css } from "@emotion/react";
import { Canvas } from "@react-three/fiber";
import { Box } from "./components/Box";
import * as THREE from "three";
import G0Universe from "./components/G0/";

export function ThreeCanvas() {
  return (
    <div css={canvasCss}>
      <Canvas
        onCreated={({ gl }) => {
          gl.toneMapping = THREE.Uncharted2ToneMapping
          gl.setClearColor(new THREE.Color('#020207'))
      }}>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <G0Universe />
      </Canvas>
    </div>
  );
}

const canvasCss = css({
  width: "100vw",
  height: "100vh",
});
