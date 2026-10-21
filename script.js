// Handles active profile adjustments between Industry layouts and Academic logs
function switchView(viewType) {
    const body = document.body;
    const industryBtn = document.getElementById("industry-toggle-btn");
    const academicBtn = document.getElementById("academic-toggle-btn");

    if (viewType === 'industry') {
        body.className = "view-industry";
        industryBtn.classList.add("active");
        academicBtn.classList.remove("active");
    } else {
        body.className = "view-academic";
        academicBtn.classList.add("active");
        industryBtn.classList.remove("active");
    }

    // Fall back smoothly to overview tab layout to keep styling states aligned
    const firstTabBtn = document.querySelector(".tab-navigation .tab-btn");
    if (firstTabBtn) {
        firstTabBtn.click();
    }
}

// Manages cross-tabbed element hidden layouts 
function openTab(event, tabId) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
}

// Academic course handler utility triggers
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}

function closeModalOnOuterClick(event) {
    if (event.target.classList.contains('modal-overlay')) {
        event.target.style.display = "none";
    }
}

// Inbound validation email layout assembler
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const subject = document.getElementById('contact-subject').value;
    const bodyText = document.getElementById('contact-body').value;

    const emailBody = `Sender Name: ${name}%0D%0A%0D%0AMessage content details:%0D%0A${bodyText}`;
    window.location.href = `mailto:chiranjeevi210@://gmail.com{encodeURIComponent(subject)}&body=${emailBody}`;
}
