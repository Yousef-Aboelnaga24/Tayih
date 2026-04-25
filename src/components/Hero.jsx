import { TriangleAlert, Megaphone, Search } from "lucide-react";
import Button from "./ui/Button";

function Hero() {
    const saved = JSON.parse(localStorage.getItem("missingPeople")) || [];
    return (
        <main className="h-screen bg-cover bg-center bg-no-repeat w-full relative" style={{ backgroundImage: "linear-gradient(90deg, rgba(0,0,0,0.5), rgba(0,0,0,0.6)), url('image/hero-bg.webp')" }}>
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
                            <TriangleAlert className="fa fa-triangle-exclamation text-red-500 text-xl animate-pulse" />
                            <span className="text-white/90 font-medium">عدد البلاغات</span>
                            <span className="font-bold text-2xl text-white">{saved.length}</span>
                            <span className="text-white/90">بلاغ حتى الآن عبر المنصة</span>
                        </div>
                    </div>

                    <div className="flex flex-col sm:flex-row justify-center gap-5 mt-10">
                        <div data-aos="fade-left" data-aos-duration={1000} data-aos-delay={900}>
                            <Button
                                path="report"
                                variant="primary"
                                label="أبلغ عن مفقود"
                                icon={<Megaphone />}
                            />
                        </div>
                        <div data-aos="fade-right" data-aos-duration={1000} data-aos-delay={900}>
                            <Button
                                path="missing"
                                variant="outline"
                                label="ابحث عن مفقود"
                                icon={<Search />}
                            />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Hero;
