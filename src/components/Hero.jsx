

import { Link } from "react-router-dom";

function Hero() {
    const saved = JSON.parse(localStorage.getItem("missingPeople")) || [];
    return (
        <main className="h-screen bg-cover bg-center bg-no-repeat w-full relative" style={{ backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('/image/hero-bg.webp')" }}>
            <section className="flex justify-center items-center text-center h-full w-full px-4 pt-16">
                <div className="w-full max-w-2xl text-white">
                    <h1 data-aos="zoom-in" data-aos-duration="1000" className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 drop-shadow-xl text-white">
                        مرحباً بك في منصة <span className="text-primary-light drop-shadow-md">"تائه"</span>
                    </h1>

                    <div data-aos="fade-up" data-aos-duration="700" className="backdrop-blur-sm bg-black/10 p-6 rounded-2xl border border-white/10">
                        <p className="text-gray-100 text-lg md:text-xl leading-relaxed">
                            منصة إنسانية تساعدك في الإبلاغ والبحث عن الأطفال المفقودين وكبار
                            السن التائهين بكل سهولة وسرعة.
                        </p>
                        <div className="mt-6 inline-flex items-center justify-center gap-3 bg-white/20 px-6 py-3 rounded-full border border-white/20">
                            <i className="fa fa-triangle-exclamation text-red-500 text-xl animate-pulse"></i>
                            <span className="text-white/90 font-medium">عدد البلاغات</span>
                            <span className="font-bold text-2xl text-white">{saved.length}</span>
                            <span className="text-white/90">بلاغ حتى الآن عبر المنصة</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
                        <Link
                            to="/report"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="900"
                            className="px-8 py-3.5 rounded-full bg-primary hover:bg-primary-dark border-2 border-transparent text-white font-bold text-lg shadow-[0_0_20px_rgba(10,163,128,0.4)] hover:shadow-[0_0_30px_rgba(10,163,128,0.6)] transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <i className="fas fa-bullhorn ml-2"></i> أبلغ عن مفقود
                        </Link>
                        <Link
                            to="/missing"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="900"
                            className="px-8 py-3.5 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold text-lg hover:bg-white hover:text-primary-dark shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                        >
                            <i className="fas fa-search ml-2"></i> ابحث عن شخص
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Hero;
