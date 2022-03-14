import { useRef, useState, useEffect } from "react"
import { debounce } from "lodash"
import "/src/index.css"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../ReduxStore/store"
import { useQuery } from "react-query"
import { Profile, ProfileState } from "../Models/profile"
import { search } from "../Services/githubApi"

export default function Search() {
	const profiles = useSelector((state: RootState) => state.profiles)
	const dispatch = useDispatch()

	const debouncedSearch = debounce((criteria: string) => {
		useQuery<Profile[]>(`profile`, () => search(criteria))
	}, 300)

	useEffect(() => {
		return () => {
			debouncedSearch.cancel()
		}
	}, [debouncedSearch])

	async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		debouncedSearch(e.target.value)
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
			C
		</div>
	)
}
