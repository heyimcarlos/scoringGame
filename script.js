let p1h3 = document.getElementsByClassName('p1')[0];
let p2h3 = document.getElementsByClassName('p2')[0];
let winningScore = 5;
let playerOne = document.querySelector('#playerOne');
let pOneScore = 0;
let resetButton = document.querySelector('#resetButt');
let para = document.querySelector('p');
let playerTwo = document.querySelector('#playerTwo');
let pTwoScore = 0;

playerOne.addEventListener('click', function() {
   pOneScore++
   if(pOneScore <= winningScore) {
       p1h3.textContent = pOneScore; 
   }
   if(pOneScore === winningScore) {
       p1h3.classList.add('winner');
       p2h3.classList.add('loser');
   }
});

playerTwo.addEventListener('click', function() {
    pTwoScore++;
    if(pTwoScore <= winningScore) {
        p2h3.textContent = pTwoScore;
    }
    if(pTwoScore === winningScore) {
        p2h3.classList.add('winner');
        p1h3.classList.add('loser');
    }
    
});


function reset() {
    pOneScore = 0;
    pTwoScore = 0;
    p1h3.textContent = 0;
    p2h3.textContent = 0;
    p1h3.classList.remove('winner');
    p2h3.classList.remove('loser')
    p2h3.classList.remove('winner');
    p1h3.classList.remove('loser');
}

resetButton.addEventListener('click', function() {
    reset(); 
});

let numInput = document.querySelector('input');
numInput.addEventListener('change', function() {
    para.textContent = 'Playing to: ' + this.value;
    winningScore = Number(this.value);
    reset();
})


