var random1 = Math.floor(Math.random() * 6) + 1;

var newImage = document.querySelectorAll('img')[0];

newImage.setAttribute('src', `images/dice${random1}.png`);

var random2 = Math.floor(Math.random() * 6) + 1;

var newImage2 = document.querySelectorAll('img')[1];

newImage2.setAttribute('src', `images/dice${random2}.png`);

if (random1 > random2){
    const player1win = document.querySelector('h1');
    player1win.innerHTML = 'Player 1 wins'
} else if (random1 === random2) {
    const draw = document.querySelector('h1');
    draw.innerHTML = 'Draw'
} else {
    document.querySelector('h1').innerHTML = 'Draw';
};