export function Header({ score, bestScore }) {
	return (
		<header className="text-white px-4 py-4 flex items-center flex-col md:flex-row md:justify-between md:px-8 gap-4">
			<h1 className="font-bold text-4xl text-shadow-xs">
				Memory Card App
			</h1>
			<div className="flex flex-col max-md:items-center">
				<div className="flex gap-6 justify-between">
					<h3 className="font-bold text-xl">Best Score:</h3>
					<div>
						<p className="text-xl">{bestScore}</p>
					</div>
				</div>
				<div className="flex gap-6 justify-between">
					<h3 className="font-bold text-xl">Score:</h3>
					<div>
						<p className="text-xl">{score}</p>
					</div>
				</div>
			</div>
		</header>
	);
}
