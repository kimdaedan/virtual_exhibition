// src/components/Header.tsx
import Image from 'next/image';
import Link from 'next/link';
import { FiSearch, FiHelpCircle, FiUser, FiMenu } from 'react-icons/fi';

export default function Header() {
  return (
    <header>
      <Link href="/" className="logo">
        <Image src="/logo.png" alt="Logo Perusahaan Anda" width={80} height={80} />
      </Link>
      <nav className="main-nav">
        <div className="nav-item">
          <Link href="/exhibition">EXHIBITION</Link>
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
        <a href="#"><FiSearch /></a>
        <a href="#"><FiHelpCircle /></a>
        <a href="#">GUEST <FiUser /></a>
        <button className="menu-btn"><FiMenu /></button>
      </div>
    </header>
  );
}