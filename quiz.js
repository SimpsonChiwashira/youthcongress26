// ================= FIREBASE =================
// (DO NOT CHANGE)
const firebaseConfig = {
apiKey: "AIzaSyBjcpMtLit2OD465G7HZRnrVLWHDp5EDVw",
authDomain: "zccew-youth-congres-26.firebaseapp.com",
projectId: "zccew-youth-congres-26",
storageBucket: "zccew-youth-congres-26.firebasestorage.app",
messagingSenderId: "786630899398",
appId: "1:786630899398:web:b76a78e2f8549b505e89c7",
measurementId: "G-NHP5T6BLCS"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

// ================= QUESTIONS (CLEAN SINGLE SOURCE) =================
const questions = [
{ q:"What is the traditional Shona instrument made of metal keys bound to a wooden soundboard inside a calabash?", a:["Marimba","Mbira","Hosho"], correct:1 },
{ q:"If you visit elders in Zimbabwe to show respect, what gesture should you do?", a:["High five","Clapping hands (Kuombera)","Fist bump"], correct:1 },
{ q:"What is Zimbabwe's national dish made from maize meal?", a:["Sadza","Mupunga","Amadumbe"], correct:0 },
{ q:"Which waterfall is called 'Mosi-oa-Tunya'?", a:["Victoria Falls","Mutarazi Falls","Bridal Veil Falls"], correct:0 },
{ q:"What does the Zimbabwe bird represent?", a:["Peace and history","Hunting industry","Speed"], correct:0 },
{ q:"What is bride price called in Ndebele culture?", a:["Roora","Lobola","Nhaka"], correct:1 },
{ q:"Which stone city gave Zimbabwe its name?", a:["Khami","Great Zimbabwe","Dhlo Dhlo"], correct:1 },
{ q:"What fabric is used in Zimbabwe celebrations?", a:["Kente","Chitenge","Dashiki"], correct:1 },
{ q:"What does 'Muzukuru' mean?", a:["Uncle","Niece/Grandchild","Cousin"], correct:1 },
{ q:"Which month is sacred (no weddings)?", a:["April","August","November"], correct:2 },

{ q:"Who is patron saint of youth?", a:["St John Bosco","St Francis","St Anthony"], correct:0 },
{ q:"Which saint was martyred in Zimbabwe 1561?", a:["Gonçalo da Silveira","St Kizito","Fr Chang"], correct:0 },
{ q:"Youth guild dedicated to Mary?", a:["Sacred Heart","St Anne","Legion of Mary"], correct:2 },
{ q:"Vestment colour in Ordinary Time?", a:["Purple","Green","White"], correct:1 },
{ q:"Modern teen beatified saint?", a:["Carlo Acutis","St Tarcisius","St Dominic Savio"], correct:0 },
{ q:"Prayer with beads?", a:["Angelus","Rosary","Chaplet"], correct:1 },
{ q:"How many Sacraments?", a:["3","5","7"], correct:2 },
{ q:"Holy Spirit feast?", a:["Pentecost","Ascension","Epiphany"], correct:0 },
{ q:"Head of Catholic Church?", a:["Archbishop","Pope","Patriarch"], correct:1 },
{ q:"African martyrs?", a:["Uganda Martyrs","Egypt Saints","Algeria Monks"], correct:0 },

{ q:"Books in Catholic OT?", a:["39","46","27"], correct:1 },
{ q:"David defeated?", a:["Solomon","Samson","David"], correct:2 },
{ q:"Mount of Ten Commandments?", a:["Sinai","Tabor","Calvary"], correct:0 },
{ q:"First witness of Resurrection?", a:["Peter","Mary Magdalene","John"], correct:1 },
{ q:"Theological virtues?", a:["Peace Joy Kindness","Faith Hope Love","Wisdom Knowledge"], correct:1 },
{ q:"Lions den prophet?", a:["Daniel","Isaiah","Jeremiah"], correct:0 },
{ q:"Shortest verse?", a:["Jesus wept","Rejoice","Pray"], correct:0 },
{ q:"Peter denied Jesus how many times?", a:["1","2","3"], correct:2 },
{ q:"Book of 150 songs?", a:["Proverbs","Psalms","Ecclesiastes"], correct:1 },
{ q:"Meaning of Gospel?", a:["Good News","Holy Writing","Law"], correct:0 }
];

// ================= SAINT SPEED CHALLENGE =================
const saintChallengeQuestions = [
{ clue:"Born in Sudan and known for forgiveness after great suffering.", a:["St. Josephine Bakhita","St. Monica","St. Joan of Arc","St. Therese of Lisieux"], correct:0 },
{ clue:"A young Ugandan martyr who stayed courageous in faith.", a:["St. Kizito","St. Augustine","St. Anthony of Egypt","St. Francis of Assisi"], correct:0 },
{ clue:"A North African saint who became a great teacher of the Church.", a:["St. Augustine of Hippo","St. Dominic Savio","St. Tarcisius","St. John Paul II"], correct:0 },
{ clue:"Prayed with patience for her son Augustine.", a:["St. Monica","St. Felicity","St. Maria Goretti","St. Perpetua"], correct:0 },
{ clue:"A teenage saint known for joy, kindness, and holiness.", a:["St. Dominic Savio","St. Moses the Black","St. Cyprian","St. Athanasius"], correct:0 },
{ clue:"Protected young people and became one of the Uganda Martyrs.", a:["St. Charles Lwanga","St. Martin de Porres","St. Francis","St. Anthony"], correct:0 },
{ clue:"A young saint known for forgiveness and purity of heart.", a:["St. Maria Goretti","St. Teresa of Avila","St. Monica","St. Felicity"], correct:0 },
{ clue:"A young saint who loved the Eucharist deeply.", a:["St. Tarcisius","St. Augustine","St. Moses the Black","St. John Bosco"], correct:0 },
{ clue:"Loved hiking, friendship, prayer, and helping the poor.", a:["St. Pier Giorgio Frassati","St. Kizito","St. Cyprian","St. Anthony of Egypt"], correct:0 },
{ clue:"Started World Youth Day and loved young people.", a:["St. John Paul II","St. Francis of Assisi","St. Dominic Savio","St. Athanasius"], correct:0 },
{ clue:"A young North African mother who showed great courage.", a:["St. Perpetua","St. Therese of Lisieux","St. Joan of Arc","St. Bakhita"], correct:0 },
{ clue:"Changed his life and became a peaceful monk in Egypt.", a:["St. Moses the Black","St. Charles Lwanga","St. Kizito","St. Tarcisius"], correct:0 }
];

let challengeScore = 0;
let challengeIndex = 0;
let challengeTime = 15;
let challengeTimer = null;
let challengeRunning = false;
let challengeOrder = [];

function shuffleArray(items) {
return [...items].sort(() => Math.random() - 0.5);
}

function startSaintChallenge() {
const name = document.getElementById("challengeName")?.value.trim();
if (!name) return alert("Enter your name first");

challengeScore = 0;
challengeIndex = 0;
challengeRunning = true;
challengeOrder = shuffleArray(saintChallengeQuestions).slice(0, 8);

document.getElementById("challengeScore").innerText = challengeScore;
document.getElementById("challengeMessage").innerText = "";
showSaintChallengeQuestion();
}

function showSaintChallengeQuestion() {
clearInterval(challengeTimer);

if (challengeIndex >= challengeOrder.length) {
finishSaintChallenge();
return;
}

const q = challengeOrder[challengeIndex];
const clue = document.getElementById("challengeClue");
const answers = document.getElementById("challengeAnswers");
const time = document.getElementById("challengeTime");

challengeTime = 15;
clue.innerText = q.clue;
time.innerText = challengeTime;
answers.innerHTML = "";

shuffleArray(q.a.map((text, index) => ({ text, isCorrect: index === q.correct }))).forEach(option => {
const btn = document.createElement("button");
btn.innerText = option.text;
btn.onclick = () => chooseSaintChallengeAnswer(option.isCorrect);
answers.appendChild(btn);
});

challengeTimer = setInterval(() => {
challengeTime--;
time.innerText = challengeTime;

if (challengeTime <= 0) {
chooseSaintChallengeAnswer(false);
}
}, 1000);
}

function chooseSaintChallengeAnswer(isCorrect) {
if (!challengeRunning) return;

clearInterval(challengeTimer);

if (isCorrect) {
challengeScore += 10 + challengeTime;
document.getElementById("challengeMessage").innerText = "Correct! +" + (10 + challengeTime) + " points";
} else {
document.getElementById("challengeMessage").innerText = "Time up or incorrect. Next one!";
}

document.getElementById("challengeScore").innerText = challengeScore;
challengeIndex++;
setTimeout(showSaintChallengeQuestion, 900);
}

function finishSaintChallenge() {
challengeRunning = false;
clearInterval(challengeTimer);

const name = document.getElementById("challengeName").value.trim();
document.getElementById("challengeClue").innerText = "Challenge complete!";
document.getElementById("challengeAnswers").innerHTML = "";
document.getElementById("challengeMessage").innerText = "Final score: " + challengeScore;

db.ref("saintChallengeScores").push({
name,
score: challengeScore,
createdAt: Date.now()
});
}

// ================= PLAYER =================
let playerId = null;

// ================= JOIN =================
function joinGame() {
const name = document.getElementById("name")?.value;
if (!name) return alert("Enter name");

playerId = Date.now();

db.ref("players/" + playerId).set({
name,
score: 0
});

alert("Joined 🙏");
}

// ================= START GAME =================
function startQuiz() {
db.ref("game").set({
started: true,
question: 0,
reveal: false,
ended: false
});
alert("Quiz Started 🔥");
}

// ================= NEXT =================
function nextQuestion() {
db.ref("game/reveal").set(false);
db.ref("game/question").transaction(q => (q || 0) + 1);
}

// ================= LISTENER =================
db.ref("game").on("value", snap => {
const game = snap.val();
if (!game) return;

if (game.ended) {
cleanup();
showEnd();
db.ref("players").off();
return;
}

if (game.started) {
showQuestion(game.question);
}
});

// ================= SHOW QUESTION =================
function showQuestion(i) {
const q = questions[i];
if (!q) return;

const box = document.getElementById("quizBox");
const question = document.getElementById("question");
const answers = document.getElementById("answers");

if (!box || !question || !answers) return;

box.style.display = "block";
question.innerText = q.q;
answers.innerHTML = "";

q.a.forEach((a, index) => {
const btn = document.createElement("button");
btn.innerText = a;
btn.onclick = () => answer(index);
answers.appendChild(btn);
});
}

// ================= ANSWER =================
function answer(choice) {
db.ref("game/question").once("value", snap => {
const i = snap.val();
const correct = questions[i].correct;

if (choice === correct) {
db.ref("players/" + playerId + "/score")
.transaction(s => (s || 0) + 1);
}
});
}

// ================= REVEAL =================
db.ref("game/reveal").on("value", snap => {
if (!snap.val()) return;

db.ref("game/question").once("value", s => {
const i = s.val();
const correct = questions[i].correct;

document.querySelectorAll("#answers button").forEach((b, idx) => {
b.style.background = idx === correct ? "green" : "red";
});
});
});

// ================= SAINT CHALLENGE LEADERBOARD =================
db.ref("saintChallengeScores").on("value", snap => {
const data = snap.val();
if (!data) return;

const sorted = Object.values(data)
.sort((a,b)=>b.score-a.score)
.slice(0,10);

const list = document.getElementById("scores");
if (!list) return;

list.innerHTML = "";

sorted.forEach((p,i)=>{
const row = document.createElement("div");
row.className = "leaderboard-row";
row.innerText = `${i+1}. ${p.name} - ${p.score}`;
list.appendChild(row);
});
});

// ================= END GAME =================
function endQuiz() {
db.ref("game/ended").set(true);

setTimeout(() => {
db.ref("players").once("value", snap => {
const data = snap.val() || {};
const top3 = Object.values(data)
.sort((a,b)=>b.score-a.score)
.slice(0,3);

showPodium(top3);
});
}, 1000);
}

// ================= CLEANUP =================
function cleanup() {
const box = document.getElementById("quizBox");
const answers = document.getElementById("answers");
const scores = document.getElementById("scores");

if (box) box.style.display = "none";
if (answers) answers.innerHTML = "";
if (scores) scores.innerHTML = "";
}

// ================= END SCREEN =================
function showEnd() {
document.body.innerHTML = `
<div style="text-align:center;font-family:Arial;margin-top:50px;">
<h1>🏁 Quiz Finished</h1>
<p>Thank you for participating 🙏</p>
</div>
`;
}

// ================= PODIUM =================
function showPodium(top3) {
document.body.innerHTML = `
<h1 style="text-align:center;">🏆 Winners</h1>
<h2>🥇 ${top3[0]?.name || ""}</h2>
<h2>🥈 ${top3[1]?.name || ""}</h2>
<h2>🥉 ${top3[2]?.name || ""}</h2>
`;
}

// ================= RESET =================
function resetGame() {
db.ref("game").remove();
db.ref("players").remove();
db.ref("saintChallengeScores").remove();
alert("Reset done 🔄");
}
