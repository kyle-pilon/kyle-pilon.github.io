import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { Suspense, useRef } from "react";
import * as THREE from "three";

const SquirtleModel = () => {
    const { scene } = useGLTF("/models/scene.gltf"); // Load .gltf model
    const modelRef = useRef<THREE.Object3D | null>(null);

    useFrame(() => {
        if  (modelRef.current) {
            modelRef.current.rotation.y += 0.01;
        }
    });
  
    return (
      <primitive 
        ref={modelRef}
        object={scene} 
        scale={1.5} 
        position={[0, -1, 0]} 
        rotation={[0, Math.PI, 0]} 
      />
    );
};

const SquirtleScene = () => {
    return (
      <Canvas
        style={{ width: "100%", height: "500px" }} // Set canvas size
        camera={{ position: [30, 10, 25], fov: 45 }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[0, 2, 5]} intensity={1.5} />
        <Suspense fallback={null}>
          <SquirtleModel />
        </Suspense>
      </Canvas>
    );
};

// Required for Three.js to handle GLTF properly
useGLTF.preload("/models/scene.gltf");

export default SquirtleScene;