var indexAudio = new Audio(".././game/audio/index.mp3");
indexAudio.load();
indexAudio.play();
indexAudio.loop = true;
var slider1 = document.getElementById("myRange");
var output1 = document.getElementById("demo");
var gameduration = 5;//minutes
output1.innerHTML = slider1.value;
slider1.oninput = function() {
    if(this.value>1 && this.value<3){
        this.value=1;
    }else if(this.value>3 && this.value<5){
        this.value=3;
    }else if(this.value>5 && this.value<7){
        this.value=5;
    }
    output1.innerHTML = this.value;
    gameduration = this.value;
}

var slider2 = document.getElementById("myVolume");
var output2 = document.getElementById("demoVolume");
var volume = 50;//rate
output2.innerHTML = slider2.value;
slider2.oninput = function() {
    output2.innerHTML = this.value;
    volume = this.value;
    indexAudio.volume = parseFloat(this.value/100);
}

var start = document.querySelector(".divStart");
var playername = document.getElementById("inputName");
var player = {};
start.addEventListener("click",(e)=>{
    indexAudio.pause();
    player.name = playername.value;
    player.gameduration = gameduration;
    player.volume = volume;
    player.totalscore = 0;
    player.ranking = 1;
    store.set("currentplayer",player.name);
    store.set(player.name, player); 
    console.log(player.name+": "+store.get(player.name));

    //start game
    window.location.href = "./game.html";
});