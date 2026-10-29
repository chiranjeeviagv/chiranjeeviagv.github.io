// Pre-defined texts for dynamic Career Objectives
const objectives = {
     academic: "Seeking a challenging position in an academic institution to leverage research, teaching methodology, and institutional development expertise.",
    industry: "An Electrical Engineer and Software professional, forever a student, dreaming for a career in a nice environment which is technically and ethically developed."};

// Tracks active view globally
let currentActiveView = 'academic';

// INTERACTIVE BUTTON SWITCH & INITIALIZATION ENGINE
// UNIFIED INTERACTIVE SWITCH & INITIALIZATION ENGINE
document.addEventListener("DOMContentLoaded", () => {
    // 1. Top view navigation selection hooks
    document.getElementById('btn-academic')?.addEventListener('click', () => switchView('academic'));
    document.getElementById('btn-industry')?.addEventListener('click', () => switchView('industry'));

    // 2. UNIFIED LOOP ENGINES FOR INTERACTIVE BUTTON CLICKS
    // This loops through ALL matching data-section buttons so both Qualifications elements function correctly!
    document.querySelectorAll('[data-section="qualifications"]').forEach(btn => {
        btn.addEventListener('click', showQualificationsModal);
    });

    document.querySelectorAll('[data-section="certifications"]').forEach(btn => {
        btn.addEventListener('click', showCertificationsModal);
    });

    document.querySelectorAll('[data-section="experience"]').forEach(btn => {
        btn.addEventListener('click', showExperienceModal);
    });

    document.querySelectorAll('[data-section="publications"]').forEach(btn => {
        btn.addEventListener('click', showPublicationsModal);
    });

    document.querySelectorAll('[data-section="references"]').forEach(btn => {
        btn.addEventListener('click', showReferencesModal);
    });

    document.querySelectorAll('[data-section="expertise"]').forEach(btn => {
        btn.addEventListener('click', showExpertiseModal);
    });

    document.querySelectorAll('[data-section="skills"]').forEach(btn => {
        btn.addEventListener('click', showSkillsModal);
    });

    document.querySelectorAll('[data-section="conferences"]').forEach(btn => {
        btn.addEventListener('click', showConferencesModal);
    });

    // 3. Stabilized Lookup for Skill Development button
    document.querySelectorAll('[data-section="fdps"]').forEach(btn => {
        btn.addEventListener('click', showDevelopmentProgramsModal);
    });

    // 4. Bind explicit close controls
    document.getElementById('close-modal-btn')?.addEventListener('click', closeModal);

    // 5. Ambient backdrop click safety release setup
    const modalOverlay = document.getElementById('details-modal');
    modalOverlay?.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });
});

function switchView(viewType) {
    currentActiveView = viewType;
    const btnAcademic = document.getElementById('btn-academic');
    const btnIndustry = document.getElementById('btn-industry');
    
    // Safety check in case elements aren't loaded yet
    if (!btnAcademic || !btnIndustry) return;

    if (viewType === 'academic') {
        btnAcademic.classList.add('active');
        btnIndustry.classList.remove('active');
    } else {
        btnIndustry.classList.add('active');
        btnAcademic.classList.remove('active');
    }

    const objectiveTextEl = document.getElementById('objective-text');
    if (objectiveTextEl) {
        objectiveTextEl.innerText = objectives[viewType];
    }

    const academicSections = document.querySelectorAll('.academic-only');
    const industrySections = document.querySelectorAll('.industry-only');

    // Update main grid items
    if (viewType === 'academic') {
        academicSections.forEach(el => el.style.setProperty('display', 'flex', 'important')); 
        industrySections.forEach(el => el.style.setProperty('display', 'none', 'important'));
        
        // Show/Hide relevant navigation button tracks
        document.querySelectorAll('.academic-nav').forEach(el => el.style.display = 'inline-block');
        document.querySelectorAll('.industry-nav').forEach(el => el.style.display = 'none');
    } else {
        academicSections.forEach(el => el.style.setProperty('display', 'none', 'important'));
        industrySections.forEach(el => el.style.setProperty('display', 'flex', 'important'));
        
        // Show/Hide relevant navigation button tracks
        document.querySelectorAll('.academic-nav').forEach(el => el.style.display = 'none');
        document.querySelectorAll('.industry-nav').forEach(el => el.style.display = 'inline-block');
    }
}

// SMART NAVIGATION SCROLL ROUTINE
function navigateToSection(sectionId) {
    const targetElement = document.getElementById(sectionId);
    
    if (targetElement) {
        if (targetElement.classList.contains('academic-only') && currentActiveView !== 'academic') {
            switchView('academic');
        } else if (targetElement.classList.contains('industry-only') && currentActiveView !== 'industry') {
            switchView('industry');
        }
        
        setTimeout(() => {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            
            targetElement.style.outline = "2px solid #007bff";
            setTimeout(() => { targetElement.style.outline = "none"; }, 1500);
        }, 100);
    }
}

// FORMATTED CONTENT MAPPING: QUALIFICATIONS CONTENT PAYLOAD
function showQualificationsModal() {
    const qualificationsHTML = `
        <div class="modal-credentials-layout">
            <p style="margin-bottom: 20px; color: #555; text-align: left; font-size: 0.95rem;">
                Click on the embedded links in the right column to view verified certificate documents hosted on Google Drive.
            </p>
            <table class="modal-data-table">
                <thead>
                    <tr>
                        <th>Qualification & Stream</th>
                        <th>Institution / Board</th>
                        <th>Year & Performance</th>
                        <th>Verification Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>M.Tech.</strong><br><span style="color: #666; font-size: 0.85rem;">High Voltage Engineering (HVE)</span></td>
                        <td>JNTU, Kakinada</td>
                        <td>2012<br><span style="color: #28a745; font-weight: 600;">72.00% (Distinction)</span></td>
                        <td><a href="https://drive.google.com/file/d/1kZD7vgJqHsifE2tw9LUEyVgCb6adR8HM/view?usp=sharing" target="_blank" class="credential-link">View M.Tech Certificate ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>B.Tech.</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering (EEE)</span></td>
                        <td>Chaitanya Engineering College, Visakhapatnam</td>
                        <td>2007<br><span style="color: #28a745; font-weight: 600;">71.63% (Distinction)</span></td>
                        <td><a href="https://drive.google.com/file/d/1SMhWIF0aFxWplG4e83fom6THEuU4RtgS/view?usp=sharing" target="_blank" class="credential-link">View B.Tech Certificate ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>Intermediate</strong><br><span style="color: #666; font-size: 0.85rem;">MPC (Maths, Physics, Chemistry)</span></td>
                        <td>Gayatri Junior College, Vizianagaram</td>
                        <td>2003<br><span style="color: #007bff; font-weight: 600;">94.10% (First Class)</span></td>
                        <td><a href="https://drive.google.com/file/d/1EF5XlMU8kwqbM_g7lFCqYSwNuwtHFklk/view?usp=sharing" target="_blank" class="credential-link">View Inter Certificate ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>SSC</strong><br><span style="color: #666; font-size: 0.85rem;">Secondary School Certificate</span></td>
                        <td>ZP High School, Jami, Vizianagaram</td>
                        <td>2001<br><span style="color: #007bff; font-weight: 600;">89.86% (First Class)</span></td>
                        <td><a href="https://drive.google.com/file/d/12HNfZv_ltMW8Lw_KnB7q5gLGwAwHcxQU/view?usp=sharing" target="_blank" class="credential-link">View SSC Certificate ↗</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    openHTMLModal('Qualifications', qualificationsHTML);
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
            <table class="modal-data-table" style="margin-bottom: 30px;">
                <thead>
                    <tr>
                        <th>Specialization Program</th>
                        <th>Issuing Organization</th>
                        <th>Verification Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>IBM Full Stack JavaScript Developer</strong><br><span style="color: #666; font-size: 0.85rem;">12-Course Specialization</span></td>
                        <td>IBM</td>
                        <td><a href="https://www.coursera.org/account/accomplishments/specialization/L2Q2VEP5W243" target="_blank" class="credential-link">View Certificate ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>IBM JavaScript Backend Developer</strong><br><span style="color: #666; font-size: 0.85rem;">13-Course Specialization</span></td>
                        <td>IBM</td>
                        <td><a href="https://coursera.org" target="_blank" class="credential-link">View Certificate ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>IBM AI Developer</strong><br><span style="color: #666; font-size: 0.85rem;">10-Course Specialization</span></td>
                        <td>IBM</td>
                        <td><a href="https://www.coursera.org/account/accomplishments/professional-cert/E06UAT9KFM8S" target="_blank" class="credential-link">View Certificate ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>IBM JAVA Developer</strong><br><span style="color: #666; font-size: 0.85rem;">14-Course Specialization</span></td>
                        <td>IBM</td>
                        <td><a href="https://www.coursera.org/account/accomplishments/professional-cert/CGMXJ0SN33A5" target="_blank" class="credential-link">View Certificate ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>Microsoft AI and ML Engineering</strong><br><span style="color: #666; font-size: 0.85rem;">5-Course Specialization</span></td>
                        <td>Microsoft</td>
                        <td><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/5SGHZ101WA4W" target="_blank" class="credential-link">View Certificate ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>Google Cyber Security</strong><br><span style="color: #666; font-size: 0.85rem;">9-Course Specialization</span></td>
                        <td>Google</td>
                        <td><a href="https://www.coursera.org/account/accomplishments/professional-cert/SZEO3FT6Q193" target="_blank" class="credential-link">View Certificate ↗</a></td>
                    </tr>
                </tbody>
            </table>

            <h3 style="text-align: left; color: #007bff; margin: 20px 0 10px 0; font-size: 1.15rem; border-left: 3px solid #007bff; padding-left: 8px;">
                NPTEL (IIT) Certifications
            </h3>
            <table class="modal-data-table">
                <thead>
                    <tr>
                        <th>Course Module</th>
                        <th>Timeline</th>
                        <th>Verification Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Advanced Computer Architecture</strong></td>
                        <td>April 2026</td>
                        <td><a href="https://drive.google.com/file/d/1yQeZ1-coDoRCZBwwtXYv7aXvsFdXdBTV/view?usp=sharing" target="_blank" class="credential-link">View NPTEL Drive ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>Advanced Computer Networks</strong></td>
                        <td>April 2025</td>
                        <td><a href="https://drive.google.com/file/d/1CyKiCImdnXHfHaCmLDpV2pUHx6PvOmti/view?usp=sharing" target="_blank" class="credential-link">View NPTEL Drive ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>Practical Cyber Security for Practitioners</strong></td>
                        <td>Oct 2024</td>
                        <td><a href="https://drive.google.com/file/d/13fxey0JvaQSHKq4JAOxsczLCXCl887uz/view?usp=sharing" target="_blank" class="credential-link">View NPTEL Drive ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>Cloud Computing</strong></td>
                        <td>Oct 2024</td>
                        <td><a href="https://drive.google.com/file/d/1DtA5WR6waMt2C8tUpDK-K55aZx_pkRn/view?usp=sharing" target="_blank" class="credential-link">View NPTEL Drive ↗</a></td>
                    </tr>
                     <tr>
                        <td><strong>Big Data Computing</strong></td>
                        <td>Oct 2023</td>
                        <td><a href="https://google.com" target="_blank" class="credential-link">View NPTEL Drive ↗</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    openHTMLModal('Advanced Certifications & Up-Skilling', certificationsHTML);
}
// FORMATTED CONTENT MAPPING: CONFERENCES ATTENDED TIMELINE
function showConferencesModal() {
    const conferencesHTML = `
        <div class="modal-credentials-layout">
            <style>
                .conf-timeline {
                    display: flex;
                    flex-direction: column;
                    gap: 20px;
                    margin-top: 10px;
                }
                .conf-card {
                    background: #f8f9fa;
                    border-left: 4px solid #007bff;
                    padding: 16px;
                    border-radius: 0 6px 6px 0;
                    text-align: left;
                    box-shadow: 0 2px 4px rgba(0,0,0,0.05);
                }
                .conf-paper-title {
                    font-size: 1rem;
                    font-weight: 700;
                    color: #1a1a1a;
                    line-height: 1.4;
                    margin-bottom: 6px;
                }
                .conf-name {
                    font-size: 0.9rem;
                    font-weight: 600;
                    color: #4e73df;
                    margin-bottom: 4px;
                }
                .conf-meta {
                    font-size: 0.85rem;
                    color: #666;
                    line-height: 1.5;
                }
                .conf-meta strong {
                    color: #444;
                }
            </style>

            <p style="margin-bottom: 20px; color: #555; text-align: left; font-size: 0.95rem;">
                Review my verified record of national and international conference presentations below:
            </p>

            <div class="conf-timeline">
                <!-- CONFERENCE 1 -->
                <div class="conf-card">
                    <div class="conf-paper-title">"System knowledge for digital twin technologies in Industry 4.0 and Industry 5.0"</div>
                    <div class="conf-name">5th International E-Conference on Mechanical and Material Science Engineering: Innovation and Research (ICMMSE:IR)</div>
                    <div class="conf-meta">
                        <strong>Organized by:</strong> Department of Mechanical Engineering, Sandip Institute of Technology & Research Centre (SITRC), Nashik, Maharashtra<br>
                        <strong>Timeline:</strong> 27th and 28th of February 2026
                    </div>
                </div>

                <!-- CONFERENCE 2 -->
                <div class="conf-card">
                    <div class="conf-paper-title">"Cyber Security in smart grids- Role of Digital Advanced devices"</div>
                    <div class="conf-name">Two Day National Conference on "Green and Resilient Energy Systems" (GVCON-2K22)</div>
                    <div class="conf-meta">
                        <strong>Organized by:</strong> Electrical & Electronics Engineering Department, Gayatri Vidya Parishad College of Engineering (Autonomous), Visakhapatnam<br>
                        <strong>Timeline:</strong> 21st to 22nd October, 2022
                    </div>
                </div>

                <!-- CONFERENCE 3 -->
                <div class="conf-card">
                    <div class="conf-paper-title">"Transient Stability Improvement of SMIB using DPFC"</div>
                    <div class="conf-name">Two Day National Conference on "Recent Trends in Electrical and Electronics Engineering" (RTEEE)</div>
                    <div class="conf-meta">
                        <strong>Organized by:</strong> Vignan's Institute of Information Technology, Visakhapatnam<br>
                        <strong>Timeline:</strong> 14th and 15th of April 2017
                    </div>
                </div>
            </div>
        </div>
    `;
    openHTMLModal('Conferences Attended & Research Presentations', conferencesHTML);
}

// 2️⃣ MODAL PAYLOAD: PROFESSIONAL EXPERIENCE TIMELINE
function showExperienceModal() {
    const experienceHTML = `
        <div class="modal-credentials-layout">
            <p style="margin-bottom: 20px; color: #555; text-align: left; font-size: 0.95rem;">
                Review my academic teaching milestones and institutional service records below.
            </p>
            
            <table class="modal-data-table">
                <thead>
                    <tr>
                        <th>Designation & Department</th>
                        <th>Institution & Location</th>
                        <th>Tenure Period</th>
                        <th>Verification Records</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Assistant Professor</strong><br><span style="color: #007bff; font-size: 0.85rem;">Electrical Engineering (AI & ML)</span></td>
                        <td>Sandip Institute of Technology and Research Centre (Sandip University), Nashik, Maharashtra</td>
                        <td>27-06-2025 – 31-05-2026</td>
                        <td><a href="https://drive.google.com/file/d/1kQQ39YCL-o0eyFySFIgzR0qddAOVe5Ch/view?usp=sharing" target="_blank" class="credential-link">View Service Doc ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>Assistant Professor</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering</span></td>
                        <td>Guru Nanak Institute of Technology (Autonomous), Ibrahimpatnam, Hyderabad</td>
                        <td>16-02-2023 – 11-01-2025</td>
                        <td><a href="https://drive.google.com/file/d/1OainG_BsKrMrFH7mFoFg_pD14hV00Q5Z/view?usp=drive_link" target="_blank" class="credential-link">View Experience ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>Assistant Professor</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering</span></td>
                        <td>Malla Reddy Engineering College for Women (Autonomous), Secunderabad</td>
                        <td>18-07-2022 – 15-02-2023</td>
                        <td><a href="https://drive.google.com/file/d/1pu58nrED6xGO_hKPntDO-8npcOayLDhY/view?usp=sharing" target="_blank" class="credential-link">View Service Doc ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>Senior Assistant Professor</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering</span></td>
                        <td>Aditya College of Engineering, Surampalem, Andhra Pradesh</td>
                        <td>22-11-2019 – 26-07-2021</td>
                        <td><a href="https://drive.google.com/file/d/1kQQ39YCL-o0eyFySFIgzR0qddAOVe5Ch/view?usp=sharing" target="_blank" class="credential-link">View Service Doc ↗</a></td>
                    </tr>
                     <tr>
                        <td><strong>Assistant Professor</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering</span></td>
                        <td>Vignan’s Institute of Information Technology (Autonomous), Visakhapatnam, Andhra Pradesh</td>
                        <td>13-03-2015 – 04-11-2019</td>
                        <td><a href="https://drive.google.com/file/d/1ooZQskDGa9NDLdzE-CIZeBs-bVynoz_8/view?usp=sharing" target="_blank" class="credential-link">View Experience ↗</a></td>
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
            <table class="modal-data-table">
                <thead>
                    <tr>
                        <th style="width: 75%; text-align: left;">Journal Paper & Research Context</th>
                        <th style="width: 25%; text-align: center;">Document Access</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="pub-title">"Transient stability improvement of Single Machine Infinite Bus (SMIB) system Using Distributed Power Flow Controller (DPFC)"</div>
                            <div class="pub-meta">
                                <strong>Author:</strong> G V Chiranjeevi Adari<br>
                                <strong>Journal:</strong> International Journal of Pure and Applied Mathematics (IJPAM)<br>
                                <strong>Volume & Timeline:</strong> Vol. 114, No. 8, 2017 (pp. 285-295)<br>
                                <strong>Identifiers:</strong> ISSN: 1311-8080 (Print) / 1314-3395 (Online)
                            </div>
                        </td>
                        <td style="text-align: center; vertical-align: middle;">
                            <a href="https://acadpubl.eu/jsi/2017-114-7-ICPCIT-2017/articles/8/27.pdf" target="_blank" class="credential-link">View Journal PDF ↗</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="pub-title">"Application of SVC for Multiobjective Optimization Powerflow Problem Using PSO"</div>
                            <div class="pub-meta">
                                <strong>Authors:</strong> P.Ramesh, A.G.V Chiranjeevi and Kottala Padma<br>
                                <strong>Journal:</strong> International Journal of Pure and Applied Mathematics (IJPAM)<br>
                                <strong>Volume & Timeline:</strong> Vol. 114, No. 8, 2017 (pp. 23-33)<br>
                                <strong>Identifiers:</strong> ISSN: 1311-8080 (Print) / 1314-3395 (Online)
                            </div>
                        </td>
                        <td style="text-align: center; vertical-align: middle;">
                            <a href="https://acadpubl.eu/jsi/2017-114-7-ICPCIT-2017/articles/8/3.pdf" target="_blank" class="credential-link">View Journal PDF ↗</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="pub-title">"Dynamic Stability Improvement of a Smart Grid using Neural Network Based STATCOM"</div>
                            <div class="pub-meta">
                                <strong>Author:</strong> G V Chiranjeevi Adari<br>
                                <strong>Journal:</strong> Indian Journal of Science and Technology (INDJST)
                            </div>
                        </td>
                        <td style="text-align: center; vertical-align: middle;">
                            <a href="https://indjst.org/articles/dynamic-stability-improvement-of-a-smart-grid-using-neural-network-based-statcom" target="_blank" class="credential-link">View Article Portal ↗</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="pub-title">"A Grid Interfaced Low Frequency Offshore Wind Power"</div>
                            <div class="pub-meta">
                                <strong>Author:</strong> AGV Chiranjeevi<br>
                                <strong>Journal:</strong> International Journal for Research in Applied Science & Engineering Technology (IJRASET)<br>
                                <strong>Volume & Timeline:</strong> Vol. 3, Issue III, March 2015 (p. 544)<br>
                                <strong>Identifiers:</strong> ISSN: 2321-9653
                            </div>
                        </td>
                        <td style="text-align: center; vertical-align: middle;">
                            <a href="https://www.ijraset.com/fileserve.php?FID=2047" target="_blank" class="credential-link">View Repository File ↗</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="pub-title">"Simulation Based Analysis for Fixing Optimal Stages for a H-Bridge Cascaded Multi-Level Converters"</div>
                            <div class="pub-meta">
                                <strong>Authors:</strong> RASEKHAR VADDI, ADARI G. V. CHIRANJEEVI<br>
                                <strong>Journal:</strong> International Journal of Scientific Engineering and Technology Research (IJSETR)<br>
                                <strong>Volume & Timeline:</strong> Vol. 05, Issue 07, March-2016 (pp. 1342-1346)<br>
                                <strong>Identifiers:</strong> ISSN: 2319-8885
                            </div>
                        </td>
                        <td style="text-align: center; vertical-align: middle;">
                            <a href="https://ijsetr.com/uploads/463251IJSETR9076-240.pdf" target="_blank" class="credential-link">View Server PDF ↗</a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- SECTION 2: BOOK CHAPTERS -->
            <div class="publication-section-title">📖 Indexed Book Chapters & Additional Material</div>
            <table class="modal-data-table">
                <thead>
                    <tr>
                        <th style="width: 75%; text-align: left;">Chapter Details & Monograph Data</th>
                        <th style="width: 25%; text-align: center;">Storage Drive Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="pub-title">"Cyber security in smart Grids:-Role of Digital Advanced Devices"</div>
                            <div class="pub-meta">
                                <strong>Authors:</strong> Prof. M Ramalinga Raju, Mr. Adari G V Chiranjeevi<br>
                                <strong>Book:</strong> Cyber security-Issues, Challenges –Solutions-Business | <em>IGI Global Publications</em><br>
                                <strong>Timeline:</strong> October 2022 | Pages 18-32<br>
                                <strong>Identifiers:</strong> ISBN-9781668458273 | DOI: 10.4018/978-1-6684-5827-3.ch002
                            </div>
                        </td>
                        <td style="text-align: center; vertical-align: middle;">
                            <a href="DOI- 10.4018/978-1-6684-5827-3.ch002" target="_blank" class="credential-link">View Drive File ↗</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    openHTMLModal('Publications & Research Portfolios', publicationsHTML);
}

// UNIFIED CONSOLIDATED MODAL LIFECYCLE MANAGEMENT ENGINE
function openHTMLModal(title, htmlContent) {
    const modal = document.getElementById('details-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    if (modal && modalTitle && modalBody) {
        modalTitle.innerText = title;
        modalBody.innerHTML = htmlContent;
        
        // Remove structural hidden class and force flex display seamlessly
        modal.classList.remove('hidden');
        modal.style.setProperty('display', 'flex', 'important');
        document.body.style.overflow = 'hidden'; // Lock background scrolling
    }
}

function closeModal() {
    const modal = document.getElementById('details-modal');
    if (modal) {
        // Safe reset state visibility flags completely
        modal.classList.add('hidden');
        modal.style.setProperty('display', 'none', 'important');
        document.body.style.overflow = ''; // Restore background scrolling
    }
}

function openModal(title, text) {
    openHTMLModal(title, `<p style="color:#333; line-height:1.6; text-align:left;">${text}</p>`);
}

// STABILIZED INITIALIZATION INTERACTIVE HANDLER ENGINE
document.addEventListener("DOMContentLoaded", () => {
    // 1. Top view navigation view toggle selection hooks
    document.getElementById('btn-academic')?.addEventListener('click', () => switchView('academic'));
    document.getElementById('btn-industry')?.addEventListener('click', () => switchView('industry'));

    // 2. Comprehensive loop triggers connecting ALL interactive grid sections
    document.querySelectorAll('[data-section="qualifications"]').forEach(btn => {
        btn.addEventListener('click', showQualificationsModal);
    });
    document.querySelectorAll('[data-section="certifications"]').forEach(btn => {
        btn.addEventListener('click', showCertificationsModal);
    });
    document.querySelectorAll('[data-section="experience"]').forEach(btn => {
        btn.addEventListener('click', showExperienceModal);
    });
    document.querySelectorAll('[data-section="publications"]').forEach(btn => {
        btn.addEventListener('click', showPublicationsModal);
    });
    document.querySelectorAll('[data-section="references"]').forEach(btn => {
        btn.addEventListener('click', showReferencesModal);
    });
    document.querySelectorAll('[data-section="expertise"]').forEach(btn => {
        btn.addEventListener('click', showExpertiseModal);
    });
    document.querySelectorAll('[data-section="skills"]').forEach(btn => {
        btn.addEventListener('click', showSkillsModal);
    });
    document.querySelectorAll('[data-section="conferences"]').forEach(btn => {
        btn.addEventListener('click', showConferencesModal);
    });
    document.querySelectorAll('[data-section="fdps"]').forEach(btn => {
        btn.addEventListener('click', showDevelopmentProgramsModal);
    });

    // 3. Bind explicit structural exit close buttons
    document.getElementById('close-modal-btn')?.addEventListener('click', closeModal);

    // 4. Ambient backdrop backdrop click safety release overlay setup
    const modalOverlay = document.getElementById('details-modal');
    modalOverlay?.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });
});
// FORMATTED CONTENT MAPPING: PROFESSIONAL DEVELOPMENT & TRAINING PAYLOAD
function showDevelopmentProgramsModal() {
    const programsHTML = `
        <div class="modal-credentials-layout">
            <style>
                .dev-tab-container {
                    display: flex;
                    gap: 8px;
                    border-bottom: 2px solid #e3e6f0;
                    margin-bottom: 20px;
                    padding-bottom: 5px;
                    overflow-x: auto;
                }
                .dev-tab-btn {
                    padding: 8px 16px;
                    font-size: 0.88rem;
                    font-weight: 600;
                    color: #666;
                    background: none;
                    border: none;
                    cursor: pointer;
                    white-space: nowrap;
                    border-bottom: 3px solid transparent;
                    transition: all 0.2s ease;
                }
                .dev-tab-btn.active {
                    color: #28a745;
                    border-bottom-color: #28a745;
                }
                .dev-panel { display: none; }
                .dev-panel.active { display: block; }
                .program-section-title {
                    font-size: 1.1rem;
                    color: #28a745;
                    margin: 15px 0 10px 0;
                    padding-bottom: 3px;
                    text-align: left;
                    font-weight: 600;
                }
                .pub-title { font-weight: 600; color: #222; text-align: left; }
                .pub-meta { font-size: 0.85rem; color: #666; margin-top: 4px; text-align: left; }
                .credential-link { font-size: 0.85rem; white-space: nowrap; }
            </style>

            <p style="margin-bottom: 15px; color: #555; text-align: left; font-size: 0.92rem;">
                Use the tabs below to navigate across different thematic specializations and academic programs.
            </p>

            <!-- Navigation Tabs Matrix -->
            <div class="dev-tab-container">
                <button class="dev-tab-btn active" onclick="switchDevTab(event, 'tab-pedagogy')">🎓 Teaching & Pedagogy</button>
                <button class="dev-tab-btn" onclick="switchDevTab(event, 'tab-grids')">⚡ Smart Grids & Systems</button>
                <button class="dev-tab-btn" onclick="switchDevTab(event, 'tab-ai-tech')">🤖 AI, Data Science & Tech</button>
                <button class="dev-tab-btn" onclick="switchDevTab(event, 'tab-webinars')">🌐 Webinars & Others</button>
            </div>
            
            <!-- PANEL 1: TEACHING METHODOLOGIES & OBE -->
            <div id="tab-pedagogy" class="dev-panel active">
                <div class="program-section-title">Teaching Methodologies and Outcome Based Education</div>
                <table class="modal-data-table">
                    <thead>
                        <tr><th style="width: 75%;">Program Details</th><th style="width: 25%;">Link</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="pub-title">Two-day FDP on OBE Focused curriculum design</div>
                                <div class="pub-meta"><strong>Organized by:</strong> IQAC cell, Sandip university, Nashik<br><strong>Timeline:</strong> 8-9 November 2026</div>
                            </td>
                            <td style="text-align: center;"><a href="https://google.com" target="_blank" class="credential-link">Verify ↗</a></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="pub-title">OBE workshop held at VIIT</div>
                                <div class="pub-meta"><strong>Organized by:</strong> KLETU<br><strong>Timeline:</strong> 04-05-2018 to 06-05-2018</div>
                            </td>
                            <td style="text-align: center;"><a href="https://google.com" target="_blank" class="credential-link">Verify ↗</a></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="pub-title">One day national workshop on MOOCs and E-learning in higher Education</div>
                                <div class="pub-meta"><strong>Organized by:</strong> Guru Angad dev Teaching Learning centre of MHRD, SGTB khalsa college, University of Delhi<br><strong>Timeline:</strong> 18-08-2018</div>
                            </td>
                            <td style="text-align: center;"><a href="https://google.com" target="_blank" class="credential-link">Verify ↗</a></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="pub-title">Three day workshop on counselling system and guidance</div>
                                <div class="pub-meta"><strong>Organized by:</strong> Medhas I – Train, Hyderabad<br><strong>Timeline:</strong> 4th to 6th December 2018</div>
                            </td>
                            <td style="text-align: center;"><a href="https://google.com" target="_blank" class="credential-link">Verify ↗</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- PANEL 2: POWER SYSTEMS & SMART GRIDS -->
            <div id="tab-grids" class="dev-panel">
                <div class="program-section-title">Power Systems, Electronics & Smart Grids</div>
                <table class="modal-data-table">
                    <thead>
                        <tr><th style="width: 75%;">Program Details</th><th style="width: 25%;">Link</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="pub-title">40hr online faculty development programme on Advanced Intelligence and ICT application to power system protection</div>
                                <div class="pub-meta"><strong>Sponsored by:</strong> MOEIT, GoI | <strong>Organized by:</strong> E&ICT Academy, NIT Warangal and GVPCE(A), Visakhapatnam<br><strong>Timeline:</strong> 18-27 july 2022</div>
                            </td>
                            <td style="text-align: center;"><a href="https://google.com" target="_blank" class="credential-link">Verify ↗</a></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="pub-title">Five-day online Workshop on 'Integration of renewable energy & EV to microgrid: Prospects and challenges'</div>
                                <div class="pub-meta"><strong>Under Aegis of:</strong> SPARC | <strong>Organized by:</strong> Department of Electrical and Electronics Engineering, NIT Tiruchirappalli in collaboration with The Hong Kong Polytechnic University<br><strong>Timeline:</strong> 21-02-2022 to 25-02-2022</div>
                            </td>
                            <td style="text-align: center;"><a href="https://google.com" target="_blank" class="credential-link">Verify ↗</a></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="pub-title">One week FDP on “Hands on training on Power Electronics and Power systems using Advanced Analytical tools”</div>
                                <div class="pub-meta"><strong>Organized by:</strong> Andhra university college of Engineering autonomous<br><strong>Timeline:</strong> Feb 5, 2018 to Feb 9, 2018</div>
                            </td>
                            <td style="text-align: center;"><a href="https://google.com" target="_blank" class="credential-link">Verify ↗</a></td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <!-- PANEL 3: EMERGING TRENDS, AI & DATA SCIENCE ANALYTICS -->
            <div id="tab-ai-tech" class="dev-panel">
                <div class="program-section-title">Emerging Trends, AI & Data Science Analytics</div>
                <table class="modal-data-table">
                    <thead>
                        <tr><th style="width: 75%;">Program Details</th><th style="width: 25%;">Link</th></tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="pub-title">ISTE Approved one week online FDP on Emerging Trends and Applications of Generative AI</div>
                                <div class="pub-meta"><strong>Organized by:</strong> SVKM's Institute of Technology, Dhule<br><strong>Timeline:</strong> 27th January to 31st January 2025</div>
                            </td>
                            <td style="text-align: center;"><a href="https://google.com" target="_blank" class="credential-link">Verify ↗</a></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="pub-title">MHRD-Sponsored INDO-US International workshop on “IOT and ML Based Microgrid & Energy Management”</div>
                                <div class="pub-meta"><strong>Organized by:</strong> Department of Electrical and Electronics Engineering, CBIT, Hyderabad<br><strong>Timeline:</strong> 19th to 23rd February 2024</div>
                            </td>
                            <td style="text-align: center;"><a href="https://google.com" target="_blank" class="credential-link">Verify ↗</a></td>
                        </tr>
                        <tr>
                            <td>
                                <div class="pub-title">42 Hours Professional Training Program on “Python for Data Science”</div>

// INLINE MATRIX NAVIGATION HELPER ENGINE
function switchDevTab(event, tabId) {
    // Hide all internal panels inside the modal context container
    const panels = document.querySelectorAll('.dev-panel');
    panels.forEach(panel => panel.classList.remove('active'));

    // Remove active styles from all inline tab button triggers
    const tabButtons = document.querySelectorAll('.dev-tab-btn');
    tabButtons.forEach(btn => btn.classList.remove('active'));

    // Activate the targeted focus tracking selection
    document.getElementById(tabId)?.classList.add('active');
    event.currentTarget.classList.add('active');
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
                    <div class="ref-name">Dr. S Suryaprakasarao</div>
                    <div class="ref-title">Former Professor (AMC) & HoD of ENT</div>
                    <div class="ref-org">Gayatri Medical College (GVPIHC & MT), Visakhapatnam</div>
                    <div class="ref-contact">
                        <strong>Cell:</strong> <a href="tel:+918688381481" class="ref-phone-link">+91 86883 81481</a>
                    </div>
                </div>

                <!-- REFERENCE 2 -->
                <div class="ref-card">
                    <div class="ref-name">Mr. K Prasad</div>
                    <div class="ref-title">Senior Lecturer (Retired)</div>
                    <div class="ref-org">Government Polytechnic, Vizianagaram</div>
                    <div class="ref-contact">
                        <strong>Cell:</strong> <a href="tel:+919912340292" class="ref-phone-link">+91 99123 40292</a>
                    </div>
                </div>

                <!-- REFERENCE 3 -->
                <div class="ref-card">
                    <div class="ref-name">Mr. K Srikanth</div>
                    <div class="ref-title">Associate Professor</div>
                    <div class="ref-org">Gayatri Vidya Parishad (GVP) College of Engineering, Visakhapatnam</div>
                    <div class="ref-contact">
                        <strong>Cell:</strong> <a href="tel:+919440897892" class="ref-phone-link">+91 94408 97892</a>
                    </div>
                </div>

                <!-- REFERENCE 4 -->
                <div class="ref-card">
                    <div class="ref-name">Dr. Dipak D Bhage</div>
                    <div class="ref-title">Professor</div>
                    <div class="ref-org">Purnam International University (PCU), Pune</div>
                    <div class="ref-contact">
                        <strong>Cell:</strong> <a href="tel:+917083780216" class="ref-phone-link">+91 70837 80216</a>
                    </div>
                </div>

                <!-- REFERENCE 5 -->
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
    openHTMLModal('Professional & Academic References', referencesHTML);
}
// NEW EXPLICIT MODAL OVERLAY LAYOUTS FOR ACADEMIC CORE TRACKS
function showExpertiseModal() {
    const expertiseHTML = `
        <div class="modal-credentials-layout" style="text-align: left; line-height: 1.8;"> 
            <h4 style="color: #007bff; margin-top: 0;">Core Engineering Curriculum Handled:</h4> 
            <ul style="color: #333; font-size: 0.95rem; padding-left: 20px;"> 
                <li>Artificial Intelligence Techniques & Expert Systems</li> 
                <li>Electro Magnetic Fields / Engineering Electromagnetics</li> 
                <li>Microprocessors and Microcontrollers & Digital Logic Design</li> 
                <li>Power System Analysis, Protection & Control Systems</li> 
                <li>High Voltage Engineering & Non-Conventional Energy Sources</li> 
            </ul> 
        </div>`;
    openHTMLModal('Subject Area Expertise', expertiseHTML);
}

function showSkillsModal() {
    const skillsHTML = `
        <div class="modal-credentials-layout" style="text-align: left; line-height: 1.8;"> 
            <h4 style="color: #007bff; margin-top: 0;">Programming Toolsets & Competencies:</h4> 
            <ul style="color: #333; font-size: 0.95rem; padding-left: 20px;"> 
                <li><strong>Advanced Languages:</strong> Python, JavaScript (Full-Stack), MATLAB, Java (Basics)</li> 
                <li><strong>Specialized Tracks:</strong> AI Web Design, Data Science, Cyber Security Operations</li> 
                <li><strong>Core Simulation:</strong> Power Electronics Analysis, Grid Transient System Twins</li> 
            </ul> 
        </div>`;
    openHTMLModal('Technical Skills & Toolsets', skillsHTML);
}
