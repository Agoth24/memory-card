import { CardGallery } from "./CardGallery";
import { useState } from "react";
function Game({setScore}) {
	const [cards, setCards] = useState(["","","","","",""]);

	return (
		<div>
			<CardGallery cards={cards} />
		</div>
	);
}

export { Game };
