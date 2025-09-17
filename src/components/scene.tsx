// src/components/Scene.tsx
'use client';

import { useRef, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { PointerLockControls, Image } from '@react-three/drei';
import Model from './Model';

// Komponen Internal untuk Logika Kamera
function CameraControls() {
  const { camera } = useThree();
  const controlsRef = useRef<any>(); // Referensi ke PointerLockControls
  const moveForward = useRef(false);
  const moveBackward = useRef(false);
  const moveLeft = useRef(false);
  const moveRight = useRef(false);
  const speed = 0.1; // Kecepatan bergerak

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward.current = true;
          break;
        case 'ArrowLeft':
        case 'KeyA':
          moveLeft.current = true;
          break;
        case 'ArrowDown':
        case 'KeyS':
          moveBackward.current = true;
          break;
        case 'ArrowRight':
        case 'KeyD':
          moveRight.current = true;
          break;
      }
    };

    const onKeyUp = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'ArrowUp':
        case 'KeyW':
          moveForward.current = false;
          break;

        case 'ArrowLeft':
        case 'KeyA':
          moveLeft.current = false;
          break;
        case 'ArrowDown':
        case 'KeyS':
          moveBackward.current = false;
          break;
        case 'ArrowRight':
        case 'KeyD':
          moveRight.current = false;
          break;
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('keyup', onKeyUp);

    // Kunci pointer mouse saat canvas diklik
    const handleClick = () => {
      controlsRef.current?.lock();
    };
    document.body.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('keyup', onKeyUp);
      document.body.removeEventListener('click', handleClick);
    };
  }, []);

  useFrame(() => {
    if (moveForward.current) {
      controlsRef.current?.moveForward(speed);
    }
    if (moveBackward.current) {
      controlsRef.current?.moveForward(-speed);
    }
    if (moveRight.current) {
      controlsRef.current?.moveRight(speed);
    }
    if (moveLeft.current) {
      controlsRef.current?.moveRight(-speed);
    }
  });

  return <PointerLockControls ref={controlsRef} />;
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      <ambientLight intensity={1.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} />

      <Model />

      <Image
        alt="Lukisan di dinding"
        url="/art.jpg"
        scale={[3, 3, 3]}
        position={[0, 2.5, -9.5]}
      />

      {/* Ganti PointerLockControls lama dengan komponen baru kita */}
      <CameraControls />
    </Canvas>
  );
}