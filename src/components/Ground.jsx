import { MeshReflectorMaterial } from "@react-three/drei";
import { useLoader } from "@react-three/fiber";
import { useEffect } from "react";
import { RepeatWrapping, TextureLoader } from "three";

const Ground = () => {
  const [roughness, normal] = useLoader(TextureLoader, [
    "/textures/terrain-roughness.jpg",
    "/textures/terrain-normal.jpg",
  ]);

  useEffect(() => {
    [normal, roughness].forEach((texture) => {
      texture.wrapS = RepeatWrapping;
      texture.wrapT = RepeatWrapping;
      texture.repeat.set(5, 5);
    });
  }, [normal, roughness]);
  return (
    <>
      {" "}
      <mesh receiveShadow castShadow rotation-x={-Math.PI * 0.5}>
        <planeGeometry args={[90, 90]} />
        <MeshReflectorMaterial
          envMapIntensity={0}
          normalScale={[0.15, 0.15]}
          dithering={true}
          roughnessMap={roughness}
          normalMap={normal}
          color={[0.015, 0.015, 0.015]}
          roughness={0.7}
          blur={[1000, 400]}
          mixBlur={30}
          mixStrength={80}
          mixContrast={1}
          resolution={1024}
          mirror={0}
          depthScale={0.01}
          minDepthThreshold={0.9}
          maxDepthThreshold={1}
          depthToBlurRatioBias={0.25}
          debug={0}
          reflectorOffset={0.2}
        />
      </mesh>
    </>
  );
};

export default Ground;
