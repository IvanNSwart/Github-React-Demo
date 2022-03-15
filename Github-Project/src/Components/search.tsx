import { useState } from "react";
import { useQuery } from "react-query";
import { searchUser } from "../Services/githubApi";
import useDebounce from "./useDebounce";

function searchQuery(searchCriteria: string) {
	return useQuery(
		["query", searchCriteria],
		() => searchUser(searchCriteria),
		{
			enabled: !!searchCriteria,
		}
	);
}

export default function Search() {
	const [searchCriteria, setSearchCriteria] = useState("");

	searchQuery(useDebounce(searchCriteria, 500));

	return (
		<div className="flex items-center justify-center">
			<input
				className=" m-10 w-3/6  shadow appearance-none border border-slate-500 rounded  py-2 px-3 text-gray-700 leading-tight "
				type="search"
				placeholder="Search an Github User"
				onChange={(e) => setSearchCriteria(e.target.value)}
			/>
		</div>
	);
}
