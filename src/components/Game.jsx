import { CardGallery } from "./CardGallery";
import { useState } from "react";
function Game() {
	const [cards, setCards] = useState([]);

	return (
		<div>
			<CardGallery cards={cards} />
		</div>
	);
}

export { Game };
