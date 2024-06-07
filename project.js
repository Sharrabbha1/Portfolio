fetch('data.json')
.then(response => response.json())
.then(data => {
    const projectsContainer = document.getElementById('projects');
    data.projects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p><a href='${project.link}'>View Project</a>`;
        projectsContainer.appendChild(projectElement);
    });
})
.catch(error => console.error('Failed to load projects:', error));
