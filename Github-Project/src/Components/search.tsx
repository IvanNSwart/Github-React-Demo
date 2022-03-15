import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../ReduxStore/store";

export default function Search() {
	const profiles = useSelector((state: RootState) => state.profiles);
	const dispatch = useDispatch();

	// function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
	// 	Container(e.target.value as unknown as ContainerProps);
	// 	const searchcriteria = e.target.value;
	// 	dispatch(addToSearch(...profiles, searchcriteria));
	// }

	return (
		<div className="flex items-center justify-center">
			<input
				className=" m-10 w-3/6  shadow appearance-none border border-slate-500 rounded  py-2 px-3 text-gray-700 leading-tight "
				type="search"
				placeholder="Search an Github User"
				// onChange={handleChange}
			/>
		</div>
	);
}
