import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import Card from "../components/Card";

export default function Missing() {
  const [people, setPeople] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedPeople = JSON.parse(localStorage.getItem("missingPeople")) || [];
    setPeople(storedPeople);
  }, []);

  return (
    <section className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-dark inline-block relative pb-3 border-b-4 border-primary rounded">
            قائمة المفقودين
          </h2>
          <p className="mt-4 text-gray-500 text-lg">نأمل في تعاونكم وتقديم أي مساعدة للوصول إليهم.</p>
        </div>

        {people.length === 0 ? (
          <div className="py-24 text-center bg-white rounded-3xl border border-gray-100 shadow-sm max-w-2xl mx-auto flex flex-col items-center">
              <div className="w-24 h-24 bg-gray-50 rounded-full flex items-center justify-center mb-6">
                <Search size={"50px"} className="text-gray-300"/>
              </div>
              <h3 className="text-2xl font-bold text-gray-700 mb-2">لا يوجد بلاغات بعد</h3>
              <p className="text-gray-500 mb-6">لم يتم تسجيل أي بلاغ عن أشخاص مفقودين حتى الآن.</p>
              <button onClick={() => navigate('/report')} className="bg-primary hover:bg-primary-dark text-white px-8 py-3 rounded-full font-medium transition-colors shadow-sm">
                تقديم أول بلاغ
              </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {people.map((person) => (
              <Card key={person.id} person={person} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}