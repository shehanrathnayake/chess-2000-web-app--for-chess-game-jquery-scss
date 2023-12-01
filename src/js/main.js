import $ from 'jquery';

let pieceArray;

function reset() {
    console.log("yes")
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

    /*
    White
    King    =>  2654
    Queen   =>  2655
    Rook    =>  2656
    Bishop  =>  2657
    Knight  =>  2658
    Pawn    =>  2659

    Black
    King    =>  265A
    Queen   =>  265B
    Rook    =>  265C
    Bishop  =>  265D
    Knight  =>  265E
    Pawn    =>  265F
*/

    pieceArray = initialState.slice();
    for (row = 0; row < 8; row++) {
        for (col = 0; col < 8; col++) {
            
            if (pieceArray[row][col] != undefined) {
                console.log(String.fromCodePoint(parseInt(pieceArray[row][col], 16)))
                $(`#cell-${row}-${col}`).html(  `<div class="piece">
                                                    ${String.fromCodePoint(parseInt(pieceArray[row][col], 16))}
                                                </div>`);
            }
        }
    }
}

reset();
$('.piece').draggable();