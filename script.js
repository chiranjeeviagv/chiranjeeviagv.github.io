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

    // Smart Tab Reset: Check if the currently active tab is hidden in the new view
    const firstTabBtn = document.querySelector(".tab-navigation .tab-btn:not(.only-academic):not(.only-industry)") || document.querySelector(".tab-navigation .tab-btn");
    
    if (currentActiveTabButton) {
        const isHiddenInIndustry = viewType === 'industry' && currentActiveTabButton.classList.contains('only-academic');
        const isHiddenInAcademic = viewType === 'academic' && currentActiveTabButton.classList.contains('only-industry');
        
        // If the current tab became hidden, click the first visible tab (Overview)
        if (isHiddenInIndustry || isHiddenInAcademic) {
            const firstTabBtn = document.querySelector(".tab-navigation .tab-btn");
            if (firstTabBtn) {
                firstTabBtn.click();
            }
        }
    }
}
// 3. Verification Link Handler (Optional)
document.addEventListener("DOMContentLoaded", () => {
    const verifyLinks = document.querySelectorAll(".verify-link");
    
    verifyLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href");
            
            // Prevent navigating if the link is still an empty placeholder
            if (href === "#" || href === "") {
                event.preventDefault();
                alert(`Verification link for "${link.textContent.trim()}" will be updated soon!`);
            }
        });
    });
});

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

    // Safety check to ensure the target element exists before adding class
    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add("active");
    }
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.add("active");
    }
}
