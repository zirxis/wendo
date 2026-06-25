/**
 * WENDO - Premium Application Logic
 * باللغة العربية فقط
 */

const app = {
    state: {
        isLoggedIn: localStorage.getItem('wendo_user') !== null,
        userName: localStorage.getItem('wendo_user') || "",
        theme: localStorage.getItem('wendo_theme') || "light",
        favorites: JSON.parse(localStorage.getItem('wendo_favs')) || [],
        selectedCareersForCompare: [],
        quiz: { currentQuestion: 0, scores: { tech: 0, health: 0, business: 0, art: 0, humanities: 0 } }
    },

    toggleLanguage() {
        // تم إزالة وظيفة الترجمة
    },

    applyLanguage() {
        // تم إزالة وظيفة الترجمة
    },

    toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        const overlay = document.getElementById('menu-overlay');
        menu.classList.toggle('active');
        overlay.classList.toggle('active');
    },

    handleUserAction() {
        if (this.state.isLoggedIn) {
            this.navigate('dashboard-view');
        } else {
            this.openModal('login-modal');
        }
    },

    renderDashboard() {
        const container = document.getElementById('dashboard-content');
        container.innerHTML = `
            <div class="feature-card interactive" onclick="app.startQuiz()" role="button" tabindex="0">
                <div class="icon">🧠</div>
                <h3>نتيجة اختبار الميول</h3>
                <p>شاهد نتائج آخر اختبار قمت به للتعرف على التخصصات الأنسب لك.</p>
            </div>
            <div class="feature-card interactive" onclick="app.navigate('specialties-view')" role="button" tabindex="0">
                <div class="icon">⭐</div>
                <h3>التخصصات المحفوظة</h3>
                <p>قائمة بالتخصصات والمدارس التي قمت بحفظها للرجوع إليها لاحقاً.</p>
            </div>
            <div class="feature-card interactive" onclick="app.navigate('careers-view')" role="button" tabindex="0">
                <div class="icon">⚖️</div>
                <h3>مقارنات المهن</h3>
                <p>اذهب إلى دليل المهن لمتابعة استكشاف الخيارات الوظيفية المتاحة.</p>
            </div>
        `;
    },

    data: {
        specialties: [
            { id: 1, title: "هندسة البرمجيات", field: "إعلام آلي", category: "tech", duration: "5 سنوات", desc: "تصميم وتطوير الأنظمة البرمجية. تخصص يعتمد على المنطق والرياضيات." },
            { id: 2, title: "الطب البشري", field: "علوم طبية", category: "health", duration: "7 سنوات", desc: "دراسة شاملة لجسم الإنسان والأمراض. يتطلب معدلات عالية وتركيزاً." },
            { id: 3, title: "التسويق الرقمي", field: "تجارة واقتصاد", category: "business", duration: "3 سنوات", desc: "استراتيجيات التسويق عبر الإنترنت وتحليل البيانات." },
            { id: 4, title: "الطاقات المتجددة", field: "تكنولوجيا", category: "tech", duration: "5 سنوات", desc: "هندسة وتطوير حلول الطاقة النظيفة والمستدامة." },
            { id: 5, title: "الصيدلة", field: "علوم طبية", category: "health", duration: "6 سنوات", desc: "علم تركيب الأدوية وفهم التفاعلات الكيميائية الحيوية." },
            { id: 6, title: "الحقوق", field: "علوم قانونية", category: "humanities", duration: "3 سنوات", desc: "دراسة القوانين والأنظمة التشريعية والدفاع عن الحقوق." },
            { id: 7, title: "التصميم الجرافيكي", field: "فنون وتصميم", category: "art", duration: "3 سنوات", desc: "التواصل البصري وبناء الهويات التجارية رقمياً ومطبوعاً." }
        ],
        careers: [
            { id: 1, title: "مطور برمجيات", demand: "مرتفع جداً", salary: "مرتفع", icon: "💻", environment: "مكتبي/عن بعد", skills: "البرمجة، حل المشكلات، المنطق" },
            { id: 2, title: "طبيب عام", demand: "مرتفع دائماً", salary: "متوسط إلى مرتفع", icon: "🩺", environment: "مستشفى/عيادة", skills: "التعاطف، التشخيص، الصبر" },
            { id: 3, title: "مدير تسويق رقمي", demand: "مرتفع", salary: "متوسط", icon: "📈", environment: "مكتبي/ديناميكي", skills: "التحليل، الإبداع، التواصل" },
            { id: 4, title: "مهندس طاقات متجددة", demand: "متزايد بقوة", salary: "مرتفع", icon: "☀️", environment: "ميداني/مكتبي", skills: "الفيزياء، التخطيط، الهندسة" },
            { id: 5, title: "صيدلي إكلينيكي", demand: "مستقر", salary: "مرتفع", icon: "💊", environment: "صيدلية/مستشفى", skills: "الدقة، الكيمياء، خدمة المرضى" },
            { id: 6, title: "محامي / مستشار قانوني", demand: "متوسط", salary: "متغير", icon: "⚖️", environment: "محاكم/مكاتب", skills: "الخطابة، التحليل، الإقناع" },
            { id: 7, title: "مصمم واجهات المستخدم", demand: "مرتفع جداً", salary: "مرتفع", icon: "🎨", environment: "مكتبي/عن بعد", skills: "الإبداع، فهم علم النفس، التصميم" }
        ],
        specialtyDetails: {
            1: {
                what: "هندسة البرمجيات هي تخصص يهتم بتصميم وتطوير واختبار وصيانة الأنظمة البرمجية. يعتمد هذا المجال على المنطق والرياضيات وحل المشكلات، ويهدف إلى إنشاء برامج وحلول تقنية تلبي احتياجات المستخدمين والمؤسسات.",
                subjects: ["الخوارزميات وهياكل البيانات", "لغات البرمجة (Java, Python, C++)", "هندسة البرمجيات", "قواعد البيانات", "شبكات الحاسوب", "أمن المعلومات", "الذكاء الاصطناعي", "تطوير الويب"],
                path: [
                    { year: "السنة الأولى", desc: "أساسيات البرمجة والرياضيات" },
                    { year: "السنة الثانية", desc: "البرمجة المتقدمة وهياكل البيانات" },
                    { year: "السنة الثالثة", desc: "هندسة البرمجيات وقواعد البيانات" },
                    { year: "السنة الرابعة", desc: "شبكات الحاسوب وأمن المعلومات" },
                    { year: "السنة الخامسة", desc: "مشروع التخرج والتخصص الدقيق" }
                ],
                jobs: ["مطور برمجيات", "مهندس برمجيات", "محلل نظم", "مدير مشاريع تقنية", "خبير أمن معلومات", "مطور ويب", "مبرمج تطبيقات الهاتف", "عالم بيانات"],
                suitable: [
                    "تحب التفكير المنطقي وحل المشكلات",
                    "لديك شغف بالتكنولوجيا والابتكار",
                    "تستمتع بالعمل ضمن فريق والتعاون مع الآخرين",
                    "لديك قدرة على التعلم الذاتي ومتابعة التطورات التقنية",
                    "تهتم بالتفاصيل والدقة في عملك"
                ]
            },
            2: {
                what: "الطب البشري هو تخصص يهتم بدراسة جسم الإنسان والأمراض التي تصيبه، وتشخيصها وعلاجها والوقاية منها. يعتمد هذا التخصص على العلوم الأساسية كالتشريح وعلم وظائف الأعضاء والكيمياء الحيوية.",
                subjects: ["التشريح", "علم وظائف الأعضاء", "الكيمياء الحيوية", "علم الأمراض", "الصيدلة", "الطب الباطني", "الجراحة", "طب الأطفال"],
                path: [
                    { year: "السنة الأولى", desc: "العلوم الأساسية والتشريح" },
                    { year: "السنة الثانية", desc: "علم وظائف الأعضاء والكيمياء الحيوية" },
                    { year: "السنة الثالثة", desc: "علم الأمراض وعلم الأدوية" },
                    { year: "السنة الرابعة", desc: "التدريب السريري في المستشفيات" },
                    { year: "السنة الخامسة", desc: "التخصص الدقيق والتدريب المتقدم" },
                    { year: "السنة السادسة", desc: "فترة الامتياز والتدريب العملي" },
                    { year: "السنة السابعة", desc: "التخرج والبدء في الإقامة" }
                ],
                jobs: ["طبيب عام", "طبيب اختصاصي", "جراح", "طبيب أطفال", "طبيب القلب", "طبيب الأعصاب", "طبيب العيون", "طبيب الأذن والأنف والحنجرة"],
                suitable: [
                    "لديك رغبة قوية في مساعدة الآخرين وخدمة المجتمع",
                    "لديك قدرة على تحمل الضغط والعمل لساعات طويلة",
                    "تهتم بالعلوم الطبية والتشريحية",
                    "لديك مهارات تواصل ممتازة مع المرضى",
                    "لديك قدرة على اتخاذ القرارات السريعة والحاسمة"
                ]
            },
            3: {
                what: "التسويق الرقمي هو تخصص يهتم بدراسة استراتيجيات التسويق عبر القنوات الرقمية والإنترنت. يشمل هذا التخصص تحليل البيانات وفهم سلوك المستهلك وإدارة الحملات الإعلانية الرقمية.",
                subjects: ["تسويق رقمي", "تحليل البيانات", "سلوك المستهلك", "إدارة العلامات التجارية", "الإعلان عبر الإنترنت", "التجارة الإلكترونية", "وسائل التواصل الاجتماعي", "تحسين محركات البحث"],
                path: [
                    { year: "السنة الأولى", desc: "أساسيات التسويق والتجارة" },
                    { year: "السنة الثانية", desc: "التسويق الرقمي وتحليل البيانات" },
                    { year: "السنة الثالثة", desc: "الحملات الإعلانية وإدارة الماركات" }
                ],
                jobs: ["مدير تسويق رقمي", "أخصائي تحسين محركات البحث", "أخصائي تسويق عبر وسائل التواصل", "محلل بيانات تسويقية", "مدير العلامات التجارية", "خبير التجارة الإلكترونية"],
                suitable: [
                    "لديك مهارات تحليلية وقدرة على فهم الأرقام",
                    "لديك إبداع في التفكير وتطوير الأفكار الجديدة",
                    "تستمتع بمتابعة التكنولوجيا والتطورات الرقمية",
                    "لديك مهارات تواصل ممتازة",
                    "لديك القدرة على العمل في بيئة ديناميكية سريعة التغير"
                ]
            },
            4: {
                what: "الطاقات المتجددة هو تخصص يهتم بدراسة وتطوير حلول الطاقة النظيفة والمستدامة مثل الطاقة الشمسية وطاقة الرياح والطاقة المائية، بهدف تقليل الاعتماد على المصادر التقليدية للطاقة وحماية البيئة.",
                subjects: ["فيزياء الطاقة", "الطاقة الشمسية", "طاقة الرياح", "الطاقة المائية", "الطاقة الحيوية", "كفاءة الطاقة", "تخزين الطاقة", "سياسات الطاقة المتجددة"],
                path: [
                    { year: "السنة الأولى", desc: "أساسيات الفيزياء والطاقة" },
                    { year: "السنة الثانية", desc: "الطاقات المتجددة والنظيفة" },
                    { year: "السنة الثالثة", desc: "هندسة الطاقة والأنظمة" },
                    { year: "السنة الرابعة", desc: "تصميم الأنظمة المتجددة" },
                    { year: "السنة الخامسة", desc: "مشروع التخرج والابتكار" }
                ],
                jobs: ["مهندس طاقات متجددة", "مصمم أنظمة شمسية", "خبير كفاءة الطاقة", "مدير مشاريع الطاقة النظيفة", "باحث في مجال الطاقة", "مستشار الطاقة"],
                suitable: [
                    "لديك اهتمام بالبيئة والحفاظ على الموارد",
                    "تحب الفيزياء والعلوم الهندسية",
                    "لديك القدرة على التفكير الابتكاري",
                    "تستمتع بالعمل الميداني والعملي",
                    "تهتم بمستقبل الطاقة والاستدامة"
                ]
            },
            5: {
                what: "الصيدلة هي تخصص يهتم بدراسة تركيب الأدوية وتطويرها، وفهم التفاعلات الكيميائية الحيوية في الجسم، وكيفية تأثير الأدوية على صحة الإنسان، مع التركيز على سلامة وفعالية العلاجات.",
                subjects: ["الكيمياء الصيدلانية", "الصيدلة السريرية", "علم الأدوية", "الكيمياء الحيوية", "الصيدلة المجتمعية", "الصيدلة الصناعية", "التشخيص المخبري", "القوانين الصيدلانية"],
                path: [
                    { year: "السنة الأولى", desc: "العلوم الأساسية والكيمياء" },
                    { year: "السنة الثانية", desc: "الكيمياء الحيوية وعلم الأدوية" },
                    { year: "السنة الثالثة", desc: "الصيدلة السريرية والصيدلة المجتمعية" },
                    { year: "السنة الرابعة", desc: "التدريب العملي في الصيدليات" },
                    { year: "السنة الخامسة", desc: "الصيدلة الصناعية والمشاريع" },
                    { year: "السنة السادسة", desc: "فترة الامتياز والتخصص" }
                ],
                jobs: ["صيدلي", "صيدلي سريري", "مسؤول الجودة الصيدلانية", "مدير الصيدلية", "صيدلي صناعي", "باحث صيدلاني", "خبير الأدوية", "أخصائي التسويق الصيدلاني"],
                suitable: [
                    "لديك شغف بالعلوم الكيميائية والطبية",
                    "تهتم بالدقة والتفاصيل في عملك",
                    "لديك القدرة على التواصل مع المرضى وتقديم المشورة",
                    "تستمتع بالبحث والاكتشاف العلمي",
                    "لديك مسؤولية عالية تجاه صحة الآخرين"
                ]
            },
            6: {
                what: "الحقوق هو تخصص يهتم بدراسة القوانين والأنظمة التشريعية التي تنظم المجتمع، وتحليل النصوص القانونية، وفهم حقوق وواجبات الأفراد والمؤسسات، والدفاع عن العدالة وحماية الحقوق.",
                subjects: ["القانون المدني", "القانون الجنائي", "القانون التجاري", "القانون الدولي", "القانون الإداري", "القانون الدستوري", "القانون الاجتماعي", "القانون البيئي"],
                path: [
                    { year: "السنة الأولى", desc: "مبادئ القانون" },
                    { year: "السنة الثانية", desc: "القانون المدني والجنائي" },
                    { year: "السنة الثالثة", desc: "القانون التجاري والإداري" }
                ],
                jobs: ["محامي", "مستشار قانوني", "قاضي", "كاتب عدل", "محامي الشركات", "محامي حقوق الإنسان", "خبير قانوني في المؤسسات الدولية", "أستاذ القانون"],
                suitable: [
                    "لديك اهتمام بالعدالة والقوانين",
                    "تمتلك مهارات تحليلية وقدرة على فهم النصوص المعقدة",
                    "لديك مهارات خطابة وإقناع ممتازة",
                    "تهتم بحقوق الإنسان والعدالة الاجتماعية",
                    "لديك القدرة على العمل تحت الضغط وحل النزاعات"
                ]
            },
            7: {
                what: "التصميم الجرافيكي هو تخصص يهتم بالتواصل البصري والإبداعي، حيث يتم إنشاء تصاميم ورسومات تنقل الأفكار والرسائل عبر الوسائط المطبوعة والرقمية، مع التركيز على الجمالية والوظيفية.",
                subjects: ["تصميم الجرافيك", "تصميم الواجهات", "الطباعة والتصميم المطبوع", "التصميم الرقمي", "التصوير الفوتوغرافي", "الرسوم المتحركة", "فن الخط", "نظريات الألوان"],
                path: [
                    { year: "السنة الأولى", desc: "أساسيات التصميم ونظريات الألوان" },
                    { year: "السنة الثانية", desc: "تصميم الجرافيك والطباعة" },
                    { year: "السنة الثالثة", desc: "التصميم الرقمي والمشاريع" }
                ],
                jobs: ["مصمم جرافيك", "مصمم واجهات المستخدم", "مصمم تجارب المستخدم", "رسام حر", "مخرج فني", "مصمم إعلانات", "رسام أنيميشن", "مصمم هوية تجارية"],
                suitable: [
                    "لديك شغف بالفن والإبداع",
                    "تمتلك حساً جمالياً قوياً",
                    "لديك القدرة على الابتكار وتقديم أفكار جديدة",
                    "تستمتع بالعمل الرقمي واستخدام التكنولوجيا",
                    "لديك صبر ودقة في التفاصيل"
                ]
            }
        },
        quizQuestions: [
            {
                question: "في أوقات فراغك، ما هو النشاط المفضل لديك؟",
                options: [
                    { text: "حل الألغاز والمشكلات التقنية", category: "tech" },
                    { text: "قراءة مواضيع صحية ومساعدة الآخرين", category: "health" },
                    { text: "متابعة أخبار الشركات والمشاريع التجارية", category: "business" },
                    { text: "الرسم، التصميم أو التعديل على الصور", category: "art" }
                ]
            },
            {
                question: "كيف تفضل أن تكون بيئة عملك المستقبلية؟",
                options: [
                    { text: "أمام حاسوب، ويمكنني العمل من أي مكان", category: "tech" },
                    { text: "في بيئة حيوية كالمستشفيات أو المخابر", category: "health" },
                    { text: "في مكتب مع فريق عمل وحملات تسويقية", category: "business" },
                    { text: "مكتب هادئ مليء بالأنظمة والوثائق والأبحاث", category: "humanities" }
                ]
            },
            {
                question: "ما هي المادة الدراسية التي كنت تتفوق فيها وتستمتع بها؟",
                options: [
                    { text: "الرياضيات والفيزياء", category: "tech" },
                    { text: "العلوم الطبيعية (Biology)", category: "health" },
                    { text: "الفلسفة والتاريخ والتعبير", category: "humanities" },
                    { text: "النشاطات الفنية واللغات", category: "art" }
                ]
            },
            {
                question: "إذا واجهت مشكلة، كيف تتعامل معها؟",
                options: [
                    { text: "أقوم بتحليلها منطقياً وتقسيمها لخطوات", category: "tech" },
                    { text: "أبحث عن حل يفيد ويحمي الأشخاص المتضررين", category: "health" },
                    { text: "أفكر في كيفية تحويل المشكلة لفرصة للربح", category: "business" },
                    { text: "أبحث عن حل إبداعي وخارج الصندوق", category: "art" }
                ]
            }
        ],
        universities: [
            { id: 1, name: "جامعة هواري بومدين (USTHB)", wilaya: "الجزائر", type: "علوم وتكنولوجيا" },
            { id: 2, name: "جامعة أبو بكر بلقايد", wilaya: "تلمسان", type: "متعددة التخصصات" },
            { id: 3, name: "جامعة قسنطينة 2", wilaya: "قسنطينة", type: "إعلام آلي ورياضيات" }
        ],
        schools: [
            { id: 1, name: "المدرسة الوطنية العليا للإعلام الآلي (ESI)", wilaya: "الجزائر", type: "إعلام آلي" },
            { id: 2, name: "المدرسة العليا للتجارة (ESC)", wilaya: "القليعة", type: "اقتصاد وتجارة" },
            { id: 3, name: "المدرسة المتعددة التقنيات (ENP)", wilaya: "الحراش", type: "هندسة" }
        ]
    },

    init() {
        this.applyTheme(this.state.theme);
        this.renderUniversities();
        this.renderSchools();
        this.renderCareers();
        this.initMarquees();
        this.initScrollAnimation();

        if (this.state.isLoggedIn) {
            this.updateAuthUI(this.state.userName);
        }
    },

    initMarquees() {
        let careersContent = '';
        for (let i = 0; i < 8; i++) {
            careersContent += this.data.careers.map(c => `<span class="marquee-item">${c.icon} ${c.title}</span>`).join('');
        }
        document.getElementById('marquee-careers').innerHTML = careersContent;

        let unisContent = '';
        for (let i = 0; i < 8; i++) {
            unisContent += this.data.specialties.map(s => `<span class="marquee-item">${s.title} (${s.field})</span>`).join('');
            unisContent += this.data.universities.map(u => `<span class="marquee-item">🏛️ ${u.name}</span>`).join('');
        }
        document.getElementById('marquee-unis').innerHTML = unisContent;
    },

    initScrollAnimation() {
        const elements = document.querySelectorAll('.scroll-animate');
        if (elements.length === 0) return;

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -30px 0px'
        });

        elements.forEach(el => observer.observe(el));
    },

    navigate(viewId) {
        document.querySelectorAll('.view-section').forEach(section => section.classList.remove('active'));
        const target = document.getElementById(viewId);
        if (target) {
            target.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        const heroVideo = document.getElementById('hero-video-wrapper');
        if (heroVideo) {
            if (viewId === 'landing-view') {
                heroVideo.style.display = 'flex';
            } else {
                heroVideo.style.display = 'none';
            }
        }
        const mobileMenu = document.getElementById('mobile-menu');
        const overlay = document.getElementById('menu-overlay');
        if (mobileMenu) mobileMenu.classList.remove('active');
        if (overlay) overlay.classList.remove('active');
    },

    toggleTheme() {
        const newTheme = this.state.theme === "light" ? "dark" : "light";
        this.applyTheme(newTheme);
    },

    applyTheme(theme) {
        this.state.theme = theme;
        localStorage.setItem('wendo_theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
    },

    showToast(message) {
        const container = document.getElementById('toast-container');
        const toast = document.createElement('div');
        toast.className = 'toast';
        toast.innerHTML = `<i class="fas fa-info-circle" style="margin-left: 8px;"></i> ${message}`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'toastFadeOut 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) forwards';
            setTimeout(() => toast.remove(), 400);
        }, 3000);
    },

    renderUniversities(filtered = this.data.universities) {
        const grid = document.getElementById('universities-grid');
        const emptyState = document.getElementById('universities-empty');

        if (filtered.length === 0) {
            grid.innerHTML = '';
            emptyState.classList.remove('hidden');
            return;
        }
        emptyState.classList.add('hidden');

        let displayData = filtered;
        let lockedHTML = '';

        if (!this.state.isLoggedIn && filtered.length > 2) {
            displayData = filtered.slice(0, 2);
            lockedHTML = `
                <div class="data-card locked-card" onclick="app.openModal('login-modal')">
                    <i class="fas fa-lock" style="font-size: 2.5rem; color: var(--accent-color); margin-bottom: 1rem;"></i>
                    <h3>الوصول محدود</h3>
                    <p>سجل الدخول لرؤية جميع الجامعات</p>
                    <button class="primary-btn" style="margin-top:1rem; padding: 0.5rem 1rem;">تسجيل الدخول</button>
                </div>
            `;
        }

        grid.innerHTML = displayData.map(u => `
            <div class="data-card scroll-animate" onclick="app.showSpecialties('جامعة')" tabindex="0" role="button">
                <div>
                    <h3>${u.name}</h3>
                    <p><i class="fas fa-map-marker-alt" style="margin-left: 5px;"></i> ${u.wilaya}</p>
                </div>
                <span class="tag">${u.type}</span>
            </div>
        `).join('') + lockedHTML;

        // إعادة تفعيل الـ observer للكروت الجديدة
        setTimeout(() => this.initScrollAnimation(), 100);
    },

    renderSchools(filtered = this.data.schools) {
        const grid = document.getElementById('schools-grid');
        const emptyState = document.getElementById('schools-empty');

        if (filtered.length === 0) {
            grid.innerHTML = '';
            emptyState.classList.remove('hidden');
            return;
        }
        emptyState.classList.add('hidden');

        let displayData = filtered;
        let lockedHTML = '';

        if (!this.state.isLoggedIn && filtered.length > 2) {
            displayData = filtered.slice(0, 2);
            lockedHTML = `
                <div class="data-card locked-card" onclick="app.openModal('login-modal')">
                    <i class="fas fa-lock" style="font-size: 2.5rem; color: var(--accent-color); margin-bottom: 1rem;"></i>
                    <h3>الوصول محدود</h3>
                    <p>سجل الدخول لرؤية جميع المدارس العليا</p>
                    <button class="primary-btn" style="margin-top:1rem; padding: 0.5rem 1rem;">تسجيل الدخول</button>
                </div>
            `;
        }

        grid.innerHTML = displayData.map(s => `
            <div class="data-card scroll-animate" onclick="app.showSpecialties('مدرسة عليا')" tabindex="0" role="button">
                <div>
                    <h3>${s.name}</h3>
                    <p><i class="fas fa-map-marker-alt" style="margin-left: 5px;"></i> ${s.wilaya}</p>
                </div>
                <span class="tag">${s.type}</span>
            </div>
        `).join('') + lockedHTML;

        setTimeout(() => this.initScrollAnimation(), 100);
    },

    showSpecialties(context) {
        document.getElementById('specialties-title').innerText = 'التخصصات المتاحة';

        let displayData = this.data.specialties;
        let lockedHTML = '';

        if (!this.state.isLoggedIn && displayData.length > 3) {
            displayData = displayData.slice(0, 3);
            lockedHTML = `
                <div class="data-card locked-card" onclick="app.openModal('login-modal')">
                    <i class="fas fa-lock" style="font-size: 2.5rem; color: var(--accent-color); margin-bottom: 1rem;"></i>
                    <h3>باقي التخصصات مقفلة</h3>
                    <p>سجل الدخول لرؤية القائمة الكاملة</p>
                    <button class="primary-btn" style="margin-top:1rem; padding: 0.5rem 1rem;">تسجيل الدخول</button>
                </div>
            `;
        }

        document.getElementById('specialties-grid').innerHTML = displayData.map(spec => `
            <div class="data-card scroll-animate" onclick="app.openSpecialtyDetails(${spec.id})" tabindex="0" role="button">
                <div>
                    <h3>${spec.title}</h3>
                    <p><i class="far fa-clock" style="margin-left: 5px;"></i> ${spec.duration}</p>
                </div>
                <span class="tag">${spec.field}</span>
            </div>
        `).join('') + lockedHTML;

        setTimeout(() => this.initScrollAnimation(), 100);
        this.navigate('specialties-view');
    },

    openSpecialtyDetails(id) {
        const spec = this.data.specialties.find(s => s.id === id);
        const details = this.data.specialtyDetails[id];
        
        if (!spec || !details) return;

        document.getElementById('specialty-detail-title').innerText = spec.title;
        
        document.getElementById('specialty-detail-tags').innerHTML = `
            <span class="specialty-tag"><i class="fas fa-book-open" style="margin-left: 5px;"></i> ${spec.field}</span>
            <span class="specialty-tag"><i class="far fa-clock" style="margin-left: 5px;"></i> ${spec.duration}</span>
            <span class="specialty-tag"><i class="fas fa-tag" style="margin-left: 5px;"></i> ${this.getCategoryName(spec.category)}</span>
        `;
        
        document.getElementById('specialty-detail-desc').innerText = spec.desc;
        
        document.querySelector('#specialty-what p').innerText = details.what;
        
        const subjectsContainer = document.getElementById('specialty-subjects');
        subjectsContainer.innerHTML = details.subjects.map(sub => `
            <div class="subject-item">${sub}</div>
        `).join('');
        
        const pathContainer = document.getElementById('specialty-path');
        pathContainer.innerHTML = details.path.map(p => `
            <div class="path-item">
                <span class="path-year">${p.year}</span>
                <span class="path-desc">${p.desc}</span>
            </div>
        `).join('');
        
        const jobsContainer = document.getElementById('specialty-jobs');
        jobsContainer.innerHTML = details.jobs.map(job => `
            <div class="job-item">${job}</div>
        `).join('');
        
        const suitableContainer = document.getElementById('specialty-suitable');
        suitableContainer.innerHTML = details.suitable.map(item => `
            <li class="suitable-item">${item}</li>
        `).join('');
        
        const relatedSpecs = this.data.specialties.filter(s => s.category === spec.category && s.id !== id);
        const relatedContainer = document.getElementById('related-specialties-grid');
        if (relatedSpecs.length > 0) {
            relatedContainer.innerHTML = relatedSpecs.map(s => `
                <div class="related-spec-card" onclick="app.openSpecialtyDetails(${s.id})">
                    <h3>${s.title}</h3>
                    <p>${s.field} - ${s.duration}</p>
                </div>
            `).join('');
        } else {
            relatedContainer.innerHTML = `<p style="color: #5a4e7a;">لا توجد تخصصات مرتبطة حالياً.</p>`;
        }
        
        this.navigate('specialty-details-view');
    },

    getCategoryName(cat) {
        const categories = {
            tech: "التكنولوجيا والهندسة",
            health: "العلوم الطبية والصحية",
            business: "الأعمال والتسويق",
            art: "الفنون والتصميم",
            humanities: "العلوم الإنسانية والقانونية"
        };
        return categories[cat] || cat;
    },

    renderCareers() {
        const container = document.getElementById('careers-grid-container');

        let displayData = this.data.careers;
        let lockedHTML = '';

        if (!this.state.isLoggedIn && displayData.length > 3) {
            displayData = displayData.slice(0, 3);
            lockedHTML = `
                <div class="career-card locked-card" onclick="app.openModal('login-modal')">
                    <i class="fas fa-lock" style="font-size: 2.5rem; color: var(--accent-color); margin-bottom: 1rem;"></i>
                    <h3>المزيد من المهن مقفلة</h3>
                    <p>سجل الدخول للمقارنة واكتشاف المزيد</p>
                    <button class="primary-btn" style="margin-top:1rem; padding: 0.5rem 1rem;">تسجيل الدخول</button>
                </div>
            `;
        }

        container.innerHTML = displayData.map(career => `
            <div class="career-card scroll-animate" tabindex="0">
                <div class="icon">${career.icon}</div>
                <h3>${career.title}</h3>
                <p style="margin-top: 0.5rem; font-size: 0.95rem">الطلب في السوق: <strong style="color:var(--text-primary)">${career.demand}</strong></p>
                <div class="career-footer">
                    <span class="tag" style="margin-top: 0">${career.salary}</span>
                    <label class="compare-checkbox-label" onclick="event.stopPropagation()">
                        <input type="checkbox" onchange="app.toggleCompare(${career.id}, event)"> قارن
                    </label>
                </div>
            </div>
        `).join('') + lockedHTML;

        setTimeout(() => this.initScrollAnimation(), 100);
    },

    toggleCompare(careerId, event) {
        if (!this.state.isLoggedIn) {
            event.target.checked = false;
            this.showToast('يرجى تسجيل الدخول أولاً لتفعيل خاصية المقارنة.');
            this.openModal('login-modal');
            return;
        }

        const isChecked = event.target.checked;
        if (isChecked) {
            if (this.state.selectedCareersForCompare.length >= 2) {
                this.showToast('يمكنك مقارنة مهنتين فقط في نفس الوقت.');
                event.target.checked = false;
                return;
            }
            this.state.selectedCareersForCompare.push(careerId);
        } else {
            this.state.selectedCareersForCompare = this.state.selectedCareersForCompare.filter(id => id !== careerId);
        }
        this.updateCompareFloatingButton();
    },

    updateCompareFloatingButton() {
        const btn = document.getElementById('compare-floating-btn');
        const count = this.state.selectedCareersForCompare.length;

        if (count > 0) {
            btn.classList.add('visible');
            btn.innerHTML = `
                <span>تم تحديد ${count}/2 للمقارنة</span>
                <button class="primary-btn" style="padding: 0.6rem 1.2rem; font-size: 0.9rem;"
                        ${count !== 2 ? 'disabled' : ''}
                        onclick="app.showComparison()">قارن الآن</button>
            `;
        } else {
            btn.classList.remove('visible');
        }
    },

    showComparison() {
        const c1 = this.data.careers.find(c => c.id === this.state.selectedCareersForCompare[0]);
        const c2 = this.data.careers.find(c => c.id === this.state.selectedCareersForCompare[1]);

        document.getElementById('compare-content').innerHTML = `
            <div class="compare-grid">
                <div class="compare-item">
                    <h4>${c1.icon} ${c1.title}</h4>
                    <p class="compare-detail"><strong><i class="fas fa-chart-line"></i> الطلب في السوق:</strong> ${c1.demand}</p>
                    <p class="compare-detail"><strong><i class="fas fa-wallet"></i> مستوى الدخل:</strong> ${c1.salary}</p>
                    <p class="compare-detail"><strong><i class="fas fa-building"></i> بيئة العمل:</strong> ${c1.environment}</p>
                    <p class="compare-detail"><strong><i class="fas fa-star"></i> المهارات الأساسية:</strong> ${c1.skills}</p>
                </div>
                <div class="compare-item">
                    <h4>${c2.icon} ${c2.title}</h4>
                    <p class="compare-detail"><strong><i class="fas fa-chart-line"></i> الطلب في السوق:</strong> ${c2.demand}</p>
                    <p class="compare-detail"><strong><i class="fas fa-wallet"></i> مستوى الدخل:</strong> ${c2.salary}</p>
                    <p class="compare-detail"><strong><i class="fas fa-building"></i> بيئة العمل:</strong> ${c2.environment}</p>
                    <p class="compare-detail"><strong><i class="fas fa-star"></i> المهارات الأساسية:</strong> ${c2.skills}</p>
                </div>
            </div>
        `;
        this.openModal('compare-modal');
    },

    startQuiz() {
        this.state.quiz.currentQuestion = 0;
        this.state.quiz.scores = { tech: 0, health: 0, business: 0, art: 0, humanities: 0 };
        this.navigate('quiz-view');
        this.renderQuizQuestion();
    },

    renderQuizQuestion() {
        const qIndex = this.state.quiz.currentQuestion;
        if (qIndex >= this.data.quizQuestions.length) {
            this.showQuizResults();
            return;
        }

        const q = this.data.quizQuestions[qIndex];
        const progress = ((qIndex) / this.data.quizQuestions.length) * 100;

        document.getElementById('quiz-container').innerHTML = `
            <div class="quiz-progress" role="progressbar" aria-valuenow="${progress}" aria-valuemin="0" aria-valuemax="100">
                <div class="quiz-progress-fill" style="width: ${progress}%"></div>
            </div>
            <div class="quiz-question">${q.question}</div>
            <div class="quiz-options">
                ${q.options.map(opt => `
                    <button class="quiz-option" onclick="app.answerQuiz('${opt.category}')">${opt.text}</button>
                `).join('')}
            </div>
        `;
    },

    answerQuiz(category) {
        if (this.state.quiz.scores[category] !== undefined) {
            this.state.quiz.scores[category]++;
        }
        this.state.quiz.currentQuestion++;
        this.renderQuizQuestion();
    },

    showQuizResults() {
        const scores = this.state.quiz.scores;
        const highestCategory = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        const recommendedSpecs = this.data.specialties.filter(s => s.category === highestCategory);

        document.getElementById('quiz-container').innerHTML = `
            <div class="quiz-progress"><div class="quiz-progress-fill" style="width: 100%"></div></div>
            <div class="icon" style="font-size: 4.5rem; color: var(--success-color); animation: sectionFadeIn 0.5s ease;">✨</div>
            <h2 style="margin-bottom: 1rem;">اكتمل الاختبار!</h2>
            <p style="margin-bottom: 2rem; font-size: 1.1rem;">بناءً على إجاباتك، تميل شخصيتك إلى مجال: <strong style="color: var(--accent-color);">${this.getCategoryName(highestCategory)}</strong></p>
            <h3 style="text-align: right; margin-bottom: 1.5rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">التخصصات المقترحة لك:</h3>
            <div style="display: grid; gap: 1rem; text-align: right; margin-bottom: 2.5rem;">
                ${recommendedSpecs.length ? recommendedSpecs.map(s => `
                    <div class="compare-item" style="cursor: pointer" onclick="app.openSpecialtyDetails(${s.id})">
                        <strong style="color: var(--accent-color); font-size: 1.15rem;">${s.title}</strong>
                        <p style="font-size: 0.95rem; margin-top: 0.5rem; color: var(--text-secondary);">${s.desc}</p>
                    </div>
                `).join('') : '<p>لا توجد تخصصات مطابقة حالياً.</p>'}
            </div>
            <button class="primary-btn w-100 large" onclick="app.startQuiz()"><i class="fas fa-redo" style="margin-left: 8px;"></i> إعادة الاختبار</button>
        `;
    },

    openModal(modalId) { document.getElementById(modalId).classList.add('active'); },
    closeModal(modalId) { document.getElementById(modalId).classList.remove('active'); },
    closeModalOutside(event, modalId) { if (event.target.id === modalId) this.closeModal(modalId); },

    openSpecialtyModal(id) {
        const spec = this.data.specialties.find(s => s.id === id);
        if (!spec) return;
        document.getElementById('modal-spec-title').innerText = spec.title;
        document.getElementById('modal-spec-desc').innerText = spec.desc;
        document.getElementById('modal-spec-tags').innerHTML = `
            <span class="tag" style="margin-top:0"><i class="fas fa-book-open" style="margin-left: 5px;"></i> ${spec.field}</span>
            <span class="tag" style="margin-top:0"><i class="far fa-clock" style="margin-left: 5px;"></i> ${spec.duration}</span>
        `;
        this.openModal('specialty-modal');
    },

    filterData(query, type) {
        const lq = query.toLowerCase().trim();
        if (type === 'universities') {
            this.renderUniversities(this.data.universities.filter(u =>
                u.name.toLowerCase().includes(lq) || u.wilaya.toLowerCase().includes(lq)
            ));
        } else if (type === 'schools') {
            this.renderSchools(this.data.schools.filter(s =>
                s.name.toLowerCase().includes(lq) || s.wilaya.toLowerCase().includes(lq)
            ));
        }
    },

    updateAuthUI(name) {
        const loginBtn = document.getElementById('menu-login-btn');
        if (loginBtn) loginBtn.classList.add('hidden');

        const logoutBtn = document.getElementById('menu-logout-btn');
        if (logoutBtn) logoutBtn.classList.remove('hidden');

        const dashBtn = document.getElementById('nav-dashboard-btn');
        if (dashBtn) dashBtn.classList.remove('hidden');

        const dashGreeting = document.getElementById('dashboard-greeting');
        if (dashGreeting) dashGreeting.innerText = `مرحباً بك يا ${name} في مساحتك الخاصة`;

        this.renderDashboard();
        this.renderUniversities();
        this.renderSchools();
        this.renderCareers();
    },

    logout() {
        localStorage.removeItem('wendo_user');
        this.state.isLoggedIn = false;
        location.reload();
    },

    simulateLogin(e) {
        e.preventDefault();
        const name = "طالب";
        this.state.isLoggedIn = true;
        localStorage.setItem('wendo_user', name);
        this.updateAuthUI(name);
        this.closeModal('login-modal');
        this.showToast('تم تسجيل الدخول بنجاح!');
    },

    simulateRegister(e) {
        e.preventDefault();
        const nameInput = e.target.querySelector('input[type="text"]').value || "طالب";
        this.state.isLoggedIn = true;
        localStorage.setItem('wendo_user', nameInput);
        this.updateAuthUI(nameInput);
        this.closeModal('register-modal');
        this.showToast('تم إنشاء الحساب بنجاح!');
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());