const game = document.querySelector('.game');
const res = document.querySelector('.res');
const btnGame = document.querySelector('.new-game');
const fields = document.querySelectorAll('.field');
let stepCross = true;
let count = 0;

const circle = `<svg class="circle">
<circle r="45" cx="58" cy="58" stroke ="black" stroke-width="5" fill="none"/>
</svg>
`
const cross = `<svg class="cross">
<line class="first" x1="15" y1="15" x2="105" y2="105"
stroke="black" stroke-width="5" stroke-linecap="round"/>

<line class="second" x1="15" y1="105" x2="105" y2="15"
stroke="black"  stroke-width="5" stroke-linecap="round"/>
</svg>`

game.addEventListener('click', init);
btnGame.addEventListener('click', newGame);

function doStep(target) {
    target.innerHTML = stepCross ? cross : circle;
    target.classList.add(stepCross ? 'x' : 'o');
}

function init(e) {
    const curField = e.target.closest('.field');   
    if (!curField.classList.contains('x') && !curField.classList.contains('o')) {
        doStep(e.target);
        stepCross = !stepCross
        count++;
        win();
        }   
}

function newGame() {
    res.innerHTML = '&nbsp';
    stepCross = true;
    count = 0;
    Array.from(fields).forEach(el => {
        el.innerHTML = '';
        el.classList.remove('x','o', 'active');
        game.addEventListener('click', init); 
    })
}

function win() {

    const comb = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];

    for (let i = 0; i < comb.length; i++) {
        const cur = comb[i];
        const curFields = [fields[cur[0]],fields[cur[1]],fields[cur[2]]]
        
        if (curFields.every(el => el.classList.contains('x'))) {
            res.innerHTML = 'Выйграли крестики'
            curFields.forEach(field => field.classList.add('active'))
            game.removeEventListener('click', init)
            break;
        }if (curFields.every(el => el.classList.contains('o'))) {
            res.innerHTML = 'Выйграли нолики'
            curFields.forEach(field => field.classList.add('active'))
            game.removeEventListener('click', init)
            break;    
        }if (count === 9) {
            res.innerHTML = 'Ничья'
            game.removeEventListener('click', init)
            break;
        }
    }
};
