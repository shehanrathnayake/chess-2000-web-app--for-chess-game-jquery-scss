class Piece { }

class King extends Piece {
    color;
    coordinates;
    unicode;

    constructor(color, coordinates) {
        super();
        this.color = color;
        this.coordinates = coordinates;
        this.unicode = (color === 'black') ? '265A' : '2654';
    }
    movement() {
        let row = this.coordinates[0];
        let col = this.coordinates[1];
        let possibleMovements = [];

        for(let i=-1; i<2; i++) {
            for(let j=-1; j<2; j++) {
                if (row+i >= 0 && row+i < 8 && col+j >= 0 && col+j < 8) {
                    if (i==0 && j==0) continue;
                    possibleMovements.push([row+i, col+j]);
                }
            }
        }
        return possibleMovements;
    }
}

class Queen extends Piece {
    color;
    coordinates;
    unicode;

    constructor(color, coordinates) {
        super();
        this.color = color;
        this.coordinates = coordinates;
        this.unicode = (color === 'black') ? '265B' : '2655';
    }
    movement() {
        let row = this.coordinates[0];
        let col = this.coordinates[1];
        let possibleMovements = [];

        /* Cross movements */
        let i;
        for(i=-7; i<8; i++) {
            for(let j=-7; j<8; j++) {
                if (row+i >= 0 && row+i < 8 && col+j >= 0 && col+j < 8) {
                    if ((i==0 && j==0) || (Math.abs(i) != Math.abs(j))) continue;
                    possibleMovements.push([row+i, col+j]);
                }
            }
        }

        /* Horizontal vertical movements row+i col */
        for(i=1; row+i<8; i++) {
            possibleMovements.push([row+i, col])
        }

        /* Horizontal vertical movements row-i col */
        for(i=1; row-i>=0; i++) {
            possibleMovements.push([row-i, col])
        }

        /* Horizontal vertical movements row col+i */
        for(i=1; col+i<8; i++) {
            possibleMovements.push([row, col+i])
        }

        /* Horizontal vertical movements row col-i */
        for(i=1; col-i>=0; i++) {
            possibleMovements.push([row, col-i])
        }
        return possibleMovements;
    }
}

class Bishop extends Piece {
    color;
    coordinates;
    unicode;

    constructor(color, coordinates) {
        super();
        this.color = color;
        this.coordinates = coordinates;
        this.unicode = (color === 'black') ? '265D' : '2657';
    }
    movement() {
        let row = this.coordinates[0];
        let col = this.coordinates[1];

        let possibleMovements = [];
        for(let i=-7; i<8; i++) {
            for(let j=-7; j<8; j++) {
                if (row+i >= 0 && row+i < 8 && col+j >= 0 && col+j < 8) {
                    if ((i==0 && j==0) || (Math.abs(i) != Math.abs(j))) continue;
                    possibleMovements.push([row+i, col+j]);
                }
            }
        }
        return possibleMovements;
    }
}

class Knight extends Piece {
    color;
    coordinates;
    unicode;

    constructor(color, coordinates) {
        super();
        this.color = color;
        this.coordinates = coordinates;
        this.unicode = (color === 'black') ? '265E' : '2658';
    }
    movement() {
        let possibleMovements = [];
        let row = this.coordinates[0];
        let col = this.coordinates[1];
        let knightMoves = [[2,-1],[2,1],[-2,-1],[-2,1],[1,-2],[1,2],[-1,-2],[-1,2]];
        knightMoves.forEach(move => {
            if (row+move[0]>=0 && row+move[0]<8 && col+move[1]>=0 && col+move[1]<8) {
                possibleMovements.push([row+move[0],col+move[1]]);
            }
        });
        return possibleMovements;
    }
}

class Rook extends Piece {
    color;
    coordinates;
    unicode;

    constructor(color, coordinates) {
        super();
        this.color = color;
        this.coordinates = coordinates;
        this.unicode = (color === 'black') ? '265C' : '2656';
    }
    movement() {
        let row = this.coordinates[0];
        let col = this.coordinates[1];

        let possibleMovements = [];
        /* Horizontal vertical movements row+i col */
        let i;
        for(i=1; row+i<8; i++) {
            possibleMovements.push([row+i, col])
        }

        /* Horizontal vertical movements row-i col */
        for(i=1; row-i>=0; i++) {
            possibleMovements.push([row-i, col])
        }

        /* Horizontal vertical movements row col+i */
        for(i=1; col+i<8; i++) {
            possibleMovements.push([row, col+i])
        }

        /* Horizontal vertical movements row col-i */
        for(i=1; col-i>=0; i++) {
            possibleMovements.push([row, col-i])
        }
        return possibleMovements;
    }
}

class Pawn extends Piece {
    color;
    coordinates;
    unicode;
    constructor(color, coordinates) {
        super();
        this.color = color;
        this.coordinates = coordinates
        this.unicode =  (color === 'black') ? '265F' : '2659';
    }
    movement() {
        let row = this.coordinates[0];
        let col = this.coordinates[1];

        let possibleMovements = [];
        let defaultRow = 1;

        if (this.color === 'black') {
            if (row+1<8) possibleMovements.push([row+1, col])
            if (row == defaultRow) possibleMovements.push([row+2, col])
        } else {
            defaultRow = 6;
            if (row-1>=0) possibleMovements.push([row-1, col])
            if (row == defaultRow) possibleMovements.push([row-2, col])
        } 

        return possibleMovements;
    }
}

export {Piece, King, Queen, Bishop, Knight, Rook, Pawn};
export {BlackKing, BlackQueen, BlackBishop, BlackKnight, BlackRook, BlackPawn};
export {WhiteKing, WhiteQueen, WhiteBishop, WhiteKnight, WhiteRook, WhitePawn};

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