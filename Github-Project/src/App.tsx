import "./App.css";
import { Rstore } from "./ReduxStore/store";
import { Provider } from "react-redux";
import Search from "./Components/search";

function App() {
	return (
		<div>
			<Provider store={Rstore}>
				<Search />
			</Provider>
			<div className="bg-slate-100">
				<div className="container flex mx-auto px-3 bg-slate-100 h-full">
					<div className="container px-3 w-80">
						<img
							src="https://source.unsplash.com/random?Person"
							alt="Logo"
							className=" h-36 w-36 mt-16 mb-4 mr-48 rounded-2xl object-cover"
						/>
						<div className="font-bold text-xl">Dann Petty</div>
						<div className="font-light text-sm pb-4">
							@DannPetty
						</div>
						<div className="mb-4">
							This New England-based DJ has single-handedly
							captured the Likes of more than 2,000 people in and
							beyond Boston, MAC.
						</div>

						<img
							src="https://source.unsplash.com/random?TwitterLogo"
							alt="Logo"
							className=" h-8 w-8 mt-10 mb-8 mr-48 rounded-full object-cover"
						/>
						<button className="flex justify-center bg-slate-700 text-white p-4 w-60 rounded-lg">
							Follow
						</button>
						<p className="text-md pt-4">Pretoria, South Africa</p>
						<p className="text-md mb-80">behance.net/dannpetty</p>
					</div>
					<div className="container">
						<div className="flex justify-evenly mt-16">
							<p className="font-bold text-2xl">Projects</p>
							<p className="text-bold text-sm">Following: 5</p>
							<p className="text-bold text-sm">Folowers: 50</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
