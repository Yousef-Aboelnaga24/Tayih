import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, AlertCircle, IdCard, HeartHandshake, Mail, Users, LogIn } from "lucide-react";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 w-full z-50 px-4 py-2 flex justify-between items-center bg-linear-to-r from-primary-dark to-primary-darker/95 backdrop-blur-md shadow-lg h-20 transition-all">
        <div className="w-full mx-auto flex justify-between items-center">
           <button
            className="text-white hover:text-gray-200 transition-colors p-2 cursor-pointer"
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Navigation Toggler"
          >
            <Menu className="text-2xl" />
          </button>

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
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-1400 transition-all duration-300 ${open ? "opacity-100 visible pointer-events-auto" : "opacity-0 invisible pointer-events-none"
          }`}
        onClick={() => setOpen(false)}
      ></div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-80 sm:w-96 bg-linear-to-b from-primary-darker to-primary-dark backdrop-blur-xl p-6 z-1500 shadow-[-5px_0_25px_rgba(0,0,0,0.5)] transition-transform duration-500 ease-in-out flex flex-col ${open ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <div className="flex justify-between items-center mb-6 border-b border-white/20 pb-4">
          <h5 className="text-white text-xl font-bold m-0">القائمة الرئيسية</h5>
          <button
            className="w-10 h-10 flex justify-center items-center bg-white text-prito-primary-dark rounded-full hover:bg-gray-200 hover:rotate-90 transition-transform duration-300 shadow-md"
            aria-label="إغلاق القائمة"
            onClick={() => setOpen(false)}
          >
            <X />
          </button>
        </div>

        <ul className="flex flex-col gap-3 w-full">
          <li>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium transition-all hover:bg-white/20 hover:-translate-x-2" to="/" onClick={() => setOpen(false)}>
              <div className="w-6 flex justify-center"><Home className="text-lg" /></div>
              الرئيسية
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium transition-all hover:bg-white/20 hover:-translate-x-2" to="/report" onClick={() => setOpen(false)}>
              <div className="w-6 flex justify-center"><AlertCircle className="text-lg" /></div>
              بلاغ جديد
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium transition-all hover:bg-white/20 hover:-translate-x-2" to="/missing" onClick={() => setOpen(false)}>
              <div className="w-6 flex justify-center"><IdCard className="text-lg" /></div>
              المفقودين
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium transition-all hover:bg-white/20 hover:-translate-x-2" to="/parent-awareness" onClick={() => setOpen(false)}>
              <div className="w-6 flex justify-center"><HeartHandshake className="text-lg" /></div>
              توعية الأهالي
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium transition-all hover:bg-white/20 hover:-translate-x-2" to="/contact" onClick={() => setOpen(false)}>
              <div className="w-6 flex justify-center"><Mail className="text-lg" /></div>
              التواصل
            </Link>
          </li>
          <li>
            <Link className="flex items-center gap-3 px-4 py-3 rounded-xl text-white font-medium transition-all hover:bg-white/20 hover:-translate-x-2" to="/about" onClick={() => setOpen(false)}>
              <div className="w-6 flex justify-center"><Users className="text-lg" /></div>
              من نحن
            </Link>
          </li>
        </ul>

        <Link
          to="/login"
          className="mt-auto w-full mb-4 py-3 flex justify-center items-center gap-2 bg-white text-prito-primary-dark font-bold rounded-xl hover:bg-gray-100 hover:-translate-y-1 transition-all shadow-lg"
          onClick={() => setOpen(false)}
        >
          <LogIn className="text-lg" /> تسجيل الدخول
        </Link>
      </div>
    </>
  );
}

export default Navbar;
