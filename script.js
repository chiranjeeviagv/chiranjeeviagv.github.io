// 1. Corrected complete module bundle paths pointing to the exact .js files
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-auth.js";
// Added 'collection', 'addDoc', 'query', 'getDocs', 'orderBy', and 'deleteDoc'
import { getFirestore, doc, getDoc, collection, addDoc, query, getDocs, orderBy, deleteDoc } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyBnGToJaX58ErhnTPAyPZNTaYnccHvnbGU",
    authDomain: "interactive-cv-6f58a.firebaseapp.com", 
    projectId: "interactive-cv-6f58a",
    storageBucket: "interactive-cv-6f58a.firebasestorage.app",
    messagingSenderId: "904714357999",
    appId: "1:904714357999:web:a23ef727d0af3b44451f1a"
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
// ========================================================
// 3. SECURE PROFILE VISUAL CONTENT TARGETS (UPDATED WITH INBOX)
// ========================================================
const securedContactHTML = `
    <div class="bio-details" style="width: 100%; padding: 5px 0; font-family: sans-serif;">
        <h3 style="color:#007bff; margin-bottom:15px;">📞 Authenticated Personal Profile</h3>
        <ul style="list-style: none; padding: 0; line-height: 2; margin-bottom: 25px;">
            <li><strong>Email:</strong> <a href="mailto:chiranjeevi210@gmail.com" style="color:#007bff; text-decoration:none;">chiranjeevi210@gmail.com</a></li>
            <li><strong>Mobile:</strong> <a href="tel:+919949163002" style="color:#007bff; text-decoration:none;">+919949163002</a></li>
            <li><strong>Mailing Address:</strong> H No 4-243 th lane BC colony, Vepagunta, Visakhapatnam-530047, India</li>
        </ul>
        
        <h3 style="color:#28a745; margin-bottom:15px; border-top: 1px solid #eee; padding-top: 15px;">📥 Recruiter Messages Inbox</h3>
        <div id="inbox-messages-container" style="max-height: 300px; overflow-y: auto; background: #f8f9fa; padding: 10px; border-radius: 6px; border: 1px solid #ddd; margin-bottom: 20px;">
            <p style="color: #666; font-style: italic;">Loading messages stream...</p>
        </div>

        <button onclick="window.logoutUser()" class="explore-btn" style="background:#007bff; color:white; border:none; padding:8px 16px; border-radius:4px; cursor:pointer; font-weight:600;">Sign Out Account</button>
    </div>
`;

// ========================================================
// 4. AUTH STATE SUBSCRIPTION ENGINE (UPDATED TO FETCH INBOX)
// ========================================================
onAuthStateChanged(auth, async (user) => {
    const authGate = document.getElementById('auth-gate');
    const secureContact = document.getElementById('secure-contact-container');
    
    if (user) {
        if (authGate) authGate.style.display = 'none';
        if (secureContact) {
            secureContact.innerHTML = securedContactHTML;
            secureContact.style.display = 'block';
            
            // Automatically fetch your private messages upon successful login
            window.loadRecruiterMessages();
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
// 9. RECRUITER FORM PIPELINE & INBOX ENGINE
// ==========================================

// Global action to load messages into the admin dashboard pane
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
                </div>
            `;
        });
        container.innerHTML = inboxHTML;
    } catch (error) {
        console.error("Error reading mailbox:", error);
        container.innerHTML = `<p style="color: #dc3545; font-size:0.85rem; margin:0;">⚠️ Error fetching database node: Permission Denied.</p>`;
    }
};

// Global action to delete messages
window.deleteRecruiterMessage = async function(id) {
    if (confirm("Are you sure you want to permanently delete this recruiter message?")) {
        try {
            await deleteDoc(doc(db, "messages", id));
            const card = document.getElementById(`msg-card-${id}`);
            if (card) card.remove();
            
            // Show empty placeholder text if all cards are cleared out
            const container = document.getElementById('inbox-messages-container');
            if (container && container.children.length === 0) {
                container.innerHTML = `<p style="color: #666; font-style: italic; margin: 0;">No messages received yet.</p>`;
            }
        } catch (error) {
            alert("Could not remove record: " + error.message);
        }
    }
};

// Handle client messaging form inputs organically
document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.getElementById('contact-form');
    const statusDiv = document.getElementById('form-status');

    if (contactForm) {
        contactForm.addEventListener('submit', async (e) => {
            e.preventDefault();
            
            const name = document.getElementById('recruiter-name').value;
            const email = document.getElementById('recruiter-email').value;
            const message = document.getElementById('recruiter-msg').value;

            statusDiv.style.display = 'block';
            statusDiv.style.color = '#333';
            statusDiv.textContent = "Sending message securely...";

            try {
                // Safely write document payload node straight into Firestore rules block
                await addDoc(collection(db, "messages"), {
                    name: name,
                    email: email,
                    message: message,
                    timestamp: new Date() // Server rules will extract tracking benchmarks
                });

                statusDiv.style.color = '#28a745';
                statusDiv.textContent = "✓ Message sent successfully! Thank you.";
                contactForm.reset();
            } catch (error) {
                console.error("Submission blocked:", error);
                statusDiv.style.color = '#dc3545';
                statusDiv.textContent = "⚠️ Failed to transmit data packet. Try again later.";
            }
        });
    }
});


// ==========================================
// 8. STATIC INFO DISPLAY POPUPS
// ==========================================
window.showQualificationsModal = function() {
    let html = `
        <div style="font-family: sans-serif; line-height: 1.6; padding: 10px;">
            <p style='margin-bottom:10px;'><strong>M.Tech (High Voltage Engineering):</strong> JNTU Kakinada - 72.00% (Distinction)</p>
            <p style='margin-bottom:10px;'><strong>B.Tech (Electrical & Electronics):</strong> Chaitanya Engineering College - 71.63% (Distinction)</p>
            <p style='margin-bottom:10px;'><strong>Intermediate (MPC):</strong> Gayatri Junior College - 94.10%</p>
            <p style='margin-bottom:10px;'><strong>SSC:</strong> ZP High School, Jami - 89.86%</p>
        </div>
    `;
    window.openHTMLModal("Qualifications Records", html);
};

window.showAcademicStrengthsModal = function() {
    let html = `
        <ul style="font-family: sans-serif; line-height: 1.8; padding-left: 20px;">
            <li style="margin-bottom: 8px;"><strong>9+ Years Higher Education Tenure:</strong> Extensive delivery of core Electrical engineering branches.</li>
            <li style="margin-bottom: 8px;"><strong>OBE Systems Management:</strong> Advanced mapping workflows for NAAC and NBA file audits.</li>
        </ul>
    `;
    window.openHTMLModal("Academic Strengths & Traits", html);
};

window.showCertificationsModal = function() {
    let html = `
        <div style="font-family: sans-serif; line-height: 1.6; padding: 10px; max-height: 400px; overflow-y: auto;">
            <h4 style="color: #007bff; margin-bottom: 10px; border-bottom: 1px solid #ddd; padding-bottom: 5px;">Coursera Specialization Modules</h4>
            <ul style="padding-left: 20px; margin-bottom: 20px;">
                <li style="margin-bottom: 6px;">IBM Full Stack JavaScript Developer (12 Courses) - Sep 2026 <a href="#" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">Microsoft AI and ML Engineering (5 Courses) - Jul 2026 <a href="#" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">IBM AI Developer (10 Courses) - Jun 2026 <a href="#" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">IBM Java Developer (14 Courses) - Jul 2026 <a href="#" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">IBM JavaScript Backend Developer (13 Courses) - Aug 2026 <a href="#" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">Google Cyber Security Specialist Track (9 Courses) - Jul 2026 <a href="#" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
            </ul>
            
            <h4 style="color: #007bff; margin-bottom: 10px; border-bottom: 1px solid #ddd; padding-bottom: 5px;">NPTEL Certifications</h4>
            <ul style="padding-left: 20px;">
                <li style="margin-bottom: 6px;">Advanced Computer Architecture - Apr 2026 <a href="#" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">Advanced Computer Networks - Apr 2025 <a href="#" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">Practical Cyber Security for Cyber Security Practitioners - Jul-Oct 2024 <a href="#" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">Cloud Computing - Jul-Oct 2024 <a href="#" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">Big Data Computing (8-Week Course) - Oct 2023 <a href="#" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
                <li style="margin-bottom: 6px;">Ethics in Engineering Practice (8-Week Course) - Oct 2023 <span style="color:#666; font-size:0.85rem;">[Link Pending]</span></li>
                <li style="margin-bottom: 6px;">Introduction to Smart Grid (8-Week Course) - Jul-Sep 2022 <a href="#" style="color:#007bff; text-decoration:none; font-size:0.85rem;">[Verify]</a></li>
            </ul>
        </div>
    `;
    window.openHTMLModal('Advanced Certifications & Up-Skilling', html);
};

window.showExpertiseModal = function() {
    var html = `
        <div style="font-family: sans-serif; line-height: 1.6; padding: 10px; max-height: 450px; overflow-y: auto;">
            <!-- Section 1: Areas of Interest -->
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
    `;
    window.openHTMLModal('Subject Area Expertise', html);
};

window.showExperienceModal = function() {
    let html = `
        <div style="font-family: sans-serif; line-height: 1.6; padding: 10px; max-height: 450px; overflow-y: auto; text-align: left;">
            
            <p><strong>Assistant Professor – Department of Electrical Engineering (AI & ML)</strong><br>
            Sandip Institute of Technology and Research Centre (Sandip University), Nashik, Maharashtra<br>
            <em>June 2025 – May 2026</em><br>
            <span style="font-size:13px; color:#444;">• Delivered specialized courses bridging heavy electrical engineering with computational intelligence, including Artificial Intelligence Techniques and AI-Based Web Design.</span><br>
            [<a href="https://drive.google.com/file/d/1vkAjZmeYQHPg-yer47apZZG9evd2Ubp2/view?usp=sharing" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:13px;">Verify Experience</a>]</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;">
            
            <p><strong>Assistant Professor – Department of Electrical & Electronics Engineering</strong><br>
            Guru Nanak Institute of Technology (Autonomous), Ibrahimpatnam, Hyderabad<br>
            <em>February 2023 – January 2025</em><br>
            <span style="font-size:13px; color:#444;">• Taught core undergraduate engineering subjects and guided graduation project groups.<br>
            • Managed automated tools for continuous student assessments, grading workflows, and classroom operations.</span><br>
            [<a href="https://drive.google.com/file/d/1OainG_BsKrMrFH7mFoFg_pD14hV00Q5Z/view?usp=drive_link" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:13px;">Verify Experience</a>]</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;">
            
            <p><strong>Assistant Professor – Department of Electrical & Electronics Engineering</strong><br>
            Malla Reddy Engineering College for Women (Autonomous), Secunderabad<br>
            <em>July 2022 – February 2023</em><br>
            <span style="font-size:13px; color:#444;">• Led academic instruction, micro-mentoring programs, and structured laboratory assessments.<br>
            • Contributed actively to internal department committees preparing for structural university audits.</span><br>
            [<a href="https://drive.google.com/file/d/1pu58nrED6xGO_hKPntDO-8npcOayLDhY/view?usp=sharing" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:13px;">Verify Experience</a>]</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;">
            
            <p><strong>Senior Assistant Professor – Department of Electrical & Electronics Engineering</strong><br>
            Aditya College of Engineering, Surampalem, Andhra Pradesh<br>
            <em>November 2019 – July 2021</em><br>
            <span style="font-size:13px; color:#444;">• Provided senior-level instructional delivery for advanced PG and UG courses.<br>
            • Structured curriculum changes to better incorporate simulation tools like MATLAB within lab protocols.</span><br>
            [<a href="https://drive.google.com/file/d/1kQQ39YCL-o0eyFySFIgzR0qddAOVe5Ch/view?usp=sharing" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:13px;">Verify Experience</a>]</p>
            <hr style="border: 0; border-top: 1px solid #eee; margin: 15px 0;">
            
            <p><strong>Assistant Professor – Department of EEE</strong><br>
            Vignan’s Institute of Information Technology (Autonomous), Visakhapatnam, Andhra Pradesh<br>
            <em>March 2015 – November 2019</em><br>
            <span style="font-size:13px; color:#444;">• Administered core academic workloads alongside critical operational responsibilities, serving as the NBA coordinator and department Time-Table planner.<br>
            • Spearheaded institutional accreditation data compilation (NBA & NAAC files).</span><br>
            [<a href="https://drive.google.com/file/d/1ooZQskDGa9NDLdzE-CIZeBs-bVynoz_8/view?usp=sharing" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:13px;">Verify Experience</a>]</p>
            
        </div>
    `;
    window.openHTMLModal('Professional Experience', html);
};

window.showPublicationsModal = function() {
    var html = `
        <div style="font-family: sans-serif; line-height: 1.6; padding: 10px; max-height: 450px; overflow-y: auto;">
            
            <!-- Section 1: Patents -->
            <h4 style="color: #dc3545; margin-top: 0; margin-bottom: 12px; border-bottom: 2px solid #dc3545; padding-bottom: 4px;">🔒 Published Patents</h4>
            <div style="margin-bottom: 20px; padding-left: 5px;">
                <p style="margin: 0 0 4px 0;"><strong>Smart Medical Diagnosis System Using IoT-Driven Machine Learning and Big Data Analytics</strong></p>
                <p style="margin: 0 0 15px 0; font-size: 0.88rem; color: #666;">Field: Bio-Medical Engineering | Pub. Number: 11/2024(INA)</p>
                
                <p style="margin: 0 0 4px 0;"><strong>Power Quality Analysis Using IoT</strong></p>
                <p style="margin: 0 0 5px 0; font-size: 0.88rem; color: #666;">Field: Power Systems / Automation | App. Number: 202441060301 | Aug 2024</p>
            </div>

            <!-- Section 2: Books -->
            <h4 style="color: #fd7e14; margin-top: 20px; margin-bottom: 12px; border-bottom: 2px solid #fd7e14; padding-bottom: 4px;">📚 Forthcoming Books</h4>
            <div style="margin-bottom: 20px; padding-left: 5px;">
                <p style="margin: 0 0 4px 0;"><strong>Logical Introduction to Digital Electronics</strong></p>
                <p style="margin: 0 0 5px 0; font-size: 0.9rem; color: #555; font-style: italic;">Accepted for publication by BPB Publications (Final editing phases for 2026 launch).</p>
            </div>

            <!-- Section 3: Journals & Chapters -->
            <h4 style="color: #007bff; margin-top: 20px; margin-bottom: 12px; border-bottom: 2px solid #007bff; padding-bottom: 4px;">📄 Peer-Reviewed Book Chapters & Journal Papers</h4>
            <ul style="padding-left: 20px; margin: 0;">
                <li style="margin-bottom: 12px;">
                    "Dynamic stability improvement of a smart grid using neural network based STATCOM" - <em>Indian Journal of Science and Technology</em> 
                    <a href="#" style="color:#007bff; text-decoration:none; font-size:0.85rem; margin-left:5px;">[View Article]</a>
                </li>
                <li style="margin-bottom: 12px;">
                    "Transient Stability Improvement of SMIB using DPFC" - <em>IJPAM (2017)</em> 
                    <a href="#" style="color:#007bff; text-decoration:none; font-size:0.85rem; margin-left:5px;">[View PDF]</a>
                </li>
                <li style="margin-bottom: 12px;">
                    "Application of SVC for Multi Objective Power problem with PSO" - <em>IJPAM (2017)</em> 
                    <a href="#" style="color:#007bff; text-decoration:none; font-size:0.85rem; margin-left:5px;">[View PDF]</a>
                </li>
                <li style="margin-bottom: 12px;">
                    "A grid interfaced low frequency wind power" - <em>IJRASET (2015)</em> 
                    <a href="#" style="color:#007bff; text-decoration:none; font-size:0.85rem; margin-left:5px;">[View PDF]</a>
                </li>
                <li style="margin-bottom: 12px;">
                    "Fuzzy based Unified Control and Power Management Scheme for PV Battery based Hybrid Micro Grids for both Grid Connected and Islanded Modes" - <em>IJAEMA</em> 
                    <a href="#" style="color:#007bff; text-decoration:none; font-size:0.85rem; margin-left:5px;">[View Document]</a>
                </li>
                <li style="margin-bottom: 12px;">
                    "Simulation based Analysis for fixing Optimal stages for a H-Bridge cascaded Multi Level Converters" - <em>IJSETR (2016)</em> 
                    <a href="#" style="color:#007bff; text-decoration:none; font-size:0.85rem; margin-left:5px;">[View PDF]</a>
                </li>
                <li style="margin-bottom: 6px;">
                    Book Chapter: "Cyber security in smart Grids: Role of Digital Advanced Devices" - <em>Cyber security-Issues, Challenges–Solutions-Business, IGI Global Publications (Oct 2022)</em> 
                    <a href="#" style="color:#007bff; text-decoration:none; font-size:0.85rem; margin-left:5px;">[CrossRef DOI]</a>
                </li>
            </ul>

        </div>
    `;
    window.openHTMLModal('Research Publications & Intellectual Property', html);
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

            <h4 style="color: #6f42c1; margin-bottom: 12px; border-bottom: 2px solid #6f42c1; padding-bottom: 4px;">📖 Courses Handled</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 8px; padding-left: 5px;">
                <div style="background: #f8f9fa; padding: 6px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem;">Artificial Intelligence Techniques</div>
                <div style="background: #f8f9fa; padding: 6px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem;">AI Based Web Design</div>
                <div style="background: #f8f9fa; padding: 6px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem;">Introduction to Expert Systems</div>
                <div style="background: #f8f9fa; padding: 6px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem;">Advanced Python Programming</div>
                <div style="background: #f8f9fa; padding: 6px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem;">Discrete Mathematics and Logic</div>
                <div style="background: #f8f9fa; padding: 6px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem;">Software Testing Certification</div>
                <div style="background: #f8f9fa; padding: 6px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem;">Electro Magnetic Fields</div>
                <div style="background: #f8f9fa; padding: 6px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem;">Microprocessors and Microcontrollers</div>
                <div style="background: #f8f9fa; padding: 6px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem;">Digital Logic Design</div>
                <div style="background: #f8f9fa; padding: 6px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem;">Digital Controllers</div>
                <div style="background: #f8f9fa; padding: 6px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem;">Control Systems</div>
                <div style="background: #f8f9fa; padding: 6px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem;">Power System Analysis</div>
                <div style="background: #f8f9fa; padding: 6px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem;">Power System Protection</div>
                <div style="background: #f8f9fa; padding: 6px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem;">High Voltage Engineering</div>
                <div style="background: #f8f9fa; padding: 6px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem;">Non-Conventional Sources of Energy</div>
                <div style="background: #f8f9fa; padding: 6px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem;">Electrical Technology</div>Basic Electrical & Electronics;
               <div style="background: #f8f9fa; padding: 6px 10px; border-left: 3px solid #6f42c1; font-size: 0.9rem;">Basic Electrical and Electronics Engineering</div>
            </div>
        </div>
    `; // This closes the multi-line text template string
    window.openHTMLModal('Subject Area Expertise', html);
}; // This closes the window.showExpertiseModal function block safely

window.showExpertiseModal = function() {
    var html = `
        <div style="font-family: sans-serif; line-height: 1.6; padding: 10px; max-height: 450px; overflow-y: auto;">
            <!-- Section 1: Areas of Interest -->
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
                <span style="color: #333; font-size: 0.95rem;">Python (Advanced), MATLAB (Simulink Twin Engineering), JavaScript (Full-Stack Engine Stack), Core Java Basics.</span>
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
