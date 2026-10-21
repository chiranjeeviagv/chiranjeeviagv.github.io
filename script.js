// Local Database Object mapping to your specialized credentials data array
const certDatabase = {
    'ibm-js': {
        title: 'IBM Full Stack JavaScript Developer Professional Certification',
        stamp: 'Completed September 2026 &bull; 12-Course Core Engine Array',
        link: 'https://coursera.org',
        syllabus: [
            'Introduction to Software Engineering & Architecture Matrix',
            'Applied UI Development via HTML5, CSS3, & ES6 JavaScript',
            'Source Versioning Protocols with Git Ecosystem & GitHub Storage',
            'Front-End Application Structuring using React Components',
            'Back-End Server Architecture using Node.js & Express Frameworks'
        ]
    },
    'ms-ai': {
        title: 'Microsoft AI and ML Engineering Professional Certificate',
        stamp: 'Completed July 2026 &bull; 5-Course Specialized Series',
        link: 'https://coursera.org',
        syllabus: [
            'Foundations of Advanced Artificial Intelligence and Machine Learning',
            'AI and Machine Learning Mathematical Algorithms and Optimization Techniques',
            'Building Intelligent Automated Troubleshooting Agents',
            'Microsoft Azure Cloud Topologies for Enterprise Scale AI/ML Models'
        ]
    },
    'google-sec': {
        title: 'Google Cybersecurity Professional Certificate',
        stamp: 'Completed July 2026 &bull; 9-Course Engine Specialization',
        link: 'https://coursera.org',
        syllabus: [
            'Foundations of Modern Cybersecurity Frameworks',
            'Play It Safe: Managing Enterprise Security Risks & Vulnerabilities',
            'Connect and Protect: Deep-Dive Networks and Security Tools of the Trade',
            'Automating Incident Response Tasks with Python & Linux Scripting'
        ]
    }
};

// UI Dynamic Modulator Engine
function showCert(certKey) {
    // Sync Button states visual elements
    const tabs = document.querySelectorAll('.badge-pill');
    event.currentTarget.classList.add('active');
    tabs.forEach(tab => { if(tab !== event.currentTarget) tab.classList.remove('active'); });

    // Load payload text fields data array
    const data = certDatabase[certKey];
    const viewer = document.getElementById('cert-viewer');
    
    let itemsHtml = data.syllabus.map(item => `<li>${item}</li>`).join('');
    
    viewer.innerHTML = `
        <div class="dynamic-cert-content">
            <h4>${data.title}</h4>
            <p class="cert-timeline-stamp"><i class="fas fa-calendar-days"></i> ${data.stamp}</p>
            <ul class="nested-syllabus">${itemsHtml}</ul>
            <a href="${data.link}" target="_blank" class="action-hyperlink-btn">Verify Credential Secure Link <i class="fas fa-arrow-right"></i></a>
        </div>
    `;
}

// Matrix arrangement and classification rendering filtering
function arrangeGrid(domainId) {
    const items = document.querySelectorAll('.matrix-item');
    const nodes = document.querySelectorAll('.filter-node');
    
    nodes.forEach(node => node.classList.remove('active'));
    event.currentTarget.classList.add('active');

    items.forEach(item => {
        const itemDomain = item.getAttribute('data-domain');
        if (domainId === 'all' || itemDomain === domainId) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}

// Global Dark/Light Toggle Controller System
const modeToggle = document.getElementById('theme-toggle');
modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if(document.body.classList.contains('light-mode')) {
        modeToggle.innerHTML = '<i class="fas fa-moon"></i> Toggle Mode';
    } else {
        modeToggle.innerHTML = '<i class="fas fa-sun"></i> Toggle Mode';
    }
});
