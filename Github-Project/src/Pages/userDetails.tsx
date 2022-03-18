import { useQuery } from "react-query";
import { Profile } from "../ReduxStore/types";
import { searchUser } from "../Services/githubApi";
import Repos from "./displayRepos";
import { Link, useParams } from "react-router-dom";
import twitter from "../Assets/imgs/twitter.jpeg";
import { GoLocation } from "react-icons/go";
import { BsLink45Deg } from "react-icons/bs";

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
			<div className="bg-slate-100 h-screen bg-cover bg-center ">
				<div className="flex justify-center bg-slate-700 text-white py-6">
					<Link to={`/`}>Back to Search</Link>
				</div>

				<div className="container flex ml-20 mr-12 px-3 bg-slate-100 ">
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
							@{displayData?.login}
						</div>
						<div className="mb-4">{displayData?.bio}</div>
						<a
							href={`http://twitter.com/${displayData?.twitter_username}`}
						>
							<img
								src={twitter}
								alt="Logo"
								className=" h-8 w-8 mt-6 mb-8 mr-48 rounded-full object-cover"
							/>
						</a>
						<button className="flex justify-center bg-slate-700 text-white p-4 w-60 rounded-lg">
							<a
								href={`https://github.com/${displayData?.login}`}
							>
								{" "}
								Follow
							</a>
						</button>
						<p className="gap-2 text-md pt-4 flex justify-items-start mt-6 ">
							<GoLocation /> {displayData?.location}
						</p>
						<p className=" gap-2 text-md mb-80 mt-2 flex justify-items-start">
							<BsLink45Deg /> {displayData?.company}
						</p>
					</div>
					<div className="container">
						<div className="grid grid-cols-3 mt-16">
							<p className="font-bold text-2xl ml-24 ">
								Projects
							</p>
							<div className="col-span-2 flex justify-end">
								<p className="text-bold text-sm mt-2 mr-3">
									<b>Following: </b>
									{displayData?.following}
								</p>
								<p className="text-bold text-sm mt-2 mr-24">
									<b>Folowers: </b>
									{displayData?.followers}
								</p>
							</div>
						</div>
						<div className="overflow-auto h-screen">
							<Repos topic={login} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
