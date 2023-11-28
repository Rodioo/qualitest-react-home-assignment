import { store } from "./store"

/*
  Types that are used with our custom hooks for improved TypeScript support
  See: https://redux.js.org/tutorials/typescript-quick-start#define-root-state-and-dispatch-types
 */
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch