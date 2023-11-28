import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from './types'

/*
  Custom useDispatch and useSelector hooks that are more convenient to use
  because we don't have to infer the state type everytime we use useSelector
  and because the default useDisptach doesn't know about thunks
  See: https://redux.js.org/tutorials/typescript-quick-start#define-typed-hooks
*/
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector