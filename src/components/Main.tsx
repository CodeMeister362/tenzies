import React, { useState } from "react";
import "../App.css";
import Die from "./Die";

const Main = () => {
	const allNewDice = () => {
		const newDice = [];
		for (let i = 0; i < 10; i++) {
			newDice.push(Math.ceil(Math.random() * 6));
		}
		return newDice;
	};

	const [dice, setDice] = useState(allNewDice());

	const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
		console.log(e.currentTarget.textContent);
	};

	const diceElements = dice.map((number, index) => {
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
			<div className="dice-container">{diceElements}</div>
			<button
				type="button"
				className="roll-btn"
				onClick={() => setDice(allNewDice())}
			>
				Roll
			</button>
		</div>
	);
};

export default Main;
