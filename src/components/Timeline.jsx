import { Edit, Search, Megaphone, Handshake } from "lucide-react"

function Timeline() {
    return (
        <section className="py-24 bg-white relative">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 inline-block relative">
                        كيف تعمل منصة <span className="text-primary-dark">تائه</span>؟
                        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-linear-to-r from-primary-light to-primary-dark rounded-full"></div>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Step 1 */}
                    <div className="relative group">
                        <div className="h-full p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                            <div className="w-20 h-20 mx-auto bg-primary/10 text-primary-dark rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <Edit />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">قدّم بلاغ</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">أدخل بيانات الشخص المفقود عبر المنصة مع كافة التفاصيل المتاحة بدقة.</p>
                        </div>
                    </div>

                    {/* Step 2 */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl transform group-hover:scale-105 transition-all duration-500 -z-10"></div>
                        <div className="h-full p-8 bg-linear-to-br from-primary-dark to-primary text-white rounded-3xl shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-2 text-center border border-white/10">
                            <div className="w-20 h-20 mx-auto bg-white/20 text-white rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-primary-dark transition-all duration-300">
                                <Search />
                            </div>
                            <h3 className="text-xl font-bold mb-3">المراجعة</h3>
                            <p className="text-white/80 leading-relaxed text-sm">يتم التحقق من صحة البلاغ ومراجعته من قبل المختصين لضمان المصداقية.</p>
                        </div>
                    </div>

                    {/* Step 3 */}
                    <div className="relative group">
                        <div className="h-full p-8 bg-white border border-gray-100 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center">
                            <div className="w-20 h-20 mx-auto bg-primary/10 text-primary-dark rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                <Megaphone />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">النشر</h3>
                            <p className="text-gray-500 leading-relaxed text-sm">يُعرض البلاغ على صفحة المفقودين ليراه الجميع وتتم مشاركته على نطاق واسع.</p>
                        </div>
                    </div>

                    {/* Step 4 */}
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl transform group-hover:scale-105 transition-all duration-500 -z-10"></div>
                        <div className="h-full p-8 bg-linear-to-br from-primary-dark to-primary text-white rounded-3xl shadow-lg hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-2 text-center border border-white/10">
                            <div className="w-20 h-20 mx-auto bg-white/20 text-white rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-white group-hover:text-primary-dark transition-all duration-300">
                                <Handshake />
                            </div>
                            <h3 className="text-xl font-bold mb-3">التواصل</h3>
                            <p className="text-white/80 leading-relaxed text-sm">يمكن للأشخاص التواصل مباشرة مع ذوي المفقود عند إيجاد أي معلومات تفيد في العثور عليه.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline