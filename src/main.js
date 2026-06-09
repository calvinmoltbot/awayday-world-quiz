import "./styles.css";
import * as THREE from "three";

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

const app = document.querySelector("#app");
const flagTextureCache = new Map();
let activeFlagRenderers = [];

const ideas = [
  {
    title: "Company World Cup",
    body: "Departments become countries. Rounds cover office lore, project landmarks, client geography, and mystery metrics.",
  },
  {
    title: "Passport Stamp Relay",
    body: "Stations around the room with fast challenges: taste, map, emoji translation, speed puzzle, and mini pitch.",
  },
  {
    title: "Pitch Deck or Fiction?",
    body: "Teams decide whether dramatic business statements are from real decks, press releases, or pure invention.",
  },
  {
    title: "Inbox Archaeology",
    body: "Harmless company history becomes the quiz: old product names, launch dates, team rituals, and mystery screenshots.",
  },
];

const state = {
  view: "intro",
  group: "top",
  countryIndex: 0,
  questionIndex: 0,
  selectedAnswer: "",
};

function countriesForGroup() {
  return countries.filter((country) => country.group === state.group);
}

function orderedQuizCountries() {
  return [
    ...countries.filter((country) => country.group === "top"),
    ...countries.filter((country) => country.group === "underdog"),
  ];
}

function currentCountry() {
  return countriesForGroup()[state.countryIndex];
}

function currentQuestion() {
  return currentCountry().questions[state.questionIndex];
}

function flagMarkup(country, size = "large") {
  return `
    <div class="flag-scene ${size}" data-flag-id="${country.id}" aria-label="${country.name} flag">
      <div class="flag-pole"></div>
      <div class="flag-cord"></div>
      <div class="flag-canvas-wrap"></div>
    </div>
  `;
}

function initFlagScenes() {
  document.querySelectorAll(".flag-scene").forEach((element) => {
    const country = countries.find((item) => item.id === element.dataset.flagId);
    if (!country) return;
    activeFlagRenderers.push(createFlagRenderer(element, country));
  });
}

function disposeFlagScenes() {
  activeFlagRenderers.forEach((flag) => flag.dispose());
  activeFlagRenderers = [];
}

function createFlagRenderer(element, country) {
  const mount = element.querySelector(".flag-canvas-wrap");
  const scene = new THREE.Scene();
  const camera = new THREE.OrthographicCamera(-2.08, 2.08, 1.28, -1.28, 0.1, 20);
  camera.position.set(0, 0, 6);

  const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true,
    preserveDrawingBuffer: true,
    powerPreference: "high-performance",
  });
  renderer.setClearColor(0x000000, 0);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  mount.appendChild(renderer.domElement);

  const geometry = new THREE.PlaneGeometry(3.85, 2.2, 112, 46);
  const basePositions = Float32Array.from(geometry.attributes.position.array);
  const texture = getFlagTexture(country.id);
  const material = new THREE.MeshPhongMaterial({
    map: texture,
    side: THREE.DoubleSide,
    shininess: 38,
    specular: new THREE.Color(0x33475f),
  });

  const mesh = new THREE.Mesh(geometry, material);
  mesh.position.x = 0.18;
  mesh.rotation.y = -0.18;
  scene.add(mesh);

  scene.add(new THREE.AmbientLight(0xffffff, 1.25));
  const keyLight = new THREE.DirectionalLight(0xffffff, 2.1);
  keyLight.position.set(-1.5, 2.5, 4);
  scene.add(keyLight);
  const rimLight = new THREE.DirectionalLight(0x7fc7ff, 0.9);
  rimLight.position.set(2, -1.5, 3);
  scene.add(rimLight);

  let frameId = 0;
  let disposed = false;

  function resize() {
    const rect = mount.getBoundingClientRect();
    const width = Math.max(1, Math.floor(rect.width));
    const height = Math.max(1, Math.floor(rect.height));
    renderer.setSize(width, height, false);
    camera.left = -2.08;
    camera.right = 2.08;
    camera.top = 1.28;
    camera.bottom = -1.28;
    camera.updateProjectionMatrix();
  }

  function animate(time = 0) {
    if (disposed) return;
    const seconds = time * 0.001;
    const positions = geometry.attributes.position.array;
    for (let index = 0; index < positions.length; index += 3) {
      const baseX = basePositions[index];
      const baseY = basePositions[index + 1];
      const progress = THREE.MathUtils.clamp((baseX + 1.925) / 3.85, 0, 1);
      const looseness = progress * progress;
      const gust = Math.sin(seconds * 0.85) * 0.18;
      const waveA = Math.sin(progress * Math.PI * 3.4 + seconds * 2.4 + gust);
      const waveB = Math.sin(progress * Math.PI * 8.2 - seconds * 3.1);
      positions[index] = baseX + Math.sin(progress * Math.PI * 2.1 + seconds * 1.2) * 0.055 * looseness;
      positions[index + 1] = baseY + (waveB * 0.035 + Math.cos(seconds * 1.7 + progress * 4) * 0.02) * looseness;
      positions[index + 2] = (waveA * 0.32 + waveB * 0.08) * looseness;
    }
    geometry.attributes.position.needsUpdate = true;
    geometry.computeVertexNormals();
    mesh.rotation.z = Math.sin(seconds * 0.7) * 0.018;
    renderer.render(scene, camera);
    frameId = requestAnimationFrame(animate);
  }

  resize();
  animate();
  const resizeObserver = new ResizeObserver(resize);
  resizeObserver.observe(mount);

  return {
    dispose() {
      disposed = true;
      cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      geometry.dispose();
      material.dispose();
      renderer.dispose();
      renderer.domElement.remove();
    },
  };
}

function getFlagTexture(countryId) {
  if (flagTextureCache.has(countryId)) return flagTextureCache.get(countryId);
  const canvas = document.createElement("canvas");
  canvas.width = 1200;
  canvas.height = 720;
  const ctx = canvas.getContext("2d");
  drawFlag(ctx, countryId, canvas.width, canvas.height);
  const texture = new THREE.CanvasTexture(canvas);
  texture.colorSpace = THREE.SRGBColorSpace;
  texture.anisotropy = 8;
  texture.needsUpdate = true;
  flagTextureCache.set(countryId, texture);
  return texture;
}

function drawFlag(ctx, countryId, width, height) {
  ctx.clearRect(0, 0, width, height);
  const stripe = (color, x, y, w, h) => {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, w, h);
  };

  if (countryId === "argentina") {
    stripe("#75aadb", 0, 0, width, height / 3);
    stripe("#ffffff", 0, height / 3, width, height / 3);
    stripe("#75aadb", 0, (height / 3) * 2, width, height / 3);
    drawSun(ctx, width / 2, height / 2, height * 0.095);
  } else if (countryId === "france") {
    stripe("#002654", 0, 0, width / 3, height);
    stripe("#ffffff", width / 3, 0, width / 3, height);
    stripe("#ce1126", (width / 3) * 2, 0, width / 3, height);
  } else if (countryId === "spain") {
    stripe("#aa151b", 0, 0, width, height * 0.25);
    stripe("#f1bf00", 0, height * 0.25, width, height * 0.5);
    stripe("#aa151b", 0, height * 0.75, width, height * 0.25);
  } else if (countryId === "england") {
    stripe("#ffffff", 0, 0, width, height);
    stripe("#c8102e", width * 0.43, 0, width * 0.14, height);
    stripe("#c8102e", 0, height * 0.39, width, height * 0.22);
  } else if (countryId === "brazil") {
    stripe("#009b3a", 0, 0, width, height);
    ctx.fillStyle = "#ffdf00";
    ctx.beginPath();
    ctx.moveTo(width / 2, height * 0.12);
    ctx.lineTo(width * 0.88, height / 2);
    ctx.lineTo(width / 2, height * 0.88);
    ctx.lineTo(width * 0.12, height / 2);
    ctx.closePath();
    ctx.fill();
    ctx.fillStyle = "#002776";
    ctx.beginPath();
    ctx.arc(width / 2, height / 2, height * 0.19, 0, Math.PI * 2);
    ctx.fill();
  } else if (countryId === "san-marino") {
    stripe("#ffffff", 0, 0, width, height / 2);
    stripe("#5eb6e4", 0, height / 2, width, height / 2);
    drawBadge(ctx, width / 2, height / 2, height * 0.1, "#f2c14e", "#3a9c6d");
  } else if (countryId === "us-virgin-islands") {
    stripe("#ffffff", 0, 0, width, height);
    drawBadge(ctx, width / 2, height / 2, height * 0.15, "#f2c14e", "#4f78c7");
  } else {
    drawBlueEnsign(ctx, width, height, countryId);
  }

  const gradient = ctx.createLinearGradient(0, 0, width, 0);
  gradient.addColorStop(0, "rgba(255,255,255,0.22)");
  gradient.addColorStop(0.18, "rgba(255,255,255,0)");
  gradient.addColorStop(0.34, "rgba(0,0,0,0.14)");
  gradient.addColorStop(0.5, "rgba(255,255,255,0.16)");
  gradient.addColorStop(0.7, "rgba(0,0,0,0.12)");
  gradient.addColorStop(1, "rgba(255,255,255,0.08)");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);
}

function drawSun(ctx, x, y, radius) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = "#f6b40e";
  for (let i = 0; i < 16; i += 1) {
    ctx.rotate(Math.PI / 8);
    ctx.beginPath();
    ctx.moveTo(0, -radius * 1.7);
    ctx.lineTo(radius * 0.16, -radius * 0.72);
    ctx.lineTo(-radius * 0.16, -radius * 0.72);
    ctx.closePath();
    ctx.fill();
  }
  ctx.beginPath();
  ctx.arc(0, 0, radius * 0.7, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();
}

function drawBadge(ctx, x, y, radius, outer, inner) {
  ctx.fillStyle = outer;
  ctx.beginPath();
  ctx.arc(x, y, radius, 0, Math.PI * 2);
  ctx.fill();
  ctx.fillStyle = inner;
  ctx.beginPath();
  ctx.arc(x, y, radius * 0.62, 0, Math.PI * 2);
  ctx.fill();
}

function drawBlueEnsign(ctx, width, height, countryId) {
  ctx.fillStyle = "#012169";
  ctx.fillRect(0, 0, width, height);
  drawUnionCanton(ctx, 0, 0, width * 0.42, height * 0.5);
  const colors = {
    anguilla: ["#ffffff", "#f28e2b"],
    "british-virgin-islands": ["#0a8f3c", "#f2c14e"],
    "turks-caicos": ["#f2c14e", "#3ab6d6"],
  }[countryId] || ["#ffffff", "#f2c14e"];
  drawBadge(ctx, width * 0.72, height * 0.52, height * 0.12, colors[0], colors[1]);
}

function drawUnionCanton(ctx, x, y, width, height) {
  ctx.save();
  ctx.translate(x, y);
  ctx.fillStyle = "#012169";
  ctx.fillRect(0, 0, width, height);
  ctx.strokeStyle = "#ffffff";
  ctx.lineWidth = height * 0.18;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(width, height);
  ctx.moveTo(width, 0);
  ctx.lineTo(0, height);
  ctx.stroke();
  ctx.strokeStyle = "#c8102e";
  ctx.lineWidth = height * 0.08;
  ctx.beginPath();
  ctx.moveTo(0, 0);
  ctx.lineTo(width, height);
  ctx.moveTo(width, 0);
  ctx.lineTo(0, height);
  ctx.stroke();
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(width * 0.42, 0, width * 0.16, height);
  ctx.fillRect(0, height * 0.38, width, height * 0.24);
  ctx.fillStyle = "#c8102e";
  ctx.fillRect(width * 0.46, 0, width * 0.08, height);
  ctx.fillRect(0, height * 0.44, width, height * 0.12);
  ctx.restore();
}

function slideShell(content, controls = "") {
  disposeFlagScenes();
  app.innerHTML = `
    <section class="slide">
      <header class="deck-topbar">
        <div class="brand">
          <span class="brand-mark">WS</span>
          <span>World Stage, Weird Facts</span>
        </div>
        <div class="deck-status">${statusText()}</div>
      </header>
      <div class="slide-content">${content}</div>
      <footer class="deck-controls">
        <div class="keyboard-hint">Use ← / → to host the quiz</div>
        <div class="control-row">${controls}</div>
      </footer>
    </section>
  `;
  bindDeckControls();
  initFlagScenes();
}

function statusText() {
  if (state.view === "intro") return "Work Away Day Quiz";
  if (state.view === "select") return state.group === "top" ? "Top 5 countries" : "Underdogs";
  if (state.view === "ideas") return "More quiz formats";
  const country = currentCountry();
  return `${state.group === "top" ? "Top 5" : "Underdogs"} · ${country.name} · Q${state.questionIndex + 1}/5`;
}

function renderIntro() {
  const country = countries[0];
  slideShell(
    `
      <div class="intro-grid">
        <div class="intro-copy">
          <p class="event-line">Work Away Day Quiz</p>
          <h1>World Stage, Weird Facts</h1>
          <p>
            A World Cup-flavoured quiz with zero football knowledge required.
            Rankings set the stage; culture, science, geography, food, history,
            and invention do the work.
          </p>
          <div class="stat-row">
            <div><span>Mode</span><strong>Teams of 4-6</strong></div>
            <div><span>Rounds</span><strong>Top 5 + Underdogs</strong></div>
            <div><span>Questions</span><strong>50 editable prompts</strong></div>
          </div>
        </div>
        <div class="hero-flag-wrap">
          ${flagMarkup(country, "hero")}
          <div class="country-callout">
            <span>Opening country</span>
            <strong>${country.name}</strong>
            <small>FIFA men’s ranking #${country.rank} in the April 2026 table</small>
          </div>
        </div>
      </div>
    `,
    `<button class="button secondary" data-action="ideas">Other formats</button>
     <button class="button primary" data-action="select">Start the quiz</button>`,
  );
}

function renderSelect() {
  const groupCountries = countriesForGroup();
  slideShell(
    `
      <div class="select-grid">
        <div>
          <p class="event-line">Choose a round</p>
          <h2>Pick a country, then let the flag take the screen.</h2>
          <div class="tabs" role="tablist" aria-label="Ranking groups">
            <button class="tab ${state.group === "top" ? "active" : ""}" data-group="top" role="tab">Top 5</button>
            <button class="tab ${state.group === "underdog" ? "active" : ""}" data-group="underdog" role="tab">Underdogs</button>
          </div>
        </div>
        <div class="country-grid">
          ${groupCountries
            .map(
              (country, index) => `
                <button class="country-tile ${index === state.countryIndex ? "active" : ""}" data-country-index="${index}">
                  ${flagMarkup(country, "mini")}
                  <span>
                    <strong>${country.name}</strong>
                    <small>Rank #${country.rank} · ${country.questions.length} questions</small>
                  </span>
                </button>
              `,
            )
            .join("")}
        </div>
      </div>
    `,
    `<button class="button secondary" data-action="intro">Back</button>
     <button class="button primary" data-action="question">Open question</button>`,
  );

  document.querySelectorAll("[data-group]").forEach((button) => {
    button.addEventListener("click", () => {
      state.group = button.dataset.group;
      state.countryIndex = 0;
      state.questionIndex = 0;
      state.selectedAnswer = "";
      renderSelect();
    });
  });

  document.querySelectorAll("[data-country-index]").forEach((button) => {
    button.addEventListener("click", () => {
      state.countryIndex = Number(button.dataset.countryIndex);
      state.questionIndex = 0;
      state.selectedAnswer = "";
      renderSelect();
    });
  });
}

function renderQuestion() {
  const country = currentCountry();
  const question = currentQuestion();
  const answered = Boolean(state.selectedAnswer);
  slideShell(
    `
      <div class="question-grid ${answered ? "is-revealed" : ""}">
        <aside class="question-flag-panel">
          ${flagMarkup(country, "question")}
          <div class="country-meta">
            <span>Rank #${country.rank}</span>
            <strong>${country.name}</strong>
            <small>${state.group === "top" ? "Top 5" : "Underdogs"} · Question ${state.questionIndex + 1} of ${country.questions.length}</small>
          </div>
        </aside>
        <article class="question-panel">
          <p class="event-line">Multiple choice</p>
          <h2>${question.prompt}</h2>
          <div class="answers">
            ${question.options
              .map((option, index) => {
                const isCorrect = option === question.answer;
                const isSelected = option === state.selectedAnswer;
                const className = answered
                  ? isCorrect
                    ? "correct"
                    : isSelected
                      ? "incorrect"
                      : "muted"
                  : "";
                return `<button class="answer ${className}" data-answer="${option}">
                  <span>${String.fromCharCode(65 + index)}</span>${option}
                </button>`;
              })
              .join("")}
          </div>
          ${
            answered
              ? `<div class="reveal">
                  <span>Answer reveal</span>
                  <strong>${question.answer}</strong>
                  <p>${question.explanation}</p>
                </div>`
              : ""
          }
        </article>
      </div>
    `,
    `<button class="button secondary" data-action="select">Countries</button>
     <button class="button secondary" data-action="prev-question">Previous</button>
     <button class="button primary" data-action="${answered ? "next-question" : "reveal"}">${answered ? "Next question" : "Reveal answer"}</button>`,
  );

  document.querySelectorAll("[data-answer]").forEach((button) => {
    button.addEventListener("click", () => {
      if (!state.selectedAnswer) {
        state.selectedAnswer = button.dataset.answer;
        renderQuestion();
      }
    });
  });
}

function renderIdeas() {
  slideShell(
    `
      <div class="ideas-layout">
        <div>
          <p class="event-line">Plan B, C, and D</p>
          <h2>Other Away Day Quiz Formats</h2>
        </div>
        <div class="ideas-grid">
          ${ideas
            .map(
              (idea, index) => `
                <article>
                  <span>${String(index + 1).padStart(2, "0")}</span>
                  <h3>${idea.title}</h3>
                  <p>${idea.body}</p>
                </article>
              `,
            )
            .join("")}
        </div>
      </div>
    `,
    `<button class="button secondary" data-action="intro">Intro</button>
     <button class="button primary" data-action="select">Start the quiz</button>`,
  );
}

function bindDeckControls() {
  document.querySelectorAll("[data-action]").forEach((button) => {
    button.addEventListener("click", () => runAction(button.dataset.action));
  });
}

function runAction(action) {
  if (action === "intro") state.view = "intro";
  if (action === "select") state.view = "select";
  if (action === "question") state.view = "question";
  if (action === "ideas") state.view = "ideas";
  if (action === "reveal") state.selectedAnswer = currentQuestion().answer;
  if (action === "prev-question") moveQuestion(-1);
  if (action === "next-question") moveQuestion(1);
  render();
}

function moveQuestion(direction) {
  const orderedCountries = orderedQuizCountries();
  const country = currentCountry();
  const absoluteCountryIndex = orderedCountries.findIndex((item) => item.id === country.id);
  const nextQuestionIndex = state.questionIndex + direction;

  if (nextQuestionIndex >= 0 && nextQuestionIndex < country.questions.length) {
    state.questionIndex = nextQuestionIndex;
  } else {
    const nextCountryIndex =
      (absoluteCountryIndex + direction + orderedCountries.length) % orderedCountries.length;
    const nextCountry = orderedCountries[nextCountryIndex];
    const nextGroupCountries = countries.filter((item) => item.group === nextCountry.group);
    state.group = nextCountry.group;
    state.countryIndex = nextGroupCountries.findIndex((item) => item.id === nextCountry.id);
    state.questionIndex = direction > 0 ? 0 : nextCountry.questions.length - 1;
  }

  state.selectedAnswer = "";
  state.view = "question";
}

function render() {
  if (state.view === "intro") renderIntro();
  if (state.view === "select") renderSelect();
  if (state.view === "question") renderQuestion();
  if (state.view === "ideas") renderIdeas();
}

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") {
    if (state.view === "intro") runAction("select");
    else if (state.view === "select") runAction("question");
    else if (state.view === "question" && state.selectedAnswer) runAction("next-question");
    else if (state.view === "question") runAction("reveal");
  }

  if (event.key === "ArrowLeft") {
    if (state.view === "question") runAction("prev-question");
    else if (state.view === "select") runAction("intro");
    else if (state.view === "ideas") runAction("intro");
  }

  if (event.key.toLowerCase() === "i") runAction("ideas");
});

render();
