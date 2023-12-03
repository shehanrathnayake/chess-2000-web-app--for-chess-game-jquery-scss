import $ from 'jquery';
import { Board } from './board.js';
import { AiPlayer } from './ai.js';

let mainBoard;
$('#start').on('click', ()=>{
    if (mainBoard) mainBoard.resetCellColors();
    mainBoard = new Board(true);
    gamePlay();
})

function gamePlay() {
    $('body').on('click', (e)=>{
        if (!e.target.classList.contains('white')) {
            mainBoard.resetCellColors();
        }
    });
    
    $('.white').on('mousedown', (e)=>{
        let pieceId = e.target.id.split("-");
        mainBoard.suggestPossibleMovements([parseInt(pieceId[0]), parseInt(pieceId[1])])
    });

    $('.c').droppable({
        drop: function( event, ui ) {
            let humanMove = [];

            let cellId = ui.draggable[0].id.split("-");
            humanMove.push([parseInt(cellId[0]), parseInt(cellId[1])]);

            cellId = event.target.id.split("-");
            humanMove.push([parseInt(cellId[1]), parseInt(cellId[2])]);
            
            mainBoard.move(humanMove);
            humanMove.length = 0;
            gamePlay()
        }
    });

    $('body').droppable({
        drop: function( event, ui ) {
            mainBoard.resetToCurrentState();
            gamePlay();
        }
    });
}