// src/components/Scene.tsx
'use client';

import { Canvas } from '@react-three/fiber';
import { PointerLockControls, Image } from '@react-three/drei';
import Model from './Model'; // <-- 1. Impor komponen Model

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 2, 5] }}>
      {/* Cahaya */}
      <ambientLight intensity={1.5} />
      <directionalLight position={[0, 5, 5]} intensity={1} />

      {/* 2. Panggil komponen Model di sini */}
      <Model />

      {/* Hapus semua kode <mesh> untuk lantai dan dinding manual */}

      {/* Karya Seni di dalam galeri (sesuaikan posisinya) */}
      <Image
        alt=""
        url="/art.jpg"
        scale={[3, 3, 3]}
        // 3. Anda perlu menyesuaikan posisi X, Y, Z ini
        // agar pas di dalam dinding model .glb Anda
        position={[0, 2.5, -9.5]}
      />

      <PointerLockControls />
    </Canvas>
  );
}