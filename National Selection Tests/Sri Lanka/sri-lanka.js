document.addEventListener("DOMContentLoaded", () => {
  const exams = [
    {
      year: 2024,
      difficulty: 3,
      paperLink: "Papers/2024SriLanka.pdf",
      solutionLink: "https://example.com/sri-lanka/2024-solutions.pdf"
    },
    {
      year: 2023,
      difficulty: 3,
      paperLink: "Papers/2023SriLanka.pdf",
      solutionLink: "https://example.com/sri-lanka/2023-solutions.pdf"
    },
    {
      year: 2022,
      difficulty: 4,
      paperLink: "Papers/2022SriLanka.pdf",
      solutionLink: "https://example.com/sri-lanka/2022-solutions.pdf"
    },
    {
      year: 2019,
      difficulty: 2,
      paperLink: "Papers/2019SriLanka.pdf",
      solutionLink: "https://example.com/sri-lanka/2019-solutions.pdf"
    },
    {
      year: 2018,
      difficulty: 1,
      paperLink: "Papers/2018SriLanka.pdf",
      solutionLink: "https://example.com/sri-lanka/2018-solutions.pdf"
    },
    {
      year: 2017,
      difficulty: 3,
      paperLink: "Papers/2017SriLanka.pdf",
      solutionLink: "Solutions/Final2017SriLanka.pdf"
    },
    {
      year: 2016,
      difficulty: 2,
      paperLink: "Papers/2016SriLanka.pdf",
      solutionLink: "Solutions/Final2016SriLanka.pdf"
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
