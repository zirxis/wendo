
/**
 * WENDO - Premium Application Logic
 * Modern Vanilla JS Architecture
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

    // --- Mobile Menu ---
    toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.toggle('active');
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
            { id: 1, title: "مطور برمجيات (Software Engineer)", demand: "مرتفع جداً", salary: "مرتفع", icon: "💻", environment: "مكتبي/عن بعد", skills: "البرمجة، حل المشكلات، المنطق" },
            { id: 2, title: "طبيب عام", demand: "مرتفع دائماً", salary: "متوسط إلى مرتفع", icon: "🩺", environment: "مستشفى/عيادة", skills: "التعاطف، التشخيص، الصبر" },
            { id: 3, title: "مدير تسويق رقمي", demand: "مرتفع", salary: "متوسط", icon: "📈", environment: "مكتبي/ديناميكي", skills: "التحليل، الإبداع، التواصل" },
            { id: 4, title: "مهندس طاقات متجددة", demand: "متزايد بقوة", salary: "مرتفع", icon: "☀️", environment: "ميداني/مكتبي", skills: "الفيزياء، التخطيط، الهندسة" },
            { id: 5, title: "صيدلي إكلينيكي", demand: "مستقر", salary: "مرتفع", icon: "💊", environment: "صيدلية/مستشفى", skills: "الدقة، الكيمياء، خدمة المرضى" },
            { id: 6, title: "محامي / مستشار قانوني", demand: "متوسط", salary: "متغير", icon: "⚖️", environment: "محاكم/مكاتب", skills: "الخطابة، التحليل، الإقناع" },
            { id: 7, title: "مصمم واجهات المستخدم (UI/UX)", demand: "مرتفع جداً", salary: "مرتفع", icon: "🎨", environment: "مكتبي/عن بعد", skills: "الإبداع، فهم علم النفس، التصميم" }
        ],
        quizQuestions: [
            { question: "في أوقات فراغك، ما هو النشاط المفضل لديك؟", options: [{ text: "حل الألغاز والمشكلات التقنية", category: "tech" }, { text: "قراءة مواضيع صحية ومساعدة الآخرين", category: "health" }, { text: "متابعة أخبار الشركات والمشاريع التجارية", category: "business" }, { text: "الرسم، التصميم أو التعديل على الصور", category: "art" }] },
            { question: "كيف تفضل أن تكون بيئة عملك المستقبلية؟", options: [{ text: "أمام حاسوب، ويمكنني العمل من أي مكان", category: "tech" }, { text: "في بيئة حيوية كالمستشفيات أو المخابر", category: "health" }, { text: "في مكتب مع فريق عمل وحملات تسويقية", category: "business" }, { text: "مكتب هادئ مليء بالأنظمة والوثائق والأبحاث", category: "humanities" }] },
            { question: "ما هي المادة الدراسية التي كنت تتفوق فيها وتستمتع بها؟", options: [{ text: "الرياضيات والفيزياء", category: "tech" }, { text: "العلوم الطبيعية (Biology)", category: "health" }, { text: "الفلسفة والتاريخ والتعبير", category: "humanities" }, { text: "النشاطات الفنية واللغات", category: "art" }] },
            { question: "إذا واجهت مشكلة، كيف تتعامل معها؟", options: [{ text: "أقوم بتحليلها منطقياً وتقسيمها لخطوات", category: "tech" }, { text: "أبحث عن حل يفيد ويحمي الأشخاص المتضررين", category: "health" }, { text: "أفكر في كيفية تحويل المشكلة لفرصة للربح", category: "business" }, { text: "أبحث عن حل إبداعي وخارج الصندوق", category: "art" }] }
        ],
        universities: [{ id: 1, name: "جامعة هواري بومدين (USTHB)", wilaya: "الجزائر", type: "علوم وتكنولوجيا" }, { id: 2, name: "جامعة أبو بكر بلقايد", wilaya: "تلمسان", type: "متعددة التخصصات" }],
        schools: [{ id: 1, name: "المدرسة الوطنية العليا للإعلام الآلي (ESI)", wilaya: "الجزائر", type: "إعلام آلي" }, { id: 2, name: "المدرسة العليا للتجارة (ESC)", wilaya: "القليعة", type: "اقتصاد وتجارة" }]
    },

    init() {
        this.applyTheme(this.state.theme);
        this.renderUniversities();
        this.renderSchools();
        this.renderCareers();
        
        if (this.state.isLoggedIn) {
            this.updateAuthUI(this.state.userName);
        }
    },

    navigate(viewId) {
        document.querySelectorAll('.view-section').forEach(section => section.classList.remove('active'));
        const target = document.getElementById(viewId);
        if (target) {
            target.classList.add('active');
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
        // إغلاق القائمة في حال كانت مفتوحة
        const mobileMenu = document.getElementById('mobile-menu');
        if (mobileMenu) mobileMenu.classList.remove('active');
    },

    toggleTheme() {
        const newTheme = this.state.theme === "light" ? "dark" : "light";
        this.applyTheme(newTheme);
    },

    applyTheme(theme) {
        this.state.theme = theme;
        localStorage.setItem('wendo_theme', theme);
        document.documentElement.setAttribute('data-theme', theme);
        document.getElementById('theme-toggle').innerText = theme === "dark" ? "☀️" : "🌙";
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
        } else {
            emptyState.classList.add('hidden');
            grid.innerHTML = filtered.map(u => `
                <div class="data-card" onclick="app.showSpecialties('جامعة')" tabindex="0" role="button">
                    <div>
                        <h3>${u.name}</h3>
                        <p><i class="fas fa-map-marker-alt" style="margin-left: 5px;"></i> ${u.wilaya}</p>
                    </div>
                    <span class="tag">${u.type}</span>
                </div>
            `).join('');
        }
    },

    renderSchools(filtered = this.data.schools) {
        const grid = document.getElementById('schools-grid');
        const emptyState = document.getElementById('schools-empty');

        if (filtered.length === 0) {
            grid.innerHTML = '';
            emptyState.classList.remove('hidden');
        } else {
            emptyState.classList.add('hidden');
            grid.innerHTML = filtered.map(s => `
                <div class="data-card" onclick="app.showSpecialties('مدرسة عليا')" tabindex="0" role="button">
                    <div>
                        <h3>${s.name}</h3>
                        <p><i class="fas fa-map-marker-alt" style="margin-left: 5px;"></i> ${s.wilaya}</p>
                    </div>
                    <span class="tag">${s.type}</span>
                </div>
            `).join('');
        }
    },

    showSpecialties(context) {
        document.getElementById('specialties-title').innerText = `التخصصات المتاحة`;
        document.getElementById('specialties-grid').innerHTML = this.data.specialties.map(spec => `
            <div class="data-card" onclick="app.openSpecialtyModal(${spec.id})" tabindex="0" role="button">
                <div>
                    <h3>${spec.title}</h3>
                    <p><i class="far fa-clock" style="margin-left: 5px;"></i> ${spec.duration}</p>
                </div>
                <span class="tag">${spec.field}</span>
            </div>
        `).join('');
        this.navigate('specialties-view');
    },

    renderCareers() {
        const container = document.getElementById('careers-grid-container');
        container.innerHTML = this.data.careers.map(career => `
            <div class="career-card" tabindex="0">
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
        `).join('');
    },

    toggleCompare(careerId, event) {
        const isChecked = event.target.checked;
        if (isChecked) {
            if (this.state.selectedCareersForCompare.length >= 2) {
                this.showToast("يمكنك مقارنة مهنتين فقط في نفس الوقت.");
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
        if(this.state.quiz.scores[category] !== undefined) {
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
                    <div class="compare-item" style="cursor: pointer" onclick="app.openSpecialtyModal(${s.id})">
                        <strong style="color: var(--accent-color); font-size: 1.15rem;">${s.title}</strong>
                        <p style="font-size: 0.95rem; margin-top: 0.5rem; color: var(--text-secondary);">${s.desc}</p>
                    </div>
                `).join('') : '<p>لا توجد تخصصات مطابقة حالياً.</p>'}
            </div>
            <button class="primary-btn w-100 large" onclick="app.startQuiz()"><i class="fas fa-redo" style="margin-left: 8px;"></i> إعادة الاختبار</button>
        `;
    },

    getCategoryName(cat) {
        const names = { tech: "التكنولوجيا والهندسة", health: "العلوم الطبية والصحية", business: "الأعمال والتسويق", art: "الفنون والتصميم", humanities: "العلوم الإنسانية والقانونية" };
        return names[cat] || "متعدد التخصصات";
    },

    openModal(modalId) { document.getElementById(modalId).classList.add('active'); },
    closeModal(modalId) { document.getElementById(modalId).classList.remove('active'); },
    closeModalOutside(event, modalId) { if (event.target.id === modalId) this.closeModal(modalId); },

    openSpecialtyModal(id) {
        const spec = this.data.specialties.find(s => s.id === id);
        if(!spec) return;
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
            this.renderUniversities(this.data.universities.filter(u => u.name.toLowerCase().includes(lq) || u.wilaya.toLowerCase().includes(lq)));
        } else if (type === 'schools') {
            this.renderSchools(this.data.schools.filter(s => s.name.toLowerCase().includes(lq) || s.wilaya.toLowerCase().includes(lq)));
        }
    },

    updateAuthUI(name) {
        document.getElementById('nav-login-btn').classList.add('hidden');
        document.getElementById('nav-register-btn').classList.add('hidden');
        const userMenu = document.getElementById('nav-user-menu');
        userMenu.classList.remove('hidden');
        document.getElementById('user-greeting').innerText = `مرحباً، ${name}`;
        const dashBtn = document.getElementById('nav-dashboard-btn');
        if(dashBtn) dashBtn.classList.remove('hidden');
        const dashGreeting = document.getElementById('dashboard-greeting');
        if(dashGreeting) dashGreeting.innerText = `مرحباً بك يا ${name} في مساحتك الخاصة`;
        this.renderDashboard();
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
        this.showToast("تم تسجيل الدخول بنجاح!");
        this.navigate('dashboard-view');
    },

    simulateRegister(e) { 
        e.preventDefault(); 
        const nameInput = e.target.querySelector('input[type="text"]').value;
        this.state.isLoggedIn = true; 
        localStorage.setItem('wendo_user', nameInput);
        this.updateAuthUI(nameInput); 
        this.closeModal('register-modal'); 
        this.showToast("تم إنشاء الحساب بنجاح!");
        this.navigate('dashboard-view');
    }
};

document.addEventListener('DOMContentLoaded', () => app.init());
