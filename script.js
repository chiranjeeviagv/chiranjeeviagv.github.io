// ==========================================
// 1. DATA AND VIEW PORTFOLIO VARIABLES
// ==========================================
const objectives = {
    academic: "Seeking a challenging position in an academic institution to leverage research, teaching methodology, and institutional development expertise.",
    industry: "An Electrical Engineer and Software professional, forever a student, dreaming for a career in a nice environment which is technically and ethically developed."
};

let currentActiveView = 'academic';

// ==========================================
// 2. CENTRAL MATRIX SWITCHING ENGINE
// ==========================================
function switchView(viewMode) {
    currentActiveView = viewMode;
    
    const academicElements = document.querySelectorAll('.academic-only');
    const industryElements = document.querySelectorAll('.industry-only');
    const objText = document.getElementById('objective-text');
    
    const btnAcademic = document.getElementById('btn-academic');
    const btnIndustry = document.getElementById('btn-industry');

    if (viewMode === 'academic') {
        // Toggle view classes
        academicElements.forEach(el => el.classList.remove('hidden-view'));
        industryElements.forEach(el => el.classList.add('hidden-view'));
        
        // Update header interactive classes
        if (objText) objText.textContent = objectives.academic;
        btnAcademic?.classList.add('active');
        btnIndustry?.classList.remove('active');
    } else {
        // Toggle view classes
        academicElements.forEach(el => el.classList.add('hidden-view'));
        industryElements.forEach(el => el.classList.remove('hidden-view'));
        
        // Update header interactive classes
        if (objText) objText.textContent = objectives.industry;
        btnIndustry?.classList.add('active');
        btnAcademic?.classList.remove('active');
    }
}

// ==========================================
// 3. EVENT ROUTING REGISTRATION RUNNER
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
    // Primary Header Tab Toggle Triggers
    document.getElementById('btn-academic')?.addEventListener('click', () => switchView('academic'));
    document.getElementById('btn-industry')?.addEventListener('click', () => switchView('industry'));

    // Dynamic Action Grid Button Triggers
    document.querySelectorAll('.explore-btn').forEach(btn => {
        btn.addEventListener('click', (event) => {
            const sectionKey = event.currentTarget.getAttribute('data-section');
            handleExploreClick(sectionKey);
        });
    });

    // Academic Strengths Custom Card Inline Toggle
    const strengthsList = document.querySelector('.strengths-list');
    const strengthsBtn = document.querySelector('.strengths-toggle-btn');
    
    if (strengthsList && strengthsBtn) {
        strengthsList.style.setProperty('display', 'none', 'important');
        
        strengthsBtn.addEventListener('click', (event) => {
            event.stopPropagation();
            if (strengthsList.style.display === 'none') {
                strengthsList.style.setProperty('display', 'block', 'important');
                strengthsBtn.textContent = 'Show Less';
            } else {
                strengthsList.style.setProperty('display', 'none', 'important');
                strengthsBtn.textContent = 'Explore More';
            }
        });
    }

    // Modal Display Interaction Buttons
    document.getElementById('close-modal-btn')?.addEventListener('click', closeModal);
    
    const modalOverlay = document.getElementById('details-modal');
    modalOverlay?.addEventListener('click', (event) => {
        if (event.target === modalOverlay) closeModal();
    });

    // Enforce initial application load states instantly
    switchView('academic');
});

// ==========================================
// 4. MODAL ROUTER DISPATCH MATRIX
// ==========================================
function handleExploreClick(sectionKey) {
    switch (sectionKey) {
        case 'qualifications': showQualificationsModal(); break;
        case 'certifications': showCertificationsModal(); break;
        case 'experience': showExperienceModal(); break;
        case 'publications': showPublicationsModal(); break;
        case 'fdps': showDevelopmentProgramsModal(); break;
        case 'references': showReferencesModal(); break;
        case 'expertise': showExpertiseModal(); break;
        case 'skills': showSkillsModal(); break;
        case 'conferences': showConferencesModal(); break;
        default: console.warn(`Unregistered explore section target key parsed: ${sectionKey}`);
    }
}

// ==========================================
// 5. WINDOW FRAME CONTAINER CONTROLLERS
// ==========================================
function openHTMLModal(title, htmlContent) {
    const modal = document.getElementById('details-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    if (modal && modalTitle && modalBody) {
        modalTitle.innerText = title;
        modalBody.innerHTML = htmlContent;
        modal.classList.remove('hidden-view');
        document.body.style.overflow = 'hidden'; 
    }
}

// Unified frame teardown logic clearing memory artifacts
function closeModal() {
    const modal = document.getElementById('details-modal');
    const modalBody = document.getElementById('modal-body');
    if (modal) {
        modal.classList.add('hidden-view');
        if (modalBody) modalBody.innerHTML = '';
        document.body.style.overflow = '';
    }
}

// ==========================================
// 6. RICH TEXT MODAL POPUP DATA RECORDS
// ==========================================
function showQualificationsModal() {
    const qualificationsHTML = `
        <div class="modal-credentials-layout">
            <table class="modal-data-table">
                <thead>
                    <tr><th>Qualification Matrix</th><th>Institution / Board</th><th>Performance Marks</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>M.Tech (High Voltage Engineering)</strong></td><td>JNTU Kakinada</td><td>72.00% (Distinction)</td></tr>
                    <tr><td><strong>B.Tech (Electrical & Electronics)</strong></td><td>Chaitanya Engineering College</td><td>71.63% (Distinction)</td></tr>
                    <tr><td><strong>Intermediate (MPC Core Tracks)</strong></td><td>Gayatri Junior College</td><td>94.10% (First Class)</td></tr>
                    <tr><td><strong>SSC Standard Certification</strong></td><td>ZP High School, Jami</td><td>89.86% (First Class)</td></tr>
                </tbody>
            </table>
        </div>`;
    openHTMLModal('Qualifications Records', qualificationsHTML);
}

function showCertificationsModal() {
    const certificationsHTML = `
        <div class="modal-credentials-layout" style="text-align:left; line-height:1.8;">
            <h4 style="color:#007bff; margin-bottom:8px;">Coursera Certified Track Portfolios:</h4>
            <ul style="padding-left:20px; margin-bottom:15px;">
                <li>IBM Full Stack JavaScript Developer (12-Course Professional Specialization)</li>
                <li>IBM JavaScript Backend Developer Specialization (13-Course Specialization)</li>
                <li>IBM AI Developer Specialization Badge (10-Course Specialization)</li>
                <li>Microsoft AI and ML Engineering Professional Specialization Suite (5 Courses)</li>
                <li>Google Cyber Security Operations Professional Credential</li>
            </ul>
            <h4 style="color:#007bff; margin-bottom:8px;">NPTEL Advanced Systems Accreditations:</h4>
            <ul style="padding-left:20px;">
                <li>Advanced Computer Architecture Engineering Core Track (April 2026)</li>
                <li>Advanced Computer Networks Systems Architecture Track (April 2025)</li>
                <li>Cloud Computing Frameworks and Operations Portfolio (Oct 2024)</li>
                <li>Big Data Distributed Architecture Analytics (Oct 2023)</li>
            </ul>
        </div>`;
    openHTMLModal('Advanced Certifications & Up-Skilling Logs', certificationsHTML);
}

function showExperienceModal() {
    const experienceHTML = `
        <div class="modal-credentials-layout">
            <table class="modal-data-table">
                <thead>
                    <tr><th>Designation Track Role</th><th>Institution / University</th><th>Service Tenure Duration</th></tr>
                </thead>
                <tbody>
                    <tr><td><strong>Assistant Professor (AI & ML)</strong></td><td>SITRC (Sandip University), Nashik</td><td>June 2025 – May 2026</td></tr>
                    <tr><td><strong>Assistant Professor (EEE Core)</strong></td><td>Guru Nanak Institute (Autonomous), Hyd</td><td>Feb 2023 – Jan 2025</td></tr>
                    <tr><td><strong>Assistant Professor (EEE Core)</strong></td><td>Malla Reddy Eng College for Women</td><td>July 2022 – Feb 2023</td></tr>
                    <tr><td><strong>Senior Assistant Professor (EEE)</strong></td><td>Aditya College of Engineering</td><td>Nov 2019 – July 2021</td></tr>
                    <tr><td><strong>Assistant Professor (EEE Department)</strong></td><td>Vignan’s VIIT (Autonomous), Vizag</td><td>March 2015 – Nov 2019</td></tr>
                </tbody>
            </table>
        </div>`;
    openHTMLModal('Professional Academic Tenure History', experienceHTML);
}

function showPublicationsModal() {
    const publicationsHTML = `
        <div class="modal-credentials-layout" style="text-align:left; line-height:1.7;">
            <h4 style="color:#007bff; margin-bottom:8px;">Peer-Reviewed International Journal Papers:</h4>
            <p style="margin-bottom:6px;">• <strong>"Transient stability improvement of Single Machine Infinite Bus (SMIB) system Using Distributed Power Flow Controller (DPFC)"</strong> - <em>International Journal of Pure and Applied Mathematics (IJPAM)</em>, 2017.</p>
            <p style="margin-bottom:6px;">• <strong>"Application of SVC for Multiobjective Optimization Powerflow Problem Using PSO"</strong> - <em>IJPAM</em>, 2017.</p>
            <p style="margin-bottom:6px;">• <strong>"Dynamic Stability Improvement of a Smart Grid using Neural Network Based STATCOM"</strong> - <em>Indian Journal of Science and Technology (INDJST)</em>.</p>
            <h4 style="color:#007bff; margin-top:15px; margin-bottom:8px;">Indexed Scientific Monographs & Book Chapters:</h4>
            <p style="margin-bottom:6px;">• <strong>"Cyber security in smart Grids: Role of Digital Advanced Devices"</strong> - Published by <em>IGI Global Publications</em> (2023 Architecture Track).</p>
        </div>`;
    openHTMLModal('Publications Portfolio & Journal Index', publicationsHTML);
}

function showExpertiseModal() {
    const expertiseHTML = `
        <div class="modal-credentials-layout" style="text-align: left; line-height: 1.8;">  
            <h4 style="color: #007bff; margin-top: 0; margin-bottom:8px;">Core Engineering Curriculum Instruction Assets:</h4>  
            <ul style="padding-left:20px;">  
                <li>Artificial Intelligence Techniques & Expert Knowledge Systems Architecture</li>  
                <li>Electro Magnetic Fields Theory & Applied Engineering Electromagnetics</li>  
                <li>Microprocessors and Microcontrollers Processing Engines & Digital Logic Designs</li>  
                <li>Power System Analysis Models, Relay Protection Arrays & Control Systems Engine</li>  
                <li>High Voltage Engineering Isolations & Non-Conventional Alternative Energy Sources</li>  
            </ul>  
        </div>`;
    openHTMLModal('Subject Area Curriculum Expertise', expertiseHTML);
}

function showSkillsModal() {
    const skillsHTML = `
        <div class="modal-credentials-layout" style="text-align: left; line-height: 1.8;">  
            <h4 style="color: #007bff; margin-top: 0; margin-bottom: 8px;">Software Development Portfolio Core:</h4>  
            <ul style="padding-left:20px; margin-bottom:15px;">  
                <li>Advanced Full-Stack Javascript Framework Engine Structures</li> 
                <li>Advanced Python Scripting Analytics and AI System Models Layouts</li> 
                <li>Matlab Numerical Simulation Twins & Grid Systems Twin Designs</li> 
                <li>Java object-oriented systems coding core baseline basics</li> 
            </ul>  
            <h4 style="color: #007bff; margin-bottom: 8px;">Specialized Engineering Toolsets Competencies:</h4>  
            <ul style="padding-left:20px;">  
                <li><strong>Specialized Tracks:</strong> AI Web Design Frameworks, Data Science Models, Cyber Security Operations</li>  
                <li><strong>Core Simulation Platforms:</strong> Power Electronics Analysis, Grid Transient System Architecture Twins</li>  
            </ul>  
        </div>`;
    openHTMLModal('Technical Skillsets & Core Toolsets Portfolio', skillsHTML);
}

function showDevelopmentProgramsModal() {
    const hiddenData = document.getElementById('data-conferences');
    openHTMLModal('Skill Development Programs & Workshops Logs', hiddenData ? hiddenData.innerHTML : '<p>Workshops analytics dataset record empty.</p>');
}

function showConferencesModal() {
    const hiddenData = document.getElementById('data-conferences');
    openHTMLModal('Conferences Attended Presentation Details', hiddenData ? hiddenData.innerHTML : '<p>No matching details metadata track logs discovered.</p>');
}

function showReferencesModal() {
    const referencesHTML = `
        <div class="modal-credentials-layout" style="text-align: left; line-height: 1.8;"> 
            <p style="color: #333; font-size: 0.95rem;">Verified professional verification contact references and operational background validation nodes from senior institutional heads are instantly available upon direct request.</p> 
        </div>`;
    openHTMLModal('Professional & Academic Mentor References', referencesHTML);
}
