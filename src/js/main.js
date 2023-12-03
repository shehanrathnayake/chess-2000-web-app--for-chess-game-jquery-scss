import $ from 'jquery';
import { Board } from './board.js';
import { HumanPlayer } from './human.js';
import { AiPlayer } from './ai.js';

let mainBoard;
$('#start').on('click', ()=>{
    mainBoard = new Board(true);
    mainBoard.initialize();
    gamePlay();
})

function gamePlay() {

    let humanMove = [];
    
    $('.piece').on('mousedown', (e)=>{

        let pieceId = e.target.id.split("-");
        let row = parseInt(pieceId[0]);
        let col = parseInt(pieceId[1]);

        humanMove.length = 0;
        humanMove.push([row, col]);
        mainBoard.suggestMovements(humanMove)
    });

    $('.c').droppable({
        drop: function( event, ui ) {
            let cellId = event.target.id.split("-");
            // console.log('cord: ', cellId)
            let row = parseInt(cellId[1]);
            let col = parseInt(cellId[2]);
            console.log('row: ', row, 'col: ', col);
            humanMove.push([row, col]);
            console.log('humanMove: ', humanMove)
            
            if (humanMove.length === 2) {
                console.log('humanMove: ', humanMove)
                // mainBoard.humanMove(humanMove);
            }
            humanMove.length = 0;
        }
    });
}