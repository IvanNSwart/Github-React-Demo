import { useEffect, useState } from "react";

import "/src/index.css";
import { ContainerProps } from "../ReduxStore/profile";
import React from "react";
import { Container } from "./debounceContainer";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../ReduxStore/store";
import addToSearch from "../ReduxStore/profileSlice";

export default function Search() {
	const profiles = useSelector((state: RootState) => state.profiles);
	const dispatch = useDispatch();

	// function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
	// 	Container(e.target.value as unknown as ContainerProps);
	// 	const searchcriteria = e.target.value;
	// 	dispatch(addToSearch(...profiles, searchcriteria));
	// }

	return (
		<div>
			<div className="flex items-center justify-center">
				<input
					className=" m-10 w-3/6  shadow appearance-none border border-slate-500 rounded  py-2 px-3 text-gray-700 leading-tight "
					type="search"
					placeholder="Search an Github User"
					// onChange={handleChange}
				/>
			</div>
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
