import { Link } from "react-router-dom";
import '../assets/css/Footer.css'

function Footer() {
    return (
        <footer className="text-white py-5" style={{ backgroundColor: "#074c3a" }}>
            <div className="container-fluid d-flex flex-column text-md-start">
                <div className="row text-md-start pb-3">
                    {/* القسم الأول */}
                    <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                        <h2 className="fw-bold mb-3 fs-4">تائه</h2>
                        <p
                            style={{
                                color: "#d4f0e2",
                                fontSize: "15px",
                                lineHeight: "1.6",
                                maxWidth: "320px",
                            }}
                        >
                            "تائه" هي منصة إنسانية لمساعدة الأهالي في العثور على أطفالهم
                            وكبار السن المفقودين
                        </p>
                    </div>

                    {/* روابط مهمة */}
                    <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3 footer-links">
                        <h3 className="fw-bold mb-3 fs-4">روابط مهمة</h3>
                        <ul className="list-unstyled">
                            <li className="mb-3">
                                <Link
                                    to="/"
                                    className="text-white text-decoration-none d-flex align-items-center"
                                >
                                    <i className="fas fa-home me-2"></i> الرئيسية
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link
                                    to="/about"
                                    className="text-white text-decoration-none d-flex align-items-center"
                                >
                                    <i className="fas fa-info-circle me-2"></i> من نحن
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link
                                    to="/services"
                                    className="text-white text-decoration-none d-flex align-items-center"
                                >
                                    <i className="fas fa-cogs me-2"></i> الخدمات
                                </Link>
                            </li>
                            <li className="mb-3">
                                <Link
                                    to="/contact"
                                    className="text-white text-decoration-none d-flex align-items-center"
                                >
                                    <i className="fas fa-envelope me-2"></i> اتصل بنا
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* تواصل معنا */}
                    <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3 footer-contact">
                        <h3 className="fw-bold mb-3 fs-4">تواصل معنا</h3>
                        <p>
                            <i className="fas fa-home me-1"></i> القاهرة، مصر
                        </p>
                        <p>
                            <i className="fas fa-envelope me-1"></i> info@tayeh.com
                        </p>
                        <p>
                            <i className="fas fa-phone me-1"></i> +20 123 456 7890
                        </p>
                    </div>

                    {/* تابعنا */}
                    <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mt-3">
                        <h3 className="text-uppercase mb-4 fw-bold fs-4">تابعنا</h3>
                        <p>
                            لا تفوت جديدنا! تابعنا على منصات التواصل الاجتماعي للحصول على آخر
                            الأخبار.
                        </p>
                        <div className="d-flex gap-3 mt-3">
                            <a
                                href="#"
                                className="btn btn-outline-light btn-floating"
                                aria-label="Facebook"
                            >
                                <i className="fab fa-facebook-f"></i>
                            </a>
                            <a
                                href="#"
                                className="btn btn-outline-light btn-floating"
                                aria-label="WhatsApp"
                            >
                                <i className="fab fa-whatsapp"></i>
                            </a>
                            <a
                                href="#"
                                className="btn btn-outline-light btn-floating"
                                aria-label="Instagram"
                            >
                                <i className="fab fa-instagram"></i>
                            </a>
                            <a
                                href="#"
                                className="btn btn-outline-light btn-floating"
                                 aria-label="Twitter"
                            >
                                <i className="fab fa-twitter"></i>
                            </a>
                        </div>
                    </div>

                </div>
                <div className="pt-4 border-top d-flex justify-content-center">
                    <p className="align-items-center">
                        &copy; {new Date().getFullYear()} جميع الحقوق محفوظة لموقع{" "}
                        <span className="fw-bold">تائه</span>
                    </p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;