import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

// Fallback Static Gradient Canvas for reduced-motion / low-power / fallback
const CanvasFallback: React.FC = () => (
  <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
    <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#B8924A]/20 via-[#E9D8A6]/10 to-transparent blur-3xl animate-pulse opacity-50" />
  </div>
);

// 3D Particle Cloud Component 
const ParticleCloud: React.FC = () => {
  const pointsRef = useRef<THREE.Points>(null);

  // Generate 1200 random points in a spherical distribution
  const positions = useMemo(() => {
    const count = 1200;
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 2.2 + Math.random() * 1.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = radius * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.x += delta * 0.05;
      pointsRef.current.rotation.y += delta * 0.08;

      // Mouse interactive tilt
      const mouseX = state.pointer.x * 0.3;
      const mouseY = state.pointer.y * 0.3;
      pointsRef.current.rotation.x += (mouseY - pointsRef.current.rotation.x) * 0.02;
      pointsRef.current.rotation.y += (mouseX - pointsRef.current.rotation.y) * 0.02;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#E9D8A6"
          size={0.035}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
    </group>
  );
};

export const FloatingParticleGeometry: React.FC = () => {
  // Respect prefers-reduced-motion
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (prefersReducedMotion) {
    return <CanvasFallback />;
  }

  return (
    <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
      <Suspense fallback={<CanvasFallback />}>
        <Canvas camera={{ position: [0, 0, 5], fov: 60 }} gl={{ alpha: true, antialias: true }}>
          <ambientLight intensity={0.5} />
          <ParticleCloud />
        </Canvas>
      </Suspense>
    </div>
  );
};
