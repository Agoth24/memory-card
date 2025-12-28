function Card({ imageData, name }) {
	return (
		<div className="flex flex-col border-2 border-red-500 rounded-xl bg-black/30 ">
			<img src={imageData} alt={name} />
			<p>{name}</p>
		</div>
	);
}

export { Card };
