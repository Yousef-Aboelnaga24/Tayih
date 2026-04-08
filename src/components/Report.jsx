import Button from "./ui/Button";

function Report() {
    return (
        <section id="report-section" className="py-24 bg-gray-50 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-dark/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
                    <div className="order-2 md:order-1 relative group">
                        <div className="absolute inset-0 bg-primary/20 rounded-3xl blur-xl transform group-hover:scale-105 transition-all duration-500 -z-10"></div>
                        <img
                            src="./image/cute-bunny.webp"
                            loading="lazy"
                            alt="تبليغ عن مفقود"
                            className="w-full max-w-100 mx-auto rounded-3xl shadow-xl object-cover transform transition-transform duration-500 group-hover:scale-[1.03]"
                            style={{ maxHeight: "420px" }}
                        />
                    </div>

                    <div className="order-1 md:order-2 text-center md:text-right">
                        <div className="inline-flex items-center justify-center p-3 bg-primary/10 text-primary-dark rounded-xl mb-6">
                            <i className="fas fa-hand-holding-heart text-2xl"></i>
                        </div>
                        <h2 className="font-bold mb-6 text-gray-900 text-3xl md:text-4xl lg:text-5xl leading-tight">
                            هل رأيت شخصاً <span className="text-primary-dark relative">
                                تائهاً؟
                                <span className="absolute bottom-0 left-0 w-full h-2 bg-primary/20 rounded -z-10 -rotate-2"></span>
                            </span>
                        </h2>

                        <p className="my-6 text-lg text-gray-600 leading-relaxed font-light">
                            ساهم معنا في إعادة المفقودين إلى أسرهم وزرع الأمل في قلوبهم من جديد.
                            كل مساهمة بسيطة قد تكون السبب في نهاية معاناة عائلة كاملة.
                        </p>

                        <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 mb-8 inline-block text-right w-full md:w-auto">
                            <i className="fas fa-quote-right text-3xl text-primary-light/30 mb-2"></i>
                            <span className="font-semibold text-gray-800 block text-lg"> كل معلومة صغيرة قد تصنع فارقاً حقيقياً في إنقاذ حياة. </span>
                        </div>

                        <div>
                            <Button
                                path="report"
                                variant="linear"
                                label="قدّم البلاغ الآن"
                                icon="bullhorn"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Report;
