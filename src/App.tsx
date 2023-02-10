import { css } from "@emotion/react";
import { Canvas } from "@react-three/fiber";
import { Box } from "./components/Box";

export function ThreeCanvas() {
  return (
    <div css={canvasCss}>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        <Box position={[-1.2, 0, 0]} />
        <Box position={[1.2, 0, 0]} />
      </Canvas>
    </div>
  );
}

const canvasCss = css({
  width: "100vw",
  height: "100vh",
});
