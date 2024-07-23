import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filterOptions'
import searchReducer from './search'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    search: searchReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

