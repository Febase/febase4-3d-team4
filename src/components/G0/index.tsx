import GenZPlanet from "./GenZPlanet";
import { SpaceDust } from "./SpaceDust";

const G0Universe = () => {
  return (
    <>
      <GenZPlanet position={[1.2, 0, 0]}/>
      <SpaceDust count={8000} />
    </>
  );
};

export default G0Universe;