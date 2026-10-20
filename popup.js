const topicQueries = {
  history: [
    "ancient trade routes documentary",
    "forgotten archaeological site discovery",
    "medieval manuscript analysis",
    "bronze age collapse research"
  ],
  science: [
    "quantum entanglement lecture",
    "deep space radio astronomy",
    "particle accelerator experiments",
    "theoretical physics black holes"
  ],
  nature: [
    "abyssal zone creatures footage",
    "rare biome ecosystem documentary",
    "microscopic tardigrade footage",
    "mycelium network biology"
  ],
  tech: [
    "retro computing mainframe restoration",
    "custom FPGA design tutorial",
    "assembly language reverse engineering",
    "obscure analog synthesizer"
  ],
  philosophy: [
    "epistemology primary sources",
    "linguistic relativity breakdown",
    "stoic manuscripts translation",
    "logical paradoxes philosophy"
  ],
  crafts: [
    "traditional Japanese joinery",
    "damascus steel blacksmithing process",
    "glassblowing technique masterclass",
    "hand-carved acoustic instrument"
  ]
};

const wildcardQueries = ["IMG_", "MOV_", "DSC_", "GOPRO", "unlisted test upload"];

document.getElementById("discoverBtn").addEventListener("click", () => {
  const selectedTopic = document.getElementById("topic").value;
  let query = "";

  if (selectedTopic === "wildcard") {
    const term = wildcardQueries[Math.floor(Math.random() * wildcardQueries.length)];
    const num = Math.floor(1000 + Math.random() * 9000);
    query = `${term}${num}`;
  } else {
    const list = topicQueries[selectedTopic];
    query = list[Math.floor(Math.random() * list.length)];
  }

  // Opens YouTube search query in a new tab
  const searchUrl = `https://www.youtube.com/results?search_query=${encodeURIComponent(query)}`;
  chrome.tabs.create({ url: searchUrl });
});