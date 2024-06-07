document.addEventListener('DOMContentLoaded', function() {
    fetch('projects.json')
        .then(response => response.json())
        .then(data => {
            const projectList = document.getElementById('project-list');
            data.forEach(project => {
                const projectDiv = document.createElement('div');
                projectDiv.className = 'project';
                projectDiv.innerHTML = `
                    <h3>${project.title}</h3>
                    <p>${project.description}</p>
                    <a href="${project.link}" target="_blank">Learn More</a>
                `;
                projectList.appendChild(projectDiv);
            });
        })
        .catch(error => console.error('Error fetching project data:', error));
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Form submitted!');
});

// Adding scroll animation for sections
window.addEventListener('scroll', function() {
    const sections = document.querySelectorAll('section');
    const triggerBottom = window.innerHeight / 5 * 4;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;

        if(sectionTop < triggerBottom) {
            section.classList.add('visible');
        } else {
            section.classList.remove('visible');
        }
    });
});