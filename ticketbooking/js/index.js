function animation(side1,side2){
    // Create a timeline with default parameters
    let tl = anime.timeline({
        easing: 'easeOutExpo',
    });
    
    // Add children
    tl
    .add({
        targets: side2,
        rotate: 360,
        scale: 0,
        duration:2000,
    })
    .add({
        targets: side1,
        translateX: (side2==='.left')?-200:200,
        duration:2000,
    },-100)
    .add({
        targets: side1,
        scale: 2,
        opacity:0,
        duration:2000,
    },1000);
    return tl;
}

  
var left = document.getElementById("h3left");
left.addEventListener('click',()=>{
    animation('.left','.right').finished.then(()=>{
        window.location.href = './bookingtickets.html?movie=1';}
    );
});
var right = document.getElementById("h3right");
right.addEventListener('click',()=>{
    animation('.right','.left').finished.then(()=>{
        window.location.href = './bookingtickets.html?movie=2';}
    );
});