import '../assets/css/About.css';

function About() {
    return (
        <>
            <section className="header-section mt-5">
                <div className="container">
                    <h1>من نحن</h1>
                    <p>نحن "تائه"، منصة تهدف إلى مساعدة العائلات في العثور على أحبائهم المفقودين بسهولة وأمان.</p>
                </div>
            </section>

            <section className="content-section mb-5">
                <div className="container">
                    <h2 className="text-center mb-4">مهمتنا ورؤيتنا</h2>
                    <p className="mb-3">
                        في "تائه"، ندرك أن فقدان شخص عزيز يمثل تحديًا كبيرًا وصعبًا على الأسرة والمجتمع.
                        لذلك نوفر منصة تفاعلية وآمنة تسمح بالإبلاغ عن المفقودين والبحث في قاعدة بيانات شاملة تساعد على تسريع
                        عملية العثور عليهم.
                    </p>
                    <p className="mb-5">
                        نؤمن بأن التكنولوجيا يمكن أن تكون جسرًا للتواصل والإيجاد، ونعمل جاهدين لتقديم خدماتنا بأعلى معايير
                        الثقة والخصوصية.
                    </p>

                    <h2 id="services" className="text-center mb-4">خدماتنا</h2>
                    <div className="row g-4 justify-content-center">
                        <div className="col-md-6 col-lg-4">
                            <div className="feature-card">
                                <i className="fas fa-child"></i>
                                <h3 className="mt-3 mb-2">البحث عن الأطفال المفقودين</h3>
                                <p>نوفر وسيلة فعالة للإبلاغ والبحث عن الأطفال الذين فقدوا بطريقة سهلة ومبسطة.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="feature-card">
                                <i className="fas fa-user-astronaut"></i>
                                <h3 className="mt-3 mb-2">البحث عن كبار السن</h3>
                                <p>نساعد في العثور على كبار السن المفقودين ونعمل على تسهيل التواصل بين العائلات والجهات المعنية.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="feature-card">
                                <i className="fas fa-search-location"></i>
                                <h3 className="mt-3 mb-2">قاعدة بيانات محدثة</h3>
                                <p>نحدث بيانات المفقودين باستمرار لنضمن دقة المعلومات وسرعة العثور عليهم.</p>
                            </div>
                        </div>

                        <div className="col-md-6 col-lg-4">
                            <div className="feature-card">
                                <i className="fas fa-shield-alt"></i>
                                <h3 className="mt-3 mb-2">خصوصية وأمان</h3>
                                <p>نلتزم بحماية بيانات المستخدمين ونضمن سرية المعلومات للحفاظ على ثقتكم.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default About;
