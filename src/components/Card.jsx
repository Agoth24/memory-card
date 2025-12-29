function Card({ url, name, onClick }) {
	return (
		<div
			className="flex flex-col p-4 gap-4 rounded-xl bg-black/30 text-white cursor-pointer"
			onClick={onClick}
		>
			<div className="flex justify-center">
				<img
					src={url}
					alt={name}
					className="h-40 sm:h-[clamp(150px,180px,400px)] object-cover rounded-xl"
				/>
			</div>
			<p className="text-lg font-bold text-center">{name}</p>
		</div>
	);
}

export { Card };
