import { useQuery } from "react-query";
import { useSelector } from "react-redux";
import { RootState } from "../ReduxStore/store";
import { getRepos } from "../Services/githubApi";

function repoQuery(searchCriteria: string) {
	const profileDetails = useSelector((state: RootState) => state.profiles);
	return useQuery(
		["getUsers", { searchCriteria }],
		() => getRepos(searchCriteria),
		{
			enabled: !!searchCriteria && searchCriteria !== "",
		}
	);
}
export default function eachRepo() {
	return <div></div>;
}
