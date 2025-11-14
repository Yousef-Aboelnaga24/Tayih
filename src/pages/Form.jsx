import Swal from "sweetalert2";
import { useState } from "react";
import '../assets/css/Form.css'

function From() {
    const [preview, setPreview] = useState("");

    // قراءة صورة الشخص
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            if (!file.type || !file.type.startsWith("image/")) {
                Swal.fire({
                    icon: "error",
                    title: "خطأ",
                    text: "من فضلك ارفع صورة فقط",
                    confirmButtonText: "حسنا",
                });
                e.target.value = "";
                return;
            }

            const reader = new FileReader();
            reader.onload = (event) => {
                setPreview(event.target.result);
                localStorage.setItem("previewImagePerson", event.target.result);
            };
            reader.readAsDataURL(file);
        }
    };

    // دوال منع الأحرف أو الأرقام
    const letterOnly = (input) => {
        input.value = input.value.replace(/[^أ-ي-ء\s]/gi, "");
    };

    const numberOnly = (input) => {
        input.value = input.value.replace(/[^0-9\s]/g, "");
    };

    // عند إرسال النموذج
    const handleSubmit = (e) => {
        e.preventDefault();

        const namePerson = document.getElementById("personName").value.trim();
        const agePerson = Number(document.getElementById("age").value.trim());
        const governorate = document.getElementById("governorateInp").value.trim();
        const governorateList = Array.from(
            document.querySelectorAll("#governorate option")
        ).map((opt) => opt.value);
        const phone = document.getElementById("phoneNumber").value.trim();
        const lastSeen = document.getElementById("lastSeen").value.trim();
        const details = document.getElementById("details").value.trim();
        const reporter = document.getElementById("reporterName").value.trim();

        // التحقق من الصورة
        if (!preview) {
            Swal.fire({
                icon: "error",
                title: "خطأ",
                text: "يجب رفع صورة للشخص المفقود",
                confirmButtonText: "حسنا",
            });
            return;
        }

        // التحقق من الحقول
        const fields = [preview, phone, governorate, reporter, details, lastSeen, namePerson];
        if (fields.some((field) => field === "")) {
            Swal.fire({
                icon: "error",
                title: "خطأ",
                text: "أملأ جميع الحقول",
                confirmButtonText: "حسنا",
            });
            return;
        }

        // التحقق من العمر
        if (isNaN(agePerson) || agePerson < 1 || agePerson > 120) {
            Swal.fire({
                icon: "error",
                title: "خطأ",
                text: "الرجاء إدخال عمر صحيح",
                confirmButtonText: "حسنا",
            });
            return;
        }

        // التحقق من المحافظة
        if (!governorateList.includes(governorate)) {
            Swal.fire({
                icon: "error",
                title: "خطأ",
                text: "ادخل اسم المحافظة صحيح",
                confirmButtonText: "حسنا",
            });
            return;
        }

        // التحقق من رقم الهاتف
        if (!/^0\d{10}$/.test(phone)) {
            Swal.fire({
                icon: "error",
                title: "خطأ",
                text: "رقم الهاتف يجب أن يتكون من 11 رقمًا ويبدأ بـ 0",
                confirmButtonText: "حسنا",
            });
            return;
        }

        // تخزين البلاغ
        const person = {
            img: preview,
            name: namePerson,
            age: agePerson,
            governorate: governorate,
            phone: phone,
            lastSeen: lastSeen,
            details: details,
            reporter: reporter,
            reportDate: new Date().toISOString(),
        };

        const persons = JSON.parse(localStorage.getItem("persons")) || [];
        persons.push(person);
        localStorage.setItem("persons", JSON.stringify(persons));

        Swal.fire({
            icon: "success",
            title: "تم الإضافة بنجاح",
            text: "نجحت في إضافة البلاغ",
            confirmButtonText: "حسنا",
        });

        setTimeout(() => {
            window.location.href = "missing.html";
        }, 2000);
    };

    return (
        <section>
            <div className="container mt-5 mb-5">
                <h2 className="text-center mb-4 text-main fw-bold">تقديم بلاغ مفقود</h2>
                <form
                    id="reportForm"
                    onSubmit={handleSubmit}
                    method="post"
                    encType="multipart/form-data"
                    className="bg-white p-4 shadow-lg w-75 rounded m-auto"
                >
                    {/* صورة الشخص */}
                    <div className="mb-3">
                        <label htmlFor="personImage" className="form-label">
                            ارفع صورة للشخص
                        </label>
                        <input
                            type="file"
                            className="form-control"
                            id="personImage"
                            name="image"
                            accept="image/*"
                            required
                            onChange={handleImageChange}
                        />
                    </div>

                    {/* الاسم */}
                    <div className="mb-3">
                        <label htmlFor="personName" className="form-label">اسم الشخص</label>
                        <input
                            type="text"
                            className="form-control"
                            id="personName"
                            name="name"
                            placeholder="ادخل اسم الشخص"
                            required
                            onKeyUp={(e) => letterOnly(e.target)}
                        />
                    </div>

                    {/* العمر */}
                    <div className="mb-3">
                        <label htmlFor="age" className="form-label">
                            العمر
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="age"
                            name="age"
                            placeholder="ادخل عمر الشخص"
                            min="1"
                            max="120"
                            required
                            onKeyUp={(e) => numberOnly(e.target)}
                        />
                    </div>

                    {/* المحافظة */}
                    <div className="mb-3">
                        <label htmlFor="governorate" className="form-label">
                            المحافظة
                        </label>
                        <select id="governorate" name="governorate" className="form-select" required>
                            <option value="">اختر المحافظة</option>
                            <option value="القاهرة">القاهرة</option>
                            <option value="الجيزة">الجيزة</option>
                            <option value="الإسكندرية">الإسكندرية</option>
                            <option value="الدقهلية">الدقهلية</option>
                            <option value="البحر الأحمر">البحر الأحمر</option>
                            <option value="البحيرة">البحيرة</option>
                            <option value="الفيوم">الفيوم</option>
                            <option value="الغربية">الغربية</option>
                            <option value="الإسماعيلية">الإسماعيلية</option>
                            <option value="المنوفية">المنوفية</option>
                            <option value="المنيا">المنيا</option>
                            <option value="القليوبية">القليوبية</option>
                            <option value="الوادي الجديد">الوادي الجديد</option>
                            <option value="السويس">السويس</option>
                            <option value="أسوان">أسوان</option>
                            <option value="أسيوط">أسيوط</option>
                            <option value="بني سويف">بني سويف</option>
                            <option value="بورسعيد">بورسعيد</option>
                            <option value="دمياط">دمياط</option>
                            <option value="الشرقية">الشرقية</option>
                            <option value="جنوب سيناء">جنوب سيناء</option>
                            <option value="كفر الشيخ">كفر الشيخ</option>
                            <option value="مطروح">مطروح</option>
                            <option value="الأقصر">الأقصر</option>
                            <option value="قنا">قنا</option>
                            <option value="شمال سيناء">شمال سيناء</option>
                            <option value="سوهاج">سوهاج</option>
                        </select>
                    </div>


                    {/* آخر مكان شوهد فيه */}
                    <div className="mb-3">
                        <label htmlFor="lastSeen" className="form-label">
                            آخر مكان شوهد فيه
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="lastSeen"
                            name="lastSeen"
                            placeholder="مثال: محطة رمسيس - القاهرة"
                            onKeyUp={(e) => letterOnly(e.target)}
                        />
                    </div>

                    {/* تفاصيل إضافية */}
                    <div className="mb-3">
                        <label htmlFor="details" className="form-label">
                            تفاصيل إضافية
                        </label>
                        <textarea
                            className="form-control"
                            id="details"
                            name="details"
                            rows="3"
                            placeholder="ملابس، وقت الفقد، ملاحظات..."
                            required
                            onKeyUp={(e) => letterOnly(e.target)}
                        ></textarea>
                    </div>

                    {/* رقم الهاتف */}
                    <div className="mb-3">
                        <label htmlFor="phoneNumber" className="form-label">
                            رقم الهاتف للتواصل
                        </label>
                        <input
                            type="tel"
                            className="form-control"
                            id="phoneNumber"
                            name="phoneNumber"
                            placeholder="01XXXXXXXXX"
                            required
                            onKeyUp={(e) => numberOnly(e.target)}
                        />
                    </div>

                    {/* اسم المبلغ */}
                    <div className="mb-4">
                        <label htmlFor="reporterName" className="form-label">
                            اسم المُبلغ
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="reporterName"
                            name="reporterName"
                            placeholder="ادخل اسمك"
                            required
                            onKeyUp={(e) => letterOnly(e.target)}
                        />
                    </div>

                    {/* زر الإرسال */}
                    <div className="d-grid">
                        <button
                            type="submit"
                            id="btn-main"
                            className="btn btn-main"
                            aria-label="إرسال البلاغ"
                        >
                            إرسال البلاغ
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default From;
