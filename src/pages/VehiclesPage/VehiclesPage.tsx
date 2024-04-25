import { useMemo } from "react"
import { useGetAllCarsQuery } from "../../store/api/apiSlice"

import { RootState } from "../../store/store"
import { useSelector } from "react-redux"

import VehicleCard from "../../components/VehicleCard/VehicleCard"
import Sort from "../../components/Sort/Sort"

import "./VehiclesPage.css"


const VehiclesPage = () => {

    const { isLoading } = useGetAllCarsQuery()
    const { cars } = useSelector((state:RootState) => state.cars)
    const { priceSort, yearSort } = useSelector((state: RootState) => state.sort)

    const sortedData = useMemo(() => {
        if (!cars) return [];

        return [...cars].sort((a, b) => {
            if (priceSort) {
                return b.price - a.price;
            } else {
                return a.price - b.price;
            }
        }).sort((a, b) => {
            if (yearSort) {
                return b.year - a.year;
            } else {
                return a.year - b.year;
            }
        });
    }, [cars, priceSort, yearSort]);



    return (
        <>
            {isLoading ? (
                <div>Loading...</div>
            ) : (
                <>
                    <Sort />
                    <div className="cards-container">
                        {sortedData?.map((car) =>
                            <VehicleCard key={car.id} id={car.id} name={car.name} model={car.model} year={car.year} color={car.color} price={car.price}
                                lat={car.latitude} long={car.longitude} />
                        )}
                    </div>
                </>
            )}
        </>
    );
}

export default VehiclesPage