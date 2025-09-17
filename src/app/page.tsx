import Image from 'next/image';
export default function HomePage() {
  return (
    <>
      <header>
        <a href="#" className="logo">
  <Image src="/logo.png" alt="Logo Perusahaan Anda" width={80} height={80} />
</a>
        <nav className="main-nav">
          <div className="nav-item">
            <a href="#">ART.DEPOT</a>
            <div className="nav-subheading">Inventory Management</div>
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
          <a href="#" className="upgrade-btn">UPGRADE</a>
          <span>🔍</span> {/* Placeholder for Search Icon */}
          <span>❔</span> {/* Placeholder for Help Icon */}
          <span>👤 Dansleif0</span> {/* Placeholder for User Profile */}
          <span>☰</span> {/* Placeholder for Menu Icon */}
        </div>
      </header>

      <main>
        <div className="hero-card">
          <h1>Present, manage and <strong>promote your art</strong></h1>
          <p>
            KUNSTMATRIX enables you to create beautiful 3D showcases of
            your art to impress art lovers and collectors.
          </p>
          <a href="#" className="cta-button">
            <span>📋</span> {/* Placeholder for View Icon */}
            VIEW EXAMPLES
          </a>
        </div>
      </main>
    </>
  );
}