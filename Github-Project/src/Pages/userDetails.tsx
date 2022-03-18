import { useQuery } from "react-query";
import { Profile } from "../ReduxStore/types";
import { searchUser } from "../Services/githubApi";
import Repos from "./displayRepos";
import { useParams } from "react-router-dom";

export default function DisplayUser() {
	const { login } = useParams();
	const displayData = useQuery<Profile, Error>(
		["getUsers", { login }],
		() => searchUser(login!),
		{
			enabled: !!login && login !== "",
		}
	).data;
	return (
		<>
			<div className="bg-slate-100">
				<div className="container flex ml-20 mr-12 px-3 bg-slate-100 h-screen">
					<div className="container px-3 w-80">
						<img
							src={displayData?.avatar_url}
							alt="Logo"
							className=" h-36 w-36 mt-16 mb-4 mr-48 rounded-2xl object-cover"
						/>
						<div className="font-bold text-xl">
							{displayData?.name}
						</div>
						<div className="font-light text-sm pb-4">
							{displayData?.login}
						</div>
						<div className="mb-4">{displayData?.bio}</div>
						<a
							href={`www.twitter.com/${displayData?.twitter_username}`}
						>
							<img
								src="./src/Assets/imgs/twitter.jpeg"
								alt="Logo"
								className=" h-8 w-8 mt-10 mb-8 mr-48 rounded-full object-cover"
							/>
						</a>
						<button className="flex justify-center bg-slate-700 text-white p-4 w-60 rounded-lg">
							Follow
						</button>
						<p className="gap-10 text-md pt-4">
							Location: {displayData?.location}
						</p>
						<p className="text-md mb-80">
							Organisation: {displayData?.company}
						</p>
					</div>
					<div className="container">
						<div className="flex justify-start mt-16">
							<p className="font-bold text-2xl gap-10 ">
								Projects
							</p>
							<p className="text-bold text-sm mt-2">
								Following: {displayData?.following}
							</p>
							<p className="text-bold text-sm mt-2">
								Folowers: {displayData?.followers}
							</p>
						</div>
						<Repos topic={login} />
					</div>
				</div>
			</div>
			)
		</>
	);
}
