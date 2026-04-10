import { useNavigate } from "react-router-dom";
import { Clock, User, Cake, MapPin, Info } from "lucide-react";

export default function Card({ person }) {
    const navigate = useNavigate();

    return (
        <div className="flex flex-col bg-white rounded-3xl shadow-sm hover:shadow-xl border border-gray-100 overflow-hidden transition-all duration-300 transform hover:-translate-y-1 group">
            <div className="relative overflow-hidden aspect-4/3">
                <img
                    src={person.personImage}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    alt={person.personName}
                    loading="lazy"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur text-primary-dark text-xs font-bold px-3 py-1.5 rounded-full shadow-sm flex items-center gap-1.5">
                    <Clock />
                    {new Date(person.reportDate || Date.now()).toLocaleDateString("ar-EG")}
                </div>
            </div>

            <div className="p-6 flex flex-col grow justify-between">
                <div>
                    {/* الاسم */}
                    <h5 className="font-bold text-xl mb-3 text-gray-900 border-b border-gray-50 pb-3 flex items-center">
                        <User className="ml-2 text-primary"/>
                        {person.personName}
                    </h5>

                    <div className="space-y-2.5 mb-5 mt-4">
                        {/* العمر */}
                        <p className="text-gray-600 flex items-center text-sm">
                            <span className="w-8 flex justify-center"><Cake className="text-amber-500 text-lg"/></span>
                            العمر: <strong className="mx-1 text-gray-800">{person.age}</strong> سنة
                        </p>

                        {/* المحافظة */}
                        <p className="text-gray-600 flex items-center text-sm">
                            <span className="w-8 flex justify-center"><MapPin className="text-red-500 text-lg"/></span>
                            الموقع: <strong className="mx-1 text-gray-800">{person.governorate}</strong>
                        </p>
                    </div>
                </div>

                {/* الزر */}
                <button
                    onClick={() => navigate(`/details/${person.id}`)}
                    className="w-full cursor-pointer bg-primary/10 hover:bg-primary text-primary-dark hover:text-white border border-primary/20 hover:border-transparent rounded-xl mt-2 px-4 py-3 transition-colors duration-300 flex items-center justify-center gap-2 font-medium"
                >
                    <Info/> عرض التفاصيل
                </button>
            </div>
        </div>
    )
}
