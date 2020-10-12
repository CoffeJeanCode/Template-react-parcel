import React from "react"
import Greet from "./components/Greet"
import Counter from "./components/Counter"

export default function App() {
	return(
		<div className="app">
			<Greet name="Developer" />
			<Counter />
		</div>
	)
}
