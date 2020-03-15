// ----------------------background layer---------------------------
var canvasBackground = document.querySelector(".game-background"); 
var contextBackground = canvasBackground.getContext("2d");

var imgBG = new Image();
imgBG.src = './image/background.png';
function display(){
    imgBG.onload = () => {
        contextBackground.drawImage(imgBG,0,0,800,600);
    }
}
display();

var bgAudio = new Audio(".././game/audio/bg.mp3");
bgAudio.load();
bgAudio.volume = parseFloat(store.get(store.get("currentplayer")).volume)/100;
