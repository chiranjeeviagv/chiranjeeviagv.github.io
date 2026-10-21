function openTab(event, tabId) {
    // 1. Hide all tab content elements
    const tabContents = document.getElementsByClassName("tab-content");
    for (let i = 0; i < tabContents.length; i++) {
        tabContents[i].classList.remove("active");
    }

    // 2. Remove the "active" class from all navigation buttons
    const tabButtons = document.getElementsByClassName("tab-btn");
    for (let i = 0; i < tabButtons.length; i++) {
        tabButtons[i].classList.remove("active");
    }

    // 3. Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabId).classList.add("active");
    event.currentTarget.classList.add("active");
}
