
document.addEventListener('DOMContentLoaded', function() {
    // Модальне вікно
    const openModalButton = document.querySelector('.btn') as HTMLElement;
    const modal = document.createElement('div');
    modal.innerHTML = `
      <div style="position:fixed; top:50%; left:50%; transform:translate(-50%, -50%); background:white; padding:20px;">
        <h2>Modal Window</h2>
        <p>This is a modal window triggered by the "View My Work" button.</p>
        <button id="close-modal">Close</button>
      </div>
    `;
    document.body.appendChild(modal);
    modal.style.display = 'none';
    
    openModalButton.addEventListener('click', () => {
      modal.style.display = 'block';
    });
    
    document.getElementById('close-modal')?.addEventListener('click', () => {
      modal.style.display = 'none';
    });
    
    // Event listener для scroll
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY;
      console.log(`You are scrolling! Scroll position: ${scrollPosition}`);
    });
    
    // Анімація для з'явлення елементів
    const projectsSection = document.querySelector('#projects') as HTMLElement;
    window.addEventListener('scroll', () => {
      const sectionPosition = projectsSection.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
    
      if (sectionPosition < screenPosition) {
        projectsSection.style.opacity = '1';
        projectsSection.style.transform = 'translateY(0)';
      }
    });
    
    // Fetch API
    async function fetchPosts() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = await response.json();
        const projectsContainer = document.querySelector('.project-grid') as HTMLElement;
    
        posts.slice(0, 3).forEach((post: any, index: number) => {
        const projectCard = projectsContainer.children[index] as HTMLElement;
        const projectTitle = projectCard.querySelector('h3') as HTMLElement;
        const projectDescription = projectCard.querySelector('p') as HTMLElement;
        
        projectTitle.innerText = post.title;
        projectDescription.innerText = post.body;
        });
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    }
    
    fetchPosts();
});