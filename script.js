document.addEventListener('DOMContentLoaded', () => {
    
    // --- DOM Element Registries ---
    const tabIndustry = document.getElementById('tab-industry');
    const tabAcademic = document.getElementById('tab-academic');
    const viewIndustry = document.getElementById('view-industry');
    const viewAcademic = document.getElementById('view-academic');
    
    const btnQualifications = document.getElementById('btn-qualifications');
    const modalQualifications = document.getElementById('qualifications-modal');
    const btnModalClose = document.getElementById('modal-close');
    const overlayModal = document.getElementById('modal-overlay');

    // --- Tab Switcher Logic ---
    function switchView(selectedView) {
        if (selectedView === 'industry') {
            viewIndustry.classList.remove('hidden');
            viewAcademic.classList.add('hidden');
            
            // Set active/inactive tab design patterns
            tabIndustry.className = "flex-1 py-4 text-center font-bold border-b-2 border-indigo-600 text-indigo-600 transition cursor-pointer flex items-center justify-center gap-2";
            tabAcademic.className = "flex-1 py-4 text-center font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-800 transition cursor-pointer flex items-center justify-center gap-2";
        } else {
            viewAcademic.classList.remove('hidden');
            viewIndustry.classList.add('hidden');
            
            tabAcademic.className = "flex-1 py-4 text-center font-bold border-b-2 border-indigo-600 text-indigo-600 transition cursor-pointer flex items-center justify-center gap-2";
            tabIndustry.className = "flex-1 py-4 text-center font-bold border-b-2 border-transparent text-slate-500 hover:text-slate-800 transition cursor-pointer flex items-center justify-center gap-2";
        }
    }

    tabIndustry.addEventListener('click', () => switchView('industry'));
    tabAcademic.addEventListener('click', () => switchView('academic'));


    // --- Accordion Interactivity Logic ---
    const accordionButtons = document.querySelectorAll('.accordion-toggle');
    
    accordionButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetId = button.getAttribute('data-target');
            const contentPanel = document.getElementById(targetId);
            const icon = button.querySelector('.toggle-icon');
            const labelText = button.querySelector('span');

            if (contentPanel.classList.contains('hidden')) {
                contentPanel.classList.remove('hidden');
                icon.style.transform = 'rotate(180deg)';
                labelText.innerText = 'Collapse';
            } else {
                contentPanel.classList.add('hidden');
                icon.style.transform = 'rotate(0deg)';
                labelText.innerText = 'Expand';
            }
        });
    });


    // --- Qualifications Modal Viewport Logic ---
    function toggleModal() {
        document.body.classList.toggle('modal-active');
        modalQualifications.classList.toggle('opacity-0');
        modalQualifications.classList.toggle('pointer-events-none');
    }

    btnQualifications.addEventListener('click', toggleModal);
    btnModalClose.addEventListener('click', toggleModal);
    overlayModal.addEventListener('click', toggleModal); // Closes when clicking outside the content window
});
