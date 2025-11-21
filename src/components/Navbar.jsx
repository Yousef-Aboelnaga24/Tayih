import { Link } from "react-router-dom";
import '../assets/css/Navbar.css'

function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand fw-bold" to="/">
            <img
              src="/image/logo-3.png"
              fetchpriority="high"
              alt="شعار-تائه"
              className="logo"
            />
          </Link>

          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navContent"
            aria-label="Navigation Toggler"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Links */}
          <div className="collapse navbar-collapse" id="navContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
              <li className="nav-item">
                <Link className="nav-link active fw-semibold" to="/">
                  <i className="fa fa-home me-1"></i> الرئيسية
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/report">
                  <i className="fas fa-exclamation-circle me-1"></i> بلاغ جديد
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/missing">
                  <i className="fas fa-address-card me-1"></i> المفقودين
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/contact">
                  <i className="fa fa-envelope me-1"></i> التواصل
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link fw-semibold" to="/about">
                  <i className="fas fa-users me-1"></i> من نحن
                </Link>
              </li>
            </ul>

            <Link to="/login" className="btn btn-success px-3 ms-lg-3">
              <i className="fas fa-sign-in-alt me-1"></i> تسجيل الدخول
            </Link>
          </div>
        </div>
      </nav>
  );
}

export default Navbar;
