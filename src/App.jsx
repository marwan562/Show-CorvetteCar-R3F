import { Canvas, useThree } from "@react-three/fiber";
import { Suspense, useEffect } from "react";
import CarShow from "./CarShow";
import { OrbitControls } from "@react-three/drei";

const App = () => {
  return (
    <Suspense fallback={null}>
      <Canvas shadows>
        <CarShow />
      </Canvas>
    </Suspense>
  );
};

export default App;
