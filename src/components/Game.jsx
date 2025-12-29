import { CardGallery } from "./CardGallery";
import { useState } from "react";
import { people } from "../assets/people";

function Game({ setScore, updateBest }) {
	const [cards, setCards] = useState(() => people);
	const [prevIds, setPrevIds] = useState([]);

	// Fisher-Yates Shuffle implementation
	function shuffleCards() {
		const shuffled = [...cards];
		for (let i = shuffled.length - 1; i > 0; i--) {
			const j = Math.floor(Math.random() * (i + 1));
			[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
		}
		setCards(shuffled);
	}

	function checkValidCard(id1) {
		return !prevIds.includes(id1);
	}

	// Increments or resets score based on game logic
	function handleCardClick(card) {
		const id = card.id;
		if (!checkValidCard(id)) {
			// Resets state
			setPrevIds([]);
			setScore(0);
			updateBest(0);
		} else {
			// Increments state
			setPrevIds((ids) => [...ids, id]);
			setScore((score) => {
				const nextScore = score + 1;
				updateBest(nextScore);
				return nextScore;
			});
		}
		shuffleCards();
	}

	return (
		<div className="flex-1">
			<CardGallery cards={cards} handleCardClick={handleCardClick} />
		</div>
	);
}

export { Game };
