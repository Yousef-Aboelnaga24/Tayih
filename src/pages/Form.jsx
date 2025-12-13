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

export default function Form() {
  const navigate = useNavigate();

  const [personImage, setPersonImage] = useState(null);
  const [personName, setPersonName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("");
  const [governorate, setGovernorate] = useState("");
  const [lastSeen, setLastSeen] = useState("");
  const [details, setDetails] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [reporterName, setReporterName] = useState("");

  // الحقول الجديدة
  const [missingStatus, setMissingStatus] = useState("");
  const [healthStatus, setHealthStatus] = useState("");
  const [missingDate, setMissingDate] = useState("");

  const letterOnly = (value) => value.replace(/[^\u0621-\u064A\s]/g, "");
  const numberOnly = (value) => value.replace(/[^0-9]/g, "");

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
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!personImage || !personName || !age || !gender || !governorate || !lastSeen || !details || !phoneNumber || !reporterName || !missingStatus || !healthStatus || !missingDate) {
      Swal.fire({
        icon: "error",
        title: "خطأ",
        text: "من فضلك املأ جميع الحقول",
        confirmButtonText: "حسناً",
      });
      return;
    }

    const ageNum = Number(age);
    if (isNaN(ageNum) || ageNum < 1 || ageNum > 120) {
      Swal.fire({ icon: "error", title: "خطأ", text: "الرجاء إدخال عمر صحيح بين 1 و 120", confirmButtonText: "حسناً" });
      return;
    }

    if (!/^0\d{10}$/.test(phoneNumber)) {
      Swal.fire({ icon: "error", title: "خطأ", text: "رقم الهاتف يجب أن يبدأ بـ 0 ويتكون من 11 رقمًا", confirmButtonText: "حسناً" });
      return;
    }

    const newPerson = {
      id: Date.now(),
      personImage,
      personName,
      age,
      gender,
      governorate,
      lastSeen,
      details,
      phoneNumber,
      reporterName,
      missingStatus,
      healthStatus,
      missingDate,
      reportDate: new Date().toISOString()
    };

    const existingData = JSON.parse(localStorage.getItem("missingPeople")) || [];
    localStorage.setItem("missingPeople", JSON.stringify([...existingData, newPerson]));

    Swal.fire({
      icon: "success",
      title: "تم إضافة البلاغ",
      text: "تم تسجيل البلاغ بنجاح",
      confirmButtonText: "حسناً",
    });

    // مسح الحقول
    setPersonImage(null);
    setPersonName("");
    setAge("");
    setGender("");
    setGovernorate("");
    setLastSeen("");
    setDetails("");
    setPhoneNumber("");
    setReporterName("");
    setMissingStatus("");
    setHealthStatus("");
    setMissingDate("");

    setTimeout(() => navigate("/missing"), 1000);
  };

  return (
    <section style={{ marginTop: "100px" }}>
      <div className="container my-5">
        <h2 className="text-center mb-4 fw-bold text-success">تقديم بلاغ مفقود</h2>
        <form onSubmit={handleSubmit} className="bg-white p-4 shadow rounded mx-auto w-75" id="reportForm" noValidate>

          {/* صورة الشخص */}
          <div className="mb-3">
            <label className="form-label">ارفع صورة للشخص</label>
            <input type="file" className="form-control" accept="image/*" onChange={handleImageChange} required />
          </div>

          {/* الاسم والعمر */}
          <div className="row mb-3">
            <div className="col-sm-6 mb-3">
              <label className="form-label">اسم الشخص</label>
              <input type="text" className="form-control" placeholder="ادخل اسم الشخص" value={personName} onChange={(e) => setPersonName(letterOnly(e.target.value))} required />
            </div>
            <div className="col-sm-6 mb-3">
              <label className="form-label">العمر</label>
              <input type="number" className="form-control" placeholder="ادخل العمر" min="1" max="120" value={age} onChange={(e) => setAge(numberOnly(e.target.value))} required />
            </div>
          </div>

          {/* النوع والمحافظة */}
          <div className="mb-3">
            <label className="form-label d-block">النوع</label>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" value="ذكر" checked={gender === "ذكر"} onChange={(e) => setGender(e.target.value)} />
              <label className="form-check-label">ذكر</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" value="أنثى" checked={gender === "أنثى"} onChange={(e) => setGender(e.target.value)} />
              <label className="form-check-label">أنثى</label>
            </div>
          </div>

          <div className="mb-3">
            <label className="form-label">المحافظة</label>
            <select className="form-select" value={governorate} onChange={(e) => setGovernorate(e.target.value)} required>
              <option value="">اختر المحافظة</option>
              {governorates.map((gov) => <option key={gov} value={gov}>{gov}</option>)}
            </select>
          </div>

          {/* حالة المفقود + الحالة الصحية + تاريخ التغيب */}
          <div className="row mb-3">
            <div className="col-sm-4 mb-3">
              <label className="form-label">حالة المفقود</label>
              <select className="form-select" value={missingStatus} onChange={(e) => setMissingStatus(e.target.value)} required>
                <option value="">اختر الحالة</option>
                <option value="مفقود">مفقود</option>
                <option value="عُثر عليه">عُثر عليه</option>
              </select>
            </div>
            <div className="col-sm-4 mb-3">
              <label className="form-label">الحالة الصحية</label>
              <select className="form-select" value={healthStatus} onChange={(e) => setHealthStatus(e.target.value)} required>
                <option value="">اختر الحالة</option>
                <option value="سليم صحياً">سليم صحياً</option>
                <option value="يعاني من اضطرابات نفسية">يعاني من اضطرابات نفسية</option>
                <option value="لديه إعاقة جسدية">لديه إعاقة جسدية</option>
              </select>
            </div>
            <div className="col-sm-4 mb-3">
              <label className="form-label">تاريخ التغيب</label>
              <input type="date" className="form-control" value={missingDate} onChange={(e) => setMissingDate(e.target.value)} required />
            </div>
          </div>

          {/* مكان وتفاصيل */}
          <div className="mb-3">
            <label className="form-label">آخر مكان شوهد فيه</label>
            <input type="text" className="form-control" placeholder="مثال: محطة رمسيس - القاهرة" value={lastSeen} onChange={(e) => setLastSeen(letterOnly(e.target.value))} />
          </div>

          <div className="mb-3">
            <label className="form-label">تفاصيل إضافية</label>
            <textarea className="form-control" rows="3" placeholder="الملابس، وقت الفقد، ملاحظات..." value={details} onChange={(e) => setDetails(letterOnly(e.target.value))} />
          </div>

          {/* رقم الهاتف والمبلغ */}
          <div className="mb-3">
            <label className="form-label">رقم الهاتف للتواصل</label>
            <input type="tel" className="form-control" placeholder="01XXXXXXXXX" value={phoneNumber} maxLength="11" onChange={(e) => setPhoneNumber(numberOnly(e.target.value))} />
          </div>

          <div className="mb-4">
            <label className="form-label">اسم المبلغ</label>
            <input type="text" className="form-control" placeholder="ادخل اسمك" value={reporterName} onChange={(e) => setReporterName(letterOnly(e.target.value))} />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-main fw-bold rounded-3 p-2">
              إرسال البلاغ <i className="fa-solid fa-paper-plane ms-2"></i>
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}