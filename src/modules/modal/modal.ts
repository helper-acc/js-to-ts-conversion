export function setupModal() {
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
}
