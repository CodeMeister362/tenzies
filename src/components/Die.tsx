import React from "react";

type DieProps = {
	number: number;
	handleClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

const Die = ({ number, handleClick }: DieProps) => {
	return (
		<div
			className="die"
			onClick={handleClick}
		>
			{number}
		</div>
	);
};

export default Die;
