import { Canvas } from '@react-three/fiber';
import { Float, MeshDistortMaterial, PerspectiveCamera } from '@react-three/drei';

function GeometricShapes() {
  return (
    <group>
      <Float speed={2} rotationIntensity={1} floatIntensity={2}>
        <mesh position={[-3, 2, -2]}>
          <boxGeometry args={[0.8, 0.8, 0.8]} />
          <MeshDistortMaterial color="#3B82F6" speed={2} distort={0.3} roughness={0.2} />
        </mesh>
      </Float>

      <Float speed={1.8} rotationIntensity={1} floatIntensity={1.5}>
        <mesh position={[3, -1, -3]}>
          <torusGeometry args={[0.6, 0.25, 16, 32]} />
          <MeshDistortMaterial color="#8B5CF6" speed={3} distort={0.4} roughness={0.2} />
        </mesh>
      </Float>

      <Float speed={2.2} rotationIntensity={0.8} floatIntensity={2}>
        <mesh position={[2, 3, -1]}>
          <sphereGeometry args={[0.5, 32, 32]} />
          <MeshDistortMaterial color="#10B981" speed={2.5} distort={0.35} roughness={0.2} />
        </mesh>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <Canvas
      dpr={[1, 2]}
      style={{
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        position: 'absolute',
        top: 0,
        left: 0,
      }}
    >
      {/* Camera & lights are required for visibility */}
      <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={50} />
      <ambientLight intensity={1} />
      <directionalLight position={[5, 5, 5]} intensity={1} />

      {/* Only shapes */}
      <GeometricShapes />
    </Canvas>
  );
}
