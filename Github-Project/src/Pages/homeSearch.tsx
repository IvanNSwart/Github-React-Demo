import { useState } from "react";
import useDebounce from "../Components/useDebounce";
import { useForm } from "@felte/react";
import { Link } from "react-router-dom";

export default function Search() {
	const [searchCriteria, setSearchCriteria] = useState("");

	const { form } = useForm({});
	console.log(searchCriteria);
	useDebounce(searchCriteria, 500);

	return (
		<>
			<div
				className="flex items-center justify-center h-screen object-fill bg-[url('./src/Assets/imgs/github.jpeg')] bg-cover
			"
			>
				<div className="h-2/6 w-2/6 bg-orange-300 rounded-3xl shadow-xl">
					<div className="flex justify-center mt-20 xl:text-3xl md:text-lg">
						<h1>Welcome to Github Search App</h1>
					</div>
					<form
						ref={form}
						className="flex justify-center items-center mt-6"
					>
						<input
							className=" w-3/6 flex justify-center  rounded  py-2 px-3 text-slate-900 leading-tight lg:text-lg sm:text-sm "
							type="search"
							placeholder="Search an Github User"
							onChange={(
								e: React.ChangeEvent<HTMLInputElement>
							) => setSearchCriteria(e.target.value)}
						/>
					</form>
					<div className="flex justify-center mt-4 bg-orange-400 mx-64 py-2 rounded-xl">
						<Link
							to={`/search/${searchCriteria.trim()}`}
							type="submit"
						>
							Search
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
