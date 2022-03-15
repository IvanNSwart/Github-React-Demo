import { Profile } from "../ReduxStore/types";

export function search(criteria: string): Promise<Profile> {
	const response = fetch(`https://api.github.com/users/${criteria}`)
		.then((res) => res.json())
		.then((res) => res.data);
	return response;
}
export function repos(criteria: string): Promise<Profile> {
	const response = fetch(`https://api.github.com/users/${criteria}/repos`)
		.then((res) => res.json())
		.then((res) => res.data);
	return response;
}
