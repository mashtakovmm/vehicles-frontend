import VehicleCard from "../../components/VehicleCard/VehicleCard"

import "./VehiclesPage.css"

const Vehicles = () => {
    return (
        <div className="cards-container">
            <VehicleCard name={"Toyota"} model={"Camri"} year={2022} color={"blue"} price={21000} lat={55.753215} long={37.620393}  />
            <VehicleCard name={"Toyota"} model={"Camri"} year={2022} color={"red"} price={21000} lat={55.753215} long={37.620393}  />
            <VehicleCard name={"Toyota"} model={"Camri"} year={2022} color={"green"} price={21000} lat={55.753215} long={37.620393}  />
            <VehicleCard name={"Toyota"} model={"Camri"} year={2022} color={"pink"} price={21000} lat={55.753215} long={37.620393}  />
        </div>

    )
}

export default Vehicles