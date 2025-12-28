import { Card } from "./Card";

function CardGallery({ cards }) {
	return (
		<div>
			{cards.map((card) => {
				return <Card imageData={card.imageData} name={card.name} />;
			})}
		</div>
	);
}

export { CardGallery };
