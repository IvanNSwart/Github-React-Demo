import { Profile } from "../Models/profile"

export function search(criteria: string): Promise<Profile[]> {
	const response = fetch(`https://api.github.com/users/${criteria}`)
		.then((res) => res.json())
		.then((res) => res.data)
	return response
}
