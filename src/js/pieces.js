class Piece { }

class King extends Piece {
    coordinates;
    constructor(coordinates) {
        super();
        this.coordinates = coordinates
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
    coordinates;
    constructor(coordinates) {
        super();
        this.coordinates = coordinates
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
    coordinates;
    constructor(coordinates) {
        super();
        this.coordinates = coordinates
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
    coordinates;
    constructor(coordinates) {
        super();
        this.coordinates = coordinates
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
    coordinates;
    constructor(coordinates) {
        super();
        this.coordinates = coordinates
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
    coordinates;
    color;
    constructor(color, coordinates) {
        super();
        this.color = color;
        this.coordinates = coordinates
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

class WhiteKing extends King {
    unicode = '2654';
    color = 'white';

    constructor(coordinates) {
        super(coordinates);
    }
}

class BlackKing extends King {
    unicode = '265A';
    color = 'black';

    constructor(coordinates) {
        super(coordinates);
    }
}

class WhiteQueen extends Queen {
    unicode = '2655';
    color = 'white';
    coordinates;

    constructor(coordinates) {
        super();
        this.coordinates = coordinates;
    }
}

class BlackQueen extends Queen {
    unicode = '265B';
    color = 'black';
    coordinates;

    constructor(coordinates) {
        super();
        this.coordinates = coordinates;
    }
}

class WhiteBishop extends Bishop {
    unicode = '2657';
    color = 'white';
    coordinates;

    constructor(coordinates) {
        super();
        this.coordinates = coordinates;
    }
}

class BlackBishop extends Bishop {
    unicode = '265D';
    color = 'black';
    coordinates;

    constructor(coordinates) {
        super();
        this.coordinates = coordinates;
    }
}

class WhiteKnight extends Knight {
    unicode = '2658';
    color = 'white';
    coordinates;

    constructor(coordinates) {
        super();
        this.coordinates = coordinates;
    }
}

class BlackKnight extends Knight {
    unicode = '265E';
    color = 'black';
    coordinates;

    constructor(coordinates) {
        super();
        this.coordinates = coordinates;
    }
}

class WhiteRook extends Rook {
    unicode = '2656';
    color = 'white';
    coordinates;

    constructor(coordinates) {
        super();
        this.coordinates = coordinates;
    }
}

class BlackRook extends Rook {
    unicode = '265C';
    color = 'black';
    coordinates;

    constructor(coordinates) {
        super();
        this.coordinates = coordinates;
    }
}

class WhitePawn extends Pawn {
    unicode = '2659';
    color = 'white';
    coordinates;
    // firstMove = true;

    constructor(coordinates) {
        super();
        this.coordinates = coordinates;
    }
}

class BlackPawn extends Pawn {
    unicode = '265F';
    color = 'black';
    coordinates;
    // firstMove = true;

    constructor(coordinates) {
        super();
        this.coordinates = coordinates;
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