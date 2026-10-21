// Theme Toggle Engine
const themeBtn = document.querySelector('.theme-toggle-btn') || document.getElementById('theme-toggle');

if (themeBtn) {
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    // Save the choice in local storage
    const isDark = document.body.classList.contains('dark-theme');
    localStorage.setItem('cv-theme', isDark ? 'dark' : 'light');
  });
}

// Check and apply saved theme layout on startup
if (localStorage.getItem('cv-theme') === 'dark') {
  document.body.classList.add('dark-theme');
}
// Course Domain Selection Filter
const filterBtns = document.querySelectorAll('.filter-btn');
const courses = document.querySelectorAll('.courses-list li');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    // Remove active styles from other buttons
    document.querySelector('.filter-btn.active')?.classList.remove('active');
    btn.classList.add('active');
    
    const choice = btn.getAttribute('data-domain');
    
    courses.forEach(course => {
      const category = course.getAttribute('data-category');
      if (choice === 'all' || category === choice) {
        course.style.display = 'list-item';
      } else {
        course.style.display = 'none';
      }
    });
  });
});
// Object Dataset holding your certification details
const certificationData = {
  'ibm-fullstack': {
    title: 'IBM Full Stack Developer Certificate',
    desc: 'Advanced software development lifecycle tracking, cloud-native building, and JavaScript backend deployment paradigms.',
    link: 'https://coursera.org'
  },
  'microsoft-ai': {
    title: 'Microsoft AI & ML Engineering',
    desc: 'Covering model architecture training, cloud intelligence models, and cognitive compute tooling systems.',
    link: 'https://microsoft.com'
  }
};

// Event Handler to inject content dynamically 
function loadCredential(certId) {
  const panel = document.getElementById('credential-display-panel');
  const data = certificationData[certId];
  
  if (panel && data) {
    document.getElementById('display-title').textContent = data.title;
    document.getElementById('display-details').textContent = data.desc;
    document.getElementById('display-link').href = data.link;
    
    panel.style.display = 'block'; // Make container visible
    panel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }
}

// Hooking it up to a button event handler example
// <button onclick="loadCredential('ibm-fullstack')">IBM Full Stack Developer</button>

document.addEventListener('DOMContentLoaded', () => {
    // Theme Toggle Logic
    const themeToggle = document.getElementById('themeToggle');
    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Certification Data Map
    const certificationData = {
        'ibm-js': {
            title: "IBM Full Stack JavaScript Developer (12-Course Series)",
            desc: "Specialization targeting React engineering, asynchronous JavaScript engines, Node.js infrastructure, Express.js microservices, NoSQL databases, and serverless pipelines.",
            url: "https://www.coursera.org/account/accomplishments/specialization/L2Q2VEP5W243"
        },
        'ms-ai': {
            title: "Microsoft AI and ML Engineering Professional Certificate (5 Courses)",
            desc: "Validation of architectural expertise in foundations of Machine Learning modeling, algorithms, intelligent agents, and Azure ML pipelines.",
            url: "https://www.coursera.org/account/accomplishments/specialization/certificate/5SGHZ101WA4W"
        },
        'ibm-ai': {
            title: "IBM AI Developer Professional Certification (10-Course Series)",
            desc: "Expertise validation focusing on Applied Systems Engineering, foundational Python architectures, Flask integration structures, and deploying Generative AI large language model pipelines safely.",
            url: "https://coursera.org/verify/professional-cert/E06UAT9KFM8S"
        },
        'ibm-java': {
            title: "IBM Java Developer Certification (14-Course Series)",
            desc: "Deep focus on object-oriented software engineering principles, Java design patterns, automated unit testing matrices, Spring Boot application frameworks, and enterprise database mapping layers.",
            url: "https://coursera.org/verify/professional-cert/CGMXJ0SN33A5"
        },
        'ibm-backend': {
            title: "IBM JavaScript Backend Developer Certification (13 Courses)",
            desc: "Asynchronous backend platform design utilizing Node.js & MongoDB ecosystems, container configurations via Docker, Kubernetes orchestrations, application layer tracking, observability frameworks, and robust software security.",
            url: "https://www.coursera.org/account/accomplishments/specialization/certificate/R9G3UO4SYXJM"
        },
        'google-cyber': {
            title: "Google Cybersecurity Certification (9-Course Series)",
            desc: "System defense strategies targeting asset and network vulnerability mitigation, Linux configuration operations, automated system auditing with Python scripting, threat analysis, and security incident response matrix.",
            url: "https://coursera.org/verify/professional-cert/SZEO3FT6Q193"
        },
        'nptel': {
            title: "NPTEL Advanced Academic Certifications",
            desc: "Rigorous analytical courses from top engineering institutes: Advanced Computer Architecture (2026), Advanced Computer Networks (2025), Practical Cybersecurity Frameworks (2024), Cloud and Big Data Computing (2023-2024), and Smart Grid Engineering integrations.",
            url: "https://google.com"
        }
    };

    const tabs = document.querySelectorAll('.tab-btn');
    const displayContainer = document.getElementById('tabContentPlaceholder');

    function renderTabContent(key) {
        const data = certificationData[key];
        if (!data) return;
        displayContainer.innerHTML = `
            <h3>${data.title}</h3>
            <p style="margin-bottom: 12px; font-size:0.95rem;">${data.desc}</p>
            <a href="${data.url}" target="_blank" class="inline-link">🌐 Access Secure Verification Registry 🔗</a>
        `;
    }

    // Render first tab automatically on load
    renderTabContent('ibm-js');

    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            renderTabContent(tab.dataset.tab);
        });
    });

    // Filter Buttons Logic
    const filterButtons = document.querySelectorAll('.filter-btn');
    const courseItems = document.querySelectorAll('#coursesContainer li');

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            const activeFilter = btn.dataset.filter;

            courseItems.forEach(item => {
                if (activeFilter === 'all' || item.dataset.cat === activeFilter) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
       // ==========================================
    // INTERACTIVE EDUCATION DASHBOARD LOGIC
    // ==========================================
    const educationRepository = {
        'mtech': {
            spec: "High Voltage Engineering (HVE)",
            inst: "Jawaharlal Nehru Technological University (JNTU), Kakinada",
            year: "2012",
            marks: "72% (Distinction)"
        },
        'btech': {
            spec: "Electrical and Electronics Engineering (EEE)",
            inst: "Chaitanya Engineering College, Visakhapatnam",
            year: "2007",
            marks: "71.63% (Distinction)"
        },
        'intermediate': {
            spec: "MPC (Mathematics, Physics, Chemistry)",
            inst: "Gayatri Junior College, Vizianagaram",
            year: "2003",
            marks: "First Class"
        },
        'ssc': {
            spec: "General Secondary Education",
            inst: "ZP High School, Jami, Vizianagaram",
            year: "2001",
            marks: "First Class"
        }
    };

    const eduButtons = document.querySelectorAll('.edu-btn');
    const eduDisplayBox = document.getElementById('educationOutputBox');

    function updateEducationView(qualificationKey) {
        const data = educationRepository[qualificationKey];
        if (!data) return;

        eduDisplayBox.innerHTML = `
            <div style="display: grid; grid-template-columns: 140px 1fr; gap: 10px; font-size: 0.95rem; line-height: 1.6;">
                <strong>🏫 Institution:</strong> <span>${data.inst}</span>
                <strong>🎓 Specialization:</strong> <span>${data.spec}</span>
                <strong>📅 Year of Passing:</strong> <span>${data.year}</span>
                <strong>📈 Percentage/Class:</strong> <span>${data.marks}</span>
            </div>
        `;
    }

    // Automatically initialize with M.Tech data on page load
    if (eduDisplayBox) {
        updateEducationView('mtech');
    }

    eduButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            eduButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateEducationView(btn.dataset.edu);
        });
    });

    // ==========================================
    // INTERACTIVE EXPERIENCE DASHBOARD LOGIC
    // ==========================================
    const experienceRepository = {
        'sitrc': {
            role: "Assistant Professor, EE (AIML)",
            institution: "Sandip Foundation's - Sandip Institute of Technology and Research Centre, Nashik, Maharashtra",
            duration: "📅 27-06-2025 to 31-05-2026",
            details: "Specialized focus handling advanced AI/ML implementations, expert computing systems validation, and departmental academic file management panels."
        },
        'gnit': {
            role: "Assistant Professor, EEE Department",
            institution: "Guru Nanak Institute of Technology, Ibrahimpatnam, Hyderabad",
            duration: "📅 16-02-2023 to 11-01-2025",
            details: "Instructed core power grid computing analysis, directed advanced system protection architectures, and executed student advisory panels."
        },
        'mrecw': {
            role: "Assistant Professor, EEE Department",
            institution: "Malla Reddy Engineering College for Women (A), MRGI, Secunderabad",
            duration: "📅 18-07-2022 to 15-02-2023",
            details: "Managed technical training certifications, laboratory assessments, and structured curriculum data matrices matching university compliance paths."
        },
        'aditya': {
            role: "Sr. Assistant Professor, EEE Department",
            institution: "Aditya College of Engineering, Surampalem, Andhra Pradesh",
            duration: "📅 22-11-2019 to 26-07-2021",
            details: "Assigned head senior responsibilities overseeing institutional exam branches, departmental timetables, and resource mapping operations."
        },
        'viit': {
            role: "Assistant Professor, EEE Department",
            institution: "Vignan's Institute of Information Technology (A), Visakhapatnam, Andhra Pradesh",
            duration: "📅 13-03-2015 to 04-11-2019",
            details: "Handled foundational engineering technology coursework, student research guidance programs, and institutional certification file auditing tasks."
        }
    };

    const expButtons = document.querySelectorAll('.exp-btn');
    const expDisplayBox = document.getElementById('experienceOutputBox');

    function updateExperienceView(profileKey) {
        const data = experienceRepository[profileKey];
        if (!data) return;

        expDisplayBox.innerHTML = `
            <h3>${data.role}</h3>
            <h4>${data.institution}</h4>
            <p style="font-weight: 600; font-size: 0.9rem; margin-bottom: 10px;">${data.duration}</p>
            <p style="font-size: 0.95rem; line-height: 1.5; opacity: 0.95;">${data.details}</p>
        `;
    }

    // Automatically load the newest professional role on page launch
    updateExperienceView('sitrc');

    expButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            expButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateExperienceView(btn.dataset.exp);
        });
    });

    // Toggle Expandable Panels
    const interactionButtons = document.querySelectorAll('.ref-btn');
    interactionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetElementId = button.getAttribute('data-target');
            const targetElement = document.getElementById(targetElementId);
            targetElement.classList.toggle('hidden');
        });
    });
});
    // ==========================================
    // INTERACTIVE CONFERENCES DASHBOARD LOGIC
    // ==========================================
    const conferenceRepository = {
        'icmmse': {
            paper: "“System knowledge for digital twin technologies in Industry 4.0 and Industry 5.0”",
            event: "5th International E-Conference on Mechanical and Material Science Engineering: Innovation and Research (ICMMSE:IR)",
            host: "Organized by the Department of Mechanical Engineering, Sandip Institute of Technology & Research Centre, Nashik, Maharashtra",
            date: "📅 27th and 28th of February 2026"
        },
        'gvcon': {
            paper: "“Cyber Security in smart grids- Role of Digital Advanced devices”",
            event: "Two-Day National Conference on the theme 'Green and Resilient Energy Systems' (GVCON-2K22)",
            host: "Conducted by the Electrical & Electronics Engineering Department, Gayatri Vidya Parishad College of Engineering (Autonomous), Visakhapatnam",
            date: "📅 21st to 22nd October, 2022"
        },
        'rteee': {
            paper: "“Transient Stability Improvement of SMIB using DPFC”",
            event: "Two-Day National Conference on 'Recent Trends in Electrical and Electronics Engineering' (RTEEE)",
            host: "Held at Vignan’s Institute of Information Technology, Visakhapatnam",
            date: "📅 14th and 15th of April 2017"
        }
    };

    const confButtons = document.querySelectorAll('.conf-btn');
    const confDisplayBox = document.getElementById('conferenceOutputBox');

    function updateConferenceView(conferenceKey) {
        const data = conferenceRepository[conferenceKey];
        if (!data) return;

        confDisplayBox.innerHTML = `
            <h3>Presented Paper: <span style="font-weight: 500; font-style: italic;">${data.paper}</span></h3>
            <h4 style="margin: 8px 0; color: var(--accent-color); font-weight: 600;">🏆 ${data.event}</h4>
            <p style="font-size: 0.95rem; margin-bottom: 6px; opacity: 0.9;">🏫 ${data.host}</p>
            <p style="font-weight: 600; font-size: 0.88rem; color: var(--text-muted);">${data.date}</p>
        `;
    }

    // Automatically load your most recent presentation details on page load
    updateConferenceView('icmmse');

    confButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            confButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            updateConferenceView(btn.dataset.conf);
        });
    });
    // Dynamic text toggler for the Strengths Directory button
    const strengthsToggleBtn = document.getElementById('strengthsToggleBtn');
    const strengthsPanel = document.getElementById('strengthsPanel');

    if (strengthsToggleBtn && strengthsPanel) {
        strengthsToggleBtn.addEventListener('click', () => {
            // Give the browser a microsecond to toggle the class before reading it
            setTimeout(() => {
                if (strengthsPanel.classList.contains('hidden')) {
                    strengthsToggleBtn.textContent = '📋 View Strengths Directory';
                } else {
                    strengthsToggleBtn.textContent = '❌ Hide Strengths Directory';
                }
            }, 10);
        });
    }

    // Dynamic text toggler for the Languages Directory button
    const languagesToggleBtn = document.getElementById('languagesToggleBtn');
    const languagesPanel = document.getElementById('languagesPanel');

    if (languagesToggleBtn && languagesPanel) {
        languagesToggleBtn.addEventListener('click', () => {
            setTimeout(() => {
                if (languagesPanel.classList.contains('hidden')) {
                    languagesToggleBtn.textContent = '🌐 View Languages Directory';
                } else {
                    languagesToggleBtn.textContent = '❌ Hide Languages Directory';
                }
            }, 10);
        });
    }
// ============================================================
// FACULTY DEVELOPMENT & SKILL UPGRADATION FILTER ENGINE (WITH DYNAMIC NOTICE)
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    const upgradeFilters = document.querySelectorAll('.upgrade-filter-btn');
    const upgradationItems = document.querySelectorAll('#upgradeActivitiesContainer li');
    const placeholderNotice = document.getElementById('filter-placeholder-notice');

    if (upgradeFilters.length > 0 && upgradationItems.length > 0) {
        
        // 1. 🛠️ INITIAL LOAD STATE: FORCE HIDE ALL 29 LIST ENTRIES IMMEDIATELY
        upgradationItems.forEach(item => {
            item.style.display = 'none'; 
        });

        // 2. Ensure no buttons are pre-highlighted blue while the list is empty
        upgradeFilters.forEach(f => f.classList.remove('active'));

        // 3. Click Handling Interactivity Logic Loop
        upgradeFilters.forEach(btn => {
            btn.addEventListener('click', () => {
                
                // 💡 DYNAMICALLY FADE OUT AND REMOVE THE PLACEHOLDER ALERT BOX
                if (placeholderNotice && placeholderNotice.style.display !== 'none') {
                    placeholderNotice.style.opacity = '0';
                    setTimeout(() => {
                        placeholderNotice.style.display = 'none';
                    }, 250); // Matches transition timing smoothly
                }

                // Manage interactive active button highlight visual states
                upgradeFilters.forEach(f => f.classList.remove('active'));
                btn.classList.add('active');

                const selectedFilter = btn.getAttribute('data-upgrade-filter');

                // Evaluate data matrix sorting matches
                upgradationItems.forEach(item => {
                    const itemCategory = item.getAttribute('data-ucat');
                    
                    if (selectedFilter === 'all' || itemCategory === selectedFilter) {
                        item.style.display = 'flex'; // Restores clean flexbox layout structure
                        item.style.opacity = '0';
                        setTimeout(() => {
                            item.style.transition = 'opacity 0.3s ease';
                            item.style.opacity = '1';
                        }, 10);
                    } else {
                        item.style.display = 'none'; // Drops out of rendering grid instantly
                    }
                });
            });
        });
    }
});
    // Dynamic text toggler for the Corporate Memberships button
    const membershipsToggleBtn = document.getElementById('membershipsToggleBtn');
    const membershipsPanel = document.getElementById('membershipsPanel');

    if (membershipsToggleBtn && membershipsPanel) {
        membershipsToggleBtn.addEventListener('click', () => {
            setTimeout(() => {
                if (membershipsPanel.classList.contains('hidden')) {
                    membershipsToggleBtn.textContent = '📜 View Corporate Memberships';
                } else {
                    membershipsToggleBtn.textContent = '❌ Hide Corporate Memberships';
                }
            }, 10);
        });
    }
document.addEventListener("DOMContentLoaded", () => {
    const platformButtons = document.querySelectorAll(".platform-btn");
    const displayNode = document.getElementById("platform-display-node");

    // Dynamic Engine Configuration Details from Resume Metadata
    const platformSpecs = {
        "Google Meet": "Configured for synchronized virtual instruction, micro-lectures, and real-time screen presentation routines.",
        "Microsoft Teams": "Configured for academic department alignment, formal board matrices, and deep institutional file distributions.",
        "Cisco Webex": "Optimized for large-scale engineering symposium presentations and university guest-lecturing configurations.",
        "GoToMeeting": "Integrated for global external panel discussions and multi-regional technical research coordination meetings."
    };

    platformButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            const systemTarget = e.target.getAttribute("data-platform");
            
            if (platformSpecs[systemTarget]) {
                displayNode.innerHTML = `<strong>Active Framework Configuration [${systemTarget}]:</strong> ${platformSpecs[systemTarget]}`;
                displayNode.style.display = "block";
            }
        });
    });
});

// JavaScript
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollTopBtn.style.display = 'block';
  } else {
    scrollTopBtn.style.display = 'none';
  }
});

scrollTopBtn.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
// JavaScript
document.querySelectorAll('.accordion-header').forEach(button => {
  button.addEventListener('click', () => {
    const content = button.nextElementSibling;
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
  });
});
// JavaScript
document.getElementById('searchBar').addEventListener('input', (e) => {
  const filter = e.target.value.toLowerCase();
  const items = document.querySelectorAll('#itemList li');
  
  items.forEach(item => {
    const text = item.textContent.toLowerCase();
    item.style.display = text.includes(filter) ? '' : 'none';
  });
});

// ============================================================
// ACADEMIC COURSES FILTER ENGINE (EMPTY LOAD & TOGGLE)
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
    const courseFilters = document.querySelectorAll('.course-filter-btn');
    const courseItems = document.querySelectorAll('#coursesContainer li');
    const courseNotice = document.getElementById('course-placeholder-notice');

    if (courseFilters.length > 0 && courseItems.length > 0) {
        
        // 1. Initial State Initialization: Hide all courses instantly on startup
        courseItems.forEach(item => {
            item.style.display = 'none'; 
        });
        
        // Remove active class from the "All Specialties" button on startup
        courseFilters.forEach(f => f.classList.remove('active'));

        // 2. Setup Click Event Handlers
        courseFilters.forEach(btn => {
            btn.addEventListener('click', () => {
                
                // Remove the initial info banner smoothly on click
                if (courseNotice && courseNotice.style.display !== 'none') {
                    courseNotice.style.opacity = '0';
                    setTimeout(() => {
                        courseNotice.style.display = 'none';
                    }, 250);
                }

                // Manage active navigation highlights
                courseFilters.forEach(f => f.classList.remove('active'));
                btn.classList.add('active');

                const selectedDomain = btn.getAttribute('data-course-filter');

                // Evaluate data matrix matches
                courseItems.forEach(item => {
                    const itemDomain = item.getAttribute('data-ccat');
                    
                    if (selectedDomain === 'all' || itemDomain === selectedDomain) {
                        // Restores grid-block layout visibility structure
                        item.style.display = 'block'; 
                        item.style.opacity = '0';
                        setTimeout(() => {
                            item.style.transition = 'opacity 0.3s ease';
                            item.style.opacity = '1';
                        }, 10);
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
    }
});

// Example usage hook for an IBM badge button click
// openCredentialModal('IBM Full Stack Developer', 'https://example.com', 'Completed formal training tracking backend systems.');
