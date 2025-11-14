function Missing() {
    return (<section className="missing-section py-5 bg-white">
        <div className="container">
            <h2 className="mb-5 text-center text-success fw-bold">
                <i className="fas fa-users me-2"></i> المفقودين
            </h2>
            <div id="lastMissing" className="row g-4"></div>
            <div className="text-center mt-5">
                <a href="./HTML/missing.html" className="btn btn-success btn-lg px-5 rounded-pill">
                    <i className="fas fa-list-ul me-1"></i> الذهاب إلى قائمة المفقودين
                </a>
            </div>
        </div>
    </section>)
}

export default Missing