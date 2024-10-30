export function setupAnimation() {
  const projectsSection = document.querySelector('#projects') as HTMLElement;
  window.addEventListener('scroll', () => {
    const sectionPosition = projectsSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.2;
  
    if (sectionPosition < screenPosition) {
      projectsSection.style.opacity = '1';
      projectsSection.style.transform = 'translateY(0)';
    }
  });
}
