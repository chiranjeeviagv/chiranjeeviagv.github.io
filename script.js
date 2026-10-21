// Theme Engine Toggle Initialization
const themeToggleBtn = document.getElementById('theme-toggle');
const bodyElement = document.body;

themeToggleBtn.addEventListener('click', () => {
    if (bodyElement.classList.contains('light-theme')) {
        bodyElement.classList.remove('light-theme');
        bodyElement.classList.add('dark-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        bodyElement.classList.remove('dark-theme');
        bodyElement.classList.add('light-theme');
        themeToggleBtn.innerHTML = '<i class="fas fa-moon"></i>';
    }
});

// Accordion Control for Certification Directory
function toggleAccordion(id) {
    const contentBlock = document.getElementById(id);
    const allContents = document.querySelectorAll('.cert-content');
    
    // Close other panels for structural neatness
    allContents.forEach(item => {
        if (item.id !== id) {
            item.classList.remove('open');
        }
    });

    // Toggle active targeted pane
    contentBlock.classList.toggle('open');
}

// Course Domain Filtering Module
function filterCourses(category) {
    const courseItems = document.querySelectorAll('.course-item');
    const tabButtons = document.querySelectorAll('.tab-btn');

    // Manage active visual tab highlights
    tabButtons.forEach(btn => btn.classList.remove('active'));
    event.currentTarget.classList.add('active');

    // Process nodes display metrics
    courseItems.forEach(item => {
        const itemCat = item.getAttribute('data-cat');
        if (category === 'all' || itemCat === category) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';
        }
    });
}
