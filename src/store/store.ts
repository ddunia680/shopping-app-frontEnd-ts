import { configureStore } from "@reduxjs/toolkit";
import cart from "./cart";
import wishList from "./wishList";

const store = configureStore({
    reducer: {
        cartOps: cart,
        wishList: wishList, 
    }
});

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch