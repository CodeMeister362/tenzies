import React from "react";

type DieProps = {
	number: number;
	holdDie: (e: React.MouseEvent<HTMLDivElement>) => void;
	className: string;
	id: string;
};

const Die = ({ number, holdDie, className, id }: DieProps) => {
	return (
		<div
			id={id}
			className={`die ${className}`}
			onClick={holdDie}
		>
			{number}
		</div>
	);
};

export default Die;
