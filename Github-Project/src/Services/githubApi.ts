import { useQuery } from "react-query";
import { IProfile } from "../Models/profiles";
import { Profile } from "../ReduxStore/profile";

export function search(criteria: string): Promise<Profile> {
	const response = fetch(`https://api.github.com/users/${criteria}`)
		.then((res) => res.json())
		.then((res) => res.data);
	return response;
}
// function searchTest( criteria: string) {
//     const { isLoading, error, data } = useQuery('repoData', () =>
//       fetch(`https://api.github.com/users/${criteria}`).then(res =>
//         res.json()
//       )
//     )

//     if (isLoading) return 'Loading...'

//     if (error) return 'An error has occurred: ' + error.message

//     return (

//     )
//   }
