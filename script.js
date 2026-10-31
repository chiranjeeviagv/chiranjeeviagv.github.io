// ==========================================
// 1. DATA AND OBJECTIVE TEMPLATE STORAGE
// ==========================================
const objectives = {
    academic: "Seeking a challenging position in an academic institution to leverage research, teaching methodology, and institutional development expertise.",
    industry: "An Electrical Engineer and Software professional, forever a student, dreaming for a career in a nice environment which is technically and ethically developed."
};

// ==========================================
// 2. CENTRAL MATRIX SWITCHING ENGINE
// ==========================================
function switchView(viewMode) {
    var academicElements = document.querySelectorAll('.academic-only');
    var industryElements = document.querySelectorAll('.industry-only');
    var objText = document.getElementById('objective-text');
    var btnAcademic = document.getElementById('btn-academic');
    var btnIndustry = document.getElementById('btn-industry');

    if (viewMode === 'academic') {
        academicElements.forEach(function(el) { el.style.display = 'block'; });
        industryElements.forEach(function(el) { el.style.display = 'none'; });
        if (objText) objText.textContent = objectives.academic;
        if (btnAcademic) btnAcademic.className = 'toggle-btn active';
        if (btnIndustry) btnIndustry.className = 'toggle-btn';
    } else {
        academicElements.forEach(function(el) { el.style.display = 'none'; });
        industryElements.forEach(function(el) { el.style.display = 'block'; });
        if (objText) objText.textContent = objectives.industry;
        if (btnIndustry) btnIndustry.className = 'toggle-btn active';
        if (btnAcademic) btnAcademic.className = 'toggle-btn';
    }
}

// ==========================================
// 3. SECURE DOM EVENT BINDING LAYER
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    var btnAcademic = document.getElementById('btn-academic');
    var btnIndustry = document.getElementById('btn-industry');
    var closeBtn = document.getElementById('close-modal-btn');

    if (btnAcademic) btnAcademic.onclick = function() { switchView('academic'); };
    if (btnIndustry) btnIndustry.onclick = function() { switchView('industry'); };
    if (closeBtn) closeBtn.onclick = closeModal;

    // Direct binding matrix loop for action selectors
    var allExploreBtns = document.querySelectorAll('.explore-btn');
    allExploreBtns.forEach(function(button) {
        button.onclick = function(e) {
            var targetSection = e.target.getAttribute('data-section');
            if (targetSection) {
                handleExploreClick(targetSection);
            }
        };
    });

    // Default initialization
    switchView('academic');
});

// ==========================================
// 4. ROUTER SWITCH ROUTINE
// ==========================================
function handleExploreClick(sectionKey) {
    if (sectionKey === 'qualifications') showQualificationsModal();
    else if (sectionKey === 'certifications') showCertificationsModal();
    else if (sectionKey === 'experience') showExperienceModal();
    else if (sectionKey === 'publications') showPublicationsModal();
    else if (sectionKey === 'fdps') showDevelopmentProgramsModal();
    else if (sectionKey === 'references') showReferencesModal();
    else if (sectionKey === 'expertise') showExpertiseModal();
    else if (sectionKey === 'skills') showSkillsModal();
    else if (sectionKey === 'conferences') showConferencesModal();
}

// ==========================================
// 5. WINDOW FRAME DYNAMICS
// ==========================================
function openHTMLModal(title, htmlContent) {
    var modal = document.getElementById('details-modal');
    var modalTitle = document.getElementById('modal-title');
    var modalBody = document.getElementById('modal-body');
    
    if (modal && modalTitle && modalBody) {
        modalTitle.innerText = title;
        modalBody.innerHTML = htmlContent;
        modal.style.display = 'block';
        modal.classList.remove('hidden-view');
        document.body.style.overflow = 'hidden'; 
    }
}

function closeModal() {
    var modal = document.getElementById('details-modal');
    var modalBody = document.getElementById('modal-body');
    if (modal) {
        modal.style.display = 'none';
        modal.classList.add('hidden-view');
        if (modalBody) modalBody.innerHTML = '';
        document.body.style.overflow = '';
    }
}

// ==========================================
// 6. SAFE SIMPLIFIED MODAL CONTENT BLOCKS
// ==========================================
function showQualificationsModal() {
  var html = '<div style="padding: 10px; text-align: left;">' +
             '<p><strong>M.Tech (High Voltage Engineering):</strong> JNTU Kakinada - 72.00% (Distinction) ' +
             '[<a href="https://drive.google.com/file/d/1kZD7vgJqHsifE2tw9LUEyVgCb6adR8HM/view?usp=sharing" target="_blank" style="color: #0066cc; text-decoration: underline;">Verify Credential</a>]</p>' +
             
             '<p><strong>B.Tech (Electrical & Electronics):</strong> Chaitanya Engineering College - 71.63% (Distinction) ' +
             '[<a href="https://drive.google.com/file/d/1SMhWIF0aFxWplG4e83fom6THEuU4RtgS/view?usp=sharing" target="_blank" style="color: #0066cc; text-decoration: underline;">Verify Credential</a>]</p>' +
             
             '<p><strong>Intermediate (MPC):</strong> Gayatri Junior College - 94.10% ' +
             '[<a href="https://drive.google.com/file/d/1EF5XlMU8kwqbM_g7lFCqYSwNuwtHFklk/view?usp=sharing" target="_blank" style="color: #0066cc; text-decoration: underline;">Verify Credential</a>]</p>' +
             
             '<p><strong>SSC Certification:</strong> ZP High School, Jami - 89.86% ' +
             '[<a href="https://drive.google.com/file/d/12HNfZv_ltMW8Lw_KnB7q5gLGwAwHcxQU/view?usp=sharing" target="_blank" style="color: #0066cc; text-decoration: underline;">Verify Credential</a>]</p>' +
             '</div>';

  openHTMLModal("Qualifications Records", html);
}

function showCertificationsModal() {
    var html = '<div style="padding:10px; text-align:left;">' +
        '<h4>Coursera Specialization Modules:</h4>' +
        '<ul>' +
        '<li>IBM Full Stack JavaScript Developer (12 Courses)</li>' +
        '<li>IBM JavaScript Backend Developer (13 Courses)</li>' +
        '<li>IBM AI Developer (10 Courses)</li>' +
        '<li>Microsoft AI and ML Engineering (5 Courses)</li>' +
        '<li>Google Cyber Security Specialist Track (9 Courses)</li>' +
        '</ul>' +
        '<h4>NPTEL Postings:</h4>' +
        '<ul>' +
        '<li>Advanced Computer Architecture (April 2026)</li>' +
        '<li>Advanced Computer Networks (April 2025)</li>' +
        '</ul>' +
        '</div>';
    openHTMLModal('Advanced Certifications & Up-Skilling', html);
}

function showExperienceModal() {
    var html = '<div style="padding:10px; text-align:left;">' +
        '<p><strong>Assistant Professor (AI/ML Dept)</strong><br>Sandip Institute of Technology and Research Centre, Nashik (June 2025 – May 2026)</p><hr>' +
        '<p><strong>Assistant Professor (EEE Dept)</strong><br>Guru Nanak Institute of Technology (Autonomous), Hyderabad (Feb 2023 – Jan 2025)</p><hr>' +
        '<p><strong>Assistant Professor (EEE Dept)</strong><br>Malla Reddy Engineering College for Women, Secunderabad (July 2022 – Feb 2023)</p><hr>' +
        '<p><strong>Senior Assistant Professor</strong><br>Aditya College of Engineering, Surampalem (Nov 2019 – July 2021)</p><hr>' +
        '<p><strong>Assistant Professor (EEE Dept)</strong><br>Vignan’s Institute of Information Technology, Visakhapatnam (March 2015 – Nov 2019)</p>' +
        '</div>';
    openHTMLModal('Professional Experience', html);
}

function showPublicationsModal() {
    var html = '<div style="padding:10px; text-align:left;">' +
        '<h4>📄 Peer-Reviewed International Journal Papers</h4>' +
        '<ol>' +
        '<li>"Transient stability improvement of SMIB system Using DPFC" - IJPAM, 2017</li>' +
        '<li>"Application of SVC for Multiobjective Optimization Powerflow Problem Using PSO" - IJPAM, 2017</li>' +
        '<li>"Dynamic Stability Improvement of a Smart Grid using Neural Network Based STATCOM" - INDJST, 2016</li>' +
        '</ol>' +
        '</div>';
    openHTMLModal('Research Publications', html);
}

function showDevelopmentProgramsModal() {
    var html = '<div style="padding:10px; text-align:left;">' +
        '<ul>' +
        '<li>Two-day FDP on OBE Focused Curriculum Design - Sandip University (2026)</li>' +
        '<li>OBE System Workshop Framework - VIIT / KLETU (2018)</li>' +
        '<li>National Workshop on MOOCs and E-Learning - Delhi University (2018)</li>' +
        '</ul>' +
        '</div>';
    openHTMLModal('Faculty Up-Skilling & FDP Records', html);
}

function showReferencesModal() {
    var html = '<div style="padding:10px; text-align:left;">' +
        '<p><strong>Mr. K Prasad</strong> (Govt Polytechnic, Vizianagaram) - Cell: +91 9912340292</p>' +
        '<p><strong>Mrs. Sangita K Chowdary</strong> (SITRC, Nashik) - Cell: +91 9730199702</p>' +
        '</div>';
    openHTMLModal('Verified Professional References', html);
}

function showExpertiseModal() {
    var html = '<div style="padding:10px; text-align:left;">' +
        '<ul>' +
        '<li>Artificial Intelligence Techniques & Neural Networks</li>' +
        '<li>Engineering Electromagnetics & Field Analysis</li>' +
        '<li>Power System Analysis, Protection & Control Engines</li>' +
        '<li>High Voltage Engineering & Distributed Microgrids</li>' +
        '</ul>' +
        '</div>';
    openHTMLModal('Subject Area Expertise', html);
}

function showSkillsModal() {
    var html = '<div style="padding:10px; text-align:left;">' +
        '<p><strong>Core Languages:</strong> Python (Advanced), MATLAB (Simulink Twin Engineering), JavaScript (Full-Stack Engine Stack), Core Java Basics.</p>' +
        '<p><strong>Domain Tools:</strong> FACTS Controllers Optimization, Smart Grid Architecture Twins, Cybersecurity Infrastructure Auditing.</p>' +
        '</div>';
    openHTMLModal('Technical Skills & Toolsets', html);
}

function showConferencesModal() {
    openHTMLModal('Conferences Attended Presentation Details', '<p style="padding:10px;">Proceedings mapping index verification registry currently running setup.</p>');
}
