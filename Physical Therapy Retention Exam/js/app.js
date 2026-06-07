// Physical Therapy Retention Exam - App Logic with Gamified Systems

// File databases matching on-disk structure
const REVIEWER_FILES = {
  sem1: {
    ITPT: [
      "INTRO TO PT POST LEC 1.pdf",
      "INTRO TO PT POST LEC 2 .pdf",
      "ITPT Midterms Reviewer.pdf",
      "WEEK 1 - INTRO TO PT.pdf",
      "WEEK 11 to 15 - INTRO TO PT.pdf",
      "WEEK 2 - INTRO TO PT.pdf",
      "WEEK 8 - INTRO TO PT.pdf"
    ],
    OSA: [
      "OSA KAHOOT COMPILATION.pdf",
      "OSA MID LEC 2_NEURO.pdf",
      "OSA MID LEC 3&4_EMBRYO WILLIS.pdf",
      "OSA MID&POST LEC 2.5_NEURO.pdf",
      "OSA POST LEC 1 .pdf",
      "WEEK 1 - ORGAN SYSTEM.pdf",
      "WEEK 10 - ORGAN SYSTEM.pdf",
      "WEEK 11 - ORGAN SYSTEM .pdf",
      "WEEK 13 to 14 - ORGAN SYSTEM.pdf",
      "WEEK 15 to 16 - ORGAN SYSTEM.pdf",
      "WEEK 2 & 3 - ORGAN SYSTEM.pdf",
      "WEEK 7 - ORGAN SYSTEM.pdf",
      "WEEK 8 - ORGAN SYSTEM.pdf",
      "WEEK 9 - ORGAN SYSTEM.pdf"
    ],
    PHYSIO: [
      "INTEG PHYSIO _2L MIDTERMS.pdf",
      "INTEG PHYSIO _CARDIAC_ MIDTERMS.pdf",
      "INTEG PHYSIO _CIRCULATORY MIDTERMS.pdf",
      "INTEG PHYSIO _RENAL MIDTERMS.pdf",
      "INTEG PHYSIO _RESPIRATORY MIDTERMS.pdf",
      "Physio - Finals Lesson 1.pdf",
      "WEEK 1 - INTEGRATIVE PHYSIOLOGY.pdf",
      "WEEK 11 to 15 - INTEGRATIVE PHYSIOLOGY.pdf",
      "WEEK 2 - INTEGRATIVE PHYSIOLOGY.pdf",
      "WEEK 3 - INTEGRATIVE PHYSIOLOGY.pdf",
      "WEEK 7 to 9 - INTEGRATIVE PHYSIOLOGY.pdf",
      "WEEK 8 - INTEGRATIVE PHYSIOLOGY.pdf"
    ]
  },
  sem2: {
    KINES: [
      "Functional_Anatomy_and_Kinesiology_Blank_Exam.pdf",
      "Inhouse-Notes-Final.pdf",
      "KINES - Week 4.pdf",
      "KINES FINALS.pdf",
      "Kinesiology Wrist & Hand .pdf",
      "kines - week 6.pdf",
      "kines midterm.pdf",
      "kines post test compilation .pdf",
      "kines wrist & hand.pdf",
      "kiness knee mcq.pdf",
      "week 2 kines.pdf",
      "week 3 kines.pdf"
    ],
    NEUROSCI: [
      "LECTURE 4.1 NEUROSCI .pdf",
      "NEUROSCI - LESSON 1 (MIDTERM)  .pdf",
      "NEUROSCI - MIDTERM.pdf",
      "NEUROSCI - Week 1.pdf",
      "NEUROSCI - Week 3.pdf",
      "NEUROSCI FINALS.pdf",
      "neuro finals first week.pdf"
    ]
  }
};

// Word Scramble Game Word Pool
const SCRAMBLE_WORDS = [
  { word: "ETHICS", clue: "System of moral principles governing physical therapy conduct." },
  { word: "PPTA", clue: "The official professional organization of physical therapists in the Philippines." },
  { word: "DIAPHRAGM", clue: "The primary muscle of respiration, innervated by the Phrenic nerve." },
  { word: "WILLIS", clue: "The arterial circle at the base of the brain supplying cerebral hemispheres." },
  { word: "NEPHRON", clue: "The functional unit of the kidney responsible for urine formation." },
  { word: "TROPONIN", clue: "The calcium-binding protein on actin thin filaments that initiates muscle contraction." },
  { word: "PATELLA", clue: "The sesamoid bone that increases the quadriceps extension moment arm." },
  { word: "LEVER", clue: "A rigid bar turning on a pivot point (1st, 2nd, or 3rd class in biomechanics)." },
  { word: "MYELIN", clue: "The insulating lipid sheath around axons that allows saltatory conduction." },
  { word: "THALAMUS", clue: "The primary sensory relay station routing signals to the cerebral cortex." },
  { word: "KINESIOLOGY", clue: "The scientific study of human body movement." },
  { word: "GONIOMETER", clue: "The primary tool used to measure joint range of motion (ROM)." }
];

// Matcher Game Definition Pairs
const MATCHER_PAIRS = [
  { key: "RA 5680", val: "Philippine PT & OT Regulatory Law" },
  { key: "Serratus Anterior", val: "Winging scapula if long thoracic nerve injured" },
  { key: "Type I Muscle", val: "Fatigue-resistant slow-twitch oxidative fibers" },
  { key: "Frank-Starling", val: "Stroke volume increases with cardiac stretch" },
  { key: "Third-class lever", val: "Most common biomechanical lever in human joints" },
  { key: "Lunate", val: "Keystone bone of the proximal wrist carpal row" },
  { key: "CN VII (Facial)", val: "Taste anterior 2/3 of tongue, facial expressions" },
  { key: "Brown-Séquard", val: "Ipsilateral motor loss, contralateral pain loss" }
];

// Global Gamified State
let state = {
  currentTab: "welcome",
  currentSem: "sem1",
  activeQuizQuestions: [],
  activeQuizIndex: 0,
  activeQuizScore: 0,
  quizMode: null, 
  selectedAnswer: null,
  answered: false,
  streak: 0,
  
  // Game Progression
  xp: parseInt(localStorage.getItem("pt_xp") || "0"),
  level: parseInt(localStorage.getItem("pt_level") || "1"),
  trophyCount: parseInt(localStorage.getItem("pt_trophies") || "0"),
  quests: JSON.parse(localStorage.getItem("pt_quests") || '{"readPdf":false,"takeTest":false,"perfectScore":false}'),

  // Game Arena Modes
  scrambleRound: 0,
  scrambleActiveWord: null,
  matcherSelectedLeft: null,
  matcherSelectedRight: null,
  matcherMatchesCount: 0
};

// Audio Synthesizer using Web Audio API
const SoundEffect = {
  ctx: null,
  init() {
    if (!this.ctx) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  },
  playCorrect() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.type = "sine";
    const now = this.ctx.currentTime;
    
    osc.frequency.setValueAtTime(523.25, now); // C5
    osc.frequency.setValueAtTime(659.25, now + 0.08); // E5
    osc.frequency.setValueAtTime(783.99, now + 0.16); // G5
    osc.frequency.setValueAtTime(1046.50, now + 0.24); // C6
    
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.4);
    
    osc.start(now);
    osc.stop(now + 0.4);
  },
  playWrong() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.type = "sawtooth";
    const now = this.ctx.currentTime;
    
    osc.frequency.setValueAtTime(180, now);
    osc.frequency.linearRampToValueAtTime(110, now + 0.35);
    
    gain.gain.setValueAtTime(0.12, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.35);
    
    osc.start(now);
    osc.stop(now + 0.35);
  },
  playLevelUp() {
    this.init();
    const osc1 = this.ctx.createOscillator();
    const osc2 = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    
    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(this.ctx.destination);
    
    const now = this.ctx.currentTime;
    osc1.type = "triangle";
    osc2.type = "sine";
    
    osc1.frequency.setValueAtTime(261.63, now); // C4
    osc2.frequency.setValueAtTime(329.63, now); // E4
    
    osc1.frequency.exponentialRampToValueAtTime(523.25, now + 0.5);
    osc2.frequency.exponentialRampToValueAtTime(659.25, now + 0.5);
    
    gain.gain.setValueAtTime(0.2, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.8);
    
    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + 0.8);
    osc2.stop(now + 0.8);
  },
  playHeartUp() {
    this.init();
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    
    osc.type = "sine";
    const now = this.ctx.currentTime;
    
    osc.frequency.setValueAtTime(349.23, now); // F4
    osc.frequency.setValueAtTime(523.25, now + 0.1); // C5
    osc.frequency.setValueAtTime(698.46, now + 0.2); // F5
    
    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.55);
    
    osc.start(now);
    osc.stop(now + 0.55);
  }
};

// --- Initialization ---
document.addEventListener("DOMContentLoaded", () => {
  initTheme();
  updateGameStatsUI();
  switchTab("welcome");
  renderReviewerFileList();
  renderQuests();
});

// --- Theme Management ---
function initTheme() {
  const savedTheme = localStorage.getItem("pt_theme") || "theme-modern";
  setTheme(savedTheme);
}

function setTheme(themeName) {
  document.body.className = themeName;
  localStorage.setItem("pt_theme", themeName);
  
  document.querySelectorAll(".theme-card").forEach(card => {
    card.classList.remove("active");
    if (card.getAttribute("data-theme") === themeName) {
      card.classList.add("active");
    }
  });
}

// --- Gamified Progression Logic ---
function addXP(amount) {
  state.xp += amount;
  const xpNeeded = state.level * 100;
  if (state.xp >= xpNeeded) {
    state.xp -= xpNeeded;
    state.level++;
    localStorage.setItem("pt_level", state.level.toString());
    SoundEffect.playLevelUp();
    showLevelUpNotification();
  }
  localStorage.setItem("pt_xp", state.xp.toString());
  updateGameStatsUI();
}

function showLevelUpNotification() {
  const note = document.createElement("div");
  note.style.cssText = `
    position: fixed;
    bottom: 24px;
    right: 24px;
    background: linear-gradient(135deg, #ffd700, #ff8c00);
    color: #000;
    padding: 16px 24px;
    border-radius: 12px;
    font-weight: bold;
    box-shadow: 0 10px 25px rgba(255,215,0,0.4);
    z-index: 9999;
    animation: slideInUp 0.5s ease-out, fadeOut 0.5s ease-in 3.5s forwards;
  `;
  note.innerHTML = `🎉 LEVEL UP! You are now Level ${state.level}!`;
  document.body.appendChild(note);
  setTimeout(() => note.remove(), 4000);
}

function updateGameStatsUI() {
  const xpNeeded = state.level * 100;
  const xpPct = (state.xp / xpNeeded) * 100;
  
  document.querySelectorAll(".level-val").forEach(el => el.textContent = state.level.toString());
  document.querySelectorAll(".xp-fill").forEach(el => el.style.width = `${xpPct}%`);
  document.querySelectorAll(".xp-text").forEach(el => el.textContent = `${state.xp} / ${xpNeeded} XP`);
  
  document.getElementById("mini-trophies-count").textContent = state.trophyCount.toString();
}

// --- Navigation / Tab Handling ---
function switchTab(tabId) {
  state.currentTab = tabId;
  
  document.querySelectorAll(".nav-item").forEach(item => {
    item.classList.remove("active");
  });
  const activeNavItem = document.querySelector(`.nav-item[data-tab="${tabId}"]`);
  if (activeNavItem) activeNavItem.classList.add("active");
  
  document.querySelectorAll(".tab-pane").forEach(pane => {
    pane.classList.remove("active");
  });
  document.getElementById(`${tabId}-tab`).classList.add("active");
  
  if (tabId === "welcome") {
    const sealed = document.getElementById("sealed-envelope");
    const opened = document.getElementById("opened-love-card");
    if (sealed && opened) {
      sealed.style.display = "flex";
      sealed.style.animation = "";
      opened.style.display = "none";
    }
    SoundEffect.playHeartUp();
  } else if (tabId !== "practice") {
    resetPracticeViews();
  } else {
    resetPracticeViews();
    toggleMobilePractice('games');
  }
}

// --- Welcome Envelope Opening & Typewriter ---
function openEnvelope() {
  const sealed = document.getElementById("sealed-envelope");
  const opened = document.getElementById("opened-love-card");
  
  if (sealed && opened) {
    sealed.style.animation = "floatUpAndOut 0.4s ease-out forwards";
    setTimeout(() => {
      sealed.style.display = "none";
      opened.style.display = "flex";
      opened.style.animation = "bounceIn 0.5s ease-out";
      
      SoundEffect.playCorrect();
      triggerWelcomeTypewriter();
      triggerHeartRaining();
    }, 400);
  }
}

let typewriterTimer = null;
function triggerWelcomeTypewriter() {
  const element = document.getElementById("welcome-message-text");
  if (!element) return;
  
  const text = `Good luck, Baby! I hope this website helps you pass your retention exam. All the resources you need are already here. Please let me know if there's anything else you want to add, especially any other features that would help you study better.\n\nI love you! - your comsci boy`;
  
  element.textContent = "";
  let i = 0;
  clearInterval(typewriterTimer);
  
  typewriterTimer = setInterval(() => {
    if (i < text.length) {
      if (text.charAt(i) === "\n") {
        element.innerHTML += "<br>";
      } else {
        element.textContent += text.charAt(i);
      }
      i++;
    } else {
      clearInterval(typewriterTimer);
    }
  }, 25);
}

function triggerHeartRaining() {
  const container = document.getElementById("welcome-tab");
  if (!container) return;
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const h = document.createElement("div");
      h.textContent = ["❤️", "💖", "✨", "🌸"][Math.floor(Math.random() * 4)];
      h.style.cssText = `
        position: absolute;
        left: ${Math.random() * 85 + 5}%;
        top: 90%;
        font-size: ${Math.random() * 20 + 15}px;
        pointer-events: none;
        z-index: 99;
        animation: floatUpAndOut ${Math.random() * 1.5 + 1.5}s ease-out forwards;
      `;
      container.appendChild(h);
      setTimeout(() => h.remove(), 3000);
    }, i * 150);
  }
}

// --- Tab 1: Reviewer Functions ---
function setSemester(sem) {
  state.currentSem = sem;
  document.querySelectorAll(".sub-tab-btn").forEach(btn => {
    btn.classList.remove("active");
  });
  document.querySelector(`.sub-tab-btn[data-sem="${sem}"]`).classList.add("active");
  renderReviewerFileList();
}

function renderReviewerFileList() {
  const container = document.getElementById("file-list-container");
  container.innerHTML = "";
  
  const semData = REVIEWER_FILES[state.currentSem];
  
  for (const topic in semData) {
    const header = document.createElement("div");
    header.className = "topic-group-header";
    header.textContent = topic;
    container.appendChild(header);
    
    semData[topic].forEach(fileName => {
      const fileItem = document.createElement("div");
      fileItem.className = "file-item";
      fileItem.innerHTML = `📄 <span style="flex:1; overflow:hidden; text-overflow:ellipsis; white-space:nowrap;">${fileName}</span>`;
      
      const semPathSegment = state.currentSem === "sem1" ? "1ST SEMESTER" : "2ND SEMESTER";
      const relativePath = `1st Year Reviewers/${semPathSegment}/${topic}/${fileName}`;
      
      fileItem.onclick = () => {
        document.querySelectorAll(".file-item").forEach(el => el.classList.remove("active"));
        fileItem.classList.add("active");
        loadPDF(relativePath, fileName);
        triggerQuestCompletion("readPdf");
      };
      
      container.appendChild(fileItem);
    });
  }
}

function loadPDF(path, title) {
  const readerPane = document.getElementById("pdf-reader-pane");
  readerPane.innerHTML = `
    <div class="reader-header" style="gap: 8px;">
      <button class="sub-tab-btn back-btn-pdf" onclick="closePDF()" style="padding: 4px 10px; font-size: 11px;">← Back</button>
      <div class="reader-title" style="flex: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${title}</div>
      <button class="sub-tab-btn" onclick="openFullscreenPDF('${path}')" style="padding: 4px 10px; font-size: 11px; white-space: nowrap;">Fullscreen ↗</button>
    </div>
    <iframe class="pdf-iframe" src="${path}"></iframe>
  `;
  const container = document.querySelector(".reviewer-container");
  if (container) {
    container.classList.add("pdf-open");
  }
}

function closePDF() {
  const container = document.querySelector(".reviewer-container");
  if (container) {
    container.classList.remove("pdf-open");
  }
  document.querySelectorAll(".file-item").forEach(el => el.classList.remove("active"));
}

function toggleMobilePractice(mode) {
  const gamesBtn = document.getElementById("practice-games-btn");
  const questsBtn = document.getElementById("practice-quests-btn");
  const arena = document.querySelector(".practice-content-area");
  const questsPane = document.querySelector(".quest-board-pane");
  
  if (!gamesBtn || !questsBtn || !arena || !questsPane) return;
  
  if (mode === 'games') {
    gamesBtn.classList.add("active");
    questsBtn.classList.remove("active");
    arena.style.setProperty("display", "flex", "important");
    questsPane.style.setProperty("display", "none", "important");
  } else {
    gamesBtn.classList.remove("active");
    questsBtn.classList.add("active");
    arena.style.setProperty("display", "none", "important");
    questsPane.style.setProperty("display", "flex", "important");
  }
}

function openFullscreenPDF(path) {
  window.open(path, "_blank");
}

// --- Tab 2: Quizzes, Exams & Challenges ---
function resetPracticeViews() {
  document.getElementById("practice-selection").style.display = "grid";
  document.getElementById("quiz-config-screen").style.display = "none";
  document.getElementById("exam-config-screen").style.display = "none";
  document.getElementById("challenge-intro-screen").style.display = "none";
  document.getElementById("test-session").style.display = "none";
  document.getElementById("scramble-session").style.display = "none";
  document.getElementById("matcher-session").style.display = "none";
  document.getElementById("results-panel").style.display = "none";
}

function showQuizConfig() {
  document.getElementById("practice-selection").style.display = "none";
  document.getElementById("quiz-config-screen").style.display = "flex";
}

function showExamConfig() {
  document.getElementById("practice-selection").style.display = "none";
  document.getElementById("exam-config-screen").style.display = "flex";
}

function showChallengeIntro() {
  document.getElementById("practice-selection").style.display = "none";
  document.getElementById("challenge-intro-screen").style.display = "flex";
  renderTrophies();
}

function renderTrophies() {
  const cabinet = document.getElementById("trophies-container");
  cabinet.innerHTML = "";
  
  if (state.trophyCount === 0) {
    cabinet.innerHTML = `<div style="color:var(--text-muted); font-size:13px;">No trophies earned yet. Ace one of the Survival Challenges to win!</div>`;
  } else {
    for (let i = 0; i < state.trophyCount; i++) {
      const tr = document.createElement("div");
      tr.className = "trophy-item";
      tr.innerHTML = `
        <div class="trophy-gold">🏆</div>
        <div style="font-size:11px; font-weight:700;">Challenge Winner</div>
        <div style="font-size:9px; color:var(--text-muted)">Cleared round</div>
      `;
      cabinet.appendChild(tr);
    }
  }
}

function startPractice(mode) {
  state.quizMode = mode;
  state.activeQuizIndex = 0;
  state.activeQuizScore = 0;
  state.answered = false;
  state.selectedAnswer = null;
  state.streak = 0;
  
  let topic = "";
  let count = 25;
  
  if (mode === "quiz") {
    topic = document.getElementById("quiz-topic").value;
    count = 25;
  } else if (mode === "exam") {
    topic = document.getElementById("exam-topic").value;
    count = 50;
  } else if (mode === "challenge") {
    topic = ["ITPT", "OSA", "PHYSIO", "KINES", "NEUROSCI"][Math.floor(Math.random() * 5)];
    count = 10;
  }
  
  state.activeQuizQuestions = getQuestionsForTopic(topic, count);
  
  document.getElementById("quiz-config-screen").style.display = "none";
  document.getElementById("exam-config-screen").style.display = "none";
  document.getElementById("challenge-intro-screen").style.display = "none";
  document.getElementById("test-session").style.display = "flex";
  
  renderQuestion();
}

function renderQuestion() {
  state.answered = false;
  state.selectedAnswer = null;
  
  const q = state.activeQuizQuestions[state.activeQuizIndex];
  
  document.getElementById("question-number-indicator").textContent = `Question ${state.activeQuizIndex + 1} of ${state.activeQuizQuestions.length}`;
  const pct = ((state.activeQuizIndex) / state.activeQuizQuestions.length) * 100;
  document.getElementById("session-progress-fill").style.width = `${pct}%`;
  
  const modeLabel = document.getElementById("session-mode-label");
  if (state.quizMode === "challenge") {
    modeLabel.innerHTML = `🔥 Streak: <strong style="color:var(--accent-color);">${state.streak}/10</strong>`;
  } else {
    modeLabel.textContent = `${state.quizMode.toUpperCase()} MODE`;
  }
  
  const container = document.getElementById("question-card-container");
  container.innerHTML = `
    <div class="question-text">${q.question}</div>
    <div class="options-list">
      ${q.options.map((opt, i) => `
        <button class="option-btn" onclick="selectOption(${i})">
          <span class="option-indicator">${String.fromCharCode(65 + i)}</span>
          <span style="flex:1;">${opt}</span>
        </button>
      `).join("")}
    </div>
    <div id="explanation-container"></div>
    <button class="test-card-btn" id="next-question-btn" onclick="submitOrNext()" style="margin-top:24px; width:100%;" disabled>Submit Answer</button>
  `;
}

function selectOption(index) {
  if (state.answered) return;
  state.selectedAnswer = index;
  
  document.querySelectorAll(".option-btn").forEach((btn, i) => {
    btn.classList.remove("selected");
    if (i === index) btn.classList.add("selected");
  });
  
  document.getElementById("next-question-btn").disabled = false;
}

function submitOrNext() {
  const q = state.activeQuizQuestions[state.activeQuizIndex];
  const nextBtn = document.getElementById("next-question-btn");
  
  if (!state.answered) {
    state.answered = true;
    const isCorrect = state.selectedAnswer === q.answer;
    
    if (isCorrect) {
      state.activeQuizScore++;
      state.streak++;
      SoundEffect.playCorrect();
      addXP(10);
      triggerStreakEmoji("🔥");
    } else {
      SoundEffect.playWrong();
      if (state.quizMode === "challenge") {
        triggerStreakEmoji("💥");
        setTimeout(() => {
          alert("Incorrect! Survival Challenge failed. Try again!");
          resetPracticeViews();
        }, 600);
        return;
      }
    }
    
    document.querySelectorAll(".option-btn").forEach((btn, i) => {
      btn.classList.remove("selected");
      if (i === q.answer) {
        btn.classList.add("correct");
      } else if (i === state.selectedAnswer) {
        btn.classList.add("wrong");
      }
    });
    
    const expContainer = document.getElementById("explanation-container");
    expContainer.innerHTML = `
      <div class="explanation-box" style="animation: bounceIn 0.3s ease-out;">
        <strong>${isCorrect ? "Correct (+10 XP)!" : "Incorrect."}</strong> ${q.explanation}
      </div>
    `;
    
    nextBtn.textContent = state.activeQuizIndex + 1 >= state.activeQuizQuestions.length ? "View Results" : "Next Question";
  } else {
    state.activeQuizIndex++;
    if (state.activeQuizIndex >= state.activeQuizQuestions.length) {
      showResults();
    } else {
      renderQuestion();
    }
  }
}

function showResults() {
  document.getElementById("test-session").style.display = "none";
  document.getElementById("results-panel").style.display = "flex";
  
  const pct = Math.round((state.activeQuizScore / state.activeQuizQuestions.length) * 100);
  document.getElementById("result-score-text").textContent = `${state.activeQuizScore} / ${state.activeQuizQuestions.length}`;
  document.getElementById("result-percentage").textContent = `${pct}%`;
  
  const completionXP = state.quizMode === "exam" ? 100 : 50;
  addXP(completionXP);
  
  triggerQuestCompletion("takeTest");
  
  const desc = document.getElementById("result-evaluation");
  if (state.quizMode === "challenge" && state.streak === 10) {
    state.trophyCount++;
    localStorage.setItem("pt_trophies", state.trophyCount.toString());
    updateTrophyUI();
    addXP(150);
    triggerQuestCompletion("perfectScore");
    
    desc.innerHTML = `
      <div style="font-size: 28px; color: gold; animation: pulse 1s infinite;">🏆 CHAMPION! 🏆</div>
      <div style="margin-top: 10px;">Perfect 10/10 score! A gold trophy has been added to your shelf, and you gained <strong>+150 XP</strong>.</div>
    `;
  } else {
    if (pct === 100) {
      triggerQuestCompletion("perfectScore");
      addXP(50);
      desc.textContent = "Flawless score! Perfect Board Exam prep! (+50 XP perfect score bonus)";
    } else if (pct >= 75) {
      desc.textContent = `Excellent job! You passed with high marks. Gained +${completionXP} Completion XP.`;
    } else {
      desc.textContent = `Test complete. Gained +${completionXP} Completion XP. Review the documents to strengthen your scores!`;
    }
  }
}

// --- Scramble Game Engine ---
let currentScrambleList = [];
function startScrambleGame() {
  document.getElementById("challenge-intro-screen").style.display = "none";
  document.getElementById("scramble-session").style.display = "flex";
  
  // Choose 5 random scramble words
  currentScrambleList = [...SCRAMBLE_WORDS].sort(() => Math.random() - 0.5).slice(0, 5);
  state.scrambleRound = 0;
  loadScrambleRound();
}

function loadScrambleRound() {
  if (state.scrambleRound >= 5) {
    // Game won! Add trophy
    state.trophyCount++;
    localStorage.setItem("pt_trophies", state.trophyCount.toString());
    updateTrophyUI();
    addXP(100);
    triggerQuestCompletion("perfectScore");
    alert("🏆 Congratulations! You solved all 5 word scrambles! A gold trophy is added to your shelf.");
    resetPracticeViews();
    return;
  }
  
  state.scrambleActiveWord = currentScrambleList[state.scrambleRound];
  
  document.getElementById("scramble-round-indicator").textContent = `Round ${state.scrambleRound + 1} of 5`;
  document.getElementById("scramble-clue").textContent = state.scrambleActiveWord.clue;
  
  // Scramble word letters
  let letters = state.scrambleActiveWord.word.split("");
  let scrambled = [...letters];
  while (scrambled.join("") === state.scrambleActiveWord.word) {
    scrambled.sort(() => Math.random() - 0.5);
  }
  
  document.getElementById("scramble-word-display").textContent = scrambled.join(" ");
  document.getElementById("scramble-input").value = "";
  document.getElementById("scramble-feedback").textContent = "";
  document.getElementById("scramble-submit-btn").disabled = false;
  document.getElementById("scramble-submit-btn").textContent = "Submit Word";
}

function submitScrambleWord() {
  const ans = document.getElementById("scramble-input").value.trim().toUpperCase();
  const correct = state.scrambleActiveWord.word.toUpperCase();
  const feedback = document.getElementById("scramble-feedback");
  const submitBtn = document.getElementById("scramble-submit-btn");
  
  if (submitBtn.textContent === "Next Round") {
    state.scrambleRound++;
    loadScrambleRound();
    return;
  }
  
  if (ans === correct) {
    SoundEffect.playCorrect();
    addXP(20);
    feedback.innerHTML = `<span style="color:#10b981;">Correct! +20 XP Gained!</span>`;
    submitBtn.textContent = "Next Round";
  } else {
    SoundEffect.playWrong();
    feedback.innerHTML = `<span style="color:#ef4444;">Incorrect! Clue: ${state.scrambleActiveWord.clue}. Try again!</span>`;
  }
}

// --- Matcher Game Engine ---
let currentMatcherPairs = [];
function startMatcherGame() {
  document.getElementById("challenge-intro-screen").style.display = "none";
  document.getElementById("matcher-session").style.display = "flex";
  
  // Choose 4 random definitions pairs
  currentMatcherPairs = [...MATCHER_PAIRS].sort(() => Math.random() - 0.5).slice(0, 4);
  state.matcherSelectedLeft = null;
  state.matcherSelectedRight = null;
  state.matcherMatchesCount = 0;
  document.getElementById("matcher-feedback").textContent = "";
  
  renderMatcherGrid();
}

function renderMatcherGrid() {
  const leftCol = document.getElementById("matcher-left-col");
  const rightCol = document.getElementById("matcher-right-col");
  
  leftCol.innerHTML = "";
  rightCol.innerHTML = "";
  
  // Shuffled lists
  let leftItems = [...currentMatcherPairs].sort(() => Math.random() - 0.5);
  let rightItems = [...currentMatcherPairs].sort(() => Math.random() - 0.5);
  
  leftItems.forEach(item => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.style.width = "100%";
    btn.innerHTML = `<span style="font-weight:700;">${item.key}</span>`;
    btn.setAttribute("data-key", item.key);
    btn.onclick = () => selectMatcherLeft(btn, item.key);
    leftCol.appendChild(btn);
  });
  
  rightItems.forEach(item => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.style.width = "100%";
    btn.style.fontSize = "12px";
    btn.innerHTML = `<span>${item.val}</span>`;
    btn.setAttribute("data-val", item.val);
    btn.onclick = () => selectMatcherRight(btn, item.val);
    rightCol.appendChild(btn);
  });
}

function selectMatcherLeft(element, key) {
  if (element.classList.contains("correct")) return;
  state.matcherSelectedLeft = { el: element, key: key };
  
  document.querySelectorAll("#matcher-left-col .option-btn").forEach(el => el.classList.remove("selected"));
  element.classList.add("selected");
  
  checkMatcherEvaluation();
}

function selectMatcherRight(element, val) {
  if (element.classList.contains("correct")) return;
  state.matcherSelectedRight = { el: element, val: val };
  
  document.querySelectorAll("#matcher-right-col .option-btn").forEach(el => el.classList.remove("selected"));
  element.classList.add("selected");
  
  checkMatcherEvaluation();
}

function checkMatcherEvaluation() {
  if (!state.matcherSelectedLeft || !state.matcherSelectedRight) return;
  
  const key = state.matcherSelectedLeft.key;
  const val = state.matcherSelectedRight.val;
  
  // Find correct pair
  const correctPair = currentMatcherPairs.find(p => p.key === key && p.val === val);
  const feedback = document.getElementById("matcher-feedback");
  
  if (correctPair) {
    // Correct Match
    SoundEffect.playCorrect();
    addXP(25);
    
    state.matcherSelectedLeft.el.className = "option-btn correct";
    state.matcherSelectedRight.el.className = "option-btn correct";
    
    state.matcherMatchesCount++;
    feedback.innerHTML = `<span style="color:#10b981;">Correct Match! (+25 XP)</span>`;
    
    if (state.matcherMatchesCount === 4) {
      // Game Won
      setTimeout(() => {
        state.trophyCount++;
        localStorage.setItem("pt_trophies", state.trophyCount.toString());
        updateTrophyUI();
        addXP(100);
        triggerQuestCompletion("perfectScore");
        alert("🏆 Brilliant! All anatomical terms matched correctly! Gold trophy added.");
        resetPracticeViews();
      }, 800);
    }
  } else {
    // Mismatch
    SoundEffect.playWrong();
    
    const leftEl = state.matcherSelectedLeft.el;
    const rightEl = state.matcherSelectedRight.el;
    
    leftEl.className = "option-btn wrong";
    rightEl.className = "option-btn wrong";
    
    feedback.innerHTML = `<span style="color:#ef4444;">Mismatch! Try another pair.</span>`;
    
    setTimeout(() => {
      leftEl.className = "option-btn";
      rightEl.className = "option-btn";
    }, 800);
  }
  
  // Reset selection
  state.matcherSelectedLeft = null;
  state.matcherSelectedRight = null;
}

// Quest Board Rendering
function renderQuests() {
  const container = document.getElementById("quest-board-list");
  if (!container) return;
  
  const questList = [
    { key: "readPdf", title: "Study Reviewer", desc: "Open any PDF study document", xp: 25 },
    { key: "takeTest", title: "Active Recall", desc: "Complete 1 Quiz or Exam", xp: 50 },
    { key: "perfectScore", title: "Ace Student", desc: "Get a perfect score or win a Challenge", xp: 100 }
  ];
  
  container.innerHTML = questList.map(q => `
    <div class="quest-item ${state.quests[q.key] ? 'completed' : ''}">
      <div>
        <div class="quest-title">${q.title} ${state.quests[q.key] ? '✅' : ''}</div>
        <div class="quest-desc">${q.desc}</div>
      </div>
      <div class="quest-xp">+${q.xp} XP</div>
    </div>
  `).join("");
}

function triggerQuestCompletion(questKey) {
  if (state.quests[questKey]) return;
  
  state.quests[questKey] = true;
  localStorage.setItem("pt_quests", JSON.stringify(state.quests));
  
  const xpReward = { readPdf: 25, takeTest: 50, perfectScore: 100 }[questKey];
  addXP(xpReward);
  renderQuests();
  
  const ach = document.createElement("div");
  ach.style.cssText = `
    position: fixed;
    top: 24px;
    left: 50%;
    transform: translateX(-50%);
    background: #10b981;
    color: white;
    padding: 12px 24px;
    border-radius: 30px;
    font-weight: 700;
    box-shadow: 0 4px 15px rgba(16,185,129,0.3);
    z-index: 9999;
    animation: bounceInDown 0.5s ease-out, fadeOut 0.5s ease-in 2.5s forwards;
  `;
  ach.textContent = `🎯 Quest Complete: +${xpReward} XP!`;
  document.body.appendChild(ach);
  setTimeout(() => ach.remove(), 3000);
}

function updateTrophyUI() {
  document.getElementById("mini-trophies-count").textContent = state.trophyCount.toString();
}

// --- Fun Effects ---
function triggerStreakEmoji(emoji) {
  const container = document.getElementById("main-viewport");
  for (let i = 0; i < 6; i++) {
    const p = document.createElement("div");
    p.textContent = emoji;
    p.style.cssText = `
      position: absolute;
      left: ${50 + (Math.random() * 20 - 10)}%;
      top: 60%;
      font-size: 24px;
      pointer-events: none;
      z-index: 9999;
      animation: floatUpAndOut 0.8s ease-out forwards;
    `;
    container.appendChild(p);
    setTimeout(() => p.remove(), 800);
  }
}
