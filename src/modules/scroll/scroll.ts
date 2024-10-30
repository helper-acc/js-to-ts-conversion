export function setupScrollListener() {
  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;
    console.log(`You are scrolling! Scroll position: ${scrollPosition}`);
  });
}
