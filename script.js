// Local databases for dynamic data swapping
const educationData = {
    mtech: { title: "M.Tech (High Voltage Engineering)", inst: "JNTU, Kakinada (2012)", score: "Passed with Distinction — 72%" },
    btech: { title: "B.Tech (Electrical & Electronics Engineering)", inst: "Chaitanya Engg. College, Visakhapatnam (2007)", score: "Passed with Distinction — 71.63%" },
    inter: { title: "Intermediate (MPC Spectrum)", inst: "Gayatri Junior College, Vizianagaram (2003)", score: "Passed First Class Matrix" },
    ssc: { title: "Secondary School Certificate (SSC)", inst: "ZP High School, Jami, Vizianagaram (2001)", score: "Passed First Class Matrix" }
};

const certificationData = {
    'ibm-fs': {
        title: "IBM Full Stack Javascript Developer Professional Certification",
        meta: "Issued September 2026 (12-course series)",
        link: "https://coursera.org",
        lines: ["Introduction to Software Engineering", "Introduction to HTML, CSS, & JavaScript", "Getting Started with Git and GitHub", "JavaScript Programming Essentials", "Developing Front-End Apps with React", "Developing Back-End Apps with Node.js and Express", "Get Started with Cloud Native, DevOps, Agile, and NoSQL", "Introduction to Containers w/ Docker, Kubernetes & OpenShift", "Application Development using Microservices and Serverless", "Node.js & MongoDB: Developing Back-end Database Applications", "JavaScript Full Stack Capstone Project", "Software Developer Career Guide and Interview Preparation"]
    },
    'ms-ai': {
        title: "Microsoft AI and ML Engineering Professional Certificate",
        meta: "Issued July 2026 (5 course series)",
        link: "https://coursera.org",
        lines: ["Foundations of AI and Machine Learning", "AI and Machine Learning Algorithms and Techniques", "Building Intelligent Troubleshooting Agents", "Microsoft Azure for AI and Machine Learning", "Advanced AI and Machine Learning Techniques and Capstone"]
    },
    'ibm-ai': {
        title: "IBM AI Developer Professional Certification",
        meta: "Issued June 2026 (10-course series)",
        link: "https://coursera.org",
        lines: ["Introduction to software engineering", "Introduction to AI by IBM, March 2026", "Generative AI introduction and applications", "Introduction to HTML, CSS and Javascript", "Python for data science, AI and development", "Developing AI Applications with Python and Flask", "Building Generative AI-Powered Applications with Python", "Generative AI: Elevate your software development career", "Software developer career guide"]
    },
    'ibm-java': {
        title: "IBM Java Developer Professional Certification",
        meta: "Issued July 2026 (14 course series)",
        link: "https://coursera.org",
        lines: ["Introduction to Software Engineering", "Java Programming for Beginners", "Object Oriented Programming in Java", "Java App Development Project: Fundamentals, OOP & File I/O", "Introduction to HTML, CSS, & JavaScript", "Getting Started with Git and GitHub", "Spring Framework for Java Development", "Java Development with Databases", "Cloud Native, Microservices, Containers, DevOps and Agile", "Java: Design Patterns, Testing, and Deployment", "Java Development Capstone Project", "Generative AI: Elevate your Software Development Career", "Generative AI for Java and Spring Development", "Software Developer Career Guide and Interview Preparation"]
    },
    'ibm-js-back': {
        title: "IBM Javascript Backend Developer Professional Certificate",
        meta: "Issued August 2026 (13 course series)",
        link: "https://coursera.org",
        lines: ["Introduction to Software Engineering", "Introduction to HTML, CSS, & JavaScript", "Getting Started with Git and GitHub", "JavaScript Programming Essentials", "Developing Back-End Apps with Node.js and Express", "Get Started with Cloud Native, DevOps, Agile, and NoSQL", "Introduction to Containers w/ Docker, Kubernetes & OpenShift", "Application Development using Microservices and Serverless", "Node.js & MongoDB: Developing Back-end Database Applications", "Application Security for Developers and DevOps Professionals", "Monitoring and Observability for Development and DevOps", "JavaScript Back-end Capstone Project", "Software Developer Career Guide and Interview Preparation"]
    },
    'google-cyber': {
        title: "Google Cybersecurity Professional Certificate",
        meta: "Issued July 2026 (9-course series)",
        link: "https://coursera.org",
        lines: ["Foundations of Cybersecurity", "Play It Safe: Manage Security Risks", "Connect and Protect: Networks and Network Security Tools", "Tools of the Trade: Linux and SQL", "Assets, Threats, and Vulnerabilities", "Sound the Alarm: Detection and Response", "Automate Cybersecurity Tasks with Python", "Put It to Work: Prepare for Cybersecurity Jobs", "Accelerate Your Job Search with AI"]
    },
    'nptel-cred': {
        title: "National Programme on Technology Enhanced Learning (NPTEL)",
        meta: "National Certification Portfolios (2022 - 2026)",
        link: "https://nptel.ac.in",
        lines: ["Advanced Computer Architecture (April 2026)", "Advanced Computer Networks (April 2025)", "Practical Cybersecurity for Practitioners (July-Oct 2024)", "Cloud Computing (July-Oct 2024)", "Big Data Computing (August-October 2023)", "Ethics in Engineering Practice (October 2023)", "Introduction to Smart Grid (July-Sep 2022)"]
    }
};

const experienceData = {
    viit: { title: "Assistant Professor — EEE Department", inst: "Vignan’s Institute of Information Technology(A), Visakhapatnam", range: "Timeline: 13-03-2015 to 04-11-2029" },
    sitrc: { title: "Assistant Professor — EE(AIML) Department", inst: "Sandip Institute of Technology & Research Centre, Nashik, MH", range: "Timeline: 27-6-2025 to 31-5-2026" },
    gnit: { title: "Assistant Professor — EEE Department", inst: "Guru Nanak Institute of Technology, Ibrahimpatnam, Hyderabad", range: "Timeline: 16-02-23 to 11-01-2025" },
    mrecw: { title: "Assistant Professor — EEE Department", inst: "Malla Reddy Engineering College for Women(A), Secunderabad", range: "Timeline: 18-07-22 to 15-2-2023" },
    aditya: { title: "Sr. Assistant Professor — EEE Department", inst: "Aditya College of Engineering, Surampalem, Andhra Pradesh", range: "Timeline: 22-11-2019 to 26-7-2021" }
};

// Toggle Theme System Engine
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
});

// Sync Active Button Classes Utility
function syncButtons(buttonGroupClass, clickedButton) {
    const parent = clickedButton.parentElement;
    parent.querySelectorAll('.' + buttonGroupClass).forEach(btn => btn.classList.remove('active'));
    clickedButton.classList.add('active');
}

// Education Display Swapper
function showEducation(key, btn) {
    syncButtons('btn-interactive', btn);
    const box = document.getElementById('education-display-box');
    box.innerHTML = `
        <h4>${educationData[key].title}</h4>
        <p class="inst-lbl">${educationData[key].inst}</p>
        <span class="status-badge-pill">${educationData[key].score}</span>
    `;
}

// Certification Directory Loader
function showCertification(key, btn) {
    syncButtons('btn-badge', btn);
    const box = document.getElementById('certification-display-box');
    const data = certificationData[key];
    const listHtml = data.lines.map(line => `<li>${line}</li>`).join('');
    box.innerHTML = `
        <h4>${data.title}</h4>
        <p class="meta-date-stamp"><i class="fas fa-calendar-alt"></i> ${data.meta}</p>
        <ul class="syllabus-points-list">${listHtml}</ul>
        <a id="cert-verify-anchor" href="${data.link}" target="_blank" class="link-verify">Verify Credential Link <i class="fas fa-external-link-alt"></i></a>
    `;
}

// Experience Window Loader
function showExperience(key, btn) {
    syncButtons('btn-interactive', btn);
    const box = document.getElementById('experience-display-box');
    box.innerHTML = `
        <h4>${experienceData[key].title}</h4>
        <h5>${experienceData[key].inst}</h5>
        <p class="date-range-sub"><i class="fas fa-clock"></i> ${experienceData[key].range}</p>
    `;
}

// Courses Domain Filtering Engine
function filterCourses(specialty, btn) {
    syncButtons('btn-tab', btn);
    const items = document.querySelectorAll('#courses-grid-container .grid-item');
    items.forEach(item => {
        if (specialty === 'all' || item.getAttribute('data-specialty') === specialty) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Literature Section Panel Swapper
function toggleLiterature(id, btn) {
    btn.parentElement.querySelectorAll('.btn-control').forEach(b => b.classList.remove('toggle-btn-active'));
    btn.classList.add('toggle-btn-active');
    
    document.querySelectorAll('.lit-content-block').forEach(block => block.classList.remove('active-block'));
    document.getElementById('lit-' + id).classList.add('active-block');
}

// Conferences Dynamic Panel Switcher
function showConference(id, btn) {
    syncButtons('btn-interactive', btn);
    const box = document.getElementById('conference-display-box');
    if (id === 'icmmse') {
        box.innerHTML = `<h4>5th International E-Conference on Mechanical and Material Science Engineering (ICMMSE:IR)</h4>
                         <p>Presented: "System knowledge for digital twin technologies in Industry 4.0 and Industry 5.0"</p>
