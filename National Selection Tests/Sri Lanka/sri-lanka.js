document.addEventListener("DOMContentLoaded", () => {
  const exams = [
    {
      year: 2024,
      difficulty: 3,
      paperLink: "Papers/2024SriLanka.pdf",
      solutionLink: ""
    },
    {
      year: 2023,
      difficulty: 3,
      paperLink: "Papers/2023SriLanka.pdf",
      solutionLink: ""
    },
    {
      year: 2022,
      difficulty: 4,
      paperLink: "Papers/2022SriLanka.pdf",
      solutionLink: ""
    },
    {
      year: 2019,
      difficulty: 2,
      paperLink: "Papers/2019SriLanka.pdf",
      solutionLink: ""
    },
    {
      year: 2018,
      difficulty: 1,
      paperLink: "Papers/2018SriLanka.pdf",
      solutionLink: ""
    },
    {
      year: 2017,
      difficulty: 3,
      paperLink: "Papers/2017SriLanka.pdf",
      solutionLink: ""
    },
    {
      year: 2016,
      difficulty: 2,
      paperLink: "Papers/2016SriLanka.pdf",
      solutionLink: ""
    }
  ];

  function renderExams(list) {
    const grid = document.getElementById("examGrid");
    grid.innerHTML = "";

    list.forEach(exam => {
      const card = document.createElement("div");
      card.className = "card";

      const year = document.createElement("div");
      year.className = "year";
      year.textContent = exam.year;

      const stars = document.createElement("div");
      stars.className = "stars";
      stars.innerHTML = "★".repeat(exam.difficulty) + "☆".repeat(5 - exam.difficulty);

      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.innerHTML = `
        <a href="${exam.paperLink}" target="_blank">Paper</a>
        <a href="${exam.solutionLink}" target="_blank">Solutions</a>
      `;

      card.appendChild(year);
      card.appendChild(stars);
      card.appendChild(tooltip);

      grid.appendChild(card);
    });
  }

  function sortByDifficulty(ascending = true) {
    const sorted = [...exams].sort((a, b) =>
      ascending ? a.difficulty - b.difficulty : b.difficulty - a.difficulty
    );
    renderExams(sorted);
  }

  window.sortByDifficulty = sortByDifficulty;

  renderExams(exams);
});
