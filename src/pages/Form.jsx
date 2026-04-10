import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CloudUpload, CheckCircle2, IdCard, Send } from "lucide-react";
import Swal from "sweetalert2";
import InputField from "../components/ui/InputField";

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

    setTimeout(() => navigate("/missing"), 1000);
  };

  const inputClasses = "w-full bg-gray-50 border border-gray-200 text-gray-900 rounded-xl focus:ring-primary focus:border-primary block p-3.5 transition-colors outline-none shadow-sm";
  const labelClasses = "block mb-2 text-sm font-bold text-gray-700";

  return (
    <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-primary-dark inline-block relative pb-3 border-b-4 border-primary">
            تقديم بلاغ مفقود
          </h2>
          <p className="mt-4 text-gray-500">يرجى تعبئة النموذج التالي بدقة لضمان سرعة الوصول للمفقود.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-6 md:p-10 shadow-xl shadow-gray-200/50 rounded-3xl border border-gray-100 relative overflow-hidden" noValidate>

          <div className="absolute top-0 left-0 w-32 h-32 bg-primary/5 rounded-br-[100px] pointer-events-none"></div>

          {/* صورة الشخص */}
          <div className="mb-6 relative z-10">
            <label className={labelClasses}>ارفع صورة للشخص بوضوح</label>
            <div className="mt-2 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-xl hover:border-primary transition-colors bg-white">
              <div className="space-y-1 text-center">
                <CloudUpload size={"40px"} className="mx-auto text-gray-400 mb-3" />
                <div className="flex flex-col text-sm text-gray-600 justify-center items-center">
                  <label className="relative cursor-pointer bg-primary/10 hover:bg-primary/20 text-primary-dark rounded-full px-4 py-2 font-medium focus-within:outline-none transition-colors">
                    <span>اختر صورة</span>
                    <input type="file" className="sr-only" accept="image/*" onChange={handleImageChange} required />
                  </label>
                  <p className="mt-2">أو اسحب وأفلت الصورة هنا</p>
                </div>
                <p className="text-xs text-gray-500 mt-2">PNG, JPG بحد أقصى 5MB</p>
                {personImage && <p className="text-sm text-green-600 font-semibold mt-3 flex">
                  <CheckCircle2 className="ml-1" /> تم رفع الصورة بنجاح</p>}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* الاسم */}
            <div>
              <label className={labelClasses}>اسم الشخص</label>
              <input type="text" className={inputClasses} placeholder="الاسم الرباعي إن أمكن" value={personName} onChange={(e) => setPersonName(letterOnly(e.target.value))} required />
            </div>
            {/* العمر */}
            <div>
              <label className={labelClasses}>العمر التقريبي</label>
              <input type="number" className={inputClasses} placeholder="مثال: 12" min="1" max="120" value={age} onChange={(e) => setAge(numberOnly(e.target.value))} required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* النوع */}
            <div>
              <label className={labelClasses}>النوع</label>
              <div className="flex gap-4 mt-1">
                <label className={`flex items-center justify-center gap-2 cursor-pointer px-4 py-3 border rounded-xl flex-1 hover:bg-gray-50 transition-colors ${gender === 'ذكر' ? 'border-primary bg-primary/5 shadow-sm' : 'border-gray-200 bg-white'}`}>
                  <input type="radio" name="gender" value="ذكر" checked={gender === "ذكر"} onChange={(e) => setGender(e.target.value)} className="w-4 h-4 text-primary focus:ring-primary border-gray-300" />
                  <span className={`font-medium ${gender === 'ذكر' ? 'text-primary-dark' : 'text-gray-600'}`}>ذكر</span>
                </label>
                <label className={`flex items-center justify-center gap-2 cursor-pointer px-4 py-3 border rounded-xl flex-1 hover:bg-gray-50 transition-colors ${gender === 'أنثى' ? 'border-primary bg-primary/5 shadow-sm' : 'border-gray-200 bg-white'}`}>
                  <input type="radio" name="gender" value="أنثى" checked={gender === "أنثى"} onChange={(e) => setGender(e.target.value)} className="w-4 h-4 text-primary focus:ring-primary border-gray-300" />
                  <span className={`font-medium ${gender === 'أنثى' ? 'text-primary-dark' : 'text-gray-600'}`}>أنثى</span>
                </label>
              </div>
            </div>

            {/* المحافظة */}
            <div>
              <label className={labelClasses}>المحافظة</label>
              <select className={inputClasses} value={governorate} onChange={(e) => setGovernorate(e.target.value)} required>
                <option value="">اختر المحافظة من القائمة</option>
                {governorates.map((gov) => <option key={gov} value={gov}>{gov}</option>)}
              </select>
            </div>
          </div>

          {/* حالة المفقود + الحالة الصحية + تاريخ التغيب */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div>
              <label className={labelClasses}>حالة الشخص بالبلاغ</label>
              <select className={inputClasses} value={missingStatus} onChange={(e) => setMissingStatus(e.target.value)} required>
                <option value="">اختر الحالة</option>
                <option value="مفقود">مفقود (تبحث عنه)</option>
                <option value="عُثر عليه">عُثر عليه (تائه)</option>
              </select>
            </div>
            <div>
              <label className={labelClasses}>الحالة الصحية</label>
              <select className={inputClasses} value={healthStatus} onChange={(e) => setHealthStatus(e.target.value)} required>
                <option value="">يرجى التحديد</option>
                <option value="سليم صحياً">سليم صحياً</option>
                <option value="يعاني من اضطرابات نفسية">يعاني من اضطرابات نفسية</option>
                <option value="لديه إعاقة جسدية">لديه إعاقة جسدية (أصم/أبكم/إلخ)</option>
              </select>
            </div>
            <div>
              <label className={labelClasses}>تاريخ التغيب (أو المشاهدة)</label>
              <input type="date" className={inputClasses} value={missingDate} onChange={(e) => setMissingDate(e.target.value)} required />
            </div>
          </div>

          <div className="mb-6">
            <label className={labelClasses}>آخر مكان شوهد فيه تفصيلياً</label>
            <input type="text" className={inputClasses} placeholder="مثال: بجوار محطة رمسيس - القاهرة شارع كذا.." value={lastSeen} onChange={(e) => setLastSeen(letterOnly(e.target.value))} />
          </div>

          <div className="mb-8">
            <label className={labelClasses}>تفاصيل إضافية قد تساعد للتعرف عليه (الشكل، الملابس، إلخ)</label>
            <textarea className={`${inputClasses} resize-none`} rows="4" placeholder="كان يرتدي قميص أزرق وبنطال أسود، يحمل حقيبة.." value={details} onChange={(e) => setDetails(letterOnly(e.target.value))} />
          </div>

          <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100 mb-8 mt-2">
            <h4 className="text-lg font-bold text-primary-dark mb-4 flex items-center">
              <IdCard className="ml-2 text-primary" /> بيانات مقدم البلاغ للاتصال به
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className={labelClasses}>اسمك</label>
                <input type="text" className={`${inputClasses} bg-white`} placeholder="ادخل اسمك الثنائي" value={reporterName} onChange={(e) => setReporterName(letterOnly(e.target.value))} />
              </div>
              <div>
                <label className={labelClasses}>رقم الهاتف</label>
                <input type="tel" className={`${inputClasses} bg-white`} placeholder="01XXXXXXXXX" value={phoneNumber} maxLength="11" onChange={(e) => setPhoneNumber(numberOnly(e.target.value))} dir="rtl" />
              </div>
            </div>
          </div>

          <div className="text-center mt-2">
            <button type="submit" className="bg-linear-to-r from-primary-dark to-primary hover:from-primary-darker hover:to-primary text-white font-bold rounded-full py-4 px-12 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1 text-lg w-full md:w-auto inline-flex items-center justify-center gap-3">
              إرسال البلاغ <Send />
            </button>
          </div>

        </form>
      </div>
    </section>
  );
}