import $ from 'jquery';

class UiController {
    colorChangedCells = [];

    resetDom() {
        $('.piece').remove();
    }

    updateState(currentState) {
        this.resetDom();

        for (let row = 0; row < 8; row++) {
            for (let col = 0; col < 8; col++) {
                if (currentState[row][col] != undefined) {
                    $(`#cell-${row}-${col}`).html(`  
                        <div id="${row + '-' + col}" class="piece ${(currentState[row][col].color === 'white') ? 'white' : 'black'}">
                            ${String.fromCodePoint(parseInt(currentState[row][col].unicode, 16))}
                        </div>
                    `);
                }
            }
        }
        this.resetCellColors();
        $('.white').draggable();
    }

    updateDeadPieces(deadPiece, pre) {
        console.log('updatedDeadPieces: ', deadPiece, pre)
        $(`#${pre}-dead-pieces`).append(`  
                        <li class="dead d-flex justify-content-center align-items-center">
                            ${String.fromCodePoint(parseInt(deadPiece.unicode, 16))}
                        </li>
                    `);
    }

    #colorCells(cellId, color) {
        this.colorChangedCells.push([cellId,$(cellId).css('background-color')]);
        $(cellId).css('background-color',color);
    }

    resetCellColors() {
        this.colorChangedCells.forEach(cell => {
            $(cell[0]).css('background-color',cell[1]);
        });
        this.colorChangedCells.length = 0;
    }

    colorMovements(currentpossition, allMovements) {
        this.resetCellColors();

        let id = `#cell-${currentpossition[0]}-${currentpossition[1]}`;
        this.#colorCells(id, '#cecc36')

        allMovements.forEach(move => {
            id = `#cell-${move[0]}-${move[1]}`;
            this.#colorCells(id, 'limegreen')
        });
    }
}

export {UiController}