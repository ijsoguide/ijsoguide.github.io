// Section toggler with fade transitions
function showSection(id) {
  document.querySelectorAll('.section-content').forEach(section => {
    section.style.opacity = '0';
    section.style.pointerEvents = 'none';
  });

  setTimeout(() => {
    document.querySelectorAll('.section-content').forEach(section => section.style.display = 'none');
    const target = document.getElementById(`section-${id}`);
    target.style.display = 'block';
    setTimeout(() => {
      target.style.opacity = '1';
      target.style.pointerEvents = 'auto';
    }, 50);
  }, 200);
}

// Tips
const tips = [
  { title: "Use the Pomodoro technique", category: "focus", detail: "Study in 25-minute chunks with 5-minute breaks. Keeps your brain fresh." },
  { title: "Visualize before sleeping", category: "motivation", detail: "Picture yourself solving problems or being calm during the test." },
  { title: "Celebrate small wins", category: "motivation", detail: "Reward yourself after finishing topics. It reinforces progress." },
  { title: "Don’t study tired", category: "rest", detail: "Rested brains learn faster. Sleep is not wasted time." },
  { title: "Start with the hardest task", category: "focus", detail: "Willpower is strongest early—use it to tackle tough topics first." },
];

function renderTips(filter = "all") {
  const container = document.getElementById("tips-container");
  container.innerHTML = "";
  tips
    .filter(t => filter === "all" || t.category === filter)
    .forEach(tip => {
      const box = document.createElement("div");
      box.className = "about-box expand-box";
      box.innerHTML = `
        <div class="expand-header">
          <strong>${tip.title}</strong>
          <span class="expand-arrow">▼</span>
        </div>
        <div class="tip-detail" style="display:none; margin-top:0.5rem;">
          ${tip.detail}
        </div>
      `;
      box.addEventListener("click", () => {
        const detail = box.querySelector(".tip-detail");
        const arrow = box.querySelector(".expand-arrow");
        const isOpen = detail.style.display === "block";
        detail.style.display = isOpen ? "none" : "block";
        arrow.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
      });
      container.appendChild(box);
    });
}

// Stories
const stories = [
  { tag: "motivation", title: "From zero to team member", detail: "I failed every mock at first. Eventually, I made the national team." },
  { tag: "stress", title: "I blanked in the room", detail: "I froze during bio theory. I took 10 seconds to breathe and started writing anything. It worked." },
  { tag: "failure", title: "One year of regret", detail: "I didn’t make round 2 on my first try. The next year, I placed 3rd." },
];

function renderStories(filter = "all") {
  const container = document.getElementById("stories-container");
  container.innerHTML = "";
  stories
    .filter(s => filter === "all" || s.tag === filter)
    .forEach(story => {
      const box = document.createElement("div");
      box.className = "about-box expand-box";
      box.innerHTML = `
        <div class="expand-header">
          <strong>${story.title}</strong>
          <span class="expand-arrow">▼</span>
        </div>
        <div class="story-detail" style="display:none; margin-top:0.5rem;">
          ${story.detail}
        </div>
      `;
      box.addEventListener("click", () => {
        const detail = box.querySelector(".story-detail");
        const arrow = box.querySelector(".expand-arrow");
        const isOpen = detail.style.display === "block";
        detail.style.display = isOpen ? "none" : "block";
        arrow.style.transform = isOpen ? "rotate(0deg)" : "rotate(180deg)";
      });
      container.appendChild(box);
    });
}

// Init
renderTips();
renderStories();
showSection('confidence'); // default view
