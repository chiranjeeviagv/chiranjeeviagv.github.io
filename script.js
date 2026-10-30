// Pre-defined texts for dynamic Career Objectives
const objectives = {
     academic: "Seeking a challenging position in an academic institution to leverage research, teaching methodology, and institutional development expertise.",
    industry: "An Electrical Engineer and Software professional, forever a student, dreaming for a career in a nice environment which is technically and ethically developed."};

// Tracks active view globally
let currentActiveView = 'academic';


               // STATIC HTML DATA DICTIONARIES FOR THE MODAL POPUPS
const modalContentData = {
    qualifications: `
        <div class="modal-credentials-layout">
            <p style="margin-bottom: 15px; color: #666; font-size: 0.9rem;">
                Click verification links below to view credentials hosted securely on Google Drive.
            </p>
            <table class="modal-data-table" style="width: 100%; border-collapse: collapse; text-align: left;">
                <thead>
                    <tr style="border-bottom: 2px solid #e3e6f0; color: #4e73df;">
                        <th style="padding: 10px;">Degree & Stream</th>
                        <th style="padding: 10px;">Institution</th>
                        <th style="padding: 10px;">Year & Marks</th>
                        <th style="padding: 10px;">Verification</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;"><strong>M.Tech</strong><br><span style="font-size:0.8rem; color:#777;">High Voltage Engineering</span></td>
                        <td style="padding: 10px;">JNTU, Kakinada</td>
                        <td style="padding: 10px;">2012<br><span style="color:#28a745; font-weight:600;">72.00% (Distinction)</span></td>
                        <td style="padding: 10px;"><a href="https://google.com" target="_blank" style="color:#007bff; text-decoration:none; font-weight:600;">View File ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;"><strong>B.Tech</strong><br><span style="font-size:0.8rem; color:#777;">Electrical & Electronics Eng.</span></td>
                        <td style="padding: 10px;">Chaitanya Engineering College</td>
                        <td style="padding: 10px;">2007<br><span style="color:#28a745; font-weight:600;">71.63% (Distinction)</span></td>
                        <td style="padding: 10px;"><a href="https://google.com" target="_blank" style="color:#007bff; text-decoration:none; font-weight:600;">View File ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;"><strong>Intermediate</strong><br><span style="font-size:0.8rem; color:#777;">MPC Track</span></td>
                        <td style="padding: 10px;">Gayatri Junior College</td>
                        <td style="padding: 10px;">2003<br><span style="color:#007bff; font-weight:600;">94.10% (First Class)</span></td>
                        <td style="padding: 10px;"><a href="https://google.com" target="_blank" style="color:#007bff; text-decoration:none; font-weight:600;">View File ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;"><strong>SSC</strong><br><span style="font-size:0.8rem; color:#777;">Secondary Certification</span></td>
                        <td style="padding: 10px;">ZP High School, Jami</td>
                        <td style="padding: 10px;">2001<br><span style="color:#007bff; font-weight:600;">89.86% (First Class)</span></td>
                        <td style="padding: 10px;"><a href="https://google.com" target="_blank" style="color:#007bff; text-decoration:none; font-weight:600;">View File ↗</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `,
    publications: `
        <div class="modal-credentials-layout" style="text-align: left;">
            <h4 style="color: #4e73df; border-bottom: 1px solid #e3e6f0; padding-bottom: 5px;">📄 Peer-Reviewed International Journal Papers</h4>
            <ul style="padding-left: 20px; line-height: 1.6; font-size: 0.95rem;">
                <li style="margin-bottom: 12px;">
                    <strong>"Transient stability improvement of Single Machine Infinite Bus (SMIB) system Using Distributed Power Flow Controller (DPFC)"</strong><br>
                    <span style="color:#555;">International Journal of Pure and Applied Mathematics (IJPAM) | Vol. 114, No. 8, 2017</span><br>
                    <a href="https://acadpubl.eu" target="_blank" style="color:#007bff; font-size:0.85rem; text-decoration:none; font-weight:600;">Access Publisher PDF ↗</a>
                </li>
                <li style="margin-bottom: 12px;">
                    <strong>"Application of SVC for Multiobjective Optimization Powerflow Problem Using PSO"</strong><br>
                    <span style="color:#555;">IJPAM Journal Research Vol. 114, 2017</span><br>
                    <a href="https://acadpubl.eu" target="_blank" style="color:#007bff; font-size:0.85rem; text-decoration:none; font-weight:600;">Access Publisher PDF ↗</a>
                </li>
                <li style="margin-bottom: 12px;">
                    <strong>"Dynamic Stability Improvement of a Smart Grid using Neural Network Based STATCOM"</strong><br>
                    <span style="color:#555;">Indian Journal of Science and Technology (INDJST)</span><br>
                    <a href="https://indjst.org" target="_blank" style="color:#007bff; font-size:0.85rem; text-decoration:none; font-weight:600;">Access Article Portal ↗</a>
                </li>
            </ul>
            <h4 style="color: #4e73df; border-bottom: 1px solid #e3e6f0; padding-bottom: 5px; margin-top: 20px;">📖 Indexed Book Chapters</h4>
            <p style="font-size:0.95rem; line-height:1.5; padding-left:5px;">
                <strong>"Cyber security in smart Grids:-Role of Digital Advanced Devices"</strong><br>
                <span style="color:#555;">Prof. M Ramalinga Raju, Mr. Adari G V Chiranjeevi<br>IGI Global Publications | DOI: 10.4018/978-1-6684-5827-3.ch002</span>
            </p>
        </div>
    `,
    conferences: `
        <div class="modal-credentials-layout" style="text-align: left; line-height: 1.6;">
            <div style="border-left: 4px solid #007bff; padding-left: 10px; margin-bottom: 15px; background: #f8f9fa; padding-top: 8px; padding-bottom: 8px;">
                <strong>"System knowledge for digital twin technologies in Industry 4.0 and Industry 5.0"</strong><br>
                <span style="font-size: 0.85rem; color: #555;">5th International E-Conference (ICMMSE:IR) | SITRC, Nashik | Feb 2026</span>
            </div>
            <div style="border-left: 4px solid #007bff; padding-left: 10px; margin-bottom: 15px; background: #f8f9fa; padding-top: 8px; padding-bottom: 8px;">
                <strong>"Cyber Security in smart grids- Role of Digital Advanced devices"</strong><br>
                <span style="font-size: 0.85rem; color: #555;">National Conference (GVCON-2K22) | GVP College of Engineering | Oct 2022</span>
            </div>
            <div style="border-left: 4px solid #007bff; padding-left: 10px; background: #f8f9fa; padding-top: 8px; padding-bottom: 8px;">
                <strong>"Transient Stability Improvement of SMIB using DPFC"</strong><br>
                <span style="font-size: 0.85rem; color: #555;">National Conference (RTEEE) | Vignan's Institute | April 2017</span>
            </div>
        </div>
    `,
    experience: `
        <div class="modal-credentials-layout">
            <table class="modal-data-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem;">
                <thead>
                    <tr style="border-bottom: 2px solid #e3e6f0; color: #4e73df;">
                        <th style="padding: 8px;">Role & Department</th>
                        <th style="padding: 8px;">Institution</th>
                        <th style="padding: 8px;">Tenure</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 8px;"><strong>Assistant Professor</strong><br><span style="font-size:0.8rem; color:#666;">Electrical Eng (AI & ML)</span></td>
                        <td style="padding: 8px;">Sandip University, Nashik</td>
                        <td style="padding: 8px; white-space: nowrap;">2025 – 2026</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 8px;"><strong>Assistant Professor</strong><br><span style="font-size:0.8rem; color:#666;">Electrical & Electronics Eng</span></td>
                        <td style="padding: 8px;">GNIT (Autonomous), Hyderabad</td>
                        <td style="padding: 8px; white-space: nowrap;">2023 – 2025</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 8px;"><strong>Assistant Professor</strong><br><span style="font-size:0.8rem; color:#666;">Electrical & Electronics Eng</span></td>
                        <td style="padding: 8px;">Malla Reddy Eng College, Secunderabad</td>
                        <td style="padding: 8px; white-space: nowrap;">2022 – 2023</td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 8px;"><strong>Assistant Professor</strong><br><span style="font-size:0.8rem; color:#666;">Electrical & Electronics Eng</span></td>
                        <td style="padding: 8px;">Vignan’s Institute (VIIT), Vizag</td>

// INTERACTIVE BUTTON SWITCH & INITIALIZATION ENGINE
document.addEventListener("DOMContentLoaded", () => {
    // 1. Top view navigation selection hooks
    document.getElementById('btn-academic')?.addEventListener('click', () => switchView('academic'));
    document.getElementById('btn-industry')?.addEventListener('click', () => switchView('industry'));

    // 2. UNIFIED EVENT LISTENER FOR ALL EXPLORE BUTTONS
    // Automatically handles all categories across Academic and Industry view grids!
    document.querySelectorAll('.explore-btn, [data-section]').forEach(btn => {
        btn.addEventListener('click', (event) => {
            const sectionKey = event.currentTarget.getAttribute('data-section');
            
            // Dynamically look up the parent heading text to name the modal title smoothly
            const parentCard = event.currentTarget.closest('section');
            const fallbackTitle = parentCard ? parentCard.querySelector('h2').innerText : 'Details';
            
            // Open the modal container using the unified lookup key
            if (sectionKey) {
                openHTMLModal(fallbackTitle, sectionKey);
            }
        });
    });

    // 3. Bind explicit modal close controls
    document.getElementById('close-modal-btn')?.addEventListener('click', closeModal);

    // 4. Ambient backdrop click safety release setup
    const modalOverlay = document.getElementById('details-modal');
    modalOverlay?.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    // 5. Direct activation connection for browser PDF generation workflows
    document.getElementById('btn-download-pdf')?.addEventListener('click', () => {
        window.print();
    });
});
// CORE ACTION: OPEN AND POPULATE DYNAMIC MODAL ENGINE
function openHTMLModal(titleText, sectionKey) {
    const modalElement = document.getElementById("details-modal");
    const titleElement = document.getElementById("modal-title");
    const bodyElement = document.getElementById("modal-body");

    if (!modalElement || !titleElement || !bodyElement) return;

    // Apply window heading titles and dynamic text payload layout structures
    titleElement.innerText = titleText;
    bodyElement.innerHTML = modalContentData[sectionKey] || `<p>Detailed structural files regarding ${titleText} are loading soon...</p>`;
    
    // Reveal by stripping out hidden definitions and adding structural flex rendering
    modalElement.classList.remove("hidden");
    modalElement.style.setProperty('display', 'flex', 'important');
    document.body.style.overflow = 'hidden'; // Lock background viewport scrolling
}

// CLOSE MODAL ENGINE FUNCTION
function closeModal() {
    const modalElement = document.getElementById("details-modal");
    if (modalElement) {
        modalElement.classList.add("hidden");
        modalElement.style.setProperty('display', 'none', 'important');
        document.body.style.overflow = ''; // Restore structural background scrolling
    }
}

// VIEW CONTROLLER ENGINE
function switchView(viewType) {
    currentActiveView = viewType;
    const btnAcademic = document.getElementById('btn-academic');
    const btnIndustry = document.getElementById('btn-industry');
    
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

    if (viewType === 'academic') {
        academicSections.forEach(el => el.style.setProperty('display', 'flex', 'important')); 
        industrySections.forEach(el => el.style.setProperty('display', 'none', 'important'));
        
        document.querySelectorAll('.academic-nav').forEach(el => el.style.display = 'inline-block');
        document.querySelectorAll('.industry-nav').forEach(el => el.style.display = 'none');
    } else {
        academicSections.forEach(el => el.style.setProperty('display', 'none', 'important'));
        industrySections.forEach(el => el.style.setProperty('display', 'flex', 'important'));
        
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
            <table class="modal-data-table" style="width: 100%; border-collapse: collapse; text-align: left;">
                <thead>
                    <tr style="border-bottom: 2px solid #e3e6f0; color: #4e73df;">
                        <th style="padding: 10px;">Qualification & Stream</th>
                        <th style="padding: 10px;">Institution / Board</th>
                        <th style="padding: 10px;">Year & Performance</th>
                        <th style="padding: 10px;">Verification Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;"><strong>M.Tech.</strong><br><span style="color: #666; font-size: 0.85rem;">High Voltage Engineering (HVE)</span></td>
                        <td style="padding: 10px;">JNTU, Kakinada</td>
                        <td style="padding: 10px;">2012<br><span style="color: #28a745; font-weight: 600;">72.00% (Distinction)</span></td>
                        <td style="padding: 10px;"><a href="https://drive.google.com/file/d/1kZD7vgJqHsifE2tw9LUEyVgCb6adR8HM/view?usp=sharing" target="_blank" class="credential-link" style="color: #007bff; text-decoration: none; font-weight: 600;">View M.Tech Certificate ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;"><strong>B.Tech.</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering (EEE)</span></td>
                        <td style="padding: 10px;">Chaitanya Engineering College, Visakhapatnam</td>
                        <td style="padding: 10px;">2007<br><span style="color: #28a745; font-weight: 600;">71.63% (Distinction)</span></td>
                        <td style="padding: 10px;"><a href="https://drive.google.com/file/d/1SMhWIF0aFxWplG4e83fom6THEuU4RtgS/view?usp=sharing" target="_blank" class="credential-link" style="color: #007bff; text-decoration: none; font-weight: 600;">View B.Tech Certificate ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;"><strong>Intermediate</strong><br><span style="color: #666; font-size: 0.85rem;">MPC (Maths, Physics, Chemistry)</span></td>
                        <td style="padding: 10px;">Gayatri Junior College, Vizianagaram</td>
                        <td style="padding: 10px;">2003<br><span style="color: #007bff; font-weight: 600;">94.10% (First Class)</span></td>
                        <td style="padding: 10px;"><a href="https://drive.google.com/file/d/1EF5XlMU8kwqbM_g7lFCqYSwNuwtHFklk/view?usp=sharing" target="_blank" class="credential-link" style="color: #007bff; text-decoration: none; font-weight: 600;">View Inter Certificate ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;"><strong>SSC</strong><br><span style="color: #666; font-size: 0.85rem;">Secondary School Certificate</span></td>
                        <td style="padding: 10px;">ZP High School, Jami, Vizianagaram</td>
                        <td style="padding: 10px;">2001<br><span style="color: #007bff; font-weight: 600;">89.86% (First Class)</span></td>
                        <td style="padding: 10px;"><a href="https://drive.google.com/file/d/12HNfZv_ltMW8Lw_KnB7q5gLGwAwHcxQU/view?usp=sharing" target="_blank" class="credential-link" style="color: #007bff; text-decoration: none; font-weight: 600;">View SSC Certificate ↗</a></td>
                    </tr>
                </tbody>
            </table>
        </div>
    `;
    
    // Explicitly uses our unified open HTML parser function
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
        </di// FORMATTED CONTENT MAPPING: ADVANCED CERTIFICATIONS (COURSERA & NPTEL)
function showCertificationsModal() {
    const certificationsHTML = `
        <div class="modal-credentials-layout">
            <p style="margin-bottom: 20px; color: #555; text-align: left; font-size: 0.95rem;">
                Click on the verified links in the right column to review professional badges and academic credentials.
            </p>
            <h3 style="text-align: left; color: #007bff; margin: 20px 0 10px 0; font-size: 1.15rem; border-left: 3px solid #007bff; padding-left: 8px;">
                Coursera Professional Certifications
            </h3>
            <table class="modal-data-table" style="width: 100%; border-collapse: collapse; text-align: left; margin-bottom: 30px;">
                <thead>
                    <tr style="border-bottom: 2px solid #e3e6f0; color: #4e73df;">
                        <th style="padding: 10px;">Specialization Program</th>
                        <th style="padding: 10px;">Issuing Organization</th>
                        <th style="padding: 10px;">Verification Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;"><strong>IBM Full Stack JavaScript Developer</strong><br><span style="color: #666; font-size: 0.85rem;">12-Course Specialization</span></td>
                        <td style="padding: 10px;">IBM</td>
                        <td style="padding: 10px;"><a href="https://www.coursera.org/account/accomplishments/specialization/L2Q2VEP5W243" target="_blank" class="credential-link" style="color: #007bff; text-decoration: none; font-weight: 600;">View Certificate ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;"><strong>IBM JavaScript Backend Developer</strong><br><span style="color: #666; font-size: 0.85rem;">13-Course Specialization</span></td>
                        <td style="padding: 10px;">IBM</td>
                        <td style="padding: 10px;"><a href="https://www.coursera.org" target="_blank" class="credential-link" style="color: #007bff; text-decoration: none; font-weight: 600;">View Certificate ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;"><strong>IBM AI Developer</strong><br><span style="color: #666; font-size: 0.85rem;">10-Course Specialization</span></td>
                        <td style="padding: 10px;">IBM</td>
                        <td style="padding: 10px;"><a href="https://www.coursera.org/account/accomplishments/professional-cert/E06UAT9KFM8S" target="_blank" class="credential-link" style="color: #007bff; text-decoration: none; font-weight: 600;">View Certificate ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;"><strong>IBM JAVA Developer</strong><br><span style="color: #666; font-size: 0.85rem;">14-Course Specialization</span></td>
                        <td style="padding: 10px;">IBM</td>
                        <td style="padding: 10px;"><a href="https://www.coursera.org/account/accomplishments/professional-cert/CGMXJ0SN33A5" target="_blank" class="credential-link" style="color: #007bff; text-decoration: none; font-weight: 600;">View Certificate ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;"><strong>Microsoft AI and ML Engineering</strong><br><span style="color: #666; font-size: 0.85rem;">5-Course Specialization</span></td>
                        <td style="padding: 10px;">Microsoft</td>
                        <td style="padding: 10px;"><a href="https://www.coursera.org/account/accomplishments/specialization/certificate/5SGHZ101WA4W" target="_blank" class="credential-link" style="color: #007bff; text-decoration: none; font-weight: 600;">View Certificate ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;"><strong>Google Cyber Security</strong><br><span style="color: #666; font-size: 0.85rem;">9-Course Specialization</span></td>
                        <td style="padding: 10px;">Google</td>
                        <td style="padding: 10px;"><a href="https://www.coursera.org/account/accomplishments/professional-cert/SZEO3FT6Q193" target="_blank" class="credential-link" style="color: #007bff; text-decoration: none; font-weight: 600;">View Certificate ↗</a></td>
                    </tr>
                </tbody>
            </table>

            <h3 style="text-align: left; color: #007bff; margin: 20px 0 10px 0; font-size: 1.15rem; border-left: 3px solid #007bff; padding-left: 8px;">
                NPTEL (IIT) Certifications
            </h3>
            <table class="modal-data-table" style="width: 100%; border-collapse: collapse; text-align: left;">
                <thead>
                    <tr style="border-bottom: 2px solid #e3e6f0; color: #4e73df;">
                        <th style="padding: 10px;">Course Module</th>
                        <th style="padding: 10px;">Timeline</th>
                        <th style="padding: 10px;">Verification Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;"><strong>Advanced Computer Architecture</strong></td>
                        <td style="padding: 10px;">April 2026</td>
                        <td style="padding: 10px;"><a href="https://drive.google.com/file/d/1yQeZ1-coDoRCZBwwtXYv7aXvsFdXdBTV/view?usp=sharing" target="_blank" class="credential-link" style="color: #007bff; text-decoration: none; font-weight: 600;">View NPTEL Drive ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;"><strong>Advanced Computer Networks</strong></td>
                        <td style="padding: 10px;">April 2025</td>
                        <td style="padding: 10px;"><a href="https://drive.google.com/file/d/1CyKiCImdnXHfHaCmLDpV2pUHx6PvOmti/view?usp=sharing" target="_blank" class="credential-link" style="color: #007bff; text-decoration: none; font-weight: 600;">View NPTEL Drive ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;"><strong>Practical Cyber Security for Practitioners</strong></td>
                        <td style="padding: 10px;">Oct 2024</td>
                        <td style="padding: 10px;"><a href="https://drive.google.com/file/d/13fxey0JvaQSHKq4JAOxsczLCXCl887uz/view?usp=sharing" target="_blank" class="credential-link" style="color: #007bff; text-decoration: none; font-weight: 600;">View NPTEL Drive ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;"><strong>Cloud Computing</strong></td>
                        <td style="padding: 10px;">Oct 2024</td>
                        <td style="padding: 10px;"><a href="https://drive.google.com/file/d/1DtA5WR6waMt2C8tUpDK-K55aZx_pkRn/view?usp=sharing" target="_blank" class="credential-link" style="color: #007bff; text-decoration: none; font-weight: 600;">View NPTEL Drive ↗</a></td>
                    </tr>
                     <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;"><strong>Big Data Computing</strong></td>
                        <td style="padding: 10px;">Oct 2023</td>
                        <td style="padding: 10px;"><a href="https://google.com" target="_blank" class="credential-link" style="color: #007bff; text-decoration: none; font-weight: 600;">View NPTEL Drive ↗</a></td>
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
            <p style="margin-bottom: 20px; color: #555; text-align: left; font-size: 0.95rem;">
                Review my verified record of national and international conference presentations below:
            </p>

            <div class="conf-timeline" style="display: flex; flex-direction: column; gap: 20px; margin-top: 10px;">
                
                <!-- CONFERENCE 1 -->
                <div class="conf-card" style="background: #f8f9fa; border-left: 4px solid #007bff; padding: 16px; border-radius: 0 6px 6px 0; text-align: left; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <div class="conf-paper-title" style="font-size: 1rem; font-weight: 700; color: #1a1a1a; line-height: 1.4; margin-bottom: 6px;">
                        "System knowledge for digital twin technologies in Industry 4.0 and Industry 5.0"
                    </div>
                    <div class="conf-name" style="font-size: 0.9rem; font-weight: 600; color: #4e73df; margin-bottom: 4px;">
                        5th International E-Conference on Mechanical and Material Science Engineering: Innovation and Research (ICMMSE:IR)
                    </div>
                    <div class="conf-meta" style="font-size: 0.85rem; color: #666; line-height: 1.5;">
                        <strong style="color: #444;">Organized by:</strong> Department of Mechanical Engineering, Sandip Institute of Technology & Research Centre (SITRC), Nashik, Maharashtra<br>
                        <strong style="color: #444;">Timeline:</strong> 27th and 28th of February 2026
                    </div>
                </div>

                <!-- CONFERENCE 2 -->
                <div class="conf-card" style="background: #f8f9fa; border-left: 4px solid #007bff; padding: 16px; border-radius: 0 6px 6px 0; text-align: left; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <div class="conf-paper-title" style="font-size: 1rem; font-weight: 700; color: #1a1a1a; line-height: 1.4; margin-bottom: 6px;">
                        "Cyber Security in smart grids- Role of Digital Advanced devices"
                    </div>
                    <div class="conf-name" style="font-size: 0.9rem; font-weight: 600; color: #4e73df; margin-bottom: 4px;">
                        Two Day National Conference on "Green and Resilient Energy Systems" (GVCON-2K22)
                    </div>
                    <div class="conf-meta" style="font-size: 0.85rem; color: #666; line-height: 1.5;">
                        <strong style="color: #444;">Organized by:</strong> Electrical & Electronics Engineering Department, Gayatri Vidya Parishad College of Engineering (Autonomous), Visakhapatnam<br>
                        <strong style="color: #444;">Timeline:</strong> 21st to 22nd October, 2022
                    </div>
                </div>

                <!-- CONFERENCE 3 -->
                <div class="conf-card" style="background: #f8f9fa; border-left: 4px solid #007bff; padding: 16px; border-radius: 0 6px 6px 0; text-align: left; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <div class="conf-paper-title" style="font-size: 1rem; font-weight: 700; color: #1a1a1a; line-height: 1.4; margin-bottom: 6px;">
                        "Transient Stability Improvement of SMIB using DPFC"
                    </div>
                    <div class="conf-name" style="font-size: 0.9rem; font-weight: 600; color: #4e73df; margin-bottom: 4px;">
                        Two Day National Conference on "Recent Trends in Electrical and Electronics Engineering" (RTEEE)
                    </div>
                    <div class="conf-meta" style="font-size: 0.85rem; color: #666; line-height: 1.5;">
                        <strong style="color: #444;">Organized by:</strong> Vignan's Institute of Information Technology, Visakhapatnam<br>
                        <strong style="color: #444;">Timeline:</strong> 14th and 15th of April 2017
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
            
            <table class="modal-data-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem;">
                <thead>
                    <tr style="border-bottom: 2px solid #e3e6f0; color: #4e73df;">
                        <th style="padding: 10px;">Designation & Department</th>
                        <th style="padding: 10px;">Institution & Location</th>
                        <th style="padding: 10px;">Tenure Period</th>
                        <th style="padding: 10px;">Verification Records</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;"><strong>Assistant Professor</strong><br><span style="color: #007bff; font-size: 0.85rem;">Electrical Engineering (AI & ML)</span></td>
                        <td style="padding: 10px;">Sandip Institute of Technology and Research Centre (Sandip University), Nashik, Maharashtra</td>
                        <td style="padding: 10px; white-space: nowrap;">27-06-2025 – 31-05-2026</td>
                        <td style="padding: 10px;"><a href="https://drive.google.com/file/d/1kQQ39YCL-o0eyFySFIgzR0qddAOVe5Ch/view?usp=sharing" target="_blank" class="credential-link" style="color: #007bff; text-decoration: none; font-weight: 600;">View Service Doc ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;"><strong>Assistant Professor</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering</span></td>
                        <td style="padding: 10px;">Guru Nanak Institute of Technology (Autonomous), Ibrahimpatnam, Hyderabad</td>
                        <td style="padding: 10px; white-space: nowrap;">16-02-2023 – 11-01-2025</td>
                        <td style="padding: 10px;"><a href="https://drive.google.com/file/d/1OainG_BsKrMrFH7mFoFg_pD14hV00Q5Z/view?usp=drive_link" target="_blank" class="credential-link" style="color: #007bff; text-decoration: none; font-weight: 600;">View Experience ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;"><strong>Assistant Professor</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering</span></td>
                        <td style="padding: 10px;">Malla Reddy Engineering College for Women (Autonomous), Secunderabad</td>
                        <td style="padding: 10px; white-space: nowrap;">18-07-2022 – 15-02-2023</td>
                        <td style="padding: 10px;"><a href="https://drive.google.com/file/d/1pu58nrED6xGO_hKPntDO-8npcOayLDhY/view?usp=sharing" target="_blank" class="credential-link" style="color: #007bff; text-decoration: none; font-weight: 600;">View Service Doc ↗</a></td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <!-- FIXED: Repaired broken target link string parameters here -->
                        <td style="padding: 10px;"><strong>Senior Assistant Professor</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering</span></td>
                        <td style="padding: 10px;">Aditya College of Engineering, Surampalem, Andhra Pradesh</td>
                        <td style="padding: 10px; white-space: nowrap;">22-11-2019 – 26-07-2021</td>
                        <td style="padding: 10px;"><a href="https://drive.google.com/file/d/1kQQ39YCL-o0eyFySFIgzR0qddAOVe5Ch/view?usp=sharing" target="_blank" class="credential-link" style="color: #007bff; text-decoration: none; font-weight: 600;">View Service Doc ↗</a></td>
                    </tr>
                     <tr style="border-bottom: 1px solid #e3e6f0;">
                        <!-- FIXED: Repaired broken target link string parameters here -->
                        <td style="padding: 10px;"><strong>Assistant Professor</strong><br><span style="color: #666; font-size: 0.85rem;">Electrical & Electronics Engineering</span></td>
                        <td style="padding: 10px;">Vignan’s Institute of Information Technology (Autonomous), Visakhapatnam, Andhra Pradesh</td>
                        <td style="padding: 10px; white-space: nowrap;">13-03-2015 – 04-11-2019</td>
                        <td style="padding: 10px;"><a href="https://drive.google.com/file/d/1ooZQskDGa9NDLdzE-CIZeBs-bVynoz_8/view?usp=sharing" target="_blank" class="credential-link" style="color: #007bff; text-decoration: none; font-weight: 600;">View Experience ↗</a></td>
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
            <p style="margin-bottom: 20px; color: #4e73df; text-align: left; font-size: 0.92rem; font-weight: 600;">
                ℹ️ Click on the index or access links in the right column to review raw source text documents, metadata records, or publisher portals.
            </p>

            <!-- SECTION 1: INTERNATIONAL JOURNAL PAPERS -->
            <div class="publication-section-title" style="font-size: 1.15rem; color: #007bff; margin: 25px 0 12px 0; border-bottom: 2px solid #e3e6f0; padding-bottom: 6px; text-align: left; font-weight: 600;">
                📄 Peer-Reviewed International Journal Papers
            </div>
            
            <table class="modal-data-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem; margin-bottom: 20px;">
                <thead>
                    <tr style="border-bottom: 2px solid #e3e6f0; color: #4e73df;">
                        <th style="width: 75%; padding: 10px; text-align: left;">Journal Paper & Research Context</th>
                        <th style="width: 25%; padding: 10px; text-align: center;">Document Access</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;">
                            <div class="pub-title" style="font-weight: 600; color: #1a1a1a; font-size: 0.98rem; line-height: 1.4;">"Transient stability improvement of Single Machine Infinite Bus (SMIB) system Using Distributed Power Flow Controller (DPFC)"</div>
                            <div class="pub-meta" style="font-size: 0.86rem; color: #5a5c69; margin-top: 6px; line-height: 1.5;">
                                <strong>Author:</strong> G V Chiranjeevi Adari<br>
                                <strong>Journal:</strong> International Journal of Pure and Applied Mathematics (IJPAM)<br>
                                <strong>Volume & Timeline:</strong> Vol. 114, No. 8, 2017 (pp. 285-295)<br>
                                <strong>Identifiers:</strong> ISSN: 1311-8080 (Print) / 1314-3395 (Online)
                            </div>
                        </td>
                        <td style="text-align: center; vertical-align: middle; padding: 10px;">
                            <a href="https://acadpubl.eu/jsi/2017-114-7-ICPCIT-2017/articles/8/27.pdf" target="_blank" class="credential-link" style="font-size: 0.85rem; white-space: nowrap; font-weight: 600; color: #007bff; text-decoration: none;">View Journal PDF ↗</a>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;">
                            <div class="pub-title" style="font-weight: 600; color: #1a1a1a; font-size: 0.98rem; line-height: 1.4;">"Application of SVC for Multiobjective Optimization Powerflow Problem Using PSO"</div>
                            <div class="pub-meta" style="font-size: 0.86rem; color: #5a5c69; margin-top: 6px; line-height: 1.5;">
                                <strong>Authors:</strong> P.Ramesh, A.G.V Chiranjeevi and Kottala Padma<br>
                                <strong>Journal:</strong> International Journal of Pure and Applied Mathematics (IJPAM)<br>
                                <strong>Volume & Timeline:</strong> Vol. 114, No. 8, 2017 (pp. 23-33)<br>
                                <strong>Identifiers:</strong> ISSN: 1311-8080 (Print) / 1314-3395 (Online)
                            </div>
                        </td>
                        <td style="text-align: center; vertical-align: middle; padding: 10px;">
                            <a href="https://acadpubl.eu/jsi/2017-114-7-ICPCIT-2017/articles/8/3.pdf" target="_blank" class="credential-link" style="font-size: 0.85rem; white-space: nowrap; font-weight: 600; color: #007bff; text-decoration: none;">View Journal PDF ↗</a>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;">
                            <div class="pub-title" style="font-weight: 600; color: #1a1a1a; font-size: 0.98rem; line-height: 1.4;">"Dynamic Stability Improvement of a Smart Grid using Neural Network Based STATCOM"</div>
                            <div class="pub-meta" style="font-size: 0.86rem; color: #5a5c69; margin-top: 6px; line-height: 1.5;">
                                <strong>Author:</strong> G V Chiranjeevi Adari<br>
                                <strong>Journal:</strong> Indian Journal of Science and Technology (INDJST)
                            </div>
                        </td>
                        <td style="text-align: center; vertical-align: middle; padding: 10px;">
                            <a href="https://indjst.org/articles/dynamic-stability-improvement-of-a-smart-grid-using-neural-network-based-statcom" target="_blank" class="credential-link" style="font-size: 0.85rem; white-space: nowrap; font-weight: 600; color: #007bff; text-decoration: none;">View Article Portal ↗</a>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;">
                            <div class="pub-title" style="font-weight: 600; color: #1a1a1a; font-size: 0.98rem; line-height: 1.4;">"A Grid Interfaced Low Frequency Offshore Wind Power"</div>
                            <div class="pub-meta" style="font-size: 0.86rem; color: #5a5c69; margin-top: 6px; line-height: 1.5;">
                                <strong>Author:</strong> AGV Chiranjeevi<br>
                                <strong>Journal:</strong> International Journal for Research in Applied Science & Engineering Technology (IJRASET)<br>
                                <strong>Volume & Timeline:</strong> Vol. 3, Issue III, March 2015 (p. 544)<br>
                                <strong>Identifiers:</strong> ISSN: 2321-9653
                            </div>
                        </td>
                        <td style="text-align: center; vertical-align: middle; padding: 10px;">
                            <a href="https://www.ijraset.com/fileserve.php?FID=2047" target="_blank" class="credential-link" style="font-size: 0.85rem; white-space: nowrap; font-weight: 600; color: #007bff; text-decoration: none;">View Repository File ↗</a>
                        </td>
                    </tr>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;">
                            <div class="pub-title" style="font-weight: 600; color: #1a1a1a; font-size: 0.98rem; line-height: 1.4;">"Simulation Based Analysis for Fixing Optimal Stages for a H-Bridge Cascaded Multi-Level Converters"</div>
                            <div class="pub-meta" style="font-size: 0.86rem; color: #5a5c69; margin-top: 6px; line-height: 1.5;">
                                <strong>Authors:</strong> RASEKHAR VADDI, ADARI G. V. CHIRANJEEVI<br>
                                <strong>Journal:</strong> International Journal of Scientific Engineering and Technology Research (IJSETR)<br>
                                <strong>Volume & Timeline:</strong> Vol. 05, Issue 07, March-2016 (pp. 1342-1346)<br>
                                <strong>Identifiers:</strong> ISSN: 2319-8885
                            </div>
                        </td>
                        <td style="text-align: center; vertical-align: middle; padding: 10px;">
                            <a href="https://ijsetr.com/uploads/463251IJSETR9076-240.pdf" target="_blank" class="credential-link" style="font-size: 0.85rem; white-space: nowrap; font-weight: 600; color: #007bff; text-decoration: none;">View Server PDF ↗</a>
                        </td>
                    </tr>
                </tbody>
            </table>

            <!-- SECTION 2: BOOK CHAPTERS -->
            <div class="publication-section-title" style="font-size: 1.15rem; color: #007bff; margin: 25px 0 12px 0; border-bottom: 2px solid #e3e6f0; padding-bottom: 6px; text-align: left; font-weight: 600;">
                📖 Indexed Book Chapters & Additional Material
            </div>
            
            <table class="modal-data-table" style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.9rem;">
                <thead>
                    <tr style="border-bottom: 2px solid #e3e6f0; color: #4e73df;">
                        <th style="width: 75%; padding: 10px; text-align: left;">Chapter Details & Monograph Data</th>
                        <th style="width: 25%; padding: 10px; text-align: center;">Storage Drive Link</th>
                    </tr>
                </thead>
                <tbody>
                    <tr style="border-bottom: 1px solid #e3e6f0;">
                        <td style="padding: 10px;">
                            <div class="pub-title" style="font-weight: 600; color: #1a1a1a; font-size: 0.98rem; line-height: 1.4;">"Cyber security in smart Grids:-Role of Digital Advanced Devices"</div>
                            <div class="pub-meta" style="font-size: 0.86rem; color: #5a5c69; margin-top: 6px; line-height: 1.5;">
                                <strong>Authors:</strong> Prof. M Ramalinga Raju, Mr. Adari G V Chiranjeevi<br>
                                <strong>Book:</strong> Cyber security-Issues, Challenges –Solutions-Business | <em>IGI Global Publications</em><br>                              <strong>Timeline:</strong> October 2022 | Pages 18-32<br>
Identifiers: ISBN-9781668458273 | DOI: 10.4018/978-1-6684-5827-3.ch002
`;
openHTMLModal('Publications & Research Portfolios', publicationsHTML);
}
// UNIFIED CONSOLIDATED MODAL LIFECYCLE MANAGEMENT ENGINE
function openHTMLModal(title, htmlContentOrKey) {
    const modal = document.getElementById('details-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    if (modal && modalTitle && modalBody) {
        modalTitle.innerText = title;
        
        // SMART FALLBACK: If a lookup key from the central data map matches, inject it.
        // Otherwise, inject the raw HTML variable string directly!
        if (typeof modalContentData !== 'undefined' && modalContentData[htmlContentOrKey]) {
            modalBody.innerHTML = modalContentData[htmlContentOrKey];
        } else {
            modalBody.innerHTML = htmlContentOrKey;
        }
        
        // Remove structural hidden class and force flex display seamlessly over the viewport
        modal.classList.remove('hidden');
        modal.style.setProperty('display', 'flex', 'important');
        document.body.style.overflow = 'hidden'; // Lock background body view scrolling
    }
}

// FIXED: Consolidated into a single explicit close loop handler to prevent browser script conflicts
function closeModal() {
    const modal = document.getElementById('details-modal');
    if (modal) {
        // Safe reset structural visibility state flags completely
        modal.classList.add('hidden');
        modal.style.setProperty('display', 'none', 'important');
        document.body.style.overflow = ''; // Restore structural background viewport scrolling
    }
}

// Helper utility function for quick text overlays
function openModal(title, text) {
    openHTMLModal(title, `<p style="color:#333; line-height:1.6; text-align:left;">${text}</p>`);
}
// STABILIZED INITIALIZATION INTERACTIVE HANDLER ENGINE
// This belongs inside your script.js file
document.addEventListener("DOMContentLoaded", () => {
    // 1. Top view navigation view toggle selection hooks
    document.getElementById('btn-academic')?.addEventListener('click', () => switchView('academic'));
    document.getElementById('btn-industry')?.addEventListener('click', () => switchView('industry'));

    // 2. Section modal exploration triggers
    document.querySelectorAll('[data-section="qualifications"]').forEach(btn => {
        btn.addEventListener('click', showQualificationsModal);
    });
    document.querySelectorAll('[data-section="experience"]').forEach(btn => {
        btn.addEventListener('click', showExperienceModal);
    });
    document.querySelectorAll('[data-section="publications"]').forEach(btn => {
        btn.addEventListener('click', showPublicationsModal);
    });
    document.querySelectorAll('[data-section="conferences"]').forEach(btn => {
        btn.addEventListener('click', showConferencesModal);
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
    document.querySelectorAll('[data-section="fdps"]').forEach(btn => {
        btn.addEventListener('click', showDevelopmentProgramsModal);
    });

    // 3. Bind explicit structural exit close buttons
    document.getElementById('close-modal-btn')?.addEventListener('click', closeModal);

    // 4. Ambient backdrop click safety release overlay setup
    const modalOverlay = document.getElementById('details-modal');
    modalOverlay?.addEventListener('click', (event) => {
        if (event.target === modalOverlay) {
            closeModal();
        }
    });

    // 5. Direct activation connection for browser PDF generation workflows
    document.getElementById('btn-download-pdf')?.addEventListener('click', () => {
        window.print();
    });
}); // FIXED: The code block now closes perfectly here, containing all handlers safely inside!
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
// Declared explicitly on the global window scope to prevent injection binding failures
window.switchDevTab = function(event, tabId) {
    // Hide all internal panels inside the modal context container by shifting display states
    const panels = document.querySelectorAll('.dev-panel');
    panels.forEach(panel => {
        panel.style.display = 'none';
        panel.classList.remove('active');
    });

    // Remove active style classes from all inline tab button triggers
    const tabButtons = document.querySelectorAll('.dev-tab-btn');
    tabButtons.forEach(btn => {
        btn.classList.remove('active');
        btn.style.color = '#666';
        btn.style.borderBottomColor = 'transparent';
    });

    // Activate the targeted focus tracking selection elements dynamically
    const targetPanel = document.getElementById(tabId);
    if (targetPanel) {
        targetPanel.style.display = 'block';
        targetPanel.classList.add('active');
    }
    
    event.currentTarget.classList.add('active');
    event.currentTarget.style.color = '#28a745';
    event.currentTarget.style.borderBottomColor = '#28a745';
};

// FORMATTED CONTENT MAPPING: PROFESSIONAL & ACADEMIC REFERENCES
function showReferencesModal() {
    const referencesHTML = `
        <div class="modal-credentials-layout">
            <p class="ref-intro" style="margin-bottom: 20px; color: #555; text-align: left; font-size: 0.95rem; line-height: 1.5;">
                The following mentors and institutional leads are available to provide professional or academic verification of my teaching methodologies, engineering workflows, and research contributions:
            </p>

            <div class="ref-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px; margin-top: 15px;">
                
                <!-- REFERENCE 1 -->
                <div class="ref-card" style="background: #f8f9fa; border-left: 4px solid #007bff; padding: 15px; border-radius: 0 6px 6px 0; text-align: left; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <div class="ref-name" style="font-size: 1.05rem; font-weight: 700; color: #1a1a1a; margin-bottom: 4px;">Dr. S Suryaprakasarao</div>
                    <div class="ref-title" style="font-size: 0.88rem; color: #4e73df; font-weight: 600; margin-bottom: 2px;">Former Professor (AMC) & HoD of ENT</div>
                    <div class="ref-org" style="font-size: 0.85rem; color: #666; margin-bottom: 10px;">Gayatri Medical College (GVPIHC & MT), Visakhapatnam</div>
                    <div class="ref-contact" style="font-size: 0.88rem; border-top: 1px solid #eaecf0; padding-top: 8px; color: #333;">
                        <strong style="color: #555;">Cell:</strong> <a href="tel:+918688381481" class="ref-phone-link" style="color: #007bff; text-decoration: none; font-weight: 600;">+91 86883 81481</a>
                    </div>
                </div>

                <!-- REFERENCE 2 -->
                <div class="ref-card" style="background: #f8f9fa; border-left: 4px solid #007bff; padding: 15px; border-radius: 0 6px 6px 0; text-align: left; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <div class="ref-name" style="font-size: 1.05rem; font-weight: 700; color: #1a1a1a; margin-bottom: 4px;">Mr. K Prasad</div>
                    <div class="ref-title" style="font-size: 0.88rem; color: #4e73df; font-weight: 600; margin-bottom: 2px;">Senior Lecturer (Retired)</div>
                    <div class="ref-org" style="font-size: 0.85rem; color: #666; margin-bottom: 10px;">Government Polytechnic, Vizianagaram</div>
                    <div class="ref-contact" style="font-size: 0.88rem; border-top: 1px solid #eaecf0; padding-top: 8px; color: #333;">
                        <strong style="color: #555;">Cell:</strong> <a href="tel:+919912340292" class="ref-phone-link" style="color: #007bff; text-decoration: none; font-weight: 600;">+91 99123 40292</a>
                    </div>
                </div>

                <!-- REFERENCE 3 -->
                <div class="ref-card" style="background: #f8f9fa; border-left: 4px solid #007bff; padding: 15px; border-radius: 0 6px 6px 0; text-align: left; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <div class="ref-name" style="font-size: 1.05rem; font-weight: 700; color: #1a1a1a; margin-bottom: 4px;">Mr. K Srikanth</div>
                    <div class="ref-title" style="font-size: 0.88rem; color: #4e73df; font-weight: 600; margin-bottom: 2px;">Associate Professor</div>
                    <div class="ref-org" style="font-size: 0.85rem; color: #666; margin-bottom: 10px;">Gayatri Vidya Parishad (GVP) College of Engineering, Visakhapatnam</div>
                    <div class="ref-contact" style="font-size: 0.88rem; border-top: 1px solid #eaecf0; padding-top: 8px; color: #333;">
                        <strong style="color: #555;">Cell:</strong> <a href="tel:+919440897892" class="ref-phone-link" style="color: #007bff; text-decoration: none; font-weight: 600;">+91 94408 97892</a>
                    </div>
                </div>

                <!-- REFERENCE 4 -->
                <div class="ref-card" style="background: #f8f9fa; border-left: 4px solid #007bff; padding: 15px; border-radius: 0 6px 6px 0; text-align: left; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <div class="ref-name" style="font-size: 1.05rem; font-weight: 700; color: #1a1a1a; margin-bottom: 4px;">Dr. Dipak D Bhage</div>
                    <div class="ref-title" style="font-size: 0.88rem; color: #4e73df; font-weight: 600; margin-bottom: 2px;">Professor</div>
                    <div class="ref-org" style="font-size: 0.85rem; color: #666; margin-bottom: 10px;">Purnam International University (PCU), Pune</div>
                    <div class="ref-contact" style="font-size: 0.88rem; border-top: 1px solid #eaecf0; padding-top: 8px; color: #333;">
                        <strong style="color: #555;">Cell:</strong> <a href="tel:+917083780216" class="ref-phone-link" style="color: #007bff; text-decoration: none; font-weight: 600;">+91 70837 80216</a>
                    </div>
                </div>

                <!-- REFERENCE 5 -->
                <div class="ref-card" style="background: #f8f9fa; border-left: 4px solid #007bff; padding: 15px; border-radius: 0 6px 6px 0; text-align: left; box-shadow: 0 2px 4px rgba(0,0,0,0.05);">
                    <div class="ref-name" style="font-size: 1.05rem; font-weight: 700; color: #1a1a1a; margin-bottom: 4px;">Mrs. Sangita K Chowdary</div>
                    <div class="ref-title" style="font-size: 0.88rem; color: #4e73df; font-weight: 600; margin-bottom: 2px;">Professor</div>
                    <div class="ref-org" style="font-size: 0.85rem; color: #666; margin-bottom: 10px;">Sandip Institute of Technology & Research Centre (SITRC), Nashik</div>
                    <div class="ref-contact" style="font-size: 0.88rem; border-top: 1px solid #eaecf0; padding-top: 8px; color: #333;">
                        <strong style="color: #555;">Cell:</strong> <a href="tel:+919730199702" class="ref-phone-link" style="color: #007bff; text-decoration: none; font-weight: 600;">+91 97301 99702</a>
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
        <div class="modal-credentials-layout" style="text-align: left; line-height: 1.8; padding: 5px 0;"> 
            <h4 style="color: #007bff; margin-top: 0; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">Core Engineering Curriculum Handled:</h4> 
            <ul style="color: #333; font-size: 0.95rem; padding-left: 20px; margin: 0;"> 
                <li style="margin-bottom: 6px;">Artificial Intelligence Techniques & Expert Systems</li> 
                <li style="margin-bottom: 6px;">Electro Magnetic Fields / Engineering Electromagnetics</li> 
                <li style="margin-bottom: 6px;">Microprocessors and Microcontrollers & Digital Logic Design</li> 
                <li style="margin-bottom: 6px;">Power System Analysis, Protection & Control Systems</li> 
                <li style="margin-bottom: 0;">High Voltage Engineering & Non-Conventional Energy Sources</li> 
            </ul> 
        </div>`;
    openHTMLModal('Subject Area Expertise', expertiseHTML);
}

function showSkillsModal() {
    const skillsHTML = `
        <div class="modal-credentials-layout" style="text-align: left; line-height: 1.8; padding: 5px 0;"> 
            <h4 style="color: #007bff; margin-top: 0; margin-bottom: 12px; font-size: 1.1rem; font-weight: 600;">Programming Toolsets & Competencies:</h4> 
            <ul style="color: #333; font-size: 0.95rem; padding-left: 20px; margin: 0;"> 
                <li style="margin-bottom: 6px;"><strong>Advanced Languages:</strong> Python, JavaScript (Full-Stack), MATLAB, Java (Basics)</li> 
                <li style="margin-bottom: 6px;"><strong>Specialized Tracks:</strong> AI Web Design, Data Science, Cyber Security Operations</li> 
                <li style="margin-bottom: 0;"><strong>Core Simulation:</strong> Power Electronics Analysis, Grid Transient System Twins</li> 
            </ul> 
        </div>`;
    openHTMLModal('Technical Skills & Toolsets', skillsHTML);
}
