import React, {useState} from "react"

const Counter = () => {
	const [count, setCount] = useState(0)

	const add = () => setCount(prev => prev + 1)

	return (
		<button onClick={add} >
			Click {count} {count > 1 ? "times" : "time"}!
		</button>
	)
}

export default Counter;


