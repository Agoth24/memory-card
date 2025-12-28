import { Card } from "./Card";

function CardGallery({ cards }) {
	return (
		<div className="p-4 grid grid-cols-2 md:grid-cols-3 min-h-dvh border-2 gap-4 border-red-500">
			{cards.map((card) => {
				return <Card imageData={card.imageData} name={card.name} />;
			})}
		</div>
	);
}

export { CardGallery };
