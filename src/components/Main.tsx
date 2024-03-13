import React, { useEffect, useState } from "react";
import "../App.css";
import Die from "./Die";

const Main = () => {
	const [diceNumbers, setDice] = useState([] as number[]);

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		console.log(e.currentTarget.textContent);
	};

	const allNewDice = () => {
		setDice([]);
		for (let i = 0; i < 10; i++) {
			const randomNumber = Math.floor(Math.random() * 6) + 1;
			setDice((prev) => [...prev, randomNumber]);
		}
	};

	useEffect(() => {
		allNewDice();
	}, []);

	const dice = diceNumbers.map((number, index) => {
		return (
			<Die
				key={index}
				number={number}
				handleClick={handleClick}
			/>
		);
	});

	return (
		<div className="main-content">
			<h1>Tenzies</h1>
			<p>
				Roll until all dice are the same. Click each die to freeze it at its
				current value between rolls.
			</p>
			<div className="dice-container">{dice}</div>
			<button
				type="button"
				className="roll-btn"
			>
				Roll
			</button>
		</div>
	);
};

export default Main;
