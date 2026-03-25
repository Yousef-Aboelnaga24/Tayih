import React, { useState } from 'react';

function Contact() {
    const [showSuccess, setShowSuccess] = useState(false);

    const showConfirmation = (e) => {
        e.preventDefault();
        setShowSuccess(true);
        setTimeout(() => setShowSuccess(false), 4000);
        e.target.reset(); // clear form
    };

    const inputClasses = "w-full bg-white border border-gray-200 text-gray-900 rounded-xl focus:ring-primary focus:border-primary block p-4 transition-all outline-none shadow-sm hover:border-gray-300 font-medium";
    const labelClasses = "block mb-2 text-sm font-bold text-gray-700 ml-1";

    return (
        <section id="contact" className="pt-32 pb-24 bg-gray-50 min-h-screen flex items-center relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary-dark/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 bg-white rounded-[2.5rem] shadow-2xl shadow-gray-200/50 overflow-hidden border border-gray-100">
                    
                    {/* 📨 معلومات التواصل */}
                    <div className="lg:col-span-5 relative z-10 flex flex-col justify-center bg-primary-darker text-white p-10 md:p-14">
                        <div className="absolute inset-0 bg-[url('/image/hero-bg.webp')] opacity-10 bg-cover bg-center pointer-events-none"></div>
                        <div className="absolute inset-0 bg-gradient-to-br from-primary-darker/90 to-primary-dark/95 pointer-events-none"></div>
                        
                        <div className="relative z-10">
                            <h2 className="text-3xl font-bold mb-6 flex items-center gap-3 drop-shadow-md">
                                <i className="fas fa-comment-dots text-primary-light"></i> <span>تواصل معنا</span>
                            </h2>
                            <p className="text-primary-light mb-10 text-lg leading-relaxed font-light">
                                نحن هنا للإجابة على استفساراتك وتقديم الدعم بأسرع وقت ممكن. يمكنك التواصل معنا عبر الوسائل التالية:
                            </p>

                            <ul className="space-y-6">
                                <li className="flex items-center gap-4 group">
                                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-primary-dark transition-all duration-300 group-hover:scale-110">
                                        <i className="fas fa-map-marker-alt text-2xl"></i>
                                    </div>
                                    <span className="font-medium text-lg leading-tight">القاهرة، مصر <br/><span className="text-sm font-light text-primary-light">المقر الرئيسي</span></span>
                                </li>
                                <li className="flex items-center gap-4 group">
                                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-primary-dark transition-all duration-300 group-hover:scale-110">
                                        <i className="fa fa-envelope text-xl"></i>
                                    </div>
                                    <span className="font-medium text-lg">support@taeh.com</span>
                                </li>
                                <li className="flex items-center gap-4 group">
                                    <div className="w-14 h-14 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-white border border-white/10 group-hover:bg-white group-hover:text-primary-dark transition-all duration-300 group-hover:scale-110">
                                        <i className="fa fa-phone text-xl"></i>
                                    </div>
                                    <span className="font-medium text-lg dir-ltr tracking-wider">012 3456 7890</span>
                                </li>
                                <li className="flex items-center gap-4 group cursor-pointer mt-4">
                                    <div className="w-14 h-14 bg-[#25D366]/20 backdrop-blur-md rounded-2xl flex items-center justify-center text-[#25D366] border border-[#25D366]/30 group-hover:bg-[#25D366] group-hover:text-white transition-all duration-300 group-hover:scale-110">
                                        <i className="fab fa-whatsapp text-2xl"></i>
                                    </div>
                                    <span className="font-bold text-lg dir-ltr tracking-wider">تواصل عبر واتساب</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 📝 نموذج التواصل */}
                    <div className="lg:col-span-7 relative z-10 bg-gray-50/50">
                        <div className="p-10 md:p-14 h-full flex flex-col justify-center relative">
                            <h5 className="text-3xl font-bold text-gray-900 mb-8 inline-block relative pb-2 text-center md:text-right">
                                أرسل لنا رسالة
                                <div className="absolute bottom-0 right-0 w-16 h-1.5 bg-primary rounded-full md:left-auto left-1/2 md:translate-x-0 -translate-x-1/2"></div>
                            </h5>
                            
                            <form onSubmit={showConfirmation} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className={labelClasses}>الاسم الكريم</label>
                                        <input type="text" id="name" className={inputClasses} placeholder="ادخل اسمك بالكامل" required />
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="email" className={labelClasses}>البريد الإلكتروني</label>
                                        <input type="email" id="email" className={inputClasses} placeholder="example@domain.com" required />
                                    </div>
                                </div>
                                
                                <div>
                                    <label htmlFor="subject" className={labelClasses}>موضوع الرسالة</label>
                                    <input type="text" id="subject" className={inputClasses} placeholder="بخصوص ماذا تود مراسلتنا؟" required />
                                </div>

                                <div>
                                    <label htmlFor="message" className={labelClasses}>تفاصيل الرسالة</label>
                                    <textarea id="message" className={`${inputClasses} resize-none`} placeholder="كيف يمكننا مساعدتك؟ تفضل بكتابة رسالتك هنا..." rows="5" required></textarea>
                                </div>
                                
                                <div className="pt-4">
                                    <button type="submit" className="w-full sm:w-auto bg-gradient-to-l from-primary-dark to-primary hover:from-primary-darker hover:to-primary-dark text-white font-bold py-4 px-12 rounded-xl shadow-[0_10px_20px_-10px_rgba(10,163,128,0.5)] hover:shadow-[0_15px_25px_-10px_rgba(10,163,128,0.6)] transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-3 text-lg">
                                        إرسال الرسالة <i className="fas fa-paper-plane"></i>
                                    </button>
                                </div>
                            </form>

                            {/* ✅ رسالة تأكيد */}
                            {showSuccess && (
                                <div className="absolute bottom-10 left-10 right-10 z-50 animate-[fade-in-up_0.5s_ease-out]">
                                    <div className="bg-white border-l-4 border-green-500 shadow-xl text-gray-800 font-bold p-5 rounded-r-xl rounded-l-md flex items-center gap-4">
                                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 shrink-0">
                                            <i className="fas fa-check text-xl"></i>
                                        </div>
                                        <div>
                                            <h4 className="text-green-600 text-lg">تم الإرسال بنجاح!</h4>
                                            <p className="text-gray-500 text-sm font-normal mt-1">شكرًا لتواصلك معنا، سنقوم بالرد عليك في أقرب وقت ممكن.</p>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
