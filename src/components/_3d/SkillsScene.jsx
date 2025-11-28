import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Html } from '@react-three/drei';
import { useMemo, useRef, useState, useEffect } from 'react';

function SkillPrimitive({ position, label, techs, delay = 0, isDatabase, setActiveId, id, activeId }) {
  const ref = useRef();
  const [hovered, setHovered] = useState(false);
  const badges = useMemo(() => techs, [techs]);

  // Determine if this popup should be visible
  const visible = activeId === id || (hovered && window.innerWidth >= 1024);

  // Adjust shape and popup for mobile
  const shapeY = window.innerWidth < 768 ? -2 : 0;
  const popupY = window.innerWidth < 768 ? 6 : 7;
  const popupX = window.innerWidth < 768 && isDatabase ? -6 : 0; // move database popup more left

  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.y += 0.01;
    const targetScale = visible ? 2.5 : 1.5;
    const currentScale = ref.current.scale.x + (targetScale - ref.current.scale.x) * 0.1;
    ref.current.scale.set(currentScale, currentScale, currentScale);
  });

  const handleClick = (e) => {
    e.stopPropagation();
    if (window.innerWidth < 1024) {
      setActiveId(activeId === id ? null : id);
    }
  };

  return (
    <group position={[position[0], position[1] + shapeY, position[2]]}>
      <Float speed={2} rotationIntensity={0.5}>
        <mesh
          ref={ref}
          onPointerOver={() => window.innerWidth >= 1024 && setHovered(true)}
          onPointerOut={() => window.innerWidth >= 1024 && setHovered(false)}
          onClick={handleClick}
        >
          <octahedronGeometry args={[1, 0]} />
          <meshStandardMaterial
            color={visible ? '#60a5fa' : '#94a3b8'}
            metalness={0.1}
            roughness={0.4}
          />
        </mesh>

        <Text
          position={[0, -3, 0]}
          fontSize={0.6}
          color="#ffffff"
          anchorX="center"
          anchorY="middle"
        >
          {label}
        </Text>

        {visible && (
          <Html
            position={[popupX, popupY, 0]}
            transform
            style={{
              pointerEvents: 'none',
              opacity: 1,
            }}
          >
            <div
              style={{
                width: window.innerWidth < 768 ? '90vw' : '640px',
                maxWidth: window.innerWidth < 768 ? '90vw' : '720px',
                padding: window.innerWidth < 768 ? '24px' : '48px',
                borderRadius: window.innerWidth < 768 ? '20px' : '32px',
                background: 'rgba(3, 7, 18, 0.97)',
                border: '3px solid rgba(148, 163, 184, 0.6)',
                boxShadow: '0 50px 120px rgba(0, 0, 0, 0.85)',
                backdropFilter: 'blur(22px)',
                animation: `fadeIn 0.45s ${delay}s ease both`,
                position: window.innerWidth < 768 ? 'relative' : 'static',
                left: window.innerWidth < 768 ? '50%' : '0',
                transform:
                  window.innerWidth < 768 ? 'translateX(-50%) scale(1.0)' : 'scale(1.85)',
              }}
            >
              <p
                style={{
                  fontSize: '1.8rem',
                  color: '#60a5fa',
                  marginBottom: '1.5rem',
                  letterSpacing: '0.07em',
                  fontWeight: 800,
                  textAlign: 'center',
                }}
              >
                Tech Stack
              </p>

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  justifyContent: 'center',
                }}
              >
                {badges.map((tech) => (
                  <span
                    key={tech}
                    style={{
                      fontSize: '1.25rem',
                      padding: '0.75rem 1.4rem',
                      borderRadius: '999px',
                      background: 'rgba(59, 130, 246, 0.25)',
                      border: '2px solid rgba(96, 165, 250, 0.75)',
                      color: '#f1f5f9',
                      letterSpacing: '0.04em',
                      fontWeight: 600,
                      whiteSpace: 'nowrap',
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </Html>
        )}
      </Float>
    </group>
  );
}

export default function SkillsScene() {
  const [activeId, setActiveId] = useState(null);

  // Close popup when tapping anywhere outside
  useEffect(() => {
    const handleWindowClick = () => {
      if (window.innerWidth < 1024) {
        setActiveId(null);
      }
    };
    window.addEventListener('click', handleWindowClick);
    return () => window.removeEventListener('click', handleWindowClick);
  }, []);

  const items = [
    { label: 'Programming Languages', techs: ['JavaScript','TypeScript','Python','Java','C / C++','SQL','Dart'], isDatabase: false },
    { label: 'Frameworks', techs: ['React','Next.js','HTML / CSS','Tailwind CSS','Node.js','Django','Spring Boot'], isDatabase: false },
    { label: 'Databases & Tools', techs: ['MySQL','PostgreSQL','Kaggle','GitHub','Docker','Postman','VS Code','Figma','Jira'], isDatabase: true },
  ];

  const gap = 10;
  const positions = items.map((_, i) => [i*gap - ((items.length-1)*gap)/2, 0, 0]);

  const canvasHeight = window.innerWidth < 768 ? '100vh' : '60vh';
  const cameraPosition = window.innerWidth < 768 ? [0,0,45] : [0,0,30];
  const cameraFov = window.innerWidth < 768 ? 55 : 40;

  return (
    <Canvas
      camera={{position: cameraPosition, fov: cameraFov}}
      style={{width:'100vw', height:canvasHeight}}
      dpr={[1,2]}
    >
      <ambientLight intensity={0.7} />
      <directionalLight position={[10,10,5]} intensity={1} />

      {items.map((item, i) => (
        <SkillPrimitive
          key={item.label}
          position={positions[i]}
          label={item.label}
          techs={item.techs}
          delay={i*0.1}
          isDatabase={item.isDatabase}
          id={i}
          activeId={activeId}
          setActiveId={setActiveId}
        />
      ))}
    </Canvas>
  );
}
