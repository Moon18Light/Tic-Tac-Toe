console.log("Welcome to Tic Tac Toe!");
let music = new Audio("music.mp3");
let audioTurn = new Audio("ting.mp3");
let gameover = new Audio("gameover.mp3");
let turn = "X";
let isgameover = false;

//function to change audioTurn
const changeTurn= () => {
    return turn === "X" ? "0" : "X";
}

//function to check for win
const checkWin = () => {
    let boxtexts = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], //horizontal    
        [0, 3, 6], [1, 4, 7], [2, 5, 8], //vertical
        [0, 4, 8], [2, 4, 6]            //diagonal
    ]
    wins.forEach(e => {
        if ((boxes[e[0]].innerText === boxes[e[1]].innerText) && (boxes[e[2]].innerText === boxes[e[1]].innerText) && (boxes[e[0]].innerText !== "")) {
            document.querySelector('.info').innerText = boxes[e[0]].innerText + " Won";
            isgameover = true;
            document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "200px";
        }
    }) 
}

//game logic
//music.play();
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxText = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxText.innerText === '') {
            boxText.innerText = turn;
            turn = changeTurn();
            audioTurn.play();
            checkWin();
    
            if (!isgameover) {
                document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
            }
        }
    })
})

//add reset button functionality
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = "";
    })
    turn = "X";
    isgameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
    document.querySelector('.imgbox').getElementsByTagName('img')[0].style.width = "0px";
})

