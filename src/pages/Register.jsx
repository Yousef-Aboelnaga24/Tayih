import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const isValidEmail = (e) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(e).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName.trim() || !email.trim() || !password || !confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "من فضلك إملأ جميع الحقول.",
        confirmButtonText: "حسناً",
      });
      return;
    }

    if (!isValidEmail(email)) {
      Swal.fire({
        icon: "error",
        title: "بريد إلكتروني غير صالح",
        text: "الرجاء إدخال بريد إلكتروني صحيح مثل example@domain.com.",
        confirmButtonText: "حسناً",
      });
      return;
    }

    if (password.length < 8) {
      Swal.fire({
        icon: "error",
        title: "كلمة المرور قصيرة",
        text: "يجب أن تكون كلمة المرور 8 أحرف على الأقل.",
        confirmButtonText: "حسناً",
      });
      return;
    }

    if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "خطأ في التأكيد",
        text: "كلمة المرور وتأكيدها غير متطابقين.",
        confirmButtonText: "حسناً",
      });
      return;
    }

    Swal.fire({
      icon: "success",
      title: "تم إنشاء الحساب",
      text: "تمت عملية التسجيل بنجاح.",
      confirmButtonText: "تسجيل الدخول الآن",
      confirmButtonColor: "#0aa380"
    }).then(() => {
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      navigate("/login");
    });
  };

  const inputClasses = "w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:ring-primary focus:border-primary block p-3.5 transition-colors outline-none shadow-sm";
  const labelClasses = "block mb-2 text-sm font-bold text-gray-700";

  return (
    <section className="min-h-screen bg-gray-50 py-32 flex items-center justify-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/4 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary-dark/5 rounded-full blur-[120px] translate-y-1/3 translate-x-1/3 pointer-events-none"></div>

      <div className="w-full max-w-lg px-4 sm:px-6 relative z-10 mx-auto">
        <div className="bg-white rounded-[2rem] shadow-2xl shadow-gray-200/50 p-8 sm:p-10 border border-gray-100">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center text-2xl mb-4 mx-auto">
                <i className="fas fa-user-plus"></i>
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-2">إنشاء حساب جديد</h3>
            <p className="text-gray-500">انضم إلينا الآن لتصبح جزءاً من مجتمعنا.</p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="space-y-5">
            <div>
              <label className={labelClasses}>الاسم الكامل</label>
              <div className="relative">
                  <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                      <i className="fas fa-user"></i>
                  </div>
                  <input
                    type="text"
                    className={`${inputClasses} pr-12`}
                    placeholder="أدخل اسمك الكامل"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                  />
              </div>
            </div>

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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className={labelClasses}>كلمة المرور</label>
                <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                        <i className="fas fa-lock"></i>
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`${inputClasses}`}
                      style={{paddingRight: '2.5rem', paddingLeft: '1rem'}}
                      placeholder="••••••••"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                </div>
              </div>
              
              <div>
                <label className={labelClasses}>تأكيد المرور</label>
                <div className="relative">
                    <div className="absolute inset-y-0 right-0 flex items-center pr-4 pointer-events-none text-gray-400">
                        <i className="fas fa-lock"></i>
                    </div>
                    <input
                      type={showPassword ? "text" : "password"}
                      className={`${inputClasses}`}
                      style={{paddingRight: '2.5rem', paddingLeft: '1rem'}}
                      placeholder="••••••••"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                </div>
              </div>
            </div>
            
            <div className="flex items-center mt-2">
              <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-sm font-medium text-gray-500 hover:text-primary transition-colors focus:outline-none flex items-center gap-2"
              >
                  <i className={`fas ${showPassword ? 'fa-eye-slash' : 'fa-eye'}`}></i>
                  {showPassword ? "إخفاء كلمات المرور" : "إظهار كلمات المرور"}
              </button>
            </div>

            <button type="submit" className="w-full bg-gradient-to-l from-primary-dark to-primary hover:from-primary-darker hover:to-primary-dark text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1 text-lg flex justify-center items-center gap-2 mt-6">
               إنشاء الحساب <i className="fas fa-user-check"></i>
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 text-center">
            <p className="text-gray-600">
              لديك حساب بالفعل؟{" "}
              <Link
                to="/login"
                className="text-primary hover:text-primary-dark font-bold hover:underline transition-all"
              >
                تسجيل الدخول
              </Link>
            </p>
          </div>
            
        </div>
      </div>
    </section>
  );
}

export default Register;
