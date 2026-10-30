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
// ==========================================
// 4. MODAL ROUTER DISPATCH MATRIX
// ==========================================
function handleExploreClick(sectionKey) {
    // Force active evaluation of structural JavaScript table data templates
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

        // If you are loading these next four from hidden HTML data tags, we force them safely here:
        case 'references': 
        case 'expertise': 
        case 'skills': 
        case 'conferences': 
            loadHiddenHTMLData(sectionKey);
            break;
            
        default: 
            console.warn(`Unregistered explore section target key parsed: ${sectionKey}`);
    }
}

// Helper routine ensuring fallback text blocks render smoothly if no function is mapped
function loadHiddenHTMLData(sectionKey) {
    const modal = document.getElementById('details-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    const titleGlossary = {
        'references': 'Professional Reference Verification',
        'expertise': 'Subject Matter Expertise Matrix',
        'skills': 'Technical Stack Matrix',
        'conferences': 'Conferences Attended Details'
    };
    
    const targetDiv = document.getElementById(`data-${sectionKey}`);
    if (modal && modalBody && targetDiv) {
        if (modalTitle) modalTitle.innerText = titleGlossary[sectionKey] || 'Information Logs';
        modalBody.innerHTML = targetDiv.innerHTML;
        modal.classList.remove('hidden-view');
        modal.classList.remove('hidden'); // Forces both CSS hidden variant states out
        document.body.style.overflow = 'hidden';
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

// FORMATTED CONTENT MAPPING: PUBLICATIONS & RESEARCH PAPERS
function showPublicationsModal() {
    const publicationsHTML = `
        <div class="modal-credentials-layout">
            <style>
                .publication-section-title {
                    font-size: 1.15rem;
                    color: #007bff;
                    margin: 25px 0 12px 0;
                    border-bottom: 2px solid #e3e6f0;
                    padding-bottom: 6px;
                    text-align: left;
                    font-weight: 600;
                }
                .pub-title { font-weight: 600; color: #1a1a1a; font-size: 0.98rem; line-height: 1.4; text-align: left; }
                .pub-meta { font-size: 0.86rem; color: #5a5c69; margin-top: 6px; line-height: 1.5; text-align: left; }
                .pub-meta strong { color: #3a3b45; }
                .credential-link { font-size: 0.85rem; white-space: nowrap; font-weight: 600; }
            </style>

            <p style="margin-bottom: 20px; color: #4e73df; text-align: left; font-size: 0.92rem; font-weight: 600;">
                ℹ️ Click on the index or access links in the right column to review raw source text documents, metadata records, or publisher portals.
            </p>

            <!-- SECTION 1: INTERNATIONAL JOURNAL PAPERS -->
            <div class="publication-section-title">📄 Peer-Reviewed International Journal Papers</div>
            <table class="modal-data-table" style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                <thead>
                    <tr style="border-bottom: 2px solid #e2e8f0; background: #f7fafc;">
                        <th style="width: 75%; text-align: left; padding: 12px;">Journal Paper & Research Context</th>
                        <th style="width: 25%; text-align: center; padding: 12px;">Document Access</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px;">
                            <div class="pub-title">"Transient stability improvement of Single Machine Infinite Bus (SMIB) system Using Distributed Power Flow Controller (DPFC)"</div>
                            <div class="pub-meta">
                                <strong>Author:</strong> G V Chiranjeevi Adari<br>
                                <strong>Journal:</strong> International Journal of Pure and Applied Mathematics (IJPAM)<br>
                                <strong>Volume & Timeline:</strong> Vol. 114, No. 8, 2017 (pp. 285-295)<br>
                                <strong>Identifiers:</strong> ISSN: 1311-8080 (Print) / 1314-3395 (Online)
                            </div>
                        </td>
                        <td style="text-align: center; vertical-align: middle; padding: 12px;">
                            <a href="https://acadpubl.eu/jsi/2017-114-7-ICPCIT-2017/articles/8/27.pdf" target="_blank" rel="noopener noreferrer" class="credential-link" style="color: #0066cc; text-decoration: underline;">View Journal PDF ↗</a>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px;">
                            <div class="pub-title">"Application of SVC for Multiobjective Optimization Powerflow Problem Using PSO"</div>
                            <div class="pub-meta">
                                <strong>Authors:</strong> P.Ramesh, A.G.V Chiranjeevi and Kottala Padma<br>
                                <strong>Journal:</strong> International Journal of Pure and Applied Mathematics (IJPAM)<br>
                                <strong>Volume & Timeline:</strong> Vol. 114, No. 8, 2017 (pp. 23-33)<br>
                                <strong>Identifiers:</strong> ISSN: 1311-8080 (Print) / 1314-3395 (Online)
                            </div>
                        </td>
                        <td style="text-align: center; vertical-align: middle; padding: 12px;">
                            <a href="https://acadpubl.eu/jsi/2017-114-7-ICPCIT-2017/articles/8/3.pdf" target="_blank" rel="noopener noreferrer" class="credential-link" style="color: #0066cc; text-decoration: underline;">View Journal PDF ↗</a>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px;">
                            <div class="pub-title">"Dynamic Stability Improvement of a Smart Grid using Neural Network Based STATCOM"</div>
                            <div class="pub-meta">
                                <strong>Author:</strong> G V Chiranjeevi Adari<br>
                                <strong>Journal:</strong> Indian Journal of Science and Technology (INDJST)
                            </div>
                        </td>
                        <td style="text-align: center; vertical-align: middle; padding: 12px;">
                            <a href="https://indjst.org/articles/dynamic-stability-improvement-of-a-smart-grid-using-neural-network-based-statcom" target="_blank" rel="noopener noreferrer" class="credential-link" style="color: #0066cc; text-decoration: underline;">View Article Portal ↗</a>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px;">
                            <div class="pub-title">"A Grid Interfaced Low Frequency Offshore Wind Power"</div>
                            <div class="pub-meta">
                                <strong>Author:</strong> AGV Chiranjeevi<br>
                                <strong>Journal:</strong> International Journal for Research in Applied Science & Engineering Technology (IJRASET)<br>
                                <strong>Volume & Timeline:</strong> Vol. 3, Issue III, March 2015 (p. 544)<br>
                                <strong>Identifiers:</strong> ISSN: 2321-9653
                            </div>
                        </td>
                        <td style="text-align: center; vertical-align: middle; padding: 12px;">
                            <a href="https://www.ijraset.com/fileserve.php?FID=2047" target="_blank" rel="noopener noreferrer" class="credential-link" style="color: #0066cc; text-decoration: underline;">View Repository File ↗</a>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px;">
                            <div class="pub-title">"Simulation Based Analysis for Fixing Optimal Stages for a H-Bridge Cascaded Multi-Level Converters"</div>
                            <div class="pub-meta">
                                <strong>Authors:</strong> RAJASEKHAR VADDI, ADARI G. V. CHIRANJEEVI<br>
                                <strong>Journal:</strong> International Journal of Scientific Engineering and Technology Research (IJSETR)<br>
                                <strong>Volume & Timeline:</strong> Vol. 05, Issue 07, March-2016 (pp. 1342-1346)<br>
                                <strong>Identifiers:</strong> ISSN: 2319-8885
                            </div>
                        </td>
                        <td style="text-align: center; vertical-align: middle; padding: 12px;">
                            <a href="https://ijsetr.com/uploads/463251IJSETR9076-240.pdf" target="_blank" rel="noopener noreferrer" class="credential-link" style="color: #0066cc; text-decoration: underline;">View Server PDF ↗</a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- SECTION 2: BOOK CHAPTERS -->
            <div class="publication-section-title">📖 Indexed Book Chapters & Additional Material</div>
            <table class="modal-data-table" style="width: 100%; border-collapse: collapse;">
                <thead>
                    <tr style="border-bottom: 2px solid #e2e8f0; background: #f7fafc;">
                        <th style="width: 75%; text-align: left; padding: 12px;">Chapter Details & Monograph Data</th>
                        <th style="width: 25%; text-align: center; padding: 12px;">Storage Drive Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px;">
                            <div class="pub-title">"Cyber security in smart Grids:-Role of Digital Advanced Devices"</div>
                            <div class="pub-meta">
                                <strong>Authors:</strong> Prof. M Ramalinga Raju, Mr. Adari G V Chiranjeevi<br>
                                <strong>Book:</strong> Cyber security-Issues, Challenges –Solutions-Business | <em>IGI Global Publications</em><br>
                                <strong>Timeline:</strong> October 2022 | Pages 18-32<br>
                                <strong>Identifiers:</strong> ISBN-9781668458273 | DOI: 10.4018/978-1-6684-5827-3.ch002
                            </div>
                        </td>
                        <td style="text-align: center; vertical-align: middle; padding: 12px;">
                            <a href="https://google.com" target="_blank" rel="noopener noreferrer" class="credential-link" style="color: #0066cc; text-decoration: underline;">View Digital Drive ↗</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    openHTMLModal('Research Publications', publicationsHTML);
}
// FORMATTED CONTENT MAPPING: SKILL DEVELOPMENT & FACULTY DEVELOPMENT PROGRAMS (FDP)
function showDevelopmentProgramsModal() {
    const fdpHTML = `
        <div class="modal-credentials-layout">
            <p style="margin-bottom: 20px; color: #555; text-align: left; font-size: 0.95rem;">
                Review the split category panels documenting institutional upgrades, certifications, and structural skill operations below.
            </p>

            <!-- PANEL 1: TEACHING METHODOLOGIES & OBE -->
            <div id="tab-pedagogy" class="dev-panel active" style="margin-bottom: 25px;">
                <table class="modal-data-table" style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="border-bottom: 2px solid #e2e8f0; background: #f7fafc;">
                            <th style="width: 75%; text-align: left; padding: 10px;">Program Details</th>
                            <th style="width: 25%; text-align: center; padding: 10px;">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid #edf2f7;">
                            <td style="padding: 10px;">
                                <div class="pub-title" style="font-weight: 600;">Two-day FDP on OBE Focused curriculum design</div>
                                <div class="pub-meta" style="font-size: 0.85rem; color: #555; margin-top: 4px;"><strong>Organized by:</strong> IQAC cell, Sandip university, Nashik<br><strong>Timeline:</strong> 8-9 November 2026</div>
                            </td>
                            <td style="text-align: center; padding: 10px; vertical-align: middle;"><a href="https://drive.google.com" target="_blank" rel="noopener noreferrer" class="credential-link">Verify ↗</a></td>
                        </tr>
                        <tr style="border-bottom: 1px solid #edf2f7;">
                            <td style="padding: 10px;">
                                <div class="pub-title" style="font-weight: 600;">OBE workshop held at VIIT</div>
                                <div class="pub-meta" style="font-size: 0.85rem; color: #555; margin-top: 4px;"><strong>Organized by:</strong> KLETU<br><strong>Timeline:</strong> 04-05-2018 to 06-05-2018</div>
                            </td>
                            <td style="text-align: center; padding: 10px; vertical-align: middle;"><a href="https://drive.google.com/file/d/1j1mjO6aEZ12zLIIF9gApTPkbtt-4llrG/view?usp=drive_link" target="_blank" rel="noopener noreferrer" class="credential-link">Verify ↗</a></td>
                        </tr>
                        <tr style="border-bottom: 1px solid #edf2f7;">
                            <td style="padding: 10px;">
                                <div class="pub-title" style="font-weight: 600;">One day national workshop on MOOCs and E-learning in higher Education</div>
                                <div class="pub-meta" style="font-size: 0.85rem; color: #555; margin-top: 4px;"><strong>Organized by:</strong> Guru Angad dev Teaching Learning centre of MHRD, SGTB khalsa college, University of Delhi<br><strong>Timeline:</strong> 18-08-2018</div>
                            </td>
                            <td style="text-align: center; padding: 10px; vertical-align: middle;"><a href="https://drive.google.com" target="_blank" rel="noopener noreferrer" class="credential-link">Verify ↗</a></td>
                        </tr>
                        <tr style="border-bottom: 1px solid #edf2f7;">
                            <td style="padding: 10px;">
                                <div class="pub-title" style="font-weight: 600;">Three day workshop on counselling system and guidance</div>
                                <div class="pub-meta" style="font-size: 0.85rem; color: #555; margin-top: 4px;"><strong>Organized by:</strong> Medhas I – Train, Hyderabad<br><strong>Timeline:</strong> 4th to 6th December 2018</div>
                            </td>
                            <td style="text-align: center; padding: 10px; vertical-align: middle;"><a href="https://drive.google.com" target="_blank" rel="noopener noreferrer" class="credential-link">Verify ↗</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- PANEL 2: POWER SYSTEMS & SMART GRIDS -->
            <div id="tab-grids" class="dev-panel" style="margin-bottom: 25px;">
                <table class="modal-data-table" style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="border-bottom: 2px solid #e2e8f0; background: #f7fafc;">
                            <th style="width: 75%; text-align: left; padding: 10px;">Program Details</th>
                            <th style="width: 25%; text-align: center; padding: 10px;">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid #edf2f7;">
                            <td style="padding: 10px;">
                                <div class="pub-title" style="font-weight: 600;">40hr online faculty development programme on Advanced Intelligence and ICT application to power system protection</div>
                                <div class="pub-meta" style="font-size: 0.85rem; color: #555; margin-top: 4px;"><strong>Sponsored by:</strong> MOEIT, GoI | <strong>Organized by:</strong> E&ICT Academy, NIT Warangal and GVPCE(A), Visakhapatnam<br><strong>Timeline:</strong> 18-27 july 2022</div>
                            </td>
                            <td style="text-align: center; padding: 10px; vertical-align: middle;"><a href="https://drive.google.com/file/d/1FTGlrQ25wpVZZLvw3atKn8U_JKMY3986/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="credential-link">Verify ↗</a></td>
                        </tr>
                        <tr style="border-bottom: 1px solid #edf2f7;">
                            <td style="padding: 10px;">
                                <div class="pub-title" style="font-weight: 600;">Five-day online Workshop on 'Integration of renewable energy & EV to microgrid: Prospects and challenges'</div>
                                <div class="pub-meta" style="font-size: 0.85rem; color: #555; margin-top: 4px;"><strong>Under Aegis of:</strong> SPARC | <strong>Organized by:</strong> Department of Electrical and Electronics Engineering, NIT Tiruchirappalli in collaboration with The Hong Kong Polytechnic University<br><strong>Timeline:</strong> 21-02-2022 to 25-02-2022</div>
                            </td>
                            <td style="text-align: center; padding: 10px; vertical-align: middle;"><a href="https://drive.google.com" target="_blank" rel="noopener noreferrer" class="credential-link">Verify ↗</a></td>
                        </tr>
                        <tr style="border-bottom: 1px solid #edf2f7;">
                            <td style="padding: 10px;">
                                <div class="pub-title" style="font-weight: 600;">One week FDP on “Hands on training on Power Electronics and Power systems using Advanced Analytical tools”</div>
                                <div class="pub-meta" style="font-size: 0.85rem; color: #555; margin-top: 4px;"><strong>Organized by:</strong> Andhra university college of Engineering autonomous<br><strong>Timeline:</strong> Feb 5, 2018 to Feb 9, 2018</div>
                            </td>
                            <td style="text-align: center; padding: 10px; vertical-align: middle;"><a href="https://drive.google.com/file/d/1QLDfoRqr1J7r0DYoPU5jUQhx8RIzJnLd/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="credential-link">Verify ↗</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- PANEL 3: EMERGING TRENDS, AI & DATA SCIENCE ANALYTICS -->
            <div id="tab-ai-tech" class="dev-panel" style="margin-bottom: 25px;">
                <table class="modal-data-table" style="width: 100%; border-collapse: collapse;">
                    <thead>
                        <tr style="border-bottom: 2px solid #e2e8f0; background: #f7fafc;">
                            <th style="width: 75%; text-align: left; padding: 10px;">Program Details</th>
                            <th style="width: 25%; text-align: center; padding: 10px;">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr style="border-bottom: 1px solid #edf2f7;">
                            <td style="padding: 10px;">
                                <div class="pub-title" style="font-weight: 600;">MHRD-Sponsored INDO-US International workshop on “IOT and ML Based Microgrid & Energy Management”</div>
                                <div class="pub-meta" style="font-size: 0.85rem; color: #555; margin-top: 4px;"><strong>Organized by:</strong> Department of Electrical and Electronics Engineering, CBIT, Hyderabad<br><strong>Timeline:</strong> 19th to 23rd February 2024</div>
                            </td>
                            <td style="text-align: center; padding: 10px; vertical-align: middle;"><a href="https://drive.google.com" target="_blank" rel="noopener noreferrer" class="credential-link">Verify ↗</a></td>
                        </tr>
                        <tr style="border-bottom: 1px solid #edf2f7;">
                            <td style="padding: 10px;">
                                <div class="pub-title" style="font-weight: 600;">ISTE Approved one week online FDP on Emerging Trends and Applications of Generative AI</div>
                                <div class="pub-title">ISTE Approved one week online FDP on Emerging Trends and Applications of Generative AI</div>
                                <div class="pub-meta"><strong>Organized by:</strong> SVKM's Institute of Technology, Dhule<br><strong>Timeline:</strong> 27th January to 31st January 2025</div>
                            </td>
                            <td style="text-align: center;"><a href="https://drive.google.com/file/d/1YmlsoiGiwx245yxXpe0G3w-MsKJdOcJn/view?usp=drive_link" target="_blank" class="credential-link">Verify ↗</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

                      <!-- PANEL 4: TECHNICAL WEBINARS & NATIONAL EDUCATION PROGRAMS -->
            <div id="tab-webinars" class="dev-panel">
                <div class="program-section-title">Technical Webinars & National Education Programs</div>
                <table class="modal-data-table">
                    <thead>
                        <tr>
                            <th style="width: 75%; text-align: left;">Session Topic & Host Body</th>
                            <th style="width: 25%; text-align: center;">Link</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="pub-title">National Level webinar on “Art of Teaching”</div>
                                <div class="pub-meta"><strong>Organized by:</strong> Department of Electrical and Electronics Engineering, Gayatri Vidya Parishad College of Engineering (Autonomous), Visakhapatnam<br><strong>Timeline:</strong> 7th July, 2020</div>
                            </td>
                            <td style="text-align: center; vertical-align: middle;">
                                <a href="https://drive.google.com/file/d/1Olbu0hbd9Kp0e5ymnBCzDeUQDl2RVfIT/view?usp=drive_link" target="_blank" class="credential-link">Verify ↗</a>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    `;
   // Correct: The first argument is a readable text title, the second is your HTML variable
openHTMLModal('Faculty Up-Skilling & FDP Records', fdpHTML);
}

// FORMATTED CONTENT MAPPING: PROFESSIONAL & ACADEMIC REFERENCES
function showReferencesModal() {
    const referencesHTML = `
        <div class="modal-credentials-layout">
            <style>
                .ref-intro {
                    margin-bottom: 20px; 
                    color: #555; 
                    text-align: left; 
                    font-size: 0.95rem;
                    line-height: 1.5;
                }
                .ref-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
                    gap: 16px;
                    margin-top: 15px;
                }
                .ref-card {
                    background: #f8f9fa;
                    border-left: 4px solid #007bff;
                    padding: 15px;
                    border-radius: 0 6px 6px 0;
                    text-align: left;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                }
                .ref-name {
                    font-size: 1.05rem;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin-bottom: 4px;
                }
                .ref-title {
                    font-size: 0.88rem;
                    color: #4e73df;
                    font-weight: 600;
                    margin-bottom: 2px;
                }
                .ref-org {
                    font-size: 0.85rem;
                    color: #666;
                    margin-bottom: 10px;
                }
                .ref-contact {
                    font-size: 0.88rem;
                    border-top: 1px solid #eaecf0;
                    padding-top: 8px;
                    color: #333;
                }
                .ref-contact strong {
                    color: #555;
                }
                .ref-phone-link {
                    color: #007bff;
                    text-decoration: none;
                    font-weight: 600;
                }
                .ref-phone-link:hover {
                    text-decoration: underline;
                }
            </style>

            <p class="ref-intro">
                The following mentors and institutional leads are available to provide professional or academic verification of my teaching methodologies, engineering workflows, and research contributions:
            </p>

            <div class="ref-grid">
                <!-- REFERENCE 1 -->
                <div class="ref-card">
                    <div class="ref-name">Mr. K Prasad</div>
                    <div class="ref-title">Senior Lecturer (Retired)</div>
                    <div class="ref-org">Government Polytechnic, Vizianagaram</div>
                    <div class="ref-contact">
                        <strong>Cell:</strong> <a href="tel:+919912340292" class="ref-phone-link">+91 99123 40292</a>
                    </div>
                </div>

                <!-- REFERENCE 2 -->
                <div class="ref-card">
                    <div class="ref-name">Mr. K Srikanth</div>
                    <div class="ref-title">Associate Professor</div>
                    <div class="ref-org">Gayatri Vidya Parishad (GVP) College of Engineering, Visakhapatnam</div>
                    <div class="ref-contact">
                        <strong>Cell:</strong> <a href="tel:+919440897892" class="ref-phone-link">+91 94408 97892</a>
                    </div>
                </div>

                <!-- REFERENCE 3 -->
                <div class="ref-card">
                    <div class="ref-name">Dr. Dipak D Bhage</div>
                    <div class="ref-title">Professor</div>
                    <div class="ref-org">Purnam International University (PCU), Pune</div>
                    <div class="ref-contact">
                        <strong>Cell:</strong> <a href="tel:+917083780216" class="ref-phone-link">+91 70837 80216</a>
                    </div>
                </div>

                <!-- REFERENCE 4 -->
                <div class="ref-card">
                    <div class="ref-name">Mrs. Sangita K Chowdary</div>
                    <div class="ref-title">Professor</div>
                    <div class="ref-org">Sandip Institute of Technology & Research Centre (SITRC), Nashik</div>
                    <div class="ref-contact">
                        <strong>Cell:</strong> <a href="tel:+919730199702" class="ref-phone-link">+91 97301 99702</a>
                    </div>
                </div>
            </div>
        </div>
    `;
    openHTMLModal('Verified Professional References', referencesHTML);
}

// NEW EXPLICIT MODAL OVERLAY LAYOUTS FOR ACADEMIC CORE TRACKS
function showExpertiseModal() {
    const expertiseHTML = `
        <div class="modal-credentials-layout" style="text-align: left; line-height: 1.6; font-family: system-ui, -apple-system, sans-serif;"> 
            <p style="margin-bottom: 20px; color: #555; font-size: 0.95rem;">
                Advanced core engineering curriculum and specialized domains handled across accredited institutional timelines:
            </p>

            <div style="display: flex; flex-direction: column; gap: 12px; margin-top: 15px;">
                <div style="background: #f8fafc; border-left: 4px solid #007bff; padding: 12px; border-radius: 0 4px 4px 0; border: 1px solid #e2e8f0; border-left-width: 4px;">
                    <strong style="color: #2d3748; display: block; font-size: 0.98rem; margin-bottom: 2px;">Artificial Intelligence Techniques & Expert Systems</strong>
                    <span style="color: #4a5568; font-size: 0.88rem;">Advanced computational applications, neural networks, and machine learning models integrated into modern electrical infrastructures.</span>
                </div>

                <div style="background: #f8fafc; border-left: 4px solid #007bff; padding: 12px; border-radius: 0 4px 4px 0; border: 1px solid #e2e8f0; border-left-width: 4px;">
                    <strong style="color: #2d3748; display: block; font-size: 0.98rem; margin-bottom: 2px;">Engineering Electromagnetics / Electro Magnetic Fields</strong>
                    <span style="color: #4a5568; font-size: 0.88rem;">Mathematical formulation and field mapping analysis governing electrical equipment and complex grid interactions.</span>
                </div>

                <div style="background: #f8fafc; border-left: 4px solid #007bff; padding: 12px; border-radius: 0 4px 4px 0; border: 1px solid #e2e8f0; border-left-width: 4px;">
                    <strong style="color: #2d3748; display: block; font-size: 0.98rem; margin-bottom: 2px;">Microprocessors, Microcontrollers & Digital Logic Design</strong>
                    <span style="color: #4a5568; font-size: 0.88rem;">Embedded firmware environments, technical hardware architectures, logic switching matrices, and automation operations.</span>
                </div>

                <div style="background: #f8fafc; border-left: 4px solid #007bff; padding: 12px; border-radius: 0 4px 4px 0; border: 1px solid #e2e8f0; border-left-width: 4px;">
                    <strong style="color: #2d3748; display: block; font-size: 0.98rem; margin-bottom: 2px;">Power System Analysis, Protection & Control Systems</strong>
                    <span style="color: #4a5568; font-size: 0.88rem;">Network load flow modeling, protective relay schemes, dynamic transient tracking, stability parameters, and closed-loop control engines.</span>
                </div>

                <div style="background: #f8fafc; border-left: 4px solid #007bff; padding: 12px; border-radius: 0 4px 4px 0; border: 1px solid #e2e8f0; border-left-width: 4px;">
                    <strong style="color: #2d3748; display: block; font-size: 0.98rem; margin-bottom: 2px;">High Voltage Engineering & Non-Conventional Energy Sources</strong>
                    <span style="color: #4a5568; font-size: 0.88rem;">Dielectric breakdown systems, insulation testing, distributed grid engineering generation tracking, solar PV setups, and wind power integration systems.</span>
                </div>
            </div>
        </div>`;
    openHTMLModal('Subject Area Expertise', expertiseHTML);
}

function showSkillsModal() {
    const skillsHTML = `
        <div class="modal-credentials-layout" style="text-align: left; line-height: 1.6; font-family: system-ui, -apple-system, sans-serif;"> 
            
            <!-- SECTION 1: PROGRAMMING CAPABILITIES -->
            <h4 style="color: #007bff; margin-top: 0; margin-bottom: 12px; font-size: 1.1rem; border-left: 3px solid #007bff; padding-left: 8px;">
                Programming Languages & Software Frameworks
            </h4> 
            <div style="display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 25px;">
                <span style="background: #ebf8ff; color: #2b6cb0; padding: 6px 12px; border-radius: 20px; font-size: 0.88rem; font-weight: 600; border: 1px solid #bee3f8;">Python (Advanced)</span>
                <span style="background: #ebf8ff; color: #2b6cb0; padding: 6px 12px; border-radius: 20px; font-size: 0.88rem; font-weight: 600; border: 1px solid #bee3f8;">MATLAB Programming</span>
                <span style="background: #ebf8ff; color: #2b6cb0; padding: 6px 12px; border-radius: 20px; font-size: 0.88rem; font-weight: 600; border: 1px solid #bee3f8;">JavaScript Full-Stack</span>
                <span style="background: #ebf8ff; color: #2b6cb0; padding: 6px 12px; border-radius: 20px; font-size: 0.88rem; font-weight: 600; border: 1px solid #bee3f8;">AI Application Development</span>
                <span style="background: #ebf8ff; color: #2b6cb0; padding: 6px 12px; border-radius: 20px; font-size: 0.88rem; font-weight: 600; border: 1px solid #bee3f8;">Web Development</span>
                <span style="background: #ebf8ff; color: #2b6cb0; padding: 6px 12px; border-radius: 20px; font-size: 0.88rem; font-weight: 600; border: 1px solid #bee3f8;">Java Core (Basics)</span>
            </div>

            <!-- SECTION 2: SPECIALIZED COMPETENCIES -->
            <h4 style="color: #007bff; margin-top: 15px; margin-bottom: 12px; font-size: 1.1rem; border-left: 3px solid #007bff; padding-left: 8px;">
                Specialized Engineering Toolsets & Competencies
            </h4> 
            <table class="modal-data-table" style="width: 100%; border-collapse: collapse; margin-top: 10px;">
                <thead>
                    <tr style="border-bottom: 2px solid #e2e8f0; background: #f7fafc;">
                        <th style="padding: 10px; text-align: left; width: 30%; font-size: 0.9rem; color: #4a5568;">Domain Matrix</th>
                        <th style="padding: 10px; text-align: left; width: 70%; font-size: 0.9rem; color: #4a5568;">Technical Competency Details</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px; vertical-align: top;"><strong>Specialized Tracks</strong></td>
                        <td style="padding: 12px; color: #2d3748;">Artificial Intelligence Web Design, Engineering Data Science Analytics, & Enterprise Cybersecurity Operations.</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #edf2f7;">
                        <td style="padding: 12px; vertical-align: top;"><strong>Core Simulation</strong></td>
                        <td style="padding: 12px; color: #2d3748;">Power Electronics Transient Analysis, FACTS Controller System Modeling, and Microgrid Smart Grid Simulation Twins (MATLAB/Simulink).</td>
                    </tr>
                </tbody>
            </table>
        </div>`;
    openHTMLModal('Technical Skills & Toolsets', skillsHTML);
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
