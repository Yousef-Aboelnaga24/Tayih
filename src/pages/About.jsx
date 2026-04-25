import { Baby, UserRound, MapPinSearch, Shield } from "lucide-react";

function About() {
    return (
        <>
            <div className="pt-20 bg-gray-50 min-h-screen">
                <section className="bg-primary-darker text-white py-24 bg-[url('/image/hero-bg.webp')] bg-cover bg-center bg-no-repeat bg-blend-overlay relative">
                    <div className="absolute inset-0 bg-black/50"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white relative z-10">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg">من نحن</h1>
                        <p className="text-xl max-w-2xl mx-auto text-gray-200 leading-relaxed">نحن "تائه"، منصة تهدف إلى مساعدة العائلات في العثور على أحبائهم المفقودين بسهولة وأمان.</p>
                    </div>
                </section>

                <section className="py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-3xl mx-auto text-center mb-20 bg-white p-10 rounded-3xl shadow-sm border border-gray-100 relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full z-0 pointer-events-none"></div>
                            <h2 className="text-3xl font-bold text-primary-dark mb-8 inline-block relative pb-3 border-b-4 border-primary z-10">مهمتنا ورؤيتنا</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-loose z-10 relative">
                                في "تائه"، ندرك أن فقدان شخص عزيز يمثل تحديًا كبيرًا وصعبًا على الأسرة والمجتمع.
                                لذلك نوفر منصة تفاعلية وآمنة تسمح بالإبلاغ عن المفقودين والبحث في قاعدة بيانات شاملة تساعد على تسريع
                                عملية العثور عليهم.
                            </p>
                            <p className="text-lg text-gray-600 leading-loose z-10 relative">
                                نؤمن بأن التكنولوجيا يمكن أن تكون جسرًا للتواصل والإيجاد، ونعمل جاهدين لتقديم خدماتنا بأعلى معايير
                                الثقة والخصوصية.
                            </p>
                        </div>

                        <div className="text-center mb-12">
                            <h2 id="services" className="text-3xl font-bold text-primary-dark inline-block relative pb-3 border-b-4 border-primary">خدماتنا</h2>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                            {/* Service 1 */}
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group">
                                <div className="w-20 h-20 mx-auto bg-primary/10 text-primary-dark rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                                    <Baby />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4">البحث عن الأطفال</h3>
                                <p className="text-gray-500 leading-relaxed text-sm">نوفر وسيلة فعالة للإبلاغ والبحث عن الأطفال الذين فقدوا بطريقة سهلة ومبسطة.</p>
                            </div>

                            {/* Service 2 */}
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group relative overflow-hidden">
                                <div className="absolute inset-0 bg-primary/5 rounded-3xl transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
                                <div className="w-20 h-20 mx-auto bg-primary/10 text-primary-dark rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 relative z-10">
                                    <UserRound />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">البحث عن كبار السن</h3>
                                <p className="text-gray-500 leading-relaxed text-sm relative z-10">نساعد في العثور على كبار السن المفقودين ونعمل على تسهيل التواصل بين العائلات.</p>
                            </div>

                            {/* Service 3 */}
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group relative overflow-hidden">
                                <div className="absolute inset-0 bg-primary/5 rounded-3xl transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
                                <div className="w-20 h-20 mx-auto bg-primary/10 text-primary-dark rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 relative z-10">
                                    <MapPinSearch />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">قاعدة بيانات محدثة</h3>
                                <p className="text-gray-500 leading-relaxed text-sm relative z-10">نحدث بيانات المفقودين باستمرار لنضمن دقة المعلومات وسرعة العثور عليهم.</p>
                            </div>

                            {/* Service 4 */}
                            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 text-center group relative overflow-hidden">
                                <div className="absolute inset-0 bg-primary/5 rounded-3xl transform group-hover:scale-105 transition-all duration-500 opacity-0 group-hover:opacity-100 pointer-events-none"></div>
                                <div className="w-20 h-20 mx-auto bg-primary/10 text-primary-dark rounded-full flex items-center justify-center text-3xl mb-6 group-hover:scale-110 group-hover:bg-primary group-hover:text-white transition-all duration-300 relative z-10">
                                    <Shield />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-4 relative z-10">خصوصية وأمان</h3>
                                <p className="text-gray-500 leading-relaxed text-sm relative z-10">نلتزم بحماية بيانات المستخدمين ونضمن سرية المعلومات للحفاظ على ثقتكم.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    );
}

export default About;
