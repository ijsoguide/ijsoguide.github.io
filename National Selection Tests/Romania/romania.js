document.addEventListener("DOMContentLoaded", () => {
  const exams = [
    {
      title: "2023 Nationals",
      difficulty: 3,
      paperRO: "https://example.com/romania/2023-paper-ro.pdf",
      paperEN: "https://example.com/romania/2023-paper-en.pdf",
      solutionsRO: "https://example.com/romania/2023-solutions-ro.pdf",
      solutionsEN: "https://example.com/romania/2023-solutions-en.pdf"
    },
    {
      title: "2023 Regionals",
      difficulty: 2,
      paperRO: "https://example.com/romania/2023-regionals-paper-ro.pdf",
      paperEN: "https://example.com/romania/2023-regionals-paper-en.pdf",
      solutionsRO: "https://example.com/romania/2023-regionals-solutions-ro.pdf",
      solutionsEN: "https://example.com/romania/2023-regionals-solutions-en.pdf"
    },
    {
      title: "2022 Nationals",
      difficulty: 3,
      paperRO: "https://example.com/romania/2023-paper-ro.pdf",
      paperEN: "https://example.com/romania/2023-paper-en.pdf",
      solutionsRO: "https://example.com/romania/2023-solutions-ro.pdf",
      solutionsEN: "https://example.com/romania/2023-solutions-en.pdf"
    },
    {
      title: "2022 Regionals",
      difficulty: 2,
      paperRO: "https://example.com/romania/2023-regionals-paper-ro.pdf",
      paperEN: "https://example.com/romania/2023-regionals-paper-en.pdf",
      solutionsRO: "https://example.com/romania/2023-regionals-solutions-ro.pdf",
      solutionsEN: "https://example.com/romania/2023-regionals-solutions-en.pdf"
    },
    {
      title: "2021 Nationals",
      difficulty: 3,
      paperRO: "https://example.com/romania/2023-paper-ro.pdf",
      paperEN: "https://example.com/romania/2023-paper-en.pdf",
      solutionsRO: "https://example.com/romania/2023-solutions-ro.pdf",
      solutionsEN: "https://example.com/romania/2023-solutions-en.pdf"
    },
    {
      title: "2021 Regionals",
      difficulty: 2,
      paperRO: "https://example.com/romania/2023-regionals-paper-ro.pdf",
      paperEN: "https://example.com/romania/2023-regionals-paper-en.pdf",
      solutionsRO: "https://example.com/romania/2023-regionals-solutions-ro.pdf",
      solutionsEN: "https://example.com/romania/2023-regionals-solutions-en.pdf"
    },
    {
      title: "2020 Nationals",
      difficulty: 3,
      paperRO: "https://example.com/romania/2023-paper-ro.pdf",
      paperEN: "https://example.com/romania/2023-paper-en.pdf",
      solutionsRO: "https://example.com/romania/2023-solutions-ro.pdf",
      solutionsEN: "https://example.com/romania/2023-solutions-en.pdf"
    },
    {
      title: "2020 Regionals",
      difficulty: 2,
      paperRO: "https://example.com/romania/2023-regionals-paper-ro.pdf",
      paperEN: "https://example.com/romania/2023-regionals-paper-en.pdf",
      solutionsRO: "https://example.com/romania/2023-regionals-solutions-ro.pdf",
      solutionsEN: "https://example.com/romania/2023-regionals-solutions-en.pdf"
    },
    {
      title: "2019 Nationals",
      difficulty: 3,
      paperRO: "https://example.com/romania/2023-paper-ro.pdf",
      paperEN: "https://example.com/romania/2023-paper-en.pdf",
      solutionsRO: "https://example.com/romania/2023-solutions-ro.pdf",
      solutionsEN: "https://example.com/romania/2023-solutions-en.pdf"
    },
    {
      title: "2019 Regionals",
      difficulty: 2,
      paperRO: "https://example.com/romania/2023-regionals-paper-ro.pdf",
      paperEN: "https://example.com/romania/2023-regionals-paper-en.pdf",
      solutionsRO: "https://example.com/romania/2023-regionals-solutions-ro.pdf",
      solutionsEN: "https://example.com/romania/2023-regionals-solutions-en.pdf"
    },
    {
      title: "2018 Nationals",
      difficulty: 3,
      paperRO: "https://example.com/romania/2023-paper-ro.pdf",
      paperEN: "https://example.com/romania/2023-paper-en.pdf",
      solutionsRO: "https://example.com/romania/2023-solutions-ro.pdf",
      solutionsEN: "https://example.com/romania/2023-solutions-en.pdf"
    },
    {
      title: "2018 Regionals",
      difficulty: 2,
      paperRO: "https://example.com/romania/2023-regionals-paper-ro.pdf",
      paperEN: "https://example.com/romania/2023-regionals-paper-en.pdf",
      solutionsRO: "https://example.com/romania/2023-regionals-solutions-ro.pdf",
      solutionsEN: "https://example.com/romania/2023-regionals-solutions-en.pdf"
    },
    {
      title: "2017 Nationals",
      difficulty: 3,
      paperRO: "https://example.com/romania/2023-paper-ro.pdf",
      paperEN: "https://example.com/romania/2023-paper-en.pdf",
      solutionsRO: "https://example.com/romania/2023-solutions-ro.pdf",
      solutionsEN: "https://example.com/romania/2023-solutions-en.pdf"
    },
    {
      title: "2017 Regionals",
      difficulty: 2,
      paperRO: "https://example.com/romania/2023-regionals-paper-ro.pdf",
      paperEN: "https://example.com/romania/2023-regionals-paper-en.pdf",
      solutionsRO: "https://example.com/romania/2023-regionals-solutions-ro.pdf",
      solutionsEN: "https://example.com/romania/2023-regionals-solutions-en.pdf"
    },
    {
      title: "2016 Nationals",
      difficulty: 3,
      paperRO: "https://example.com/romania/2023-paper-ro.pdf",
      paperEN: "https://example.com/romania/2023-paper-en.pdf",
      solutionsRO: "https://example.com/romania/2023-solutions-ro.pdf",
      solutionsEN: "https://example.com/romania/2023-solutions-en.pdf"
    },
    {
      title: "2016 Regionals",
      difficulty: 2,
      paperRO: "https://example.com/romania/2023-regionals-paper-ro.pdf",
      paperEN: "https://example.com/romania/2023-regionals-paper-en.pdf",
      solutionsRO: "https://example.com/romania/2023-regionals-solutions-ro.pdf",
      solutionsEN: "https://example.com/romania/2023-regionals-solutions-en.pdf"
    },
    {
      title: "2015 Nationals",
      difficulty: 3,
      paperRO: "https://example.com/romania/2023-paper-ro.pdf",
      paperEN: "https://example.com/romania/2023-paper-en.pdf",
      solutionsRO: "https://example.com/romania/2023-solutions-ro.pdf",
      solutionsEN: "https://example.com/romania/2023-solutions-en.pdf"
    },
    {
      title: "2015 Regionals",
      difficulty: 2,
      paperRO: "https://example.com/romania/2023-regionals-paper-ro.pdf",
      paperEN: "https://example.com/romania/2023-regionals-paper-en.pdf",
      solutionsRO: "https://example.com/romania/2023-regionals-solutions-ro.pdf",
      solutionsEN: "https://example.com/romania/2023-regionals-solutions-en.pdf"
    },
  ];

  function renderExams(list) {
    const grid = document.getElementById("examGrid");
    grid.innerHTML = "";

    list.forEach(exam => {
      const card = document.createElement("div");
      card.className = "card";

      const title = document.createElement("div");
      title.className = "year";
      title.textContent = exam.title;

      const stars = document.createElement("div");
      stars.className = "stars";
      stars.innerHTML = "★".repeat(exam.difficulty) + "☆".repeat(5 - exam.difficulty);

      const tooltip = document.createElement("div");
      tooltip.className = "tooltip";
      tooltip.innerHTML = `
        <a href="${exam.paperRO}" target="_blank">Paper (RO)</a>
        <a href="${exam.paperEN}" target="_blank">Paper (EN)</a>
        <a href="${exam.solutionsRO}" target="_blank">Solutions (RO)</a>
        <a href="${exam.solutionsEN}" target="_blank">Solutions (EN)</a>
      `;

      card.appendChild(title);
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
