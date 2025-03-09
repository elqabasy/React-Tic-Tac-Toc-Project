import { useState } from "react";
import Square from "./Square";
import "./index.css";

function Board(params) {
	const [squares, setSquares] = useState(Array(9).fill(null));
	const [nextValue, setNextValue] = useState("X");

	function onClick(index) {
		if (squares[index]) return;
		const nextSquares = squares.slice();
		nextSquares[index] = nextValue;
		setSquares(nextSquares);
		setNextValue(nextValue === "X" ? "O" : "X");
	}

	function whoIsTheWinner(params) {
		return;
	}

	return (
		<>
			<span>Next player is: {nextValue}</span>
			<div className="board">
				<Square value={squares[0]} onClick={() => onClick(0)} />
				<Square value={squares[1]} onClick={() => onClick(1)} />
				<Square value={squares[2]} onClick={() => onClick(2)} />
				<Square value={squares[3]} onClick={() => onClick(3)} />
				<Square value={squares[4]} onClick={() => onClick(4)} />
				<Square value={squares[5]} onClick={() => onClick(5)} />
				<Square value={squares[6]} onClick={() => onClick(6)} />
				<Square value={squares[7]} onClick={() => onClick(7)} />
				<Square value={squares[8]} onClick={() => onClick(8)} />
			</div>
		</>
	);
}

export default Board;
