let leaderboardTimeout;

db.ref("players").on("value", snap => {
  clearTimeout(leaderboardTimeout);

  leaderboardTimeout = setTimeout(() => {
    const players = snap.val();
    if (!players) return;

    const sorted = Object.values(players)
      .sort((a,b) => b.score - a.score);

    const list = document.getElementById("scores");
    list.innerHTML = "";

    sorted.forEach((p, i) => {
      const li = document.createElement("li");
      li.innerText = `${i+1}. ${p.name} - ${p.score}`;
      list.appendChild(li);
    });
  }, 300);
});