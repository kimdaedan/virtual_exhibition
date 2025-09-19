// src/components/Scene.tsx
'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './Model';
import * as THREE from 'three';

// Logika kontrol dipindahkan ke sini agar lebih mudah diakses
function ControlsLogic({ controlsRef }: { controlsRef: React.RefObject<any> }) {
  const { camera } = useThree();
  const moveForward = useRef(false);
  const moveBackward = useRef(false);
  const moveLeft = useRef(false);
  const moveRight = useRef(false);
  const speed = 0.1;

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'ArrowUp': case 'KeyW': moveForward.current = true; break;
        case 'ArrowLeft': case 'KeyA': moveLeft.current = true; break;
        case 'ArrowDown': case 'KeyS': moveBackward.current = true; break;
        case 'ArrowRight': case 'KeyD': moveRight.current = true; break;
      }
    };
    const onKeyUp = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'ArrowUp': case 'KeyW': moveForward.current = false; break;
        case 'ArrowLeft': case 'KeyA': moveLeft.current = false; break;
        case 'ArrowDown': case 'KeyS': moveBackward.current = false; break;
        case 'ArrowRight': case 'KeyD': moveRight.current = false; break;
      }
    };
    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
    };
  }, []);

  useFrame(() => {
    if (!controlsRef.current) return;

    const forward = new THREE.Vector3();
    camera.getWorldDirection(forward);
    forward.y = 0;
    forward.normalize();

    const right = new THREE.Vector3();
    right.crossVectors(camera.up, forward).normalize();

    if (moveForward.current) {
      camera.position.addScaledVector(forward, speed);
      controlsRef.current.target.addScaledVector(forward, speed);
    }
    if (moveBackward.current) {
      camera.position.addScaledVector(forward, -speed);
      controlsRef.current.target.addScaledVector(forward, -speed);
    }
    if (moveRight.current) {
      camera.position.addScaledVector(right, -speed);
      controlsRef.current.target.addScaledVector(right, -speed);
    }
    if (moveLeft.current) {
      camera.position.addScaledVector(right, speed);
      controlsRef.current.target.addScaledVector(right, speed);
    }

    // Penting untuk memberitahu OrbitControls bahwa targetnya telah berubah
    controlsRef.current.update();
  });

  return null;
}

export default function Scene() {
  const controlsRef = useRef<any>();

  return (
    <Canvas camera={{ position: [0, 2, 10], fov: 60 }}>
      <ambientLight intensity={2.5} />
      <directionalLight position={[0, 8, 5]} intensity={1.5} />

      <Model />

      <OrbitControls
        ref={controlsRef} // Gunakan ref untuk mendapatkan referensi langsung
        enablePan={true}
        enableZoom={true}
        enableRotate={true}
      />
      <ControlsLogic controlsRef={controlsRef} />
    </Canvas>
  );
}