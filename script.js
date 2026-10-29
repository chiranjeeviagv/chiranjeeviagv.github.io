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
    document.getElementById('objective-text').innerText = objectives[viewType];

    // 3. Select and filter sections based on view classes
    const academicSections = document.querySelectorAll('.academic-only');
    const industrySections = document.querySelectorAll('.industry-only');

    if (viewType === 'academic') {
        // Show Academic elements, Hide Industry elements
        academicSections.forEach(el => el.classList.remove('hidden'));
        industrySections.forEach(el => el.classList.add('hidden'));
    } else if (viewType === 'industry') {
        // Hide Academic elements, Show Industry elements
        academicSections.forEach(el => el.classList.add('hidden'));
        industrySections.forEach(el => el.classList.remove('hidden'));
    }
}
// Modal Interaction Control
function openModal(title, text) {
    document.getElementById('modal-title').innerText = title;
    document.getElementById('modal-body').innerText = text;
    document.getElementById('details-modal').classList.remove('hidden');
}

function closeModal() {
    document.getElementById('details-modal').classList.add('hidden');
}

// Close popup if user clicks anywhere outside the main modal window box
window.onclick = function(event) {
    const modal = document.getElementById('details-modal');
    if (event.target === modal) {
        closeModal();
    }
}

