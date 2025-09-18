// src/app/gallery/page.tsx
'use client';

import Header from "@/components/Header";
import Scene from "@/components/scene";
import { FiArrowUp, FiArrowLeft, FiArrowDown, FiArrowRight } from 'react-icons/fi';
import StarRating from "@/components/StarRating";
import CommentSection from "@/components/CommentSection";

export default function GalleryPage() {
  const handleControlClick = (key: string) => {
    const event = new KeyboardEvent('keydown', { code: key });
    document.dispatchEvent(event);
    setTimeout(() => {
        const upEvent = new KeyboardEvent('keyup', { code: key });
        document.dispatchEvent(upEvent);
    }, 100);
  };

  return (
    <div className="gallery-page">
      <Header />
      <main className="gallery-main">
        <div className="gallery-container">
          <Scene />
          <div className="viewer-controls">
            <button className="control-btn" onClick={() => handleControlClick('KeyW')}><FiArrowUp /></button>
            <button className="control-btn" onClick={() => handleControlClick('KeyA')}><FiArrowLeft /></button>
            <button className="control-btn" onClick={() => handleControlClick('KeyS')}><FiArrowDown /></button>
            <button className="control-btn" onClick={() => handleControlClick('KeyD')}><FiArrowRight /></button>
          </div>
        </div>

        {/* Kontainer baru untuk detail, rating, dan komentar */}
        <div className="gallery-details">
          <div className="details-left">
            <h1>Booth Stand Teknik Informatika</h1>
            <p>
              Teknik Informatika merupakan program studi yang mengkhususkan pada pengembangan aplikasi software dan hardware untuk tujuan tertentu. Lulusan memiliki keterampilan yang baik di bidang perancangan, pengembangan, dan implementasi sistem software. Program studi ini juga membekali mahasiswa dengan pengetahuan tentang teknologi jaringan, keamanan siber, dan pengembangan game. Lulusan dipersiapkan untuk menjadi profesional di industri teknologi yang terus berkembang pesat.
            </p>
          </div>
          <div className="details-right">
            <StarRating />
            <CommentSection />
          </div>
        </div>
      </main>
    </div>
  );
}