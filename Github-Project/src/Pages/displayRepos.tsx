import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { RootState } from "../ReduxStore/store";
import { rootRepo } from "../ReduxStore/types";
import { getRepos } from "../Services/githubApi";
import eachRepo from "./Repos";

export default function Repos(props: any) {
	const login = props.topic;
	const displayRepo = useQuery<rootRepo[]>(
		["getRepos", { login }],
		() => getRepos(login!),
		{
			enabled: !!login && login !== "",
		}
	).data;

	return (
		<>
			{displayRepo?.map((repo: rootRepo) => (
				<div className="p-6 shadow-md rounded-lg bg-white hover:bg-gray-100 flex  justify-evenly mx-24 my-8">
					<p className="mt-2">{repo.name}</p>
					<button className="bg-slate-700 text-white px-4 py-2 rounded-xl">
						<a href={repo.html_url}>View Repo</a>
					</button>
				</div>
			))}
		</>
	);
}
