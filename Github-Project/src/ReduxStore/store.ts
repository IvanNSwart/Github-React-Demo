import { configureStore } from "@reduxjs/toolkit"
import profileReducer from "./profileSlice"

export const Rstore = configureStore({
	reducer: {
		profiles: profileReducer,
	},
})
export type AppDispatch = typeof Rstore.dispatch
export type RootState = ReturnType<typeof Rstore.getState>
