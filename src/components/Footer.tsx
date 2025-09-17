// src/components/Footer.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="site-footer-simple">
      <div className="footer-content">
        <Link href="/" className="footer-logo-simple">
          <Image src="/logo.png" alt="Logo" width={40} height={40} />
        </Link>

        <p className="copyright">© {currentYear} Politeknik Negeri Batam</p>

        <div className="social-links">
          <a href="https://wa.me/6281393044942">Contact Admin</a>
          {/* Anda bisa menambahkan link sosial media lain di sini jika perlu */}
        </div>
      </div>
    </footer>
  );
}