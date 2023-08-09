let box=document.getElementsByClassName('box')
let turn ='X'
let gameOver=false
let click = new Audio('click1.mp3')
let win = new Audio('win.mp3')
const changeTurn=()=>{
    return turn==='X'?'O':'X';
}
const checkWin=()=>{
    let boxtext = document.getElementsByClassName('boxtext');
    let wins = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7 ,8],
        [0, 3 ,6],
        [1, 4 ,7],
        [2, 5 ,8],
        [0, 4 ,8],
        [2, 4 ,6]
    ]
    wins.forEach(e=>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText != '' )){

            document.querySelector('.info').innerText = 'Winner is '+boxtext[e[0]].innerText
            win.play()
            gameOver=true
            document.querySelector('.winy').style.width='100px'
        }
    })

    }

Array.from(box).forEach(element=>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click',(e)=>{
        
        if (boxtext.innerText === ''){
            click.play()
            if (turn=='X'){
            boxtext.style.color='red'
            }
            else{
                boxtext.style.color='blue'
            }
            boxtext.innerText = turn;
            turn=changeTurn();
            checkWin();
              if(!gameOver){
        document.querySelector('.info').innerText = "Turn for "+ turn
        }
        }
      
    })
})
const clearText=()=>{
    let boxtexts = document.querySelectorAll(".boxtext");
    Array.from(boxtexts).forEach(e=>{
        e.innerText=''
    })
    turn = 'X'
    gameOver=false
    document.querySelector('.winy').style.width='0px'
    document.querySelector('.info').innerText = "Turn for "+ turn
}