import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { carData } from '../../types/types';

export const carsApiSlice = createApi({
    reducerPath: "carsApi",
    baseQuery: fetchBaseQuery({baseUrl:"https://test.tspb.su/test-task"}),
    endpoints: (builder) => ({
        getAllCars: builder.query<carData[], void>({
            query: () => "vehicles",
        }),
        getCar: builder.query({
            query: (id) => `vehicles/${id}`,
        }),
    }),
    
});

export const {useGetAllCarsQuery, useGetCarQuery} = carsApiSlice

