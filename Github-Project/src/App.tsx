import "./App.css";
import { Rstore } from "./ReduxStore/store";
import { Provider } from "react-redux";
import Search from "./Pages/homeSearch";
import { QueryClientProvider, QueryClient } from "react-query";
import DisplayUser from "./Pages/userDetails";
import { Routes, Route } from "react-router-dom";

const queryClient = new QueryClient();
function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<Provider store={Rstore}>
				<Routes>
					<Route path="/" element={<Search />} />
					<Route path="/search/:login" element={<DisplayUser />} />
				</Routes>
			</Provider>
		</QueryClientProvider>
	);
}

export default App;
