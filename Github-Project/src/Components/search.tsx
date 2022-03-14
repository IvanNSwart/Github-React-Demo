import { useRef, useState, useEffect } from "react"
import { debounce } from "lodash"
import "/src/index.css"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "../ReduxStore/store"
import { useQuery } from "react-query"
import { Profile, ProfileState } from "../Models/profile"

export default function Search() {
	const profiles = useSelector((state: RootState) => state.profiles)
	const dispatch = useDispatch()
	const [testProfiles, setTestProfiles] = useState<string[]>([])

	async function search(criteria: string) {
		const response = await fetch(
			`https://api.github.com/users/${criteria}`
		)
		const body = await response.json()
		return body.results.map((result: Profile) => result.login)
	}
	const debouncedSearch = useRef(
		debounce(async (criteria: string) => {
			setTestProfiles(await search(criteria))
		}, 300)
	).current

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
			<ul className="m-10 flex justify-center">
				{testProfiles.map((profile) => (
					<li
						className="bg-green-300 m-2 rounded-lg px-2"
						key={profile}
					>
						{profile}
					</li>
				))}
			</ul>
		</div>
	)
}
