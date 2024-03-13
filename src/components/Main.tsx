import React, { useState } from "react";
import "../App.css";
import Die from "./Die";

const Main = () => {
	const [diceNum, setDice] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

	const dice = diceNum.map((number, index) => {
		return (
			<Die
				key={index}
				number={number}
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
