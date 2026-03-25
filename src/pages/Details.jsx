import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function PersonDetails() {
    const navigate = useNavigate();
    const { id } = useParams();
    const [person, setPerson] = useState(null);

    useEffect(() => {
        const storedPeople = JSON.parse(localStorage.getItem("missingPeople")) || [];
        const foundPerson = storedPeople.find(p => p.id === Number(id));
        if (foundPerson) setPerson(foundPerson);
    }, [id]);

    const handleAddReport = () => {
        Swal.fire({
            title: "إضافة بلاغ أو معلومات جديدة",
            html: `
                <input id="swal-input1" class="swal2-input" placeholder="الاسم" style="width: 80%">
                <input type="tel" id="swal-input2" class="swal2-input" placeholder="رقم الهاتف للتواصل" style="width: 80%">
                <textarea id="swal-input3" class="swal2-textarea" placeholder="تفاصيل البلاغ أو مكان المشاهدة" style="width: 80%; margin-top: 15px;"></textarea>
            `,
            showCancelButton: true,
            confirmButtonText: "إرسال البلاغ",
            cancelButtonText: "إلغاء",
            confirmButtonColor: "#0aa380",
            cancelButtonColor: "#ef4444",
            preConfirm: () => {
                const name = document.getElementById("swal-input1").value.trim();
                const phone = document.getElementById("swal-input2").value.trim();
                const details = document.getElementById("swal-input3").value.trim();
                
                if (!name || !phone || !details) {
                    Swal.showValidationMessage("يرجى إدخال جميع البيانات المطلوبة");
                    return false;
                }
                return { name, phone, details };
            }
        }).then((result) => {
            if (result.isConfirmed) {
                const newReport = {
                    id: Date.now(),
                    missingPersonId: person.id,
                    ...result.value,
                    date: new Date().toISOString()
                };
                const existingReports = JSON.parse(localStorage.getItem("personReports")) || [];
                localStorage.setItem("personReports", JSON.stringify([...existingReports, newReport]));
                
                Swal.fire({
                    icon: "success",
                    title: "تم الإرسال!",
                    text: "تم استلام البلاغ بنجاح، شكراً لتعاونك.",
                    confirmButtonColor: "#0aa380",
                    confirmButtonText: "حسناً"
                });
            }
        });
    };

    if (!person) {
        return (
            <div className="pt-40 pb-20 text-center min-h-screen bg-gray-50 flex items-center justify-center">
                <div className="bg-white p-10 rounded-3xl shadow-sm border border-gray-100 max-w-md w-full">
                    <i className="fas fa-search-minus text-6xl text-red-100 mb-6 block"></i>
                    <h3 className="text-2xl font-bold text-red-500 mb-2">لا توجد بيانات!</h3>
                    <p className="text-gray-500 mb-6">عذراً، لم نتمكن من العثور على بيانات هذا الشخص.</p>
                    <button onClick={() => navigate(-1)} className="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-medium transition-colors">
                        العودة للخلف
                    </button>
                </div>
            </div>
        );
    }

    const formattedReportDate = person.reportDate
        ? new Date(person.reportDate).toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" })
        : "";

    const formattedMissingDate = person.missingDate
        ? new Date(person.missingDate).toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" })
        : "";

    return (
        <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl shadow-xl shadow-gray-200/50 border border-gray-100 p-6 md:p-10 overflow-hidden relative">
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-[100px] -z-0"></div>

                    <div className="flex flex-col md:flex-row gap-8 lg:gap-12 relative z-10">
                        {/* الصورة */}
                        <div className="w-full md:w-1/3 flex-shrink-0">
                            <div className="p-2 bg-primary/5 rounded-3xl shadow-inner mx-auto max-w-sm">
                                <img
                                    src={person.personImage}
                                    alt={person.personName}
                                    className="w-full h-auto aspect-[3/4] object-cover rounded-2xl shadow-md transform hover:scale-[1.02] transition-transform duration-300"
                                />
                            </div>
                        </div>

                        {/* البيانات */}
                        <div className="w-full md:w-2/3 flex flex-col justify-center">
                            {/* عنوان + الأزرار */}
                            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 border-b border-gray-100 pb-6">
                                <h3 className="font-bold text-2xl md:text-3xl text-primary-dark flex items-center">
                                    <i className="fa-solid fa-circle-info me-3 text-primary"></i> 
                                    بيانات المفقود
                                </h3>
                                <div className="flex flex-wrap gap-3 w-full sm:w-auto">
                                    <button
                                        onClick={handleAddReport}
                                        className="flex-1 sm:flex-none inline-flex justify-center items-center bg-red-50 hover:bg-red-500 text-red-500 hover:text-white border border-red-200 hover:border-red-500 px-5 py-2.5 rounded-full font-medium transition-all duration-300 shadow-sm"
                                    >
                                        <i className="fa-solid fa-flag ml-2"></i> إضافة بلاغ
                                    </button>
                                    <button
                                        onClick={() => navigate(-1)}
                                        className="flex-1 sm:flex-none inline-flex justify-center items-center bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 px-5 py-2.5 rounded-full font-medium transition-all duration-300 shadow-sm"
                                    >
                                        <i className="fa-solid fa-arrow-right-long ml-2"></i> الرجوع
                                    </button>
                                </div>
                            </div>

                            {/* ترتيب البيانات بشكل منطقي */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                                <div className="flex items-start p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                    <i className="fa-solid fa-user text-primary mt-1 ml-3 w-5 text-center"></i>
                                    <div><strong className="text-gray-500 block text-xs mb-1">الاسم</strong><span className="font-bold text-gray-900 text-lg">{person.personName}</span></div>
                                </div>
                                <div className="flex items-start p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                    <i className="fa-solid fa-cake-candles text-primary mt-1 ml-3 w-5 text-center"></i>
                                    <div><strong className="text-gray-500 block text-xs mb-1">العمر</strong><span className="font-bold text-gray-900 text-lg">{person.age} سنة</span></div>
                                </div>
                                <div className="flex items-start p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                    <i className="fa-solid fa-venus-mars text-primary mt-1 ml-3 w-5 text-center"></i>
                                    <div><strong className="text-gray-500 block text-xs mb-1">النوع</strong><span className="font-bold text-gray-900 text-lg">{person.gender}</span></div>
                                </div>
                                <div className="flex items-start p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                    <i className="fa-solid fa-map-location-dot text-primary mt-1 ml-3 w-5 text-center"></i>
                                    <div><strong className="text-gray-500 block text-xs mb-1">المحافظة</strong><span className="font-bold text-gray-900 text-lg">{person.governorate}</span></div>
                                </div>
                                <div className="flex items-start p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                    <i className="fa-solid fa-heart-pulse text-primary mt-1 ml-3 w-5 text-center"></i>
                                    <div><strong className="text-gray-500 block text-xs mb-1">الحالة الصحية</strong><span className="font-bold text-gray-900 text-lg">{person.healthStatus}</span></div>
                                </div>
                                <div className="flex items-start p-3 bg-red-50 rounded-xl border border-red-100">
                                    <i className="fa-solid fa-magnifying-glass text-red-500 mt-1 ml-3 w-5 text-center"></i>
                                    <div><strong className="text-red-400 block text-xs mb-1">حالة المفقود</strong><span className="font-bold text-red-600 text-lg">{person.missingStatus}</span></div>
                                </div>
                                <div className="flex items-start p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                    <i className="fa-regular fa-calendar-xmark text-primary mt-1 ml-3 w-5 text-center"></i>
                                    <div><strong className="text-gray-500 block text-xs mb-1">تاريخ التغيب</strong><span className="font-bold text-gray-900 text-lg">{formattedMissingDate}</span></div>
                                </div>
                                <div className="flex items-start p-3 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                    <i className="fa-solid fa-location-crosshairs text-primary mt-1 ml-3 w-5 text-center"></i>
                                    <div><strong className="text-gray-500 block text-xs mb-1">آخر مكان شوهد فيه</strong><span className="font-bold text-gray-900 text-lg">{person.lastSeen}</span></div>
                                </div>
                                <div className="flex items-start p-4 bg-primary/5 border border-primary/10 rounded-xl sm:col-span-2">
                                    <i className="fa-solid fa-circle-info text-primary mt-1 ml-3 w-5 text-center"></i>
                                    <div><strong className="text-primary-dark block text-xs mb-1">تفاصيل إضافية عن الاختفاء</strong><span className="font-medium text-gray-800 text-base leading-relaxed">{person.details}</span></div>
                                </div>
                            </div>

                            <div className="mt-8 pt-6 border-t border-gray-100 grid grid-cols-1 sm:grid-cols-3 gap-4">
                                <div className="flex items-center gap-3 bg-white border border-gray-100 p-3 rounded-xl shadow-sm">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <i className="fa-solid fa-id-badge"></i>
                                    </div>
                                    <div className="overflow-hidden">
                                        <span className="block text-[10px] text-gray-400 uppercase tracking-wider">اسم المبلغ</span>
                                        <span className="font-bold text-gray-800 truncate block">{person.reporterName}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white border border-gray-100 p-3 rounded-xl shadow-sm">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <div className="overflow-hidden">
                                        <span className="block text-[10px] text-gray-400 uppercase tracking-wider">رقم التواصل</span>
                                        <span className="font-bold text-gray-800 block" dir="ltr">{person.phoneNumber}</span>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 bg-white border border-gray-100 p-3 rounded-xl shadow-sm">
                                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0">
                                        <i className="fa-solid fa-calendar-check"></i>
                                    </div>
                                    <div className="overflow-hidden">
                                        <span className="block text-[10px] text-gray-400 uppercase tracking-wider">تاريخ الإبلاغ</span>
                                        <span className="font-bold text-gray-800 block">{formattedReportDate}</span>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
