import { css } from "@emotion/react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { SpaceShip } from "./components/SpaceShip";
import { StarGage } from "./components/StarGate";
import { GlobalStyle } from "./styles/Global";
import { Portal } from "./components/Portal";

export function ThreeCanvas() {
  return (
    <div css={canvasCss}>
      <Canvas>
        {/* Environments */}
        <GlobalStyle />
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <OrbitControls />
        {/* Models */}
        <SpaceShip timer={5000} />
        <SpaceShip timer={5500} />
        <SpaceShip timer={6000} />
        <SpaceShip timer={6500} />
        <StarGage />
        <Portal />
      </Canvas>
    </div>
  );
}

const canvasCss = css({
  width: "100vw",
  height: "100vh",
  backgroundColor: "#000",
});
