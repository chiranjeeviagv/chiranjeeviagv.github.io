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
        academicElements.forEach(el => el.classList.remove('hidden-view'));
        industryElements.forEach(el => el.classList.add('hidden-view'));
        
        if (objText) objText.textContent = objectives.academic;
        btnAcademic?.classList.add('active');
        btnIndustry?.classList.remove('active');
    } else {
        academicElements.forEach(el => el.classList.add('hidden-view'));
        industryElements.forEach(el => el.classList.remove('hidden-view'));
        
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
            <table class="modal-data-table" style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="border-bottom: 2px solid #e2e8f0;">
                        <th style="padding: 10px; text-align: left;">Qualification Matrix</th>
                        <th style="padding: 10px; text-align: left;">Institution / Board</th>
                        <th style="padding: 10px; text-align: left;">Performance Marks</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px;"><strong>M.Tech (High Voltage Engineering)</strong></td>
                        <td style="padding: 12px;">JNTU Kakinada</td>
                        <td style="padding: 12px; display: flex; align-items: center; gap: 8px; justify-content: space-between;">
                            <span>72.00% (Distinction)</span>
                            <a href="https://drive.google.com/file/d/1kZD7vgJqHsifE2tw9LUEyVgCb6adR8HM/view?usp=sharing" target="_blank" rel="noopener noreferrer" style="color: #0066cc !important; text-decoration: underline !important; font-weight: 600; font-size: 0.9em;">[Verify]</a>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px;"><strong>B.Tech (Electrical & Electronics)</strong></td>
                        <td style="padding: 12px;">Chaitanya Engineering College</td>
                        <td style="padding: 12px; display: flex; align-items: center; gap: 8px; justify-content: space-between;">
                            <span>71.63% (Distinction)</span>
                            <a href="https://drive.google.com/file/d/1SMhWIF0aFxWplG4e83fom6THEuU4RtgS/view?usp=sharing" target="_blank" rel="noopener noreferrer" style="color: #0066cc !important; text-decoration: underline !important; font-weight: 600; font-size: 0.9em;">[Verify]</a>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px;"><strong>Intermediate (MPC Core Tracks)</strong></td>
                        <td style="padding: 12px;">Gayatri Junior College</td>
                        <td style="padding: 12px; display: flex; align-items: center; gap: 8px; justify-content: space-between;">
                            <span>94.10% (First Class)</span>
                            <a href="https://drive.google.com/file/d/1EF5XlMU8kwqbM_g7lFCqYSwNuwtHFklk/view?usp=sharing" target="_blank" rel="noopener noreferrer" style="color: #0066cc !important; text-decoration: underline !important; font-weight: 600; font-size: 0.9em;">[Verify]</a>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px;"><strong>SSC Standard Certification</strong></td>
                        <td style="padding: 12px;">ZP High School, Jami</td>
                        <td style="padding: 12px; display: flex; align-items: center; gap: 8px; justify-content: space-between;">
                            <span>89.86% (First Class)</span>
                            <a href="https://drive.google.com/file/d/12HNfZv_ltMW8Lw_KnB7q5gLGwAwHcxQU/view?usp=sharing" target="_blank" rel="noopener noreferrer" style="color: #0066cc !important; text-decoration: underline !important; font-weight: 600; font-size: 0.9em;">[Verify]</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>`;
    openHTMLModal('Qualifications Records', qualificationsHTML);
}


// FORMATTED CONTENT MAPPING: ADVANCED CERTIFICATIONS (COURSERA & NPTEL)
function showCertificationsModal() {
    const certificationsHTML = `
        <div class="modal-credentials-layout">
            <p style="margin-bottom: 20px; color: #555; text-align: left; font-size: 0.95rem;">
                Click on the verified links in the right column to review professional badges and academic credentials.
            </p>
            <h3 style="text-align: left; color: #007bff; margin: 20px 0 10px 0; font-size: 1.15rem; border-left: 3px solid #007bff; padding-left: 8px;">
                Coursera Professional Certifications
            </h3>
            <table class="modal-data-table" style="margin-bottom: 30px; width: 100%; border-collapse: collapse;">
                <thead>
                    <tr>
                        <th style="text-align: left; padding: 8px;">Specialization Program</th>
                        <th style="text-align: left; padding: 8px;">Issuing Organization</th>
                        <th style="text-align: left; padding: 8px;">Verification Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style="padding: 10px;"><strong>IBM Full Stack JavaScript Developer</strong><br><span style="color: #666; font-size: 0.85rem;">12-Course Specialization</span></td>
                        <td style="padding: 10px;">IBM</td>
                        <td style="padding: 10px;"><a href="https://www.coursera.org/account/accomplishments/specialization/L2Q2VEP5W243" target="_blank" rel="noopener noreferrer" class="credential-link">View Certificate ↗</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;"><strong>IBM JavaScript Backend Developer</strong><br><span style="color: #666; font-size: 0.85rem;">13-Course Specialization</span></td>
                        <td style="padding: 10px;">IBM</td>
                        <td style="padding: 10px;"><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/R9G3UO4SYXJM" target="_blank" rel="noopener noreferrer" class="credential-link">View Certificate ↗</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;"><strong>IBM AI Developer</strong><br><span style="color: #666; font-size: 0.85rem;">10-Course Specialization</span></td>
                        <td style="padding: 10px;">IBM</td>
                        <td style="padding: 10px;"><a href="https://coursera.org/verify/professional-cert/E06UAT9KFM8S" target="_blank" rel="noopener noreferrer" class="credential-link">View Certificate ↗</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;"><strong>Microsoft AI and ML Engineering</strong><br><span style="color: #666; font-size: 0.85rem;">5-Course Specialization</span></td>
                        <td style="padding: 10px;">Microsoft</td>
                        <td style="padding: 10px;"><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/5SGHZ101WA4W" target="_blank" rel="noopener noreferrer" class="credential-link">View Certificate ↗</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;"><strong>Google Cyber Security</strong><br><span style="color: #666; font-size: 0.85rem;">9-Course Specialization</span></td>
                        <td style="padding: 10px;">Google</td>
                        <td style="padding: 10px;"><a href="https://coursera.org/verify/professional-cert/SZEO3FT6Q193" target="_blank" rel="noopener noreferrer" class="credential-link">View Certificate ↗</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;"><strong>Advanced Computer Architecture</strong></td>
                        <td style="padding: 10px;">April 2026</td>
                        <td style="padding: 10px;"><a href="https://drive.google.com/file/d/1yQeZ1-coDoRCZBwwtXYv7aXvsFdXdBTV/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="credential-link">View NPTEL Drive ↗</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;"><strong>Advanced Computer Networks</strong></td>
                        <td style="padding: 10px;">April 2025</td>
                        <td style="padding: 10px;"><a href="https://drive.google.com/file/d/1CyKiCImdnXHfHaCmLDpV2pUHx6PvOmti/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="credential-link">View NPTEL Drive ↗</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;"><strong>Practical Cyber Security for Practitioners</strong></td>
                        <td style="padding: 10px;">Oct 2024</td>
                        <td style="padding: 10px;"><a href="https://drive.google.com/file/d/13fxey0JvaQSHKq4JAOxsczLCXCl887uz/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="credential-link">View NPTEL Drive ↗</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;"><strong>Cloud Computing</strong></td>
                        <td style="padding: 10px;">Oct 2024</td>
                        <td style="padding: 10px;"><a href="https://drive.google.com/file/d/1DtA5WR6waMt2C8tUpDK-K55aZx_pkRn/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="credential-link">View NPTEL Drive ↗</a></td>
                    </tr>
                    <tr>
                        <td style="padding: 10px;"><strong>Big Data Computing</strong></td>
                        <td style="padding: 10px;">Oct 2023</td>
                        <td style="padding: 10px;"><a href="https://google.com" target="_blank" rel="noopener noreferrer" class="credential-link">View NPTEL Drive ↗</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    openHTMLModal('Advanced Certifications & Up-Skilling', certificationsHTML);
}

// 2️⃣ MODAL PAYLOAD: PROFESSIONAL EXPERIENCE TIMELINE
function showExperienceModal() {
    const experienceHTML = `
        <div class="modal-credentials-layout">
            <p style="margin-bottom: 20px; color: #555; text-align: left; font-size: 0.95rem;">
                Review my academic teaching milestones and institutional service records below.
            </p>
            
            <table class="modal-data-table" style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="border-bottom: 2px solid #e2e8f0; background: #f7fafc;">
                        <th style="padding: 12px; text-align: left;">Designation & Department</th>
                        <th style="padding: 12px; text-align: left;">Institution & Location</th>
                        <th style="padding: 12px; text-align: left;">Tenure Period</th>
                        <th style="padding: 12px; text-align: left;">Verification Records</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px;"><strong>Assistant Professor</strong><br><span style="color: #007bff; font-size: 0.85rem;">Electrical Engineering (AI & ML)</span></td>
                        <td style="padding: 12px;">Sandip Institute of Technology and Research Centre (Sandip University), Nashik, Maharashtra</td>
                        <td style="padding: 12px;">June 2025 – May 2026</td>
                        <td style="padding: 12px;"><a href="https://drive.google.com/file/d/1kQQ39YCL-o0eyFySFIgzR0qddAOVe5Ch/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="credential-link" style="color: #0066cc; text-decoration: underline; font-weight: 600;">View Service Doc ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px;"><strong>Assistant Professor</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering</span></td>
                        <td style="padding: 12px;">Guru Nanak Institute of Technology (Autonomous), Ibrahimpatnam, Hyderabad</td>
                        <td style="padding: 12px;">Feb 2023 – Jan 2025</td>
                        <td style="padding: 12px;"><a href="https://drive.google.com/file/d/1OainG_BsKrMrFH7mFoFg_pD14hV00Q5Z/view?usp=drive_link" target="_blank" rel="noopener noreferrer" class="credential-link" style="color: #0066cc; text-decoration: underline; font-weight: 600;">View Experience ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px;"><strong>Assistant Professor</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering</span></td>
                        <td style="padding: 12px;">Malla Reddy Engineering College for Women (Autonomous), Secunderabad</td>
                        <td style="padding: 12px;">July 2022 – Feb 2023</td>
                        <td style="padding: 12px;"><a href="https://drive.google.com/file/d/1pu58nrED6xGO_hKPntDO-8npcOayLDhY/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="credential-link" style="color: #0066cc; text-decoration: underline; font-weight: 600;">View Service Doc ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px;"><strong>Senior Assistant Professor</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering</span></td>
                        <td style="padding: 12px;">Aditya College of Engineering, Surampalem, Andhra Pradesh</td>
                        <td style="padding: 12px;">Nov 2019 – July 2021</td>
                        <td style="padding: 12px;"><a href="https://drive.google.com/file/d/1kQQ39YCL-o0eyFySFIgzR0qddAOVe5Ch/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="credential-link" style="color: #0066cc; text-decoration: underline; font-weight: 600;">View Service Doc ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px;"><strong>Assistant Professor</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering</span></td>
                        <td style="padding: 12px;">Vignan’s Institute of Information Technology (Autonomous), Visakhapatnam, Andhra Pradesh</td>
                        <td style="padding: 12px;">March 2015 – Nov 2019</td>
                        <td style="padding: 12px;"><a href="https://drive.google.com/file/d/1ooZQskDGa9NDLdzE-CIZeBs-bVynoz_8/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="credential-link" style="color: #0066cc; text-decoration: underline; font-weight: 600;">View Experience ↗</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    
    // Core function call to open the modal window safely
    openHTMLModal('Professional Experience', experienceHTML);
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
