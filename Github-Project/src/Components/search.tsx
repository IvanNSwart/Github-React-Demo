import { useEffect, useState } from "react"

import "/src/index.css"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../ReduxStore/store"
import { useQuery } from "react-query"
import { Profile, ProfileState, ContainerProps } from "../ReduxStore/profile"
import { setSelectedProfile } from "../ReduxStore/profileSlice"
import React from "react"
import useDebounce from "./useDebounce"
import { Container } from "./debounceContainer"

export default function Search() {
	async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		Container(e.target.value as unknown as ContainerProps)
	}

	return (
		<div>
			<div className="flex items-center justify-center">
				<input
					className=" m-10 w-3/6  shadow appearance-none border border-slate-500 rounded  py-2 px-3 text-gray-700 leading-tight "
					type="search"
					placeholder="Search an Github User"
					onChange={handleChange}
				/>
			</div>
		</div>
	)
}
