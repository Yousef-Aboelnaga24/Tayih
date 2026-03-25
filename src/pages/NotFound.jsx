import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="min-h-screen bg-gray-50 flex flex-col justify-center items-center text-center px-4 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="relative z-10 flex flex-col items-center">
        <img
          src="/image/404 error with person looking for-bro.svg"
          alt="404 Illustration"
          className="w-full max-w-[250px] md:max-w-xs mb-8 drop-shadow-xl"
        />
        <h1 className="text-7xl md:text-9xl font-black text-primary-dark mb-2 drop-shadow-md">
          404
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">الصفحة غير موجودة 😕</h2>
        <p className="text-gray-500 mb-8 max-w-md text-lg leading-relaxed">
          يبدو أنك وصلت إلى رابط غير صحيح أو تم حذف هذه الصفحة. لا تقلق، يمكنك العودة لمواصلة رحلتك في المنصة.
        </p>
        <Link
          to="/"
          className="bg-gradient-to-l from-primary-dark to-primary hover:from-primary-darker hover:to-primary-dark text-white font-bold py-3.5 px-8 rounded-full shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all duration-300 transform hover:-translate-y-1 inline-flex items-center gap-3 text-lg"
        >
          العودة إلى الرئيسية <i className="fas fa-home"></i>
        </Link>
      </div>
    </section>
  );
}

export default NotFound;