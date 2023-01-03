import React from 'react';
import './styles/Board.css';
import Tile from './Tile';

const  verticalA = [1, 2, 3, 4, 5, 6, 7, 8];
const horizontalA = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];

const pieces = [];

for(let i = 0; i < 8; i++) {
    if(i != 4) {
        pieces.push({image: require("../../assets/images/pawn_b.png"),  x: i, y: 6})
    }
}

for(let i = 0; i < 8; i++) {
    if(i != 4) {
        pieces.push({image: require("../../assets/images/pawn_w.png"),  x: i, y: 1})
    }
}

// OTHER PIECES

    pieces.push({image: require("../../assets/images/rook_b.png"),  x: 0, y: 7})
    pieces.push({image: require("../../assets/images/rook_b.png"),  x: 7, y: 7})
    pieces.push({image: require("../../assets/images/knight_b.png"),  x: 1, y: 7})
    pieces.push({image: require("../../assets/images/knight_b.png"),  x: 6, y: 7})
    pieces.push({image: require("../../assets/images/bishop_b.png"),  x: 2, y: 7})
    pieces.push({image: require("../../assets/images/bishop_b.png"),  x: 5, y: 7})
    pieces.push({image: require("../../assets/images/king_b.png"),  x: 3, y: 7})
    pieces.push({image: require("../../assets/images/queen_b.png"),  x: 4, y: 7})

    pieces.push({image: require("../../assets/images/pawn_b.png"),  x: 4, y: 4})


    pieces.push({image: require("../../assets/images/rook_w.png"),  x: 7, y: 0})
    pieces.push({image: require("../../assets/images/rook_w.png"),  x: 0, y: 0})
    pieces.push({image: require("../../assets/images/knight_w.png"),  x: 6, y: 0})
    pieces.push({image: require("../../assets/images/knight_w.png"),  x: 1, y: 0})
    pieces.push({image: require("../../assets/images/bishop_w.png"),  x: 2, y: 0})
    pieces.push({image: require("../../assets/images/bishop_w.png"),  x: 5, y: 0})
    pieces.push({image: require("../../assets/images/queen_w.png"),  x: 4, y: 0})
    pieces.push({image: require("../../assets/images/king_w.png"),  x: 3, y: 0})

    pieces.push({image: require("../../assets/images/pawn_w.png"),  x: 4, y: 3})




function Board(props) {
    let board = [];

    for(let j = verticalA.length -1; j >= 0; j--) {
        for(let i = 0; i < horizontalA.length; i++) {
            const num  = j + i + 2;
            let image  = undefined;

            pieces.forEach(p => {
                if(p.x  == i && p.y == j) {
                    image = p.image;
                }
            })
            board.push(
                <Tile number={num} image={image}/>
            )
          
        }
    }

    return (
        <div className="board">
            {board}
        </div>
    );
}

export default Board;