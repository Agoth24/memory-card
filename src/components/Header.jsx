export function Header({ score }) {
	return (
		<header className="text-white px-4 py-4 flex items-center flex-col md:flex-row md:justify-between md:px-8 gap-4">
			<h1 className="font-bold text-4xl text-shadow-xs">Memory Card App</h1>
			<div className="flex gap-6">
				<h3 className="font-bold text-xl">Score:</h3>
				<p className="text-xl">{score}</p>
			</div>
		</header>
	);
}
