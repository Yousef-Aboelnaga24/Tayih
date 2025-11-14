import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import "../assets/css/Forms.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

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
    }).then(() => {
      setEmail("");
      setPassword("");
    });
  };

  return (
    <section className="login d-flex align-items-center justify-content-center vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="card shadow-lg">
              <div className="card-body p-4">
                <h3 className="text-center mb-4 fw-bold">تسجيل الدخول</h3>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label className="form-label">البريد الإلكتروني</label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="أدخل بريدك الإلكتروني"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-3">
                    <label className="form-label">كلمة المرور</label>
                    <input
                      type={showPassword ? "text" : "password"}
                      className="form-control"
                      placeholder="أدخل كلمة المرور"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <div className="form-check mt-2">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        onChange={() => setShowPassword(!showPassword)}
                        id="showPassword"
                      />
                      <label className="form-check-label" htmlFor="showPassword">
                        إظهار كلمة المرور
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-main w-100">
                    تسجيل الدخول
                  </button>
                </form>

                <p className="text-center mt-3 mb-0">
                  ليس لديك حساب؟{" "}
                  <Link
                    to="/register"
                    className="text-decoration-none text-success fw-bold"
                  >
                    سجّل الآن
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
