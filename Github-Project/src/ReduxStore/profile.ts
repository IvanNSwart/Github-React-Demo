export type Profile = {
	login: string;
	id: number;
	node_id: string;
	avatar_url: string;
	gravatar_id: string;
	url: string;
	html_url: string;
	followers_url: string;
	following_url: string;
	gists_url: string;
	starred_url: string;
	subscriptions_url: string;
	organizations_url: string;
	repos_url: string;
	events_url: string;
	received_events_url: string;
	type: string;
	site_admin: boolean;
	name: string;
	company?: any;
	blog: string;
	location?: any;
	email?: any;
	hireable?: any;
	bio: string;
	twitter_username?: any;
	public_repos: number;
	public_gists: number;
	followers: number;
	following: number;
	created_at: string;
	updated_at: string;
	status: ProfileState;
};
export enum ProfileState {
	SELECTED = "selected",
	NOTSELECTED = "not selected",
}

export enum ProfileAction {
	SET_SELECTED = "SET_SELECTED",
	ADD_TO_SEARCH = "ADD_TO_SEARCH",
}

export type ActionTypes = {
	type: typeof ProfileAction.SET_SELECTED;
	payload: { status: ProfileState; login: string };
};
export type ContainerProps = {
	searchQuery: string;
	isFetchingCallback: (key: boolean) => void;
};
