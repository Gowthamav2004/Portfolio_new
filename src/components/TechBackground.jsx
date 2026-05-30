import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Text, Float } from '@react-three/drei';

const techWords = [
  "Python", "React", "Node.js", "Machine Learning", "ERP", "SQL",
  "def analyze_data():", "<Component />", "SELECT * FROM users",
  "TensorFlow", "Pandas", "Scikit-Learn", "Docker", "Git", "API",
  "C++", "Java", "Kubernetes", "AWS", "Analytics", "Algorithms",
  "Data Science", "System Design", "Cloud Architecture"
];

const FloatingWord = ({ word, ...props }) => {
  const ref = useRef();
  
  // Randomize initial rotation and floating parameters for genuine 3D feel
  const speed = useMemo(() => 0.5 + Math.random() * 1.5, []);
  const rotationIntensity = useMemo(() => 0.5 + Math.random() * 1.5, []);
  const floatIntensity = useMemo(() => 1 + Math.random() * 2, []);

  // Slowly drift upwards continuously
  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.position.y += delta * 0.5 * speed;
      // Loop back to bottom if it floats too high
      if (ref.current.position.y > 30) {
        ref.current.position.y = -30;
      }
    }
  });

  return (
    <group ref={ref} {...props}>
      <Float speed={speed} rotationIntensity={rotationIntensity} floatIntensity={floatIntensity}>
        <Text
          fontSize={1 + Math.random()}
          color="#ffffff"
          fillOpacity={0.1 + Math.random() * 0.15}
          anchorX="center"
          anchorY="middle"
          outlineWidth={0.02}
          outlineColor="#8b5cf6"
          outlineOpacity={0.3}
        >
          {word}
        </Text>
      </Float>
    </group>
  );
};

const WordsScene = () => {
  // Generate static random positions for each word so they fill the 3D space
  const words = useMemo(() => {
    return techWords.map((word, i) => {
      const position = [
        (Math.random() - 0.5) * 50, // Wide X spread
        (Math.random() - 0.5) * 60, // Very tall Y spread
        (Math.random() - 0.5) * 25 - 10 // Deep Z spread
      ];
      return { word, position, key: i };
    });
  }, []);

  return (
    <>
      <ambientLight intensity={1} />
      {words.map((w) => (
        <FloatingWord key={w.key} word={w.word} position={w.position} />
      ))}
    </>
  );
};

const TechBackground = () => {
  return (
    <div style={{ position: 'sticky', top: 0, left: 0, width: '100vw', height: '100vh', overflow: 'hidden', zIndex: -1, pointerEvents: 'none', marginBottom: '-100vh' }}>
      {/* Top Gradient to fade out where it meets the Hero section */}
      <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '20vh', background: 'linear-gradient(to bottom, var(--bg-primary) 0%, transparent 100%)', zIndex: 1 }} />
      
      {/* Full 3D Canvas */}
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        {/* Dark fog makes words fade out smoothly as they go deeper in Z-space */}
        <fog attach="fog" args={['#0a0a0a', 10, 40]} />
        <React.Suspense fallback={null}>
          <WordsScene />
        </React.Suspense>
      </Canvas>
    </div>
  );
};

export default TechBackground;
