let count = 0;
document.getElementById("decrease button").onclick = function(){
    count-=1;
    document.getElementById("countlabel").innerHTML = count;
}
document.getElementById("reset button").onclick = function(){
    count=0;
    document.getElementById("countlabel").innerHTML = count;
}
document.getElementById("increase button").onclick = function(){
    count+=1;
    document.getElementById("countlabel").innerHTML = count;
}
