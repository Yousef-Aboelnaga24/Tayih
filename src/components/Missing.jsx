import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Card from "./Card";

function Missing() {
  const [latestReports, setLatestReports] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("missingPeople")) || [];
    const lastThree = [...saved].reverse().slice(0, 3); // آخر 3 بلاغات
    setLatestReports(lastThree);
  }, []);

  return (
    <section className="py-24 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark flex items-center justify-center gap-3">
            <i className="fas fa-users text-primary"></i> أحدث البلاغات
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-light to-primary-dark rounded mx-auto mt-4"></div>
          <p className="mt-4 text-gray-500 text-lg">أحدث الحالات التي تم الإبلاغ عنها مؤخراً عبر المنصة</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {latestReports.length === 0 ? (
            <div className="col-span-full py-16 text-center bg-white rounded-3xl border border-gray-100 shadow-sm">
                <i className="fas fa-folder-open text-6xl text-gray-200 mb-4 inline-block"></i>
                <p className="text-gray-500 text-xl font-medium">لا توجد بلاغات حتى الآن</p>
            </div>
          ) : (
            latestReports.map((person) => <Card key={person.id} person={person} />)
          )}
        </div>

        {/* زر الذهاب لقائمة المفقودين */}
        <div className="text-center mt-14">
          <Link to="/missing" className="inline-flex items-center gap-3 bg-white text-primary-dark border-2 border-primary-dark/20 hover:border-primary-dark hover:bg-primary-dark hover:text-white px-8 py-3.5 rounded-full font-bold text-lg transition-all duration-300 shadow-sm hover:shadow-xl transform hover:-translate-y-1 group">
            <i className="fas fa-arrow-left group-hover:-translate-x-1 transition-transform"></i>
            عرض كل المفقودين
          </Link>
        </div>

      </div>
    </section>
  );
}

export default Missing;
