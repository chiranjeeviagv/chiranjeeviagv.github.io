// 1. Handle switching between Industry and Academic Views
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

    // Auto reset to the first tab ('Overview') to prevent an orphaned hidden tab layout
    const firstTabBtn = document.querySelector(".tab-navigation .tab-btn");
    if (firstTabBtn) {
        firstTabBtn.click();
    }
}

// 2. Core Tab System Logic
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
