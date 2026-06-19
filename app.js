/**
 * WENDO - Premium Application Logic
 * With i18n Support (AR / FR)
 */

const translations = {
    ar: {
        "meta.title": "WENDO - منصتك التوجيهية الذكية",
        "nav.menu": "القائمة",
        "nav.findProgram": "البحث عن تخصص",
        "nav.home": "🏠 الرئيسية",
        "nav.universities": "الجامعات والمدارس",
        "nav.careers": "دليل المهن",
        "nav.quiz": "اختبار الميول",
        "nav.mySpace": "مساحتي",
        "nav.toggleTheme": "🌙 تبديل المظهر",
        "nav.login": "تسجيل الدخول",
        "nav.logout": "تسجيل الخروج",
        "nav.back": "رجوع",
        "hero.title": "اكتشف مستقبلك <span class=\"text-gradient\">مع WENDO</span>",
        "hero.subtitle": "المنصة الموجهة للطلاب في الجزائر لاكتشاف التخصصات، الجامعات، والمهن الأنسب لميولك.",
        "hero.btnQuiz": "ابدأ اختبار الميول الآن",
        "hero.btnExplore": "تصفح التخصصات",
        "hero.btnPassion": "ايش شغفك",
        "hero.scroll": "اكتشف المزيد",
        "features.quiz.title": "اختبار الميول الذكي",
        "features.quiz.desc": "أجب عن بعض الأسئلة وسنقترح لك التخصصات والمهن المناسبة لشخصيتك.",
        "features.careers.title": "المهن",
        "features.careers.desc": "قارن بين مهنتين مختلفتين من حيث الطلب، الدخل، وبيئة العمل لاختيار الأفضل.",
        "features.schools.title": "المدارس والجامعات",
        "features.schools.desc": "دليلك الشامل لجامعات ومدارس النخبة في مختلف ولايات الوطن.",
        "dashboard.welcome": "مرحباً بك في مساحتك الخاصة",
        "dashboard.desc": "هنا يمكنك متابعة نشاطاتك، والوصول السريع للأدوات التي تهمك.",
        "dashboard.quizResult": "نتيجة اختبار الميول",
        "dashboard.quizResultDesc": "شاهد نتائج آخر اختبار قمت به للتعرف على التخصصات الأنسب لك.",
        "dashboard.favorites": "التخصصات المحفوظة",
        "dashboard.favoritesDesc": "قائمة بالتخصصات والمدارس التي قمت بحفظها للرجوع إليها لاحقاً.",
        "dashboard.careers": "مقارنات المهن",
        "dashboard.careersDesc": "اذهب إلى دليل المهن لمتابعة استكشاف الخيارات الوظيفية المتاحة.",
        "quiz.title": "اختبار تحديد الميول",
        "quiz.subtitle": "دعنا نتعرف عليك أكثر لنقترح لك الأفضل",
        "quiz.progress": "اكتمل الاختبار!",
        "quiz.resultText": "بناءً على إجاباتك، تميل شخصيتك إلى مجال: <strong style=\"color: var(--accent-color);\">{category}</strong>",
        "quiz.suggested": "التخصصات المقترحة لك:",
        "quiz.noResults": "لا توجد تخصصات مطابقة حالياً.",
        "quiz.retry": "إعادة الاختبار",
        "explorer.title": "ماذا تريد استكشافه؟",
        "explorer.universities": "الجامعات",
        "explorer.schools": "المدارس العليا",
        "specialties.title": "التخصصات",
        "specialties.available": "التخصصات المتاحة",
        "careers.title": "دليل المهن المستقبلية",
        "careers.subtitle": "اختر مهنتين للمقارنة بينهما واكتشاف خصائصهما",
        "careers.demand": "الطلب في السوق: <strong style=\"color:var(--text-primary)\">{value}</strong>",
        "careers.compare": "قارن",
        "search.university": "ابحث عن جامعة أو ولاية...",
        "search.school": "ابحث عن مدرسة أو ولاية...",
        "search.noResults": "لا توجد نتائج مطابقة لبحثك.",
        "footer.desc": "منصتك الموثوقة لاختيار مستقبلك التعليمي والمهني. نسعى لتوجيه الطلاب نحو أفضل الخيارات الأكاديمية.",
        "footer.follow": "تابعنا",
        "footer.copy": "© 2026 WENDO. جميع الحقوق محفوظة. | جميع البيانات المقدمة للأغراض التوجيهية فقط.",
        "modal.compareTitle": "مقارنة المهن",
        "modal.loginTitle": "تسجيل الدخول",
        "modal.registerTitle": "إنشاء حساب جديد",
        "modal.specsLocked": "باقي التخصصات مقفلة",
        "modal.specsLockedDesc": "سجل الدخول لرؤية القائمة الكاملة",
        "modal.careersLocked": "المزيد من المهن مقفلة",
        "modal.careersLockedDesc": "سجل الدخول للمقارنة واكتشاف المزيد",
        "modal.unisLocked": "الوصول محدود",
        "modal.unisLockedDesc": "سجل الدخول لرؤية جميع الجامعات",
        "modal.schoolsLocked": "الوصول محدود",
        "modal.schoolsLockedDesc": "سجل الدخول لرؤية جميع المدارس العليا",
        "form.email": "البريد الإلكتروني",
        "form.password": "كلمة المرور",
        "form.fullName": "الاسم الكامل",
        "form.loginBtn": "دخول",
        "form.registerBtn": "إنشاء حساب",
        "form.noAccount": "لا تملك حساباً؟ أنشئ حساب الآن",
        "toast.loginRequired": "يرجى تسجيل الدخول أولاً لتفعيل خاصية المقارنة.",
        "toast.maxCompare": "يمكنك مقارنة مهنتين فقط في نفس الوقت.",
        "toast.loginSuccess": "تم تسجيل الدخول بنجاح!",
        "toast.registerSuccess": "تم إنشاء الحساب بنجاح!",
        "category.tech": "التكنولوجيا والهندسة",
        "category.health": "العلوم الطبية والصحية",
        "category.business": "الأعمال والتسويق",
        "category.art": "الفنون والتصميم",
        "category.humanities": "العلوم الإنسانية والقانونية",
        "compare.demand": "الطلب في السوق",
        "compare.salary": "مستوى الدخل",
        "compare.environment": "بيئة العمل",
        "compare.skills": "المهارات الأساسية",
        "compare.now": "قارن الآن",
        "compare.selected": "تم تحديد {count}/2 للمقارنة",
        "marquee.universities": "جامعة"
    },
    fr: {
        "meta.title": "WENDO - Votre plateforme d'orientation intelligente",
        "nav.menu": "Menu",
        "nav.findProgram": "Rechercher une filière",
        "nav.home": "🏠 Accueil",
        "nav.universities": "Universités et Écoles",
        "nav.careers": "Guide des Métiers",
        "nav.quiz": "Test d'orientation",
        "nav.mySpace": "Mon Espace",
        "nav.toggleTheme": "🌙 Changer le thème",
        "nav.login": "Connexion",
        "nav.logout": "Déconnexion",
        "nav.back": "Retour",
        "hero.title": "Découvrez votre avenir <span class=\"text-gradient\">avec WENDO</span>",
        "hero.subtitle": "La plateforme dédiée aux étudiants en Algérie pour découvrir les filières, universités et métiers les plus adaptés à vos aspirations.",
        "hero.btnQuiz": "Commencer le test d'orientation",
        "hero.btnExplore": "Parcourir les filières",
        "hero.btnPassion": "Quelle est ta passion",
        "hero.scroll": "Découvrir plus",
        "features.quiz.title": "Test d'orientation intelligent",
        "features.quiz.desc": "Répondez à quelques questions et nous vous suggérerons les filières et métiers adaptés à votre personnalité.",
        "features.careers.title": "Les Métiers",
        "features.careers.desc": "Comparez deux métiers différents en termes de demande, revenu et environnement de travail pour choisir le meilleur.",
        "features.schools.title": "Écoles et Universités",
        "features.schools.desc": "Votre guide complet des universités et écoles d'élite dans différentes wilayas du pays.",
        "dashboard.welcome": "Bienvenue dans votre espace privé",
        "dashboard.desc": "Ici vous pouvez suivre vos activités et accéder rapidement aux outils qui vous intéressent.",
        "dashboard.quizResult": "Résultat du test d'orientation",
        "dashboard.quizResultDesc": "Consultez les résultats de votre dernier test pour découvrir les filières les plus adaptées.",
        "dashboard.favorites": "Filières enregistrées",
        "dashboard.favoritesDesc": "Liste des filières et écoles que vous avez enregistrées pour les consulter plus tard.",
        "dashboard.careers": "Comparaisons de métiers",
        "dashboard.careersDesc": "Allez au guide des métiers pour continuer à explorer les options professionnelles.",
        "quiz.title": "Test de détermination d'orientation",
        "quiz.subtitle": "Faisons connaissance pour vous suggérer le meilleur",
        "quiz.progress": "Test terminé!",
        "quiz.resultText": "D'après vos réponses, votre personnalité penche vers le domaine: <strong style=\"color: var(--accent-color);\">{category}</strong>",
        "quiz.suggested": "Filières suggérées pour vous:",
        "quiz.noResults": "Aucune filière correspondante pour le moment.",
        "quiz.retry": "Repasser le test",
        "explorer.title": "Que voulez-vous explorer?",
        "explorer.universities": "Universités",
        "explorer.schools": "Écoles Supérieures",
        "specialties.title": "Filières",
        "specialties.available": "Filières disponibles",
        "careers.title": "Guide des métiers d'avenir",
        "careers.subtitle": "Choisissez deux métiers à comparer et découvrez leurs caractéristiques",
        "careers.demand": "Demande sur le marché: <strong style=\"color:var(--text-primary)\">{value}</strong>",
        "careers.compare": "Comparer",
        "search.university": "Rechercher une université ou wilaya...",
        "search.school": "Rechercher une école ou wilaya...",
        "search.noResults": "Aucun résultat ne correspond à votre recherche.",
        "footer.desc": "Votre plateforme de confiance pour choisir votre avenir académique et professionnel. Nous visons à orienter les étudiants vers les meilleures options académiques.",
        "footer.follow": "Suivez-nous",
        "footer.copy": "© 2026 WENDO. Tous droits réservés. | Toutes les données sont fournies à titre indicatif uniquement.",
        "modal.compareTitle": "Comparaison des métiers",
        "modal.loginTitle": "Connexion",
        "modal.registerTitle": "Créer un nouveau compte",
        "modal.specsLocked": "Le reste des filières est verrouillé",
        "modal.specsLockedDesc": "Connectez-vous pour voir la liste complète",
        "modal.careersLocked": "Plus de métiers verrouillés",
        "modal.careersLockedDesc": "Connectez-vous pour comparer et découvrir plus",
        "modal.unisLocked": "Accès limité",
        "modal.unisLockedDesc": "Connectez-vous pour voir toutes les universités",
        "modal.schoolsLocked": "Accès limité",
        "modal.schoolsLockedDesc": "Connectez-vous pour voir toutes les écoles supérieures",
        "form.email": "Adresse e-mail",
        "form.password": "Mot de passe",
        "form.fullName": "Nom complet",
        "form.loginBtn": "Se connecter",
        "form.registerBtn": "Créer un compte",
        "form.noAccount": "Vous n'avez pas de compte? Créez-en un maintenant",
        "toast.loginRequired": "Veuillez d'abord vous connecter pour activer la fonction de comparaison.",
        "toast.maxCompare": "Vous ne pouvez comparer que deux métiers à la fois.",
        "toast.loginSuccess": "Connexion réussie!",
        "toast.registerSuccess": "Compte créé avec succès!",
        "category.tech": "Technologie et Ingénierie",
        "category.health": "Sciences médicales et de la santé",
        "category.business": "Affaires et Marketing",
        "category.art": "Arts et Design",
        "category.humanities": "Sciences humaines et juridiques",
        "compare.demand": "Demande sur le marché",
        "compare.salary": "Niveau de revenu",
        "compare.environment": "Environnement de travail",
        "compare.skills": "Compétences essentielles",
        "compare.now": "Comparer maintenant",
        "compare.selected": "{count}/2 sélectionnés pour comparaison",
        "marquee.universities": "Université"
    }
};

const app = {
    state: {
        isLoggedIn: localStorage.getItem('wendo_user') !== null,
        userName: localStorage.getItem('wendo_user') || "",
        theme: localStorage.getItem('wendo_theme') || "light",
        lang: localStorage.getItem('wendo_lang') || "ar",
        favorites: JSON.parse(localStorage.getItem('wendo_favs')) || [],
        selectedCareersForCompare: [],
        quiz: { currentQuestion: 0, scores: { tech: 0, health: 0, business: 0, art: 0, humanities: 0 } }
    },

    t(key, replacements = {}) {
        const lang = this.state.lang;
        let text = translations[lang]?.[key] || translations['ar']?.[key] || key;
        for (const [k, v] of Object.entries(replacements)) {
            text = text.replace(`{${k}}`, v);
        }
        return text;
    },

    toggleLanguage() {
        const newLang = this.state.lang === "ar" ? "fr" : "ar";
        this.state.lang = newLang;
        localStorage.setItem('wendo_lang', newLang);
        this.applyLanguage(newLang);
        this.showToast(newLang === "fr" ? "Langue changée en Français" : "تم تغيير اللغة إلى العربية");
    },

    applyLanguage(lang) {
    const html = document.getElementById('html-root');
    html.setAttribute('lang', lang);
    html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

    // تحديث الخط حسب اللغة
    if (lang === 'fr') {
        document.documentElement.style.setProperty('--font-family-main', 'BebasNeue, Arial, sans-serif');
    } else {
        document.documentElement.style.setProperty('--font-family-main', 'ArabicFont, Tajawal, system-ui, sans-serif');
    }

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang][key]) {
            el.innerHTML = translations[lang][key];
        }
    });

    // Update placeholders
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang][key]) {
            el.setAttribute('placeholder', translations[lang][key]);
        }
    });

    // Update dynamic content
    this.renderUniversities();
    this.renderSchools();
    this.renderCareers();
    this.initMarquees();

    // Update dashboard if logged in
    if (this.state.isLoggedIn) {
        this.updateAuthUI(this.state.userName);
    }

    // Update compare floating button if visible
    this.updateCompareFloatingButton();

    // Update page title
    document.title = this.t('meta.title');
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
                <h3>${this.t('dashboard.quizResult')}</h3>
                <p>${this.t('dashboard.quizResultDesc')}</p>
            </div>
            <div class="feature-card interactive" onclick="app.navigate('specialties-view')" role="button" tabindex="0">
                <div class="icon">⭐</div>
                <h3>${this.t('dashboard.favorites')}</h3>
                <p>${this.t('dashboard.favoritesDesc')}</p>
            </div>
            <div class="feature-card interactive" onclick="app.navigate('careers-view')" role="button" tabindex="0">
                <div class="icon">⚖️</div>
                <h3>${this.t('dashboard.careers')}</h3>
                <p>${this.t('dashboard.careersDesc')}</p>
            </div>
        `;
    },

    data: {
        specialties: [
            { id: 1, title: { ar: "هندسة البرمجيات", fr: "Génie Logiciel" }, field: { ar: "إعلام آلي", fr: "Informatique" }, category: "tech", duration: { ar: "5 سنوات", fr: "5 ans" }, desc: { ar: "تصميم وتطوير الأنظمة البرمجية. تخصص يعتمد على المنطق والرياضيات.", fr: "Conception et développement de systèmes logiciels. Spécialisation basée sur la logique et les mathématiques." } },
            { id: 2, title: { ar: "الطب البشري", fr: "Médecine" }, field: { ar: "علوم طبية", fr: "Sciences médicales" }, category: "health", duration: { ar: "7 سنوات", fr: "7 ans" }, desc: { ar: "دراسة شاملة لجسم الإنسان والأمراض. يتطلب معدلات عالية وتركيزاً.", fr: "Étude complète du corps humain et des maladies. Nécessite des notes élevées et de la concentration." } },
            { id: 3, title: { ar: "التسويق الرقمي", fr: "Marketing Digital" }, field: { ar: "تجارة واقتصاد", fr: "Commerce et économie" }, category: "business", duration: { ar: "3 سنوات", fr: "3 ans" }, desc: { ar: "استراتيجيات التسويق عبر الإنترنت وتحليل البيانات.", fr: "Stratégies de marketing en ligne et analyse de données." } },
            { id: 4, title: { ar: "الطاقات المتجددة", fr: "Énergies Renouvelables" }, field: { ar: "تكنولوجيا", fr: "Technologie" }, category: "tech", duration: { ar: "5 سنوات", fr: "5 ans" }, desc: { ar: "هندسة وتطوير حلول الطاقة النظيفة والمستدامة.", fr: "Ingénierie et développement de solutions d'énergie propre et durable." } },
            { id: 5, title: { ar: "الصيدلة", fr: "Pharmacie" }, field: { ar: "علوم طبية", fr: "Sciences médicales" }, category: "health", duration: { ar: "6 سنوات", fr: "6 ans" }, desc: { ar: "علم تركيب الأدوية وفهم التفاعلات الكيميائية الحيوية.", fr: "Science de la composition des médicaments et compréhension des interactions biochimiques." } },
            { id: 6, title: { ar: "الحقوق", fr: "Droit" }, field: { ar: "علوم قانونية", fr: "Sciences juridiques" }, category: "humanities", duration: { ar: "3 سنوات", fr: "3 ans" }, desc: { ar: "دراسة القوانين والأنظمة التشريعية والدفاع عن الحقوق.", fr: "Étude des lois, des systèmes législatifs et défense des droits." } },
            { id: 7, title: { ar: "التصميم الجرافيكي", fr: "Design Graphique" }, field: { ar: "فنون وتصميم", fr: "Arts et design" }, category: "art", duration: { ar: "3 سنوات", fr: "3 ans" }, desc: { ar: "التواصل البصري وبناء الهويات التجارية رقمياً ومطبوعاً.", fr: "Communication visuelle et construction d'identités commerciales numériques et imprimées." } }
        ],
        careers: [
            { id: 1, title: { ar: "مطور برمجيات", fr: "Développeur Logiciel" }, demand: { ar: "مرتفع جداً", fr: "Très élevé" }, salary: { ar: "مرتفع", fr: "Élevé" }, icon: "💻", environment: { ar: "مكتبي/عن بعد", fr: "Bureau/À distance" }, skills: { ar: "البرمجة، حل المشكلات، المنطق", fr: "Programmation, résolution de problèmes, logique" } },
            { id: 2, title: { ar: "طبيب عام", fr: "Médecin généraliste" }, demand: { ar: "مرتفع دائماً", fr: "Toujours élevé" }, salary: { ar: "متوسط إلى مرتفع", fr: "Moyen à élevé" }, icon: "🩺", environment: { ar: "مستشفى/عيادة", fr: "Hôpital/Clinique" }, skills: { ar: "التعاطف، التشخيص، الصبر", fr: "Empathie, diagnostic, patience" } },
            { id: 3, title: { ar: "مدير تسويق رقمي", fr: "Responsable Marketing Digital" }, demand: { ar: "مرتفع", fr: "Élevé" }, salary: { ar: "متوسط", fr: "Moyen" }, icon: "📈", environment: { ar: "مكتبي/ديناميكي", fr: "Bureau/Dynamique" }, skills: { ar: "التحليل، الإبداع، التواصل", fr: "Analyse, créativité, communication" } },
            { id: 4, title: { ar: "مهندس طاقات متجددة", fr: "Ingénieur Énergies Renouvelables" }, demand: { ar: "متزايد بقوة", fr: "Fortement croissant" }, salary: { ar: "مرتفع", fr: "Élevé" }, icon: "☀️", environment: { ar: "ميداني/مكتبي", fr: "Terrain/Bureau" }, skills: { ar: "الفيزياء، التخطيط، الهندسة", fr: "Physique, planification, ingénierie" } },
            { id: 5, title: { ar: "صيدلي إكلينيكي", fr: "Pharmacien clinicien" }, demand: { ar: "مستقر", fr: "Stable" }, salary: { ar: "مرتفع", fr: "Élevé" }, icon: "💊", environment: { ar: "صيدلية/مستشفى", fr: "Pharmacie/Hôpital" }, skills: { ar: "الدقة، الكيمياء، خدمة المرضى", fr: "Précision, chimie, service aux patients" } },
            { id: 6, title: { ar: "محامي / مستشار قانوني", fr: "Avocat / Conseiller juridique" }, demand: { ar: "متوسط", fr: "Moyen" }, salary: { ar: "متغير", fr: "Variable" }, icon: "⚖️", environment: { ar: "محاكم/مكاتب", fr: "Tribunaux/Bureaux" }, skills: { ar: "الخطابة، التحليل، الإقناع", fr: "Éloquence, analyse, persuasion" } },
            { id: 7, title: { ar: "مصمم واجهات المستخدم", fr: "Designer UI/UX" }, demand: { ar: "مرتفع جداً", fr: "Très élevé" }, salary: { ar: "مرتفع", fr: "Élevé" }, icon: "🎨", environment: { ar: "مكتبي/عن بعد", fr: "Bureau/À distance" }, skills: { ar: "الإبداع، فهم علم النفس، التصميم", fr: "Créativité, compréhension de la psychologie, design" } }
        ],
        quizQuestions: [
            {
                question: { ar: "في أوقات فراغك، ما هو النشاط المفضل لديك؟", fr: "Pendant votre temps libre, quelle est votre activité préférée?" },
                options: [
                    { text: { ar: "حل الألغاز والمشكلات التقنية", fr: "Résoudre des énigmes et problèmes techniques" }, category: "tech" },
                    { text: { ar: "قراءة مواضيع صحية ومساعدة الآخرين", fr: "Lire des sujets de santé et aider les autres" }, category: "health" },
                    { text: { ar: "متابعة أخبار الشركات والمشاريع التجارية", fr: "Suivre l'actualité des entreprises et projets commerciaux" }, category: "business" },
                    { text: { ar: "الرسم، التصميم أو التعديل على الصور", fr: "Dessiner, designer ou éditer des images" }, category: "art" }
                ]
            },
            {
                question: { ar: "كيف تفضل أن تكون بيئة عملك المستقبلية؟", fr: "Quel environnement de travail préférez-vous?" },
                options: [
                    { text: { ar: "أمام حاسوب، ويمكنني العمل من أي مكان", fr: "Devant un ordinateur, pouvoir travailler de n'importe où" }, category: "tech" },
                    { text: { ar: "في بيئة حيوية كالمستشفيات أو المخابر", fr: "Dans un environnement dynamique comme les hôpitaux ou laboratoires" }, category: "health" },
                    { text: { ar: "في مكتب مع فريق عمل وحملات تسويقية", fr: "Dans un bureau avec une équipe et des campagnes marketing" }, category: "business" },
                    { text: { ar: "مكتب هادئ مليء بالأنظمة والوثائق والأبحاث", fr: "Bureau calme rempli de systèmes, documents et recherches" }, category: "humanities" }
                ]
            },
            {
                question: { ar: "ما هي المادة الدراسية التي كنت تتفوق فيها وتستمتع بها؟", fr: "Quelle matière excelliez-vous et appréciez-vous?" },
                options: [
                    { text: { ar: "الرياضيات والفيزياء", fr: "Mathématiques et physique" }, category: "tech" },
                    { text: { ar: "العلوم الطبيعية (Biology)", fr: "Sciences naturelles (Biologie)" }, category: "health" },
                    { text: { ar: "الفلسفة والتاريخ والتعبير", fr: "Philosophie, histoire et expression" }, category: "humanities" },
                    { text: { ar: "النشاطات الفنية واللغات", fr: "Activités artistiques et langues" }, category: "art" }
                ]
            },
            {
                question: { ar: "إذا واجهت مشكلة، كيف تتعامل معها؟", fr: "Si vous rencontrez un problème, comment le gérez-vous?" },
                options: [
                    { text: { ar: "أقوم بتحليلها منطقياً وتقسيمها لخطوات", fr: "Je l'analyse logiquement et la divise en étapes" }, category: "tech" },
                    { text: { ar: "أبحث عن حل يفيد ويحمي الأشخاص المتضررين", fr: "Je cherche une solution qui profite et protège les personnes affectées" }, category: "health" },
                    { text: { ar: "أفكر في كيفية تحويل المشكلة لفرصة للربح", fr: "Je réfléchis à comment transformer le problème en opportunité de profit" }, category: "business" },
                    { text: { ar: "أبحث عن حل إبداعي وخارج الصندوق", fr: "Je cherche une solution créative et hors des sentiers battus" }, category: "art" }
                ]
            }
        ],
        universities: [
            { id: 1, name: { ar: "جامعة هواري بومدين (USTHB)", fr: "Université Houari Boumediene (USTHB)" }, wilaya: { ar: "الجزائر", fr: "Alger" }, type: { ar: "علوم وتكنولوجيا", fr: "Sciences et technologie" } },
            { id: 2, name: { ar: "جامعة أبو بكر بلقايد", fr: "Université Abou Bekr Belkaïd" }, wilaya: { ar: "تلمسان", fr: "Tlemcen" }, type: { ar: "متعددة التخصصات", fr: "Pluridisciplinaire" } },
            { id: 3, name: { ar: "جامعة قسنطينة 2", fr: "Université Constantine 2" }, wilaya: { ar: "قسنطينة", fr: "Constantine" }, type: { ar: "إعلام آلي ورياضيات", fr: "Informatique et mathématiques" } }
        ],
        schools: [
            { id: 1, name: { ar: "المدرسة الوطنية العليا للإعلام الآلي (ESI)", fr: "École Nationale Supérieure d'Informatique (ESI)" }, wilaya: { ar: "الجزائر", fr: "Alger" }, type: { ar: "إعلام آلي", fr: "Informatique" } },
            { id: 2, name: { ar: "المدرسة العليا للتجارة (ESC)", fr: "École Supérieure de Commerce (ESC)" }, wilaya: { ar: "القليعة", fr: "Koléa" }, type: { ar: "اقتصاد وتجارة", fr: "Économie et commerce" } },
            { id: 3, name: { ar: "المدرسة المتعددة التقنيات (ENP)", fr: "École Nationale Polytechnique (ENP)" }, wilaya: { ar: "الحراش", fr: "El Harrach" }, type: { ar: "هندسة", fr: "Ingénierie" } }
        ]
    },

    init() {
        this.applyTheme(this.state.theme);
        this.applyLanguage(this.state.lang);
        this.renderUniversities();
        this.renderSchools();
        this.renderCareers();
        this.initMarquees();

        if (this.state.isLoggedIn) {
            this.updateAuthUI(this.state.userName);
        }
    },

    initMarquees() {
        const lang = this.state.lang;
        let careersContent = '';
        for (let i = 0; i < 8; i++) {
            careersContent += this.data.careers.map(c => `<span class="marquee-item">${c.icon} ${c.title[lang]}</span>`).join('');
        }
        document.getElementById('marquee-careers').innerHTML = careersContent;

        let unisContent = '';
        for (let i = 0; i < 8; i++) {
            unisContent += this.data.specialties.map(s => `<span class="marquee-item">${s.title[lang]} (${s.field[lang]})</span>`).join('');
            unisContent += this.data.universities.map(u => `<span class="marquee-item">🏛️ ${u.name[lang]}</span>`).join('');
        }
        document.getElementById('marquee-unis').innerHTML = unisContent;
    },

    navigate(viewId) {
        document.querySelectorAll('.view-section').forEach(section => section.classList.remove('active'));
        const target = document.getElementById(viewId);
        if (target) {
            target.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        // Show/hide hero video based on view
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
        toast.innerHTML = `<i class="fas fa-info-circle" style="margin-${this.state.lang === 'ar' ? 'left' : 'right'}: 8px;"></i> ${message}`;
        container.appendChild(toast);

        setTimeout(() => {
            toast.style.animation = 'toastFadeOut 0.4s cubic-bezier(0.25, 0.8, 0.25, 1) forwards';
            setTimeout(() => toast.remove(), 400);
        }, 3000);
    },

    renderUniversities(filtered = this.data.universities) {
        const grid = document.getElementById('universities-grid');
        const emptyState = document.getElementById('universities-empty');
        const lang = this.state.lang;

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
                    <h3>${this.t('modal.unisLocked')}</h3>
                    <p>${this.t('modal.unisLockedDesc')}</p>
                    <button class="primary-btn" style="margin-top:1rem; padding: 0.5rem 1rem;">${this.t('nav.login')}</button>
                </div>
            `;
        }

        grid.innerHTML = displayData.map(u => `
            <div class="data-card" onclick="app.showSpecialties('${lang === 'ar' ? 'جامعة' : 'Université'}')" tabindex="0" role="button">
                <div>
                    <h3>${u.name[lang]}</h3>
                    <p><i class="fas fa-map-marker-alt" style="margin-${lang === 'ar' ? 'left' : 'right'}: 5px;"></i> ${u.wilaya[lang]}</p>
                </div>
                <span class="tag">${u.type[lang]}</span>
            </div>
        `).join('') + lockedHTML;
    },

    renderSchools(filtered = this.data.schools) {
        const grid = document.getElementById('schools-grid');
        const emptyState = document.getElementById('schools-empty');
        const lang = this.state.lang;

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
                    <h3>${this.t('modal.schoolsLocked')}</h3>
                    <p>${this.t('modal.schoolsLockedDesc')}</p>
                    <button class="primary-btn" style="margin-top:1rem; padding: 0.5rem 1rem;">${this.t('nav.login')}</button>
                </div>
            `;
        }

        grid.innerHTML = displayData.map(s => `
            <div class="data-card" onclick="app.showSpecialties('${lang === 'ar' ? 'مدرسة عليا' : 'École supérieure'}')" tabindex="0" role="button">
                <div>
                    <h3>${s.name[lang]}</h3>
                    <p><i class="fas fa-map-marker-alt" style="margin-${lang === 'ar' ? 'left' : 'right'}: 5px;"></i> ${s.wilaya[lang]}</p>
                </div>
                <span class="tag">${s.type[lang]}</span>
            </div>
        `).join('') + lockedHTML;
    },

    showSpecialties(context) {
        const lang = this.state.lang;
        document.getElementById('specialties-title').innerText = this.t('specialties.available');

        let displayData = this.data.specialties;
        let lockedHTML = '';

        if (!this.state.isLoggedIn && displayData.length > 3) {
            displayData = displayData.slice(0, 3);
            lockedHTML = `
                <div class="data-card locked-card" onclick="app.openModal('login-modal')">
                    <i class="fas fa-lock" style="font-size: 2.5rem; color: var(--accent-color); margin-bottom: 1rem;"></i>
                    <h3>${this.t('modal.specsLocked')}</h3>
                    <p>${this.t('modal.specsLockedDesc')}</p>
                    <button class="primary-btn" style="margin-top:1rem; padding: 0.5rem 1rem;">${this.t('nav.login')}</button>
                </div>
            `;
        }

        document.getElementById('specialties-grid').innerHTML = displayData.map(spec => `
            <div class="data-card" onclick="app.openSpecialtyModal(${spec.id})" tabindex="0" role="button">
                <div>
                    <h3>${spec.title[lang]}</h3>
                    <p><i class="far fa-clock" style="margin-${lang === 'ar' ? 'left' : 'right'}: 5px;"></i> ${spec.duration[lang]}</p>
                </div>
                <span class="tag">${spec.field[lang]}</span>
            </div>
        `).join('') + lockedHTML;
        this.navigate('specialties-view');
    },

    renderCareers() {
        const container = document.getElementById('careers-grid-container');
        const lang = this.state.lang;

        let displayData = this.data.careers;
        let lockedHTML = '';

        if (!this.state.isLoggedIn && displayData.length > 3) {
            displayData = displayData.slice(0, 3);
            lockedHTML = `
                <div class="career-card locked-card" onclick="app.openModal('login-modal')">
                    <i class="fas fa-lock" style="font-size: 2.5rem; color: var(--accent-color); margin-bottom: 1rem;"></i>
                    <h3>${this.t('modal.careersLocked')}</h3>
                    <p>${this.t('modal.careersLockedDesc')}</p>
                    <button class="primary-btn" style="margin-top:1rem; padding: 0.5rem 1rem;">${this.t('nav.login')}</button>
                </div>
            `;
        }

        container.innerHTML = displayData.map(career => `
            <div class="career-card" tabindex="0">
                <div class="icon">${career.icon}</div>
                <h3>${career.title[lang]}</h3>
                <p style="margin-top: 0.5rem; font-size: 0.95rem">${this.t('careers.demand', { value: career.demand[lang] })}</p>
                <div class="career-footer">
                    <span class="tag" style="margin-top: 0">${career.salary[lang]}</span>
                    <label class="compare-checkbox-label" onclick="event.stopPropagation()">
                        <input type="checkbox" onchange="app.toggleCompare(${career.id}, event)"> ${this.t('careers.compare')}
                    </label>
                </div>
            </div>
        `).join('') + lockedHTML;
    },

    toggleCompare(careerId, event) {
        if (!this.state.isLoggedIn) {
            event.target.checked = false;
            this.showToast(this.t('toast.loginRequired'));
            this.openModal('login-modal');
            return;
        }

        const isChecked = event.target.checked;
        if (isChecked) {
            if (this.state.selectedCareersForCompare.length >= 2) {
                this.showToast(this.t('toast.maxCompare'));
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
                <span>${this.t('compare.selected', { count: count })}</span>
                <button class="primary-btn" style="padding: 0.6rem 1.2rem; font-size: 0.9rem;"
                        ${count !== 2 ? 'disabled' : ''}
                        onclick="app.showComparison()">${this.t('compare.now')}</button>
            `;
        } else {
            btn.classList.remove('visible');
        }
    },

    showComparison() {
        const lang = this.state.lang;
        const c1 = this.data.careers.find(c => c.id === this.state.selectedCareersForCompare[0]);
        const c2 = this.data.careers.find(c => c.id === this.state.selectedCareersForCompare[1]);

        document.getElementById('compare-content').innerHTML = `
            <div class="compare-grid">
                <div class="compare-item">
                    <h4>${c1.icon} ${c1.title[lang]}</h4>
                    <p class="compare-detail"><strong><i class="fas fa-chart-line"></i> ${this.t('compare.demand')}:</strong> ${c1.demand[lang]}</p>
                    <p class="compare-detail"><strong><i class="fas fa-wallet"></i> ${this.t('compare.salary')}:</strong> ${c1.salary[lang]}</p>
                    <p class="compare-detail"><strong><i class="fas fa-building"></i> ${this.t('compare.environment')}:</strong> ${c1.environment[lang]}</p>
                    <p class="compare-detail"><strong><i class="fas fa-star"></i> ${this.t('compare.skills')}:</strong> ${c1.skills[lang]}</p>
                </div>
                <div class="compare-item">
                    <h4>${c2.icon} ${c2.title[lang]}</h4>
                    <p class="compare-detail"><strong><i class="fas fa-chart-line"></i> ${this.t('compare.demand')}:</strong> ${c2.demand[lang]}</p>
                    <p class="compare-detail"><strong><i class="fas fa-wallet"></i> ${this.t('compare.salary')}:</strong> ${c2.salary[lang]}</p>
                    <p class="compare-detail"><strong><i class="fas fa-building"></i> ${this.t('compare.environment')}:</strong> ${c2.environment[lang]}</p>
                    <p class="compare-detail"><strong><i class="fas fa-star"></i> ${this.t('compare.skills')}:</strong> ${c2.skills[lang]}</p>
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
        const lang = this.state.lang;
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
            <div class="quiz-question">${q.question[lang]}</div>
            <div class="quiz-options">
                ${q.options.map(opt => `
                    <button class="quiz-option" onclick="app.answerQuiz('${opt.category}')">${opt.text[lang]}</button>
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
        const lang = this.state.lang;
        const scores = this.state.quiz.scores;
        const highestCategory = Object.keys(scores).reduce((a, b) => scores[a] > scores[b] ? a : b);
        const recommendedSpecs = this.data.specialties.filter(s => s.category === highestCategory);

        document.getElementById('quiz-container').innerHTML = `
            <div class="quiz-progress"><div class="quiz-progress-fill" style="width: 100%"></div></div>
            <div class="icon" style="font-size: 4.5rem; color: var(--success-color); animation: sectionFadeIn 0.5s ease;">✨</div>
            <h2 style="margin-bottom: 1rem;">${this.t('quiz.progress')}</h2>
            <p style="margin-bottom: 2rem; font-size: 1.1rem;">${this.t('quiz.resultText', { category: this.getCategoryName(highestCategory) })}</p>
            <h3 style="text-align: ${lang === 'ar' ? 'right' : 'left'}; margin-bottom: 1.5rem; border-bottom: 2px solid var(--border-color); padding-bottom: 0.5rem;">${this.t('quiz.suggested')}</h3>
            <div style="display: grid; gap: 1rem; text-align: ${lang === 'ar' ? 'right' : 'left'}; margin-bottom: 2.5rem;">
                ${recommendedSpecs.length ? recommendedSpecs.map(s => `
                    <div class="compare-item" style="cursor: pointer" onclick="app.openSpecialtyModal(${s.id})">
                        <strong style="color: var(--accent-color); font-size: 1.15rem;">${s.title[lang]}</strong>
                        <p style="font-size: 0.95rem; margin-top: 0.5rem; color: var(--text-secondary);">${s.desc[lang]}</p>
                    </div>
                `).join('') : '<p>' + this.t('quiz.noResults') + '</p>'}
            </div>
            <button class="primary-btn w-100 large" onclick="app.startQuiz()"><i class="fas fa-redo" style="margin-${lang === 'ar' ? 'left' : 'right'}: 8px;"></i> ${this.t('quiz.retry')}</button>
        `;
    },

    getCategoryName(cat) {
        return this.t('category.' + cat);
    },

    openModal(modalId) { document.getElementById(modalId).classList.add('active'); },
    closeModal(modalId) { document.getElementById(modalId).classList.remove('active'); },
    closeModalOutside(event, modalId) { if (event.target.id === modalId) this.closeModal(modalId); },

    openSpecialtyModal(id) {
        const lang = this.state.lang;
        const spec = this.data.specialties.find(s => s.id === id);
        if (!spec) return;
        document.getElementById('modal-spec-title').innerText = spec.title[lang];
        document.getElementById('modal-spec-desc').innerText = spec.desc[lang];
        document.getElementById('modal-spec-tags').innerHTML = `
            <span class="tag" style="margin-top:0"><i class="fas fa-book-open" style="margin-${lang === 'ar' ? 'left' : 'right'}: 5px;"></i> ${spec.field[lang]}</span>
            <span class="tag" style="margin-top:0"><i class="far fa-clock" style="margin-${lang === 'ar' ? 'left' : 'right'}: 5px;"></i> ${spec.duration[lang]}</span>
        `;
        this.openModal('specialty-modal');
    },

    filterData(query, type) {
        const lq = query.toLowerCase().trim();
        const lang = this.state.lang;
        if (type === 'universities') {
            this.renderUniversities(this.data.universities.filter(u =>
                u.name[lang].toLowerCase().includes(lq) || u.wilaya[lang].toLowerCase().includes(lq)
            ));
        } else if (type === 'schools') {
            this.renderSchools(this.data.schools.filter(s =>
                s.name[lang].toLowerCase().includes(lq) || s.wilaya[lang].toLowerCase().includes(lq)
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
        if (dashGreeting) dashGreeting.innerText = this.state.lang === 'fr'
            ? `Bienvenue ${name} dans votre espace privé`
            : `مرحباً بك يا ${name} في مساحتك الخاصة`;

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
        const name = this.state.lang === 'fr' ? "Étudiant" : "طالب";
        this.state.isLoggedIn = true;
        localStorage.setItem('wendo_user', name);
        this.updateAuthUI(name);
        this.closeModal('login-modal');
        this.showToast(this.t('toast.loginSuccess'));
    },

    simulateRegister(e) {
        e.preventDefault();
        const nameInput = e.target.querySelector('input[type="text"]').value;
        this.state.isLoggedIn = true;
        localStorage.setItem('wendo_user', nameInput);
        this.updateAuthUI(nameInput);
        this.closeModal('register-modal');
        this.showToast(this.t('toast.registerSuccess'));
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
