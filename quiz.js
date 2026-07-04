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

// ================= LEADERBOARD =================
db.ref("players").on("value", snap => {
const data = snap.val();
if (!data) return;

const sorted = Object.values(data).sort((a,b)=>b.score-a.score);

const list = document.getElementById("scores");
if (!list) return;

list.innerHTML = "";

sorted.forEach((p,i)=>{
const li = document.createElement("li");
li.innerText = `${i+1}. ${p.name} - ${p.score}`;
list.appendChild(li);
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
alert("Reset done 🔄");
}