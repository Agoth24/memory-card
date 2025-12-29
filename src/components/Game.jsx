import { CardGallery } from "./CardGallery";
import { useState } from "react";
import { people } from "../assets/people";

function Game({ setScore }) {
	const [cards, setCards] = useState(() => people);
	const [prevIds, setPrevIds] = useState([]);

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

	function handleCardClick(card) {
		const id = card.id;
		if (!checkValidCard(id)) {
			setPrevIds([]);
			setScore(0);
		} else {
			setPrevIds((ids) => [...ids, id]);
			setScore((score) => score + 1);
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
