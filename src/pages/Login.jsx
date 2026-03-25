import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (e) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(e).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      Swal.fire({
        icon: "error",
        title: "خطأ في الإدخال",
        text: "من فضلك أدخل البريد الإلكتروني وكلمة المرور.",
        confirmButtonText: "حسناً",
      });
      return;
    }

    if (!isValidEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "بريد غير صالح",
        text: "من فضلك أدخل بريد إلكتروني صحيح.",
        confirmButtonText: "حسناً",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "تم تسجيل الدخول بنجاح",
      text: "مرحباً بعودتك!",
      confirmButtonText: "متابعة",
      confirmButtonColor: "#0aa380"
    }).then(() => {
      setEmail("");
      setPassword("");
      navigate("/");
    });
  };

  const inputClasses = "w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:ring-primary focus:border-primary block p-4 transition-colors outline-none shadow-sm";
  const labelClasses = "block mb-2 text-sm font-bold text-gray-700";

  return (
    <section className="min-h-screen bg-gray-50 py-32 flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-dark/5 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4 pointer-events-none"></div>

      <div className="w-full max-w-md px-4 sm:px-6 relative z-10 mx-auto">
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-gray-200/50 p-8 sm:p-10 border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto">
                <i className="fas fa-sign-in-alt"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">تسجيل الدخول</h3>
            <p className="text-gray-500">مرحباً بعودتك! يرجى إدخال بياناتك للمتابعة.</p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-6">
            <div>
              <label className={labelClasses}>البريد الإلكتروني</label>
              <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                      <i className="fas fa-envelope"></i>
                  </div>
                  <input
                    type="email"
                    className={`${inputClasses} pr-12`}
                    placeholder="example@domain.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
              </div>
            </div>

            <div>
              <label className={labelClasses}>كلمة المرور</label>
              <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                      <i className="fas fa-lock"></i>
                  </div>
                  <input
                    type={showPassword ? "text" : "password"}
                    className={`${inputClasses} px-12`}
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                  <button 
                      type="button" 
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400 hover:text-primary transition-colors focus:outline-none"
                  >
                      <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  </button>
              </div>
            </div>

            <button type="submit" className="w-full bg-gradient-to-r from-primary-dark to-primary hover:from-primary-darker hover:to-primary text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1 text-lg flex justify-center items-center gap-2">
               تسجيل الدخول <i className="fas fa-arrow-left mt-1"></i>
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-gray-600">
              ليس لديك حساب؟{" "}
              <Link
                to="/register"
                className="text-primary hover:text-primary-dark font-bold hover:underline transition-all"
              >
                سجّل الآن
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
