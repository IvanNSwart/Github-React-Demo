import { Profile, rootRepo } from "../ReduxStore/types";
import axios from "axios";
export const getRepos = async (login: string) =>
	await axios
		.get<rootRepo[]>(`https://api.github.com/users/${login}/repos`)
		.then((res) => res.data);

export const searchUser = async (login: string) =>
	await axios
		.get<Profile>(`https://api.github.com/users/${login}`)
		.then((res) => res.data);
