import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/css/Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="navbar navbar-light shadow fixed-top px-3 d-flex justify-content-between">
        <div className="container-fluid">
          {/* Toggler on the RIGHT */}
          <button
            className="btn"
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Navigation Toggler"
          >
            <i className="fas fa-bars fs-4"></i>
          </button>

          {/* Logo */}
          <Link className="navbar-brand fw-bold" to="/">
            <img
              src="/image/logo.webp"
              loading="eager"
              alt="شعار-تائه"
              className="logo"
            />
          </Link>
        </div>
      </nav>

      {/* Sidebar */}
      <div className={`position-fixed top-0 vh-100 d-flex flex-column sidebar  ${open ? "active" : ""}`} id="sidebar">
        <div className="sidebar-header mb-3 d-flex justify-content-between align-items-center">
          <h5 className="sidebar-title text-light fs-4 m-0">القائمة الرئيسية</h5>

          <button
            className="btn rounded-pill d-flex justify-content-center align-items-center sidebar-close-btn"
            aria-label="إغلاق القائمة"
            onClick={() => setOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <ul className="navbar-nav gap-2 mt-3">

          <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/" onClick={() => setOpen(false)}>
              <i className="fa fa-home ms-2"></i> الرئيسية
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/report" onClick={() => setOpen(false)}>
              <i className="fas fa-exclamation-circle ms-2"></i> بلاغ جديد
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/missing" onClick={() => setOpen(false)}>
              <i className="fas fa-address-card ms-2"></i> المفقودين
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/parent-awareness" onClick={() => setOpen(false)}>
              <i className="fas fa-hand-holding-heart ms-2"></i> توعية الأهالي
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/contact" onClick={() => setOpen(false)}>
              <i className="fa fa-envelope ms-2"></i> التواصل
            </Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link fw-semibold" to="/about" onClick={() => setOpen(false)}>
              <i className="fas fa-users ms-2"></i> من نحن
            </Link>
          </li>
        </ul>

        <Link
          to="/login"
          className="btn btn-success d-flex justify-content-center align-items-center w-100 mt-3"
          onClick={() => setOpen(false)}
        >
          <i className="fas fa-sign-in-alt ms-2"></i> تسجيل الدخول
        </Link>
      </div>

      {/* Overlay */}
      <div
        className={`position-fixed top-0 end-0 w-100 h-100 sidebar-overlay ${open ? "active" : ""}`}
        onClick={() => setOpen(false)}
      ></div>
    </>
  );
}

export default Navbar;
