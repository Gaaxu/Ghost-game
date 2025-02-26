const BOARD_SIZE = 15;
let boeard;

document.getElementById('new-game-btn').addEventListener('click', startGame);

function startGame(){
    console.log('Klikattu');
    document.getElementById('intro-screen').style.display = 'none';
    document.getElementById('game-screen').style.display = 'block';

    generateRandom();
}


function generateRandom(){
    const newBoard = Array.from({length:BOARD_SIZE}, ()=>Array(BOARD_SIZE).fill(''));
    
    for(let y =0; y  < BOARD_SIZE; y++){
        for(let x =0; x  < BOARD_SIZE; x++){
            if(y === 0){
                newBoard[y][x] = 'W';
            }
        }
    }

    console.log(newBoard);
}