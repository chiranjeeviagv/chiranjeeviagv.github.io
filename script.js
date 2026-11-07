  import { initializeApp } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-app.js";
  
  // 2. FIXED: Add the full CDN paths for Auth and Firestore
  import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-auth.js";
  import { getFirestore, doc, getDoc, collection, addDoc, query, getDocs, orderBy, deleteDoc } from "https://www.gstatic.com/firebasejs/13.2.0/firebase-firestore.js";

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBnGToJaX58ErhnTPAyPZNTaYnccHvnbGU",
    authDomain: "interactive-cv-6f58a.firebaseapp.com",
    projectId: "interactive-cv-6f58a",
    storageBucket: "interactive-cv-6f58a.firebasestorage.app",
    messagingSenderId: "904714357999",
    appId: "1:904714357999:web:a23ef727d0af3b44451f1a"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  
  // Initialize services so they are ready to use in your app
  const auth = getAuth(app);
  const db = getFirestore(app);
  
let activeMatrixView = 'academic';

// 2. MOUNT SECURE EXECUTION HOOKS ONTO THE GLOBAL WINDOW LAYER
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
    signOut(auth).catch((error) => console.error("Signout Error block:", error));
};

const securedContactHTML = `
    <div class="bio-details" style="width: 100%; padding: 5px 0; font-family: sans-serif;">
        <h3 style="color:#007bff; margin-bottom:15px;">📞 Authenticated Personal Profile</h3>
        <ul style="list-style: none; padding: 0; line-height: 2; margin-bottom: 25px;">
            <li><strong>Email:</strong> <a href="mailto:chiranjeevi210@gmail.com" style="color:#007bff; text-decoration:none;">chiranjeevi210@gmail.com</a></li>
            <li><strong>Mobile:</strong> <a href="tel:+919949163002" style="color:#007bff; text-decoration:none;">+919949163002</a></li>
            <li><strong>Google Scholar ID:</strong> <a href="https://google.com" target="_blank" style="color:#007bff; text-decoration:none;">o0nn0UoAAAAJ</a></li>
            <li><strong>ORCID ID:</strong> <a href="https://orcid.org" target="_blank" style="color:#007bff; text-decoration:none;">0000-0002-7895-407X</a></li>
            <li><strong>Scopus Author ID:</strong> <a href="https://scopus.com" target="_blank" style="color:#007bff; text-decoration:none;">58316331900</a></li>
            <li><strong>JNTUH Registration ID:</strong> 3059-191113-150648</li>
            <li><strong>UNIPUNE ID:</strong> 52092500466</li>
            <li><strong>LinkedIn Profile:</strong> <a href="https://linkedin.com" target="_blank" style="color:#007bff; text-decoration:none;">View Profile</a></li>
            <li><strong>Mailing Address:</strong> H No 4-243 4th lane BC colony, Vepagunta, Visakhapatnam-530047, India</li>
        </ul>
        <div style="flex-shrink: 0; margin: 0 auto;">
            <img src="profile-pic.jpeg" alt="Profile Picture" style="width: 150px; height: 150px; border-radius: 50%; object-fit: cover; border: 3px solid #007bff; box-shadow: 0 2px 8px rgba(0,0,0,0.1);" />
        </div>
        <h3 style="color:#28a745; margin-bottom:15px; border-top: 1px solid #eee; padding-top: 15px;">📥 Recruiter Messages Inbox</h3>
        <div id="inbox-messages-container" style="max-height: 300px; overflow-y: auto; background: #f8f9fa; padding: 10px; border-radius: 6px; border: 1px solid #ddd; margin-bottom: 20px;">
            <p style="color: #666; font-style: italic;">Loading messages stream...</p>
        </div>
        <button onclick="window.logoutUser()" class="explore-btn" style="background:#007bff; color:white; border:none; padding:8px 16px; border-radius:4px; cursor:pointer; font-weight:600;">Sign Out Account</button>
    </div>
`;

// 4. AUTH STATE SUBSCRIPTION ENGINE
onAuthStateChanged(auth, async (user) => {
    const authGate = document.getElementById('auth-gate');
    const secureContact = document.getElementById('secure-contact-container');
    
    if (user) {
        if (authGate) authGate.style.display = 'none';
        if (secureContact) {
            secureContact.innerHTML = securedContactHTML;
            secureContact.style.display = 'block';
            window.loadRecruiterMessages();
        }
    } else {
        if (secureContact) {
            secureContact.style.display = 'none';
            secureContact.innerHTML = '';
        }
        if (authGate) authGate.style.display = 'block';
    }
    
    // Always call layout manager to sync visibility conditions cleanly
    window.switchView(activeMatrixView);
});

// 5. MATRIX VIEW SWITCHER ENGINE
window.switchView = function(viewType) {
    activeMatrixView = viewType;
    console.log("Active view state:", viewType);
    const elementsMap = {
        'qualifications-section': ['academic', 'industry'], //  Fixed: Added comma
        'publications-section': ['academic', 'industry'],
        'experience-section': ['academic', 'industry'],
        'expertise-section': ['academic', 'industry'],
        'projects-section': ['industry'],
        'skills-section': ['industry'],
        'certifications-section': ['industry'],
        'languages-section': ['industry'],
        'references-section': ['academic'],
        'conferences-section': ['academic'],
        'fdp-section': ['academic']
    };
    const user = auth.currentUser;

    Object.keys(elementsMap).forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            // Context check: Hide protected elements if logged out
            const isSecureNode = ['references-section', 'certifications-section', 'skills-section', 'languages-section'].includes(id);
            if (isSecureNode && !user) {
                el.classList.add('hidden-layout-node');
                return;
            }

            // Standard Matrix Filter check
            if (elementsMap[id].includes(viewType)) {
                el.classList.remove('hidden-layout-node');
            } else {
                el.classList.add('hidden-layout-node');
            }
        }
    });

    const btnAcademic = document.getElementById('btn-academic');
    const btnIndustry = document.getElementById('btn-industry');
    if (btnAcademic && btnIndustry) {
        if (viewType === 'academic') {
            btnAcademic.classList.add('active');
            btnIndustry.classList.remove('active');
        } else {
            btnIndustry.classList.add('active');
            btnAcademic.classList.remove('active');
        }
    }
};

window.loadRecruiterMessages = async function() {
    const container = document.getElementById('inbox-messages-container');
    if (!container) return;
    try {
        const q = query(collection(db, "messages"), orderBy("timestamp", "desc"));
        const querySnapshot = await getDocs(q);
        if (querySnapshot.empty) {
            container.innerHTML = `<p style="color: #666; font-style: italic; margin: 0;">No messages received yet.</p>`;
            return;
        }
        let inboxHTML = '';
        querySnapshot.forEach((messageDoc) => {
            const data = messageDoc.data();
            const date = data.timestamp ? new Date(data.timestamp.seconds * 1000).toLocaleString() : 'N/A';
            inboxHTML += `
                <div id="msg-card-${messageDoc.id}" style="background: white; padding: 12px; border-radius: 4px; border: 1px solid #eee; margin-bottom: 10px; position: relative;">
                    <span style="font-size: 0.8rem; color: #999; float: right;">${date}</span>
                    <strong style="color: #333; display: block; font-size: 0.95rem;">${data.name}</strong>
                    <a href="mailto:${data.email}" style="font-size: 0.85rem; color: #007bff; text-decoration: none;">${data.email}</a>
                    <p style="margin: 8px 0 0 0; color: #555; font-size: 0.9rem; white-space: pre-wrap;">${data.message}</p>
                    <button onclick="window.deleteRecruiterMessage('${messageDoc.id}')" style="margin-top: 8px; background: transparent; color: #dc3545; border: none; padding: 0; cursor: pointer; font-size: 0.8rem; font-weight: bold;">🗑️ Delete Message</button>
                </div>`;
        });
        container.innerHTML = inboxHTML;
    } catch (error) {
        container.innerHTML = `<p style="color: #dc3545; font-size:0.85rem; margin:0;">⚠️ Error fetching data: Permission Denied.</p>`;
    }
};

// FIXED: Defined the missing window.openHTMLModal initialization wrapper properly here
window.openHTMLModal = function(title, innerHTMLContent) {
    let existingModal = document.getElementById('global-cv-modal-context');
    if (existingModal) existingModal.remove();

    const modalOverlay = document.createElement('div');
    modalOverlay.id = 'global-cv-modal-context';
    modalOverlay.style = "position:fixed; top:0; left:0; width:100vw; height:100vh; background:rgba(0,0,0,0.5); z-index:99999; display:flex; align-items:center; justify-content:center; font-family:sans-serif;";

    const modalBox = document.createElement('div');
    modalBox.style = "background:white; padding:20px; border-radius:8px; max-width:600px; width:90%; max-height:80vh; overflow-y:auto; position:relative; box-shadow:0 4px 15px rgba(0,0,0,0.2);";

    // ... continuous modal layout configuration
    modalBox.innerHTML = `
        <h3 style="margin-top:0; color:#333; padding-right:30px; border-bottom:1px solid #eee; padding-bottom:10px;">${title}</h3>
        <button id="close-modal-btn" style="position:absolute; top:15px; right:15px; background:transparent; border:none; font-size:1.5rem; cursor:pointer; color:#999;">&times;</button>
        <div style="margin-top:15px;">${innerHTMLContent}</div>
    `;

    modalOverlay.appendChild(modalBox);
    document.body.appendChild(modalOverlay);
    
    const closeModal = () => modalOverlay.remove();
    document.getElementById('close-modal-btn').addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', (e) => { if (e.target === modalOverlay) closeModal(); });
};
window.deleteRecruiterMessage = async function(id) {
    if (confirm("Are you sure you want to permanently delete this recruiter message?")) {
        try {
            await deleteDoc(doc(db, "messages", id));
            // FIXED: Added missing template literal backticks below
            const card = document.getElementById(`msg-card-${id}`);
            if (card) card.remove();
            
            const container = document.getElementById('inbox-messages-container');
            if (container && container.children.length === 0) {
                // FIXED: Wrapped string markup inside template literal string
                container.innerHTML = `<p style="color: #666; font-style: italic; margin: 0;">No messages received yet.</p>`;
            }
        } catch (error) {
            alert("Could not remove record: " + error.message);
        }
    }
};

window.handleReferencesTrigger = function() {
    const user = auth.currentUser;
    if (!user) {
        alert("🔒 Access Denied: Please sign in with your Google account to view professional references.");
        return;
    }
    
    let html = '';
    if (activeMatrixView === 'academic') {
        // FIXED: Wrapped multi-line HTML safely inside standard JavaScript template strings
        html = `
            <div style="font-family: sans-serif; line-height: 1.6; padding: 10px;"> 
                <h4 style="color: #007bff; margin-top: 0; border-bottom: 2px solid #007bff; padding-bottom: 4px;">🎓 Academic Mentors & Guides</h4> 
                <div style="margin-bottom: 15px; background: #f8f9fa; padding: 12px; border-left: 4px solid #007bff; border-radius: 4px;">
                    <strong>Dr. K Srikanth</strong><br>Professor, Department of EEE<br>
                    <span style="font-size: 0.9rem; color: #555;">Gayatri Vidya Parishad College of Engineering(A), Visakhapatnam</span><br>
                    <span style="font-size: 0.85rem; color: #666;">✉️ Mobile: 9440897892</span>
                </div> 
                <div style="margin-bottom: 15px; background: #f8f9fa; padding: 12px; border-left: 4px solid #007bff; border-radius: 4px;">
                    <strong>Dr. K Prasad</strong><br>Rt. Sr. Lecturer, Government Polytechnique, Vizianagaram<br>
                    <span style="font-size: 0.9rem; color: #555;">Director, Gayatri degree college, Vizianagaram</span><br>
                    <span style="font-size: 0.85rem; color: #666;">✉️ Mobile: 9912340292</span>
                </div> 
            </div>
        `;
    } else {
        // FIXED: Wrapped multi-line HTML safely inside template strings
        html = `
            <div style="font-family: sans-serif; line-height: 1.6; padding: 10px;"> 
                <h4 style="color: #28a745; margin-top: 0; border-bottom: 2px solid #28a745; padding-bottom: 4px;">💼 Industry Leads & Referrals</h4> 
                <div style="margin-bottom: 15px; background: #f8f9fa; padding: 12px; border-left: 4px solid #28a745; border-radius: 4px;">
                    <strong>Professor M Ramalingaraju</strong><br>Professor, EEE, Former Vice Chancellor, JNTUK<br>
                    JNTUK College of engineering, kakinada
                </div> 
            </div>
        `;
    }
    window.openHTMLModal("Professional References", html);
};

// Modals configurations placeholder setup
window.showQualificationsModal = function() {
    let html = `
        <div style="font-family: sans-serif; line-height: 1.6; padding: 10px;">
            <p style='margin-bottom:10px;'><strong>M.Tech (High Voltage Engineering):</strong> <a href="https://drive.google.com/file/d/1kZD7vgJqHsifE2tw9LUEyVgCb6adR8HM/view?usp=sharing">JNTU Kakinada</a> - 72.00% (Distinction)</p>
            <p style='margin-bottom:10px;'><strong>B.Tech (Electrical & Electronics Engineering):</strong> <a href="https://drive.google.com/file/d/1SMhWIF0aFxWplG4e83fom6THEuU4RtgS/view?usp=sharing">JNTH Hyderabad</a> - 71.63% (Distinction)</p>
            <p style='margin-bottom:10px;'><strong>Intermediate (MPC): </strong> <a href="https://drive.google.com/file/d/1EF5XlMU8kwqbM_g7lFCqYSwNuwtHFklk/view?usp=sharing">Gayatri Junior College</a> - 94.10% (First class)</p>
            <p style='margin-bottom:10px;'><strong? </strong> <a href="https://drive.google.com/file/d/12HNfZv_ltMW8Lw_KnB7q5gLGwAwHcxQU/view?usp=sharing">ZP High school , JAMI</a> - 89.86% (First class)</p>
        </div>
    `;
    window.openHTMLModal("Qualifications Records", html);
};

window.showAcademicStrengthsModal = function() {
    let html = `
        <ul style="font-family: sans-serif; line-height: 1.8; padding-left: 20px;">
            <li style="margin-bottom: 8px;"><strong>9+ Years Higher Education Tenure:</strong> Extensive experience (post-M.Tech) teaching core Electrical & Electronics Engineering branches across diverse regional systems.</li>
            <li style="margin-bottom: 8px;"><strong>OBE & Pedagogy Mastery:</strong> Deep knowledge of Outcome-Based Education (OBE) frameworks and interactive teaching-learning methodologies.</li>
            <li style="margin-bottom: 8px;"><strong>Accreditation & Administration:</strong> Proven hands-on track record managing Department Examination branch activities and preparing documentation for NAAC/NBA audits.</li>
            <li style="margin-bottom: 8px;"><strong>Student Mentorship:</strong> Recognized ability to effectively guide, motivate, and elevate student performance.</li>
            <li style="margin-bottom: 8px;"><strong>Core Professional Traits:</strong> Possess excellent verbal/written communication, problem analysis, and rapid grasping skills with a highly punctual, self-motivated attitude.</li>
            <li style="margin-bottom: 8px;"><strong>Operational Efficiency:</strong> Strong organizational and time-management capabilities to execute departmental tasks with minimal supervision.</li>
        </ul>
    `;
    window.openHTMLModal("Academic Strengths & Traits", html);
};

window.showProjectsModal = function() {
    const html = `
        <div style="font-family: sans-serif; line-height: 1.6; padding: 10px; max-height: 450px; overflow-y: auto; text-align: left;">
            
            <!-- Section 1: Deployed Full-Stack & Cloud Web Applications -->
            <h4 style="color: #0066cc; margin-top: 0; margin-bottom: 12px; border-bottom: 2px solid #0066cc; padding-bottom: 4px;">🚀 Deployed Full-Stack &amp; Python Web Applications</h4>
            
            <div style="margin-bottom: 14px; padding: 10px; background: #f8f9fa; border-left: 3px solid #0066cc; border-radius: 0 4px 4px 0;">
                <strong>College Content Management System (CMS)</strong> 
                <a href="https://onrender.com" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:0.85rem; margin-left:6px;">[Live Demo ↗]</a><br>
                <span style="font-size: 0.88rem; color: #444;">Full-stack institutional management web platform deployed on Render for academic workflows, records, and content administration.</span>
            </div>

            <div style="margin-bottom: 14px; padding: 10px; background: #f8f9fa; border-left: 3px solid #0066cc; border-radius: 0 4px 4px 0;">
                <strong>Hospital Management System</strong> 
                <a href="https://streamlit.app" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:0.85rem; margin-left:6px;">[Live App ↗]</a><br>
                <span style="font-size: 0.88rem; color: #444;">Interactive Python &amp; Streamlit healthcare operations application built for patient management and clinical workflow tracking.</span>
            </div>

            <div style="margin-bottom: 14px; padding: 10px; background: #f8f9fa; border-left: 3px solid #0066cc; border-radius: 0 4px 4px 0;">
                <strong>Interactive Dual-View Portfolio Architecture</strong> 
                <a href="https://gvchiranjeeviadari.online" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:0.85rem; margin-left:6px;">[Production Site ↗]</a><br>
                <span style="font-size: 0.88rem; color: #444;">Dynamic JavaScript web application featuring state-driven view switching, modal rendering, and responsive UI design.</span>
            </div>

            <div style="margin-bottom: 20px; padding: 10px; background: #f8f9fa; border-left: 3px solid #0066cc; border-radius: 0 4px 4px 0;">
                <strong>Cloud-Hosted Interactive Resume Prototypes (Python &amp; Full-Stack)</strong><br>
                <span style="font-size: 0.88rem; color: #444;">Built and deployed multi-platform versions across Streamlit Cloud and Render: 
                <a href="https://streamlit.app" target="_blank" style="color:#0066cc; text-decoration:underline;">[Streamlit Build ↗]</a> | 
                <a href="https://onrender.com" target="_blank" style="color:#0066cc; text-decoration:underline;">[Render Build ↗]</a></span>
            </div>

            <!-- Section 2: Applied AI, Simulation & Systems Engineering Projects -->
            <h4 style="color: #6f42c1; margin-top: 20px; margin-bottom: 12px; border-bottom: 2px solid #6f42c1; padding-bottom: 4px;">⚙️ AI, Control Systems &amp; Engineering R&amp;D Projects</h4>
            <ul style="padding-left: 20px; margin: 0;">
                <li style="margin-bottom: 10px;">
                    <strong>AI Fuzzy Logic Controller &amp; Decision Maker (Postgraduate Thesis):</strong><br>
                    <span style="font-size: 0.88rem; color: #444;">Designed an intelligent rule-based control algorithm to damp load-frequency oscillations across interconnected multi-area power systems.</span>
                </li>
                <li style="margin-bottom: 10px;">
                    <strong>Automated Load Frequency Control Using Fuzzy Logic (Undergraduate Project):</strong><br>
                    <span style="font-size: 0.88rem; color: #444;">Modeled and simulated closed-loop stability control for single-area power generation networks.</span>
                </li>
                <li style="margin-bottom: 6px;">
                    <strong>Technical Project Leadership &amp; Mentorship:</strong><br>
                    <span style="font-size: 0.88rem; color: #444;">Supervised <strong>10 end-to-end engineering capstone projects</strong> (8 B.Tech &amp; 2 M.Tech) spanning AI, IoT, embedded systems, and automation.</span>
                </li>
            </ul>

        </div>
    `;
    window.openHTMLModal('Projects & Live Applications', html);
};

window.showCertificationsModal = function() {
    let html = `
        <div style="font-family: sans-serif; line-height: 1.6; padding: 10px; max-height: 400px; overflow-y: auto;">
            <h4 style="color: #007bff; margin-bottom: 10px; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Coursera Specialization Modules</h4>
            <ul style="padding-left: 20px; margin-bottom: 20px;">
                <li style="margin-bottom: 6px;">IBM Full Stack JavaScript Developer (12 Courses) - Sep 2026 <a href="https://www.coursera.org/account/accomplishments/specialization/L2Q2VEP5W243" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">Microsoft AI and ML Engineering (5 Courses) - Jul 2026 <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/5SGHZ101WA4W" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">IBM AI Developer (10 Courses) - Jun 2026 <a href="https://coursera.org/verify/professional-cert/E06UAT9KFM8S" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">IBM Java Developer (14 Courses) - Jul 2026 <a href="https://coursera.org/verify/professional-cert/CGMXJ0SN33A5" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">IBM JavaScript Backend Developer (13 Courses) - Aug 2026 <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/R9G3UO4SYXJM" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">Google Cyber Security Specialist Track (9 Courses) - Jul 2026 <a href="https://coursera.org/verify/professional-cert/SZEO3FT6Q193" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
            </ul>
            
            <h4 style="color: #007bff; margin-bottom: 10px; border-bottom: 1px solid #ddd; padding-bottom: 5px;">NPTEL Certifications</h4>
            <ul style="padding-left: 20px;">
                <li style="margin-bottom: 6px;">Advanced Computer Architecture - Apr 2026 <a href="#" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">Advanced Computer Networks - Apr 2025 <a href="https://drive.google.com/file/d/1yQeZ1-coDoRCZBwwtXYv7aXvsFdXdBTV/view" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">Practical Cyber Security for Cyber Security Practitioners - Jul-Oct 2024 <a href="https://drive.google.com/file/d/1CyKiCImdnXHfHaCmLDpV2pUHx6PvOmti/view" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">Cloud Computing - Jul-Oct 2024 <a href="https://drive.google.com/file/d/13fxey0JvaQSHKq4JAOxsczLCXCl887uz/view" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">Big Data Computing (8-Week Course) - Oct 2023 <a href="https://drive.google.com/file/d/1DtA5WR6waMt2C8tUpDK-2K55aZx_pkRn/view" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">Ethics in Engineering Practice (8-Week Course) - Oct 2023 <a href="" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">Introduction to Smart Grid (8-Week Course) - Jul-Sep 2022 <a href="https://drive.google.com/file/d/1wpngaRqihuwbp1HmI5J0b-qxdqqXhNny/view" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
            </ul>
        </div>
    `;
    window.openHTMLModal('Advanced Certifications & Up-Skilling', html);
};

window.showExpertiseModal = function() {
    const html = `
        <div style="font-family: sans-serif; line-height: 1.6; padding: 10px; max-height: 450px; overflow-y: auto;">
            
            <!-- Section 1: Core Technical Domains -->
            <h4 style="color: #dc3545; margin-top: 0; margin-bottom: 12px; border-bottom: 2px solid #dc3545; padding-bottom: 4px;">🎯 Core Technical Domains</h4>
            <ul style="padding-left: 20px; margin-bottom: 22px;">
                <li style="margin-bottom: 6px;"><strong>Artificial Intelligence & Machine Learning:</strong> Applied AI techniques, expert systems, and intelligent web integration</li>
                <li style="margin-bottom: 6px;"><strong>Software Engineering & Testing:</strong> Python development, software quality assurance, and discrete logic</li>
                <li style="margin-bottom: 6px;"><strong>Cybersecurity & Systems Architecture:</strong> Network security principles, digital logic, and secure infrastructure</li>
                <li style="margin-bottom: 6px;"><strong>Embedded Systems & Industrial Control:</strong> Microcontrollers, digital controllers, and automated control systems</li>
                <li style="margin-bottom: 6px;"><strong>Smart Grids & Clean Energy Tech:</strong> Power system analysis, protection, and renewable energy systems</li>
            </ul>

            <!-- Section 2: Software, AI & Computing Modules -->
            <h4 style="color: #007bff; margin-bottom: 12px; border-bottom: 2px solid #007bff; padding-bottom: 4px;">💻 Software, AI & Computing Expertise</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 8px; padding-left: 5px; margin-bottom: 22px;">
                <div style="background: #f0f7ff; padding: 8px 10px; border-left: 3px solid #007bff; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Advanced Python Programming</div>
                <div style="background: #f0f7ff; padding: 8px 10px; border-left: 3px solid #007bff; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Artificial Intelligence Techniques</div>
                <div style="background: #f0f7ff; padding: 8px 10px; border-left: 3px solid #007bff; font-size: 0.9rem; border-radius: 0 4px 4px 0;">AI-Based Web Design</div>
                <div style="background: #f0f7ff; padding: 8px 10px; border-left: 3px solid #007bff; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Software Testing & QA</div>
                <div style="background: #f0f7ff; padding: 8px 10px; border-left: 3px solid #007bff; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Introduction to Expert Systems</div>
                <div style="background: #f0f7ff; padding: 8px 10px; border-left: 3px solid #007bff; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Discrete Mathematics & Logic</div>
            </div>

            <!-- Section 3: Hardware, Control & Power Systems -->
            <h4 style="color: #6f42c1; margin-bottom: 12px; border-bottom: 2px solid #6f42c1; padding-bottom: 4px;">⚡ Hardware, Control & Power Systems</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 8px; padding-left: 5px;">
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Microprocessors & Microcontrollers</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Digital Controllers & Control Systems</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Digital Logic Design</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Power System Analysis & Protection</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">High Voltage Engineering</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Electromagnetic Fields</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Renewable & Clean Energy Systems</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Electrical & Electronics Engineering</div>
            </div>
        </div>
    `;
    window.openHTMLModal('Domain & Technical Expertise', html);
};
window.showQualificationsModal = function() {
    let html = `
        <div style="font-family: sans-serif; line-height: 1.6; padding: 10px;">
            <p style='margin-bottom:10px;'><strong>M.Tech (High Voltage Engineering):</strong> <a href="https://drive.google.com/file/d/1kZD7vgJqHsifE2tw9LUEyVgCb6adR8HM/view?usp=sharing" target="_blank">JNTU Kakinada</a> - 72.00% (Distinction)</p>
            <p style='margin-bottom:10px;'><strong>B.Tech (Electrical & Electronics Engineering):</strong> <a href="https://drive.google.com/file/d/1SMhWIF0aFxWplG4e83fom6THEuU4RtgS/view?usp=sharing" target="_blank">JNTU Hyderabad</a> - 71.63% (Distinction)</p>
            <p style='margin-bottom:10px;'><strong>Intermediate (MPC):</strong> <a href="https://drive.google.com/file/d/1EF5XlMU8kwqbM_g7lFCqYSwNuwtHFklk/view?usp=sharing" target="_blank">Gayatri Junior College</a> - 94.10% (First Class)</p>
            <p style='margin-bottom:10px;'><strong>SSC (10th Standard):</strong> <a href="https://drive.google.com/file/d/12HNfZv_ltMW8Lw_KnB7q5gLGwAwHcxQU/view?usp=sharing" target="_blank">ZP High School, Jami</a> - 89.86% (First Class)</p>
        </div>
    `;
    window.openHTMLModal("Academic Qualifications", html);
};

window.showAcademicStrengthsModal = function() {
    let html = `
        <ul style="font-family: sans-serif; line-height: 1.8; padding-left: 20px;">
            <li style="margin-bottom: 8px;"><strong>9+ Years Technical & Analytical Leadership:</strong> Proven track record translating complex electrical and computational concepts into practical, real-world engineering solutions.</li>
            <li style="margin-bottom: 8px;"><strong>Structured Training & Onboarding:</strong> Experienced in designing outcome-driven technical modules, upskilling cohorts, and simplifying complex documentation for diverse audiences.</li>
            <li style="margin-bottom: 8px;"><strong>Compliance, Audits & Operations:</strong> Hands-on experience managing large-scale operational workflows, data compilation, and regulatory quality audits (NBA/NAAC).</li>
            <li style="margin-bottom: 8px;"><strong>Team Mentorship:</strong> Skilled at coaching cross-functional project groups from initial concept through final execution and delivery.</li>
            <li style="margin-bottom: 8px;"><strong>Rapid Technical Adaptability:</strong> Fast learner who independently transitioned from core electrical systems into Full-Stack JavaScript, AI/ML, and Cybersecurity.</li>
        </ul>
    `;
    window.openHTMLModal("Core Strengths & Transferable Skills", html);
};

window.showCertificationsModal = function() {
    let html = `
        <div style="font-family: sans-serif; line-height: 1.6; padding: 10px; max-height: 400px; overflow-y: auto;">
            <h4 style="color: #007bff; margin-bottom: 10px; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Industry Professional Certificates (IBM, Microsoft & Google)</h4>
            <ul style="padding-left: 20px; margin-bottom: 20px;">
                <li style="margin-bottom: 6px;">IBM Full Stack JavaScript Developer (12 Courses) - Sep 2026 <a href="https://www.coursera.org/account/accomplishments/specialization/L2Q2VEP5W243" target="_blank" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">IBM JavaScript Backend Developer (13 Courses) - Aug 2026 <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/R9G3UO4SYXJM" target="_blank" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">Microsoft AI and ML Engineering (5 Courses) - Jul 2026 <a href="https://www.coursera.org/account/accomplishments/specialization/certificate/5SGHZ101WA4W" target="_blank" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">IBM Java Developer (14 Courses) - Jul 2026 <a href="https://coursera.org/verify/professional-cert/CGMXJ0SN33A5" target="_blank" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">Google Cyber Security Specialist Track (9 Courses) - Jul 2026 <a href="https://coursera.org/verify/professional-cert/SZEO3FT6Q193" target="_blank" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">IBM AI Developer (10 Courses) - Jun 2026 <a href="https://coursera.org/verify/professional-cert/E06UAT9KFM8S" target="_blank" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
            </ul>
            
            <h4 style="color: #007bff; margin-bottom: 10px; border-bottom: 1px solid #ddd; padding-bottom: 5px;">NPTEL Technical Certifications</h4>
            <ul style="padding-left: 20px;">
                <li style="margin-bottom: 6px;">Advanced Computer Architecture - Apr 2026</li>
                <li style="margin-bottom: 6px;">Advanced Computer Networks - Apr 2025 <a href="https://drive.google.com/file/d/1yQeZ1-coDoRCZBwwtXYv7aXvsFdXdBTV/view" target="_blank" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">Practical Cyber Security for Cyber Security Practitioners - Oct 2024 <a href="https://drive.google.com/file/d/1CyKiCImdnXHfHaCmLDpV2pUHx6PvOmti/view" target="_blank" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">Cloud Computing - Oct 2024 <a href="https://drive.google.com/file/d/13fxey0JvaQSHKq4JAOxsczLCXCl887uz/view" target="_blank" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">Big Data Computing (8-Week Course) - Oct 2023 <a href="https://drive.google.com/file/d/1DtA5WR6waMt2C8tUpDK-2K55aZx_pkRn/view" target="_blank" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">Ethics in Engineering Practice (8-Week Course) - Oct 2023</li>
                <li style="margin-bottom: 6px;">Introduction to Smart Grid (8-Week Course) - Sep 2022 <a href="https://drive.google.com/file/d/1wpngaRqihuwbp1HmI5J0b-qxdqqXhNny/view" target="_blank" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
            </ul>
        </div>
    `;
    window.openHTMLModal('Industry & Technical Certifications', html);
};

window.showExperienceModal = function() {
    let html = `
        <div style="font-family: sans-serif; line-height: 1.6; padding: 10px; max-height: 450px; overflow-y: auto; text-align: left;">
            
            <p><strong>Technical Lead & Educator – AI & Electrical Systems</strong> (Assistant Professor)<br>
            Sandip Institute of Technology and Research Centre (Sandip University), Nashik, Maharashtra<br>
            <em>June 2025 – May 2026</em><br>
            <span style="font-size:13px; color:#444;">• Designed and delivered applied technical modules in Artificial Intelligence Techniques and AI-Based Web Design, bridging software engineering with core electrical systems.<br>
            • Mentored engineering cohorts in building practical AI and full-stack web prototypes.</span><br>
            [<a href="https://drive.google.com/file/d/1vkAjZmeYQHPg-yer47apZZG9evd2Ubp2/view?usp=sharing" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:13px;">Verify Experience</a>]</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;">
            
            <p><strong>Technical Project Mentor & Automation Coordinator</strong> (Assistant Professor – EEE)<br>
            Guru Nanak Institute of Technology (Autonomous), Ibrahimpatnam, Hyderabad<br>
            <em>February 2023 – January 2025</em><br>
            <span style="font-size:13px; color:#444;">• Supervised end-to-end capstone engineering projects from system architecture to final deployment.<br>
            • Implemented automated digital workflows for performance tracking, evaluation pipelines, and operational reporting.</span><br>
            [<a href="https://drive.google.com/file/d/1OainG_BsKrMrFH7mFoFg_pD14hV00Q5Z/view?usp=drive_link" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:13px;">Verify Experience</a>]</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;">
            
            <p><strong>Quality Assurance & Systems Coordinator</strong> (Assistant Professor – EEE)<br>
            Malla Reddy Engineering College for Women (Autonomous), Secunderabad<br>
            <em>July 2022 – February 2023</em><br>
            <span style="font-size:13px; color:#444;">• Led technical lab operations, quantitative performance evaluations, and cross-functional mentoring.<br>
            • Executed internal quality audits and compliance documentation for institutional governance reviews.</span><br>
            [<a href="https://drive.google.com/file/d/1pu58nrED6xGO_hKPntDO-8npcOayLDhY/view?usp=sharing" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:13px;">Verify Experience</a>]</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;">
            
            <p><strong>Senior Simulation & Systems Specialist</strong> (Senior Assistant Professor – EEE)<br>
            Aditya College of Engineering, Surampalem, Andhra Pradesh<br>
            <em>November 2019 – July 2021</em><br>
            <span style="font-size:13px; color:#444;">• Modernized technical testing workflows by integrating MATLAB modeling and computational simulation tools.<br>
            • Delivered advanced system-level training across postgraduate and undergraduate engineering teams.</span><br>
            [<a href="https://drive.google.com/file/d/1kQQ39YCL-o0eyFySFIgzR0qddAOVe5Ch/view?usp=sharing" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:13px;">Verify Experience</a>]</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;">
            
            <p><strong>Operations & Compliance Coordinator</strong> (Assistant Professor – EEE)<br>
            Vignan’s Institute of Information Technology (Autonomous), Visakhapatnam, Andhra Pradesh<br>
            <em>March 2015 – November 2019</em><br>
            <span style="font-size:13px; color:#444;">• Directed department-wide resource scheduling, operations planning, and cross-team coordination.<br>
            • Spearheaded large-scale data compilation, KPI tracking, and regulatory audit readiness (NBA & NAAC compliance).</span><br>
            [<a href="https://drive.google.com/file/d/1ooZQskDGa9NDLdzE-CIZeBs-bVynoz_8/view?usp=sharing" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:13px;">Verify Experience</a>]</p>
            
        </div>
    `;
    window.openHTMLModal('Professional Experience', html);
};

window.showPublicationsModal = function() {
    const html = `
        <div style="font-family: sans-serif; line-height: 1.6; padding: 10px; max-height: 450px; overflow-y: auto;">
            
            <!-- Section 1: Patents -->
            <h4 style="color: #dc3545; margin-top: 0; margin-bottom: 12px; border-bottom: 2px solid #dc3545; padding-bottom: 4px;">💡 Published Patents & Intellectual Property</h4>
            <div style="margin-bottom: 20px; padding-left: 5px;">
                <p style="margin: 0 0 2px 0;"><strong>Smart Medical Diagnosis System Using IoT-Driven Machine Learning and Big Data Analytics</strong></p>
                <p style="margin: 0 0 14px 0; font-size: 0.88rem; color: #555;">Applied AI, IoT & Big Data Architecture | Pub. Number: 11/2024(INA)</p>
                
                <p style="margin: 0 0 2px 0;"><strong>Power Quality Analysis Using IoT</strong></p>
                <p style="margin: 0 0 5px 0; font-size: 0.88rem; color: #555;">Industrial IoT & Automated Grid Monitoring | App. Number: 202441060301 (Aug 2024)</p>
            </div>

            <!-- Section 2: Books -->
            <h4 style="color: #fd7e14; margin-top: 20px; margin-bottom: 12px; border-bottom: 2px solid #fd7e14; padding-bottom: 4px;">📚 Authored Technical Books</h4>
            <div style="margin-bottom: 20px; padding-left: 5px;">
                <p style="margin: 0 0 2px 0;"><strong>Logical Introduction to Digital Electronics</strong> — <em>BPB Publications</em></p>
                <p style="margin: 0 0 5px 0; font-size: 0.88rem; color: #555;">Accepted for publication by one of Asia's leading IT & engineering publishers (2026 release).</p>
            </div>

            <!-- Section 3: Applied Research & Technical Papers -->
            <h4 style="color: #007bff; margin-top: 20px; margin-bottom: 12px; border-bottom: 2px solid #007bff; padding-bottom: 4px;">📄 Applied Research & Peer-Reviewed Publications</h4>
            <ul style="padding-left: 20px; margin: 0;">
                <li style="margin-bottom: 14px;">
                    <strong>"Dynamic Stability Improvement of a Smart Grid Using Neural Network-Based STATCOM"</strong> — <em>Indian Journal of Science and Technology</em> 
                    <a href="https://indjst.org/articles/dynamic-stability-improvement-of-a-smart-grid-using-neural-network-based-statcom" target="_blank" style="color:#007bff; text-decoration:none; font-size:0.85rem; margin-left:5px;">[View Article]</a><br>
                    <span style="font-size: 0.85rem; color: #555;">Applied artificial neural networks for real-time smart grid stabilization and fault recovery.</span>
                </li>
                <li style="margin-bottom: 14px;">
                    <strong>Book Chapter: "Cyber Security in Smart Grids: Role of Digital Advanced Devices"</strong> — <em>IGI Global Publications (Oct 2022)</em><br>
                    <span style="font-size: 0.85rem; color: #555;">Analyzed threat vectors, digital protection architectures, and cybersecurity resilience in modern connected infrastructure.</span>
                </li>
                <li style="margin-bottom: 14px;">
                    <strong>"Application of SVC for Multi-Objective Power Flow Problem Using PSO"</strong> — <em>IJPAM (2017)</em> 
                    <a href="https://acadpubl.eu/jsi/2017-114-7-ICPCIT-2017/articles/8/3.pdf" target="_blank" style="color:#007bff; text-decoration:none; font-size:0.85rem; margin-left:5px;">[View PDF]</a><br>
                    <span style="font-size: 0.85rem; color: #555;">Implemented Multi-Objective Particle Swarm Optimization (MOPSO) in MATLAB to minimize operational cost, transmission loss, and system instability across IEEE 30-bus networks.</span>
                </li>
                <li style="margin-bottom: 14px;">
                    <strong>"Transient Stability Improvement of SMIB System Using DPFC"</strong> — <em>IJPAM (2017)</em> 
                    <a href="https://acadpubl.eu/jsi/2017-114-7-ICPCIT-2017/articles/8/27.pdf" target="_blank" style="color:#007bff; text-decoration:none; font-size:0.85rem; margin-left:5px;">[View PDF]</a><br>
                    <span style="font-size: 0.85rem; color: #555;">Designed a Mamdani Fuzzy Inference System (FIS) adaptive controller in MATLAB/Simulink to eliminate oscillatory instability under dynamic load faults.</span>
                </li>
                <li style="margin-bottom: 14px;">
                    <strong>"Simulation-Based Analysis for Fixing Optimal Stages for H-Bridge Cascaded Multi-Level Converters"</strong> — <em>IJSETR (2016)</em> 
                    <a href="https://ijsetr.com/uploads/463251IJSETR9076-240.pdf" target="_blank" style="color:#007bff; text-decoration:none; font-size:0.85rem; margin-left:5px;">[View PDF]</a><br>
                    <span style="font-size: 0.85rem; color: #555;">Modeled 3-to-23 level EV battery energy management topologies in MATLAB/Simulink, reducing Total Harmonic Distortion (THD) from 21.00% down to 2.13%.</span>
                </li>
                <li style="margin-bottom: 14px;">
                    <strong>"Fuzzy-Based Unified Control and Power Management Scheme for PV-Battery Hybrid Microgrids"</strong> — <em>IJAEMA</em> 
                    <a href="https://drive.google.com/file/d/1Bhgmof-yxlzp3ZRNAsk2lemdSm7Xe6oA/view" target="_blank" style="color:#007bff; text-decoration:none; font-size:0.85rem; margin-left:5px;">[View Document]</a><br>
                    <span style="font-size: 0.85rem; color: #555;">Engineered automated fuzzy-logic control algorithms for seamless transitions between grid-connected and islanded microgrid modes.</span>
                </li>
                <li style="margin-bottom: 6px;">
                    <strong>"A Grid-Interfaced Low-Frequency Offshore Wind Power System"</strong> — <em>IJRASET (2015)</em> 
                    <a href="https://www.ijraset.com/fileserve.php?FID=2047" target="_blank" style="color:#007bff; text-decoration:none; font-size:0.85rem; margin-left:5px;">[View PDF]</a><br>
                    <span style="font-size: 0.85rem; color: #555;">Simulated 12-pulse thyristor inverter and cycloconverter control systems in MATLAB/Simulink and PLECS for long-distance offshore wind transmission.</span>
                </li>
            </ul>

        </div>
    `;
    window.openHTMLModal('Patents, Books & Applied Research IP', html);
};
window.showDevelopmentProgramsModal = function() {
    var html = `
        <div style="font-family: sans-serif; line-height: 1.6; padding: 10px; max-height: 450px; overflow-y: auto;">
            
            <!-- Section 1: OBE -->
            <h4 style="color: #007bff; margin-top: 0; margin-bottom: 12px; border-bottom: 2px solid #007bff; padding-bottom: 4px;">🎓 Teaching Methodologies & Outcome-Based Education (OBE)</h4>
            <ul style="padding-left: 20px; margin-bottom: 20px;">
                <li style="margin-bottom: 8px;">Two-day FDP on OBE Focused Curriculum Design – IQAC, Sandip University, Nashik (8-9 Nov 2026)</li>
                <li style="margin-bottom: 8px;">OBE Workshop – VIIT by KLETU (4-6 May 2018)</li>
                <li style="margin-bottom: 8px;">National Workshop on MOOCs and E-Learning in Higher Education – Guru Angad Dev TLC of MHRD, SGTB Khalsa College, University of Delhi (18 Aug 2018)</li>
                <li style="margin-bottom: 8px;">Three-day Workshop on Counselling System and Guidance – Medhas I-Train, Hyderabad (4-6 Dec 2018)</li>
            </ul>

            <!-- Section 2: AI & IoT -->
            <h4 style="color: #28a745; margin-top: 20px; margin-bottom: 12px; border-bottom: 2px solid #28a745; padding-bottom: 4px;">💻 Electronics, AI, Data Science & Internet of Things (IoT)</h4>
            <ul style="padding-left: 20px; margin-bottom: 20px;">
                <li style="margin-bottom: 8px;">One-Week FDP on Emerging Trends and Applications of Generative AI – ISTE Approved, SVKM’s Institute of Technology, Dhule (27-31 Jan 2025)</li>
                <li style="margin-bottom: 8px;">15 Days Online FDP on Open Business Tools for AI and Business Applications – 6th Q Research (H), India (18 Aug – 3 Sep 2025)</li>
                <li style="margin-bottom: 8px;">MHRD-Sponsored INDO-US International Workshop on IoT and ML Based Microgrid & Energy Management – Dept. of EEE, Chaitanya Bharathi Institute of Technology, Hyderabad (19-23 Feb 2024)</li>
                <li style="margin-bottom: 8px;">8-Week FDP on Big Data Computing – IIT Patna through NPTEL-AICTE (Aug–Oct 2023)</li>
                <li style="margin-bottom: 8px;">42 Hours Training Program on Python for Data Science – ExcelR (16 May – 3 Jun 2022)</li>
                <li style="margin-bottom: 8px;">40 Hours Training Program on Artificial Intelligence – ExcelR under EDL Initiative (28 Mar – 25 Apr 2022)</li>
                <li style="margin-bottom: 8px;">One-Week Short-Term Training Programme on Pattern Recognition Theory and Applications – NITTTR Kolkata via ICT Mode (21-25 Mar 2022)</li>
                <li style="margin-bottom: 8px;">Online FDP on Data Sciences Applied to Industries – Directorate of Faculty Development, JNTU Kakinada (17-21 Aug 2020)</li>
                <li style="margin-bottom: 8px;">FDP on IoT – APSSDC (13-25 Jul 2020)</li>
                <li style="margin-bottom: 8px;">3-Day FDP on Machine Learning – APSSDC at VIIT (13-15 Sep 2020)</li>
                <li style="margin-bottom: 8px;">One-Week FDP on Hands-on Training on Power Electronics and Power Systems Using Advanced Analytical Tools – Andhra University College of Engineering Autonomous (5-9 Feb 2018)</li>
            </ul>

            <!-- Section 3: Power Systems -->
            <h4 style="color: #ffc107; margin-top: 20px; margin-bottom: 12px; border-bottom: 2px solid #ffc107; padding-bottom: 4px;">⚡ Power Systems, Smart Grids & Renewable Energy</h4>
            <ul style="padding-left: 20px; margin-bottom: 20px;">
                <li style="margin-bottom: 8px;">40-Hour Online FDP on Advanced Intelligence and ICT Application to Power System Protection – Sponsored by Ministry of Electronics and IT (MeitY), NIT Warangal and GVPCE(A) (18-27 Jul 2022)</li>
                <li style="margin-bottom: 8px;">Five-day Online Workshop on Integration of Renewable Energy & EV to Microgrid: Prospects and Challenges – NIT Tiruchirappalli & The Hong Kong Polytechnic University (21-25 Feb 2022)</li>
                <li style="margin-bottom: 8px;">Two-day Workshop on Integration of Renewable Energy Sources to Micro Grids – Sponsored by DST-SERB (18-19 Aug 2017)</li>
                <li style="margin-bottom: 8px;">Two-day Workshop on Smart Grids and Renewable Energy – CPRI, Bangalore (26-27 Nov 2015)</li>
                <li style="margin-bottom: 8px;">One-day Workshop on Renewable Energy Sources - As Alternatives in Power Sector – GVPCE, Visakhapatnam (11 Feb 2012)</li>
            </ul>

            <!-- Section 4: Institutional -->
            <h4 style="color: #17a2b8; margin-top: 20px; margin-bottom: 12px; border-bottom: 2px solid #17a2b8; padding-bottom: 4px;">🏫 Institutional Development, Webinars & Core FDPs</h4>
            <ul style="padding-left: 20px; margin-bottom: 0;">
                <li style="margin-bottom: 8px;">One-Week Faculty Development Program – Chameli Devi Institute of Professional Studies, Indore (6-11 Jul 2026)</li>
                <li style="margin-bottom: 8px;">One-Week Online FDP on Exploring the Significance of Indian Knowledge Systems in the Context of NEP 2020 – CBIT, Hyderabad (5-10 Feb 2024)</li>
                <li style="margin-bottom: 8px;">8-Week FDP on Ethics in Engineering Practice – IIT Kharagpur through NPTEL-AICTE (Aug–Oct 2023)</li>
                <li style="margin-bottom: 8px;">Short-Term Course on Soft Computing Using Sci-Lab – Educational Television Centre, Raghu Engineering College (21-25 Jul 2014)</li>
                <li style="margin-bottom: 8px;">TCS iON Faculty Engagement Session on Global Best Practices in Education (2 Apr 2026)</li>
                <li style="margin-bottom: 8px;">International Webinar on Impact of AI and ML in Computer – SRM TRP Engineering College (28 Mar 2022)</li>
                <li style="margin-bottom: 8px;">National Level Webinar on Art of Teaching – Dept. of EEE, GVPCE(A), Visakhapatnam (7 Jul 2020)</li>
                <li style="margin-bottom: 8px;">Webinar on Cryptography Encryption Techniques – SRM Arts and Science College (16 Jul 2020)</li>
                <li style="margin-bottom: 8px;">Webinar on NAAC News Release – Led by Shri Pralhad Joshi, Hon’ble Minister of Parliamentary Affairs, Coal and Mines (16 Jul 2020)</li>
            </ul>

        </div>
    `;
    window.openHTMLModal('Faculty Up-Skilling & FDP Records', html);
};

window.showExpertiseModal = function() {
    var html = `
        <div style="font-family: sans-serif; line-height: 1.6; padding: 10px; max-height: 450px; overflow-y: auto;">
            
            <h4 style="color: #dc3545; margin-top: 0; margin-bottom: 12px; border-bottom: 2px solid #dc3545; padding-bottom: 4px;">🎯 Areas of Interest</h4>
            <ul style="padding-left: 20px; margin-bottom: 25px;">
                <li style="margin-bottom: 6px;">Artificial Intelligence & Machine Learning</li>
                <li style="margin-bottom: 6px;">Cyber Security</li>
                <li style="margin-bottom: 6px;">Electromagnetics</li>
                <li style="margin-bottom: 6px;">Microcontrollers & Digital Logic Design</li>
                <li style="margin-bottom: 6px;">Non-Conventional Sources of Energy</li>
            </ul>
          <!-- Section 2: Courses Handled Grid -->
            <h4 style="color: #6f42c1; margin-bottom: 12px; border-bottom: 2px solid #6f42c1; padding-bottom: 4px;">📖 Courses Handled</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 8px; padding-left: 5px;">
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Artificial Intelligence Techniques</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">AI Based Web Design</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Introduction to Expert Systems</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Advanced Python Programming</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Discrete Mathematics and Logic</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Software Testing Certification</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Electro Magnetic Fields</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Microprocessors and Microcontrollers</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Digital Logic Design</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Digital Controllers</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Control Systems</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Power System Analysis</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Power System Protection</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">High Voltage Engineering</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Non-Conventional Sources of Energy</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Electrical Technology</div>
                <div style="background: #f8f9fa; padding: 8px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem; border-radius: 0 4px 4px 0;">Basic Electrical and Electronics Engineering</div>
            </div>
        </div>
    `; // Ensure there is a closing backtick here at the end of the text template string
    window.openHTMLModal('Subject Area Expertise', html);
};
      

window.showSkillsModal = function() {
    var html = `
        <div style="font-family: sans-serif; line-height: 1.6; padding: 10px;">
            
            <div style="margin-bottom: 15px; background: #eef5ff; padding: 12px; border-left: 4px solid #007bff; border-radius: 0 6px 6px 0;">
                <strong style="color: #007bff; display: block; margin-bottom: 4px; font-size: 1rem;">💻 Core Languages</strong>
                <span style="color: #333; font-size: 0.95rem;">Python (Advanced), MATLAB (Simulink Twin Engineering), JavaScript (Full-Stack Engine Stack), Core Java Basics. Cyber security Analyst</span>
            </div>

            <div style="background: #f3fbf7; padding: 12px; border-left: 4px solid #28a745; border-radius: 0 6px 6px 0;">
                <strong style="color: #28a745; display: block; margin-bottom: 4px; font-size: 1rem;">⚡ Domain Tools</strong>
                <span style="color: #333; font-size: 0.95rem;">FACTS Controllers Optimization, Smart Grid Architecture Twins, Cybersecurity Infrastructure Auditing.</span>
            </div>

        </div>
    `;
    window.openHTMLModal('Technical Skills & Toolsets', html);
};
window.showConferencesModal = function() {
    var html = `
        <div style="font-family: sans-serif; line-height: 1.6; padding: 10px; max-height: 450px; overflow-y: auto;">
            
            <h4 style="color: #007bff; margin-top: 0; margin-bottom: 20px; border-bottom: 2px solid #007bff; padding-bottom: 4px;">📋 International & National Conference Presentations</h4>
            
            <!-- Conference Card 1 -->
            <div style="margin-bottom: 20px; padding: 12px 15px; background: #f8f9fa; border-left: 4px solid #007bff; border-radius: 0 6px 6px 0;">
                <h5 style="margin: 0 0 8px 0; color: #333; font-size: 1rem; line-height: 1.4;">"System knowledge for digital twin technologies in Industry 4.0 and Industry 5.0"</h5>
                <p style="margin: 0 0 6px 0; font-size: 0.9rem; color: #555;">
                    Presented at the <strong>5th International E-Conference on Mechanical and Material Science Engineering: Innovation and Research (ICMMSE:IR)</strong>, 
                    organized by the Department of Mechanical Engineering, Sandip Institute of Technology & Research Centre, Nashik, Maharashtra.
                </p>
                <span style="font-size: 0.85rem; color: #007bff; font-weight: bold;">📅 27th – 28th February 2026</span>
            </div>

            <!-- Conference Card 2 -->
            <div style="margin-bottom: 20px; padding: 12px 15px; background: #f8f9fa; border-left: 4px solid #6c757d; border-radius: 0 6px 6px 0;">
                <h5 style="margin: 0 0 8px 0; color: #333; font-size: 1rem; line-height: 1.4;">"Cyber Security in smart grids- Role of Digital Advanced devices"</h5>
                <p style="margin: 0 0 6px 0; font-size: 0.9rem; color: #555;">
                    Presented at the <strong>Two-Day National Conference on Green and Resilient Energy Systems (GVCON-2K22)</strong>, 
                    conducted by the Electrical & Electronics Engineering Department, Gayatri Vidya Parishad College of Engineering (Autonomous), Visakhapatnam.
                </p>
                <span style="font-size: 0.85rem; color: #6c757d; font-weight: bold;">📅 21st – 22nd October 2022</span>
            </div>

            <!-- Conference Card 3 -->
            <div style="margin-bottom: 10px; padding: 12px 15px; background: #f8f9fa; border-left: 4px solid #6c757d; border-radius: 0 6px 6px 0;">
                <h5 style="margin: 0 0 8px 0; color: #333; font-size: 1rem; line-height: 1.4;">"Transient Stability Improvement of SMIB using DPFC"</h5>
                <p style="margin: 0 0 6px 0; font-size: 0.9rem; color: #555;">
                    Presented at the <strong>Two-Day National Conference on Recent Trends in Electrical and Electronics Engineering (RTEEE)</strong>, 
                    held at Vignan’s Institute of Information Technology, Visakhapatnam.
                </p>
                <span style="font-size: 0.85rem; color: #6c757d; font-weight: bold;">📅 14th – 15th April 2017</span>
            </div>

        </div>
    `;
    window.openHTMLModal('Conferences Attended Presentation Details', html);
};
window.showLanguagesModal = function() {
    var html = `
        <div style="font-family: sans-serif; line-height: 1.6; padding: 10px;">
            
            <div style="margin-bottom: 15px; background: #eef5ff; padding: 12px; border-left: 4px solid #007bff; border-radius: 0 6px 6px 0;">
                <strong style="color: #007bff; display: block; margin-bottom: 4px; font-size: 1rem;">🗣️ English</strong>
                <span style="color: #333; font-size: 0.95rem;">Professional Working Proficiency (Excellent written and verbal communication skills).</span>
            </div>

            <div style="margin-bottom: 15px; background: #f3fbf7; padding: 12px; border-left: 4px solid #28a745; border-radius: 0 6px 6px 0;">
                <strong style="color: #28a745; display: block; margin-bottom: 4px; font-size: 1rem;">🗣️ Hindi</strong>
                <span style="color: #333; font-size: 0.95rem;">Full Professional Proficiency (Verbal and written capabilities).</span>
            </div>
            <div style="margin-bottom: 15px; background: #f3fbf7; padding: 12px; border-left: 4px solid #28a745; border-radius: 0 6px 6px 0;">
                <strong style="color: #28a745; display: block; margin-bottom: 4px; font-size: 1rem;">🗣️ Marathi</strong>
                <span style="color: #333; font-size: 0.95rem;">Limited  Proficiency (Verbal and written capabilities).</span>
            </div>
            <div style="margin-bottom: 15px; background: #f3fbf7; padding: 12px; border-left: 4px solid #28a745; border-radius: 0 6px 6px 0;">
                <strong style="color: #28a745; display: block; margin-bottom: 4px; font-size: 1rem;">🗣️ PUnjabi-Gurmukhi</strong>
                <span style="color: #333; font-size: 0.95rem;">Limited Proficiency (Verbal and written capabilities).</span>
            </div>
            <div style="background: #fff9e6; padding: 12px; border-left: 4px solid #ffc107; border-radius: 0 6px 6px 0;">
                <strong style="color: #d39e00; display: block; margin-bottom: 4px; font-size: 1rem;">🗣️ Telugu</strong>
                <span style="color: #333; font-size: 0.95rem;">Native or Bilingual Proficiency (Mother tongue).</span>
            </div>

        </div>
    `;
    window.openHTMLModal('Languages Known', html);
};
// ==========================================================================
window.handleMessageSubmission = async function(event) {
    // Prevent the browser page from reloading on form submit
    event.preventDefault();
    const nameInput = document.getElementById('recruiter-name');
    const emailInput = document.getElementById('recruiter-email');
    const messageInput = document.getElementById('recruiter-msg');
    const submitBtn = event.target.querySelector('button[type="submit"]');
    if (!nameInput || !emailInput || !messageInput) return;

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const message = messageInput.value.trim();

    // Disable button to prevent double-submissions while processing
    if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerText = "Transmitting... ⏳";
    }

    try {
        // Safe asynchronous payload mapping to Cloud Firestore
        await addDoc(collection(db, "messages"), {
            name: name,
            email: email,
            message: message,
            timestamp: serverTimestamp() // Generates safe server-side timezone parameters
        });

        alert("📨 Message sent successfully! It has been securely logged in the administrator inbox stream.");
        
        // Reset the form fields safely
        event.target.reset();

        // If the user is authenticated, refresh their inbox instantly to show the message
        if (auth.currentUser) {
            window.loadRecruiterMessages();
        }

    } catch (error) {
        console.error("Database submission write crash error:", error);
        alert("Transmission Failed: " + error.message);
    } finally {
        // Re-enable submission controls cleanly
        if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerText = "Send Secure Message";
        }
    }
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
