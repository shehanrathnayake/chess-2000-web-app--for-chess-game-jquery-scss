import $ from 'jquery';
import * as pieces from './pieces.js'

let pieceArray;

function reset() {
    console.log("yes")
    /*
    let initialState = [
        ['265C','265E', '265D', '265B', '265A', '265D', '265E', '265C'],
        ['265F','265F', '265F', '265F', '265F', '265F', '265F', '265F'],
        [ , , , , , , ,],
        [ , , , , , , ,],
        [ , , , , , , ,],
        [ , , , , , , ,],
        ['2659','2659', '2659', '2659', '2659', '2659', '2659', '2659'],
        ['2656','2658', '2657', '2655', '2654', '2657', '2658', '2656']
    ];
    */

    // Creating black pieces
    let blackKing = new pieces.BlackKing([0,4]);
    let blackQueen = new pieces.BlackQueen([0,3]);
    let blackBishop1 = new pieces.BlackBishop([0,2]);
    let blackBishop2 = new pieces.BlackBishop([0,5]);
    let blackKnight1 = new pieces.BlackKnight([0,1]);
    let blackKnight2 = new pieces.BlackKnight([0,6]);
    let blackRook1 = new pieces.BlackRook([0,0]);
    let blackRook2 = new pieces.BlackRook([0,7]);

    let blackPawn1 = new pieces.BlackPawn([1,0]);
    let blackPawn2 = new pieces.BlackPawn([1,1]);
    let blackPawn3 = new pieces.BlackPawn([1,2]);
    let blackPawn4 = new pieces.BlackPawn([1,3]);
    let blackPawn5 = new pieces.BlackPawn([1,4]);
    let blackPawn6 = new pieces.BlackPawn([1,5]);
    let blackPawn7 = new pieces.BlackPawn([1,6]);
    let blackPawn8 = new pieces.BlackPawn([1,7]);

    // Creating white pieces
    let whiteKing = new pieces.WhiteKing([7,4]);
    let whiteQueen = new pieces.WhiteQueen([7,3]);
    let whiteBishop1 = new pieces.WhiteBishop([7,2]);
    let whiteBishop2 = new pieces.WhiteBishop([7,5]);
    let whiteKnight1 = new pieces.WhiteKnight([7,1]);
    let whiteKnight2 = new pieces.WhiteKnight([7,6]);
    let whiteRook1 = new pieces.WhiteRook([7,0]);
    let whiteRook2 = new pieces.WhiteRook([7,7]);

    let whitePawn1 = new pieces.WhitePawn([6,0]);
    let whitePawn2 = new pieces.WhitePawn([6,1]);
    let whitePawn3 = new pieces.WhitePawn([6,2]);
    let whitePawn4 = new pieces.WhitePawn([6,3]);
    let whitePawn5 = new pieces.WhitePawn([6,4]);
    let whitePawn6 = new pieces.WhitePawn([6,5]);
    let whitePawn7 = new pieces.WhitePawn([6,6]);
    let whitePawn8 = new pieces.WhitePawn([6,7]);

    let initialState = [
        [blackRook1, blackKnight1, blackBishop1, blackQueen, blackKing, blackBishop2, blackKnight2, blackRook2],
        [blackPawn1, blackPawn2, blackPawn3, blackPawn4, blackPawn5, blackPawn6, blackPawn7, blackPawn8],
        [ , , , , , , ,],
        [ , , , , , , ,],
        [ , , , , , , ,],
        [ , , , , , , ,],
        [whitePawn1, whitePawn2, whitePawn3, whitePawn4, whitePawn5, whitePawn6, whitePawn7, whitePawn8],
        [whiteRook1, whiteKnight1, whiteBishop1, whiteQueen, whiteKing, whiteBishop2, whiteKnight2, whiteRook2]
    ];

    pieceArray = initialState.slice();
    for (row = 0; row < 8; row++) {
        for (col = 0; col < 8; col++) {
            
            if (pieceArray[row][col] != undefined) {
                $(`#cell-${row}-${col}`).html(  `<div class="piece">
                                                    ${String.fromCodePoint(parseInt(pieceArray[row][col].unicode, 16))}
                                                </div>`);
            }
        }
    }
}

reset();
$('.piece').draggable();