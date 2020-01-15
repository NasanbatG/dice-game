//Тоглогчийн ээлжийг хадгалах хувьсагч 1-р тоглогч 0, 2-р тоглогч 1 гэж тэмдэглэе.
var activePlayer = 0;
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

//Шоог шидэх эвент листнер
document.querySelector(".btn-roll").addEventListener("click", function() {
  //1-6 доторх тоог санамсаргүй гаргах
  var diceNumber = Math.floor(Math.random() * 6) + 1;

  // Шооний зургийг вэб дээрээ гаргаж ирнэ.
  diceDom.style.display = "block"; // js-ees css oorchloh
  //Буусан шооны тоонд харгалзах зургийг вэб дээр гаргаж ирнэ.
  diceDom.src = "dice-" + diceNumber + ".png";

  //Буусан тоо нь 1-ээс ялгаатай бол тоголгчийн ээлжийн оноог нэмэгдүүлнэ.
  if (diceNumber !== 1) {
    //1-ees yalgaatai too buulaa. Buusan toog  toglogchid nemj ogno.
    roundScore = roundScore + diceNumber;
    document.getElementById("current-" + activePlayer).textContent = roundScore;

    document.querySelector(".btn-hold").addEventListener("click", function() {
      document.getElementById("score-" + activePlayer).textContent = roundScore;
    });
  } else {
    //1 buusan tul toglogchiin eeljiig ene heseg solij ogno

    // ene toglogchiin eeljin deer tsugluulsan onoog 0 bolgono
    roundScore = 0;
    document.getElementById("current-" + activePlayer).textContent = 0;
    //toglogchiin eeljiig nogoo toglogchruu shilguulne
    //herev idevhitei toglogchc ni 0 baival idevhite toglogchiig 1 bolgo
    //herev idevhitei toglogchc ni 1 baival idevhite toglogchiig 0 bolgo
    activePlayer === 0 ? (activePlayer = 1) : (activePlayer = 0);
    // if (activePlayer === 0) {
    //   activePlayer = 1;
    // } else {
    //   activePlayer = 0;
    // }

    //ulaan tsegiig shiljuuleh
    // document.querySelector(".player-0-panel").classList.remove("active");   //active ustgah
    // document.querySelector(".player-1-panel").classList.add("active");  //active nemeh
    document.querySelector(".player-0-panel").classList.toggle("active"); //active ustgah
    document.querySelector(".player-1-panel").classList.toggle("active"); //active nemeh
    //Shoog tur alga bolgono
    diceDom.style.display = "none";
  }
});
