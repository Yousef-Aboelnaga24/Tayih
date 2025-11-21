import React, { useEffect, useState } from "react";

function Missing() {
    const [latestReports, setLatestReports] = useState([]);

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem("missingPeople")) || [];
        const lastThree = [...saved].reverse().slice(0, 3); // آخر 3 بلاغات
        setLatestReports(lastThree);
    }, []);

    return (
        <section className="missing-section py-5 bg-white" style={{ marginTop: "90px" }}>
            <div className="container">
                <h2 className="mb-5 text-center text-success fw-bold">
                    <i className="fas fa-users me-2"></i> أحدث البلاغات
                </h2>

                <div className="row g-4">

                    {latestReports.length === 0 && (
                        <p className="text-center text-muted fs-5">لا توجد بلاغات حتى الآن</p>
                    )}

                    {latestReports.map((person) => (
                        <div className="col-lg-4 col-md-6" key={person.id}>
                            <div className="card h-100 shadow border-0 rounded-3">

                                {/* صورة الشخص */}
                                <img
                                    src={person.personImage}
                                    className="card-img-top rounded-top"
                                    alt={person.personName}
                                    loading="lazy"
                                />

                                <div className="card-body text-center">

                                    {/* الاسم */}
                                    <h5 className="card-title fw-bold fs-4 mb-2">
                                        <i className="fa-solid fa-user me-1 text-success"></i>
                                        {person.personName}
                                    </h5>

                                    {/* العمر */}
                                    <p className="card-text text-muted mb-1">
                                        <i className="fa-solid fa-cake-candles text-warning me-1"></i>
                                        العمر: {person.age} سنة
                                    </p>

                                    {/* المحافظة */}
                                    <p className="card-text text-muted mb-1">
                                        <i className="fa-solid fa-location-dot text-danger me-1"></i>
                                        {person.governorate}
                                    </p>

                                    {/* تاريخ البلاغ */}
                                    <p className="card-text text-secondary small">
                                        <i className="fa fa-clock me-1"></i>
                                        {new Date(person.reportDate || Date.now()).toLocaleDateString("ar-EG")}
                                    </p>

                                    <button className="btn btn-outline-success rounded-pill mt-2 px-4">
                                        <i className="fa-solid fa-circle-info me-1"></i> تفاصيل أكثر
                                    </button>
                                </div>

                            </div>
                        </div>
                    ))}

                </div>

                {/* زر الذهاب لقائمة المفقودين */}
                <div className="text-center mt-5">
                    <a href="/missing" className="btn btn-success btn-lg px-5 rounded-pill">
                        <i className="fas fa-list-ul me-1"></i> عرض كل المفقودين
                    </a>
                </div>

            </div>
        </section>
    );
}

export default Missing;
