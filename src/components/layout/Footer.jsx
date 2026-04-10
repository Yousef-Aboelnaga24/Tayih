import { Home, Info, Mail, Cog, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa"

import { Link } from "react-router-dom";

function Footer() {
    return (
        <footer className="text-white py-12" style={{ backgroundColor: "#074c3a" }}>
            <div className="w-full max-w-7xl mx-auto px-4 lg:px-8 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pb-8 text-right">

                    {/* القسم الأول */}
                    <div>
                        <h2 className="font-bold mb-4 text-2xl text-primary-light">تائه</h2>
                        <p className="text-[#d4f0e2] text-sm leading-relaxed max-w-xs">
                            "تائه" هي منصة إنسانية لمساعدة الأهالي في العثور على أطفالهم
                            وكبار السن المفقودين
                        </p>
                    </div>

                    {/* روابط مهمة */}
                    <div>
                        <h3 className="font-bold mb-4 text-xl text-primary-light">روابط مهمة</h3>
                        <ul className="space-y-3">
                            <li>
                                <Link
                                    to="/"
                                    className="text-gray-200 hover:text-white hover:-translate-x-1.25 transition-all flex items-center"
                                >
                                    <Home className="me-2 w-5 text-center" /> الرئيسية
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/about"
                                    className="text-gray-200 hover:text-white hover:-translate-x-1.25 transition-all flex items-center"
                                >
                                    <Info className="me-2 w-5 text-center" /> من نحن
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/services"
                                    className="text-gray-200 hover:text-white hover:-translate-x-1.25 transition-all flex items-center"
                                >
                                    <Cog className="me-2 w-5 text-center" /> الخدمات
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="/contact"
                                    className="text-gray-200 hover:text-white hover:-translate-x-1.25 transition-all flex items-center"
                                >
                                    <Mail className="me-2 w-5 text-center" /> اتصل بنا
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* تواصل معنا */}
                    <div>
                        <h3 className="font-bold mb-4 text-xl text-primary-light">تواصل معنا</h3>
                        <div className="space-y-3 text-gray-200 text-sm">
                            <p className="flex items-center hover:text-white hover:underline cursor-pointer transition-colors">
                                <Home className="me-2 w-5 text-center" /> القاهرة، مصر
                            </p>
                            <p className="flex items-center hover:text-white hover:underline cursor-pointer transition-colors">
                                <Mail className="me-2 w-5 text-center" /> info@tayeh.com
                            </p>
                            <p className="flex items-center hover:text-white hover:underline cursor-pointer transition-colors">
                                <Phone className="me-2 w-5 text-center" /> +20 123 456 7890
                            </p>
                        </div>
                    </div>

                    {/* تابعنا */}
                    <div>
                        <h3 className="uppercase font-bold mb-4 text-xl text-primary-light">تابعنا</h3>
                        <p className="text-gray-200 text-sm mb-4 leading-relaxed">
                            لا تفوت جديدنا! تابعنا على منصات التواصل الاجتماعي للحصول على آخر
                            الأخبار.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 text-gray-200 hover:bg-white hover:text-[#074c3a] hover:border-white transition-all duration-300"
                                aria-label="Facebook"
                            >
                                <FaFacebookF className="text-lg" />
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 text-gray-200 hover:bg-white hover:text-[#074c3a] hover:border-white transition-all duration-300"
                                aria-label="WhatsApp"
                            >
                                <FaWhatsapp className="text-lg"/>
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 text-gray-200 hover:bg-white hover:text-[#074c3a] hover:border-white transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="text-lg"/>
                            </a>
                            <a
                                href="#"
                                className="flex items-center justify-center w-10 h-10 rounded-full border border-gray-400 text-gray-200 hover:bg-white hover:text-[#074c3a] hover:border-white transition-all duration-300"
                                aria-label="Twitter"
                            >
                                <FaTwitter className="text-lg"/>
                            </a>
                        </div>
                    </div>
                </div>

                <div className="pt-6 border-t border-white/20 flex flex-col md:flex-row justify-between items-center text-sm text-gray-300">
                    <p>
                        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لموقع{" "}
                        <span className="font-bold text-white">تائه</span>
                    </p>
                    <p className="mt-2 md:mt-0 text-xs">
                        تم التطوير بكل ❤️ من أجل مجتمع أفضل
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;