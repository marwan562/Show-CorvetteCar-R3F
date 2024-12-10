import {
  CubeCamera,
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import Lights from "./components/Lights";
import Ground from "./components/Ground";
import { Model } from "./Scene";
import {
  Bloom,
  ChromaticAberration,
  EffectComposer,
} from "@react-three/postprocessing";
import Rings from "./components/Rings";

const CarShow = () => {
  return (
    <>
      <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45} />
      <color args={[0, 0, 0]} attach={"background"} />
      <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]} />
      <Lights />
      <Rings />

      <Ground />

      <CubeCamera resolution={256} frames={Infinity}>
        {(texture) => (
          <>
            <Environment map={texture} />
            <Model />
          </>
        )}
      </CubeCamera>

      {/* <EffectComposer> 
      {/* <DepthOfField focusDistance={0.0035} focalLength={0.01} bokehScale={3} height={480} /> */}
      {/* <Bloom
          intensity={1.3} // The bloom intensity.
          width={300} // render width
          height={300} // render height
          kernelSize={5} // blur kernel size
          luminanceThreshold={0.15} // luminance threshold. Raise this value to mask out darker elements in the scene.
          luminanceSmoothing={0.025} // smoothness of the luminance threshold. Range is [0, 1]
        />
        <ChromaticAberration
          offset={[0.0005, 0.0012]} // color offset
        /> */}
      {/* </EffectComposer>  */}
    </>
  );
};

export default CarShow;
