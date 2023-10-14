const Shape = [
    'Rock',
    'Scissor',
    'Paper'
];

let Decided = () => {
    let RandomNumber = Math.floor(Math.random() * 3);
    return RandomNumber;
}

let Fate = Decided();
let Winner;
let Round = 1;

function Battle(){
    let Opponent = Decided();
    let Me = Decided();
    console.log('Me : ' + Shape[Me]);
    console.log('Opponent : ' + Shape[Opponent]);
    let Result = Me - Opponent;
    //console.log(Result);
    if(Result == 2 || Result == -1){
        Winner = 'You Win';
    }
    else if(Result == 1 || Result == -2){
        Winner = 'You Lose';
    }
    else{
        Winner = 'Draw';
    }
    console.log(Winner);
    Round++;
}

do {
    console.log('<Round' + Round + '>');
    Battle();
} while(Winner == 'Draw');