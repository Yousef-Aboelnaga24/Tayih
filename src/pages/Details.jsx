import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import "../assets/css/Details.css";

function PersonDetails() {
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
        <div className="container mt-5">
            <div className="card p-4 shadow">
                <div className="row">
                    <div className="col-md-4 info-box bg-success-subtle text-center">
                        <img src={person.personImage} alt="صورة المفقود" className="img-fluid rounded" />
                    </div>
                    <div className="col-md-8">
                        <p><strong>الاسم:</strong> {person.personName}</p>
                        <p><strong>العمر:</strong> {person.age} سنة</p>
                        <p><strong>النوع:</strong> {person.gender}</p>
                        <p><strong>آخر مكان شوهد فيه:</strong> {person.lastSeen}</p>
                        <p><strong>تفاصيل إضافية:</strong> {person.details}</p>
                        <p><strong>رقم التواصل:</strong> {person.phoneNumber}</p>
                        <p><strong>تاريخ الإبلاغ:</strong> {formattedDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PersonDetails;
