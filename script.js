var win = -1;
var turn = 1;
var count =0;
var matrix = [
    [-1,-1,-1],
    [-1,-1,-1],
    [-1,-1,-1]
];

function playerAction(ele,row,col){
    if(ele.innerHTML != '')
        return;
    if(win != -1)
        return;  
    count++;   
    matrix[row][col] = turn;    
    if(turn == 1){
        
        ele.innerHTML = 'X';
        document.getElementById("messageSection").innerHTML = 'Player 2 turn';
        turn = 2;
    }
    else if(turn == 2){
        ele.innerHTML = 'O';
        document.getElementById("messageSection").innerHTML = 'Player 1 turn';
        turn = 1;
    }
    for(var i=0;i<3;i++){
        if(matrix[i][0]==matrix[i][1]&&matrix[i][1]==matrix[i][2]) win = matrix[i][0]
        if(matrix[0][i]==matrix[1][i]&&matrix[1][i]==matrix[2][i]) win = matrix[0][i]        
    }
    if(matrix[0][0]==matrix[1][1] && matrix[1][1]==matrix[2][2]) win = matrix[1][1]
    if(matrix[0][2]==matrix[1][1] && matrix[1][1]==matrix[2][0]) win = matrix[1][1]

    if(win != -1)
        document.getElementById("messageSection").innerHTML = 'Player '+ win +' has won the match';
    if(count == 9 && win == -1){
        document.getElementById("messageSection").innerHTML = 'The match has been drawn';
    }

}