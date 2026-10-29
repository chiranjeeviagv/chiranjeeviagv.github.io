const objectives = {
    academic: "Seeking a challenging position in an academic institution to leverage research, teaching methodology, and institutional development expertise.",
    industry: "Result-driven professional seeking a core technical role in the industry to apply practical problem-solving skills, engineering workflows, and system optimization."
};

let currentActiveView = 'academic';

function switchView(viewType) {
    currentActiveView = viewType;
    const btnAcademic = document.getElementById('btn-academic');
    const btnIndustry = document.getElementById('btn-industry');
    
    // 1. Manage Active Toggle Button Selection highlights
    if (viewType === 'academic') {
        btnAcademic.classList.add('active');
        btnIndustry.classList.remove('active');
    } else {
        btnIndustry.classList.add('active');
        btnAcademic.classList.remove('active');
    }

    // 2. Change the text content inside the Career Objective dynamically
    const objectiveTextEl = document.getElementById('objective-text');
    if (objectiveTextEl) {
        objectiveTextEl.innerText = objectives[viewType];
    }

    // 3. Target and toggle display modes to preserve your CSS grid proportions cleanly
    const academicSections = document.querySelectorAll('.academic-only');
    const industrySections = document.querySelectorAll('.industry-only');

    if (viewType === 'academic') {
        // Clearing display lets it naturally fall back to your native 'style.css' block definitions
        academicSections.forEach(el => el.style.display = ''); 
        industrySections.forEach(el => el.style.display = 'none');
        
        // Synchronize helper button tracks
        document.querySelectorAll('.academic-nav').forEach(el => el.style.display = 'inline-block');
        document.querySelectorAll('.industry-nav').forEach(el => el.style.display = 'none');
    } else {
        academicSections.forEach(el => el.style.display = 'none');
        industrySections.forEach(el => el.style.display = '');
        
        // Synchronize helper button tracks
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
        
        // Perform safe, smooth viewport scrolling adjustment directly to target container card
        setTimeout(() => {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
            
            // Subtle flash effect to show user where they landed
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
// FORMATTED CONTENT MAPPING: PUBLICATIONS & RESEARCH PAYLOAD
function showPublicationsModal() {
    const publicationsHTML = `
        <div class="modal-credentials-layout">
            <style>
                .publication-section-title {
                    font-size: 1.1rem;
                    color: #007bff;
                    margin: 25px 0 10px 0;
                    border-bottom: 2px solid #f0f0f0;
                    padding-bottom: 5px;
                    text-align: left;
                    font-weight: 600;
                }
                .modal-data-table th { background-color: #f8f9fa; color: #333; }
                .pub-title { font-weight: 600; color: #222; }
                .pub-meta { font-size: 0.85rem; color: #666; margin-top: 4px; }
                .credential-link { font-size: 0.85rem; white-space: nowrap; }
            </style>

            <p style="margin-bottom: 20px; color: #555; text-align: left; font-size: 0.95rem;">
                Click on the verification links in the right column to view published papers, patent indices, and publisher metadata.
            </p>
            
            <!-- SECTION 1: BOOK CHAPTERS -->
            <div class="publication-section-title">📖 Book Chapters</div>
            <table class="modal-data-table">
                <thead>
                    <tr>
                        <th style="width: 75%;">Chapter Details</th>
                        <th style="width: 25%;">Verification Link</th>
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
                        <td style="text-align: center;">
                            <a href="https://doi.org" target="_blank" class="credential-link">View Chapter ↗</a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- SECTION 2: PATENTS -->
            <div class="publication-section-title">💡 Patents Published</div>
            <table class="modal-data-table">
                <thead>
                    <tr>
                        <th style="width: 75%;">Patent Title & Domain</th>
                        <th style="width: 25%;">Registry Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="pub-title">Smart Medical Diagnosis System Using IoT Driven Machine Learning and Big Data Analytics</div>
                            <div class="pub-meta">
                                <strong>Domain:</strong> Bio-Medical Engineering<br>
                                <strong>Publication Number:</strong> 11/2024(INA)
                            </div>
                        </td>
                        <td style="text-align: center;">
                            <a href="http://ipindia.nic.in" target="_blank" class="credential-link">IP India Search ↗</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="pub-title">Power Quality Analysis Using IoT</div>
                            <div class="pub-meta">
                                <strong>Application Number:</strong> 202441060301<br>
                                <strong>Timeline:</strong> Published August 2024
                            </div>
                        </td>
                        <td style="text-align: center;">
                            <a href="http://ipindia.nic.in" target="_blank" class="credential-link">IP India Search ↗</a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- SECTION 3: PAPERS -->
            <div class="publication-section-title">📄 International Journal Papers</div>
            <table class="modal-data-table">
                <thead>
                    <tr>
                        <th style="width: 75%;">Journal Paper Details</th>
                        <th style="width: 25%;">Access Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <div class="pub-title">"Transient stability improvement of Single Machine Infinite Bus (SMIB) system Using Distributed Power Flow Controller (DPFC)"</div>
                            <div class="pub-meta">
                                <strong>Author:</strong> G V Chiranjeevi Adari<br>
                                <strong>Journal:</strong> International Journal of Pure and Applied Mathematics (IJPAM)<br>
                                <strong>Volume & Year:</strong> Vol. 114, No. 8, 2017 (pp. 285-295) | ISSN: 1311-8080
                            </div>
                        </td>
                        <td style="text-align: center;">
                            <a href="https://acadpubl.eu" target="_blank" class="credential-link">View PDF ↗</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="pub-title">"Application of SVC for Multiobjective Optimization Powerflow Problem Using PSO"</div>
                            <div class="pub-meta">
                                <strong>Authors:</strong> P. Ramesh, A. G. V. Chiranjeevi, Kottala Padma<br>
                                <strong>Journal:</strong> International Journal of Pure and Applied Mathematics (IJPAM)<br>
                                <strong>Volume & Year:</strong> Vol. 114, No. 8, 2017 (pp. 23-33) | ISSN: 1311-8080
                            </div>
                        </td>
                        <td style="text-align: center;">
                            <a href="https://acadpubl.eu" target="_blank" class="credential-link">View PDF ↗</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="pub-title">"A Grid Interfaced Low Frequency Offshore Wind Power"</div>
                            <div class="pub-meta">
                                <strong>Author:</strong> AGV Chiranjeevi<br>
                                <strong>Journal:</strong> International Journal for Research in Applied Science & Engineering Technology (IJRASET)<br>
                                <strong>Volume & Year:</strong> Vol. 3, Issue III, March 2015 (p. 544) | ISSN: 2321-9653
                            </div>
                        </td>
                        <td style="text-align: center;">
                            <a href="https://ijraset.com" target="_blank" class="credential-link">View PDF ↗</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="pub-title">"Simulation Based Analysis for Fixing Optimal Stages for a H-Bridge Cascaded Multi-Level Converters"</div>
                            <div class="pub-meta">
                                <strong>Authors:</strong> Rajasekhar Vaddi, Adari G. V. Chiranjeevi<br>
                                <strong>Journal:</strong> International Journal of Scientific Engineering and Technology Research (IJSETR)<br>
                                <strong>Volume & Year:</strong> Vol. 05, Issue 07, March-2016 (pp. 1342-1346) | ISSN: 2319-8885
                            </div>
                        </td>
                        <td style="text-align: center;">
                            <a href="https://ijsetr.com" target="_blank" class="credential-link">View PDF ↗</a>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div class="pub-title">"Dynamic Stability Improvement of a Smart Grid using Neural Network Based STATCOM"</div>
                            <div class="pub-meta">
                                <strong>Journal:</strong> Indian Journal of Science and Technology (INDJST)
                            </div>
                        </td>
                        <td style="text-align: center;">
                            <a href="https://indjst.org" target="_blank" class="credential-link">View Article ↗</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;

    // Execute the window trigger function passing the generated string context
    openHTMLModal('Publications', publicationsHTML);
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
                        <td><a href="https://coursera.org/verify/professional-cert/SZEO3FT6Q193" target="_blank" class="credential-link">View Certificate ↗</a></td>
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
   function openModal(title, text) {
    openHTMLModal(title, `<p style="color:#333; line-height:1.6; text-align:left;">${text}</p>`);
}
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
};
