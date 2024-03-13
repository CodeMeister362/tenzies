import React from "react";

type DieProps = {
	number: number;
	key: number;
};

const Die = ({ number, key }: DieProps) => {
	return (
		<div
			className="die"
			key={key}
		>
			{number}
		</div>
	);
};

export default Die;
