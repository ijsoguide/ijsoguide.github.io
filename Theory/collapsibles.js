document.addEventListener('DOMContentLoaded', function () {
    const coll = document.querySelectorAll('.collapsible');
    coll.forEach(btn => {
      btn.addEventListener('click', function () {
        this.classList.toggle('active');
        const content = this.nextElementSibling;
        if (content.style.maxHeight) {
          content.style.maxHeight = null;
        } else {
          content.style.maxHeight = content.scrollHeight + 'px';
        }
      });
    });
  });