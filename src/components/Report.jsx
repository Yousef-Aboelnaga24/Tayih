import { Link } from "react-router-dom";

function Report() {
    return (
        <section id="report-section" className="py-5 bg-white">
            <div className="container">
                <div className="row align-items-center g-5">
                    <div className="col-md-6 text-center">
                        <div>
                            <img
                                src="./image/cute-bunny.webp"
                                loading="lazy"
                                alt="تبليغ عن مفقود"
                                className="img-fluid rounded-4 shadow-lg"
                                style={{ maxHeight: "380px", objectFit: "cover" }}
                            />
                        </div>
                    </div>
                    <div className="col-md-6 text-center text-md-start">
                        <h2 className="fw-bold mb-3 text-success display-6">
                            هل رأيت شخصاً تائهاً؟
                        </h2>
                        <p className="my-4 fs-5 text-muted lh-lg">
                            ساهم في إعادة المفقودين إلى أسرهم.
                            <span className="fw-semibold text-dark"> كل معلومة قد تصنع الفارق. </span>
                            شارك ببلاغك الآن وساعد في إنقاذ حياة.
                        </p>

                        {/* الزر المعدل */}
                        <Link
                            to="/report"
                            className="btn btn-success btn-lg px-4 py-2 rounded-pill shadow-sm d-inline-flex align-items-center gap-2"
                        >
                            <i className="fas fa-bullhorn"></i>
                            قدّم بلاغ الآن
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Report;
