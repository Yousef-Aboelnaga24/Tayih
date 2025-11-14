function Contact() {
    // ✅ دالة تأكيد إرسال الرسالة
    const showConfirmation = (e) => {
        e.preventDefault();
        const confirmation = document.getElementById("confirmation");
        confirmation.classList.remove("d-none");
        setTimeout(() => confirmation.classList.add("d-none"), 3000);
    };

    return (
        <section id="contact" className="py-5 d-flex vh-100 bg-light">
            <div className="container align-content-center justify-content-center">
                <div className="row g-5">
                    {/* 📨 معلومات التواصل */}
                    <div className="col-md-5">
                        <h2 className="mb-4 fw-bold text-success">
                            <i className="fas fa-comment-dots me-2"></i> تواصل معنا
                        </h2>
                        <p className="text-muted mb-4">
                            نحن هنا للإجابة على استفساراتك وتقديم الدعم بأسرع وقت ممكن.
                        </p>

                        <ul className="list-unstyled text-muted fs-6">
                            <li className="mb-3">
                                <i className="fas fa-map-marker-alt text-success me-2"></i> القاهرة، مصر
                            </li>
                            <li className="mb-3">
                                <i className="fa fa-envelope text-success me-2"></i> support@taeh.com
                            </li>
                            <li className="mb-3">
                                <i className="fa fa-phone text-success me-2"></i> 0123 456 7890
                            </li>
                            <li className="mb-3">
                                <i className="fab fa-whatsapp text-success me-2"></i> 0123 456 7890
                            </li>
                        </ul>
                    </div>

                    {/* 📝 نموذج التواصل */}
                    <div className="col-md-7" data-aos="fade-up">
                        <div className="card border-0 shadow-sm p-4">
                            <h5 className="mb-4 fw-bold text-center">أرسل لنا رسالة</h5>
                            <form onSubmit={showConfirmation} method="post">
                                <div className="form-floating mb-3">
                                    <input type="text" className="form-control" id="name" placeholder="الاسم" required />
                                    <label htmlFor="name">الاسم</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="email"
                                        placeholder="البريد الإلكتروني"
                                        required
                                    />
                                    <label htmlFor="email">البريد الإلكتروني</label>
                                </div>
                                <div className="form-floating mb-3">
                                    <textarea
                                        className="form-control"
                                        id="message"
                                        placeholder="رسالتك"
                                        style={{ height: "120px" }}
                                        required
                                    ></textarea>
                                    <label htmlFor="message">رسالتك</label>
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-success px-4 rounded-pill">
                                        إرسال <i className="fas fa-paper-plane ms-2"></i>
                                    </button>
                                </div>
                            </form>

                            {/* ✅ رسالة تأكيد */}
                            <div id="confirmation" className="alert alert-success mt-4 d-none" role="alert">
                                تم إرسال رسالتك بنجاح! شكرًا لتواصلك معنا ❤️
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
