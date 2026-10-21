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
    const firstTabBtn = document.querySelector(".tab-navigation .tab-btn");
    if (firstTabBtn) { firstTabBtn.click(); }
}

function openTab(event, tabId) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) { tabContents[i].classList.remove("active"); }
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) { tabButtons[i].classList.remove("active"); }
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
}

/* Modal Popup Engine Hooks */
function openModal(modalId) {
    document.getElementById(modalId).style.display = "flex";
}
function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}
function closeModalOnOuterClick(event) {
    if (event.target.classList.contains('modal-overlay')) { event.target.style.display = "none"; }
}

/* Form Message Redirect Engine */
function handleFormSubmit(event) {
    event.preventDefault();
    const name = document.getElementById('user-name').value;
    const subject = document.getElementById('user-subject').value;
    const message = document.getElementById('user-message').value;

    const emailBody = `Name: ${name}%0D%0A%0D%0AMessage:%0D%0A${message}`;
    window.location.href = `mailto:chiranjeevi210@://gmail.com{encodeURIComponent(subject)}&body=${emailBody}`;
}
