const p1={
    score:0,
    button:document.querySelector('#p1button'),
    display:document.querySelector('#p1Display')
}
const p2={
    score:0,
    button:document.querySelector('#p2button'),
    display:document.querySelector('#p2Display')
}


const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto');
let winningScore = 3;
let isGameover = false;

function updates(player, opponent){
    if (!isGameover) {
        player.score += 1;
        if (player.score === winningScore) {
            isGameover = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }

        player.display.textContent = player.score;

    }
}

p1.button.addEventListener('click', (e) => {
    updates(p1,p2);

})
p2.button.addEventListener('click', (e) => {
    updates(p2,p1);

})

winningScoreSelect.addEventListener('change', () => {
    winningScore = parseInt(winningScoreSelect.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset() {
    isGameover = false;
    for(let p of [p1, p2]){
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-danger', 'has-text-success');
        p.button.disabled = false;
    }
    
}  