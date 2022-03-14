import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Profile, ProfileState } from "../Models/profile"
import { RootState } from "./store"

const initialState: Profile[] = []

export const profileSlice = createSlice({
	name: "profiles",
	initialState,
	reducers: {
		addToSearch: (
			state,
			action: PayloadAction<{
				login: string
				id: number
				node_id: string
				avatar_url: string
				gravatar_id: string
				url: string
				html_url: string
				followers_url: string
				following_url: string
				gists_url: string
				starred_url: string
				subscriptions_url: string
				organizations_url: string
				repos_url: string
				events_url: string
				received_events_url: string
				type: string
				site_admin: boolean
				name: string
				company?: any
				blog: string
				location?: any
				email?: any
				hireable?: any
				bio: string
				twitter_username?: any
				public_repos: number
				public_gists: number
				followers: number
				following: number
				created_at: string
				updated_at: string
				status: ProfileState
			}>
		) => [
			...state,
			{
				login: action.payload.login,
				id: action.payload.id,
				node_id: action.payload.node_id,
				avatar_url: action.payload.avatar_url,
				gravatar_id: action.payload.gravatar_id,
				url: action.payload.url,
				html_url: action.payload.html_url,
				followers_url: action.payload.followers_url,
				following_url: action.payload.following_url,
				gists_url: action.payload.gists_url,
				starred_url: action.payload.starred_url,
				subscriptions_url:
					action.payload.subscriptions_url,
				organizations_url:
					action.payload.organizations_url,
				repos_url: action.payload.repos_url,
				events_url: action.payload.events_url,
				received_events_url:
					action.payload.received_events_url,
				type: action.payload.type,
				site_admin: action.payload.site_admin,
				name: action.payload.name,
				company: action.payload.company,
				blog: action.payload.blog,
				location: action.payload.location,
				email: action.payload.email,
				hireable: action.payload.hireable,
				bio: action.payload.bio,
				twitter_username:
					action.payload.twitter_username,
				public_repos: action.payload.public_repos,
				public_gists: action.payload.public_gists,
				followers: action.payload.followers,
				following: action.payload.following,
				created_at: action.payload.created_at,
				updated_at: action.payload.updated_at,
				status: ProfileState.NOTSELECTED,
			},
		],
		setSelectedProfile: (
			state,
			action: PayloadAction<{
				login: string
				status: ProfileState
			}>
		) => {
			const { login, status } = action.payload
			const updateStatus = (
				status: ProfileState,
				newStatus: ProfileState
			) =>
				status === newStatus
					? ProfileState.NOTSELECTED
					: newStatus

			return [
				...state.map((profile) =>
					profile.login !== login
						? profile
						: {
								...profile,
								status: updateStatus(
									profile.status,
									status
								),
						  }
				),
			]
		},
	},
})

export const { setSelectedProfile } = profileSlice.actions

export const selectProfile = (state: RootState) => state.profiles
export const selectProfileByLogin = (state: RootState, login: string) =>
	state.profiles.find(
		(profile: { login: string }) => profile.login === login
	)

export default profileSlice.reducer
