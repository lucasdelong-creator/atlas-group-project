
const characters = [
    {
    name: "Link",
    role: "Hero of Hyrule",
    race: "Hylian",
    description: "The main playable character and chosen hero.", 
    
    image: "assets/css/Link.jpg"                                  
  },

  {
    name: "Zelda",
    role: "Princess of Hyrule",
    race: "Hylian",
    description: "Holds the power to seal Calamity Ganon."
  },
  {
    name: "Mipha",
    role: "Zora Champion",
    race: "Zora",
    description: "Pilot of Divine Beast Vah Ruta and healer."
  },
  {
    name: "Urbosa",
    role: "Gerudo Champion",
    race: "Gerudo",
    description: "Pilot of Divine Beast Vah Naboris and Gerudo chief."
  }
];


const form = document.getElementById("character-form");
const searchInput = document.getElementById("search-input");
const cardsDiv = document.getElementById("cards");
const status = document.getElementById("status");


renderCards(characters);


form.addEventListener("submit", function (event) {
  event.preventDefault();

  const query = searchInput.value.trim().toLowerCase();

  if (query === "") {
    renderCards(characters);
    status.textContent = "Showing all characters.";
    return;
  }

  const filtered = characters.filter(function (c) {
    return c.name.toLowerCase().includes(query);
  });

  renderCards(filtered);

  if (filtered.length === 0) {
    status.textContent = 'No characters found for "' + query + '".';
  } else {
    status.textContent = "Showing " + filtered.length + " result(s).";
  }
});


function renderCards(list) {
  cardsDiv.innerHTML = "";

  list.forEach(function (c) {
    const card = document.createElement("article");
    card.className = "card";

    if (c.image) {
      const img = document.createElement("img");
      img.src = c.image;
      img.alt = c.name;
      img.className = "card-image";
      card.appendChild(img);
    }

    const name = document.createElement("h3");
    name.textContent = c.name;

    const role = document.createElement("p");
    role.textContent = "Role: " + c.role;

    const race = document.createElement("p");
    race.textContent = "Race: " + c.race;

    const desc = document.createElement("p");
    desc.textContent = c.description;

    card.appendChild(name);
    card.appendChild(role);
    card.appendChild(race);
    card.appendChild(desc);

    cardsDiv.appendChild(card);
  });
}
