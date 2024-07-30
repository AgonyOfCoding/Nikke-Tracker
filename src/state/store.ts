import { configureStore } from '@reduxjs/toolkit'
import filterReducer from './filterOptions'
import sortReducer from './sortOptions'
import searchReducer from './search'
import investmentReducer from './investment'
import recommendationReducer from './recommendationSources'

export const store = configureStore({
  reducer: {
    filter: filterReducer,
    sort: sortReducer,
    search: searchReducer,
    investments: investmentReducer,
    recommendations: recommendationReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

