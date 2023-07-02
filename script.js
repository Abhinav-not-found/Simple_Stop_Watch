let abc;
let count =0
let num=document.getElementById("num")
let playButton=document.getElementById("play")
num.innerHTML=0


function play(){
    count = 0;
    num.innerHTML=count
    abc = setInterval(pqr,500)
    playButton.disabled = true
    function pqr(){
        count++
        num.innerHTML= count
    }
}
function pause(){
        clearInterval(abc);
        playButton.disabled = false
    }
    function reset(){
        count=0
        num.innerHTML=count
        clearInterval(abc)
        playButton.disabled = false
}