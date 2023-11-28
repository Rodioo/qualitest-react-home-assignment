import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {User} from "../types";

type FetchedUsersState = {
  status: 'IDLE' | 'LOADING' | 'DONE' | 'ERROR';
  users: User[];
  errorMessage?: string;
}

const initialState: FetchedUsersState = {
  status: 'IDLE',
  users: [],
}

export const fetchedUsersSlice = createSlice({
  name: 'fetchedUsersSlice',
  initialState: initialState,
  reducers: {
    onLoading: (state) => ({
      ...state,
      status: 'LOADING',
    }),
    onSuccess: (state, action: PayloadAction<User[]>) => ({
      ...state,
      status: 'DONE',
      users: action.payload,
      errorMessage: undefined
    }),
    onError: (state, action: PayloadAction<string>) => ({
      ...state,
      status: 'ERROR',
      users: [],
      errorMessage: action.payload
    }),
    onReset: (state) => ({
      ...state,
      status: 'IDLE',
      users: [],
      errorMessage: undefined
    }),
  }
})

export const { onLoading, onSuccess, onError, onReset } = fetchedUsersSlice.actions
export default fetchedUsersSlice.reducer