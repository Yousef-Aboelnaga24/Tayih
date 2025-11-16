import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "../assets/css/Form.css";

const governorates = [
  "القاهرة", "الجيزة", "الإسكندرية", "الدقهلية", "البحر الأحمر", "البحيرة", "الفيوم",
  "الغربية", "الإسماعيلية", "المنوفية", "المنيا", "القليوبية", "الوادي الجديد",
  "السويس", "أسوان", "أسيوط", "بني سويف", "بورسعيد", "دمياط", "الشرقية",
  "جنوب سيناء", "كفر الشيخ", "مطروح", "الأقصر", "قنا", "شمال سيناء", "سوهاج"
];

function Form() {
  const navigate = useNavigate();

  // States
  const [personImage, setPersonImage] = useState(null);
  const [personName, setPersonName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [lastSeen, setLastSeen] = useState("");
  const [details, setDetails] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [reporterName, setReporterName] = useState("");

  // فقط حروف عربية ومسافات
  const letterOnly = (value) => value.replace(/[^\u0621-\u064A\s]/g, "");

  // فقط أرقام
  const numberOnly = (value) => value.replace(/[^0-9]/g, "");

  // رفع الصورة مع التحقق
  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file && !file.type.startsWith("image/")) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "من فضلك ارفع صورة فقط",
        confirmButtonText: "حسناً",
      });
      e.target.value = "";
      return;
    }

    setPersonImage(file);
  };

  // إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault();

    // التأكد من عدم وجود حقول فاضية
    if (!personImage || !personName || !age || !governorate || !lastSeen || !details || !phoneNumber || !reporterName) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "من فضلك املأ جميع الحقول",
        confirmButtonText: "حسناً",
      });
      return;
    }

    // التحقق من العمر
    const ageNum = Number(age);
    if (isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "الرجاء إدخال عمر صحيح بين 1 و 120",
        confirmButtonText: "حسناً",
      });
      return;
    }

    //النوع
    if (!gender) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "من فضلك اختر النوع (ذكر أو أنثى)",
        confirmButtonText: "حسناً",
      });
      return;
    }


    // المحافظة
    if (!governorates.includes(governorate)) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "اختر محافظة صحيحة",
        confirmButtonText: "حسناً",
      });
      return;
    }

    // رقم الهاتف
    if (!/^0\d{10}$/.test(phoneNumber)) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "رقم الهاتف يجب أن يبدأ بـ 0 ويتكون من 11 رقمًا",
        confirmButtonText: "حسناً",
      });
      return;
    }

    // نجاح
    Swal.fire({
      icon: "success",
      title: "تم إضافة البلاغ",
      text: "تم تسجيل البلاغ بنجاح",
      confirmButtonText: "حسناً",
    });

    setTimeout(() => navigate("/missing"), 1000);
  };

  return (
    <section>
      <div className="container-fluid my-5">
        <h2 className="text-center my-4 fw-bold">تقديم بلاغ مفقود</h2>

        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="bg-white p-4 shadow-lg w-75 rounded m-auto"
          noValidate
        >

          {/* صورة الشخص */}
          <div className="mb-3">
            <label htmlFor="personImage" className="form-label">ارفع صورة للشخص</label>
            <input
              type="file"
              className="form-control"
              id="personImage"
              accept="image/*"
              onChange={handleImageChange}
              re
            />
          </div>

          <div className="row">
            {/* الاسم */}
            <div className="mb-3 col-sm-6">
              <label htmlFor="personName" className="form-label">اسم الشخص</label>
              <input
                type="text"
                className="form-control"
                id="personName"
                placeholder="ادخل اسم الشخص"
                value={personName}
                required
                onChange={(e) => setPersonName(letterOnly(e.target.value))}
              />
            </div>

            {/* العمر */}
            <div className="mb-3 col-sm-6">
              <label htmlFor="age" className="form-label">العمر</label>
              <input
                type="number"
                className="form-control"
                id="age"
                placeholder="ادخل عمر الشخص"
                min="1"
                max="120"
                value={age}
                required
                onChange={(e) => setAge(numberOnly(e.target.value))}
              />
            </div>
          </div>

          {/* النوع */}
          <div className="mb-3">
            <label className="form-label d-block">النوع</label>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="male"
                value="ذكر"
                checked={gender === "ذكر"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="male">ذكر</label>
            </div>

            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="female"
                value="أنثى"
                checked={gender === "أنثى"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label" htmlFor="female">أنثى</label>
            </div>
          </div>


          {/* المحافظة */}
          <div className="mb-3">
            <label htmlFor="governorate" className="form-label">المحافظة</label>
            <select
              id="governorate"
              className="form-select"
              value={governorate}
              required
              onChange={(e) => setGovernorate(e.target.value)}
            >
              <option value="">اختر المحافظة</option>
              {governorates.map((gov) => (
                <option key={gov} value={gov}>{gov}</option>
              ))}
            </select>
          </div>

          {/* آخر مكان شوهد فيه */}
          <div className="mb-3">
            <label htmlFor="lastSeen" className="form-label">آخر مكان شوهد فيه</label>
            <input
              type="text"
              className="form-control"
              id="lastSeen"
              placeholder="مثال: محطة رمسيس - القاهرة"
              value={lastSeen}
              required
              onChange={(e) => setLastSeen(letterOnly(e.target.value))}
            />
          </div>

          {/* تفاصيل إضافية */}
          <div className="mb-3">
            <label htmlFor="details" className="form-label">تفاصيل إضافية</label>
            <textarea
              className="form-control"
              id="details"
              rows="3"
              placeholder="الملابس، وقت الفقد، ملاحظات..."
              value={details}
              required
              onChange={(e) => setDetails(letterOnly(e.target.value))}
            />
          </div>

          {/* رقم الهاتف */}
          <div className="mb-3">
            <label htmlFor="phoneNumber" className="form-label">رقم الهاتف للتواصل</label>
            <input
              type="tel"
              className="form-control"
              id="phoneNumber"
              placeholder="01XXXXXXXXX"
              value={phoneNumber}
              required
              maxLength="11"
              onChange={(e) => setPhoneNumber(numberOnly(e.target.value))}
            />
          </div>

          {/* اسم المُبلغ */}
          <div className="mb-4">
            <label htmlFor="reporterName" className="form-label">اسم المُبلّغ</label>
            <input
              type="text"
              className="form-control"
              id="reporterName"
              placeholder="ادخل اسمك"
              value={reporterName}
              required
              onChange={(e) => setReporterName(letterOnly(e.target.value))}
            />
          </div>

          {/* الزرار */}
          <div className="align-items-center justify-content-center w-100 d-flex">
            <button type="submit" className="btn w-50 btn-main" aria-label="إرسال البلاغ">
              إرسال البلاغ <i className="fa-solid fa-paper-plane me-2"></i>
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}

export default Form;
