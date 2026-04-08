import { Link } from "react-router-dom";
import { useState } from "react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Desktop/Mobile Navbar */}
      <nav className="fixed top-0 w-full z-50 px-4 py-2 flex justify-between items-center bg-linear-to-r from-primary-dark to-primary-darker/95 backdrop-blur-md shadow-lg h-20 transition-all">
        <div className="w-full mx-auto flex justify-between items-center">
          {/* Toggler on the RIGHT */}
          <button
            className="text-white hover:text-gray-200 transition-colors p-2"
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Navigation Toggler"
          >
            <i className="fas fa-bars text-2xl"></i>
          </button>

          {/* Logo */}
          <Link className="flex items-center" to="/">
            <img
              src="./image/logo.webp"
              loading="eager"
              alt="شعار-تائه"
              className="h-16 w-auto object-cover"
              style={{ animation: "float 3s ease-in-out infinite" }}
            />
          </Link>
        </div>
      </nav>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-[1400] transition-all duration-300 ${
          open ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 sm:w-96 bg-gradient-to-b from-[#05644c] to-[#09906f] backdrop-blur-xl p-6 z-[1500] shadow-[-5px_0_25px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-in-out flex flex-col ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center mb-6 border-b border-white/20 pb-4">
          <h5 className="text-white text-xl font-bold m-0">القائمة الرئيسية</h5>
          <button
            className="w-10 h-10 flex justify-center items-center bg-white text-[#09906f] rounded-full hover:bg-gray-200 hover:rotate-90 transition-transform duration-300 shadow-md"
            aria-label="إغلاق القائمة"
            onClick={() => setOpen(false)}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>

        <ul className="flex flex-col gap-3 overflow-y-auto w-full">
          <li>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium transition-all hover:bg-white/20 hover:-translate-x-2" to="/" onClick={() => setOpen(false)}>
              <div className="w-6 flex justify-center"><i className="fa fa-home text-lg"></i></div>
              الرئيسية
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium transition-all hover:bg-white/20 hover:-translate-x-2" to="/report" onClick={() => setOpen(false)}>
              <div className="w-6 flex justify-center"><i className="fas fa-exclamation-circle text-lg"></i></div>
              بلاغ جديد
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium transition-all hover:bg-white/20 hover:-translate-x-2" to="/missing" onClick={() => setOpen(false)}>
              <div className="w-6 flex justify-center"><i className="fas fa-address-card text-lg"></i></div>
              المفقودين
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium transition-all hover:bg-white/20 hover:-translate-x-2" to="/parent-awareness" onClick={() => setOpen(false)}>
              <div className="w-6 flex justify-center"><i className="fas fa-hand-holding-heart text-lg"></i></div>
              توعية الأهالي
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium transition-all hover:bg-white/20 hover:-translate-x-2" to="/contact" onClick={() => setOpen(false)}>
              <div className="w-6 flex justify-center"><i className="fa fa-envelope text-lg"></i></div>
              التواصل
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium transition-all hover:bg-white/20 hover:-translate-x-2" to="/about" onClick={() => setOpen(false)}>
              <div className="w-6 flex justify-center"><i className="fas fa-users text-lg"></i></div>
              من نحن
            </Link>
          </li>
        </ul>

        <Link
          to="/login"
          className="mt-auto w-full mb-4 py-3 flex justify-center items-center gap-2 bg-white text-[#09906f] font-bold rounded-xl hover:bg-gray-100 hover:-translate-y-1 transition-all shadow-lg"
          onClick={() => setOpen(false)}
        >
          <i className="fas fa-sign-in-alt text-lg"></i> تسجيل الدخول
        </Link>
      </div>
    </>
  );
}

export default Navbar;
