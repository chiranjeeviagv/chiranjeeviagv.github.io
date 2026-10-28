// ==========================================================================
// 1. DUAL-VIEW TOGGLE LOGIC (INDUSTRY VS ACADEMIC)
// ==========================================================================
function switchView(viewType) {
    const body = document.body;
    const industryBtn = document.getElementById("industry-toggle-btn");
    const academicBtn = document.getElementById("academic-toggle-btn");

    if (!industryBtn || !academicBtn) return; // Safety check

    if (viewType === 'industry') {
        body.className = "view-industry";
        industryBtn.classList.add("active");
        academicBtn.classList.remove("active");
    } else {
        body.className = "view-academic";
        academicBtn.classList.add("active");
        industryBtn.classList.remove("active");
    }

    // Smart Tab Reset if the current tab is hidden in the new view
    const currentActiveTabButton = document.querySelector(".tab-navigation .tab-btn.active");
    if (currentActiveTabButton) {
        const isHiddenInIndustry = viewType === 'industry' && currentActiveTabButton.classList.contains('only-academic');
        const isHiddenInAcademic = viewType === 'academic' && currentActiveTabButton.classList.contains('only-industry');
        
        if (isHiddenInIndustry || isHiddenInAcademic) {
            const firstTabBtn = document.querySelector(".tab-navigation .tab-btn:not(.only-academic):not(.only-industry)") || document.querySelector(".tab-navigation .tab-btn");
            if (firstTabBtn) {
                firstTabBtn.click();
            }
        }
    }
}

// ==========================================================================
// 2. MAIN TABS NAVIGATION LOGIC
// ==========================================================================
function openTab(event, tabId) {
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    const targetTab = document.getElementById(tabId);
    if (targetTab) {
        targetTab.classList.add("active");
    }
    
    if (event && event.currentTarget) {
        event.currentTarget.classList.add("active");
    }
}

// ==========================================================================
// 3. EXPERIENCE ACCORDION EXPANSION LOGIC
// ==========================================================================
function toggleAccordion(element) {
    const panel = element.nextElementSibling;
    const icon = element.querySelector('.accordion-icon');
    if (!panel || !icon) return;

    // Close other open panels for clean readability
    const allPanels = document.querySelectorAll('.accordion-panel');
    const allIcons = document.querySelectorAll('.accordion-icon');
    
    allPanels.forEach(p => {
        if (p !== panel) p.classList.remove('open');
    });
    allIcons.forEach(i => {
        if (i !== icon) i.textContent = '+';
    });

    // Toggle target state using the 'open' class matching your CSS
    if (panel.classList.contains('open')) {
        panel.classList.remove('open');
        icon.textContent = '+';
    } else {
        panel.classList.add('open');
        icon.textContent = '−';
    }
}

// ==========================================================================
// 4. PUBLICATIONS SUB-TAB LOGIC
// ==========================================================================
function switchSubPub(event, targetSubId) {
    const subContents = document.querySelectorAll(".sub-pub-content");
    subContents.forEach(content => content.classList.remove("active"));

    const subButtons = document.querySelectorAll(".sub-nav-btn");
    subButtons.forEach(btn => btn.classList.remove("active"));

    const activePanel = document.getElementById(targetSubId);
    if (activePanel) {
        activePanel.classList.add("active");
    }

    if (event && event.currentTarget) {
        event.currentTarget.classList.add("active");
    }
}

// ==========================================================================
// 5. EMPTY PLACEHOLDER LINK WARNINGS
// ==========================================================================
document.addEventListener("DOMContentLoaded", () => {
    const verifyLinks = document.querySelectorAll(".verify-link");
    verifyLinks.forEach(link => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href");
            if (href === "#" || href === "") {
                event.preventDefault();
                alert(`Verification link for "${link.textContent.trim()}" will be updated soon!`);
            }
        });
    });
});
