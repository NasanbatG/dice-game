//Тоглогчийн ээлжийг хадгалах хувьсагч 1-р тоглогч 0, 2-р тоглогч 1 гэж тэмдэглэе.
var activePlayer = 1;
//Тоглогчийн цуглуулсан оноог хадгалах хувьсагч
var scores = [0, 0];
//Тоглогчийн ээлжиндээ цуглуулж байгаа оноог хадгадах хувьсагч
var roundScore = 0;
//Шооны аль талаараа буусанг хадгалах хувьсагч хэрэгтэй. 1-6 гэсэн утгыг энэ хувьсагчид санамсаргүйгээр үүсгэж өгнө.
// var diceNumber = Math.floor(Math.random() * 6) + 1;

//<div class="player-score" id="score-0">43</div>
//window.document.querySelector("#score-0").textContent = dice; //# bichseneer id-gaar ni haij ogch bna.
//document.querySelector("#score-1").textContent = dice;
//document.querySelector("#score-1").innerHTML = "<em>YES<em>";
//console.log("Шоо: " + diceNumber);

//Програм эхлэл бэлтгэл
document.getElementById("score-0").textContent = "0"; //querySelector-oos hurdan ajillana. ID-gaar haij bga uyed hereglene.
document.getElementById("score-1").textContent = "0";
document.getElementById("current-0").textContent = "0";
document.getElementById("current-1").textContent = "0";

// div class="player-score" id="score-1">72</div>
//document.querySelector("#score-0").textContent = 0;
// document.querySelector("#score-1").textContent = 0;
// document.querySelector("#current-0").textContent = 0;
// document.querySelector("#current-1").textContent = 0;
//<img src="dice-5.png" alt="Dice" class="dice" />
var diceDom = document.querySelector(".dice");
diceDom.style.display = "none";
// document.querySelector(".dice").style.display = "none"; // js-ees css oorchloh

document.querySelector(".btn-roll").addEventListener("click", function() {
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  diceDom.style.display = "block"; // js-ees css oorchloh
  diceDom.src = "dice-" + diceNumber + ".png";

  alert("Shoog shid: " + diceNumber);
});
