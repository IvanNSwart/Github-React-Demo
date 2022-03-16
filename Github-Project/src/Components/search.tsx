import { useState } from "react";
import { useQuery } from "react-query";
import { useDispatch } from "react-redux";
import { Profile } from "../ReduxStore/types";
import { searchUser } from "../Services/githubApi";
import useDebounce from "./useDebounce";
import addToSearch from "../ReduxStore/profileSlice";

function searchQuery(searchCriteria: string) {
	return useQuery<Profile[], Error>(
		["query", searchCriteria],
		() => searchUser(searchCriteria),
		{
			enabled: !!searchCriteria && searchCriteria !== "",
		}
	);
}

export default function Search() {
	const [searchCriteria, setSearchCriteria] = useState("");
	//		const dispatch = useDispatch();

	const searchData = searchQuery(useDebounce(searchCriteria, 500));
	// dispatch(searchData)
	// console.log(searchData);

	return (
		<div className="flex items-center justify-center">
			<input
				className=" m-10 w-3/6  shadow appearance-none border border-slate-500 rounded  py-2 px-3 text-gray-700 leading-tight "
				type="search"
				placeholder="Search an Github User"
				onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
					setSearchCriteria(e.target.value);
				}}
			/>
		</div>
	);
}
