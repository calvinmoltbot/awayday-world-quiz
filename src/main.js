import "./styles.css";

const countries = [
  {
    id: "argentina",
    name: "Argentina",
    rank: 1,
    group: "top",
    flag: "flag-argentina",
    questions: [
      {
        prompt: "Which everyday item was invented by an Argentine doctor in the 1920s?",
        options: ["Ballpoint pen", "Disposable syringe", "Instant coffee", "Microwave oven"],
        answer: "Ballpoint pen",
        explanation:
          "Ladislao Biro, born in Budapest and later based in Argentina, patented the modern ballpoint pen there with his brother Georg.",
      },
      {
        prompt: "Argentina is home to one of the world's widest avenues. Which city is it in?",
        options: ["Buenos Aires", "Cordoba", "Mendoza", "Rosario"],
        answer: "Buenos Aires",
        explanation:
          "Avenida 9 de Julio in Buenos Aires is famous for its huge width and central obelisk.",
      },
      {
        prompt: "What dance and music style is strongly associated with Argentina?",
        options: ["Tango", "Flamenco", "Samba", "Fado"],
        answer: "Tango",
        explanation:
          "Tango grew around the Rio de la Plata region and became one of Argentina's best-known cultural exports.",
      },
      {
        prompt: "Which natural wonder does Argentina share with Brazil?",
        options: ["Iguazu Falls", "Lake Titicaca", "Angel Falls", "Salar de Uyuni"],
        answer: "Iguazu Falls",
        explanation:
          "Iguazu Falls sits on the Argentina-Brazil border and contains hundreds of cascades.",
      },
      {
        prompt: "What is the traditional Argentine tea-like drink served from a gourd?",
        options: ["Mate", "Chai", "Matcha", "Rooibos"],
        answer: "Mate",
        explanation:
          "Mate is made from yerba mate leaves and is often shared socially through a metal straw called a bombilla.",
      },
    ],
  },
  {
    id: "france",
    name: "France",
    rank: 2,
    group: "top",
    flag: "flag-france",
    questions: [
      {
        prompt: "Which French structure was originally criticised by many artists before becoming a national icon?",
        options: ["Eiffel Tower", "Louvre Pyramid", "Arc de Triomphe", "Centre Pompidou"],
        answer: "Eiffel Tower",
        explanation:
          "The Eiffel Tower was controversial when built for the 1889 World's Fair, but later became one of the world's most recognisable landmarks.",
      },
      {
        prompt: "Which French region is legally protected as the source of true Champagne?",
        options: ["Champagne", "Burgundy", "Normandy", "Provence"],
        answer: "Champagne",
        explanation:
          "Under protected designation rules, Champagne refers to sparkling wine from the Champagne region made under specific methods.",
      },
      {
        prompt: "Which museum is the Mona Lisa displayed in?",
        options: ["The Louvre", "Musee d'Orsay", "Centre Pompidou", "Palais de Tokyo"],
        answer: "The Louvre",
        explanation:
          "The Mona Lisa is displayed in the Louvre in Paris, one of the world's most visited museums.",
      },
      {
        prompt: "France has the most time zones of any country mainly because of what?",
        options: ["Overseas territories", "Daylight saving", "Mountain ranges", "Railway history"],
        answer: "Overseas territories",
        explanation:
          "French overseas departments and territories stretch across the globe, giving France an unusually wide time-zone footprint.",
      },
      {
        prompt: "Which French scientist helped develop pasteurisation?",
        options: ["Louis Pasteur", "Marie Curie", "Blaise Pascal", "Andre-Marie Ampere"],
        answer: "Louis Pasteur",
        explanation:
          "Louis Pasteur's work on microbes led to pasteurisation, vaccination advances, and major changes in public health.",
      },
    ],
  },
  {
    id: "spain",
    name: "Spain",
    rank: 3,
    group: "top",
    flag: "flag-spain",
    questions: [
      {
        prompt: "Which Spanish architect designed Barcelona's Sagrada Familia?",
        options: ["Antoni Gaudi", "Santiago Calatrava", "Rafael Moneo", "Ricardo Bofill"],
        answer: "Antoni Gaudi",
        explanation:
          "Gaudi's organic, highly detailed style shaped many of Barcelona's most famous buildings.",
      },
      {
        prompt: "What is Spain's national high-speed rail network commonly called?",
        options: ["AVE", "TGV", "ICE", "Shinkansen"],
        answer: "AVE",
        explanation:
          "AVE trains connect major Spanish cities and are among Europe's largest high-speed rail networks.",
      },
      {
        prompt: "Which island group includes Tenerife and Gran Canaria?",
        options: ["Canary Islands", "Balearic Islands", "Azores", "Madeira"],
        answer: "Canary Islands",
        explanation:
          "The Canary Islands are a Spanish archipelago off northwest Africa.",
      },
      {
        prompt: "Which Spanish dish traditionally uses saffron and a wide shallow pan?",
        options: ["Paella", "Gazpacho", "Tortilla", "Pisto"],
        answer: "Paella",
        explanation:
          "Paella originated in Valencia and is cooked in a broad pan that helps form the prized bottom crust.",
      },
      {
        prompt: "Which Spanish festival is famous for a massive tomato fight?",
        options: ["La Tomatina", "San Fermin", "Fallas", "Feria de Abril"],
        answer: "La Tomatina",
        explanation:
          "La Tomatina takes place in Bunol, near Valencia, and is known for its tomato-throwing crowd.",
      },
    ],
  },
  {
    id: "england",
    name: "England",
    rank: 4,
    group: "top",
    flag: "flag-england",
    questions: [
      {
        prompt: "Which document from 1215 is often cited in the history of constitutional law?",
        options: ["Magna Carta", "Domesday Book", "Bill of Rights", "Act of Union"],
        answer: "Magna Carta",
        explanation:
          "Magna Carta limited royal power and became a long-running symbol in legal and constitutional history.",
      },
      {
        prompt: "Which English city is associated with the world's first inter-city passenger railway?",
        options: ["Manchester", "Bristol", "Norwich", "York"],
        answer: "Manchester",
        explanation:
          "The Liverpool and Manchester Railway opened in 1830 and is often treated as the first modern inter-city railway.",
      },
      {
        prompt: "Which author created the detective Sherlock Holmes?",
        options: ["Arthur Conan Doyle", "Charles Dickens", "Agatha Christie", "J.R.R. Tolkien"],
        answer: "Arthur Conan Doyle",
        explanation:
          "Conan Doyle wrote the Sherlock Holmes stories, beginning in the late 19th century.",
      },
      {
        prompt: "What is the name of the prehistoric monument on Salisbury Plain?",
        options: ["Stonehenge", "Hadrian's Wall", "Avebury Tor", "Silbury Castle"],
        answer: "Stonehenge",
        explanation:
          "Stonehenge is a prehistoric stone circle and UNESCO World Heritage Site in Wiltshire.",
      },
      {
        prompt: "Which English scientist formulated laws of motion and universal gravitation?",
        options: ["Isaac Newton", "Charles Darwin", "Alan Turing", "Michael Faraday"],
        answer: "Isaac Newton",
        explanation:
          "Newton's work changed mathematics and physics, especially through his laws of motion and gravity.",
      },
    ],
  },
  {
    id: "brazil",
    name: "Brazil",
    rank: 5,
    group: "top",
    flag: "flag-brazil",
    questions: [
      {
        prompt: "Which river system is most associated with Brazil's vast rainforest?",
        options: ["Amazon", "Nile", "Congo", "Orinoco"],
        answer: "Amazon",
        explanation:
          "The Amazon basin covers a huge part of Brazil and contains the world's largest tropical rainforest.",
      },
      {
        prompt: "What is Brazil's capital city?",
        options: ["Brasilia", "Rio de Janeiro", "Sao Paulo", "Salvador"],
        answer: "Brasilia",
        explanation:
          "Brasilia was planned and built in the 20th century to move the capital inland.",
      },
      {
        prompt: "Which Brazilian festival is famous for samba schools and parades?",
        options: ["Carnival", "Oktoberfest", "Bumba Meu Boi", "Festa Junina"],
        answer: "Carnival",
        explanation:
          "Carnival is celebrated across Brazil, with Rio de Janeiro's samba parade among the best-known events.",
      },
      {
        prompt: "Which nut is named after Brazil but is mostly harvested from wild rainforest trees?",
        options: ["Brazil nut", "Cashew", "Macadamia", "Pecan"],
        answer: "Brazil nut",
        explanation:
          "Brazil nuts grow on enormous trees in the Amazon region and rely on a complex rainforest ecology.",
      },
      {
        prompt: "Which Brazilian city is famous for the Christ the Redeemer statue?",
        options: ["Rio de Janeiro", "Recife", "Manaus", "Fortaleza"],
        answer: "Rio de Janeiro",
        explanation:
          "Christ the Redeemer stands on Corcovado mountain above Rio de Janeiro.",
      },
    ],
  },
  {
    id: "san-marino",
    name: "San Marino",
    rank: 210,
    group: "underdog",
    flag: "flag-san-marino",
    questions: [
      {
        prompt: "San Marino is often described as one of the world's oldest what?",
        options: ["Republics", "Kingdoms", "Empires", "City districts"],
        answer: "Republics",
        explanation:
          "San Marino traces its founding tradition to 301 CE and is frequently called one of the oldest republics.",
      },
      {
        prompt: "San Marino is completely surrounded by which country?",
        options: ["Italy", "France", "Slovenia", "Austria"],
        answer: "Italy",
        explanation:
          "San Marino is a landlocked microstate enclaved within Italy.",
      },
      {
        prompt: "What is the name of San Marino's mountain capital landmark?",
        options: ["Monte Titano", "Monte Bianco", "Monte Rosa", "Monte Carlo"],
        answer: "Monte Titano",
        explanation:
          "Monte Titano and San Marino's historic centre are recognised as a UNESCO World Heritage Site.",
      },
      {
        prompt: "San Marino has two heads of state who serve together. What are they called?",
        options: ["Captains Regent", "Twin Dukes", "Joint Chancellors", "Civic Consuls"],
        answer: "Captains Regent",
        explanation:
          "The Captains Regent are elected every six months, a distinctive constitutional tradition.",
      },
      {
        prompt: "Which collectible item has San Marino long been known for issuing?",
        options: ["Postage stamps", "Vinyl records", "Playing cards", "Glass beads"],
        answer: "Postage stamps",
        explanation:
          "San Marino's stamps and coins have historically been important to collectors and tourism.",
      },
    ],
  },
  {
    id: "anguilla",
    name: "Anguilla",
    rank: 209,
    group: "underdog",
    flag: "flag-anguilla",
    questions: [
      {
        prompt: "Anguilla is in which region?",
        options: ["Caribbean", "Mediterranean", "Indian Ocean", "South Pacific"],
        answer: "Caribbean",
        explanation:
          "Anguilla is a British Overseas Territory in the eastern Caribbean.",
      },
      {
        prompt: "Anguilla's name comes from a word meaning what?",
        options: ["Eel", "Pearl", "Harbour", "Moon"],
        answer: "Eel",
        explanation:
          "The island's long, narrow shape led to a name derived from words for eel.",
      },
      {
        prompt: "Which industry is central to Anguilla's economy?",
        options: ["Tourism", "Car manufacturing", "Copper mining", "Timber exports"],
        answer: "Tourism",
        explanation:
          "Anguilla is known for beaches, resorts, and high-end tourism.",
      },
      {
        prompt: "What is Anguilla's capital?",
        options: ["The Valley", "Road Town", "Basseterre", "Bridgetown"],
        answer: "The Valley",
        explanation:
          "The Valley is Anguilla's capital and main administrative centre.",
      },
      {
        prompt: "Anguilla is especially known for beaches with what kind of sand?",
        options: ["White sand", "Black volcanic sand", "Red sand", "Green olivine sand"],
        answer: "White sand",
        explanation:
          "Its bright white-sand beaches are a major part of Anguilla's travel reputation.",
      },
    ],
  },
  {
    id: "british-virgin-islands",
    name: "British Virgin Islands",
    rank: 208,
    group: "underdog",
    flag: "flag-british-virgin-islands",
    questions: [
      {
        prompt: "The British Virgin Islands are famous in leisure travel for what activity?",
        options: ["Sailing", "Skiing", "Desert safaris", "Glacier hiking"],
        answer: "Sailing",
        explanation:
          "The BVI's sheltered waters and many islands make it a major sailing destination.",
      },
      {
        prompt: "What is the capital of the British Virgin Islands?",
        options: ["Road Town", "Hamilton", "George Town", "Kingstown"],
        answer: "Road Town",
        explanation:
          "Road Town is on Tortola, the largest island in the territory.",
      },
      {
        prompt: "The Baths, a famous BVI landmark, is known for what?",
        options: ["Granite boulders", "Hot springs", "Ancient pyramids", "Ice caves"],
        answer: "Granite boulders",
        explanation:
          "The Baths on Virgin Gorda is famous for giant granite boulders forming pools and grottoes.",
      },
      {
        prompt: "Which sea surrounds the British Virgin Islands?",
        options: ["Caribbean Sea", "Baltic Sea", "Arabian Sea", "Tasman Sea"],
        answer: "Caribbean Sea",
        explanation:
          "The islands sit in the Caribbean, east of Puerto Rico.",
      },
      {
        prompt: "Tortola means what in Spanish?",
        options: ["Turtle dove", "Little tower", "Golden beach", "Blue island"],
        answer: "Turtle dove",
        explanation:
          "Tortola is commonly linked to the Spanish word for turtle dove.",
      },
    ],
  },
  {
    id: "us-virgin-islands",
    name: "U.S. Virgin Islands",
    rank: 207,
    group: "underdog",
    flag: "flag-us-virgin-islands",
    questions: [
      {
        prompt: "The U.S. Virgin Islands were bought by the United States from which country?",
        options: ["Denmark", "Spain", "France", "Portugal"],
        answer: "Denmark",
        explanation:
          "The United States purchased the islands from Denmark in 1917.",
      },
      {
        prompt: "Which island is home to the capital, Charlotte Amalie?",
        options: ["St. Thomas", "St. Croix", "St. John", "Water Island"],
        answer: "St. Thomas",
        explanation:
          "Charlotte Amalie, on St. Thomas, is the capital and a historic port city.",
      },
      {
        prompt: "Which U.S. founding father spent part of his youth in the Virgin Islands?",
        options: ["Alexander Hamilton", "Benjamin Franklin", "Thomas Jefferson", "John Adams"],
        answer: "Alexander Hamilton",
        explanation:
          "Alexander Hamilton lived on St. Croix as a young man before moving to North America.",
      },
      {
        prompt: "Which national park covers much of St. John?",
        options: ["Virgin Islands National Park", "Dry Tortugas National Park", "Acadia National Park", "Biscayne National Park"],
        answer: "Virgin Islands National Park",
        explanation:
          "Virgin Islands National Park protects large areas of St. John, including beaches, coral reefs, and historic sites.",
      },
      {
        prompt: "Which side of the road do people drive on in the U.S. Virgin Islands?",
        options: ["Left", "Right", "It changes by island", "Only one-way roads"],
        answer: "Left",
        explanation:
          "The territory is unusual among U.S.-linked places because traffic keeps left.",
      },
    ],
  },
  {
    id: "turks-caicos",
    name: "Turks and Caicos Islands",
    rank: 206,
    group: "underdog",
    flag: "flag-turks-caicos",
    questions: [
      {
        prompt: "Turks and Caicos is especially known for which marine animal migration nearby?",
        options: ["Humpback whales", "Penguins", "Walruses", "Sea otters"],
        answer: "Humpback whales",
        explanation:
          "Humpback whales pass near the islands during seasonal migration.",
      },
      {
        prompt: "What colour is the water in many Turks and Caicos travel photos famous for?",
        options: ["Turquoise", "Black", "Ruby red", "Emerald brown"],
        answer: "Turquoise",
        explanation:
          "The islands are known for shallow, bright turquoise water and white-sand beaches.",
      },
      {
        prompt: "Which crop gives Salt Cay its name and history?",
        options: ["Sea salt", "Sugar cane", "Coffee", "Cotton"],
        answer: "Sea salt",
        explanation:
          "Salt production was historically important on several of the islands.",
      },
      {
        prompt: "What is the capital of Turks and Caicos?",
        options: ["Cockburn Town", "Providenciales", "Grand Turk", "Grace Bay"],
        answer: "Cockburn Town",
        explanation:
          "Cockburn Town, on Grand Turk, is the territory's capital.",
      },
      {
        prompt: "Turks and Caicos is a British what?",
        options: ["Overseas Territory", "County", "Crown Estate", "National park"],
        answer: "Overseas Territory",
        explanation:
          "Turks and Caicos is a British Overseas Territory in the Atlantic/Caribbean region.",
      },
    ],
  },
];

let currentGroup = "top";
let currentCountryIndex = 0;
let currentQuestionIndex = 0;

const countryList = document.querySelector("#countryList");
const bankGrid = document.querySelector("#bankGrid");
const tabs = document.querySelectorAll(".tab");
const countryName = document.querySelector("#countryName");
const rankPill = document.querySelector("#rankPill");
const roundLabel = document.querySelector("#roundLabel");
const activeFlag = document.querySelector("#activeFlag");
const questionText = document.querySelector("#questionText");
const answers = document.querySelector("#answers");
const reveal = document.querySelector("#reveal");
const correctAnswer = document.querySelector("#correctAnswer");
const explanation = document.querySelector("#explanation");
const prevQuestion = document.querySelector("#prevQuestion");
const nextQuestion = document.querySelector("#nextQuestion");

function groupCountries() {
  return countries.filter((country) => country.group === currentGroup);
}

function activeCountry() {
  return groupCountries()[currentCountryIndex];
}

function activeQuestion() {
  return activeCountry().questions[currentQuestionIndex];
}

function renderCountryList() {
  countryList.innerHTML = groupCountries()
    .map(
      (country, index) => `
        <button class="country-row ${index === currentCountryIndex ? "active" : ""}" data-index="${index}">
          <span class="flag mini-flag ${country.flag}"></span>
          <span>
            <strong>${country.name}</strong>
            <small>${country.questions.length} non-football questions</small>
          </span>
          <span class="rank">#${country.rank}</span>
        </button>
      `,
    )
    .join("");

  document.querySelectorAll(".country-row").forEach((row) => {
    row.addEventListener("click", () => {
      currentCountryIndex = Number(row.dataset.index);
      currentQuestionIndex = 0;
      render();
    });
  });
}

function renderQuiz() {
  const country = activeCountry();
  const question = activeQuestion();
  countryName.textContent = country.name;
  rankPill.textContent = `Rank #${country.rank}`;
  roundLabel.textContent = `${currentGroup === "top" ? "Top 5" : "Underdogs"} · Question ${currentQuestionIndex + 1} of ${country.questions.length}`;
  activeFlag.className = `flag ${country.flag}`;
  activeFlag.innerHTML = country.id === "argentina" ? '<span class="sun">✦</span>' : "";
  activeFlag.style.animation = "none";
  activeFlag.offsetHeight;
  activeFlag.style.animation = "";
  questionText.textContent = question.prompt;
  reveal.hidden = true;
  correctAnswer.textContent = "";
  explanation.textContent = "";
  answers.innerHTML = question.options
    .map((option) => `<button class="answer" data-answer="${option}">${option}</button>`)
    .join("");

  document.querySelectorAll(".answer").forEach((button) => {
    button.addEventListener("click", () => revealAnswer(button));
  });
}

function revealAnswer(selectedButton) {
  const question = activeQuestion();
  document.querySelectorAll(".answer").forEach((button) => {
    button.disabled = true;
    if (button.dataset.answer === question.answer) {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });
  reveal.hidden = false;
  correctAnswer.textContent = question.answer;
  explanation.textContent = question.explanation;
}

function renderBank() {
  bankGrid.innerHTML = countries
    .slice(0, 4)
    .map(
      (country) => `
      <article class="bank-card">
        <span class="flag mini-flag ${country.flag}"></span>
        <h3>${country.name}</h3>
        <ul>
          ${country.questions.slice(0, 3).map((question) => `<li>${question.prompt}</li>`).join("")}
        </ul>
      </article>
    `,
    )
    .join("");
}

function render() {
  renderCountryList();
  renderQuiz();
}

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    tabs.forEach((item) => item.classList.remove("active"));
    tab.classList.add("active");
    currentGroup = tab.dataset.group;
    currentCountryIndex = 0;
    currentQuestionIndex = 0;
    render();
  });
});

prevQuestion.addEventListener("click", () => {
  currentQuestionIndex =
    (currentQuestionIndex - 1 + activeCountry().questions.length) % activeCountry().questions.length;
  renderQuiz();
});

nextQuestion.addEventListener("click", () => {
  currentQuestionIndex = (currentQuestionIndex + 1) % activeCountry().questions.length;
  renderQuiz();
});

render();
renderBank();
