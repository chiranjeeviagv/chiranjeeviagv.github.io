document.addEventListener('DOMContentLoaded', () => {
    // 1. Target Elements
    const btnAcademic = document.getElementById('btn-academic');
    const btnIndustry = document.getElementById('btn-industry');
    const academicSections = document.querySelectorAll('.academic-only');
    const industrySections = document.querySelectorAll('.industry-only');
    const objectiveText = document.getElementById('objective-text');

    const exploreButtons = document.querySelectorAll('.explore-btn');
    const modal = document.getElementById('details-modal');
    const modalTitle = document.getElementById('modal-title');
    const closeModal = document.getElementById('btn-close-modal');

    // 2. Academic / Industry Toggle Strategy Logic
    btnAcademic.addEventListener('click', () => {
        btnAcademic.classList.add('active');
        btnIndustry.classList.remove('active');
        objectiveText.textContent = "Seeking a challenging position in an academic institution to leverage research, teaching methodology, and institutional development expertise.";
        
        academicSections.forEach(sec => sec.classList.remove('hidden-view'));
        industrySections.forEach(sec => sec.classList.add('hidden-view'));
    });

    btnIndustry.addEventListener('click', () => {
        btnIndustry.classList.add('active');
        btnAcademic.classList.remove('active');
        objectiveText.textContent = "Seeking a dynamic role in the tech industry to apply expertise in Full-Stack JavaScript, Machine Learning engineering, and systems optimization.";
        
        academicSections.forEach(sec => sec.classList.add('hidden-view'));
        industrySections.forEach(sec => sec.classList.remove('hidden-view'));
    });

    // 3. Multi-Button Event Loop for Modal Popups
    exploreButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            const sectionTarget = e.target.getAttribute('data-section');
            modalTitle.textContent = sectionTarget.toUpperCase();
            modal.classList.remove('hidden-view');
        });
    });

    // 4. Modal Closer
    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden-view');
    });
});
