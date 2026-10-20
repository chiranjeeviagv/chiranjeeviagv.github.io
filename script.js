document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Certification Data Map
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
        if (!data) return;
        displayContainer.innerHTML = `
            <h3>${data.title}</h3>
            <p style="margin-bottom: 12px; font-size:0.95rem;">${data.desc}</p>
            <a href="${data.url}" target="_blank" class="inline-link">🌐 Access Secure Verification Registry 🔗</a>
        `;
    }

    // Render first tab automatically on load
    renderTabContent('ibm-js');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderTabContent(tab.dataset.tab);
        });
    });

    // Filter Buttons Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseItems = document.querySelectorAll('#coursesContainer li');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const activeFilter = btn.dataset.filter;

            courseItems.forEach(item => {
                if (activeFilter === 'all' || item.dataset.cat === activeFilter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    // ==========================================
    // INTERACTIVE EXPERIENCE DASHBOARD LOGIC
    // ==========================================
    const experienceRepository = {
        'sitrc': {
            role: "Assistant Professor, EE (AIML)",
            institution: "Sandip Foundation's - Sandip Institute of Technology and Research Centre, Nashik, Maharashtra",
            duration: "📅 27-06-2025 to 31-05-2026",
            details: "Specialized focus handling advanced AI/ML implementations, expert computing systems validation, and departmental academic file management panels."
        },
        'gnit': {
            role: "Assistant Professor, EEE Department",
            institution: "Guru Nanak Institute of Technology, Ibrahimpatnam, Hyderabad",
            duration: "📅 16-02-2023 to 11-01-2025",
            details: "Instructed core power grid computing analysis, directed advanced system protection architectures, and executed student advisory panels."
        },
        'mrecw': {
            role: "Assistant Professor, EEE Department",
            institution: "Malla Reddy Engineering College for Women (A), MRGI, Secunderabad",
            duration: "📅 18-07-2022 to 15-02-2023",
            details: "Managed technical training certifications, laboratory assessments, and structured curriculum data matrices matching university compliance paths."
        },
        'aditya': {
            role: "Sr. Assistant Professor, EEE Department",
            institution: "Aditya College of Engineering, Surampalem, Andhra Pradesh",
            duration: "📅 22-11-2019 to 26-07-2021",
            details: "Assigned head senior responsibilities overseeing institutional exam branches, departmental timetables, and resource mapping operations."
        },
        'viit': {
            role: "Assistant Professor, EEE Department",
            institution: "Vignan's Institute of Information Technology (A), Visakhapatnam, Andhra Pradesh",
            duration: "📅 13-03-2015 to 04-11-2019",
            details: "Handled foundational engineering technology coursework, student research guidance programs, and institutional certification file auditing tasks."
        }
    };

    const expButtons = document.querySelectorAll('.exp-btn');
    const expDisplayBox = document.getElementById('experienceOutputBox');

    function updateExperienceView(profileKey) {
        const data = experienceRepository[profileKey];
        if (!data) return;

        expDisplayBox.innerHTML = `
            <h3>${data.role}</h3>
            <h4>${data.institution}</h4>
            <p style="font-weight: 600; font-size: 0.9rem; margin-bottom: 10px;">${data.duration}</p>
            <p style="font-size: 0.95rem; line-height: 1.5; opacity: 0.95;">${data.details}</p>
        `;
    }

    // Automatically load the newest professional role on page launch
    updateExperienceView('sitrc');

    expButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            expButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateExperienceView(btn.dataset.exp);
        });
    });

    // Toggle Expandable Panels
    const interactionButtons = document.querySelectorAll('.ref-btn');
    interactionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetElementId = button.getAttribute('data-target');
            const targetElement = document.getElementById(targetElementId);
            targetElement.classList.toggle('hidden');
        });
    });
});
