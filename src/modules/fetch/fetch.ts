export async function fetchPosts() {
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