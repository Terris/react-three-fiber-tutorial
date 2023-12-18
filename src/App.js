import { Canvas } from "@react-three/fiber";
import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import { Environment } from "./Environment";

// The Canvas component does some important setup work behind the scenes:
// It sets up a Scene and a Camera, the basic building blocks necessary for rendering
// It renders our scene every frame, you do not need a traditional render-loop

// A Mesh is a basic scene object in three.js, and it's used to hold the geometry
// and the material needed to represent a shape in 3D space.

function App() {
  return (
    <div id="canvas-container" style={{ height: "100vh", width: "100vw" }}>
      <Canvas>
        {/* <color attach="background" args={["skyblue"]} /> */}
        <mesh position={[0, 0, 0]}>
          <octahedronGeometry />
          <meshStandardMaterial />
        </mesh>
        <Environment />
        <OrbitControls
          enableZoom={true}
          enablePan={true}
          minPolarAngle={0}
          maxPolarAngle={Math.PI / 2.25}
          makeDefault
        />
        <PerspectiveCamera makeDefault position={[0, 4, 10]} fov={50} />
      </Canvas>
    </div>
  );
}

export default App;
