import { useEffect } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import { ContainerProps, Profile, ProfileState } from "../ReduxStore/types";
import { setSelectedProfile } from "../ReduxStore/profileSlice";
import { RootState } from "../ReduxStore/store";
import useDebounce from "./useDebounce";

const profiles = useSelector((state: RootState) => state.profiles);
const dispatch = useDispatch();

function profileQuery(criteria: string) {
	return useQuery<Profile, Error>(["query", criteria]);
}

export const Container = ({
	searchQuery,
	isFetchingCallback,
}: Readonly<ContainerProps>): JSX.Element => {
	const debouncedSearchQuery = useDebounce(searchQuery, 600);
	const { data, isFetching } = profileQuery(debouncedSearchQuery);

	useEffect(
		() => isFetchingCallback(isFetching),
		[isFetching, isFetchingCallback]
	);
	const login = data?.login as string;

	return (
		<>
			<button
				onClick={() =>
					dispatch(
						setSelectedProfile({
							login,
							status: ProfileState.SELECTED,
						})
					)
				}
			>
				{data?.login}
			</button>
		</>
	);
};
