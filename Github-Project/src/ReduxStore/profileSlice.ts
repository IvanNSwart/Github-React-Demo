import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Profile, ProfileState } from "./types";
import { RootState } from "./store";

const initialState: Profile[] = [];

export const profileSlice = createSlice({
	name: "profiles",
	initialState,
	reducers: {
		addToSearch: (state, action: PayloadAction<Profile>) => [
			...state,
			{
				...action.payload,
				status: ProfileState.NOTSELECTED,
			},
		],
		setSelectedProfile: (
			state,
			action: PayloadAction<{
				login: string;
				status: ProfileState;
			}>
		) => {
			const { login, status } = action.payload;
			const updateStatus = (
				status: ProfileState,
				newStatus: ProfileState
			) => (status === newStatus ? ProfileState.NOTSELECTED : newStatus);

			return [
				...state.map((profile) =>
					profile.login !== login
						? profile
						: {
								...profile,
								status: updateStatus(profile.status, status),
						  }
				),
			];
		},
	},
});

export const { setSelectedProfile } = profileSlice.actions;

export const selectProfile = (state: RootState) => state.profiles;
export const selectProfileByLogin = (state: RootState, login: string) =>
	state.profiles.find(
		(profile: { login: string }) => profile.login === login
	);

export default profileSlice.reducer;
