var audio = new Audio();
audio.src = 'menu.m4a';
audio.loop = true;
audio.autoplay = true;

let elem = document.getElementById("clearData");

elem.addEventListener("click", function() {
    localStorage.removeItem("count");
	localStorage.removeItem("money");
});