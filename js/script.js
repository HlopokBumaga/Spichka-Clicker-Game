let elem = document.getElementById("sp");
let spcount = document.getElementById("count");
let count = document.getElementById("count2");
let lvlcnt = document.getElementById("lvlcnt");

let dsBtn = true;
let cnt = 0;

let level = 1;
let levelCnt = 10;

elem.addEventListener("click", function() {
    if (dsBtn == true) {
        dsBtn = false

        spcount.classList.remove("spac");
        spcount.offsetWidth = spcount.offsetWidth;
        spcount.classList.add("spac");

        cnt += levelCnt;
        count.innerHTML = cnt;
        
        if (cnt == 500) {
            level += 1;
            levelCnt = 20;
            lvlcnt.innerHTML = levelCnt;
        }

        setTimeout(function(){
            dsBtn = true;
        }, 100);
    }
});