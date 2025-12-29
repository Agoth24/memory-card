import "./App.css";
import { Header } from "./components/Header";
import { Game } from "./components/Game";
import { useState } from "react";
function App() {
	const [score, setScore] = useState(0);
	const [bestScore, setBestScore] = useState(0);

	function updateBest(nextScore) {
		setBestScore((bestScore) => Math.max(bestScore, nextScore));
	}

	return (
		<main className="flex flex-col md:px-24 min-h-screen bg-linear-to-t from-sky-950 to-gray-950">
			<Header score={score} bestScore={bestScore} />
			<Game setScore={setScore} updateBest={updateBest} />
		</main>
	);
}

export default App;
