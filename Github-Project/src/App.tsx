import { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Rstore } from "./ReduxStore/store"
import { Provider } from "react-redux"
import Search from "./Components/search"

function App() {
	const [count, setCount] = useState(0)

	return (
		<Provider store={Rstore}>
			<Search />
		</Provider>
	)
}

export default App
