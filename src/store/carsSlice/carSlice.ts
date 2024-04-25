import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { carData } from "../../types/types";
import { carsApiSlice } from "../api/apiSlice";

interface CarsState {
    cars: carData[],
    car: carData,
    loading: boolean,
    error: string,
}

const initialState: CarsState = {
    cars: [],
    car: {
        id: 0,
        name: '',
        model: '',
        year: 0,
        color: "",
        price: 0,
        latitude: 0,
        longitude: 0
    },
    loading: false,
    error: ""
}

export const carsSlice = createSlice({
    name: "cars",
    initialState,
    reducers: {
        deleteCarByID: (state, action: PayloadAction<number>) => {
            state.cars = state.cars.filter(car => car.id !== action.payload)
        },
        getCarByID: (state, action: PayloadAction<number>) => {
            state.loading = true
            const car = state.cars.find(car => car.id == action.payload);
            if (car) {
                state.car = car;
            } else {
                state.error = `Car with id ${action.payload} not found`
            }
            state.loading = false
        },
        editCarByID: (state, action: PayloadAction<{ id: number, name: string, model: string, price: number }>) => {
            const { id, name, model, price } = action.payload;
            const carIndex = state.cars.findIndex(car => car.id === id);
        
            if (carIndex !== -1) {
                state.cars[carIndex] = {
                    ...state.cars[carIndex],
                    name,
                    model,
                    price
                };
            } else {
                state.error = `Car with id ${id} not found`;
            }
        }
    },
    extraReducers: (builder) => {
        builder.addMatcher(carsApiSlice.endpoints.getAllCars.matchFulfilled, (state, action) => {
            state.cars = action.payload;
        })
    }
})

export const { deleteCarByID, getCarByID, editCarByID } = carsSlice.actions;
export default carsSlice.reducer;
