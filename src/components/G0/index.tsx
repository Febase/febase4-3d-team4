import GenZPlanet from "./GenZPlanet";
import { SpaceDust } from "./SpaceDust";

const G0Universe = ({x,y,z}:{x:number,y:number,z:number}) => {
  return (
    <>
      <GenZPlanet position={[x + 1.2, y + 0, z + 0]}/>
      <SpaceDust count={8000} />
    </>
  );
};

export default G0Universe;