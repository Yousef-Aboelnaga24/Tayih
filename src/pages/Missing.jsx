import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Missing() {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedPeople = JSON.parse(localStorage.getItem("missingPeople")) || [];
    setPeople(storedPeople);
  }, []);

  const goToDetails = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <section style={{ marginTop: "110px" }}>
      <div className="container text-center my-4">
        <h2 className="section-title fs-2 text-success fw-bold border-3 w-25 d-inline border-success border-bottom pb-2">
          قائمة المفقودين
        </h2>

        <div className="row g-4 mt-4">
          {people.length === 0 ? (
            <p className="text-muted fw-bold">لا يوجد بلاغات بعد.</p>
          ) : (
            people.map((person) => (
              <div key={person.id} className="col-sm-6 col-md-4 col-lg-3">
                <div className="card missing-card h-100 shadow border-0 rounded-3">

                  {/* صورة الشخص */}
                  <img
                    src={person.personImage}
                    loading="lazy"
                    className="card-img-top preview rounded-top"
                    alt={`صورة ${person.personName}`}
                  />

                  {/* بيانات */}
                  <div className="card-body text-center">

                    {/* الاسم */}
                    <h5 className="card-title fw-bold fs-4 mb-2">
                      <i className="fa-solid fa-user me-1 text-success"></i> {person.personName}
                    </h5>

                    {/* العمر */}
                    <p className="card-text text-muted mb-1">
                      <i className="fa-solid fa-cake-candles text-warning me-1"></i> العمر: {person.age} سنة
                    </p>

                    {/* المحافظة */}
                    <p className="card-text text-muted mb-1">
                      <i className="fa-solid fa-location-dot text-danger me-1"></i> {person.governorate}
                    </p>

                    {/* تاريخ البلاغ */}
                    <p className="card-text text-secondary small">
                      <i className="fa fa-clock me-1"></i>
                      {new Date(person.reportDate || Date.now()).toLocaleDateString("ar-EG")}
                    </p>

                    {/* زر التفاصيل */}
                    <button
                      onClick={() => goToDetails(person.id)}
                      className="btn-detail btn btn-outline-success rounded-pill mt-2 px-4"
                    >
                      <i className="fa-solid fa-circle-info me-1"></i> تفاصيل أكثر
                    </button>

                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

export default Missing;