import { configureStore } from "@reduxjs/toolkit";
import { carsApiSlice } from "./api/apiSlice";
import sortReducer from "./sortSlice/sortSlice";
import carsReducer from "./carsSlice/carSlice";


export const store = configureStore({
    reducer: {
        [carsApiSlice.reducerPath]: carsApiSlice.reducer,
        sort: sortReducer,
        cars: carsReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(carsApiSlice.middleware),
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;