function Card({ imageData, name }) {
	return (
		<div className="flex flex-col rounded-xl bg-black/30">
			<img src={imageData} alt={name} className="h-40 sm:h-[clamp(200px,230px,400px)]"/>
			<p>{name}</p>
		</div>
	);
}

export { Card };
