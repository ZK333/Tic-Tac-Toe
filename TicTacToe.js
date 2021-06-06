var confirm =0;
var turn=2;
var i =0;
var combo = [];
var direction = document.getElementById("Direction");
var end = 0;
var Xwins=0;
var Owins=0;
var Ties=0;
var score= "";
var scoreboard = document.getElementById("Score");

function clicked(element){
    if(end==0) {
        if (turn % 2 == 0 && !(element.innerHTML == "X") && !(element.innerHTML == "O")) {
            element.innerHTML = "X";
            direction.innerHTML = "O PLAYER TURN";
            turn = turn + 1;
        }
        if (turn % 2 == 1 && !(element.innerHTML == "X") && !(element.innerHTML == "O")) {
            element.innerHTML = "O"
            direction.innerHTML = "X PLAYER TURN";
            turn = turn + 1;
        }
        var winning = [ // all possible winning combinations
            [1, 2, 3], // hor 1
            [4, 5, 6], // hor 2
            [7, 8, 9], // hor 3
            [1, 5, 9], // dig 1
            [3, 5, 7], // dig 2
            [1, 4, 7], // ver 1
            [2, 5, 8], // ver 2
            [3, 6, 9], // ver 3
        ];
        i = 0;
        while (i < 8) { // checks each player to see if they have a winning combo
            combo = winning[i];
            if (document.getElementById(combo[0]).innerHTML == "X" && document.getElementById(combo[1]).innerHTML == "X" && document.getElementById(combo[2]).innerHTML == "X") {
                win(1);
            }
            if (document.getElementById(combo[0]).innerHTML == "O" && document.getElementById(combo[1]).innerHTML == "O" && document.getElementById(combo[2]).innerHTML == "O") {
                win(2);
            }
            i = i + 1;
        }

        confirm = 0;
        if (turn >= 11) {

            i = 0;
            while (i < 8) { // checks each player to see if they have a winning combo
                combo = winning[i];
                if (document.getElementById(combo[0]).innerHTML == "X" && document.getElementById(combo[1]).innerHTML == "X" && document.getElementById(combo[2]).innerHTML == "X") {
                    win(1);
                    confirm = confirm + 1;
                }
                i = i + 1;
            }
            if (confirm == 0) { // this is to make sure that tiegame is not called when X wins on the last turn
                win(3);
            }

        }
    }
}

function win(element){
    if(element==1){
        direction.innerHTML="X PLAYER WINS";
        Xwins=Xwins+1;
        score = Xwins+"(X)-"+Owins+"(O)-"+Ties+"(Tie)";
        scoreboard.innerHTML=score;
        end=1;
    }
    if(element==2){
        direction.innerHTML="O PLAYER WINS";
        Owins=Owins+1;
        score = Xwins+"(X)-"+Owins+"(O)-"+Ties+"(Tie)";
        scoreboard.innerHTML=score;
        end=1;
    }
    if(element==3){
        direction.innerHTML="TIE GAME";
        Ties=Ties+1;
        score = Xwins+"(X)-"+Owins+"(O)-"+Ties+"(Tie)";
        scoreboard.innerHTML=score;
        end=1;
    }
}

function reset(){
    i = 1;
    while(i<10){
        document.getElementById(i).innerHTML=i;
        i=i+1;
    }
    direction.innerHTML="X PLAYER TURN";
    confirm =0;
    turn=2;
    i =0;
    combo = [];
    end=0;
}


