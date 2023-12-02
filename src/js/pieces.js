class Piece { }

class King extends Piece {
    coordinates;
    constructor(coordinates) {
        super();
        this.coordinates = coordinates
    }
    movement() {
        console.log('King movement', this.coordinates)
        let x = this.coordinates[0];
        let y = this.coordinates[1];
        let possibleMovements = [];
        for(let i=-1; i<2; i++) {
            for(let j=-1; j<2; j++) {
                if (x+i > 0 && x+i < 8 && y+j > 0 && y+j < 8) {
                    if (i==0 && j==0) continue;
                    possibleMovements.push([x+i, y+j]);
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
        console.log('Quen movement', this.coordinates)
        return [[0,0],[0,1]];
    }
}

class Bishop extends Piece {
    coordinates;
    constructor(coordinates) {
        super();
        this.coordinates = coordinates
    }
    movement() {
        console.log('Bishop movement', this.coordinates)
        return [[0,0],[0,1]];
    }
}

class Knight extends Piece {
    coordinates;
    constructor(coordinates) {
        super();
        this.coordinates = coordinates
    }
    movement() {
        console.log('Knight movement', this.coordinates)
        return [[0,0],[0,1]];
    }
}

class Rook extends Piece {
    coordinates;
    constructor(coordinates) {
        super();
        this.coordinates = coordinates
    }
    movement() {
        console.log('Root movement', this.coordinates)
        return [[0,0],[0,1]];
    }
}

class Pawn extends Piece {
    coordinates;
    constructor(coordinates) {
        super();
        this.coordinates = coordinates
    }
    movement() {
        console.log('Pawn movement', this.coordinates)
        return [[0,0],[0,1]];
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
    firstMove = true;

    constructor(coordinates) {
        super();
        this.coordinates = coordinates;
    }
}

class BlackPawn extends Pawn {
    unicode = '265F';
    color = 'black';
    coordinates;
    firstMove = true;

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