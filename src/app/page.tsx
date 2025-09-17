import Image from 'next/image';
import Header from "@/components/Header";
import Link from "next/link";
export default function HomePage() {
  return (
    <>
      <header>
        <a href="#" className="logo">
  <Image src="/logo.png" alt="Logo Perusahaan Anda" width={80} height={80} />
</a>
        <nav className="main-nav">
          <div className="nav-item">
            <a href="#">EXHIBITION</a>
            <div className="nav-subheading">3D BOOTH PRODI</div>
          </div>
          <div className="nav-item">
            <a href="#">ART.SPACES</a>
            <div className="nav-subheading">3D Exhibitions</div>
          </div>
          <div className="nav-item">
            <a href="#">ART.OFFICE</a>
            <div className="nav-subheading">Sales Management</div>
          </div>
          <div className="nav-item">
            <a href="#">ART.AUGMENTED</a>
            <div className="nav-subheading">3D Art App</div>
          </div>
        </nav>
        <div className="header-actions">
          <a href="#" className="upgrade-btn">LOGIN</a>
          <span>🔍</span> {/* Placeholder for Search Icon */}
          <span>❔</span> {/* Placeholder for Help Icon */}
          <span>👤 GUEST</span> {/* Placeholder for User Profile */}
          <span>☰</span> {/* Placeholder for Menu Icon */}
        </div>
      </header>

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