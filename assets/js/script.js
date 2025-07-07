

// Video controls
const initVideo = () => {
    const [video, btn, icon] = ['#video', '#playPauseBtn', '#playPauseBtn i'].map(q => document.querySelector(q));
    if (!video || !btn || !icon) return;

    btn.addEventListener('click', () => {
        const action = video.paused ? 'play' : 'pause';
        video[action]();
        icon.className = `fas fa-${video.paused ? 'play' : 'pause'}`;
    });
};

document.addEventListener('DOMContentLoaded', () => {
    initVideo();
});

const revealElements = document.querySelectorAll('.workflow-box');

const revealOnScroll = () => {
  const windowHeight = window.innerHeight;
  revealElements.forEach(el => {
    const elementTop = el.getBoundingClientRect().top;
    const revealPoint = 150; // trigger earlier

    if (elementTop < windowHeight - revealPoint) {
      el.classList.add('reveal');
    } else {
      el.classList.remove('reveal');
    }
  });
};

window.addEventListener('scroll', revealOnScroll);
