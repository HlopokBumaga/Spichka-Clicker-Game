let elem = document.getElementById("sp");
let spcount = document.getElementById("count");
let count = document.getElementById("count2");
let lvlcnt = document.getElementById("lvlcnt");
let money = document.getElementById("money");

let dsBtn = true;

let level = 1;
let levelCnt = 1;

let cnt = Number(localStorage.getItem("count"));
let mne = Number(localStorage.getItem("money"));

count.innerHTML = cnt;
money.innerHTML = mne;

var audio = new Audio();
audio.src = 'game.mp3';
audio.loop = true;
audio.autoplay = true;

elem.addEventListener("click", function() {
    if (dsBtn == true) {
        dsBtn = false

        spcount.classList.remove("spac");
        spcount.offsetWidth = spcount.offsetWidth;
        spcount.classList.add("spac");

        cnt += levelCnt;
        localStorage.setItem("count", cnt);
        localStorage.setItem("money", mne);
        count.innerHTML = cnt;
        money.innerHTML = cnt;
        
        if (cnt == 100) {
            level += 1;
            levelCnt = 2;
            lvlcnt.innerHTML = levelCnt;
        } if (cnt == 500) {
            level += 1;
            levelCnt = 10;
        } if (cnt == 1000) {
            level += 1;
            levelCnt = 15;
        }

        setTimeout(function(){
            dsBtn = true;
        }, 100);
    }
});