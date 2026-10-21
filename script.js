/**
 * G V Chiranjeevi Adari - Complete Interactive CV Script File
 * Core Architecture: All dynamic filter lists and tab content display panels 
 * start fully hidden until an explicit user click interaction occurs.
 */

// --- 1. DYNAMIC DATA CONFIGURATIONS ---
const EDUCATION_DB = {
    mtech: {
        title: "Master of Technology (M.Tech) in High Voltage Engineering",
        institution: "JNTU Kakinada University Portfolio",
        timeline: "Graduated: 2012",
        details: "Specialized in advanced electrical physics, insulation coordination, dielectric breakdowns, and high-voltage testing matrices."
    },
    btech: {
        title: "Bachelor of Technology (B.Tech) in Electrical & Electronics Engineering",
        institution: "JNTU Kakinada Affiliated System",
        timeline: "Graduated: 2007",
        details: "Core focus on Power Systems, Electrical Machines, Control Systems, Transmission systems, and Electronic Circuits."
    },
    intermediate: {
        title: "Intermediate Education (Board of Intermediate Education)",
        institution: "MPC Stream (Maths, Physics, Chemistry)",
        timeline: "Completed: 2003",
        details: "Foundational higher secondary education specializing in analytical sciences and advanced mathematics."
    },
    ssc: {
        title: "Secondary School Certificate (SSC)",
        institution: "State Board of Secondary Education",
        timeline: "Completed: 2001",
        details: "General secondary education certification with distinction across mathematics and scientific subjects."
    }
};

const CERTIFICATIONS_DB = {
    "ibm-js": { title: "IBM Full Stack Developer", link: "#", desc: "Enterprise cloud application architecture, deployment, front-end structures, and backend databases." },
    "ms-ai": { title: "Microsoft AI & ML Engineering", link: "#", desc: "Machine Learning models, Cognitive Services, Azure AI engineering infrastructure, and predictive analytics." },
    "ibm-ai": { title: "IBM AI Developer", link: "#", desc: "Generative AI applications, deep learning workflows, prompt engineering, and model deployment." },
    "ibm-java": { title: "IBM Java Developer", link: "#", desc: "Object-oriented program designs, multi-threading architectures, robust software engineering foundations, and data structures." },
    "ibm-backend": { title: "IBM Backend Javascript Developer", link: "#", desc: "Node.js engineering, Express routing matrices, RESTful API structures, and structural asynchronous architectures." },
    "google-cyber": { title: "Google Cybersecurity Professional", link: "#", desc: "Threat management models, network defense systems, Python code automation for security compliance, and Linux forensics." },
    "nptel": { title: "NPTEL Advanced Credentials", link: "#", desc: "Elite certifications including Big Data Computing (IIT Patna) and Ethics in Engineering Practice (IIT Kharagpur)." }
};

const EXPERIENCE_DB = {
    sitrc: {
        role: "Professor / Academic Professional",
        institution: "Sandip Institute of Technology & Research Centre (SITRC), Nashik",
        timeline: "2025 - 2026",
        achievements: "Handled advanced courses, outcome-based engineering modules, and coordinated high-level curriculum alignment structures."
    },
    gnit: {
        role: "Associate Professor / Faculty Member",
        institution: "Guru Nanak Institutions Technical Campus (GNIT)",
        timeline: "2023 - 2025",
        achievements: "Managed student engineering vectors, course files preparations, and continuous evaluation systems implementations."
    },
    mrecw: {
        role: "Assistant Professor",
        institution: "Malla Reddy Engineering College for Women (MRECW), Hyderabad",
        timeline: "2022 - 2023",
        achievements: "Department Examination branch operations management, JNTUH administrative compliance, and academic delivery."
    },
    aditya: {
        role: "Assistant Professor / Academic Leader",
        institution: "Aditya College of Engineering & Technology",
        timeline: "2019 - 2021",
        achievements: "Led student body tech activities, NBA accreditation documentation pipelines, and embedded lab evaluations."
    },
    viit: {
        role: "Assistant Professor (EEE Core)",
        institution: "Vignan's Institute of Information Technology (VIIT), Visakhapatnam",
        timeline: "2015 - 2019",
        achievements: "9+ Years Post-M.Tech milestone foundation. Recipient of the prestigious Pratibha Award (2016-17). Department timetable management."
    }
};

// --- 2. APPLICATION BOOTSTRAPPING ENGINE ---
document.addEventListener("DOMContentLoaded", () => {
    initThemeToggle();
    initEducationPanel();
    initCertificationsTabs();
    initExperiencePanel();
    initCourseFiltering();
    initFdpFiltering();
});

/**
 * 1. Dark/Light Theme Switching Framework
 */
function initThemeToggle() {
    const toggleBtn = document.getElementById("themeToggle");
    if (!toggleBtn) return;
    if (localStorage.getItem("theme") === "dark") {
        document.body.classList.add("dark-theme");
    }
    toggleBtn.addEventListener("click", () => {
        document.body.classList.toggle("dark-theme");
        localStorage.setItem("theme", document.body.classList.contains("dark-theme") ? "dark" : "light");
    });
}

/**
 * 2. Education Summary Node Manager
 */
function initEducationPanel() {
    const outputBox = document.getElementById("educationOutputBox");
    const buttons = document.querySelectorAll("[data-edu]");
    if (!outputBox) return;

    // Reset initial landing view to an empty layout state notice
    outputBox.innerHTML = `<div class="placeholder-notice">ℹ️ Click a milestone button above to view academic credentials.</div>`;
    buttons.forEach(b => b.classList.remove("active"));

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const data = EDUCATION_DB[btn.getAttribute("data-edu")];
            if (!data) return;
            outputBox.innerHTML = `
                <div class="display-card entry-animate">
                    <h3>${data.title}</h3>
                    <h4>${data.institution}</h4>
                    <span class="timeline-badge">${data.timeline}</span>
                    <p>${data.details}</p>
                </div>
            `;
        });
    });
}

/**
 * 3. Interactive Certifications Tab Controller
 */
function initCertificationsTabs() {
    const placeholder = document.getElementById("tabContentPlaceholder");
    const buttons = document.querySelectorAll("[data-tab]");
    if (!placeholder) return;

    // Hide contents on startup
    placeholder.innerHTML = `<div class="placeholder-notice">🔍 Click any certification badge above to view verification data.</div>`;
    buttons.forEach(b => b.classList.remove("active"));

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const data = CERTIFICATIONS_DB[btn.getAttribute("data-tab")];
            if (!data) return;
            placeholder.innerHTML = `
                <div class="cert-card entry-animate">
                    <h3>${data.title}</h3>
                    <p>${data.desc}</p>
                    <a href="${data.link}" target="_blank" class="verify-link">Verify Credential Link 🔗</a>
                </div>
            `;
        });
    });
}

/**
 * 4. Academic Employment History Profile Renderer
 */
function initExperiencePanel() {
    const outputBox = document.getElementById("experienceOutputBox");
    const buttons = document.querySelectorAll("[data-exp]");
    if (!outputBox) return;

    // Force clear view layer contents on initial browser loading cycles
    outputBox.innerHTML = `<div class="placeholder-notice">ℹ️ Select an institution timeline above to open role profiles.</div>`;
    buttons.forEach(b => b.classList.remove("active"));

    buttons.forEach(btn => {
        btn.addEventListener("click", () => {
            buttons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            
            const data = EXPERIENCE_DB[btn.getAttribute("data-exp")];
            if (!data) return;
            outputBox.innerHTML = `
                <div class="display-card entry-animate">
                    <h3>${data.role}</h3>
                    <h4>${data.institution}</h4>
                    <span class="timeline-badge">${data.timeline}</span>
                    <p class="achievements-text"><strong>Key Scope:</strong> ${data.achievements}</p>
                </div>
            `;
        });
    });
}

/**
 * 5. Course Subspecialty Domain Filtering Module
 */
function initCourseFiltering() {
    const filterButtons = document.querySelectorAll("[data-course-filter]");
    const coursesContainer = document.getElementById("coursesContainer");
    const placeholderNotice = document.getElementById("course-placeholder-notice");
    
    if (!coursesContainer) return;

    // Force absolute hidden status on startup
    const courseItems = coursesContainer.querySelectorAll("li");
    courseItems.forEach(item => item.style.display = "none");
    filterButtons.forEach(b => b.classList.remove("active"));

    filterButtons.forEach(btn => {
        btn.addEventListener("click", () => {
            filterButtons.forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const selectedFilter = btn.getAttribute("data-course-filter");
            if (placeholderNotice) placeholderNotice.style.display = "none";

            courseItems.forEach(item => {
                const itemCategory = item.getAttribute("data-ccat");
