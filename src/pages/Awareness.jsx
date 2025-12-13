import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/Awareness.css";

export default function ParentAwareness() {
  const healthyTips = {
    basic: [
      "علم الطفل اسمه الكامل بالكامل، أسماء والديه، وعنوان المنزل بالتفصيل.",
      "تدرب معه على نطق رقم هاتف ولي الأمر (أكثر من رقم إن أمكن).",
      "اشرح له معنى 'الغريب' و'المعروف' بشكل بسيط يتناسب مع عمره.",
      "علمه أن يقول 'لا' بثقة إذا طلب منه غريب أي شيء أو محاولة لمسه.",
      "شجعه على إخبارك بأي موقف غريب حتى لو كان صغيراً أو طُلب منه كتمان السر.",
      "عرفه على أماكن الأمان في الحي: (الشرطة، المسجد، المتجر المعروف، الجيران).",
    ],
    preventive: [
      "استخدم أساور أو ملصقات تعريف تحتوي على معلومات الاتصال (تكون مقاومة للماء).",
      "احتفظ بصورة حديثة للطفل في هاتفك مع وصف لملابسه اليومية.",
      "في الأماكن المزدحمة (المولات، المهرجانات) استخدم حزام الأمان أو العربة.",
      "حدد نقطة تجمع ثابتة إذا فقدتوه في مكان عام (مثل مدخل رئيسي أو تميمة معروفة).",
      "لا تترك الطفل الصغير وحده في السيارة أو المنزل حتى لو لفترة قصيرة.",
      "شارك خطط الطوارئ مع المدرسة والنادي والأقارب.",
    ],
    technology: [
      "استخدم ساعات GPS للأطفال الصغار تتيح تحديد الموقع والمكالمات.",
      "نشط خاصية 'مشاركة الموقع' على هاتف الطفل إذا كان يحمل هاتفاً.",
      "ثبت تطبيقات المراقبة الأبوية التي تتيح معرفة المواقع والاتصالات.",
      "علم الطفل كيفية استخدام الهاتف للاتصال بالطوارئ (112 في مصر).",
      "احتفظ بنسخة إلكترونية من كافة بيانات الطفل وصورته في السحابة.",
    ],
    psychological: [
      "ابنِ ثقة الطفل بنفسه ليتخذ قرارات صائبة في المواقف الحرجة.",
      "لا ترهبه بقصص الضياع بل علمه الحذر بطريقة إيجابية.",
      "شجعه على التعبير عن مخاوفه وأسئلته بصراحة دون توبيخ.",
      "علمه مهارات التواصل الواضح مع الكبار في حالة الاحتياج للمساعدة.",
      "اقرأ له قصصاً تعليمية عن الأمان والحذر بشكل ممتع.",
    ],
  };

  const specialNeedsTips = {
    communication: [
      "جهز بطاقة تعريف مفصلة بالحالة الطبية، الأدوية، الاحتياجات الخاصة.",
      "استخدم صوراً أو رموزاً تواصلية إذا كان الطفل غير ناطق أو محدود الكلام.",
      "علم الطفل إشارات بسيطة للاستغاثة أو التعبير عن الحاجة للمساعدة.",
      "تأكد من فهم المحيطين للطفل (الجيران، المعلمين) لطريقة تواصله.",
      "سجل مقطع فيديو قصير للطفل وهو يتواصل بطريقته المعتادة.",
    ],
    equipment: [
      "استخدم أساور تعريف طبية لا يمكن نزعها (مقاومة للماء والتلف).",
      "ثبت أجهزة تتبع GPS متخصصة في الكراسي المتحركة أو الحقائب.",
      "جهز حقيبة طوارئ صغيرة تحوي الأدوية والبطاقة الطبية والوجبة الخفيفة.",
      "استخدم ملابس ذات ألوان زاهية لتسهيل رؤية الطفل من بعيد.",
      "اجعل مع الطفل لعبة أو شيئاً مفضلاً يساعده على البقاء هادئاً إذا ضاع.",
    ],
    environment: [
      "قم بتأمين المنزل: أقفال للأبواب، شبابيك، بوابات لمنع الخروج غير المراقب.",
      "استخدم أجهزة إنذار على الأبواب والنوافذ إذا كان الطفل يميل للهروب.",
      "اجعل فناء المنزل مسوراً وآمناً للعب دون خوف من الخروج.",
      "عرف الجيران والمحال القريبة بحالة الطفل وصورته ليكونوا عيوناً إضافية.",
      "ابتعد عن الأماكن الخطرة (الشوارع المزدحمة، الأنهار، الأماكن المعزولة).",
    ],
    community: [
      "اشرح لحارس العمارة والسائق والبقال حالة الطفل وكيفية مساعدته.",
      "شارك معلومات الاتصال وصورة الطفل مع مجموعة الجيران عبر الواتساب.",
      "سجل الطفل في قاعدة بيانات الجمعيات المتخصصة في بحث المفقودين.",
      "افتح قناة تواصل مع شرطة الحي وعرفهم بالطفل واحتياجاته.",
      "تدرب مع مقدمي الرعاية (المربية، المعلم) على إجراءات الطوارئ.",
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
    <section className="parent-awareness-page">
      {/* Header */}
      <header className="section-header text-white text-center">
        <div className="container">
          <h1>
            <i className="fas fa-hand-holding-heart me-3"></i> توعية الأهالي للطفل
          </h1>
          <p>
            دليل شامل للتعامل مع الأطفال بحرص ووعي، لحمايتهم من الضياع والمخاطر.
            نقدم إرشادات عملية لكل مرحلة عمرية ونوعية.
          </p>
        </div>
      </header>

      {/* Main Content */}
      <div className="container mb-5">
        {/* الطفل السليم */}
        <section className="category-section" aria-labelledby="healthy-child-title">
          <div className="category-header">
            <i className="fas fa-heartbeat category-icon"></i>
            <h2 id="healthy-child-title" className="category-title">الطفل السليم صحياً</h2>
            <p className="category-subtitle">
              إرشادات لحماية الأطفال الأصحاء وتعزيز وعيهم الذاتي لتفادي الضياع
            </p>
          </div>

          <div className="row g-4">
            {/* التوعية الأساسية */}
            <div className="col-md-6">
              <div className="sub-card h-100 rounded-4" role="region" aria-labelledby="basic-awareness-title">
                <h3 id="basic-awareness-title" className="sub-card-title">
                  <i className="fas fa-graduation-cap"></i> التوعية الأساسية
                </h3>
                <ul className="guidance-list">
                  {healthyTips.basic.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* التدابير الوقائية */}
            <div className="col-md-6">
              <div className="sub-card h-100 rounded-4" role="region" aria-labelledby="preventive-measures-title">
                <h3 id="preventive-measures-title" className="sub-card-title">
                  <i className="fas fa-shield-alt"></i> التدابير الوقائية
                </h3>
                <ul className="guidance-list">
                  {healthyTips.preventive.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* التكنولوجيا المساعدة */}
            <div className="col-md-6">
              <div className="sub-card h-100 rounded-4" role="region" aria-labelledby="tech-assistance-title">
                <h3 id="tech-assistance-title" className="sub-card-title">
                  <i className="fas fa-mobile-alt"></i> التكنولوجيا المساعدة
                </h3>
                <ul className="guidance-list">
                  {healthyTips.technology.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* التنشئة النفسية */}
            <div className="col-md-6">
              <div className="sub-card h-100 rounded-4" role="region" aria-labelledby="psychological-title">
                <h3 id="psychological-title" className="sub-card-title">
                  <i className="fas fa-brain"></i> التنشئة النفسية
                </h3>
                <ul className="guidance-list">
                  {healthyTips.psychological.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="warning-note rounded-4 p-4 my-4 text-center">
            <i className="fas fa-exclamation-triangle"></i>
            <h4 className="fw-bold" style={{ color: "#cc6600" }}>
              تنبيه هام
            </h4>
            <p className="fs-5 mb-0">
              تدريب الطفل على هذه الإجراءات يجب أن يكون مستمراً وليس مرة واحدة.
              كرر المعلومات بشكل دوري واختبر فهمه بطريقة لطيفة.
            </p>
          </div>

          <div className="text-center">
            <a
              href=""
              className="btn rounded-3 fw-bold text-white d-inline-flex align-items-center justify-content-center gap-2 mt-4 btn-download"
              aria-label="تحميل الدليل الكامل للطفل السليم بصيغة PDF"
            >
              <i className="fas fa-file-pdf"></i> تحميل الدليل الكامل للطفل السليم (PDF)
            </a>
          </div>
        </section>

        {/* ذوي الاحتياجات الخاصة */}
        <section className="category-section" aria-labelledby="special-needs-title">
          <div className="category-header">
            <i className="fas fa-wheelchair category-icon"></i>
            <h2 id="special-needs-title" className="category-title">طفل من ذوي الاحتياجات الخاصة</h2>
            <p className="category-subtitle">
              إجراءات مكثفة ومتخصصة لحماية الأطفال ذوي الإعاقات الجسدية أو الذهنية من الضياع
            </p>
          </div>

          <div className="row g-4">
            {/* التواصل والتفاهم */}
            <div className="col-md-6">
              <div className="sub-card h-100 rounded-4" role="region" aria-labelledby="communication-title">
                <h3 id="communication-title" className="sub-card-title">
                  <i className="fas fa-comments"></i> التواصل والتفاهم
                </h3>
                <ul className="guidance-list">
                  {specialNeedsTips.communication.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* الأجهزة والمستلزمات */}
            <div className="col-md-6">
              <div className="sub-card h-100 rounded-4" role="region" aria-labelledby="equipment-title">
                <h3 id="equipment-title" className="sub-card-title">
                  <i className="fas fa-tools"></i> الأجهزة والمستلزمات
                </h3>
                <ul className="guidance-list">
                  {specialNeedsTips.equipment.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* البيئة الآمنة */}
            <div className="col-md-6">
              <div className="sub-card h-100 rounded-4" role="region" aria-labelledby="environment-title">
                <h3 id="environment-title" className="sub-card-title">
                  <i className="fas fa-home"></i> البيئة الآمنة
                </h3>
                <ul className="guidance-list">
                  {specialNeedsTips.environment.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* التعامل المجتمعي */}
            <div className="col-md-6">
              <div className="sub-card h-100 rounded-4" role="region" aria-labelledby="community-title">
                <h3 id="community-title" className="sub-card-title">
                  <i className="fas fa-hands-helping"></i> التعامل المجتمعي
                </h3>
                <ul className="guidance-list">
                  {specialNeedsTips.community.map((tip, index) => (
                    <li key={index}>{tip}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="warning-note rounded-4 p-4 my-4 text-center">
            <i className="fas fa-user-md"></i>
            <h4 className="fw-bold" style={{ color: "#cc6600" }}>
              ملاحظة طبية
            </h4>
            <p className="fs-5 mb-0">
              الأطفال ذوو الاحتياجات الخاصة قد لا يستجيبون للنداء أو قد يبتعدون دون وعي. المراقبة المستمرة والتخطيط المسبق هما المفتاح.
            </p>
          </div>

          <div className="text-center">
            <a
              href=""
              className="btn rounded-3 fw-bold text-white d-inline-flex align-items-center justify-content-center gap-2 mt-4 btn-download"
              aria-label="تحميل دليل رعاية وحماية ذوي الاحتياجات الخاصة"
            >
              <i className="fas fa-book-medical"></i> تحميل دليل رعاية وحماية ذوي الاحتياجات
            </a>
          </div>
        </section>

        {/* الإجراءات الطارئة */}
        <section className="emergency-section border border-3 border-danger rounded-5 text-center" aria-labelledby="emergency-title">
          <h2 id="emergency-title" className="emergency-title text-danger">
            <i className="fas fa-siren-on me-2"></i>خطوات فورية عند فقدان الطفل
          </h2>
          <p className="fs-5">
            إذا فقدت طفلك، لا تدع الخوف يسيطر عليك. اتبع هذه الخطوات بالترتيب:
          </p>

          <div className="emergency-steps d-flex flex-wrap justify-content-center flex-row-reverse">
            {emergencySteps.map((step) => (
              <div className="emergency-step bg-white rounded-4 border-top border-4 border-danger shadow" key={step.num} role="group" aria-labelledby={`step-${step.num}`}>
                <div className="step-number bg-danger rounded-circle d-flex align-items-center justify-content-center fw-bold" id={`step-${step.num}`}>{step.num}</div>
                <h5>{step.title}</h5>
                <p>{step.desc}</p>
              </div>
            ))}
          </div>

          <Link to="/report" className="btn btn-danger btn-lg px-5 py-3" aria-label="تقديم بلاغ فوري عن طفل مفقود">
            <i className="fas fa-exclamation-circle me-2"></i> تقديم بلاغ فوري عن طفل مفقود
          </Link>

          <div className="mt-4">
            <h5 className="fw-bold">أرقام الطوارئ المصرية:</h5>
            <p className="fs-5">
              {emergencyNumbers.map((item, index) => (
                <React.Fragment key={index}>
                  <strong>{item.name}:</strong> {item.number}
                  {index < emergencyNumbers.length - 1 ? " | " : ""}
                </React.Fragment>
              ))}
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="text-center py-5 bg-light mt-5">
        <div className="container">
          <h4 className="text-success fw-bold mb-3">معاً لحماية أطفالنا</h4>
          <p className="text-muted">
            التوعية والحرص هما أول خطوات الوقاية. شارك هذه المعلومات مع أسرتك وأصدقائك.
          </p>
          <div className="mt-4">
            <a href="#" className="btn btn-outline-success mx-2">
              <i className="fab fa-whatsapp"></i> مشاركة عبر واتساب
            </a>
            <a href="#" className="btn btn-outline-primary mx-2">
              <i className="fab fa-facebook"></i> نشر على فيسبوك
            </a>
            <Link to="/contact" className="btn btn-success mx-2">
              <i className="fas fa-question-circle"></i> استشارة أخصائي
            </Link>
          </div>
        </div>
      </footer>
    </section>
  );
};