// src/components/Model.tsx
'use client';

import { useGLTF } from "@react-three/drei";

export default function Model() {
  // Hook ini akan memuat model dari folder /public
  const { scene } = useGLTF("/poltek.glb");

  // <primitive> adalah cara untuk merender objek kompleks yang sudah jadi
  return <primitive object={scene} />;
}