const toggleSearchFilters = document.querySelector("#toggleSearchFilters");
const searchCards = document.querySelector("#searchCards");
const tierContainer = document.querySelector("#tier-container");
const typefilter = document.querySelector("#filter-type");
const attributefilter = document.querySelector("#filter-attribute");
const raceFilter = document.querySelector("#filter-race");
const archetypeFilter = document.querySelector("#filter-archetype");
const raritiesFilter = document.querySelector("#filter-rarity");
const formatFilter = document.querySelector("#filter-format");
const effectFilter = document.querySelector("#filter-effect");

const urlInput = document.querySelector("#adresseAPI");
const nbRowElement = document.querySelector("#nbRows");

let images = [];
let currentSize = 7;

function init() {
  nbRowElement.value = currentSize;
  initLists();
  toggleSearchFilters
    .querySelectorAll("input[type='range']")
    .forEach((element) => {
      element.addEventListener("change", async () => {
        var idObj = element.id.replace("card", "");
        document.querySelector(`#${idObj}Label`).value = element.value;
      });
    });
  toggleSearchFilters
    .querySelectorAll("input[type='number']")
    .forEach((element) => {
      element.addEventListener("change", async () => {
        var idObj = element.id.replace("Label", "");
        document.querySelector(`#card${idObj}`).value = element.value;
      });
    });
  document.querySelectorAll(".settings").forEach((gear, index) => {
    gear.addEventListener("click", () => {
      formParameters(index);
    });
  });
}
init();

// searchCards.addEventListener("change", requestImage);

nbRowElement.addEventListener("change", () => {
  if (currentSize != nbRowElement.value) {
    if (currentSize > nbRowElement.value) {
      deleteRows(nbRowElement.value);
    } else {
      addRows(currentSize, nbRowElement.value);
    }
  }
  currentSize = nbRowElement.value;
});
function resetAll() {
  toggleSearchFilters.querySelectorAll("select").forEach((objet) => {
    objet.value = objet.options[0].text;
  });
  toggleSearchFilters
    .querySelectorAll("input[type='range']")
    .forEach((objet) => {
      objet.value = 0;
    });
  toggleSearchFilters
    .querySelectorAll("input[type='number']")
    .forEach((objet) => {
      objet.value = 0;
    });
}

async function initLists() {
  initType();
  initAttribute();
  initRace();
  initArchetypes();
  initRarities();
}

function initType() {
  let response = [
    "Spell Card",
    "Trap Card",
    "Normal Monster",
    "Normal Tuner Monster",
    "Effect Monster",
    "Tuner Monster",
    "Flip Effect Monster",
    "Spirit Monster",
    "Union Effect Monster",
    "Gemini Monster",
    "Pendulum Effect Monster",
    "Pendulum Normal Monster",
    "Pendulum Tuner Effect Monster",
    "Ritual Monster",
    "Ritual Effect Monster",
    "Toon Monster",
    "Fusion Monster",
    "Synchro Monster",
    "Synchro Tuner Monster",
    "Synchro Pendulum Effect Monster",
    "XYZ Monster",
    "XYZ Pendulum Effect Monster",
    "Link Monster",
    "Pendulum Flip Effect Monster",
    "Pendulum Effect Fusion Monster",
    "Token",
  ];
  response.forEach((card) => {
    let opt = document.createElement("option");
    opt.text = card.replace(card[0], card[0].toUpperCase());
    typefilter.appendChild(opt);
  });
}
function initAttribute() {
  let response = ["dark", "earth", "fire", "light", "water", "wind", "divine"];
  response.forEach((card) => {
    let opt = document.createElement("option");
    opt.text = card.replace(card[0], card[0].toUpperCase());
    attributefilter.appendChild(opt);
  });
}
function initRace() {
  let response = [
    "continuous",
    "zombie",
    "fiend",
    "normal",
    "quick-play",
    "rock",
    "warrior",
    "winged beast",
    "spellcaster",
    "beast",
    "fairy",
    "equip",
    "field",
    "fish",
    "beast-warrior",
    "thunder",
    "machine",
    "sea serpent",
    "aqua",
    "plant",
    "dragon",
    "reptile",
    "counter",
    "psychic",
    "insect",
    "pyro",
    "dinosaur",
    "wyrm",
    "cyberse",
    "illusion",
    "ritual",
    "divine-beast",
    "creator-god",
    "cyverse",
    "mai",
    "pegasus",
    "ishizu",
    "joey",
    "kaiba",
    "yugi",
  ];

  response.forEach((card) => {
    let opt = document.createElement("option");
    opt.text = card.replace(card[0], card[0].toUpperCase());
    raceFilter.appendChild(opt);
  });
}
async function initArchetypes() {
  let response = await fetch(
    "https://db.ygoprodeck.com/api/v7/archetypes.php"
  ).then((res) => res.json());
  response.forEach((card) => {
    let opt = document.createElement("option");
    opt.text = card.archetype_name;
    archetypeFilter.appendChild(opt);
  });
}
function initRarities() {
  let response = [
    "10000 Secret Rare",
    "c",
    "Collector's Rare",
    "Collectors Rare",
    "Common",
    "DNRPR",
    "Duel Terminal Normal Parallel Rare",
    "Duel Terminal Normal Rare Parallel Rare",
    "Duel Terminal Rare Parallel Rare",
    "Duel Terminal Secret Parallel Rare",
    "Duel Terminal Super Parallel Rare",
    "Duel Terminal Ultra Parallel Rare",
    "EScR",
    "Extra Secret",
    "Extra Secret Parallel Rare",
    "Extra Secret Rare",
    "Ghost Rare",
    "Ghost/Gold Rare",
    "Gold Rare",
    "Gold Secret Rare",
    "Holographic Parallel Rare",
    "Holographic Rare",
    "Kaiba Corporation Common",
    "Kaiba Corporation Rare",
    "Kaiba Corporation Ultra Rare",
    "Millennium Gold Rare",
    "Millennium Rare",
    "Millennium Secret Rare",
    "Millennium Super Rare",
    "Millennium Ultra Rare",
    "Mosaic Rare",
    "N",
    "New",
    "Normal Parallel Rare",
    "Normal Rare",
    "NPR",
    "NR",
    "PGR",
    "Platinum Rare",
    "Platinum Secret Rare",
    "Premium Gold Rare",
    "Prismatic Secret Rare",
    "PScr",
    "QCScR",
    "Quarter Century Secret Rare",
    "Rare",
    "ScPR",
    "SCR",
    "Secret Parallel Rare",
    "Secret Rare",
    "Shatterfoil Rare",
    "Short Print",
    "Sjper Parallel Rare",
    "Starfoil",
    "Starfoil Rare",
    "Starlight Rare",
    "Super",
    "Super Parallel Rare",
    "Super Rare",
    "Super Short Print",
    "Ultimate Rare",
    "Ultra Parallel Rare",
    "Ultra Rare",
    "Ultra Rare (Pharaoh's Rare)",
    "Ultra Secret Rare",
    "Unknown",
  ];
  response.forEach((card) => {
    let opt = document.createElement("option");
    opt.text = card.replace(card[0], card[0].toUpperCase());
    raritiesFilter.appendChild(opt);
  });
}

async function requestImage() {
  urlSearch = "https://db.ygoprodeck.com/api/v7/cardinfo.php?";
  // console.log(objet.id.replace("filter-", ""));
  for (
    let index = 0;
    index < toggleSearchFilters.querySelectorAll("select").length;
    index++
  ) {
    const element = toggleSearchFilters.querySelectorAll("select")[index];
    if (element.value != element.options[0].text) {
      urlSearch += `&${element.id.replace("filter-", "")}=${encodeURIComponent(
        element.value
      )}`;
    }
  }
  for (
    let index = 0;
    index < toggleSearchFilters.querySelectorAll("input[type='number']").length;
    index++
  ) {
    const element = toggleSearchFilters.querySelectorAll(
      "input[type='number']"
    )[index];
    if (element.value != 0) {
      urlSearch += `&${element.id.replace("Label", "")}=${encodeURIComponent(
        element.value
      )}`;
    }
  }
  console.log(urlSearch);
  document
    .querySelectorAll(".tier.sort")
    .forEach((element) => (element.innerHTML = ""));
  images = [];
  if (urlSearch != "https://db.ygoprodeck.com/api/v7/cardinfo.php?") {
    let response = await fetch(urlSearch).then((res) => res.json());
    response.data.forEach((card) => {
      images.push(card.card_images[0].image_url_cropped);
    });
    //   console.log(images);
    document.querySelector("#searchCards > div").classList.toggle("d-none");
    getImages();
  }
}
