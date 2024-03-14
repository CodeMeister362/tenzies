import React, { useState, useEffect } from "react";
import "../App.css";
import Die from "./Die";
import { v4 as uuid } from "uuid";
import Confetti from "react-confetti";

const Main = () => {
	const [tenzies, setTenzies] = useState(false);

	const allNewDice = () => {
		const newDice = [];
		for (let i = 0; i < 10; i++) {
			const randomNum = Math.ceil(Math.random() * 6);
			newDice.push({
				id: uuid(),
				value: randomNum,
				isHeld: false,
			});
		}
		return newDice;
	};

	const [dice, setDice] = useState(allNewDice());

	useEffect(() => {
		const allHeld = dice.every((die) => die.isHeld);
		const allSame = dice.every((die) => die.value === dice[0].value);
		allHeld && allSame && setTenzies(true);
	}, [dice]);

	const holdDie = (e: React.MouseEvent<HTMLDivElement>) => {
		const updateDice = dice.map((die) => {
			if (die.id === e.currentTarget.id) {
				return { ...die, isHeld: !die.isHeld };
			} else {
				return die;
			}
		});
		setDice(updateDice);
	};

	const rollDice = () => {
		if (tenzies) {
			setTenzies(false);
			return allNewDice();
		}

		const sameNumberDie = dice.map((die) => {
			if (die.isHeld === false) {
				const randomNum = Math.ceil(Math.random() * 6);
				return { ...die, value: randomNum };
			} else {
				return die;
			}
		});
		return sameNumberDie;
	};

	const diceElements = dice.map((die) => {
		let dieClass = die.isHeld ? "clicked" : "not-clicked";

		return (
			<Die
				key={die.id}
				id={die.id}
				number={die.value}
				holdDie={holdDie}
				className={dieClass}
			/>
		);
	});

	return (
		<div className="main-content">
			{tenzies && <Confetti />}
			<h1>Tenzies</h1>
			<p>
				Roll until all dice are the same. Click each die to freeze it at its
				current value between rolls.
			</p>
			{!tenzies ? (
				<div className="dice-container">{diceElements}</div>
			) : (
				<h1 style={{ marginBottom: "20px" }}>You got Tenzies!</h1>
			)}
			<button
				type="button"
				className="roll-btn"
				onClick={() => setDice(rollDice())}
			>
				{!tenzies ? "Roll" : "Play Again"}
			</button>
		</div>
	);
};

export default Main;
