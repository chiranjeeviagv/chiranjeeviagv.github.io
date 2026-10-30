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
document.addEventListener('DOMContentLoaded', () => {
    // Bind View Toggles
    const btnAcademic = document.getElementById('btn-academic');
    const btnIndustry = document.getElementById('btn-industry');

    if (btnAcademic) btnAcademic.addEventListener('click', () => switchView('academic'));
    if (btnIndustry) btnIndustry.addEventListener('click', () => switchView('industry'));

    // Bind Close Button for Modals
    const closeBtn = document.getElementById('close-modal-btn');
    if (closeBtn) closeBtn.addEventListener('click', closeModal);

    // Dynamic Delegate Binding for Exploration Buttons
    document.querySelectorAll('.explore-btn').forEach(button => {
        button.addEventListener('click', (e) => {
            const targetSection = e.target.getAttribute('data-section');
            if (targetSection) {
                handleExploreClick(targetSection);
            }
        });
    });
    
    // Initialize default view state
    switchView('academic');
});

// ==========================================
// 4. MODAL ROUTER DISPATCH MATRIX
// ==========================================
function handleExploreClick(sectionKey) {
    switch (sectionKey) {
        case 'qualifications': 
            showQualificationsModal(); 
            break;
        case 'certifications': 
            showCertificationsModal(); 
            break;
        case 'experience': 
            showExperienceModal(); 
            break;
        case 'publications': 
            showPublicationsModal(); 
            break;
        case 'fdps': 
            showDevelopmentProgramsModal(); 
            break;
        case 'references': 
            showReferencesModal();
            break;
        case 'expertise': 
            showExpertiseModal();
            break;
        case 'skills': 
            showSkillsModal();
            break;
        case 'conferences': 
            showConferencesModal();
            break;
        default: 
            console.warn(`Unregistered explore section target key: ${sectionKey}`);
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
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline; font-weight: 600; font-size: 0.9em;">[Verify]</a>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px;"><strong>B.Tech (Electrical & Electronics)</strong></td>
                        <td style="padding: 12px;">Chaitanya Engineering College</td>
                        <td style="padding: 12px; display: flex; align-items: center; gap: 8px; justify-content: space-between;">
                            <span>71.63% (Distinction)</span>
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline; font-weight: 600; font-size: 0.9em;">[Verify]</a>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px;"><strong>Intermediate (MPC Core Tracks)</strong></td>
                        <td style="padding: 12px;">Gayatri Junior College</td>
                        <td style="padding: 12px; display: flex; align-items: center; gap: 8px; justify-content: space-between;">
                            <span>94.10% (First Class)</span>
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline; font-weight: 600; font-size: 0.9em;">[Verify]</a>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px;"><strong>SSC Standard Certification</strong></td>
                        <td style="padding: 12px;">ZP High School, Jami</td>
                        <td style="padding: 12px; display: flex; align-items: center; gap: 8px; justify-content: space-between;">
                            <span>89.86% (First Class)</span>
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline; font-weight: 600; font-size: 0.9em;">[Verify]</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>`;
    openHTMLModal('Qualifications Records', qualificationsHTML);
}

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
                    <tr style="border-bottom: 2px solid #e2e8f0; background: #f7fafc;">
                        <th style="text-align: left; padding: 10px;">Specialization Program</th>
                        <th style="text-align: left; padding: 10px;">Issuing Organization</th>
                        <th style="text-align: left; padding: 10px;">Verification Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 10px;"><strong>IBM Full Stack JavaScript Developer</strong><br><span style="color: #666; font-size: 0.85rem;">12-Course Specialization</span></td>
                        <td style="padding: 10px;">IBM</td>
                        <td style="padding: 10px;"><a href="https://coursera.org" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline;">View Certificate ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 10px;"><strong>IBM JavaScript Backend Developer</strong><br><span style="color: #666; font-size: 0.85rem;">13-Course Specialization</span></td>
                        <td style="padding: 10px;">IBM</td>
                        <td style="padding: 10px;"><a href="https://coursera.org" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline;">View Certificate ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 10px;"><strong>IBM AI Developer</strong><br><span style="color: #666; font-size: 0.85rem;">10-Course Specialization</span></td>
                        <td style="padding: 10px;">IBM</td>
                        <td style="padding: 10px;"><a href="https://coursera.org" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline;">View Certificate ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 10px;"><strong>Microsoft AI and ML Engineering</strong><br><span style="color: #666; font-size: 0.85rem;">5-Course Specialization</span></td>
                        <td style="padding: 10px;">Microsoft</td>
                        <td style="padding: 10px;"><a href="https://coursera.org" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline;">View Certificate ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 10px;"><strong>Google Cyber Security</strong><br><span style="color: #666; font-size: 0.85rem;">9-Course Specialization</span></td>
                        <td style="padding: 10px;">Google</td>
                        <td style="padding: 10px;"><a href="https://coursera.org" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline;">View Certificate ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 10px;"><strong>Advanced Computer Architecture</strong></td>
                        <td style="padding: 10px;">April 2026</td>
                        <td style="padding: 10px;"><a href="https://google.com" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline;">View NPTEL Drive ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 10px;"><strong>Advanced Computer Networks</strong></td>
                        <td style="padding: 10px;">April 2025</td>
                        <td style="padding: 10px;"><a href="https://google.com" target="_blank" rel="noopener noreferrer" style="color: #0066cc; text-decoration: underline;">View NPTEL Drive ↗</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    openHTMLModal('Advanced Certifications & Up-Skilling', certificationsHTML);
}
function showExperienceModal() {
    const experienceHTML = `
        <div class="modal-credentials-layout">
            <table class="modal-data-table" style="width: 100%; border-collapse: collapse; font-family: system-ui, -apple-system, sans-serif;">
                <thead>
                    <tr style="border-bottom: 2px solid #e2e8f0; background: #f7fafc;">
                        <th style="padding: 12px; text-align: left; color: #4a5568; font-weight: 600;">Designation & Department</th>
                        <th style="padding: 12px; text-align: left; color: #4a5568; font-weight: 600;">Institution & Location</th>
                        <th style="padding: 12px; text-align: left; color: #4a5568; font-weight: 600;">Tenure Period</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px; vertical-align: top;"><strong>Assistant Professor</strong><br><span style="color: #007bff; font-size: 0.85rem;">Electrical Engineering (AI & ML)</span></td>
                        <td style="padding: 12px; vertical-align: top; color: #2d3748;">Sandip Institute of Technology and Research Centre, Nashik</td>
                        <td style="padding: 12px; vertical-align: top; color: #4a5568; white-space: nowrap;">June 2025 – May 2026</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px; vertical-align: top;"><strong>Assistant Professor</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering</span></td>
                        <td style="padding: 12px; vertical-align: top; color: #2d3748;">Guru Nanak Institute of Technology (Autonomous), Hyderabad</td>
                        <td style="padding: 12px; vertical-align: top; color: #4a5568; white-space: nowrap;">Feb 2023 – Jan 2025</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px; vertical-align: top;"><strong>Assistant Professor</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering</span></td>
                        <td style="padding: 12px; vertical-align: top; color: #2d3748;">Malla Reddy Engineering College for Women, Secunderabad</td>
                        <td style="padding: 12px; vertical-align: top; color: #4a5568; white-space: nowrap;">July 2022 – Feb 2023</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px; vertical-align: top;"><strong>Senior Assistant Professor</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering</span></td>
                        <td style="padding: 12px; vertical-align: top; color: #2d3748;">Aditya College of Engineering, Surampalem</td>
                        <td style="padding: 12px; vertical-align: top; color: #4a5568; white-space: nowrap;">Nov 2019 – July 2021</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px; vertical-align: top;"><strong>Assistant Professor</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering</span></td>
                        <td style="padding: 12px; vertical-align: top; color: #2d3748;">Vignan’s Institute of Information Technology, Visakhapatnam</td>
                        <td style="padding: 12px; vertical-align: top; color: #4a5568; white-space: nowrap;">March 2015 – Nov 2019</td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    openHTMLModal('Professional Experience', experienceHTML);
}
function showPublicationsModal() {
    const publicationsHTML = `
        <div class="modal-credentials-layout" style="font-family: system-ui, -apple-system, sans-serif; text-align: left;">
            <h3 style="color: #007bff; font-size: 1.15rem; margin-top: 10px; margin-bottom: 15px; border-left: 3px solid #007bff; padding-left: 8px;">
                📄 Peer-Reviewed International Journal Papers
            </h3>
            <table class="modal-data-table" style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="border-bottom: 2px solid #e2e8f0; background: #f7fafc;">
                        <th style="padding: 12px; text-align: left; color: #4a5568; font-weight: 600;">Research Article Context & Citation Log</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 14px 12px; line-height: 1.5;">
                            <div style="font-weight: 600; color: #1a1a1a; margin-bottom: 4px;">
                                "Transient stability improvement of Single Machine Infinite Bus (SMIB) system Using Distributed Power Flow Controller (DPFC)"
                            </div>
                            <div style="font-size: 0.85rem; color: #5a5c69;">
                                <strong>Journal:</strong> International Journal of Pure and Applied Mathematics (IJPAM) | Vol. 114, No. 8, 2017
                            </div>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 14px 12px; line-height: 1.5;">
                            <div style="font-weight: 600; color: #1a1a1a; margin-bottom: 4px;">
                                "Application of SVC for Multiobjective Optimization Powerflow Problem Using PSO"
                            </div>
                            <div style="font-size: 0.85rem; color: #5a5c69;">
                                <strong>Journal:</strong> International Journal of Pure and Applied Mathematics (IJPAM) | Vol. 114, No. 8, 2017
                            </div>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 14px 12px; line-height: 1.5;">
                            <div style="font-weight: 600; color: #1a1a1a; margin-bottom: 4px;">
                                "Dynamic Stability Improvement of a Smart Grid using Neural Network Based STATCOM"
                            </div>
                            <div style="font-size: 0.85rem; color: #5a5c69;">
                                <strong>Journal:</strong> Indian Journal of Science and Technology (INDJST) | 2016
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    openHTMLModal('Research Publications', publicationsHTML);
}
function showReferencesModal() {
const referencesHTML = <div class="modal-credentials-layout"> <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;"> <div style="background: #f8f9fa; border-left: 4px solid #007bff; padding: 15px; border-radius: 4px;"> <div style="font-weight:700;">Mr. K Prasad</div> <div style="font-size:0.85rem; color:#666;">Government Polytechnic, Vizianagaram</div> <div style="margin-top:8px; font-size:0.9rem;"><strong>Cell:</strong> <a href="tel:+919912340292">+91 99123 40292</a></div> </div> <div style="background: #f8f9fa; border-left: 4px solid #007bff; padding: 15px; border-radius: 4px;"> <div style="font-weight:700;">Mrs. Sangita K Chowdary</div> <div style="font-size:0.85rem; color:#666;">SITRC, Nashik</div> <div style="margin-top:8px; font-size:0.9rem;"><strong>Cell:</strong> <a href="tel:+919730199702">+91 97301 99702</a></div> </div> </div> </div>;
openHTMLModal('Verified Professional References', referencesHTML);
}
function showExpertiseModal() {
const expertiseHTML =  <div class="modal-credentials-layout" style="text-align: left; line-height: 1.6;">  <ul style="padding-left:20px;"> <li><strong>Artificial Intelligence Techniques:</strong> Computational applications and neural networks in power grids.</li> <li><strong>Engineering Electromagnetics:</strong> Field formulation maps and complex equipment matrices.</li> <li><strong>Power System Analysis:</strong> Load flows, transient stability controls, and fault protection algorithms.</li> </ul> </div>;
openHTMLModal('Subject Area Expertise', expertiseHTML);
}
function showSkillsModal() {
const skillsHTML =  <div class="modal-credentials-layout" style="text-align: left;">  <h4 style="color:#007bff;">Languages & Frameworks</h4> <p>Python (Advanced), MATLAB (Simulink Modeling), JavaScript Full-Stack (Node.js/React), AI Application Development.</p> </div>;
openHTMLModal('Technical Skills & Toolsets', skillsHTML);
}
function showConferencesModal() {
const hiddenData = document.getElementById('data-conferences');
openHTMLModal('Conferences Attended Presentation Details', hiddenData ? hiddenData.innerHTML : 'Conference proceedings record sheet currently vacant.');
}

