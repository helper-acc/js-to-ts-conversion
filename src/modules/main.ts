import { setupModal } from './modules/modal/modal';
import { setupScrollListener } from './modules/scroll/scroll';
import { setupAnimation } from './modules/animation/animation';
import { fetchPosts } from './modules/fetch/fetch';

document.addEventListener('DOMContentLoaded', function() {
  setupModal();
  setupScrollListener();
  setupAnimation();
  fetchPosts();
});
