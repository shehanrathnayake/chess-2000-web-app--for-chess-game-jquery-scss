class Piece { }

class King extends Piece {
    movement() {
        console.log('King movement')
    }
}

class Queen extends Piece {
    movement() {
        console.log('Queen movement')
    }
}

class Bishop extends Piece {
    movement() {
        console.log('Queen movement')
    }
}

class Knight extends Piece {
    movement() {
        console.log('Queen movement')
    }
}

class Rook extends Piece {
    movement() {
        console.log('Queen movement')
    }
}

class Pawn extends Piece {
    movement() {
        console.log('Queen movement')
    }
}

class WhiteKing extends King {
    unicode = '2654';
    color = 'white';
    coordinates;

    constructor(coordinates) {
        super();
        this.coordinates = coordinates;
    }
}

class BlackKing extends King {
    unicode = '265A';
    color = 'black';
    coordinates;

    constructor(coordinates) {
        super();
        this.coordinates = coordinates;
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