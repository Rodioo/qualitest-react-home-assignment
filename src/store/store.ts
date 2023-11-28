import {configureStore} from "@reduxjs/toolkit";
import fetchedUsersReducer from "../features/users/redux/fetchedUsersSlice"

export const store = configureStore({
  reducer: {
    fetchedUsers: fetchedUsersReducer
  },
});
