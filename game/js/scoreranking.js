var rows = document.querySelector(".rows");
var rankingAudio = new Audio('.././game/audio/ranking.mp3');
rankingAudio.load();
var players = [];

rankingDisplay();
function rankingDisplay(){
    rankingAudio.play();
    store.each((value,key)=>{
        if(key!='currentplayer'){
            players.push(value);
        }
    });
    //sort the players
    players.sort((value1,value2)=>{
        return parseInt(value2.totalscore)-parseInt(value1.totalscore);
    });
   
    //display the players
    players.forEach((player,index)=>{
        player.ranking = index+1;
        let row = document.createElement('div');
        row.setAttribute('class','row');
        row.innerHTML = `
                        <span class="ranking">${player.ranking}</span>
                        <span class="name">${player.name}</span>
                        <span class="score">${player.totalscore}</span>
                    `;
        rows.appendChild(row);
    });
}

var restart = document.querySelector(".divRestart");
restart.addEventListener("click",(e)=>{
    rankingAudio.pause();
    window.location.href = ".././game/index.html";
});