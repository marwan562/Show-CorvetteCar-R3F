const Lights = () => {
  return (
    <>
      <spotLight
        color={[1, 0.25, 0.7]}
        intensity={200}
        angle={.7}
        penumbra={.3}
        position={[4, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
      <spotLight
        color={[0.14, 0.5, 1]}
        intensity={200}
        angle={.7}
        penumbra={.3}
        position={[-4, 5, 0]}
        castShadow
        shadow-bias={-0.0001}
      />
    </>
  );
};

export default Lights;
