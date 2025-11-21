import React, { useState, useEffect } from "react";
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

  // ✅ جلب البيانات من LocalStorage لو موجودة
  const [personImage, setPersonImage] = useState(null);
  const [personName, setPersonName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [lastSeen, setLastSeen] = useState("");
  const [details, setDetails] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [reporterName, setReporterName] = useState("");

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("missingPeople")) || [];
    console.log("البيانات الحالية في LocalStorage:", savedData);
  }, []);

  // فقط حروف عربية ومسافات
  const letterOnly = (value) => value.replace(/[^\u0621-\u064A\s]/g, "");
  // فقط أرقام
  const numberOnly = (value) => value.replace(/[^0-9]/g, "");

  // رفع الصورة مع التحقق
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "من فضلك ارفع صورة فقط",
        confirmButtonText: "حسناً",
      });
      e.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      setPersonImage(reader.result);
      localStorage.setItem("previewImagePerson", reader.result);
    };
    reader.readAsDataURL(file);
  };


  // إرسال النموذج
  const handleSubmit = (e) => {
    e.preventDefault();

    if (!personImage) {
      Swal.fire({ icon: "error", title: "خطأ", text: "من فضلك ارفع صورة ", confirmButtonText: "حسناً", }); return;
    }

    if (!personName) {
      Swal.fire({ icon: "error", title: "خطأ", text: "من فضلك ادخل اسم المفقود", confirmButtonText: "حسناً", }); return;
    }

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

    if (!/^0\d{10}$/.test(phoneNumber)) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "رقم الهاتف يجب أن يبدأ بـ 0 ويتكون من 11 رقمًا",
        confirmButtonText: "حسناً",
      });
      return;
    }

    // التحقق من الحقول
    if (!personImage || !personName || !age || !gender || !governorate || !lastSeen || !details || !phoneNumber || !reporterName) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "من فضلك املأ جميع الحقول",
        confirmButtonText: "حسناً",
      });
      return;
    }
    // ✅ تجهيز الكائن لحفظه
    const newPerson = {
      id: Date.now(),
      personImage: personImage,
      personName,
      age,
      gender,
      governorate,
      lastSeen,
      details,
      phoneNumber,
      reporterName,
      reportDate: new Date().toISOString()
    };

    // جلب البيانات القديمة من LocalStorage وحفظ الجديد
    const existingData = JSON.parse(localStorage.getItem("missingPeople")) || [];
    localStorage.setItem("missingPeople", JSON.stringify([...existingData, newPerson]));

    // نجاح
    Swal.fire({
      icon: "success",
      title: "تم إضافة البلاغ",
      text: "تم تسجيل البلاغ بنجاح",
      confirmButtonText: "حسناً",
    });

    // مسح الحقول بعد الإرسال
    setPersonImage(null);
    setPersonName("");
    setAge("");
    setGender("");
    setGovernorate("");
    setLastSeen("");
    setDetails("");
    setPhoneNumber("");
    setReporterName("");

    // الانتقال بعد ثانيتين
    setTimeout(() => navigate("/missing"), 1000);
  };

  return (
    <section style={{ marginTop: "110px" }}>
      <div className="container-fluid my-5">
        <h2 className="text-center my-4 fw-bold text-success">تقديم بلاغ مفقود</h2>
        <form
          onSubmit={handleSubmit}
          encType="multipart/form-data"
          className="bg-white p-4 shadow-lg w-75 rounded mx-auto"
          id="reportForm"
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
                value="ذكر"
                checked={gender === "ذكر"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label">ذكر</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="أنثى"
                checked={gender === "أنثى"}
                onChange={(e) => setGender(e.target.value)}
              />
              <label className="form-check-label">أنثى</label>
            </div>
          </div>

          {/* المحافظة */}
          <div className="mb-3">
            <label htmlFor="governorate" className="form-label">المحافظة</label>
            <select
              id="governorate"
              className="form-select"
              value={governorate}
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
              onChange={(e) => setReporterName(letterOnly(e.target.value))}
            />
          </div>

          {/* الزرار */}
          <div className="text-center">
            <button type="submit" className="btn fw-bold rounded-3 p-2 btn-main">
              إرسال البلاغ <i className="fa-solid fa-paper-plane ms-2"></i>
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}

export default Form;
