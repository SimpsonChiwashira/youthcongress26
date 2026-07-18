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
const saintChallengeQuestion = [
  // --- GENERAL BIBLE KNOWLEDGE (TOUGH) ---
  {
    clue: "Which obscure King of Salem and Priest of God Most High met Abraham after the defeat of Chedorlaomer, receiving a tenth of everything?",
    a: ["Abimelech", "Melchizedek", "Agag", "Adoni-zedek"],
    correct: 1
  },
  {
    clue: "In the Book of Revelation, what is the name of the great star that fell from heaven into a third of the waters, making them bitter?",
    a: ["Apollyon", "Wormwood", "Lucifer", "Beelzebub"],
    correct: 1
  },
  {
    clue: "Which of the Minor Prophets contains only a single chapter consisting of 21 verses, prophesying the total destruction of Edom?",
    a: ["Habakkuk", "Obadiah", "Zephaniah", "Haggai"],
    correct: 1
  },
  {
    clue: "According to the Book of Judges, who was the only recorded female Judge of Israel, who held court under a palm tree?",
    a: ["Jael", "Deborah", "Athaliah", "Huldah"],
    correct: 1
  },
  {
    clue: "In Paul's Epistle to the Colossians, which companion is explicitly referred to and identified as 'the beloved physician'?",
    a: ["Luke", "Barnabas", "Aristarchus", "Epaphras"],
    correct: 0
  },
  {
    clue: "What was the exact name of the specific valley where David fought and defeated the Philistine giant, Goliath?",
    a: ["Valley of Jezreel", "Valley of Elah", "Valley of Achor", "Valley of Beracah"],
    correct: 1
  },
  {
    clue: "Which King of Israel was noted for his notoriously furious and aggressive chariot driving in the Old Testament?",
    a: ["Jehu", "Ahab", "Jeroboam II", "Omri"],
    correct: 0
  },
  {
    clue: "In the Gospel of John, who was the father of Judas Iscariot?",
    a: ["Simon", "Malchus", "Zebedee", "Cleopas"],
    correct: 0
  },
  {
    clue: "According to the Acts of the Apostles, what was the specific name of the Roman centurion of the Italian Cohort baptized by Peter?",
    a: ["Julius", "Cornelius", "Lysias", "Publius"],
    correct: 1
  },
  {
    clue: "Which Old Testament prophet was commanded by God to marry an unfaithful woman named Gomer as a symbol of Israel's infidelity?",
    a: ["Hosea", "Amos", "Micah", "Joel"],
    correct: 0
  },
  {
    clue: "Who was the mother of Solomon, whom David married after orchestrating the battlefield death of her first husband?",
    a: ["Abigail", "Bathsheba", "Maacah", "Michal"],
    correct: 1
  },
  {
    clue: "In the Book of Acts, which Christian convert was struck dead alongside her husband Ananias for lying about the sale price of their land?",
    a: ["Sapphira", "Dorcas", "Priscilla", "Lydia"],
    correct: 0
  },
  {
    clue: "What are the names of the two explicit, high-ranking archangels mentioned by name in the canonical Protestant Bible?",
    a: ["Michael and Uriel", "Michael and Gabriel", "Gabriel and Raphael", "Raphael and Uriel"],
    correct: 1
  },
  {
    clue: "Which wicked queen of Judah seized the throne by attempting to completely destroy the entire royal family after her son Ahaziah died?",
    a: ["Jezebel", "Athaliah", "Maacah", "Herodias"],
    correct: 1
  },
  {
    clue: "According to the Gospel of Luke, who was the high priest alongside Caiaphas during the year Jesus began His public ministry?",
    a: ["Annas", "Ananias", "Eleazar", "Ishmael"],
    correct: 0
  },
  {
    clue: "In the Epistle to the Hebrews, which Old Testament figure is said to have been taken up so that he would not experience death?",
    a: ["Elijah", "Enoch", "Moses", "Melchizedek"],
    correct: 1
  },
  {
    clue: "Which island was the Apostle John exiled to when he received and recorded the visions of the Book of Revelation?",
    a: ["Cyprus", "Patmos", "Malta", "Crete"],
    correct: 1
  },
  {
    clue: "Who was the fiercely loyal Moabitess who told her mother-in-law Naomi, 'Where you go I will go, and where you stay I will stay'?",
    a: ["Orpah", "Ruth", "Rahab", "Tamar"],
    correct: 1
  },
  {
    clue: "Which prophetess in the Temple of Jerusalem recognized the infant Jesus as the Messiah during His presentation?",
    a: ["Anna", "Elizabeth", "Huldah", "Miriam"],
    correct: 0
  },
  {
    clue: "What specific trade or craft did the Apostle Paul share with his close missionary companions, Priscilla and Aquila?",
    a: ["Fishermen", "Tentmakers", "Silversmiths", "Carpenters"],
    correct: 1
  },
  {
    clue: "Which Old Testament book concludes with a profound alphabetic acrostic poem honoring and describing the 'Virtuous Woman'?",
    a: ["Ecclesiastes", "Proverbs", "Song of Solomon", "Psalms"],
    correct: 1
  },
  {
    clue: "According to Genesis, what was the specific name of the city that Lot fled to just before Sodom and Gomorrah were destroyed?",
    a: ["Zoar", "Hebron", "Bethel", "Kadesh"],
    correct: 0
  },
  {
    clue: "In the Gospel of Mark, what is the Aramaic phrase used by Jesus meaning 'Little girl, I say to you, get up!'?",
    a: ["Ephphatha", "Talitha koum", "Eloi Eloi lama sabachthani", "Maranatha"],
    correct: 1
  },
  {
    clue: "Which specific tribe of Israel was entirely omitted from the sealing of the 144,000 servants of God in Revelation 7?",
    a: ["Dan", "Gad", "Simeon", "Asher"],
    correct: 0
  },
  {
    clue: "Who was the left-handed judge of Israel who assassinated the obese Moabite King Eglon with a concealed double-edged dagger?",
    a: ["Othniel", "Ehud", "Shamgar", "Gideon"],
    correct: 1
  },
  {
    clue: "In Paul's letter to Philemon, what was the name of the runaway slave whom Paul converted and sent back to his master?",
    a: ["Onesimus", "Tychicus", "Epaphroditus", "Demas"],
    correct: 0
  },
  {
    clue: "Which Old Testament book contains the famous corporate confession: 'We have sinned, we have done wrong, we have acted wickedly' during a 70-year exile?",
    a: ["Jeremiah", "Daniel", "Ezekiel", "Isaiah"],
    correct: 1
  },
  {
    clue: "According to the Gospel of John, who was the first person to see and speak with the resurrected Jesus outside the tomb?",
    a: ["Mary Magdalene", "Simon Peter", "John the Apostle", "Mary the mother of James"],
    correct: 0
  },
  {
    clue: "Which Persian king issued the formal royal decree allowing the Jewish exiles to return to Jerusalem and rebuild the Temple?",
    a: ["Darius", "Cyrus", "Artaxerxes", "Xerxes"],
    correct: 1
  },
  {
    clue: "What was the name of the young believer who fell asleep during Paul's exceptionally long sermon and plummeted from a third-story window?",
    a: ["Eutychus", "Trophimus", "Timothy", "Secundus"],
    correct: 0
  },
  {
    clue: "Which prophet confronted King David with a clever parable about a rich man stealing a poor man's single ewe lamb?",
    a: ["Samuel", "Nathan", "Elijah", "Gad"],
    correct: 1
  },
  {
    clue: "In the New Testament, what was the Hebrew name of the pool in Jerusalem with five porticoes where Jesus healed a paralyzed man?",
    a: ["Siloam", "Bethesda", "Gethsemane", "Golgotha"],
    correct: 1
  },
  {
    clue: "Who was the father of the Old Testament prophet Isaiah?",
    a: ["Amoz", "Amos", "Hilkiyah", "Baruch"],
    correct: 0
  },
  {
    clue: "Which of the four Gospels is widely accepted by biblical scholars to have been written first historically?",
    a: ["Matthew", "Mark", "Luke", "John"],
    correct: 1
  },
  {
    clue: "What was the name of the mountain where the prophet Elijah famously challenged and defeated the 450 prophets of Baal?",
    a: ["Mount Sinai", "Mount Carmel", "Mount Nebo", "Mount Hermon"],
    correct: 1
  },

  // --- TOUGH ZIMBABWEAN CATHOLIC & BIBLE CONTEXT QUESTONS ---
  {
    clue: "Which pioneering 16th-century Jesuit missionary was martyred by being strangled and thrown into the Musengezi River in northern Zimbabwe?",
    a: ["Father Gonçalo da Silveira", "Father Pedro Páez", "Father Alphonsus de Castro", "Father João de Dios"],
    correct: 0
  },
  {
    clue: "The Shona Bible translates the divine name 'The Lord' using which cultural title, reflecting supreme respect and ownership?",
    a: ["Mwari", "Mambo", "Tenzi", "Musikavanhu"],
    correct: 2
  },
  {
    clue: "Which historic mission, established by the Jesuits in Matabeleland in 1887, served as a foundational center for Catholic education in Zimbabwe?",
    a: ["Chishawasha Mission", "Empandeni Mission", "Gokomere Mission", "Triashill Mission"],
    correct: 1
  },
  {
    clue: "Who made history as the very first indigenous black African Archbishop of the Roman Catholic Archdiocese of Harare?",
    a: ["Archbishop Patrick Chakaipa", "Archbishop Pius Ncube", "Archbishop Robert Ndlovu", "Bishop Donal Lamont"],
    correct: 0
  },
  {
    clue: "Which Ndebele King granted permission to Catholic missionaries to establish the landmark Empandeni Mission in 1887?",
    a: ["King Mzilikazi", "King Lobengula", "Chief Gambo", "Chief Khumalo"],
    correct: 1
  },
  {
    clue: "The prestigious Catholic university in Mutare, Zimbabwe, is named after which religious order that heavily shaped the region's history?",
    a: ["Jesuit University", "Dominican University", "Carmelitas University", "Africa University"],
    correct: 2
  },
  {
    clue: "In standard Ndebele Bible translations, which word is used to accurately translate the theological concept of 'The Savior'?",
    a: ["Umsindisi", "Inkosi", "Umdali", "Umvelinqangi"],
    correct: 0
  },
  {
    clue: "Which legendary, vocal Catholic Bishop of Mutare was put on trial and deported by Ian Smith's Rhodesian government in 1977 for fighting racial inequality?",
    a: ["Bishop Patrick Mutume", "Bishop Donal Lamont", "Bishop Tobias Chiginya", "Archbishop Pius Ncube"],
    correct: 1
  },
  {
    clue: "What is the name of the famous Catholic Marian shrine located near Masvingo that attracts thousands of Zimbabwean pilgrims annually?",
    a: ["Our Lady of Fatima Shrine", "Bondolfi Mission Shrine", "Mutemwa Leprosy Catholic Shrine", "Gokomere Marian Shrine"],
    correct: 1
  }
];

/*
const saintCgit eQuestions = [
{ clue:"Whatgit  traditional Shona instrument made of metal keys bound to a wooden soundgit nside a calabash?", a:["Marimba","Mbira","Hosho"], correct:1 }, 
{ clue:"If you visit elders in Zimbabwe to show respect, what gesture should you do?", a:["High five","Clapping hands (Kuombera)","Fist bump"], correct:1 },
{ clue:"What is Zimbabwe's national dish made from maize meal?", a:["Sadza","Mupunga","Amadumbe"], correct:0 },
{ clue:"Which waterfall is called 'Mosi-oa-Tunya'?", a:["Victoria Falls","Mutarazi Falls","Bridal Veil Falls"], correct:0 },
{ clue:"What does the Zimbabwe bird represent?", a:["Peace and history","Hunting industry","Speed"], correct:0 },
{ clue:"What is bride price called in Ndebele culture?", a:["Roora","Lobola","Nhaka"], correct:1 },
{ clue:"Which stone city gave Zimbabwe its name?", a:["Khami","Great Zimbabwe","Dhlo Dhlo"], correct:1 },
{ clue:"What fabric is used in Zimbabwe celebrations?", a:["Kente","Chitenge","Dashiki"], correct:1 },
{ clue:"What does 'Muzukuru' mean?", a:["Uncle","Niece/Grandchild","Cousin"], correct:1 },
{ clue:"Which month is sacred (no weddings)?", a:["April","August","November"], correct:2 },

{ clue:"Who is patron saint of youth?", a:["St John Bosco","St Francis","St Anthony"], correct:0 },
{ clue:"Which saint was martyred in Zimbabwe 1561?", a:["Gonçalo da Silveira","St Kizito","Fr Chang"], correct:0 },
{ clue:"Youth guild dedicated to Mary?", a:["Sacred Heart","St Anne","Legion of Mary"], correct:2 },
{ clue:"Vestment colour in Ordinary Time?", a:["Purple","Green","White"], correct:1 },
{ clue:"Modern teen beatified saint?", a:["Carlo Acutis","St Tarcisius","St Dominic Savio"], correct:0 },
{ clue:"Prayer with beads?", a:["Angelus","Rosary","Chaplet"], correct:1 },
{ clue:"How many Sacraments?", a:["3","5","7"], correct:2 },
{ clue:"Holy Spirit feast?", a:["Pentecost","Ascension","Epiphany"], correct:0 },
{ clue:"Head of Catholic Church?", a:["Archbishop","Pope","Patriarch"], correct:1 },
{ clue:"African martyrs?", a:["Uganda Martyrs","Egypt Saints","Algeria Monks"], correct:0 },

{ clue:"Books in Catholic OT?", a:["39","46","27"], correct:1 },
{ clue:"David defeated?", a:["Solomon","Samson","Goliath"], correct:2 },
{ clue:"Mount of Ten Commandments?", a:["Sinai","Tabor","Calvary"], correct:0 },
{ clue:"First witness of Resurrection?", a:["Peter","Mary Magdalene","John"], correct:1 },
{ clue:"Theological virtues?", a:["Peace Joy Kindness","Faith Hope Love","Wisdom Knowledge"], correct:1 },
{ clue:"Lions den prophet?", a:["Daniel","Isaiah","Jeremiah"], correct:0 },
{ clue:"Shortest verse?", a:["Jesus wept","Rejoice","Pray"], correct:0 },
{ clue:"Peter denied Jesus how many times?", a:["1","2","3"], correct:2 },
{ clue:"Book of 150 songs?", a:["Proverbs","Psalms","Ecclesiastes"], correct:1 },
{ clue:"Meaning of Gospel?", a:["Good News","Holy Writing","Law"], correct:0 }
];

*/
// ================= SAINT SPEED CHALLENGE =================
/* const saintChallengeQuestions = [
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

*/

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
