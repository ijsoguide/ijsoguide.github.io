const container = document.getElementById('glowingSpots');
    for (let i = 0; i < 30; i++) {
      const span = document.createElement('span');
      span.style.left = Math.random() * 100 + 'vw';
      span.style.top = Math.random() * 100 + 'vh';
      span.style.animationDelay = Math.random() * 20 + 's';
      span.style.animationDuration = 10 + Math.random() * 20 + 's';
      span.style.width = 10 + Math.random() * 30 + 'px';
      span.style.height = span.style.width;
      container.appendChild(span);
    }
    const cursor = document.querySelector('.cursor');

window.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
})