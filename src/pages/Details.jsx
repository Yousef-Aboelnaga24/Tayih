import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "../assets/css/Details.css";

function PersonDetails() {
    const navigate = useNavigate();
    const { id } = useParams(); // id من الرابط
    const [person, setPerson] = useState(null);

    useEffect(() => {
        const storedPeople = JSON.parse(localStorage.getItem("missingPeople")) || [];
        const foundPerson = storedPeople.find(p => p.id === Number(id));
        if (foundPerson) setPerson(foundPerson);
    }, [id]);

    if (!person) {
        return (
            <div className="container mt-5 text-center">
                <h3 className="text-danger">لا توجد بيانات لعرضها</h3>
            </div>
        );
    }

    const formattedDate = person.reportDate
        ? new Date(person.reportDate).toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" })
        : "";
    return (
        <section style={{ marginTop: "150px" }}>
            <div className="container mt-5">
                <div className="card border-0 mt-5 p-4 shadow-lg rounded-4">

                    <div className="row g-4 align-items-center">

                        {/* الصورة */}
                        <div className="col-md-4 text-center">
                            <div className="p-3 bg-success-subtle rounded-4 shadow-sm">
                                <img
                                    src={person.personImage}
                                    alt="صورة المفقود"
                                    className="img-fluid rounded-4"
                                    style={{ maxHeight: "330px", objectFit: "cover" }}
                                />
                            </div>
                        </div>

                        {/* البيانات */}
                        <div className="col-md-8">
                            <div className="p-3">
                                <div className="d-flex justify-content-between align-items-center ">
                                    <h3 className="fw-bold text-success mb-3">
                                        <i className="fa-solid fa-circle-info me-2"></i>
                                        بيانات المفقود
                                    </h3>
                                    <button
                                        onClick={() => navigate(-1)}
                                        className="btn btn-outline-success rounded-pill px-4"
                                    >
                                        <i className="fa-solid fa-arrow-right-long ms-2"></i>
                                        الرجوع
                                    </button>
                                </div>
                                <div className="info-item mb-2">
                                    <strong className="text-dark">الاسم:</strong> {person.personName}
                                </div>

                                <div className="info-item mb-2">
                                    <strong className="text-dark">العمر:</strong> {person.age} سنة
                                </div>

                                <div className="info-item mb-2">
                                    <strong className="text-dark">النوع:</strong> {person.gender}
                                </div>

                                <div className="info-item mb-2">
                                    <strong className="text-dark">آخر مكان شوهد فيه:</strong> {person.lastSeen}
                                </div>

                                <div className="info-item mb-2">
                                    <strong className="text-dark">تفاصيل إضافية:</strong> {person.details}
                                </div>

                                <div className="info-item mb-2">
                                    <strong className="text-dark">رقم التواصل:</strong> {person.phoneNumber}
                                </div>

                                <div className="info-item mb-2">
                                    <strong className="text-dark">تاريخ الإبلاغ:</strong> {formattedDate}
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>

    );
}

export default PersonDetails;
