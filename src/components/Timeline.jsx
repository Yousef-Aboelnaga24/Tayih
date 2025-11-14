function Timeline() {
    return (
        <section className="timeline-section py-5 bg-light me-auto">
            <div className="container">
                <h2 className="text-center fw-bold mb-5 text-success">
                    كيف تعمل منصة <span className="brand">تائه</span>؟
                </h2>

                <div className="row justify-content-center">
                    {/* <!-- Step 1 --> */}
                    <div className="col-md-3 text-center mb-4">
                        <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                            <div className="fs-1 text-success mb-3">
                                <i className="fas fa-edit"></i>
                            </div>
                            <h3 className="fw-bold">قدّم بلاغ</h3>
                            <p className="text-muted">أدخل بيانات الشخص المفقود عبر المنصة.</p>
                        </div>
                    </div>

                    {/* <!-- Step 2 --> */}
                    <div className="col-md-3 text-center mb-4">
                        <div className="p-4 bg-success text-light rounded-4 shadow-lg h-100">
                            <div className="fs-1 text-white mb-3">
                                <i className="fas fa-search"></i>
                            </div>
                            <h3 className="fw-bold">المراجعة</h3>
                            <p className="text-uted">يتم التحقق من صحة البلاغ ومراجعته.</p>
                        </div>
                    </div>

                    {/* <!-- Step 3 --> */}
                    <div className="col-md-3 text-center mb-4">
                        <div className="p-4 bg-white rounded-4 shadow-sm h-100">
                            <div className="fs-1 text-success mb-3">
                                <i className="fas fa-bullhorn"></i>
                            </div>
                            <h3 className="fw-bold">النشر</h3>
                            <p className="text-muted">يُعرض البلاغ على صفحة المفقودين.</p>
                        </div>
                    </div>

                    {/* <!-- Step 4 --> */}
                    <div className="col-md-3 text-center mb-4">
                        <div className="p-4 bg-success text-light rounded-4 shadow-lg h-100">
                            <div className="fs-1 text-white mb-3">
                                <i className="fas fa-handshake"></i>
                            </div>
                            <h3 className="fw-bold">التواصل</h3>
                            <p className="text-uted">يمكن التواصل مع ذوي المفقود عند إيجاد أي معلومات.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Timeline