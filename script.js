// Pre-defined texts for dynamic Career Objectives
const objectives = {
    academic: "Seeking a challenging position in an academic institution to leverage research, teaching methodology, and institutional development expertise.",
    industry: "Result-driven professional seeking a core technical role in the industry to apply practical problem-solving skills, engineering workflows, and system optimization."
};

// Tracks active view globally
let currentActiveView = 'academic';

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
                        <td><a href="https://google.com" target="_blank" class="credential-link">View M.Tech Certificate ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>B.Tech.</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering (EEE)</span></td>
                        <td>Chaitanya Engineering College, Visakhapatnam</td>
                        <td>2007<br><span style="color: #28a745; font-weight: 600;">71.63% (Distinction)</span></td>
                        <td><a href="https://google.com" target="_blank" class="credential-link">View B.Tech Certificate ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>Intermediate</strong><br><span style="color: #666; font-size: 0.85rem;">MPC (Maths, Physics, Chemistry)</span></td>
                        <td>Gayatri Junior College, Vizianagaram</td>
                        <td>2003<br><span style="color: #007bff; font-weight: 600;">94.10% (First Class)</span></td>
                        <td><a href="https://google.com" target="_blank" class="credential-link">View Inter Certificate ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>SSC</strong><br><span style="color: #666; font-size: 0.85rem;">Secondary School Certificate</span></td>
                        <td>ZP High School, Jami, Vizianagaram</td>
                        <td>2001<br><span style="color: #007bff; font-weight: 600;">89.86% (First Class)</span></td>
                        <td><a href="https://google.com" target="_blank" class="credential-link">View SSC Certificate ↗</a></td>
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
                        <td><a href="https://coursera.org" target="_blank" class="credential-link">View Certificate ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>IBM JavaScript Backend Developer</strong><br><span style="color: #666; font-size: 0.85rem;">13-Course Specialization</span></td>
                        <td>IBM</td>
                        <td><a href="https://coursera.org" target="_blank" class="credential-link">View Certificate ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>IBM AI Developer</strong><br><span style="color: #666; font-size: 0.85rem;">10-Course Specialization</span></td>
                        <td>IBM</td>
                        <td><a href="https://coursera.org" target="_blank" class="credential-link">View Certificate ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>Microsoft AI and ML Engineering</strong><br><span style="color: #666; font-size: 0.85rem;">5-Course Specialization</span></td>
                        <td>Microsoft</td>
                        <td><a href="https://coursera.org" target="_blank" class="credential-link">View Certificate ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>IBM Java Developer</strong><br><span style="color: #666; font-size: 0.85rem;">14-Course Specialization</span></td>
                        <td>IBM</td>
                        <td><a href="https://coursera.org" target="_blank" class="credential-link">View Certificate ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>Google Cybersecurity Professional</strong><br><span style="color: #666; font-size: 0.85rem;">9-Course Specialization</span></td>
                        <td>Google</td>
                        <td><a href="https://coursera.org" target="_blank" class="credential-link">View Certificate ↗</a></td>
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
                        <td>June 2025 – May 2026</td>
                        <td><a href="https://google.com" target="_blank" class="credential-link">View Service Doc ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>Assistant Professor</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering</span></td>
                        <td>Guru Nanak Institute of Technology (Autonomous), Ibrahimpatnam, Hyderabad</td>
                        <td>Feb 2023 – Jan 2025</td>
                        <td><a href="https://google.com" target="_blank" class="credential-link">View Experience ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>Assistant Professor</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering</span></td>
                        <td>Malla Reddy Engineering College for Women (Autonomous), Secunderabad</td>
                        <td>July 2022 – Feb 2023</td>
                        <td><a href="https://google.com" target="_blank" class="credential-link">View Service Doc ↗</a></td>
                    </tr>
                    <tr>
                        <td><strong>Senior Assistant Professor</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering</span></td>
                        <td>Aditya College of Engineering, Surampalem, Andhra Pradesh</td>
                        <td>Nov 2019 – July 2021</td>
                        <td><a href="https://google.com" target="_blank" class="credential-link">View Service Doc ↗</a></td>
                    </tr>
                     <tr>
                        <td><strong>Assistant Professor</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering</span></td>
                        <td>Vignan’s Institute of Information Technology (Autonomous), Visakhapatnam, Andhra Pradesh</td>
                        <td>March 2015 – Nov 2019</td>
                        <td><a href="https://google.com" target="_blank" class="credential-link">View Experience ↗</a></td>
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
                                <strong>Volume & Timeline:</strong> Vol. 114, No. 8, 2017 (pp. 285-295) | Special Issue<br>
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
                                <strong>Authors:</strong> P. Ramesh, A. G. V. Chiranjeevi, Kottala Padma<br>
                                <strong>Journal:</strong> International Journal of Pure and Applied Mathematics (IJPAM)<br>
                                <strong>Volume & Timeline:</strong> Vol. 114, No. 8, 2017 (pp. 23-33) | Special Issue<br>
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
                                <strong>Journal:</strong> Indian Journal of Science and Technology (INDJST)<br>
                                <strong>Platform Link:</strong> Article Node Portal Reference
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
                                <strong>Identifiers:</strong> ISSN: 2321-9653 | IC Value: 13.98
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
                                <strong>Authors:</strong> Rajasekhar Vaddi, Adari G. V. Chiranjeevi<br>
                                <strong>Journal:</strong> International Journal of Scientific Engineering and Technology Research (IJSETR)<br>
                                <strong>Volume & Timeline:</strong> Vol. 05, Issue 07, March 2016 (pp. 1342-1346)<br>
                                <strong>Identifiers:</strong> ISSN: 2319-8885
                            </div>
                        </td>
                        <td style="text-align: center; vertical-align: middle;">
                            <a href="https://ijsetr.com/uploads/463251IJSETR9076-240.pdf" target="_blank" class="credential-link">View Server PDF ↗</a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- SECTION 2: BOOK CHAPTERS & ADDITIONAL RECORDS -->
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
                            <a href="https://drive.google.com/file/d/1Bhgmof-yxlzp3ZRNAsk2lemdSm7Xe6oA/view" target="_blank" class="credential-link">View Drive File ↗</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    
    // Core function engine execution
    openHTMLModal('Publications & Research Portfolios', publicationsHTML);
}

// CORE MODAL OPENER PARSER ENGINE (Processes rich HTML variables safely)
function openHTMLModal(title, htmlContent) {
    const modal = document.getElementById('details-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    if (modal && modalTitle && modalBody) {
        modalTitle.innerText = title;
        modalBody.innerHTML = htmlContent;
        modal.style.setProperty('display', 'flex', 'important');
    }
}

// FIXED: Added backticks (``) around the HTML structure so variables render properly
function openModal(title, text) {
    openHTMLModal(title, `<p style="color:#333; line-height:1.6; text-align:left;">${text}</p>`);
}

function closeModal() {
    const modal = document.getElementById('details-modal');
    if (modal) {
        modal.style.setProperty('display', 'none', 'important');
    }
}

// Close popup modal window background shade listener clicks
window.onclick = function(event) {
    const modal = document.getElementById('details-modal');
    if (event.target === modal) {
        closeModal();
    }
}
