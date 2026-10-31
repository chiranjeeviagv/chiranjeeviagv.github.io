// ==========================================
// 1. DATA AND OBJECTIVE TEMPLATE STORAGE
// ==========================================
const objectives = {
    academic: "Seeking a challenging position in an academic institution to leverage research, teaching methodology, and institutional development expertise.",
    industry: "An Electrical Engineer and Software professional, forever a student, dreaming for a career in a nice environment which is technically and ethically developed."
};

// ==========================================
// 2. CENTRAL MATRIX SWITCHING ENGINE
// ==========================================
function switchView(viewMode) {
    var academicElements = document.querySelectorAll('.academic-only');
    var industryElements = document.querySelectorAll('.industry-only');
    var objText = document.getElementById('objective-text');
    var btnAcademic = document.getElementById('btn-academic');
    var btnIndustry = document.getElementById('btn-industry');

    if (viewMode === 'academic') {
        academicElements.forEach(function(el) { el.style.display = 'block'; });
        industryElements.forEach(function(el) { el.style.display = 'none'; });
        if (objText) objText.textContent = objectives.academic;
        if (btnAcademic) btnAcademic.className = 'toggle-btn active';
        if (btnIndustry) btnIndustry.className = 'toggle-btn';
    } else {
        academicElements.forEach(function(el) { el.style.display = 'none'; });
        industryElements.forEach(function(el) { el.style.display = 'block'; });
        if (objText) objText.textContent = objectives.industry;
        if (btnIndustry) btnIndustry.className = 'toggle-btn active';
        if (btnAcademic) btnAcademic.className = 'toggle-btn';
    }
}

// ==========================================
// 3. SECURE DOM EVENT BINDING LAYER
// ==========================================
document.addEventListener('DOMContentLoaded', function() {
    var btnAcademic = document.getElementById('btn-academic');
    var btnIndustry = document.getElementById('btn-industry');
    var closeBtn = document.getElementById('close-modal-btn');

    if (btnAcademic) btnAcademic.onclick = function() { switchView('academic'); };
    if (btnIndustry) btnIndustry.onclick = function() { switchView('industry'); };
    if (closeBtn) closeBtn.onclick = closeModal;

    // Direct binding matrix loop for action selectors
    var allExploreBtns = document.querySelectorAll('.explore-btn');
    allExploreBtns.forEach(function(button) {
        button.onclick = function(e) {
            var targetSection = e.target.getAttribute('data-section');
            if (targetSection) {
                handleExploreClick(targetSection);
            }
        };
    });

    // Default initialization
    switchView('academic');
});

// ==========================================
// 4. ROUTER SWITCH ROUTINE
// ==========================================
function handleExploreClick(sectionKey) {
    if (sectionKey === 'qualifications') showQualificationsModal();
    else if (sectionKey === 'certifications') showCertificationsModal();
    else if (sectionKey === 'experience') showExperienceModal();
    else if (sectionKey === 'publications') showPublicationsModal();
    else if (sectionKey === 'fdps') showDevelopmentProgramsModal();
    else if (sectionKey === 'references') showReferencesModal();
    else if (sectionKey === 'expertise') showExpertiseModal();
    else if (sectionKey === 'skills') showSkillsModal();
    else if (sectionKey === 'conferences') showConferencesModal();
}

// ==========================================
// 5. WINDOW FRAME DYNAMICS
// ==========================================
function openHTMLModal(title, htmlContent) {
    var modal = document.getElementById('details-modal');
    var modalTitle = document.getElementById('modal-title');
    var modalBody = document.getElementById('modal-body');
    
    if (modal && modalTitle && modalBody) {
        modalTitle.innerText = title;
        modalBody.innerHTML = htmlContent;
        modal.style.display = 'block';
        modal.classList.remove('hidden-view');
        document.body.style.overflow = 'hidden'; 
    }
}

function closeModal() {
    var modal = document.getElementById('details-modal');
    var modalBody = document.getElementById('modal-body');
    if (modal) {
        modal.style.display = 'none';
        modal.classList.add('hidden-view');
        if (modalBody) modalBody.innerHTML = '';
        document.body.style.overflow = '';
    }
}
// Assuming a variable or function tracks the active view state ('academic' or 'industry')
function showReferencesModal(currentView) {
    var html = '<div style="padding:10px; text-align:left; max-height:450px; overflow-y:auto;">';
    
    if (currentView === 'academic') {
        html += '<h4>🎓 Academic & Research References</h4>' +
            '<ul>' +
            '<li><strong>Mr. K Srikanth</strong> (Associate Professor)<br>GVP College of Engineering, Visakhapatnam<br>Cell: +91 9440897892</li><hr style="border-top: 1px solid #eee;">' +
            '<li><strong>Dr. Dipak D Bhage</strong> (Professor)<br>PCU, Pune<br>Cell: +91 7083780216</li><hr style="border-top: 1px solid #eee;">' +
            '<li><strong>Dr. S Suryaprakasa Rao</strong> (Retired Professor & HoD of ENT)<br>AMC / Gayatri Medical College<br>Cell: +91 8688381481</li><hr style="border-top: 1px solid #eee;">' +
            '<li><strong>Professor G Sridevi</strong><br>Aditya University, East Godavari<br>Cell: +91 9848141867</li>' +
            '</ul>';
    } else {
        html += '<h4>💼 Industry & Corporate References</h4>' +
            '<ul>' +
            '<li><strong>Yasmin Jal Mistry</strong> (Director)<br>Durand Forms Pvt. Limited<br>Cell: +91 9167231673</li><hr style="border-top: 1px solid #eee;">' +
            '<li><strong>Mrs. Sangita K Chowdary</strong><br>SITRC, Nashik<br>Cell: +91 9730199702</li><hr style="border-top: 1px solid #eee;">' +
            '<li><strong>Mr. K Prasad</strong><br>Government Polytechnic, Vizianagaram<br>Cell: +91 9912340292</li>' +
            '</ul>' +
            
            '<h4>🏠 Personal & Character References</h4>' +
            '<ul>' +
            '<li><strong>Mrs. V Mounika</strong> (Former Principal)<br>Vivekananda Degree College (Family Friend)<br>Cell: +91 9866102045</li><hr style="border-top: 1px solid #eee;">' +
            '<li><strong>Md. Faheen Ul Haq</strong><br>Hyderabad (Family Friend)<br>Cell: +91 9849022155</li><hr style="border-top: 1px solid #eee;">' +
            '<li><strong>Gulbarg Singh Bassi</strong> (Retired Teacher)<br>GSC<br>Cell: +1 6787941794</li>' +
            '</ul>';
    }
    
    html += '</div>';
    openHTMLModal('Verified Professional References', html);
}

// ==========================================
// 6. SAFE SIMPLIFIED MODAL CONTENT BLOCKS
// ==========================================
function showQualificationsModal() {
  var html = '<div style="padding: 10px; text-align: left;">' +
             '<p><strong>M.Tech (High Voltage Engineering):</strong> JNTU Kakinada - 72.00% (Distinction) ' +
             '[<a href="https://drive.google.com/file/d/1kZD7vgJqHsifE2tw9LUEyVgCb6adR8HM/view?usp=sharing" target="_blank" style="color: #0066cc; text-decoration: underline;">Verify Credential</a>]</p>' +
             
             '<p><strong>B.Tech (Electrical & Electronics):</strong> Chaitanya Engineering College - 71.63% (Distinction) ' +
             '[<a href="https://drive.google.com/file/d/1SMhWIF0aFxWplG4e83fom6THEuU4RtgS/view?usp=sharing" target="_blank" style="color: #0066cc; text-decoration: underline;">Verify Credential</a>]</p>' +
             
             '<p><strong>Intermediate (MPC):</strong> Gayatri Junior College - 94.10% ' +
             '[<a href="https://drive.google.com/file/d/1EF5XlMU8kwqbM_g7lFCqYSwNuwtHFklk/view?usp=sharing" target="_blank" style="color: #0066cc; text-decoration: underline;">Verify Credential</a>]</p>' +
             
             '<p><strong>SSC Certification:</strong> ZP High School, Jami - 89.86% ' +
             '[<a href="https://drive.google.com/file/d/12HNfZv_ltMW8Lw_KnB7q5gLGwAwHcxQU/view?usp=sharing" target="_blank" style="color: #0066cc; text-decoration: underline;">Verify Credential</a>]</p>' +
             '</div>';

  openHTMLModal("Qualifications Records", html);
}

function showCertificationsModal() {
    var html = '<div style="padding:10px; text-align:left;">' +
        '<h4>Coursera Specialization Modules:</h4>' +
        '<ul>' +
        '<li>IBM Full Stack JavaScript Developer (12 Courses) - Sep 2026 ' +
        '[<a href="https://www.coursera.org/account/accomplishments/specialization/L2Q2VEP5W243" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        
        '<li>Microsoft AI and ML Engineering (5 Courses) - Jul 2026 ' +
        '[<a href="https://www.coursera.org/account/accomplishments/specialization/certificate/5SGHZ101WA4W" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        
        '<li>IBM AI Developer (10 Courses) - Jun 2026 ' +
        '[<a href="https://coursera.org/verify/professional-cert/E06UAT9KFM8S" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        
        '<li>IBM Java Developer (14 Courses) - Jul 2026 ' +
        '[<a href="https://coursera.org/verify/professional-cert/CGMXJ0SN33A5" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        
        '<li>IBM JavaScript Backend Developer (13 Courses) - Aug 2026 ' +
        '[<a href="https://www.coursera.org/account/accomplishments/specialization/certificate/R9G3UO4SYXJM" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        
        '<li>Google Cyber Security Specialist Track (9 Courses) - Jul 2026 ' +
        '[<a href="https://coursera.org/verify/professional-cert/SZEO3FT6Q193" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        '</ul>' +
        
        '<h4>NPTEL Certifications:</h4>' +
        '<ul>' +
        '<li>Advanced Computer Architecture - Apr 2026 ' +
        '[<a href="https://drive.google.com/file/d/1yQeZ1-coDoRCZBwwtXYv7aXvsFdXdBTV/view?usp=sharing" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        
        '<li>Advanced Computer Networks - Apr 2025 ' +
        '[<a href="https://drive.google.com/file/d/1yQeZ1-coDoRCZBwwtXYv7aXvsFdXdBTV/view?usp=sharing" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        
        '<li>Practical Cyber Security for Cyber Security Practitioners - Jul-Oct 2024 ' +
        '[<a href="https://drive.google.com/file/d/1CyKiCImdnXHfHaCmLDpV2pUHx6PvOmti/view" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        
        '<li>Cloud Computing - Jul-Oct 2024 ' +
        '[<a href="https://drive.google.com/file/d/13fxey0JvaQSHKq4JAOxsczLCXCl887uz/view" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        
        '<li>Big Data Computing (8-Week Course) - Oct 2023 ' +
        '[<a href="https://drive.google.com/file/d/1DtA5WR6waMt2C8tUpDK-2K55aZx_pkRn/view" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        
        '<li>Ethics in Engineering Practice (8-Week Course) - Oct 2023 ' +
        '[<a href="#" target="_blank" style="color:#999; text-decoration:line-through; pointer-events:none;">Link Pending</a>]</li>' +
        
        '<li>Introduction to Smart Grid (8-Week Course) - Jul-Sep 2022 ' +
        '[<a href="https://drive.google.com/file/d/1wpngaRqihuwbp1HmI5J0b-qxdqqXhNny/view" target="_blank" style="color:#0066cc; text-decoration:underline;">Verify</a>]</li>' +
        '</ul>' +
        '</div>';
    openHTMLModal('Advanced Certifications & Up-Skilling', html);
}
function showExperienceModal() {
    var html = '<div style="padding:10px; text-align:left;">' +
        '<p><strong>Assistant Professor – Department of Electrical Engineering (AI & ML)</strong><br>' +
        'Sandip Institute of Technology and Research Centre (Sandip University), Nashik, Maharashtra<br>' +
        '<em>June 2025 – May 2026</em><br>' +
        '<span style="font-size:13px; color:#444;">• Delivered specialized courses bridging heavy electrical engineering with computational intelligence, including Artificial Intelligence Techniques and AI-Based Web Design.</span><br>' +
        '[<a href="https://drive.google.com/file/d/1vkAjZmeYQHPg-yer47apZZG9evd2Ubp2/view?usp=sharing" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:13px;">Verify Experience</a>]</p><hr>' +
        
        '<p><strong>Assistant Professor – Department of Electrical & Electronics Engineering</strong><br>' +
        'Guru Nanak Institute of Technology (Autonomous), Ibrahimpatnam, Hyderabad<br>' +
        '<em>February 2023 – January 2025</em><br>' +
        '<span style="font-size:13px; color:#444;">• Taught core undergraduate engineering subjects and guided graduation project groups.<br>' +
        '• Managed automated tools for continuous student assessments, grading workflows, and classroom operations.</span><br>' +
        '[<a href="https://drive.google.com/file/d/1OainG_BsKrMrFH7mFoFg_pD14hV00Q5Z/view?usp=drive_link" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:13px;">Verify Experience</a>]</p><hr>' +
        
        '<p><strong>Assistant Professor – Department of Electrical & Electronics Engineering</strong><br>' +
        'Malla Reddy Engineering College for Women (Autonomous), Secunderabad<br>' +
        '<em>July 2022 – February 2023</em><br>' +
        '<span style="font-size:13px; color:#444;">• Led academic instruction, micro-mentoring programs, and structured laboratory assessments.<br>' +
        '• Contributed actively to internal department committees preparing for structural university audits.</span><br>' +
        '[<a href="https://drive.google.com/file/d/1pu58nrED6xGO_hKPntDO-8npcOayLDhY/view?usp=sharing" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:13px;">Verify Experience</a>]</p><hr>' +
        
        '<p><strong>Senior Assistant Professor – Department of Electrical & Electronics Engineering</strong><br>' +
        'Aditya College of Engineering, Surampalem, Andhra Pradesh<br>' +
        '<em>November 2019 – July 2021</em><br>' +
        '<span style="font-size:13px; color:#444;">• Provided senior-level instructional delivery for advanced PG and UG courses.<br>' +
        '• Structured curriculum changes to better incorporate simulation tools like MATLAB within lab protocols.</span><br>' +
        '[<a href="https://drive.google.com/file/d/1kQQ39YCL-o0eyFySFIgzR0qddAOVe5Ch/view?usp=sharing" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:13px;">Verify Experience</a>]</p><hr>' +
        
        '<p><strong>Assistant Professor – Department of EEE</strong><br>' +
        'Vignan’s Institute of Information Technology (Autonomous), Visakhapatnam, Andhra Pradesh<br>' +
        '<em>March 2015 – November 2019</em><br>' +
        '<span style="font-size:13px; color:#444;">• Administered core academic workloads alongside critical operational responsibilities, serving as the NBA coordinator and department Time-Table planner.<br>' +
        '• Spearheaded institutional accreditation data compilation (NBA & NAAC files).</span><br>' +
        '[<a href="https://drive.google.com/file/d/1ooZQskDGa9NDLdzE-CIZeBs-bVynoz_8/view?usp=sharing" target="_blank" style="color:#0066cc; text-decoration:underline; font-size:13px;">Verify Experience</a>]</p>' +
        '</div>';
    openHTMLModal('Professional Experience', html);
}


function showPublicationsModal() {
    var html = '<div style="padding:10px; text-align:left; max-height:450px; overflow-y:auto;">' +
        '<h4>🔒 Published Patents</h4>' +
        '<ol>' +
        '<li><strong>Smart Medical Diagnosis System Using IoT-Driven Machine Learning and Big Data Analytics</strong><br>' +
        'Field: Bio-Medical Engineering | Pub. Number: 11/2024(INA)</li>' +
        '<li><strong>Power Quality Analysis Using IoT</strong><br>' +
        'Field: Power Systems / Automation | App. Number: 202441060301 | Aug 2024</li>' +
        '</ol>' +

        '<h4>📚 Forthcoming Books</h4>' +
        '<ul>' +
        '<li><strong>Logical Introduction to Digital Electronics</strong><br>' +
        'Accepted for publication by <em>BPB Publications</em> (Final editing phases for 2026 launch).</li>' +
        '</ul>' +

        '<h4>📄 Peer-Reviewed Book Chapters & Journal Papers</h4>' +
        '<ol>' +
        '<li>"Dynamic stability improvement of a smart grid using neural network based STATCOM" - <em>Indian Journal of Science and Technology</em> ' +
        '[<a href="https://indjst.org/articles/dynamic-stability-improvement-of-a-smart-grid-using-neural-network-based-statcom" target="_blank" style="color:#0066cc; text-decoration:underline;">View Article</a>]</li>' +
        
        '<li>"Transient Stability Improvement of SMIB using DPFC" - <em>IJPAM (2017)</em> ' +
        '[<a href="https://acadpubl.eu/jsi/2017-114-7-ICPCIT-2017/articles/8/27.pdf" target="_blank" style="color:#0066cc; text-decoration:underline;">View PDF</a>]</li>' +
        
        '<li>"Application of SVC for Multi Objective Power problem with PSO" - <em>IJPAM (2017)</em> ' +
        '[<a href="https://acadpubl.eu/jsi/2017-114-7-ICPCIT-2017/articles/8/3.pdf" target="_blank" style="color:#0066cc; text-decoration:underline;">View PDF</a>]</li>' +
        
        '<li>"A grid interfaced low frequency wind power" - <em>IJRASET (2015)</em> ' +
        '[<a href="https://www.ijraset.com/fileserve.php?FID=2047" target="_blank" style="color:#0066cc; text-decoration:underline;">View PDF</a>]</li>' +
        
        '<li>"Fuzzy based Unified Control and Power Management Scheme for PV Battery based Hybrid Micro Grids for both Grid Connected and Islanded Modes" - <em>IJAEMA</em> ' +
        '[<a href="https://drive.google.com/file/d/1Bhgmof-yxlzp3ZRNAsk2lemdSm7Xe6oA/view" target="_blank" style="color:#0066cc; text-decoration:underline;">View Document</a>]</li>' +
        
        '<li>"Simulation based Analysis for fixing Optimal stages for a H-Bridge cascaded Multi Level Converters" - <em>IJSETR (2016)</em> ' +
        '[<a href="https://ijsetr.com/uploads/463251IJSETR9076-240.pdf" target="_blank" style="color:#0066cc; text-decoration:underline;">View PDF</a>]</li>' +
        
        '<li><strong>Book Chapter:</strong> "Cyber security in smart Grids: Role of Digital Advanced Devices" - <em>Cyber security-Issues, Challenges–Solutions-Business, IGI Global Publications (Oct 2022)</em> ' +
        '[<a href="https://doi.org/10.4018/978-1-6684-5827-3.ch002" target="_blank" style="color:#0066cc; text-decoration:underline;">CrossRef DOI</a>]</li>' +
        '</ol>' +
        '</div>';
    openHTMLModal('Research Publications & Intellectual Property', html);
}

function showDevelopmentProgramsModal() {
    var html = '<div style="padding:10px; text-align:left; max-height:500px; overflow-y:auto;">' +
        '<h4>🎓 Teaching Methodologies & Outcome-Based Education (OBE)</h4>' +
        '<ul>' +
        '<li>Two-day FDP on OBE Focused Curriculum Design – IQAC, Sandip University, Nashik (8-9 Nov 2026)</li>' +
        '<li>OBE Workshop – VIIT by KLETU (4-6 May 2018)</li>' +
        '<li>National Workshop on MOOCs and E-Learning in Higher Education – Guru Angad Dev TLC of MHRD, SGTB Khalsa College, University of Delhi (18 Aug 2018)</li>' +
        '<li>Three-day Workshop on Counselling System and Guidance – Medhas I-Train, Hyderabad (4-6 Dec 2018)</li>' +
        '</ul>' +

        '<h4>💻 Electronics, AI, Data Science & Internet of Things (IoT)</h4>' +
        '<ul>' +
        '<li>One-Week FDP on Emerging Trends and Applications of Generative AI – ISTE Approved, SVKM’s Institute of Technology, Dhule (27-31 Jan 2025)</li>' +
        '<li>15 Days Online FDP on Open Business Tools for AI and Business Applications – 6th Q Research (H), India (18 Aug – 3 Sep 2025)</li>' +
        '<li>MHRD-Sponsored INDO-US International Workshop on IoT and ML Based Microgrid & Energy Management – Dept. of EEE, Chaitanya Bharathi Institute of Technology, Hyderabad (19-23 Feb 2024)</li>' +
        '<li>8-Week FDP on Big Data Computing – IIT Patna through NPTEL-AICTE (Aug–Oct 2023)</li>' +
        '<li>42 Hours Training Program on Python for Data Science – ExcelR (16 May – 3 Jun 2022)</li>' +
        '<li>40 Hours Training Program on Artificial Intelligence – ExcelR under EDL Initiative (28 Mar – 25 Apr 2022)</li>' +
        '<li>One-Week Short-Term Training Programme on Pattern Recognition Theory and Applications – NITTTR Kolkata via ICT Mode (21-25 Mar 2022)</li>' +
        '<li>Online FDP on Data Sciences Applied to Industries – Directorate of Faculty Development, JNTU Kakinada (17-21 Aug 2020)</li>' +
        '<li>FDP on IoT – APSSDC (13-25 Jul 2020)</li>' +
        '<li>3-Day FDP on Machine Learning – APSSDC at VIIT (13-15 Sep 2020)</li>' +
        '<li>One-Week FDP on Hands-on Training on Power Electronics and Power Systems Using Advanced Analytical Tools – Andhra University College of Engineering Autonomous (5-9 Feb 2018)</li>' +
        '</ul>' +

        '<h4>⚡ Power Systems, Smart Grids & Renewable Energy</h4>' +
        '<ul>' +
        '<li>40-Hour Online FDP on Advanced Intelligence and ICT Application to Power System Protection – Sponsored by Ministry of Electronics and IT (MeitY), organized by E&ICT Academy, NIT Warangal and GVPCE(A), Visakhapatnam (18-27 Jul 2022)</li>' +
        '<li>Five-day Online Workshop on Integration of Renewable Energy & EV to Microgrid: Prospects and Challenges – Under SPARC, Dept. of EEE, NIT Tiruchirappalli & The Hong Kong Polytechnic University (21-25 Feb 2022)</li>' +
        '<li>Two-day Workshop on Integration of Renewable Energy Sources to Micro Grids – Sponsored by DST-SERB (18-19 Aug 2017)</li>' +
        '<li>Two-day Workshop on Smart Grids and Renewable Energy – CPRI, Bangalore (26-27 Nov 2015)</li>' +
        '<li>One-day Workshop on Renewable Energy Sources - As Alternatives in Power Sector – Gayatri Vidya Parishad College of Engineering, Visakhapatnam (11 Feb 2012)</li>' +
        '</ul>' +

        '<h4>🏫 Institutional Development, Webinars & Core FDPs</h4>' +
        '<ul>' +
        '<li>One-Week Faculty Development Program – Chameli Devi Institute of Professional Studies, Indore (6-11 Jul 2026)</li>' +
        '<li>One-Week Online FDP on Exploring the Significance of Indian Knowledge Systems in the Context of NEP 2020 – Chaitanya Bharathi Institute of Technology, Hyderabad (5-10 Feb 2024)</li>' +
        '<li>8-Week FDP on Ethics in Engineering Practice – IIT Kharagpur through NPTEL-AICTE (Aug–Oct 2023)</li>' +
        '<li>Short-Term Course on Soft Computing Using Sci-Lab – Educational Television Centre, Raghu Engineering College, Visakhapatnam (21-25 Jul 2014)</li>' +
        '<li>TCS iON Faculty Engagement Session on Global Best Practices in Education (2 Apr 2026)</li>' +
        '<li>International Webinar on Impact of AI and ML in Computer – SRM TRP Engineering college (28 Mar 2022)</li>' +
        '<li>National Level Webinar on Art of Teaching – Dept. of EEE, Gayatri Vidya Parishad College of Engineering(A), Visakhapatnam (7 Jul 2020)</li>' +
        '<li>Webinar on Cryptography Encryption Techniques – Dept. of Computer Science and Applications, SRM Arts and Science College (16 Jul 2020)</li>' +
        '<li>Webinar on NAAC News Release – Led by Shri Pralhad Joshi, Hon’ble Minister of Parliamentary Affairs, Coal and Mines (16 Jul 2020)</li>' +
        '</ul>' +
        '</div>';
    openHTMLModal('Faculty Up-Skilling & FDP Records', html);
}


function showReferencesModal() {
    var html = '<div style="padding:10px; text-align:left; max-height:450px; overflow-y:auto;">' +
        '<h4>Academic & Professional References:</h4>' +
        '<ul>' +
        '<li><strong>Mr. K Prasad</strong><br>Government Polytechnic, Vizianagaram<br>Cell: +91 9912340292</li><hr style="border-top: 1px solid #eee;">' +
        
        '<li><strong>Mrs. Sangita K Chowdary</strong><br>SITRC, Nashik<br>Cell: +91 9730199702</li><hr style="border-top: 1px solid #eee;">' +
        
        '<li><strong>Mr. K Srikanth</strong> (Associate Professor)<br>GVP College of Engineering, Visakhapatnam<br>Cell: +91 9440897892</li><hr style="border-top: 1px solid #eee;">' +
        
        '<li><strong>Dr. Dipak D Bhage</strong> (Professor)<br>PCU, Pune<br>Cell: +91 7083780216</li><hr style="border-top: 1px solid #eee;">' +
        
        '<li><strong>Dr. S Suryaprakasa Rao</strong> (Retired Professor & HoD of ENT)<br>AMC / Gayatri Medical College (GVPIHC&MT)<br>Cell: +91 8688381481</li><hr style="border-top: 1px solid #eee;">' +
        
        '<li><strong>Professor G Sridevi</strong><br>Aditya University, East Godavari<br>Cell: +91 9848141867</li><hr style="border-top: 1px solid #eee;">' +
        
        '<li><strong>Yasmin Jal Mistry</strong> (Director)<br>Durand Forms Pvt. Limited<br>Cell: +91 9167231673</li>' +
        '</ul>' +

        '<h4>Personal & Family References:</h4>' +
        '<ul>' +
        '<li><strong>Mrs. V Mounika</strong> (Former Principal)<br>Vivekananda Degree College, Hyderabad (Family Friend)<br>Cell: +91 9866102045</li><hr style="border-top: 1px solid #eee;">' +
        
        '<li><strong>Md. Faheen Ul Haq</strong><br>Hyderabad (Family Friend)<br>Cell: +91 9849022155</li><hr style="border-top: 1px solid #eee;">' +
        
        '<li><strong>Gulbarg Singh Bassi</strong> (Retired Teacher)<br>GSC<br>Cell: +1 6787941794</li>' +
        '</ul>' +
        '</div>';
    openHTMLModal('Verified Professional References', html);
}

function showExpertiseModal() {
    var html = '<div style="padding:10px; text-align:left; max-height:450px; overflow-y:auto;">' +
        '<h4>🎯 Areas of Interest</h4>' +
        '<ul style="margin-bottom:15px;">' +
        '<li>Artificial Intelligence & Machine Learning</li>' +
        '<li>Cyber Security</li>' +
        '<li>Electromagnetics</li>' +
        '<li>Microcontrollers & Digital Logic Design</li>' +
        '<li>Non-Conventional Sources of Energy</li>' +
        '</ul>' +

        '<h4>📖 Courses Handled</h4>' +
        '<ul style="column-count: 2; column-gap: 20px; list-style-position: inside; padding-left: 0;">' +
        '<li style="break-inside: avoid;">Artificial Intelligence Techniques</li>' +
        '<li style="break-inside: avoid;">AI Based Web Design</li>' +
        '<li style="break-inside: avoid;">Introduction to Expert Systems</li>' +
        '<li style="break-inside: avoid;">Advanced Python Programming</li>' +
        '<li style="break-inside: avoid;">Discrete Mathematics and Logic</li>' +
        '<li style="break-inside: avoid;">Software Testing Certification</li>' +
        '<li style="break-inside: avoid;">Electro Magnetic Fields</li>' +
        '<li style="break-inside: avoid;">Microprocessors and Microcontrollers</li>' +
        '<li style="break-inside: avoid;">Digital Logic Design</li>' +
        '<li style="break-inside: avoid;">Digital Controllers</li>' +
        '<li style="break-inside: avoid;">Control Systems</li>' +
        '<li style="break-inside: avoid;">Power System Analysis</li>' +
        '<li style="break-inside: avoid;">Power System Protection</li>' +
        '<li style="break-inside: avoid;">High Voltage Engineering</li>' +
        '<li style="break-inside: avoid;">Non-Conventional Sources of Energy</li>' +
        '<li style="break-inside: avoid;">Electrical Technology</li>' +
        '<li style="break-inside: avoid;">Basic Electrical and Electronics Engineering</li>' +
        '</ul>' +
        '</div>';
    openHTMLModal('Subject Area Expertise', html);
}

function showSkillsModal() {
    var html = '<div style="padding:10px; text-align:left;">' +
        '<p><strong>Core Languages:</strong> Python (Advanced), MATLAB (Simulink Twin Engineering), JavaScript (Full-Stack Engine Stack), Core Java Basics.</p>' +
        '<p><strong>Domain Tools:</strong> FACTS Controllers Optimization, Smart Grid Architecture Twins, Cybersecurity Infrastructure Auditing.</p>' +
        '</div>';
    openHTMLModal('Technical Skills & Toolsets', html);
}

function showConferencesModal() {
    var html = '<div style="padding:10px; text-align:left; max-height:450px; overflow-y:auto;">' +
        '<h4>📋 International & National Conference Presentations</h4>' +
        '<ul>' +
        '<li><strong>"System knowledge for digital twin technologies in Industry 4.0 and Industry 5.0"</strong><br>' +
        'Presented at the <em>5th International E-Conference on Mechanical and Material Science Engineering: Innovation and Research (ICMMSE:IR)</em>, ' +
        'organized by the Department of Mechanical Engineering, Sandip Institute of Technology & Research Centre, Nashik, Maharashtra ' +
        '(27th – 28th February 2026).</li><hr style="border-top: 1px solid #eee;">' +
        
        '<li><strong>"Cyber Security in smart grids- Role of Digital Advanced devices"</strong><br>' +
        'Presented at the <em>Two-Day National Conference on Green and Resilient Energy Systems (GVCON-2K22)</em>, ' +
        'conducted by the Electrical & Electronics Engineering Department, Gayatri Vidya Parishad College of Engineering (Autonomous), Visakhapatnam ' +
        '(21st – 22nd October 2022).</li><hr style="border-top: 1px solid #eee;">' +
        
        '<li><strong>"Transient Stability Improvement of SMIB using DPFC"</strong><br>' +
        'Presented at the <em>Two-Day National Conference on Recent Trends in Electrical and Electronics Engineering (RTEEE)</em>, ' +
        'held at Vignan’s Institute of Information Technology, Visakhapatnam ' +
        '(14th – 15th April 2017).</li>' +
        '</ul>' +
        '</div>';
    openHTMLModal('Conferences Attended Presentation Details', html);
}
