//-----------------------------apples layer---------------------------------------------
var canvasApples = document.querySelector(".game-apples"); 
var contextApples = canvasApples.getContext("2d");

var appleSetting = {
    initailR:5,
    finalR:25,
    dr:0,
    initialGradient:"",
    finalGradient:"",
    beforeMaturewaiting:1,
    maturingDur:4,
    afterMatureWaiting:3,
    movingDur:6
} 

class Apple{
    constructor(x,y,appleSetting){
        this.x=x;
        this.y=y;
        this.r = appleSetting.initailR;
        this.dr = appleSetting.dr;
        this.setting=appleSetting;
    }

    maturing(){
        contextApples.beginPath();
        let radialGradient=contextApples.createRadialGradient(
            this.x-this.r/2,this.y-this.r/2,1,this.x-this.r/2,this.y-this.r/2,this.r*2+this.dr/20);
        radialGradient.addColorStop(0,"rgb(255,"+(255-this.dr)+",0)");
        radialGradient.addColorStop(1,"rgb(255,255,0)");
        
        contextApples.fillStyle=radialGradient;
        contextApples.arc(this.x,this.y,this.r,0,2*Math.PI);
        contextApples.fill();
        contextApples.beginPath();
        contextApples.moveTo(this.x-this.r*1/4,this.y-this.r*3/4);
        contextApples.lineTo(this.x+this.r*1/4,this.y-this.r*3/4);
        contextApples.strokeStyle = "black";
        contextApples.lineWidth = 3;
        contextApples.stroke();
        contextApples.beginPath();
        contextApples.moveTo(this.x,this.y-this.r*3/4);
        contextApples.lineTo(this.x+this.r*1/4,this.y-this.r*5/4);
        contextApples.strokeStyle = "black";
        contextApples.lineWidth = 4;
        contextApples.stroke();
    }

    timeLine(){
        setTimeout(()=>{this.maturing()},0);//只显示

        // apple grows 5s
        setTimeout(()=>{
            let interval = setInterval(()=>{
                this.r += 1;
                this.maturing();
                if(this.r>=25){clearInterval(interval);}
            },200);
        },0);

        // color changes 4s
        setTimeout(()=>{
            let interval = setInterval(()=>{
                this.dr += 13;
                this.maturing();
                if(this.dr>=255){clearInterval(interval);}
            },200);
        },5000);
        
        //wait 3s->start falling down 6s
        setTimeout(()=>{
            var intervalAppleFall = setInterval(()=>{
                contextApples.clearRect(this.x-25,this.y-40,40*2,40*2);
                this.y += Math.round((600-200-50)/60);
                this.maturing();
                if(this.y>=(600-50)){clearInterval(intervalAppleFall);}
                if((this.y+this.r>=450 && this.y+this.r<=600) 
                    && characterx<this.x && (characterx+141.5)>this.x){
                    clearInterval(intervalAppleFall);
                    contextApples.clearRect(this.x-25,this.y-40,40*2,40*2);
                    // display the picture of hitting
                    hit(this.x,this.y);
                }
                if(direction===1 && (this.y+this.r>=500 && this.y+this.r<650) 
                && basketx-142-120<this.x && (basketx-142)>this.x){
                    clearInterval(intervalAppleFall);
                    contextApples.clearRect(this.x-25,this.y-40,40*2,40*2);
                    // display the picture of getting score
                    increseScore(this.x,this.y);
                }else if(direction===-1 && (this.y+this.r>=500 && this.y+this.r<650) 
                && basketx-60<this.x && (basketx-60+131)>this.x){
                    clearInterval(intervalAppleFall);
                    contextApples.clearRect(this.x-25,this.y-40,40*2,40*2);
                    // display the picture of getting score
                    increseScore(this.x,this.y);
                }
            },100);//1 time/1s*6times=6s
        },12000);
    }
}
var apples = [];
var intervalApplesGenerator = setInterval(()=>{
    let generateX = Math.round(Math.random()*400)+200;
    let generateY = Math.round(Math.random()*200)+100;
    let newApple = new Apple(generateX,generateY,appleSetting);//generate the apple's position randomlly
    apples.push(newApple);
    newApple.timeLine();
    
    if(currentTimeLeft<=0) {
        clearInterval(intervalApplesGenerator);
        setTimeout(() => {
            setScoreInfoAndGoToRanking();
        }, 2000);
    }//running out of the time, no apple is genarated.
},3000);//generate an apple every 6s.