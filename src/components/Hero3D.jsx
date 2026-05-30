import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshTransmissionMaterial, ContactShadows, Environment, Line, Text, Center } from '@react-three/drei';
import * as THREE from 'three';

const TechNetwork = () => {
  const group = useRef();
  const particlesCount = 20;
  
  const [positions, lines] = useMemo(() => {
    const pos = new Float32Array(particlesCount * 3);
    for (let i = 0; i < particlesCount * 3; i++) {
      pos[i] = (Math.random() - 0.5) * 30;
    }
    
    const linesArr = [];
    for (let i = 0; i < particlesCount; i++) {
      for (let j = i + 1; j < particlesCount; j++) {
        const dx = pos[i*3] - pos[j*3];
        const dy = pos[i*3+1] - pos[j*3+1];
        const dz = pos[i*3+2] - pos[j*3+2];
        const dist = Math.sqrt(dx*dx + dy*dy + dz*dz);
        if (dist < 6) {
          linesArr.push([
            [pos[i*3], pos[i*3+1], pos[i*3+2]],
            [pos[j*3], pos[j*3+1], pos[j*3+2]]
          ]);
        }
      }
    }
    return [pos, linesArr];
  }, []);

  useFrame((state) => {
    if (group.current) {
      group.current.rotation.y = state.clock.elapsedTime * 0.03;
      group.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  return (
    <group ref={group} position={[0, 0, -5]}>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" count={particlesCount} array={positions} itemSize={3} />
        </bufferGeometry>
        <pointsMaterial size={0.1} color="#3b82f6" transparent opacity={0.6} sizeAttenuation />
      </points>
      {lines.map((line, i) => (
        <Line key={i} points={line} color="#8b5cf6" lineWidth={1} transparent opacity={0.15} />
      ))}
    </group>
  );
};

const CodingSymbol = ({ text, position, rotationOffsets, scale }) => {
  const meshRef = useRef();

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * rotationOffsets.xSpeed) * 0.2 + rotationOffsets.xOffset;
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * rotationOffsets.ySpeed) * 0.3 + rotationOffsets.yOffset;
    }
  });

  return (
    <Float speed={rotationOffsets.floatSpeed} rotationIntensity={0.5} floatIntensity={2} position={position}>
      <Center>
        <group ref={meshRef} scale={scale}>
          <Text
            fontSize={4.5}
            fontWeight={900}
            letterSpacing={-0.05}
          >
            {text}
            <meshStandardMaterial 
              color="#3b82f6"
              metalness={0.8}
              roughness={0.2}
            />
          </Text>
        </group>
      </Center>
    </Float>
  );
};

const PremiumObject = () => {
  return (
    <>
      <CodingSymbol text="</>" position={[0, 0, 0]} rotationOffsets={{ xSpeed: 0.5, ySpeed: 0.3, xOffset: 0, yOffset: 0, floatSpeed: 2 }} scale={1.2} />
      <CodingSymbol text="#" position={[-4, 2, -3]} rotationOffsets={{ xSpeed: 0.4, ySpeed: 0.5, xOffset: 0.5, yOffset: 0.2, floatSpeed: 1.5 }} scale={0.7} />
      <CodingSymbol text=":" position={[4, -1, -2]} rotationOffsets={{ xSpeed: 0.6, ySpeed: 0.4, xOffset: -0.2, yOffset: 0.5, floatSpeed: 2.5 }} scale={0.8} />
      <CodingSymbol text=";" position={[-2, -3, -1]} rotationOffsets={{ xSpeed: 0.3, ySpeed: 0.6, xOffset: 0.1, yOffset: -0.3, floatSpeed: 1.8 }} scale={0.9} />
    </>
  );
};

const MouseRig = () => {
  const { camera } = useThree();
  const vec = new THREE.Vector3();
  return useFrame((state) => {
    camera.position.lerp(vec.set(state.pointer.x * 2, state.pointer.y * 2, 10), 0.05);
    camera.lookAt(0, 0, 0);
  });
};

const Hero3D = () => {
  return (
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }}>
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 10]} intensity={1} color="#3b82f6" />
          <directionalLight position={[-10, -10, -10]} intensity={1} color="#ec4899" />
          
          <TechNetwork />
          <PremiumObject />
          
          <Environment preset="city" />
          <ContactShadows position={[0, -3, 0]} opacity={0.4} scale={10} blur={2} far={4} color="#000000" resolution={256} frames={1} />
          <MouseRig />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Hero3D;
