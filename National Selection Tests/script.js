document.addEventListener("DOMContentLoaded", () => {
  const countries = [
    {
      //difficulty only integer for now
      name: "Sri Lanka",
      difficulty: 2,
      flag: "https://flagcdn.com/lk.svg",
      link: "Sri Lanka/sri-lanka.html"
    },
    {
      name: "Serbia",
      difficulty: 4,
      flag: "https://flagcdn.com/rs.svg",
      link: "Serbia/serbia.html"
    },
    {
      name: "Australia",
      difficulty: 3,
      flag: "https://flagcdn.com/au.svg",
      link: "Australia/australia.html"
    },
    {
      name: "Romania",
      difficulty: 4,
      flag: "https://flagcdn.com/ro.svg",
      link: "Romania/romania.html"
    },
    {
      name: "Brazil",
      difficulty: 1,
      flag: "https://flagcdn.com/br.svg",
      link: "Brazil/brazil.html"
    },
    {
      name: "Costa Rica",
      difficulty: 1,
      flag: "https://flagcdn.com/cr.svg",
      link: "Costa Rica/costarica.html"
    },
    {
      name: "Cyprus",
      difficulty: 1,
      flag: "https://flagcdn.com/cy.svg",
      link: "Cyprus/cyprus.html"
    },
    {
      name: "Estonia",
      difficulty: 1,
      flag: "https://flagcdn.com/ee.svg",
      link: "Estonia/estonia.html"
    },
    {
      name: "Germany",
      difficulty: 1,
      flag: "https://flagcdn.com/de.svg",
      link: "Germany/germany.html"
    },
    {
      name: "Hong Kong",
      difficulty: 1,
      flag: "https://flagcdn.com/hk.svg",
      link: "Hong Kong/hongkong.html"
    },
    {
      name: "India",
      difficulty: 1,
      flag: "https://flagcdn.com/in.svg",
      link: "India/india.html"
    },
    {
      name: "Lithuania",
      difficulty: 1,
      flag: "https://flagcdn.com/lt.svg",
      link: "Lithuania/lithuania.html"
    },
    {
      name: "Romania",
      difficulty: 1,
      flag: "https://flagcdn.com/ro.svg",
      link: "Romania/romania.html"
    },
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
