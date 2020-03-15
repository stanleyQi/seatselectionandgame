var restart = document.querySelector(".divRestart");
restart.addEventListener("click",(e)=>{
    window.location.href = ".././game/game.html";
});
var stop = document.querySelector(".divStop");
stop.addEventListener("click",(e)=>{
    setScoreInfoAndGoToRanking();
});
function setScoreInfoAndGoToRanking(){
    //set the score info into localstorage
    let currentplayer = store.get(store.get('currentplayer'));
    currentplayer.totalscore = totalScore;
    store.set(store.get('currentplayer'),currentplayer);

    //href
    window.location.href = ".././game/scoreranking.html";
}