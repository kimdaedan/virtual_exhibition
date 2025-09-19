import Image from 'next/image';
import Link from "next/link";

import { FiSearch, FiHelpCircle, FiUser, FiMenu } from 'react-icons/fi';

export default function HomePage() {
  return (
    <>


      <main>
        <div className="hero-card">
          <h1>Present, manage and <strong>Pamerkan Karya Kalian</strong></h1>
          <p>
             KUNSTMATRIX enables you to create beautiful 3D showcases of
            your art to impress art lovers and collectors.
          </p>
          {/* 4. Bungkus tombol dengan Link */}
          <Link href="/gallery" className="cta-button">
            <span>📋</span>
            VIEW EXAMPLES
          </Link>
        </div>
      </main>
    </>
  );
}