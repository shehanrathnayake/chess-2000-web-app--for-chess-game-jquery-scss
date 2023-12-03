import * as pieces from './pieces.js';
import {UiController} from './ui.js';

class Board {
    #uiController;
    #currentState;
    #possibleMovements;

    constructor (uiControllable) {
        this.#uiController = (uiControllable === true) ? new UiController() : null;
    }

    enableUiCotrollability() {
        if (this.#uiController === null) this.#uiController = new UiController();
    }

    disableUiControllability() {
        this.#uiController = null;
    }

    initialize() {
        // Creating black pieces
        let blackKing = new pieces.King('black',[0,4]);
        let blackQueen = new pieces.Queen('black',[0,3]);
        let blackBishop1 = new pieces.Bishop('black',[0,2]);
        let blackBishop2 = new pieces.Bishop('black',[0,5]);
        let blackKnight1 = new pieces.Knight('black',[0,1]);
        let blackKnight2 = new pieces.Knight('black',[0,6]);
        let blackRook1 = new pieces.Rook('black',[0,0]);
        let blackRook2 = new pieces.Rook('black',[0,7]);

        let blackPawn1 = new pieces.Pawn('black',[1,0]);
        let blackPawn2 = new pieces.Pawn('black',[1,1]);
        let blackPawn3 = new pieces.Pawn('black',[1,2]);
        let blackPawn4 = new pieces.Pawn('black',[1,3]);
        let blackPawn5 = new pieces.Pawn('black',[1,4]);
        let blackPawn6 = new pieces.Pawn('black',[1,5]);
        let blackPawn7 = new pieces.Pawn('black',[1,6]);
        let blackPawn8 = new pieces.Pawn('black',[1,7]);

        // Creating white pieces
        let whiteKing = new pieces.King('white',[7,4]);
        let whiteQueen = new pieces.Queen('white',[7,3]);
        let whiteBishop1 = new pieces.Bishop('white',[7,2]);
        let whiteBishop2 = new pieces.Bishop('white',[7,5]);
        let whiteKnight1 = new pieces.Knight('white',[7,1]);
        let whiteKnight2 = new pieces.Knight('white',[7,6]);
        let whiteRook1 = new pieces.Rook('white',[7,0]);
        let whiteRook2 = new pieces.Rook('white',[7,7]);

        let whitePawn1 = new pieces.Pawn('white',[6,0]);
        let whitePawn2 = new pieces.Pawn('white',[6,1]);
        let whitePawn3 = new pieces.Pawn('white',[6,2]);
        let whitePawn4 = new pieces.Pawn('white',[6,3]);
        let whitePawn5 = new pieces.Pawn('white',[6,4]);
        let whitePawn6 = new pieces.Pawn('white',[6,5]);
        let whitePawn7 = new pieces.Pawn('white',[6,6]);
        let whitePawn8 = new pieces.Pawn('white',[6,7]);

        this.#currentState = [
            [blackRook1, blackKnight1, blackBishop1, blackQueen, blackKing, blackBishop2, blackKnight2, blackRook2],
            [blackPawn1, blackPawn2, blackPawn3, blackPawn4, blackPawn5, blackPawn6, blackPawn7, blackPawn8],
            [ , , , , , , ,],
            [ , , , , , , ,],
            [ , , , , , , ,],
            [ , , , , , , ,],
            [whitePawn1, whitePawn2, whitePawn3, whitePawn4, whitePawn5, whitePawn6, whitePawn7, whitePawn8],
            [whiteRook1, whiteKnight1, whiteBishop1, whiteQueen, whiteKing, whiteBishop2, whiteKnight2, whiteRook2]
        ];

        if (this.#uiController) {
            this.#uiController.updateState(this.#currentState.slice())
        }
    }

    #removeUnnecessoryMovements(row, col, barrier) {
        if (!barrier && this.#currentState[row][col] != undefined) {
            barrier = true;
            if (this.#currentState[row][col].color === 'black') return barrier;
        }
            
        if (barrier) {
            let removingIndex = this.#possibleMovements.findIndex(item => (item[0] === row && item[1] === col));
            if (removingIndex != -1) this.#possibleMovements.splice(removingIndex, 1);
        }
        return barrier;
    }

    getMovements(piece) {
        this.#possibleMovements = piece.movements();
    
        let row = piece.coordinates[0];
        let col = piece.coordinates[1];
    
        /* Cross movements row+i col-i */
        let i;
        let barrier = false;
        let removingIndex;
        for(i=1; i<8; i++) {
            if (row+i > 7 || col+i > 7) break;
            barrier = this.#removeUnnecessoryMovements(row+i, col+i, barrier);
        }
        
        /* Cross movements row+i col-i */
        barrier = false;
        for(i=1; (row+i<8 && col-i>=0); i++) {
            barrier = this.#removeUnnecessoryMovements(row+i, col-i, barrier);
        }
        
        /* Cross movements row-i col-i */
        barrier = false;
        for(i=1; (row-i>=0 && col-i>=0); i++) {
            barrier = this.#removeUnnecessoryMovements(row-i, col-i, barrier);
        }
        
        /* Cross movements row-i col+i */
        barrier = false;
        for(i=1; (row-i>=0 && col+i<8); i++) {
            barrier = this.#removeUnnecessoryMovements(row-i, col+i, barrier);
        }
    
        /* Horizontal vertical movements row+i col */
        barrier = false;
        for(i=1; row+i<8; i++) {
            barrier = this.#removeUnnecessoryMovements(row+i, col, barrier);
        }
    
        /* Horizontal vertical movements row-i col */
        barrier = false;
        for(i=1; row-i>=0; i++) {
            barrier = this.#removeUnnecessoryMovements(row-i, col, barrier);
        }
    
        /* Horizontal vertical movements row col+i */
        barrier = false;
        for(i=1; col+i<8; i++) {
            barrier = this.#removeUnnecessoryMovements(row, col+i, barrier);
        }
    
        /* Horizontal vertical movements row col-i */
        barrier = false;
        for(i=1; col-i>=0; i++) {
            barrier = this.#removeUnnecessoryMovements(row, col-i, barrier);
        }
    
        /* Zig zag movements */
        let knightMoves = [[2,-1],[2,1],[-2,-1],[-2,1],[1,-2],[1,2],[-1,-2],[-1,2]];
        knightMoves.forEach(move => {
            let removingIndex = this.#possibleMovements.findIndex(item => (item[0] === row+move[0] && item[1] === col+move[1]));
            if (removingIndex != -1 && this.#currentState[row+move[0]][col+move[1]] != undefined) {
                this.#possibleMovements.splice(removingIndex, 1);
            } 
        });
    }

    resetCellColors() {
        if (this.#uiController) {
            if (this.#possibleMovements) this.#possibleMovements.length = 0;
            this.#uiController.resetCellColors();
        }
    }

    suggestPossibleMovements(humanMove) {
        let movingPiece = this.#currentState[humanMove[0]][humanMove[1]];
        this.getMovements(movingPiece);
        if (this.#uiController) {
            this.#uiController.colorMovements(movingPiece.coordinates ,this.#possibleMovements);
        }
        
    }

    resetToCurrentState() {
        if (this.#uiController) {
            this.#uiController.updateState(this.#currentState);
        }
    }

    move(move) {
        let currentPossition = move[0];
        let nextPossition = move[1]

        let continueFlow = false;
        this.#possibleMovements.forEach(move => {
            if (move[0] === nextPossition[0] && move[1] === nextPossition[1]) {
                continueFlow = true;
                // break;
            }
        });
        if (continueFlow) {
            let movingPiece = this.#currentState[currentPossition[0]][currentPossition[1]];
            movingPiece.coordinates = nextPossition.slice()
            this.#currentState[currentPossition[0]][currentPossition[1]] = undefined;
            this.#currentState[nextPossition[0]][nextPossition[1]] = movingPiece
        } 
        if (this.#uiController) {
            this.#uiController.updateState(this.#currentState);
        }
    }
}

export {Board}