// Get references to buttons
const academicBtn = document.getElementById('academic-btn');
const industryBtn = document.getElementById('industry-btn');

// Get references to dynamic content areas
const academicContent = document.getElementById('academic-content');
const industryContent = document.getElementById('industry-content');

// Event handler for Academic View button
academicBtn.addEventListener('click', () => {
    // Update button states
    academicBtn.classList.add('active');
    industryBtn.classList.remove('active');
    
    // Toggle content views
    academicContent.classList.remove('hidden');
    industryContent.classList.add('hidden');
});

// Event handler for Industry View button
industryBtn.addEventListener('click', () => {
    // Update button states
    industryBtn.classList.add('active');
    academicBtn.classList.remove('active');
    
    // Toggle content views
    industryContent.classList.remove('hidden');
    academicContent.classList.add('hidden');
});
