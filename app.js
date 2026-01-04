let para = document.querySelector('p');
let btns = document.querySelectorAll('.btn');

let start = false;
let lvl = 1;
let userSeq = [];
let gameSeq = [];

let bs = new Audio('sound.mp3');
//let lus = new Audio('level.mp3');
let gos = new Audio('gameOver.mp3');

document.addEventListener("click",() => {
    if (!start ) {
        console.log('Akash');
        para.innerText = `Level ${lvl}`;
        start = true;
        let move = moveGenerator();
        blink(move);
    }
});

btns.forEach((btn)=>{
    btn.addEventListener('click',()=>{
        if(start){
            userSeq.push(btn);
            checkMove(userSeq.length-1);
            if (userSeq.length == lvl) {
                levelUp();
            }
        }
    });
    
        
});

const blink = (btn) => {
   
    btn.classList.add('white');
    bs.currentTime = 0;
    bs.playbackRate = 1.5;
    bs.play();
    setTimeout(()=>{
        btn.classList.remove('white');
    },115);
}

const moveGenerator = () => {
    let i = Math.floor(Math.random()*4);
    gameSeq.push(btns[i]);
    return btns[i];
}



const resetGame = ()=> {
    para.innerText = 'Click Anywhere  to start game.';
    //document.querySelector('body').classList.add('game-over');
    userSeq = [];
    gameSeq = [];
    lvl = 1;
    start = false;
}
const checkMove =  (idx) => {
    if (userSeq[idx] !== gameSeq[idx]) {
    //    para.innerText = `You lost! Score:${lvl*2}`;
        gos.play();
        setTimeout(()=>{
            alert(`You lost! Score:${lvl*2}`);
            location.reload();
        },10);
        
    }
}
const levelUp = () => {
    lvl++;
    //lus.currentTime = 0;
    //lus.play();
    para.innerText = `Level ${lvl}`;
    userSeq = [];
    let move = moveGenerator();
    setTimeout(() => {
        blink(move);
    }, 400);

}
