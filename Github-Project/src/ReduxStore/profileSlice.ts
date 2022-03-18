import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileState } from "./types";
import { RootState } from "./store";

const initialState: Profile[] = [
	{
		login: "m",
		id: 48685,
		node_id: "MDQ6VXNlcjQ4Njg1",
		avatar_url: "https://avatars.githubusercontent.com/u/48685?v=4",
		gravatar_id: "",
		url: "https://api.github.com/users/m",
		html_url: "https://github.com/m",
		followers_url: "https://api.github.com/users/m/followers",
		following_url: "https://api.github.com/users/m/following{/other_user}",
		gists_url: "https://api.github.com/users/m/gists{/gist_id}",
		starred_url: "https://api.github.com/users/m/starred{/owner}{/repo}",
		subscriptions_url: "https://api.github.com/users/m/subscriptions",
		organizations_url: "https://api.github.com/users/m/orgs",
		repos_url: "https://api.github.com/users/m/repos",
		events_url: "https://api.github.com/users/m/events{/privacy}",
		received_events_url: "https://api.github.com/users/m/received_events",
		type: "User",
		site_admin: false,
		name: "Matt Mullenweg",
		company: "Automattic / WordPress",
		blog: "https://ma.tt/",
		location: "Openverse",
		email: null,
		hireable: null,
		bio: "Typist, engineer, code poet, lover of beautiful data structures.",
		twitter_username: "photomatt",
		public_repos: 4,
		public_gists: 3,
		followers: 960,
		following: 0,
		created_at: "2009-01-23T03:29:58Z",
		updated_at: "2022-03-01T09:16:27Z",
	},
];

export const profileSlice = createSlice({
	name: "profiles",
	initialState,
	reducers: {
		addToSearch: (state, action: PayloadAction<Profile>) => [
			...state,
			{
				...action.payload,
			},
		],
	},
});
export const { addToSearch } = profileSlice.actions;
export default profileSlice.reducer;
