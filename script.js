// Pre-defined texts for dynamic Career Objectives
const objectives = {
    academic: "Seeking a challenging position in an academic institution to leverage research, teaching methodology, and institutional development expertise.",
    industry: "Result-driven professional seeking a core technical role in the industry to apply practical problem-solving skills, engineering workflows, and system optimization."
};

function switchView(viewType) {
    // 1. Manage Active Button Styling
    const btnAcademic = document.getElementById('btn-academic');
    const btnIndustry = document.getElementById('btn-industry');
    
    if (viewType === 'academic') {
        btnAcademic.classList.add('active');
        btnIndustry.classList.remove('active');
    } else {
        btnIndustry.classList.add('active');
        btnAcademic.classList.remove('active');
    }

    // 2. Change the text content inside the Career Objective dynamically
    const objectiveTextEl = document.getElementById('objective-text');
    if (objectiveTextEl) {
        objectiveTextEl.innerText = objectives[viewType];
    }

    // 3. Directly target and filter elements to ensure CSS grid handles recalculation safely
    const academicSections = document.querySelectorAll('.academic-only');
    const industrySections = document.querySelectorAll('.industry-only');

    if (viewType === 'academic') {
        // Explicitly use block or flex style rules instead of relying on external classes
        academicSections.forEach(el => el.style.display = 'flex'); 
        industrySections.forEach(el => el.style.display = 'none');
    } else if (viewType === 'industry') {
        academicSections.forEach(el => el.style.display = 'none');
        industrySections.forEach(el => el.style.display = 'flex');
    }
}

// Modal Interaction Control
function openModal(title, text) {
    const modal = document.getElementById('details-modal');
    const modalTitle = document.getElementById('modal-title');
    const modalBody = document.getElementById('modal-body');
    
    if (modal && modalTitle && modalBody) {
        modalTitle.innerText = title;
        modalBody.innerText = text;
        modal.style.display = 'flex'; // Triggers smooth flex layout overlay alignment
    }
}

function closeModal() {
    const modal = document.getElementById('details-modal');
    if (modal) {
        modal.style.display = 'none';
    }
}

// Close popup if user clicks anywhere outside the main modal window box
window.onclick = function(event) {
    const modal = document.getElementById('details-modal');
    if (event.target === modal) {
        closeModal();
    }
}
