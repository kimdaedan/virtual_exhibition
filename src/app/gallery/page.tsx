// src/app/gallery/page.tsx
'use client'; // Pastikan ini ada di paling atas

import Header from "@/components/Header";
import Scene from "@/components/scene";

export default function GalleryPage() {
  // Fungsi untuk mensimulasikan penekanan tombol keyboard
  const handleControlClick = (key: string) => {
    // Buat event keyboard buatan
    const event = new KeyboardEvent('keydown', { code: key });
    // Kirim event ke document
    document.dispatchEvent(event);

    // Atur timeout untuk mensimulasikan pelepasan tombol setelah beberapa saat
    setTimeout(() => {
        const upEvent = new KeyboardEvent('keyup', { code: key });
        document.dispatchEvent(upEvent);
    }, 100); // Bergerak selama 100ms setiap kali diklik
  };

  return (
    <div className="gallery-page">
      <Header />
      <main className="gallery-main">
        <div className="gallery-container">
          <Scene />

          <div className="viewer-controls">
            {/* Tambahkan onClick ke setiap tombol */}
            <button className="control-btn" onClick={() => handleControlClick('KeyW')}>🔼</button>
            <button className="control-btn" onClick={() => handleControlClick('KeyA')}>◀️</button>
            <button className="control-btn" onClick={() => handleControlClick('KeyS')}>🔽</button>
            <button className="control-btn" onClick={() => handleControlClick('KeyD')}>▶️</button>
          </div>
        </div>
        <div className="gallery-title">
          <h1>LES BOUQUETS DE BERNARD BUFFET</h1>
        </div>
      </main>
    </div>
  );
}