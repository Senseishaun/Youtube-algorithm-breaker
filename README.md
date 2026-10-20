# 🎲 Algorithm Breaker

> Break out of your YouTube recommendation filter bubble with random raw uploads and curated niche topics.

## 📌 Overview

**Algorithm Breaker** is a Manifest V3 Chrome extension designed to restore randomness and serendipity to your video browsing. Instead of relying on YouTube's recommendation engine to feed you content based on your past watch history, Algorithm Breaker generates queries for raw, uncurated uploads or deep dives into fascinating topics outside your usual algorithm.

---

## ✨ Features

* **🎲 Pure Random (Raw Uploads Mode):** Generates wildcard queries based on default camera file exports (`IMG_`, `MOV_`, `GOPRO`, etc.) combined with random numbers to uncover raw, unedited, near-zero-view videos.
* **📜 Curated Topic Explorer:** Instantly query non-algorithmic topics across varied domains:
  * 📜 **Ancient History & Archaeology**
  * 🔬 **Quantum Physics & Space**
  * 🌿 **Deep Sea & Marine Biology**
  * 💻 **Obscure Tech & Vintage Hardware**
  * 🧠 **Epistemology & Thought Experiments**
  * 🎨 **Rare Crafts & Woodworking**
* **⚡ Simple & Native Design:** Zero dependencies, built with pure HTML/CSS/JS with a dark mode UI matching YouTube's design language.

---

## 🚀 Getting Started

### Prerequisites
* Google Chrome (or any Chromium-based browser such as Brave, Edge, or Vivaldi)

### Installation

1. **Clone or download** this repository:
   ```bash
   git clone https://github.com/your-username/algorithm-breaker.git
   ```
2. Open Chrome and navigate to `chrome://extensions/`.
3. Enable **Developer mode** using the toggle switch in the top-right corner.
4. Click **Load unpacked** in the top-left corner.
5. Select the `algorithm-breaker` directory.

---

## 📁 Project Structure

```text
algorithm-breaker/
├── manifest.json   # Manifest V3 extension configuration
├── popup.html      # Extension popup UI layout
├── popup.js        # Core randomizer and search logic
└── style.css       # Extension styling (YouTube dark mode theme)
```

---

## 🛠️ Built With

* JavaScript (ES6+)
* HTML5 & CSS3
* Chrome Extension API (Manifest V3)

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
