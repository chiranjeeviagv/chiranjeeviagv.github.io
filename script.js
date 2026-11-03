// 1. Fixed CDN import paths pointing to valid Firebase bundle paths
import { initializeApp } from "https://gstatic.com";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://gstatic.com";
import { getFirestore, doc, getDoc } from "https://gstatic.com";

const firebaseConfig = {
    apiKey: "AIzaSyDoToJAX5BEthnTPayPZNTaYnccHvnbGU",
    authDomain: "interactive-cv-6f58a.firebaseapp.com", // Fixed missing subdomain
    projectId: "interactive-cv-6f58a",
    storageBucket: "interactive-cv-6f58a.firebasestorage.app",
    messagingSenderId: "904714357999",
    appId: "1:904714357999:web:a23ef727d0af3b44451f3a"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

// Global view state tracking parameter
let activeMatrixView = 'academic';

// 2. MOUNT SECURE EXECUTION HOOKS ONTO THE GLOBAL WINDOW LAYER
// ========================================================
window.loginWithGoogle = () => {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
        .then((result) => { 
            console.log("Logged in successfully:", result.user.email);
        })
        .catch((error) => { 
            console.error("Login failure event:", error);
            alert("Login Failed: Please ensure popups are unblocked in your browser window settings.");
        });
};

window.logoutUser = () => { 
    signOut(auth)
        .catch((error) => console.error("Signout Error block:", error));
};

// ========================================================
// 3. SECURE PROFILE VISUAL CONTENT TARGETS
// ========================================================
const securedContactHTML = `
    <div class="bio-details" style="width: 100%; padding: 5px 0;">
        <h3 style="color:#007bff; margin-bottom:15px;">📞 Authenticated Personal Profile</h3>
        <ul style="list-style: none; padding: 0; line-height: 2;">
            <li><strong>Email:</strong> <a href="mailto:chiranjeevi210@gmail.com" style="color:#007bff; text-decoration:none;">chiranjeevi210@gmail.com</a></li>
            <li><strong>Mobile Number:</strong> <a href="tel:+919949163002" style="color:#007bff; text-decoration:none;">+919949163002</a></li>
            <li><strong>Mailing Address:</strong> H No 4-243 th lane BC colony, Vepagunta, Visakhapatnam-530047, India</li>
            <li><strong>LinkedIn Network:</strong> <a href="https://linkedin.com" target="_blank" style="color:#007bff; text-decoration:underline;">Open Profile Matrix</a></li>
            <li><strong>Google Scholar Link:</strong> <a href="https://google.com" target="_blank" style="color:#007bff; text-decoration:underline;">View Research Citations</a></li>
            <li><strong>JNTUH Registration Handle:</strong> 3059-191113-150648</li>
            <li><strong>UNIPUNE Identity Key:</strong> 52092500466</li>
            <li><strong>Scopus Author Node ID:</strong> 58316331900</li>
            <li><strong>ORCID Research ID:</strong> 0000-0002-7895-407X</li>
        </ul>
        <button onclick="window.logoutUser()" class="explore-btn" style="margin-top:20px; background:#dc3545; color:white; border:none; padding:8px 16px; border-radius:4px; cursor:pointer; font-weight:600;">Sign Out Account</button>
    </div>
`;
// ========================================================
// 4. AUTH STATE SUBSCRIPTION PROVIDER ENGINE
// ========================================================
onAuthStateChanged(auth, (user) => {
    const authGate = document.getElementById('auth-gate');
    const secureContact = document.getElementById('secure-contact-container');
    
    if (user) {
        if (authGate) authGate.style.display = 'none';
        if (secureContact) {
            secureContact.innerHTML = securedContactHTML;
            secureContact.style.display = 'block';
        }
    } else {
        if (secureContact) {
            secureContact.style.display = 'none';
            secureContact.innerHTML = '';
        }
        if (authGate) authGate.style.display = 'block';
    }
});
// ==========================================
// 5. VIEW TOGGLE SUBSYSTEM CONTROLLER
// ==========================================
const objectives = {
    academic: "Seeking a challenging position in an academic institution to leverage research, teaching methodology, and institutional development expertise.",
    industry: "An Electrical Engineer and Software professional, forever a student, dreaming for a career in a nice environment which is technically and ethically developed."
};

window.switchView = function(viewMode) {
    activeMatrixView = viewMode;
    const academicElements = document.querySelectorAll('.academic-only');
    const industryElements = document.querySelectorAll('.industry-only');
    const objText = document.getElementById('objective-text');
    const btnAcademic = document.getElementById('btn-academic');
    const btnIndustry = document.getElementById('btn-industry');

    if (viewMode === 'academic') {
        academicElements.forEach(el => el.style.display = 'flex');
        industryElements.forEach(el => el.style.display = 'none');
        if (objText) objText.textContent = objectives.academic;
        if (btnAcademic) btnAcademic.classList.add('active');
        if (btnIndustry) btnIndustry.classList.remove('active');
    } else {
        academicElements.forEach(el => el.style.display = 'none');
        industryElements.forEach(el => el.style.display = 'flex');
        if (objText) objText.textContent = objectives.industry;
        if (btnIndustry) btnIndustry.classList.add('active');
        if (btnAcademic) btnAcademic.classList.remove('active');
    }
};

// ==========================================
// 6. POPUP DISPLAY WINDOW ACTIONS
// ==========================================
window.openHTMLModal = function(title, htmlContent) {
    const modal = document.getElementById('details-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    if (modal && modalTitle && modalBody) {
        modalTitle.innerText = title;
        modalBody.innerHTML = htmlContent;
        modal.style.display = 'flex';
        document.body.style.overflow = 'hidden'; 
    }
};

window.closeModal = function() {
    const modal = document.getElementById('details-modal');
    if (modal) {
        modal.style.display = 'none';
        document.body.style.overflow = '';
    }
};
// ========================================================
// 7. FIREBASE FIRESTORE DATA CONNECTOR ROUTER (UNIFIED SOURCE)
// ========================================================
window.handleReferencesTrigger = () => {
    window.showReferencesModal(activeMatrixView);
};

window.showReferencesModal = async function(currentView) {
    // 1. Guard Clause: Block unauthenticated users
    if (!auth.currentUser) {
        window.openHTMLModal("Access Restricted", `
            <div style="padding:10px; text-align:center;">
                <p style="margin-bottom:15px; color:#dc3545; font-weight:600; font-size:1.1rem;">🔒 Credentials Sealed</p>
                <p style="margin-bottom:20px; color:#666; font-size:0.95rem;">You must sign in with Google using the main button under 'Locked Contact Credentials' to unlock references.</p>
            </div>
        `);
        return;
    }

    // 2. Initialize the HTML string template container
    let html = `<div style="padding: 10px; line-height: 1.6; font-family: sans-serif;">`;

    // 3. Segmented view logic architecture
    if (currentView === 'academic') {
        html += `
            <h3 style="color:#007bff; border-bottom: 2px solid #007bff; padding-bottom: 5px; margin-bottom: 15px;">🎓 Academic & Research References</h3>
            <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 15px;"><strong>Mr. K Prasad</strong><br>Government Polytechnic, Vizianagaram<br>Cell: +91 9912340292</li>
                <li style="margin-bottom: 15px;"><strong>Professor G Sridevi</strong><br>Aditya University, East Godavari<br>Cell: +91 9848141867</li>
                <li style="margin-bottom: 15px;"><strong>Professor A NagaJyothi</strong><br>Vignans Institute of Information Technology, Gajuwaka<br>Cell: +91 9398121200</li>
            </ul>
        `;
    } else {
        html += `
            <h3 style="color:#28a745; border-bottom: 2px solid #28a745; padding-bottom: 5px; margin-bottom: 15px;">💼 Industry & Corporate References</h3>
            <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 15px;"><strong>Dr. S Suryaprakasa Rao</strong> (Retired Professor & HoD of ENT)<br>AMC / Gayatri Medical College (GVPIHC&MT)<br>Cell: +91 8688381481</li>
                <li style="margin-bottom: 15px;"><strong>Md. Faheem Ul Haq</strong><br>Family Friend<br>Cell: +91 9849022155</li>
                <li style="margin-bottom: 15px;"><strong>Prof. M Ramalinga Raju</strong> (Professor, Electrical & Electronics Engineering)<br>Former Vice Chancellor, JNTUK Kakinada<br>Cell: +91 9603619104</li>
            </ul>
            
            <h3 style="color:#17a2b8; border-bottom: 2px solid #17a2b8; padding-bottom: 5px; margin-top: 25px; margin-bottom: 15px;">🏠 Personal & Character References</h3>
            <ul style="list-style: none; padding: 0;">
                <li style="margin-bottom: 15px;"><strong>Mrs. V Mounika</strong> (Former Principal)<br>Vivekananda Degree College (Family Friend)<br>Cell: +91 9866102045</li>
                <li style="margin-bottom: 15px;"><strong>T Mohanrao</strong><br>Teacher, ZP High School, Family Friend<br>Cell: +91 9490207027</li>
            </ul>
        `;
    }

    html += `</div>`;

    // 4. Fire openHTMLModal directly using the generated templates
    if (typeof window.openHTMLModal === 'function') {
        window.openHTMLModal("References Directory", html);
    } else {
        console.error("window.openHTMLModal is not defined. Ensure your Modal system component is loaded.");
    }
    
    return html;
};
// ==========================================
// 8. STATIC INFO DISPLAY POPUPS
// ==========================================
window.showQualificationsModal = function() {
let html = <div> <p style='margin-bottom:10px;'><strong>M.Tech (High Voltage Engineering):</strong> JNTU Kakinada - 72.00% (Distinction)</p> <p style='margin-bottom:10px;'><strong>B.Tech (Electrical & Electronics):</strong> Chaitanya Engineering College - 71.63% (Distinction)</p> <p style='margin-bottom:10px;'><strong>Intermediate (MPC):</strong> Gayatri Junior College - 94.10%</p> <p style='margin-bottom:10px;'><strong>SSC:</strong> ZP High School, Jami - 89.86%</p> </div>;
window.openHTMLModal("Qualifications Records", html);
};
window.showAcademicStrengthsModal = function() {
let html = <ul> <li><strong>9+ Years Higher Education Tenure:</strong> Extensive delivery of core Electrical engineering branches.</li> <li><strong>OBE Systems Management:</strong> Advanced mapping workflows for NAAC and NBA file audits.</li> </ul>;
window.openHTMLModal("Academic Strengths & Traits", html);
};
window.showCertificationsModal = function() {
let html = `
Coursera Specialization Modules:

IBM Full Stack JavaScript Developer (12 Courses) - Sep 2026 [Verify]
Microsoft AI and ML Engineering (5 Courses) - Jul 2026 [Verify]
IBM AI Developer (10 Courses) - Jun 2026 [Verify]
IBM Java Developer (14 Courses) - Jul 2026 [Verify]
IBM JavaScript Backend Developer (13 Courses) - Aug 2026 [Verify]
Google Cyber Security Specialist Track (9 Courses) - Jul 2026 [Verify]
NPTEL Certifications:

Advanced Computer Architecture - Apr 2026 [Verify]
Advanced Computer Networks - Apr 2025 [Verify]
Practical Cyber Security for Cyber Security Practitioners - Jul-Oct 2024 [Verify]
Cloud Computing - Jul-Oct 2024 [Verify]
Big Data Computing (8-Week Course) - Oct 2023 [Verify]
Ethics in Engineering Practice (8-Week Course) - Oct 2023 [Link Pending]
Introduction to Smart Grid (8-Week Course) - Jul-Sep 2022 [Verify]

`;
window.openHTMLModal('Advanced Certifications & Up-Skilling', html);
};
window.showExperienceModal = function() {
let html = `
Assistant Professor – Department of Electrical Engineering (AI & ML)

Sandip Institute of Technology and Research Centre (Sandip University), Nashik, Maharashtra

June 2025 – May 2026

• Delivered specialized courses bridging heavy electrical engineering with computational intelligence, including Artificial Intelligence Techniques and AI-Based Web Design.

[Verify Experience]
Assistant Professor – Department of Electrical & Electronics Engineering

Guru Nanak Institute of Technology (Autonomous), Ibrahimpatnam, Hyderabad

February 2023 – January 2025

• Taught core undergraduate engineering subjects and guided graduation project groups.

• Managed automated tools for continuous student assessments, grading workflows, and classroom operations.

[Verify Experience]
Assistant Professor – Department of Electrical & Electronics Engineering

Malla Reddy Engineering College for Women (Autonomous), Secunderabad

July 2022 – February 2023

• Led academic instruction, micro-mentoring programs, and structured laboratory assessments.

• Contributed actively to internal department committees preparing for structural university audits.

[Verify Experience]
Senior Assistant Professor – Department of Electrical & Electronics Engineering

Aditya College of Engineering, Surampalem, Andhra Pradesh

November 2019 – July 2021

• Provided senior-level instructional delivery for advanced PG and UG courses.

• Structured curriculum changes to better incorporate simulation tools like MATLAB within lab protocols.

[Verify Experience]
Assistant Professor – Department of EEE

Vignan’s Institute of Information Technology (Autonomous), Visakhapatnam, Andhra Pradesh

March 2015 – November 2019

• Administered core academic workloads alongside critical operational responsibilities, serving as the NBA coordinator and department Time-Table planner.

• Spearheaded institutional accreditation data compilation (NBA & NAAC files).

[Verify Experience]
`;
window.openHTMLModal('Professional Experience', html);
};
window.showPublicationsModal = function() {
var html = '' +
'🔒 Published Patents' +
'' +
'Smart Medical Diagnosis System Using IoT-Driven Machine Learning and Big Data Analytics
' +
'Field: Bio-Medical Engineering | Pub. Number: 11/2024(INA)' +
'Power Quality Analysis Using IoT
' +
'Field: Power Systems / Automation | App. Number: 202441060301 | Aug 2024' +
'' +
'📚 Forthcoming Books' +
'' +
'Logical Introduction to Digital Electronics
' +
'Accepted for publication by BPB Publications (Final editing phases for 2026 launch).' +
'' +
'📄 Peer-Reviewed Book Chapters & Journal Papers' +
'' +
'"Dynamic stability improvement of a smart grid using neural network based STATCOM" - Indian Journal of Science and Technology ' +
'[View Article]' +
'"Transient Stability Improvement of SMIB using DPFC" - IJPAM (2017) ' +
'[View PDF]' +
'"Application of SVC for Multi Objective Power problem with PSO" - IJPAM (2017) ' +
'[View PDF]' +
'"A grid interfaced low frequency wind power" - IJRASET (2015) ' +
'[View PDF]' +
'"Fuzzy based Unified Control and Power Management Scheme for PV Battery based Hybrid Micro Grids for both Grid Connected and Islanded Modes" - IJAEMA ' +
'[View Document]' +
'"Simulation based Analysis for fixing Optimal stages for a H-Bridge cascaded Multi Level Converters" - IJSETR (2016) ' +
'[View PDF]' +
'Book Chapter: "Cyber security in smart Grids: Role of Digital Advanced Devices" - Cyber security-Issues, Challenges–Solutions-Business, IGI Global Publications (Oct 2022) ' +
'[CrossRef DOI]' +
'' +
'';
window.openHTMLModal('Research Publications & Intellectual Property', html);
};
window.showDevelopmentProgramsModal = function() {
var html = '' +
'🎓 Teaching Methodologies & Outcome-Based Education (OBE)' +
'' +
'Two-day FDP on OBE Focused Curriculum Design – IQAC, Sandip University, Nashik (8-9 Nov 2026)' +
'OBE Workshop – VIIT by KLETU (4-6 May 2018)' +
'National Workshop on MOOCs and E-Learning in Higher Education – Guru Angad Dev TLC of MHRD, SGTB Khalsa College, University of Delhi (18 Aug 2018)' +
'Three-day Workshop on Counselling System and Guidance – Medhas I-Train, Hyderabad (4-6 Dec 2018)' +
'' +
'💻 Electronics, AI, Data Science & Internet of Things (IoT)' +
'' +
'One-Week FDP on Emerging Trends and Applications of Generative AI – ISTE Approved, SVKM’s Institute of Technology, Dhule (27-31 Jan 2025)' +
'15 Days Online FDP on Open Business Tools for AI and Business Applications – 6th Q Research (H), India (18 Aug – 3 Sep 2025)' +
'MHRD-Sponsored INDO-US International Workshop on IoT and ML Based Microgrid & Energy Management – Dept. of EEE, Chaitanya Bharathi Institute of Technology, Hyderabad (19-23 Feb 2024)' +
'8-Week FDP on Big Data Computing – IIT Patna through NPTEL-AICTE (Aug–Oct 2023)' +
'42 Hours Training Program on Python for Data Science – ExcelR (16 May – 3 Jun 2022)' +
'40 Hours Training Program on Artificial Intelligence – ExcelR under EDL Initiative (28 Mar – 25 Apr 2022)' +
'One-Week Short-Term Training Programme on Pattern Recognition Theory and Applications – NITTTR Kolkata via ICT Mode (21-25 Mar 2022)' +
'Online FDP on Data Sciences Applied to Industries – Directorate of Faculty Development, JNTU Kakinada (17-21 Aug 2020)' +
'FDP on IoT – APSSDC (13-25 Jul 2020)' +
'3-Day FDP on Machine Learning – APSSDC at VIIT (13-15 Sep 2020)' +
'One-Week FDP on Hands-on Training on Power Electronics and Power Systems Using Advanced Analytical Tools – Andhra University College of Engineering Autonomous (5-9 Feb 2018)' +
'' +
'⚡ Power Systems, Smart Grids & Renewable Energy' +
'' +
'40-Hour Online FDP on Advanced Intelligence and ICT Application to Power System Protection – Sponsored by Ministry of Electronics and IT (MeitY), organized by E&ICT Academy, NIT Warangal and GVPCE(A), Visakhapatnam (18-27 Jul 2022)' +
'Five-day Online Workshop on Integration of Renewable Energy & EV to Microgrid: Prospects and Challenges – Under SPARC, Dept. of EEE, NIT Tiruchirappalli & The Hong Kong Polytechnic University (21-25 Feb 2022)' +
'Two-day Workshop on Integration of Renewable Energy Sources to Micro Grids – Sponsored by DST-SERB (18-19 Aug 2017)' +
'Two-day Workshop on Smart Grids and Renewable Energy – CPRI, Bangalore (26-27 Nov 2015)' +
'One-day Workshop on Renewable Energy Sources - As Alternatives in Power Sector – Gayatri Vidya Parishad College of Engineering, Visakhapatnam (11 Feb 2012)' +
'' +
'🏫 Institutional Development, Webinars & Core FDPs' +
'' +
'One-Week Faculty Development Program – Chameli Devi Institute of Professional Studies, Indore (6-11 Jul 2026)' +
'One-Week Online FDP on Exploring the Significance of Indian Knowledge Systems in the Context of NEP 2020 – Chaitanya Bharathi Institute of Technology, Hyderabad (5-10 Feb 2024)' +
'8-Week FDP on Ethics in Engineering Practice – IIT Kharagpur through NPTEL-AICTE (Aug–Oct 2023)' +
'Short-Term Course on Soft Computing Using Sci-Lab – Educational Television Centre, Raghu Engineering College, Visakhapatnam (21-25 Jul 2014)' +
'TCS iON Faculty Engagement Session on Global Best Practices in Education (2 Apr 2026)' +
'International Webinar on Impact of AI and ML in Computer – SRM TRP Engineering college (28 Mar 2022)' +
'National Level Webinar on Art of Teaching – Dept. of EEE, Gayatri Vidya Parishad College of Engineering(A), Visakhapatnam (7 Jul 2020)' +
'Webinar on Cryptography Encryption Techniques – Dept. of Computer Science and Applications, SRM Arts and Science College (16 Jul 2020)' +
'Webinar on NAAC News Release – Led by Shri Pralhad Joshi, Hon’ble Minister of Parliamentary Affairs, Coal and Mines (16 Jul 2020)' +
'' +
'';
window.openHTMLModal('Faculty Up-Skilling & FDP Records', html);
};
window.showExpertiseModal = function() {
var html = '' +
'🎯 Areas of Interest' +
'' +
'Artificial Intelligence & Machine Learning' +
'Cyber Security' +
'Electromagnetics' +
'Microcontrollers & Digital Logic Design' +
'Non-Conventional Sources of Energy' +
'' +
'📖 Courses Handled' +
'' +
'Artificial Intelligence Techniques' +
'AI Based Web Design' +
'Introduction to Expert Systems' +
'Advanced Python Programming' +
'Discrete Mathematics and Logic' +
'Software Testing Certification' +
'Electro Magnetic Fields' +
'Microprocessors and Microcontrollers' +
'Digital Logic Design' +
'Digital Controllers' +
'Control Systems' +
'Power System Analysis' +
'Power System Protection' +
'High Voltage Engineering' +
'Non-Conventional Sources of Energy' +
'Electrical Technology' +
'Basic Electrical and Electronics Engineering' +
'' +
'';
window.openHTMLModal('Subject Area Expertise', html);
};
window.showSkillsModal = function() {
var html = '' +
'Core Languages: Python (Advanced), MATLAB (Simulink Twin Engineering), JavaScript (Full-Stack Engine Stack), Core Java Basics.' +
'Domain Tools: FACTS Controllers Optimization, Smart Grid Architecture Twins, Cybersecurity Infrastructure Auditing.' +
'';
window.openHTMLModal('Technical Skills & Toolsets', html);
};
window.showConferencesModal = function() {
var html = '' +
'📋 International & National Conference Presentations' +
'' +
'"System knowledge for digital twin technologies in Industry 4.0 and Industry 5.0"
' +
'Presented at the 5th International E-Conference on Mechanical and Material Science Engineering: Innovation and Research (ICMMSE:IR), ' +
'organized by the Department of Mechanical Engineering, Sandip Institute of Technology & Research Centre, Nashik, Maharashtra ' +
'(27th – 28th February 2026).' +
'"Cyber Security in smart grids- Role of Digital Advanced devices"
' +
'Presented at the Two-Day National Conference on Green and Resilient Energy Systems (GVCON-2K22), ' +
'conducted by the Electrical & Electronics Engineering Department, Gayatri Vidya Parishad College of Engineering (Autonomous), Visakhapatnam ' +
'(21st – 22nd October 2022).' +
'"Transient Stability Improvement of SMIB using DPFC"
' +
'Presented at the Two-Day National Conference on Recent Trends in Electrical and Electronics Engineering (RTEEE), ' +
'held at Vignan’s Institute of Information Technology, Visakhapatnam ' +
'(14th – 15th April 2017).' +
'' +
'';
window.openHTMLModal('Conferences Attended Presentation Details', html);
};
// ==========================================
// 6. DOM EVENT LISTENERS SETUP
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const btnAcademic = document.getElementById('btn-academic');
    const btnIndustry = document.getElementById('btn-industry');

    if (btnAcademic) {
        btnAcademic.addEventListener('click', () => window.switchView('academic'));
    }
    
    if (btnIndustry) {
        btnIndustry.addEventListener('click', () => window.switchView('industry'));
    }
});

