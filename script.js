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
        '<li>IBM Full Stack JavaScript Developer (12 Courses) - Sep 2026 ' +
        '[<a href="https://www.coursera.org/account/accomplishments/specialization/L2Q2VEP5W243" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        
        '<li>Microsoft AI and ML Engineering (5 Courses) - Jul 2026 ' +
        '[<a href="https://www.coursera.org/account/accomplishments/specialization/certificate/5SGHZ101WA4W" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        
        '<li>IBM AI Developer (10 Courses) - Jun 2026 ' +
        '[<a href="https://coursera.org/verify/professional-cert/E06UAT9KFM8S" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        
        '<li>IBM Java Developer (14 Courses) - Jul 2026 ' +
        '[<a href="https://coursera.org/verify/professional-cert/CGMXJ0SN33A5" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        
        '<li>IBM JavaScript Backend Developer (13 Courses) - Aug 2026 ' +
        '[<a href="https://www.coursera.org/account/accomplishments/specialization/certificate/R9G3UO4SYXJM" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        
        '<li>Google Cyber Security Specialist Track (9 Courses) - Jul 2026 ' +
        '[<a href="https://coursera.org/verify/professional-cert/SZEO3FT6Q193" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        '</ul>' +
        
        '<h4>NPTEL Certifications:</h4>' +
        '<ul>' +
        '<li>Advanced Computer Architecture - Apr 2026 ' +
        '[<a href="https://drive.google.com/file/d/1yQeZ1-coDoRCZBwwtXYv7aXvsFdXdBTV/view?usp=sharing" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        
        '<li>Advanced Computer Networks - Apr 2025 ' +
        '[<a href="https://drive.google.com/file/d/1yQeZ1-coDoRCZBwwtXYv7aXvsFdXdBTV/view?usp=sharing" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        
        '<li>Practical Cyber Security for Cyber Security Practitioners - Jul-Oct 2024 ' +
        '[<a href="https://drive.google.com/file/d/1CyKiCImdnXHfHaCmLDpV2pUHx6PvOmti/view" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        
        '<li>Cloud Computing - Jul-Oct 2024 ' +
        '[<a href="https://drive.google.com/file/d/13fxey0JvaQSHKq4JAOxsczLCXCl887uz/view" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        
        '<li>Big Data Computing (8-Week Course) - Oct 2023 ' +
        '[<a href="https://drive.google.com/file/d/1DtA5WR6waMt2C8tUpDK-2K55aZx_pkRn/view" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        
        '<li>Ethics in Engineering Practice (8-Week Course) - Oct 2023 ' +
        '[<a href="#" target="_blank" style="color:#999; text-decoration:line-through; pointer-events:none;">Link Pending</a>]</li>' +
        
        '<li>Introduction to Smart Grid (8-Week Course) - Jul-Sep 2022 ' +
        '[<a href="https://drive.google.com/file/d/1wpngaRqihuwbp1HmI5J0b-qxdqqXhNny/view" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        '</ul>' +
        '</div>';
    openHTMLModal('Advanced Certifications & Up-Skilling', html);
}
function showExperienceModal() {
    var html = '<div style="padding:10px; text-align:left;">' +
        '<p><strong>Assistant Professor – Department of Electrical Engineering (AI & ML)</strong><br>' +
        'Sandip Institute of Technology and Research Centre (Sandip University), Nashik, Maharashtra<br>' +
        '<em>June 2025 – May 2026</em><br>' +
        '<span style="font-size:13px; color:#444;">• Delivered specialized courses bridging heavy electrical engineering with computational intelligence, including Artificial Intelligence Techniques and AI-Based Web Design.</span><br>' +
        '[<a href="https://drive.google.com/file/d/1vkAjZmeYQHPg-yer47apZZG9evd2Ubp2/view?usp=sharing" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:13px;">Verify Experience</a>]</p><hr>' +
        
        '<p><strong>Assistant Professor – Department of Electrical & Electronics Engineering</strong><br>' +
        'Guru Nanak Institute of Technology (Autonomous), Ibrahimpatnam, Hyderabad<br>' +
        '<em>February 2023 – January 2025</em><br>' +
        '<span style="font-size:13px; color:#444;">• Taught core undergraduate engineering subjects and guided graduation project groups.<br>' +
        '• Managed automated tools for continuous student assessments, grading workflows, and classroom operations.</span><br>' +
        '[<a href="https://drive.google.com/file/d/1OainG_BsKrMrFH7mFoFg_pD14hV00Q5Z/view?usp=drive_link" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:13px;">Verify Experience</a>]</p><hr>' +
        
        '<p><strong>Assistant Professor – Department of Electrical & Electronics Engineering</strong><br>' +
        'Malla Reddy Engineering College for Women (Autonomous), Secunderabad<br>' +
        '<em>July 2022 – February 2023</em><br>' +
        '<span style="font-size:13px; color:#444;">• Led academic instruction, micro-mentoring programs, and structured laboratory assessments.<br>' +
        '• Contributed actively to internal department committees preparing for structural university audits.</span><br>' +
        '[<a href="https://drive.google.com/file/d/1pu58nrED6xGO_hKPntDO-8npcOayLDhY/view?usp=sharing" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:13px;">Verify Experience</a>]</p><hr>' +
        
        '<p><strong>Senior Assistant Professor – Department of Electrical & Electronics Engineering</strong><br>' +
        'Aditya College of Engineering, Surampalem, Andhra Pradesh<br>' +
        '<em>November 2019 – July 2021</em><br>' +
        '<span style="font-size:13px; color:#444;">• Provided senior-level instructional delivery for advanced PG and UG courses.<br>' +
        '• Structured curriculum changes to better incorporate simulation tools like MATLAB within lab protocols.</span><br>' +
        '[<a href="https://drive.google.com/file/d/1kQQ39YCL-o0eyFySFIgzR0qddAOVe5Ch/view?usp=sharing" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:13px;">Verify Experience</a>]</p><hr>' +
        
        '<p><strong>Assistant Professor – Department of EEE</strong><br>' +
        'Vignan’s Institute of Information Technology (Autonomous), Visakhapatnam, Andhra Pradesh<br>' +
        '<em>March 2015 – November 2019</em><br>' +
        '<span style="font-size:13px; color:#444;">• Administered core academic workloads alongside critical operational responsibilities, serving as the NBA coordinator and department Time-Table planner.<br>' +
        '• Spearheaded institutional accreditation data compilation (NBA & NAAC files).</span><br>' +
        '[<a href="https://drive.google.com/file/d/1ooZQskDGa9NDLdzE-CIZeBs-bVynoz_8/view?usp=sharing" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:13px;">Verify Experience</a>]</p>' +
        '</div>';
    openHTMLModal('Professional Experience', html);
}


function showPublicationsModal() {
    var html = '<div style="padding:10px; text-align:left; max-height:450px; overflow-y:auto;">' +
        '<h4>🔒 Published Patents</h4>' +
        '<ol>' +
        '<li><strong>Smart Medical Diagnosis System Using IoT-Driven Machine Learning and Big Data Analytics</strong><br>' +
        'Field: Bio-Medical Engineering | Pub. Number: 11/2024(INA)</li>' +
        '<li><strong>Power Quality Analysis Using IoT</strong><br>' +
        'Field: Power Systems / Automation | App. Number: 202441060301 | Aug 2024</li>' +
        '</ol>' +

        '<h4>📚 Forthcoming Books</h4>' +
        '<ul>' +
        '<li><strong>Logical Introduction to Digital Electronics</strong><br>' +
        'Accepted for publication by <em>BPB Publications</em> (Final editing phases for 2026 launch).</li>' +
        '</ul>' +

        '<h4>📄 Peer-Reviewed Book Chapters & Journal Papers</h4>' +
        '<ol>' +
        '<li>"Dynamic stability improvement of a smart grid using neural network based STATCOM" - <em>Indian Journal of Science and Technology</em> ' +
        '[<a href="https://indjst.org/articles/dynamic-stability-improvement-of-a-smart-grid-using-neural-network-based-statcom" target="_blank" style="color:#0066cc; text-decoration:underline;">View Article</a>]</li>' +
        
        '<li>"Transient Stability Improvement of SMIB using DPFC" - <em>IJPAM (2017)</em> ' +
        '[<a href="https://acadpubl.eu/jsi/2017-114-7-ICPCIT-2017/articles/8/27.pdf" target="_blank" style="color:#0066cc; text-decoration:underline;">View PDF</a>]</li>' +
        
        '<li>"Application of SVC for Multi Objective Power problem with PSO" - <em>IJPAM (2017)</em> ' +
        '[<a href="https://acadpubl.eu/jsi/2017-114-7-ICPCIT-2017/articles/8/3.pdf" target="_blank" style="color:#0066cc; text-decoration:underline;">View PDF</a>]</li>' +
        
        '<li>"A grid interfaced low frequency wind power" - <em>IJRASET (2015)</em> ' +
        '[<a href="https://www.ijraset.com/fileserve.php?FID=2047" target="_blank" style="color:#0066cc; text-decoration:underline;">View PDF</a>]</li>' +
        
        '<li>"Fuzzy based Unified Control and Power Management Scheme for PV Battery based Hybrid Micro Grids for both Grid Connected and Islanded Modes" - <em>IJAEMA</em> ' +
        '[<a href="https://drive.google.com/file/d/1Bhgmof-yxlzp3ZRNAsk2lemdSm7Xe6oA/view" target="_blank" style="color:#0066cc; text-decoration:underline;">View Document</a>]</li>' +
        
        '<li>"Simulation based Analysis for fixing Optimal stages for a H-Bridge cascaded Multi Level Converters" - <em>IJSETR (2016)</em> ' +
        '[<a href="https://ijsetr.com/uploads/463251IJSETR9076-240.pdf" target="_blank" style="color:#0066cc; text-decoration:underline;">View PDF</a>]</li>' +
        
        '<li><strong>Book Chapter:</strong> "Cyber security in smart Grids: Role of Digital Advanced Devices" - <em>Cyber security-Issues, Challenges–Solutions-Business, IGI Global Publications (Oct 2022)</em> ' +
        '[<a href="https://doi.org/10.4018/978-1-6684-5827-3.ch002" target="_blank" style="color:#0066cc; text-decoration:underline;">CrossRef DOI</a>]</li>' +
        '</ol>' +
        '</div>';
    openHTMLModal('Research Publications & Intellectual Property', html);
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
