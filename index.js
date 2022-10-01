var player1  = (Math.floor(Math.random() *6) + 1);
var player2 = (Math.floor(Math.random() * 6) + 1);
var dice1 = "image/dice" + player1 + ".png"         
var dice2 = "image/dice" + player2 + ".png"    
var header = document.querySelector("h1");  
document.querySelectorAll("img")[0].setAttribute("src", dice1 )   
document.querySelectorAll("img")[1].setAttribute("src", dice2 )   

function output(){
    document.querySelector("h1").classList.add("output")
    document.querySelector(".reload").classList.add("visible")
    
    if(player1 > player2){
        header.innerHTML = "🎈Player1 wins🎈"
    }else if  (player2 > player1){
        header.innerHTML = "✨Player2 wins✨"
    }else{
        header.innerHTML = "DRAW🎃"
    }
}

function reload(){
    location.reload()
}