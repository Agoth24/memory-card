import { CardGallery } from "./CardGallery";
import { useState, useEffect } from "react";
import { people } from "../assets/people";

function Game({ setScore }) {
	const [cards, setCards] = useState(people);
    

	return (
		<div className="flex-1">
        <CardGallery cards={cards} />
		</div>
	);
}

export { Game };
