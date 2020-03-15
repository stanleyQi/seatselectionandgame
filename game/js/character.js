// charactor layer///////////////////////////////////////////////////////////////
var canvasCharacter = document.querySelector(".game-character");
var contextCharacter = canvasCharacter.getContext("2d");
var imgMotion = new Image();
var imgBasket = new Image();
var direction = 1;

imgMotion.src='.././game/image/ninjia.png';//426*124
imgBasket.src='.././game/image/ninjia-basket.png';//1311*906
imgMotion.onload = ()=>{
    var frameIndex = 0;
    setInterval(function () {
         if(direction===1){
            contextCharacter.clearRect(0,450,800,600);
            contextCharacter.drawImage(imgBasket,(gettedScore%10)*131,Math.trunc(gettedScore/10)*100,131,100,basketx-141.5-60,450,131,100);
            contextCharacter.drawImage(imgMotion,141.5*frameIndex,0,141.5,124,characterx,450,141.5,124);
            frameIndex++;
            frameIndex %=3; //取余，重复0-2这四幅图像
         }else{
            contextCharacter.clearRect(0,450,800,600);
            contextCharacter.save();
            contextCharacter.scale(-1, 1);
            contextCharacter.drawImage(imgBasket,(gettedScore%10)*131,Math.trunc(gettedScore/10)*100,131,100,(-basketx+125)-141.5-60,450,131,100);
            contextCharacter.drawImage(imgMotion,141.5*frameIndex,0,141.5,124,(-characterx-141.5),450,141.5,124);
            contextCharacter.restore();
            frameIndex++;
            frameIndex %=3; //取余，重复0-2这四幅图像
        }
    },100);  // 1帧图像/100s
}
var characterx = 100;
var oldCharacterx = 100;
var characterspeed = 8;
var basketx = 230;
var oldbasketx = 230;
var basketspeed = 8;
window.addEventListener("keydown",(e)=>{
    switch(e.keyCode){
        case 37:
            if(characterx<=0){
                characterx=0;
            }else{
                oldCharacterx=characterx;
                oldbasketx=basketx;
                characterx-=characterspeed;
                basketx-=basketspeed;
            };
            break;
        case 39:
            if(characterx>=(800-141.5)){
                characterx=800-141.5;
            }else{
                oldCharacterx=characterx;
                oldbasketx=basketx;
                characterx+=characterspeed;
                basketx+=basketspeed;//
            };
            break;
        case 32:
            direction = -direction;
            break;
        default: break;
    }
});
