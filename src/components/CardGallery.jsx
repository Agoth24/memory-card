import { Card } from "./Card";

function CardGallery({ cards, handleCardClick }) {
	return (
		<div className="p-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 h-full gap-4">
			{cards.map((card) => {
				return (
					<Card
						key={card.id}
						url={card.url}
						name={card.name}
						onClick={() => handleCardClick(card)}
					/>
				);
			})}
		</div>
	);
}

export { CardGallery };
