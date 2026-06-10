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
  updateProgressAnalyticsUI();
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
    if (tabId === "progress") {
      updateProgressAnalyticsUI();
    }
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
  document.getElementById("dots-session").style.display = "none";
  document.getElementById("guess-session").style.display = "none";
  document.getElementById("complete-session").style.display = "none";
  document.getElementById("four-words-session").style.display = "none";
  document.getElementById("pandora-session").style.display = "none";
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
  state.activeQuizResults = [];
  state.answered = false;
  state.selectedAnswer = null;
  state.streak = 0;
  
  let topic = "";
  let count = 25;
  
  if (mode === "quiz") {
    topic = document.getElementById("quiz-topic").value;
    state.quizTopic = topic;
    count = 100;
    state.activeQuizQuestions = getQuestionsForTopic(topic, count);
  } else if (mode === "exam") {
    state.quizTopic = "ALL";
    count = 600;
    const topics = ["ITPT", "OSA", "PHYSIO", "KINES", "NEUROSCI"];
    let allQuestions = [];
    topics.forEach(t => {
      const qList = getQuestionsForTopic(t, 120);
      allQuestions = allQuestions.concat(qList);
    });
    allQuestions.sort(() => Math.random() - 0.5);
    state.activeQuizQuestions = allQuestions;
  } else if (mode === "challenge") {
    topic = ["ITPT", "OSA", "PHYSIO", "KINES", "NEUROSCI"][Math.floor(Math.random() * 5)];
    state.quizTopic = topic;
    count = 10;
    state.activeQuizQuestions = getQuestionsForTopic(topic, count);
  }
  
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
      state.activeQuizResults.push(true);
    } else {
      SoundEffect.playWrong();
      state.activeQuizResults.push(false);
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
  
  saveAttemptToHistory(state.quizMode, state.quizTopic, state.activeQuizScore, state.activeQuizQuestions.length);
  
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

// --- Interactive Challenges & Progress Engines ---

// Helper to determine topic from question ID
function getQuestionTopic(q) {
  const id = q.id.toLowerCase();
  if (id.startsWith("itpt")) return "ITPT";
  if (id.startsWith("osa")) return "OSA";
  if (id.startsWith("phys")) return "PHYSIO";
  if (id.startsWith("kine")) return "KINES";
  if (id.startsWith("neur")) return "NEUROSCI";
  return "UNKNOWN";
}

// History Logger
function saveAttemptToHistory(mode, topic, score, total) {
  let history = JSON.parse(localStorage.getItem("pt_history") || "[]");
  
  let entry = {
    mode: mode,
    topic: topic,
    score: score,
    total: total,
    timestamp: Date.now()
  };
  
  if (mode === "exam") {
    // Calculate topic breakdowns
    let breakdown = {
      ITPT: { correct: 0, total: 0 },
      OSA: { correct: 0, total: 0 },
      PHYSIO: { correct: 0, total: 0 },
      KINES: { correct: 0, total: 0 },
      NEUROSCI: { correct: 0, total: 0 }
    };
    
    state.activeQuizQuestions.forEach((q, idx) => {
      const qTopic = getQuestionTopic(q);
      if (breakdown[qTopic]) {
        breakdown[qTopic].total++;
        if (state.activeQuizResults[idx]) {
          breakdown[qTopic].correct++;
        }
      }
    });
    
    entry.breakdown = breakdown;
  }
  
  history.push(entry);
  localStorage.setItem("pt_history", JSON.stringify(history));
  updateProgressAnalyticsUI();
}

// Progress Dashboard UI Updater
function updateProgressAnalyticsUI() {
  let history = JSON.parse(localStorage.getItem("pt_history") || "[]");
  
  let bestScores = {
    ITPT: 0,
    OSA: 0,
    PHYSIO: 0,
    KINES: 0,
    NEUROSCI: 0
  };
  
  history.forEach(entry => {
    if (entry.mode === "quiz") {
      const topic = entry.topic;
      if (topic in bestScores) {
        const scorePct = (entry.score / entry.total) * 100;
        if (scorePct > bestScores[topic]) {
          bestScores[topic] = scorePct;
        }
      }
    } else if (entry.mode === "exam" && entry.breakdown) {
      for (const topic in entry.breakdown) {
        if (topic in bestScores) {
          const tData = entry.breakdown[topic];
          const scorePct = tData.total > 0 ? (tData.correct / tData.total) * 100 : 0;
          if (scorePct > bestScores[topic]) {
            bestScores[topic] = scorePct;
          }
        }
      }
    }
  });
  
  // Overall readiness is average of the best scores of the 5 subjects
  let overallReadiness = (bestScores.ITPT + bestScores.OSA + bestScores.PHYSIO + bestScores.KINES + bestScores.NEUROSCI) / 5;
  
  const pctLabel = document.getElementById("overall-readiness-pct");
  const pctBar = document.getElementById("overall-readiness-bar");
  const pctMsg = document.getElementById("overall-readiness-message");
  
  if (pctLabel) pctLabel.textContent = `${overallReadiness.toFixed(2)}%`;
  if (pctBar) pctBar.style.width = `${overallReadiness}%`;
  if (pctMsg) {
    pctMsg.textContent = `You are now ${overallReadiness.toFixed(2)}% achieving 100% exam score in your PT RETENTION EXAM. Keep completing daily quizzes and mock exams to increase your score!`;
  }
  
  // Render Subject Mastery Breakdown
  const subjectGrid = document.getElementById("subject-progress-grid");
  if (subjectGrid) {
    const subjects = [
      { id: "ITPT", name: "Introduction to Physical Therapy" },
      { id: "OSA", name: "Organ System Anatomy" },
      { id: "PHYSIO", name: "Integrative Physiology" },
      { id: "KINES", name: "Kinesiology & Biomechanics" },
      { id: "NEUROSCI", name: "Neuroscience" }
    ];
    
    subjectGrid.innerHTML = subjects.map(sub => {
      const best = bestScores[sub.id] || 0;
      return `
        <div class="subject-card" style="background: rgba(255,255,255,0.02); border: var(--border-style); border-radius: var(--radius-md); padding: 16px; display: flex; flex-direction: column; gap: 8px;">
          <div style="font-weight: 700; font-size: 13px; color: var(--text-main);">${sub.name}</div>
          <div style="display: flex; justify-content: space-between; font-size: 11px; color: var(--text-muted); font-weight: 600;">
            <span>Mastery Level</span>
            <span style="color: var(--primary-color);">${best.toFixed(2)}%</span>
          </div>
          <div class="progress-bar-bg" style="height: 6px; background: rgba(255,255,255,0.05); border-radius: 99px; overflow: hidden;">
            <div class="progress-bar-fill" style="width: ${best}%; height: 100%; background: var(--primary-color); border-radius: 99px;"></div>
          </div>
        </div>
      `;
    }).join("");
  }
  
  // Render Attempt History
  const attemptHistoryList = document.getElementById("attempt-history-list");
  if (attemptHistoryList) {
    if (history.length === 0) {
      attemptHistoryList.innerHTML = `<div class="no-history-text" style="color: var(--text-muted); font-size: 13px; padding: 20px; text-align: center;">No attempts recorded yet. Start a Practice Arena game or Mock Exam!</div>`;
    } else {
      const recent = [...history].sort((a, b) => b.timestamp - a.timestamp).slice(0, 5);
      attemptHistoryList.innerHTML = recent.map(entry => {
        const isQuiz = entry.mode === "quiz";
        const dateStr = new Date(entry.timestamp).toLocaleString();
        const pct = Math.round((entry.score / entry.total) * 100);
        const badgeText = pct >= 75 ? "PASS" : "REVIEW";
        const title = isQuiz ? `Daily Quiz: ${entry.topic}` : `Comprehensive Mock Exam`;
        const icon = isQuiz ? "💡" : "⚡";
        
        const badgeStyle = pct >= 75 
          ? "background: rgba(16, 185, 129, 0.1); color: #10b981; border: 1px solid rgba(16, 185, 129, 0.2);"
          : "background: rgba(239, 68, 68, 0.1); color: #ef4444; border: 1px solid rgba(239, 68, 68, 0.2);";

        return `
          <div class="history-item" style="background: rgba(255,255,255,0.01); border: var(--border-style); border-radius: var(--radius-md); padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; gap: 12px;">
            <div style="display: flex; align-items: center; gap: 12px; min-width: 0;">
              <span style="font-size: 20px;">${icon}</span>
              <div style="min-width: 0;">
                <div style="font-weight: 700; font-size: 13px; color: var(--text-main); white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">${title}</div>
                <div style="font-size: 11px; color: var(--text-muted); margin-top: 2px;">${dateStr}</div>
              </div>
            </div>
            <div style="display: flex; align-items: center; gap: 12px;">
              <div style="text-align: right;">
                <div style="font-weight: 800; font-size: 13px; color: var(--text-main);">${entry.score} / ${entry.total}</div>
                <div style="font-size: 11px; color: var(--text-muted); font-weight: 600; margin-top: 2px;">${pct}%</div>
              </div>
              <span style="font-size: 9px; font-weight: 800; padding: 4px 8px; border-radius: 4px; letter-spacing: 0.5px; ${badgeStyle}">${badgeText}</span>
            </div>
          </div>
        `;
      }).join("");
    }
  }
}

// ==========================================
// 1. CONNECT THE DOTS (PATHWAYS)
// ==========================================
const DOTS_PATHWAYS = [
  {
    title: "Reflex Arc Sequence",
    steps: [
      "Receptor (receives stimulus)",
      "Sensory Neuron (transmits afferent signal)",
      "Integration Center (CNS synapse)",
      "Motor Neuron (transmits efferent signal)",
      "Effector Organ (muscle/gland responds)"
    ]
  },
  {
    title: "Cardiopulmonary Blood Flow",
    steps: [
      "Right Atrium (deoxygenated blood enters)",
      "Right Ventricle (pumps to lungs)",
      "Pulmonary Artery (transports to lungs)",
      "Lungs (gas exchange occurs)",
      "Left Atrium (oxygenated blood enters)",
      "Left Ventricle (pumps to body)",
      "Aorta (distributes to systemic circulation)"
    ]
  },
  {
    title: "Action Potential Propagation",
    steps: [
      "Resting Membrane Potential (-70mV)",
      "Depolarization Threshold (-55mV)",
      "Voltage-Gated Sodium Channels Open (Influx)",
      "Peak Action Potential (+30mV)",
      "Voltage-Gated Potassium Channels Open (Outflux)",
      "Hyperpolarization (refractory period)",
      "Na+/K+ Pump Restores Resting Potential"
    ]
  }
];

function startDotsGame() {
  document.getElementById("challenge-intro-screen").style.display = "none";
  document.getElementById("dots-session").style.display = "flex";
  
  const pathway = DOTS_PATHWAYS[Math.floor(Math.random() * DOTS_PATHWAYS.length)];
  state.dotsPathway = pathway;
  state.dotsStepIndex = 0;
  
  document.getElementById("dots-pathway-title").textContent = pathway.title;
  document.getElementById("dots-feedback").textContent = "";
  
  state.dotsShuffledSteps = pathway.steps.map((text, idx) => ({ text, originalIndex: idx }));
  state.dotsShuffledSteps.sort(() => Math.random() - 0.5);
  
  renderDotsNodes();
}

function renderDotsNodes() {
  const container = document.getElementById("dots-nodes-container");
  container.innerHTML = "";
  
  state.dotsShuffledSteps.forEach((node, displayIdx) => {
    const btn = document.createElement("button");
    btn.className = "dot-node";
    btn.style.width = "100%";
    btn.style.textAlign = "left";
    btn.style.padding = "14px 20px";
    btn.style.marginBottom = "8px";
    btn.innerHTML = `
      <span class="option-indicator">${displayIdx + 1}</span>
      <span style="flex:1; margin-left: 10px;">${node.text}</span>
    `;
    
    btn.onclick = () => selectDotsNode(node, btn);
    container.appendChild(btn);
  });
}

function selectDotsNode(node, element) {
  if (element.classList.contains("correct")) return;
  
  const feedback = document.getElementById("dots-feedback");
  
  if (node.originalIndex === state.dotsStepIndex) {
    SoundEffect.playCorrect();
    element.className = "dot-node correct";
    state.dotsStepIndex++;
    addXP(15);
    feedback.innerHTML = `<span style="color:#10b981;">Correct step! (+15 XP)</span>`;
    
    if (state.dotsStepIndex === state.dotsPathway.steps.length) {
      feedback.innerHTML = `<span style="color:#10b981; font-weight:800;">Pathway Completed! (+100 XP)</span>`;
      setTimeout(() => {
        state.trophyCount++;
        localStorage.setItem("pt_trophies", state.trophyCount.toString());
        updateTrophyUI();
        addXP(100);
        triggerQuestCompletion("perfectScore");
        alert("🏆 Excellent! You successfully connected all the dots in sequence! Gold trophy added.");
        resetPracticeViews();
      }, 1000);
    }
  } else {
    SoundEffect.playWrong();
    element.className = "dot-node wrong";
    feedback.innerHTML = `<span style="color:#ef4444;">Wrong step! Connection broken. Resetting pathway order...</span>`;
    
    setTimeout(() => {
      state.dotsStepIndex = 0;
      renderDotsNodes();
      feedback.innerHTML = `<span style="color:var(--text-muted);">Start again from the first step.</span>`;
    }, 800);
  }
}

// ==========================================
// 2. GUESS THE ANSWER (CLINICAL CLUES)
// ==========================================
const GUESS_CLUES = [
  { clue: "A patient presents with a wrist drop after sleeping with their arm over the back of a chair. Which nerve is compressed?", answer: "RADIAL" },
  { clue: "A patient reports severe heel pain. The Thompson test is positive. Which tendon is ruptured?", answer: "ACHILLES" },
  { clue: "Which rotator cuff muscle initiates the first 15 degrees of shoulder abduction?", answer: "SUPRASPINATUS" },
  { clue: "What clinical sign (dorsiflexion of the great toe and fanning of others) indicates an UMN lesion in adults?", answer: "BABINSKI" },
  { clue: "What is the primary muscle of respiration, innervated by the phrenic nerve?", answer: "DIAPHRAGM" },
  { clue: "Which cranial nerve innervates the muscles of mastication?", answer: "TRIGEMINAL" },
  { clue: "Which wrist bone acts as the keystone in the proximal carpal row and lies at the center?", answer: "LUNATE" }
];

let currentGuessList = [];
function startGuessGame() {
  document.getElementById("challenge-intro-screen").style.display = "none";
  document.getElementById("guess-session").style.display = "flex";
  
  currentGuessList = [...GUESS_CLUES].sort(() => Math.random() - 0.5).slice(0, 5);
  state.guessRound = 0;
  loadGuessRound();
}

function loadGuessRound() {
  if (state.guessRound >= 5) {
    state.trophyCount++;
    localStorage.setItem("pt_trophies", state.trophyCount.toString());
    updateTrophyUI();
    addXP(100);
    triggerQuestCompletion("perfectScore");
    alert("🏆 Outstanding! You solved all 5 clinical case guesses! Gold trophy added.");
    resetPracticeViews();
    return;
  }
  
  const roundData = currentGuessList[state.guessRound];
  state.guessWord = roundData.answer.toUpperCase();
  state.guessGuessedLetters = [];
  state.guessWrongCount = 0;
  state.guessMaxWrong = 6;
  
  document.getElementById("guess-round-indicator").textContent = `Round ${state.guessRound + 1} of 5`;
  document.getElementById("guess-clue").textContent = roundData.clue;
  document.getElementById("guess-feedback").textContent = "";
  
  renderGuessSlots();
  renderGuessKeyboard();
}

function renderGuessSlots() {
  const container = document.getElementById("guess-slots");
  container.innerHTML = "";
  
  for (let i = 0; i < state.guessWord.length; i++) {
    const char = state.guessWord[i];
    const slot = document.createElement("div");
    slot.className = "guess-letter-slot";
    
    if (state.guessGuessedLetters.includes(char)) {
      slot.textContent = char;
    } else {
      slot.textContent = "";
    }
    container.appendChild(slot);
  }
}

function renderGuessKeyboard() {
  const keyboard = document.getElementById("guess-keyboard");
  keyboard.innerHTML = "";
  
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  letters.forEach(char => {
    const btn = document.createElement("button");
    btn.className = "guess-key";
    btn.textContent = char;
    
    if (state.guessGuessedLetters.includes(char)) {
      btn.className = "guess-key used";
      btn.disabled = true;
    }
    
    btn.onclick = () => selectGuessLetter(char, btn);
    keyboard.appendChild(btn);
  });
}

function selectGuessLetter(char, element) {
  if (state.guessGuessedLetters.includes(char)) return;
  
  state.guessGuessedLetters.push(char);
  element.disabled = true;
  element.className = "guess-key used";
  
  const feedback = document.getElementById("guess-feedback");
  
  if (state.guessWord.includes(char)) {
    SoundEffect.playCorrect();
    renderGuessSlots();
    
    let won = true;
    for (let i = 0; i < state.guessWord.length; i++) {
      if (!state.guessGuessedLetters.includes(state.guessWord[i])) {
        won = false;
        break;
      }
    }
    
    if (won) {
      feedback.innerHTML = `<span style="color:#10b981;">Correct word solved! (+20 XP)</span>`;
      addXP(20);
      setTimeout(() => {
        state.guessRound++;
        loadGuessRound();
      }, 1200);
    }
  } else {
    SoundEffect.playWrong();
    state.guessWrongCount++;
    
    const remaining = state.guessMaxWrong - state.guessWrongCount;
    feedback.innerHTML = `<span style="color:#ef4444;">Wrong letter! ${remaining} attempts remaining.</span>`;
    
    if (state.guessWrongCount >= state.guessMaxWrong) {
      feedback.innerHTML = `<span style="color:#ef4444; font-weight:800;">Game Over! The correct word was ${state.guessWord}.</span>`;
      setTimeout(() => {
        alert("Hangman failed! Try studying the flashcards and try again.");
        resetPracticeViews();
      }, 1500);
    }
  }
}

// ==========================================
// 3. COMPLETE THE WORD (MISSING LETTERS)
// ==========================================
const COMPLETE_WORD_POOL = [
  { word: "DIAPHRAGM", clue: "Primary muscle of respiration, innervated by the phrenic nerve.", blanks: [1, 6] },
  { word: "NEPHRON", clue: "The functional unit of the kidney responsible for urine formation.", blanks: [1, 4] },
  { word: "TROPONIN", clue: "The calcium-binding protein on thin filaments that initiates muscle contraction.", blanks: [2, 5] },
  { word: "MYELIN", clue: "The insulating lipid sheath around axons.", blanks: [1, 4] },
  { word: "GONIOMETER", clue: "The primary tool used to measure joint range of motion.", blanks: [1, 5, 8] },
  { word: "SARTORIUS", clue: "The longest muscle in the body, flexes, abducts, and laterally rotates the hip.", blanks: [1, 4, 7] }
];

let currentCompleteList = [];
function startCompleteWordGame() {
  document.getElementById("challenge-intro-screen").style.display = "none";
  document.getElementById("complete-session").style.display = "flex";
  
  currentCompleteList = [...COMPLETE_WORD_POOL].sort(() => Math.random() - 0.5).slice(0, 5);
  state.completeRound = 0;
  loadCompleteRound();
}

function loadCompleteRound() {
  if (state.completeRound >= 5) {
    state.trophyCount++;
    localStorage.setItem("pt_trophies", state.trophyCount.toString());
    updateTrophyUI();
    addXP(100);
    triggerQuestCompletion("perfectScore");
    alert("🏆 Brilliant! You completed all 5 word blanks correctly! Gold trophy added.");
    resetPracticeViews();
    return;
  }
  
  const roundData = currentCompleteList[state.completeRound];
  state.completeWord = roundData.word.toUpperCase();
  state.completeClue = roundData.clue;
  state.completeBlanks = roundData.blanks;
  state.completeUserSelections = {};
  state.completeSelectedBlankIdx = 0;
  
  document.getElementById("complete-round-indicator").textContent = `Round ${state.completeRound + 1} of 5`;
  document.getElementById("complete-clue").textContent = state.completeClue;
  document.getElementById("complete-feedback").textContent = "";
  
  renderCompleteWordDisplay();
  renderCompleteChoices();
}

function renderCompleteWordDisplay() {
  const display = document.getElementById("complete-word-display");
  display.innerHTML = "";
  
  const letters = state.completeWord.split("");
  letters.forEach((char, idx) => {
    const span = document.createElement("span");
    span.style.cssText = `
      display: inline-block;
      margin: 0 4px;
      font-size: 26px;
      font-weight: 800;
      text-transform: uppercase;
    `;
    
    if (state.completeBlanks.includes(idx)) {
      const userVal = state.completeUserSelections[idx];
      const isSelectedBlank = state.completeBlanks[state.completeSelectedBlankIdx] === idx;
      
      span.textContent = userVal || "_";
      span.style.color = userVal ? "var(--primary-color)" : "var(--text-muted)";
      span.style.borderBottom = isSelectedBlank ? "3px solid var(--accent-color)" : "2px dashed var(--border-color)";
      span.style.width = "24px";
      span.style.textAlign = "center";
      span.style.cursor = "pointer";
      
      span.onclick = () => {
        const blankPos = state.completeBlanks.indexOf(idx);
        if (blankPos !== -1) {
          state.completeSelectedBlankIdx = blankPos;
          renderCompleteWordDisplay();
        }
      };
    } else {
      span.textContent = char;
      span.style.color = "var(--text-main)";
    }
    
    display.appendChild(span);
  });
}

function renderCompleteChoices() {
  const choicesContainer = document.getElementById("complete-choices");
  choicesContainer.innerHTML = "";
  
  const correctLetters = state.completeBlanks.map(idx => state.completeWord[idx]);
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let pool = [...correctLetters];
  while (pool.length < 6) {
    const r = alphabet[Math.floor(Math.random() * alphabet.length)];
    if (!pool.includes(r)) pool.push(r);
  }
  
  pool.sort(() => Math.random() - 0.5);
  
  pool.forEach(char => {
    const btn = document.createElement("button");
    btn.className = "complete-choice-btn";
    btn.textContent = char;
    btn.onclick = () => selectCompleteChoice(char);
    choicesContainer.appendChild(btn);
  });
}

function selectCompleteChoice(char) {
  const activeBlankIdx = state.completeBlanks[state.completeSelectedBlankIdx];
  state.completeUserSelections[activeBlankIdx] = char;
  
  let nextBlankIdx = state.completeSelectedBlankIdx;
  for (let i = 0; i < state.completeBlanks.length; i++) {
    if (!state.completeUserSelections[state.completeBlanks[i]]) {
      nextBlankIdx = i;
      break;
    }
  }
  state.completeSelectedBlankIdx = nextBlankIdx;
  
  renderCompleteWordDisplay();
  
  const allFilled = state.completeBlanks.every(idx => state.completeUserSelections[idx]);
  if (allFilled) {
    let isCorrect = true;
    state.completeBlanks.forEach(idx => {
      if (state.completeUserSelections[idx] !== state.completeWord[idx]) {
        isCorrect = false;
      }
    });
    
    const feedback = document.getElementById("complete-feedback");
    if (isCorrect) {
      SoundEffect.playCorrect();
      addXP(20);
      feedback.innerHTML = `<span style="color:#10b981;">Correct! Word completed! (+20 XP)</span>`;
      setTimeout(() => {
        state.completeRound++;
        loadCompleteRound();
      }, 1200);
    } else {
      SoundEffect.playWrong();
      feedback.innerHTML = `<span style="color:#ef4444;">Incorrect spelling. Resetting blanks...</span>`;
      setTimeout(() => {
        state.completeUserSelections = {};
        state.completeSelectedBlankIdx = 0;
        renderCompleteWordDisplay();
        feedback.innerHTML = "";
      }, 1000);
    }
  }
}

// ==========================================
// 4. 4 WORDS 1 ANSWER (SPELL THE TERM)
// ==========================================
const FOUR_WORDS_POOL = [
  { clues: ["Foot", "Ankle", "Upward", "Dorsal"], answer: "DORSIFLEXION" },
  { clues: ["Heart", "Output", "Pump", "Vessel"], answer: "AORTA" },
  { clues: ["Brain", "Synapse", "Axon", "Myelin"], answer: "NEURON" },
  { clues: ["Joint", "Fluid", "Smooth", "Cavity"], answer: "SYNOVIAL" },
  { clues: ["Muscle", "Fatigue", "Acid", "Sore"], answer: "LACTIC" }
];

let currentFourWordsList = [];
function startFourWordsGame() {
  document.getElementById("challenge-intro-screen").style.display = "none";
  document.getElementById("four-words-session").style.display = "flex";
  
  currentFourWordsList = [...FOUR_WORDS_POOL].sort(() => Math.random() - 0.5).slice(0, 5);
  state.fourWordsRound = 0;
  loadFourWordsRound();
}

function loadFourWordsRound() {
  if (state.fourWordsRound >= 5) {
    state.trophyCount++;
    localStorage.setItem("pt_trophies", state.trophyCount.toString());
    updateTrophyUI();
    addXP(100);
    triggerQuestCompletion("perfectScore");
    alert("🏆 Outstanding! You solved all 5 4 Words 1 Answer puzzles! Gold trophy added.");
    resetPracticeViews();
    return;
  }
  
  const roundData = currentFourWordsList[state.fourWordsRound];
  state.fourWordsWord = roundData.answer.toUpperCase();
  state.fourWordsClues = roundData.clues;
  state.fourWordsSpelled = [];
  
  document.getElementById("four-words-round-indicator").textContent = `Round ${state.fourWordsRound + 1} of 5`;
  
  document.getElementById("clue1").textContent = state.fourWordsClues[0];
  document.getElementById("clue2").textContent = state.fourWordsClues[1];
  document.getElementById("clue3").textContent = state.fourWordsClues[2];
  document.getElementById("clue4").textContent = state.fourWordsClues[3];
  
  document.getElementById("four-words-feedback").textContent = "";
  
  const correctLetters = state.fourWordsWord.split("");
  let choices = [...correctLetters];
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  while (choices.length < 12) {
    const r = alphabet[Math.floor(Math.random() * alphabet.length)];
    choices.push(r);
  }
  
  state.fourWordsLetterChoices = choices.map((char, index) => ({ id: index, char, used: false }));
  state.fourWordsLetterChoices.sort(() => Math.random() - 0.5);
  
  renderFourWordsSlots();
  renderFourWordsOptions();
}

function renderFourWordsSlots() {
  const container = document.getElementById("four-words-slots");
  container.innerHTML = "";
  
  for (let i = 0; i < state.fourWordsWord.length; i++) {
    const item = state.fourWordsSpelled[i];
    const slot = document.createElement("button");
    slot.className = "spell-slot-block";
    
    if (item) {
      slot.textContent = item.char;
      slot.onclick = () => removeFourWordsLetter(i);
    } else {
      slot.textContent = "";
    }
    
    container.appendChild(slot);
  }
}

function renderFourWordsOptions() {
  const container = document.getElementById("four-words-options");
  container.innerHTML = "";
  
  state.fourWordsLetterChoices.forEach(choice => {
    const btn = document.createElement("button");
    btn.className = "spell-option-btn";
    btn.textContent = choice.char;
    
    if (choice.used) {
      btn.className = "spell-option-btn selected";
      btn.disabled = true;
    }
    
    btn.onclick = () => tapFourWordsLetter(choice);
    container.appendChild(btn);
  });
}

function tapFourWordsLetter(choice) {
  if (choice.used) return;
  
  if (state.fourWordsSpelled.length < state.fourWordsWord.length) {
    choice.used = true;
    state.fourWordsSpelled.push({ choiceId: choice.id, char: choice.char });
    
    renderFourWordsSlots();
    renderFourWordsOptions();
  }
}

function removeFourWordsLetter(index) {
  const item = state.fourWordsSpelled[index];
  if (!item) return;
  
  const choice = state.fourWordsLetterChoices.find(c => c.id === item.choiceId);
  if (choice) {
    choice.used = false;
  }
  
  state.fourWordsSpelled.splice(index, 1);
  
  renderFourWordsSlots();
  renderFourWordsOptions();
}

function clearFourWordsSpell() {
  state.fourWordsSpelled = [];
  state.fourWordsLetterChoices.forEach(choice => choice.used = false);
  renderFourWordsSlots();
  renderFourWordsOptions();
}

function submitFourWordsSpell() {
  const spelled = state.fourWordsSpelled.map(item => item.char).join("");
  const correct = state.fourWordsWord;
  const feedback = document.getElementById("four-words-feedback");
  
  if (spelled === correct) {
    SoundEffect.playCorrect();
    addXP(25);
    feedback.innerHTML = `<span style="color:#10b981;">Correct! +25 XP Gained!</span>`;
    
    setTimeout(() => {
      state.fourWordsRound++;
      loadFourWordsRound();
    }, 1200);
  } else {
    SoundEffect.playWrong();
    feedback.innerHTML = `<span style="color:#ef4444;">Incorrect spelling! Double check the clues.</span>`;
  }
}

// ==========================================
// 5. PANDORA'S BOX (BOT VS STUDENT)
// ==========================================
const PANDORA_QUESTIONS = [
  {
    question: "During nerve conduction velocity testing of the ulnar nerve, the therapist stimulates the nerve at the wrist and below the elbow. What conduction pathology is indicated by an increased distal latency and reduced amplitude?",
    options: ["Axonal degeneration", "Demyelination", "Sunderland Class I neuropraxia", "Wallerian degeneration"],
    answer: 1,
    explanation: "Distal latency increases during demyelination due to a drop in myelin sheath propagation efficiency, whereas axonal loss typically leads directly to pure amplitude reductions."
  },
  {
    question: "A patient with complete T4 spinal cord injury displays a sudden spike in blood pressure (200/100 mmHg), bradycardia, and sweating above the level of lesion. What is the immediate first action the therapist must take?",
    options: ["Lay the patient flat immediately to improve brain perfusion", "Sit the patient upright and check the urinary drainage catheter for kinks", "Administer nitroglycerin spray sublingually", "Begin high-flow oxygen administration"],
    answer: 1,
    explanation: "This is Autonomic Dysreflexia, a medical emergency. Sitting the patient upright lowers BP gravimetrically, and checking for common triggers (full bladder) is critical."
  },
  {
    question: "According to the concave-convex rule, when mobilizing the glenohumeral joint to improve shoulder abduction, in what direction should the humeral head be glided?",
    options: ["Superiorly", "Anteriorly", "Inferiorly", "Posteriorly"],
    answer: 2,
    explanation: "The glenohumeral joint involves a convex humerus on a concave glenoid. Since roll and glide are in opposite directions, to improve abduction (superior roll), the humeral head must be glided inferiorly."
  },
  {
    question: "Which lung volume calculation represents Functional Residual Capacity (FRC)?",
    options: ["ERV + RV", "VT + IRV", "VT + ERV", "IRV + ERV + RV"],
    answer: 0,
    explanation: "Functional Residual Capacity (FRC) is the amount of air remaining in the lungs after a normal passive exhalation, which equals Expiratory Reserve Volume (ERV) plus Residual Volume (RV)."
  },
  {
    question: "A patient with a lesion of the Right Optic Tract would present with which of the following visual field deficits?",
    options: ["Right homonymous hemianopsia", "Left homonymous hemianopsia", "Bitemporal hemianopsia", "Ipsilateral monocular blindness"],
    answer: 1,
    explanation: "A lesion of the optic tract causes a contralateral homonymous hemianopsia. Thus, a Right optic tract lesion causes Left homonymous hemianopsia."
  }
];

function startPandoraGame() {
  document.getElementById("challenge-intro-screen").style.display = "none";
  document.getElementById("pandora-session").style.display = "flex";
  
  state.pandoraRound = 0;
  state.pandoraCorrectAnswerCount = 0;
  state.pandoraBuffs = { doubleXP: false, shield: false };
  loadPandoraRound();
}

function loadPandoraRound() {
  if (state.pandoraRound >= 5) {
    state.trophyCount++;
    localStorage.setItem("pt_trophies", state.trophyCount.toString());
    updateTrophyUI();
    addXP(100);
    triggerQuestCompletion("perfectScore");
    alert(`🏆 Pandora's Box cleared! You answered ${state.pandoraCorrectAnswerCount} / 5 correctly. Gold trophy added!`);
    resetPracticeViews();
    return;
  }
  
  state.pandoraAnswered = false;
  state.pandoraSelectedOption = null;
  
  document.getElementById("pandora-round-indicator").textContent = `Round ${state.pandoraRound + 1} of 5`;
  document.getElementById("pandora-boxes-card").style.display = "none";
  document.getElementById("pandora-question-card").style.display = "block";
  document.getElementById("pandora-next-btn").style.display = "none";
  
  const botMsgs = [
    "Let's see if you can handle this clinical board question, student!",
    "Ah, a classical scenario! Can you diagnose it?",
    "Pay attention to the patient parameters. What is the correct choice?",
    "Don't let the clinical distractors fool you! Pick wisely.",
    "This is the final challenge. Make your CI instructor proud!"
  ];
  document.getElementById("bot-message").textContent = botMsgs[state.pandoraRound];
  
  renderPandoraQuestion();
}

function renderPandoraQuestion() {
  const q = PANDORA_QUESTIONS[state.pandoraRound];
  const container = document.getElementById("pandora-question-card");
  
  container.innerHTML = `
    <div class="question-text" style="font-size:15px; font-weight:700; text-align:left; margin-bottom:16px;">${q.question}</div>
    <div class="options-list" style="display:flex; flex-direction:column; gap:10px;">
      ${q.options.map((opt, i) => `
        <button class="option-btn" onclick="selectPandoraOption(${i})">
          <span class="option-indicator">${String.fromCharCode(65 + i)}</span>
          <span style="flex:1; text-align: left; margin-left: 10px;">${opt}</span>
        </button>
      `).join("")}
    </div>
    <button class="test-card-btn" id="pandora-submit-btn" onclick="submitPandoraAnswer()" style="margin-top:20px; width:100%;" disabled>Submit Answer</button>
  `;
}

function selectPandoraOption(index) {
  if (state.pandoraAnswered) return;
  state.pandoraSelectedOption = index;
  
  document.querySelectorAll("#pandora-question-card .option-btn").forEach((btn, i) => {
    btn.classList.remove("selected");
    if (i === index) btn.classList.add("selected");
  });
  
  document.getElementById("pandora-submit-btn").disabled = false;
}

function submitPandoraAnswer() {
  if (state.pandoraAnswered) return;
  state.pandoraAnswered = true;
  
  const q = PANDORA_QUESTIONS[state.pandoraRound];
  const isCorrect = state.pandoraSelectedOption === q.answer;
  
  document.querySelectorAll("#pandora-question-card .option-btn").forEach((btn, i) => {
    btn.classList.remove("selected");
    if (i === q.answer) {
      btn.classList.add("correct");
    } else if (i === state.pandoraSelectedOption) {
      btn.classList.add("wrong");
    }
  });
  
  if (isCorrect) {
    state.pandoraCorrectAnswerCount++;
    SoundEffect.playCorrect();
    const botAdvice = [
      "Well done! I have a feeling Box A contains double XP, but I'll open Box C.",
      "Impressive answer! My sensors suggest Box B is safe. I'm choosing Box A.",
      "Correct! Watch out, Box C looks suspicious! I'll take Box B.",
      "Excellent. Box B is highly charged. I'll open Box A.",
      "Spot on! I will open Box B, you should choose A or C."
    ];
    document.getElementById("bot-message").textContent = botAdvice[state.pandoraRound];
    
    setTimeout(() => {
      document.getElementById("pandora-question-card").style.display = "none";
      document.getElementById("pandora-boxes-card").style.display = "block";
      
      document.querySelectorAll(".pandora-box-item").forEach(box => {
        box.style.background = "rgba(0,0,0,0.2)";
        box.style.borderColor = "var(--border-color)";
        box.style.opacity = "1";
        box.style.pointerEvents = "auto";
        box.querySelector(".box-icon").textContent = "📦";
      });
      document.getElementById("pandora-box-feedback").textContent = "";
      document.getElementById("pandora-next-btn").style.display = "none";
    }, 1500);
  } else {
    SoundEffect.playWrong();
    document.getElementById("bot-message").textContent = "Incorrect! You miss out on the Pandora's Box selection this round.";
    
    const card = document.getElementById("pandora-question-card");
    const explanationDiv = document.createElement("div");
    explanationDiv.className = "explanation-box";
    explanationDiv.style.marginTop = "15px";
    explanationDiv.innerHTML = `<strong>Incorrect.</strong> ${q.explanation}`;
    card.appendChild(explanationDiv);
    
    document.getElementById("pandora-submit-btn").style.display = "none";
    const nextBtn = document.createElement("button");
    nextBtn.className = "test-card-btn";
    nextBtn.style.cssText = "margin-top: 20px; width: 100%;";
    nextBtn.textContent = "Next Round";
    nextBtn.onclick = () => {
      state.pandoraRound++;
      loadPandoraRound();
    };
    card.appendChild(nextBtn);
  }
}

function choosePandoraBox(boxLetter) {
  document.querySelectorAll(".pandora-box-item").forEach(box => {
    box.style.pointerEvents = "none";
    if (box.id !== `pbox-${boxLetter}`) {
      box.style.opacity = "0.5";
    }
  });
  
  const rewards = [
    { type: "XP_BUFF", label: "Double XP Buff Activated ⚡", text: "Your next correct answer gives double XP!" },
    { type: "XP_PLUS", label: "+50 XP Boost! 🚀", text: "You gained an immediate 50 XP bonus!" },
    { type: "SHIELD", label: "Shield Acquired 🛡️", text: "Protects you from the next negative penalty." },
    { type: "PENALTY_XP", label: "-20 XP Debuff ⚠️", text: "Oh no! You hit a clinical trap and lost 20 XP!" },
    { type: "PENALTY_STREAK", label: "Streak Reset 💔", text: "Oh no! Your progress streak was reset." }
  ];
  
  const userRoll = rewards[Math.floor(Math.random() * rewards.length)];
  
  let feedbackText = "";
  if (userRoll.type === "XP_BUFF") {
    state.pandoraBuffs.doubleXP = true;
    feedbackText = `<div style="color:#3b82f6; font-weight:800;">${userRoll.label}</div><div style="font-size:12px; margin-top:4px;">${userRoll.text}</div>`;
    addXP(10);
  } else if (userRoll.type === "XP_PLUS") {
    addXP(50);
    feedbackText = `<div style="color:#10b981; font-weight:800;">${userRoll.label}</div><div style="font-size:12px; margin-top:4px;">${userRoll.text}</div>`;
  } else if (userRoll.type === "SHIELD") {
    state.pandoraBuffs.shield = true;
    feedbackText = `<div style="color:#10b981; font-weight:800;">${userRoll.label}</div><div style="font-size:12px; margin-top:4px;">${userRoll.text}</div>`;
    addXP(10);
  } else if (userRoll.type === "PENALTY_XP") {
    if (state.pandoraBuffs.shield) {
      state.pandoraBuffs.shield = false;
      feedbackText = `<div style="color:#3b82f6; font-weight:800;">Shield Absorbed Penalty! 🛡️</div><div style="font-size:12px; margin-top:4px;">Your shield broke but prevented the -20 XP loss!</div>`;
    } else {
      state.xp = Math.max(0, state.xp - 20);
      feedbackText = `<div style="color:#ef4444; font-weight:800;">${userRoll.label}</div><div style="font-size:12px; margin-top:4px;">${userRoll.text}</div>`;
      localStorage.setItem("pt_xp", state.xp.toString());
      updateGameStatsUI();
    }
  } else if (userRoll.type === "PENALTY_STREAK") {
    if (state.pandoraBuffs.shield) {
      state.pandoraBuffs.shield = false;
      feedbackText = `<div style="color:#3b82f6; font-weight:800;">Shield Absorbed Penalty! 🛡️</div><div style="font-size:12px; margin-top:4px;">Your shield broke but saved your streak!</div>`;
    } else {
      state.streak = 0;
      feedbackText = `<div style="color:#ef4444; font-weight:800;">${userRoll.label}</div><div style="font-size:12px; margin-top:4px;">${userRoll.text}</div>`;
    }
  }
  
  if (userRoll.type.startsWith("PENALTY")) {
    SoundEffect.playWrong();
  } else {
    SoundEffect.playCorrect();
  }
  
  const chosenBox = document.getElementById(`pbox-${boxLetter}`);
  chosenBox.querySelector(".box-icon").textContent = userRoll.type.startsWith("PENALTY") ? "💥" : "🎁";
  chosenBox.style.background = userRoll.type.startsWith("PENALTY") ? "rgba(239, 68, 68, 0.1)" : "rgba(16, 185, 129, 0.1)";
  chosenBox.style.borderColor = userRoll.type.startsWith("PENALTY") ? "#ef4444" : "#10b981";
  
  const letters = ["A", "B", "C"].filter(l => l !== boxLetter);
  const botBox = letters[Math.floor(Math.random() * letters.length)];
  const botRoll = rewards[Math.floor(Math.random() * rewards.length)];
  
  setTimeout(() => {
    const botBoxEl = document.getElementById(`pbox-${botBox}`);
    botBoxEl.querySelector(".box-icon").textContent = botRoll.type.startsWith("PENALTY") ? "💥" : "🎁";
    botBoxEl.style.opacity = "0.8";
    botBoxEl.style.background = "rgba(255,255,255,0.05)";
    
    let botDialogue = "";
    if (botRoll.type === "XP_BUFF") {
      botDialogue = `I opened Box ${botBox} and found a Double XP buff! Not bad.`;
    } else if (botRoll.type === "XP_PLUS") {
      botDialogue = `I opened Box ${botBox} and claimed +50 XP for my processors!`;
    } else if (botRoll.type === "SHIELD") {
      botDialogue = `Box ${botBox} granted me a Shield. Clinical defense active!`;
    } else {
      botDialogue = `Phew! Box ${botBox} contained a trap: ${botRoll.label}. Glad I didn't step in it!`;
    }
    
    document.getElementById("bot-message").textContent = botDialogue;
    document.getElementById("pandora-box-feedback").innerHTML = feedbackText;
    document.getElementById("pandora-next-btn").style.display = "block";
  }, 1000);
}

function nextPandoraRound() {
  state.pandoraRound++;
  loadPandoraRound();
}

