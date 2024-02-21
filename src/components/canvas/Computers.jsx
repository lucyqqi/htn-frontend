import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

// component for rendering 3d computer models
const Computers = ({ isMobile }) => {
  // load the 3D model
  const computer = useGLTF("./desktop_pc/scene.gltf");

  return (
    <mesh>
      {/* lighting setup for the scene */}
      <hemisphereLight intensity={0.15} groundColor='black' />
      <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <pointLight intensity={1} />
      {/* 3D model rendering with scaling and positioning adjustments based on device type */}
      <primitive
        object={computer.scene}
        scale={isMobile ? 0.7 : 0.75}
        position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
        rotation={[-0.01, -0.2, -0.1]}
      />
    </mesh>
  );
};

// canvas component to display the 3D computer model
const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    // listen for changes to screen size to adjust rendering for mobile devices
    const mediaQuery = window.matchMedia("(max-width: 500px)");
    setIsMobile(mediaQuery.matches);

    // update isMobile state when screen size changes
    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches);
    };

    mediaQuery.addEventListener("change", handleMediaQueryChange);

    // clean up by removing the event listener on component unmount
    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange);
    };
  }, []);

  return (
    <Canvas
      frameloop='demand' // optimize rendering performance
      shadows // enable shadows for a more realistic appearance
      dpr={[1, 2]} // adjust display pixel ratio for high-resolution screens
      camera={{ position: [20, 3, 5], fov: 25 }} // camera setup
      gl={{ preserveDrawingBuffer: true }} // preserve the drawing buffer for screenshots
    >
      <Suspense fallback={<CanvasLoader />}>
        {/* use orbit controls to enable interactive camera movement, but disable zoom */}
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        {/* render the computer model, passing in whether the device is mobile */}
        <Computers isMobile={isMobile} />
      </Suspense>

      <Preload all /> // preload assets for smoother rendering
    </Canvas>
  );
};

export default ComputersCanvas;
