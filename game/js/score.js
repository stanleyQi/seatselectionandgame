var canvasScore = document.querySelector(".game-score"); 
var contextScore = canvasScore.getContext("2d");

var scorePanel = document.querySelector(".scorePanel");
var countdownPanel = document.querySelector(".countdownPanel");
var namePanel = document.querySelector(".namePanel");
//------------------------------Show score----------------------------------------------
var totalScore = 0;
sorcePanel();
function sorcePanel(){
    namePanel.innerHTML = store.get(store.get("currentplayer")).name;
    scorePanel.innerHTML = totalScore;
    countdownPanel.innerHTML = format(Math.floor(currentTimeLeft / 1000));
    requestAnimationFrame(sorcePanel);
}
//-----------------------------Count down--------------------------------------------------
var totalMinuts = parseInt(store.get(store.get("currentplayer")).gameduration);
var totalSecondes=totalMinuts*60*1000;
var localStartTime = new Date().getTime();
var currentTimeLeft;
countdown(totalSecondes);
function countdown(totalTimeLeft){
    bgAudio.play();
    var currentTime = new Date().getTime();
    currentTimeLeft = totalTimeLeft - (currentTime - localStartTime);
    if(currentTimeLeft > 0){
        console.log(format(Math.floor(currentTimeLeft / 1000)));
        setTimeout(function(){
            countdown(totalTimeLeft);
        }, 1000)
    }else {
        console.log("Time over.");
        bgAudio.pause();
    }
}
function format(seconds) {
    var sec = seconds % 60;//取得剩余多少秒
    seconds = (seconds - sec) / 60;//总秒数-秒数/60=得出总分钟
    var min = seconds % 60;//总分钟数取得余数，得还有多少分钟
    return ("0" + min).substr(-2) + ':' + ("0" + sec).substr(-2);
}

var hittedAudio = new Audio('.././game/audio/hitted.mp3');
hittedAudio.load();
var increasAudio = new Audio('.././game/audio/getScore1.mp3');
increasAudio.load();

var gettedScore = 0;
var deductedScore = 0;
function increseScore(x,y){
    // display the picture of hitting
    var imgGetPoint = new Image();
    imgGetPoint.src = '.././game/image/get1point.png';//285*247
    imgGetPoint.onload = () => {
        contextCharacter.drawImage(imgGetPoint,x-50,280,250,150);
    }
    setTimeout(()=>{
        contextCharacter.clearRect(x-50,280,250,150);
    },1000);
    gettedScore++;
    // play getting score audio
    increasAudio.play();
    // calculating score
    totalScore = gettedScore-deductedScore;
    sorcePanel();
}

function hit(x,y){
    //display the picture of hitting
    var imgBom = new Image();
    imgBom.src = '.././game/image/bom.png';
    imgBom.onload = () => {
        contextCharacter.drawImage(imgBom,x-50,280,250,150);
    }
    setTimeout(()=>{
        contextCharacter.clearRect(x-50,250,250,150);
    },1000);
    deductedScore++;
    // play hitting audio
    hittedAudio.play();
    // calculating score
    totalScore = gettedScore-deductedScore;
    sorcePanel();
}