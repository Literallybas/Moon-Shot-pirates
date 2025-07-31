document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.querySelector('.start-btn');

  startBtn.addEventListener('click', () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  });
});