var contentIframe = document.getElementById("contentIframe");
var spans = [];
spans = document.getElementsByClassName("span");

changeContentInIframe('./ticketbooking/index.html',0);
function changeContentInIframe(target,index){
    contentIframe.src = target;
    for(let i=0;i<spans.length;i++){
        (i===index)?spans[i].classList.add("nav-active"):spans[i].classList.remove("nav-active");
    }
    
}