// Theme Toggle Engineconst themeBtn = document.querySelector('.theme-toggle-btn') || document.getElementById('theme-toggle');if (themeBtn) { themeBtn.addEventListener('click', () => { document.body.classList.toggle('dark-theme'); // Save the choice in local storage const isDark = document.body.classList.contains('dark-theme'); localStorage.setItem('cv-theme', isDark ? 'dark' : 'light'); });}// Check and apply saved theme layout on startupif (localStorage.getItem('cv-theme') === 'dark') { document.body.classList.add('dark-theme');}// Course Domain Selection Filterconst filterBtns = document.querySelectorAll('.filter-btn');const courses = document.querySelectorAll('.courses-list li');filterBtns.forEach(btn => { btn.addEventListener('click', () => { // Remove active styles from other buttons document.querySelector('.filter-btn.active')?.classList.remove('active'); btn.classList.add('active'); const choice = btn.getAttribute('data-domain'); courses.forEach(course => { const category = course.getAttribute('data-category'); if (choice === 'all' || category === choice) { course.style.display = 'list-item'; } else { course.style.display = 'none'; } }); });});// Object Dataset holding your certification detailsconst certificationData = { 'ibm-fullstack': { title: 'IBM Full Stack Developer Certificate', desc: 'Advanced software development lifecycle tracking, cloud-native building, and JavaScript backend deployment paradigms.', link: 'https://coursera.org' }, 'microsoft-ai': { title: 'Microsoft AI & ML Engineering', desc: 'Covering model architecture training, cloud intelligence models, and cognitive compute tooling systems.', link: 'https://microsoft.com' }};// Event Handler to inject content dynamically function loadCredential(certId) { const panel = document.getElementById('credential-display-panel'); const data = certificationData[certId]; if (panel && data) { document.getElementById('display-title').textContent = data.title; document.getElementById('display-details').textContent = data.desc; document.getElementById('display-link').href = data.link; panel.style.display = 'block'; // Make container visible panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' }); }}// Hooking it up to a button event handler example// <button onclick="loadCredential('ibm-fullstack')">IBM Full Stack Developer</button>document.addEventListener('DOMContentLoaded', () => { // Theme Toggle Logic const themeToggle = document.getElementById('themeToggle'); themeToggle.addEventListener('click', () => { document.body.classList.toggle('dark-mode'); }); // Certification Data Map const certificationData = { 'ibm-js': { title: "IBM Full Stack JavaScript Developer (12-Course Series)", desc: "Specialization targeting React engineering, asynchronous JavaScript engines, Node.js infrastructure, Express.js microservices, NoSQL databases, and serverless pipelines.", url: "https://www.coursera.org/account/accomplishments/specialization/L2Q2VEP5W243" }, 'ms-ai': { title: "Microsoft AI and ML Engineering Professional Certificate (5 Courses)", desc: "Validation of architectural expertise in foundations of Machine Learning modeling, algorithms, intelligent agents, and Azure ML pipelines.", url: "https://www.coursera.org/account/accomplishments/specialization/certificate/5SGHZ101WA4W" }, 'ibm-ai': { title: "IBM AI Developer Professional Certification (10-Course Series)", desc: "Expertise validation focusing on Applied Systems Engineering, foundational Python architectures, Flask integration structures, and deploying Generative AI large language model pipelines safely.", url: "https://coursera.org/verify/professional-cert/E06UAT9KFM8S" }, 'ibm-java': { title: "IBM Java Developer Certification (14-Course Series)", desc: "Deep focus on object-oriented software engineering principles, Java design patterns, automated unit testing matrices, Spring Boot application frameworks, and enterprise database mapping layers.", url: "https://coursera.org/verify/professional-cert/CGMXJ0SN33A5" }, 'ibm-backend': { title: "IBM JavaScript Backend Developer Certification (13 Courses)", desc: "Asynchronous backend platform design utilizing Node.js & MongoDB ecosystems, container configurations via Docker, Kubernetes orchestrations, application layer tracking, observability frameworks, and robust software security.", url: "https://www.coursera.org/account/accomplishments/specialization/certificate/R9G3UO4SYXJM" }, 'google-cyber': { title: "Google Cybersecurity Certification (9-Course Series)", desc: "System defense strategies targeting asset and network vulnerability mitigation, Linux configuration operations, automated system auditing with Python scripting, threat analysis, and security incident response matrix.", url: "https://coursera.org/verify/professional-cert/SZEO3FT6Q193" }, 'nptel': { title: "NPTEL Advanced Academic Certifications", desc: "Rigorous analytical courses from top engineering institutes: Advanced Computer Architecture (2026), Advanced Computer Networks (2025), Practical Cybersecurity Frameworks (2024), Cloud and Big Data Computing (2023-2024), and Smart Grid Engineering integrations.", url: "https://google.com" } }; const tabs = document.querySelectorAll('.tab-btn'); const displayContainer = document.getElementById('tabContentPlaceholder'); function renderTabContent(key) { const data = certificationData[key]; if (!data) return; displayContainer.innerHTML = ` <h3>${data.title}</h3> <p style="margin-bottom: 12px; font-size:0.95rem;">${data.desc}</p> <a href="${data.url}" target="_blank" class="inline-link">🌐 Access Secure Verification Registry 🔗</a> `; } // Render first tab automatically on load renderTabContent('ibm-js'); tabs.forEach(tab => { tab.addEventListener('click', () => { tabs.forEach(t => t.classList.remove('active')); tab.classList.add('active'); renderTabContent(tab.dataset.tab); }); }); // Filter Buttons Logic const filterButtons = document.querySelectorAll('.filter-btn'); const courseItems = document.querySelectorAll('#coursesContainer li'); filterButtons.forEach(btn => { btn.addEventListener('click', () => { filterButtons.forEach(b => b.classList.remove('active')); btn.classList.add('active'); const activeFilter = btn.dataset.filter; courseItems.forEach(item => { if (activeFilter === 'all' || item.dataset.cat === activeFilter) { item.style.display = 'block'; } else { item.style.display = 'none'; } }); }); }); is this correct

// ============================================================================
// 🌓 MODULE 1: GLOBAL THEME TOGGLE ENGINE
// ============================================================================
const themeBtn = document.querySelector('.theme-toggle-btn') || document.getElementById('theme-toggle');

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('cv-theme', isDark ? 'dark' : 'light');
  });
}

if (localStorage.getItem('cv-theme') === 'dark') {
  document.body.classList.add('dark-theme');
}

// ============================================================================
// 🚀 MAIN PORTFOLIO ENGINE (DOM LOADED SETUP)
// ============================================================================
document.addEventListener('DOMContentLoaded', () => {
    
    // --- 1. THEME TOGGLE EXTENSION ---
    const themeToggle = document.getElementById('themeToggle');
    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
        });
    }

    // --- 2. DYNAMIC CERTIFICATIONS DIRECTORY MAP ---
    const certificationData = {
        'ibm-js': {
            title: "IBM Full Stack JavaScript Developer (12-Course Series)",
            desc: "Specialization targeting React engineering, asynchronous JavaScript engines, Node.js infrastructure, Express.js microservices, NoSQL databases, and serverless pipelines.",
            url: "https://www.coursera.org/account/accomplishments/specialization/L2Q2VEP5W243"
        },
        'ms-ai': {
            title: "Microsoft AI and ML Engineering Professional Certificate (5 Courses)",
            desc: "Validation of architectural expertise in foundations of Machine Learning modeling, algorithms, intelligent agents, and Azure ML pipelines.",
            url: "https://www.coursera.org/account/accomplishments/specialization/certificate/5SGHZ101WA4W"
        },
        'ibm-ai': {
            title: "IBM AI Developer Professional Certification (10-Course Series)",
            desc: "Expertise validation focusing on Applied Systems Engineering, foundational Python architectures, Flask integration structures, and deploying Generative AI large language model pipelines safely.",
            url: "https://coursera.org/verify/professional-cert/E06UAT9KFM8S"
        },
        'ibm-java': {
            title: "IBM Java Developer Certification (14-Course Series)",
            desc: "Deep focus on object-oriented software engineering principles, Java design patterns, automated unit testing matrices, Spring Boot application frameworks, and enterprise database mapping layers.",
            url: "https://coursera.org/verify/professional-cert/CGMXJ0SN33A5"
        },
        'ibm-backend': {
            title: "IBM JavaScript Backend Developer Certification (13 Courses)",
            desc: "Asynchronous backend platform design utilizing Node.js & MongoDB ecosystems, container configurations via Docker, Kubernetes orchestrations, application layer tracking, observability frameworks, and robust software security.",
            url: "https://www.coursera.org/account/accomplishments/specialization/certificate/R9G3UO4SYXJM"
        },
        'google-cyber': {
            title: "Google Cybersecurity Certification (9-Course Series)",
            desc: "System defense strategies targeting asset and network vulnerability mitigation, Linux configuration operations, automated system auditing with Python scripting, threat analysis, and security incident response matrix.",
            url: "https://coursera.org/verify/professional-cert/SZEO3FT6Q193"
        },
        'nptel': {
            title: "NPTEL Advanced Academic Certifications",
            desc: "Rigorous analytical courses from top engineering institutes: Advanced Computer Architecture (2026), Advanced Computer Networks (2025), Practical Cybersecurity Frameworks (2024), Cloud and Big Data Computing (2023-2024), and Smart Grid Engineering integrations.",
            url: "https://google.com"
        }
    };

    const tabs = document.querySelectorAll('.tab-btn');
    const displayContainer = document.getElementById('tabContentPlaceholder');

    function renderTabContent(key) {
        const data = certificationData[key];
        if (!data || !displayContainer) return;
        displayContainer.innerHTML = `
            <h3>${data.title}</h3>
            <p style="margin-bottom: 12px; font-size:0.95rem;">${data.desc}</p>
            <a href="${data.url}" target="_blank" class="inline-link">🌐 Access Secure Verification Registry 🔗</a>
        `;
    }

    if (displayContainer) {
        renderTabContent('ibm-js');
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderTabContent(tab.dataset.tab);
        });
    });

    // --- 3. CORRECTED COURSE FILTRATION MODULE ---
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseItems = document.querySelectorAll('#coursesContainer li');
    const courseNotice = document.getElementById('course-placeholder-notice');

    // ⚡ FIX: IMMEDIATELY FORCE HIDE ALL COURSES UPON INITIAL LANDING
    if (courseItems.length > 0) {
        courseItems.forEach(item => {
            item.style.display = 'none';
        });
    }

    // ⚡ FIX: ENSURE NO BUTTONS ARE PRE-HIGHLIGHTED WHILE THE LIST IS BLANK
    filterButtons.forEach(b => b.classList.remove('active'));

    // Setup interactive toggle event handlers
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            
            // Hide the informational guide notice banner immediately on click
            if (courseNotice) {
                courseNotice.style.display = 'none';
            }

            // Sync active visual display highlights across controls
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const activeFilter = btn.dataset.filter;

            courseItems.forEach(item => {
                if (activeFilter === 'all' || item.dataset.cat === activeFilter) {
                    item.style.display = 'list-item'; // Displays clean list items
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
});
