// src/app/exhibition/page.tsx
'use client';

import { useState } from 'react'; // 1. Impor useState
import Header from "@/components/Header";
import Image from 'next/image';
import Link from 'next/link';

// Impor komponen Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

// Impor CSS Swiper
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Data pameran dummy (untuk contoh)
const exhibitions = [
  { id: 1, image: '/exhibitions/informatika.jpg', title: 'Prodi D3 Teknik Informatika', organizer: 'IF' },
  { id: 2, image: '/exhibitions/multimedia.jpg', title: 'Prodi D4 Teknologi Rekayasa Multimedia', organizer: 'MM' },
  { id: 3, image: '/exhibitions/geomatika.jpg', title: 'Prodi D3 Teknologi Geomatika', organizer: 'GI' },
  { id: 4, image: '/exhibitions/animasi.jpg', title: 'Prodi D4 Animasi', organizer: 'AN' },
  { id: 5, image: '/exhibitions/siber.png', title: 'Prodi D4 Rekayasa Keamanan Siber', organizer: 'RKS' },
  { id: 6, image: '/exhibitions/rpl.jpg', title: 'Prodi D4 Teknologi Rekayasa Perangkat Lunak', organizer: 'TRPL' },
  { id: 7, image: '/exhibitions/game.jpg', title: 'Prodi D4 Teknik Permainan', organizer: 'GAME' },
  { id: 8, image: '/exhibitions/robotika.jpg', title: 'Prodi D4 Teknologi Rekayasa Mekatronika', organizer: 'MEKA' },
];

const filters = ['Show all', 'Informatika', 'Multimedia', 'Animasi', 'Game'];

export default function ExhibitionPage() {
  // 2. Buat state untuk melacak filter yang aktif
  const [activeFilter, setActiveFilter] = useState('Show all');

  return (
    <div className="exhibition-page">
      <Header />
      <main>
        <div className="exhibition-container">
          <nav className="sub-nav">
            <div className="filter-tags">
              {/* 3. Gunakan .map untuk membuat tombol secara dinamis */}
              {filters.map((filter) => (
                <button
                  key={filter}
                  className={`tag ${activeFilter === filter ? 'active' : ''}`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </nav>

          <div className="exhibition-carousel">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={30}
              slidesPerView={1}
              slidesPerGroup={1}
              navigation
              pagination={{ clickable: true }}
              breakpoints={{
                768: { slidesPerView: 2, slidesPerGroup: 2 },
                1024: { slidesPerView: 4, slidesPerGroup: 4 },
              }}
            >
              {exhibitions.map((exh) => (
                <SwiperSlide key={exh.id}>
                  <Link href="/gallery" className="exhibition-card">
                    <div className="card-image">
                      <Image src={exh.image} alt={exh.title} width={300} height={200} />
                    </div>
                    <div className="card-content">
                      <h3>{exh.title}</h3>
                      <p>{exh.organizer}</p>
                      {/* 4. Tampilkan tanggal hanya jika ada */}
                      {exh.date && <span>{exh.date}</span>}
                    </div>
                  </Link>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <div className="view-all-container">
            <Link href="#" className="view-all-btn">
              VIEW ALL EXHIBITIONS &rarr;
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}