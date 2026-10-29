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
/ FORMATTED CONTENT MAPPING: ADVANCED CERTIFICATIONS (COURSERA & NPTEL)
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
