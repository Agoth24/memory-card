import { Card } from "./Card";

function CardGallery({ cards }) {
	return (
		<div className="p-4 grid grid-cols-3 lg:grid-cols-4 h-full gap-4">
			{cards.map((card) => {
				return <Card imageData={card.imageData} name={card.name} />;
			})}
		</div>
	);
}

export { CardGallery };
