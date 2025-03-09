function Square({ value, onClick }) {
	return (
		<div className="square" onClick={onClick}>
			<div className="container">
				<span>{value}</span>
			</div>
		</div>
	);
}

export default Square;
