document.addEventListener("DOMContentLoaded", () => {
  const countries = [
    {
      //difficulty only integer for now
      name: "Sri Lanka",
      difficulty: 2,
      flag: "https://flagcdn.com/lk.svg",
      link: "https://example.com/srilanka-exams"
    },
    {
      name: "India",
      difficulty: 5,
      flag: "https://flagcdn.com/in.svg",
      link: "https://example.com/india-exams"
    },
    {
      name: "Serbia",
      difficulty: 4,
      flag: "https://flagcdn.com/rs.svg",
      link: "https://example.com/serbian-exams"
    },
    {
      name: "Australia",
      difficulty: 3,
      flag: "https://flagcdn.com/au.svg",
      link: "https://example.com/aussie-exams"
    },
    {
      name: "Romania",
      difficulty: 4,
      flag: "https://flagcdn.com/ro.svg",
      link: "https://example.com/romanian-exams"
    }
    //ADD MORE COUNTRIES HERE
    //CHANGE THE PLACEHOLDER LINKS
  ];

  function renderCountries(list) {
    const grid = document.getElementById("examGrid");
    grid.innerHTML = "";

    list.forEach(country => {
      const card = document.createElement("div");
      card.className = "card";
      card.style.backgroundImage = `url(${country.flag})`;
      card.style.backgroundSize = "cover";
      card.style.backgroundPosition = "center";
      card.style.cursor = "pointer";

      
      card.onclick = () => {
        window.open(country.link, "_blank");
      };

      const overlay = document.createElement("div");
      overlay.className = "overlay";

      const countryName = document.createElement("div");
      countryName.className = "country";
      countryName.textContent = country.name;

      const stars = document.createElement("div");
      stars.className = "stars";
      stars.innerHTML = "★".repeat(country.difficulty) + "☆".repeat(5 - country.difficulty);

      overlay.appendChild(countryName);
      overlay.appendChild(stars);
      card.appendChild(overlay);
      grid.appendChild(card);
    });
  }

  function sortByDifficulty(ascending = true) {
    const sorted = [...countries].sort((a, b) =>
      ascending ? a.difficulty - b.difficulty : b.difficulty - a.difficulty
    );
    renderCountries(sorted);
  }

  window.sortByDifficulty = sortByDifficulty;

  renderCountries(countries);
});
