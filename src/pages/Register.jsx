import React, { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function Register() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const isValidEmail = (e) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(e).toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!fullName.trim()) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "من فضلك أدخل الاسم الكامل.",
        confirmButtonText: "حسناً",
      });
      return;
    }

    if (!email.trim()) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "من فضلك أدخل البريد الإلكتروني.",
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

    if (!password) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "من فضلك أدخل كلمة المرور.",
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
      confirmButtonText: "حسناً",
    }).then(() => {
      // إعادة تعيين الحقول بعد النجاح
      setFullName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
    });
  };

  return (
    <section className="register d-flex align-items-center justify-content-center vh-100">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow-lg">
              <div className="card-body p-4">
                <h3 className="text-center mb-4 fw-bold">إنشاء حساب جديد</h3>

                <form onSubmit={handleSubmit} noValidate>
                  <div className="mb-3">
                    <label className="form-label">الاسم الكامل</label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="أدخل اسمك الكامل"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      required
                    />
                  </div>
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
                      type="password"
                      className="form-control"
                      placeholder="أدخل كلمة مرور قوية"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">تأكيد كلمة المرور</label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="أعد إدخال كلمة المرور"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="btn btn-main w-100">
                    إنشاء الحساب
                  </button>
                </form>

                <p className="text-center mt-3 mb-0">
                  لديك حساب بالفعل؟{" "}
                  <Link
                    to="/login"
                    className="text-decoration-none text-success fw-bold"
                  >
                    تسجيل الدخول
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

export default Register;
