import React from "react";
import { Link } from "react-router-dom";

export default function ParentAwareness() {
  const healthyTips = {
    basic: [
      "علم الطفل اسمه الكامل، أسماء والديه، وعنوان المنزل بالتفصيل.",
      "تدرب معه على نطق رقم هاتف ولي الأمر.",
      "اشرح له معنى 'الغريب' و'المعروف' بشكل مبسط.",
      "علمه أن يقول 'لا' بثقة إذا طلب منه غريب أي شيء.",
      "شجعه على إخبارك بأي موقف غريب حتى لو كان صغيراً.",
      "عرفه على أماكن الأمان في الحي (الشرطة، المسجد، المتجر).",
    ],
    preventive: [
      "استخدم أساور تعريف تحتوي على معلومات الاتصال.",
      "احتفظ بصورة حديثة للطفل في هاتفك مع وصف لملابسه.",
      "في الأماكن المزدحمة استخدم حزام الأمان أو العربة.",
      "حدد نقطة تجمع ثابتة إذا فقدتوه في مكان عام.",
      "لا تترك الطفل الصغير وحده في السيارة أو المنزل.",
      "شارك خطط الطوارئ مع المدرسة والنادي والأقارب.",
    ],
    technology: [
      "استخدم ساعات GPS للأطفال لتحديد الموقع.",
      "نشط خاصية 'مشاركة الموقع' على هاتف الطفل.",
      "ثبت تطبيقات المراقبة الأبوية.",
      "علم الطفل الاتصال بالطوارئ (122 در مصر).",
      "احتفظ بنسخة إلكترونية من بيانات الطفل في السحابة.",
    ],
    psychological: [
      "ابنِ ثقة الطفل بنفسه ليتخذ قرارات صائبة.",
      "لا ترهبه بقصص الضياع بل علمه الحذر بإيجابية.",
      "شجعه على التعبير عن مخاوفه بصراحة.",
      "علمه مهارات التواصل المباشر مع الكبار الموثوقين.",
      "اقرأ له قصصاً تعليمية عن الأمان بشكل ممتع.",
    ],
  };

  const specialNeedsTips = {
    communication: [
      "جهز بطاقة تعريف مفصلة بالحالة الطبية.",
      "استخدم صوراً تواصلية إذا كان الطفل غير ناطق.",
      "علم الطفل إشارات بسيطة للاستغاثة.",
      "تأكد من فهم المحيطين لطريقة تواصله.",
      "سجل مقطع فيديو قصير يوضح طريقة تواصله.",
    ],
    equipment: [
      "استخدم أساور تعريف طبية لا يمكن نزعها.",
      "ثبت أجهزة تتبع GPS متخصصة في مقعده.",
      "جهز حقيبة طوارئ صغيرة.",
      "استخدم ملابس ذات ألوان زاهية لتسهيل رؤيته.",
      "اجعل معه شيئاً مفضلاً يساعده على البقاء هادئاً.",
    ],
    environment: [
      "قم بتأمين المنزل بأقفال للأبواب لمنع الخروج.",
      "استخدم أجهزة إنذار على الأبواب والنوافذ.",
      "اجعل فناء المنزل آمناً للعب.",
      "عرف الجيران والمحال القريبة بحالة الطفل.",
      "ابتعد عن الأماكن شديدة الزحام والخطورة.",
    ],
    community: [
      "اشرح للمحيطين بالطفل حالته وكيفية مساعدته.",
      "شارك معلوماته مع مجموعة الجيران.",
      "سجل الطفل في الجهات المتخصصة.",
      "افتح قناة تواصل مع شرطة الحي وتعرف عليهم.",
      "تدرب مع مقدمي الرعاية على إجراءات الطوارئ.",
    ],
  };

  const emergencySteps = [
    {
      num: 1,
      title: "ابحث فوراً",
      desc: "ابحث في محيط 100 متر فوراً - الأطفال غالباً قريبون",
    },
    {
      num: 2,
      title: "استغيث بالآخرين",
      desc: "اطلب مساعدة المارة، الباعة، حراس الأمن فوراً",
    },
    {
      num: 3,
      title: "اتصل بالشرطة",
      desc: "اتصل برقم الطوارئ 122 أو شرطة النجدة",
    },
    {
      num: 4,
      title: "انشر الصورة",
      desc: "انشر على وسائل التواصل والجروبات المحلية",
    },
    {
      num: 5,
      title: "بلغ 'تائه'",
      desc: "قدم بلاغاً عبر منصتنا لتوسيع نطاق البحث",
    },
  ];

  const emergencyNumbers = [
    { name: "شرطة النجدة", number: "122" },
    { name: "الإسعاف", number: "123" },
    { name: "الدفاع المدني", number: "180" },
    { name: "خط مساندة المفقودين", number: "16028" },
  ];

  return (
    <section className="pt-20 bg-gray-50 min-h-screen">
      {/* Header */}
      <header className="bg-primary-darker text-white py-24 relative overflow-hidden text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-darker/90 to-primary-dark/95"></div>
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-[80px]"></div>
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-lg flex justify-center items-center gap-4">
            <i className="fas fa-hand-holding-heart text-primary-light"></i> توعية الأهالي
          </h1>
          <p className="text-xl text-primary-light/90 leading-relaxed font-light">
            دليل شامل للتعامل مع الأطفال بحرص ووعي، لحمايتهم من الضياع والمخاطر.
            نقدم إرشادات عملية لكل مرحلة عمرية ونوعية.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        
        {/* الطفل السليم */}
        <section className="mb-24">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-primary/10 text-primary rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                <i className="fas fa-heartbeat"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">الطفل السليم صحياً</h2>
            <p className="text-gray-500 text-lg">
              إرشادات لحماية الأطفال الأصحاء وتعزيز وعيهم الذاتي لتفادي الضياع
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary-dark mb-6 flex items-center gap-3 border-b border-gray-50 pb-4">
                <i className="fas fa-graduation-cap text-2xl text-primary-light"></i> التوعية الأساسية
              </h3>
              <ul className="space-y-4 text-gray-600">
                {healthyTips.basic.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3"><i className="fas fa-check-circle text-primary mt-1 shrink-0"></i>{tip}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary-dark mb-6 flex items-center gap-3 border-b border-gray-50 pb-4">
                <i className="fas fa-shield-alt text-2xl text-primary-light"></i> التدابير الوقائية
              </h3>
              <ul className="space-y-4 text-gray-600">
                {healthyTips.preventive.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3"><i className="fas fa-check-circle text-primary mt-1 shrink-0"></i>{tip}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary-dark mb-6 flex items-center gap-3 border-b border-gray-50 pb-4">
                <i className="fas fa-mobile-alt text-2xl text-primary-light"></i> التكنولوجيا المساعدة
              </h3>
              <ul className="space-y-4 text-gray-600">
                {healthyTips.technology.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3"><i className="fas fa-check-circle text-primary mt-1 shrink-0"></i>{tip}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-primary-dark mb-6 flex items-center gap-3 border-b border-gray-50 pb-4">
                <i className="fas fa-brain text-2xl text-primary-light"></i> التنشئة النفسية
              </h3>
              <ul className="space-y-4 text-gray-600">
                {healthyTips.psychological.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3"><i className="fas fa-check-circle text-primary mt-1 shrink-0"></i>{tip}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-amber-50 rounded-3xl p-8 mt-10 text-center border border-amber-100/50 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-100/50 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
            <i className="fas fa-exclamation-triangle text-4xl text-amber-500 mb-4 relative z-10"></i>
            <h4 className="text-xl font-bold text-amber-600 mb-2 relative z-10">
              تنبيه هام
            </h4>
            <p className="text-amber-800 relative z-10">
              تدريب الطفل على هذه الإجراءات يجب أن يكون مستمراً وليس مرة واحدة.
              كرر المعلومات بشكل دوري واختبر فهمه بطريقة لطيفة.
            </p>
          </div>

          <div className="text-center mt-10">
            <a
              href="./files/الطفل السليم.pdf"
              className="inline-flex items-center justify-center gap-3 bg-white text-primary-dark border-2 border-primary-dark/20 hover:border-primary px-8 py-3 rounded-full font-bold shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              download={"الدليل الكامل للطفل السليم"}
            >
              <i className="fas fa-file-pdf text-red-500 text-xl"></i> تحميل الدليل الشامل (PDF)
            </a>
          </div>
        </section>

        {/* ذوي الاحتياجات الخاصة */}
        <section className="mb-24 border-t border-gray-200 pt-20">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-blue-50 text-blue-500 rounded-full flex items-center justify-center text-3xl mx-auto mb-6">
                <i className="fas fa-wheelchair"></i>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">طفل من ذوي الاحتياجات الخاصة</h2>
            <p className="text-gray-500 text-lg">
              إجراءات مكثفة ومتخصصة لحماية الأطفال ذوي الإعاقات الجسدية أو الذهنية من الضياع
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-6 flex items-center gap-3 border-b border-gray-50 pb-4">
                <i className="fas fa-comments text-2xl text-blue-400"></i> التواصل والتفاهم
              </h3>
              <ul className="space-y-4 text-gray-600">
                {specialNeedsTips.communication.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3"><i className="fas fa-check-circle text-blue-500 mt-1 shrink-0"></i>{tip}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-6 flex items-center gap-3 border-b border-gray-50 pb-4">
                <i className="fas fa-tools text-2xl text-blue-400"></i> الأجهزة والمستلزمات
              </h3>
              <ul className="space-y-4 text-gray-600">
                {specialNeedsTips.equipment.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3"><i className="fas fa-check-circle text-blue-500 mt-1 shrink-0"></i>{tip}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-6 flex items-center gap-3 border-b border-gray-50 pb-4">
                <i className="fas fa-home text-2xl text-blue-400"></i> البيئة الآمنة
              </h3>
              <ul className="space-y-4 text-gray-600">
                {specialNeedsTips.environment.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3"><i className="fas fa-check-circle text-blue-500 mt-1 shrink-0"></i>{tip}</li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg transition-shadow">
              <h3 className="text-xl font-bold text-blue-800 mb-6 flex items-center gap-3 border-b border-gray-50 pb-4">
                <i className="fas fa-hands-helping text-2xl text-blue-400"></i> التعامل المجتمعي
              </h3>
              <ul className="space-y-4 text-gray-600">
                {specialNeedsTips.community.map((tip, index) => (
                  <li key={index} className="flex items-start gap-3"><i className="fas fa-check-circle text-blue-500 mt-1 shrink-0"></i>{tip}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-blue-50/50 rounded-3xl p-8 mt-10 text-center border border-blue-100 shadow-sm relative overflow-hidden">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-100 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2"></div>
            <i className="fas fa-user-md text-4xl text-blue-500 mb-4 relative z-10"></i>
            <h4 className="text-xl font-bold text-blue-700 mb-2 relative z-10">
              ملاحظة طبية
            </h4>
            <p className="text-blue-900 relative z-10">
              الأطفال ذوو الاحتياجات الخاصة قد لا يستجيبون للنداء أو قد يبتعدون دون وعي. المراقبة المستمرة والتخطيط المسبق هما المفتاح.
            </p>
          </div>

          <div className="text-center mt-10">
            <a
              href="./files/اطفال ذو الاحتيجات الخاصه.pdf"
              className="inline-flex items-center justify-center gap-3 bg-white text-blue-700 border-2 border-blue-200 hover:border-blue-500 px-8 py-3 rounded-full font-bold shadow-sm hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
              download={"دليل رعاية وحماية ذوي الاحتياجات الخاصة"}
            >
              <i className="fas fa-book-medical text-xl"></i> تحميل دليل ذوي الاحتياجات (PDF)
            </a>
          </div>
        </section>

        {/* الإجراءات الطارئة */}
        <section className="bg-white border-2 border-red-500/20 rounded-[2.5rem] p-8 md:p-14 text-center shadow-2xl shadow-red-500/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-full h-2 bg-gradient-to-r from-red-500 to-red-400"></div>
          
          <h2 className="text-3xl font-bold text-red-600 mb-4 flex justify-center items-center gap-3">
            <i className="fas fa-siren-on text-4xl animate-pulse"></i> خطوات فورية عند فقدان طفل
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            إذا فقدت طفلك، لا تدع الخوف يسيطر عليك. اتبع هذه الخطوات بالترتيب مباشرة:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-14 relative">
            <div className="hidden md:block absolute top-1/2 left-10 right-10 h-1 bg-red-100 -translate-y-1/2 -z-10"></div>
            {emergencySteps.map((step) => (
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-red-50 relative group hover:-translate-y-2 transition-transform duration-300" key={step.num}>
                <div className="w-14 h-14 bg-red-500 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto -mt-12 mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h5 className="font-bold text-gray-900 mb-2">{step.title}</h5>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>

          <Link to="/report" className="inline-flex items-center justify-center gap-3 bg-gradient-to-l from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-bold text-xl px-10 py-5 rounded-full shadow-lg shadow-red-500/30 hover:shadow-xl hover:shadow-red-500/40 transition-all duration-300 transform hover:-translate-y-1 mb-12">
            <i className="fas fa-bullhorn text-2xl"></i> إطلاق نداء استغاثة الآن
          </Link>

          <div className="bg-red-50 rounded-2xl p-6 border border-red-100 max-w-3xl mx-auto">
            <h5 className="font-bold text-red-800 mb-4 text-lg">ارقام الطوارئ المهمة في مصر:</h5>
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 gap-y-3">
              {emergencyNumbers.map((item, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="text-gray-600 font-medium">{item.name}:</span>
                  <span className="bg-white text-red-600 font-bold px-3 py-1 rounded-lg border border-red-200 dir-ltr">{item.number}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};