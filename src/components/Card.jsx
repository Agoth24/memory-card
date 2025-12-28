function Card({ imageData, name }) {
	return (
		<div>
			<img src={imageData} alt={name} />
			<p>{name}</p>
		</div>
	);
}

export { Card };
