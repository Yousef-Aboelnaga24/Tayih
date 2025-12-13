import { Link } from "react-router-dom";

function Hero() {
    const saved = JSON.parse(localStorage.getItem("missingPeople")) || [];
    return (
        <main>
            <section className="hero-section">
                <div className="container hero-content text-white">
                    <h1 data-aos="zoom-in" data-aos-duration="1000" className="hero-title text-white fw-bold mb-3">
                        مرحباً بك في منصة <span className="brand">"تائه"</span>
                    </h1>

                    <div data-aos="fade-up" data-aos-duration="700">
                        <p className="">
                            منصة إنسانية تساعدك في الإبلاغ والبحث عن الأطفال المفقودين وكبار
                            السن التائهين بكل سهولة وسرعة.
                        </p>
                        <p className="mt-3">
                            <i
                                className="fa fa-triangle-exclamation text-danger"
                            // style={{ color: "#ff3d3d" }}
                            ></i>{" "}
                            عدد البلاغات{" "}
                            <span className="fw-bold">
                            </span>{saved.length} بلاغ حتى الآن عبر المنصة.
                        </p>
                    </div>

                    <div className="d-flex justify-content-center gap-3 mt-3">
                        <Link
                            to="/report"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                            data-aos-delay="900"
                            className="btn btn-outline-light px-4 rounded-pill"
                        >
                            أبلغ عن مفقود
                        </Link>
                        <Link
                            to="/missing"
                            data-aos="fade-right"
                            data-aos-duration="1000"
                            data-aos-delay="900"
                            className="btn btn-outline-light px-4 rounded-pill"
                        >
                            ابحث عن شخص
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}

export default Hero;
