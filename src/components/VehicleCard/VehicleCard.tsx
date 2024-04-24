import { FC } from 'react'
import { MdOutlineColorLens, MdOutlineLocationOn, MdAttachMoney } from "react-icons/md";

import "./VehicleCard.css"

interface props {
    name: string,
    model: string,
    year: number,
    color: string,
    price: number,
    lat: number,
    long: number
}

const VehicleCard: FC<props> = ({ name, model, year, color, price, lat, long }) => {

    return (
        <div className='card-container'>
            <div className='card'>
                <h2 className='h2'>
                    <div>{`${name} ${model}, ${year}`}</div>
                </h2>
                <div className='row card-field'>
                    <MdOutlineColorLens id='icon' />
                    <div className='column' id='body'>
                        <div className='subtitle'>Color</div>
                        <div className='row color-row'>
                            <div className='value'>{`${color}`}</div>
                            <div className='color-box' style={{ backgroundColor: `${color}` }}></div>
                        </div>
                    </div>
                </div>
                <div className='row card-field'>
                    <MdAttachMoney id='icon' />
                    <div className='column' id='body'>
                        <div className='subtitle'>Price</div>
                        <div className='value'>{`${price}`}</div>
                    </div>
                </div>
                <div className='row card-field'>
                    <MdOutlineLocationOn id='icon' />
                    <div className='column' id='body'>
                        <div className='subtitle'>Currently at:</div>
                        <div className='value'>{`${Math.round(lat)}, ${Math.round(long)}`}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VehicleCard