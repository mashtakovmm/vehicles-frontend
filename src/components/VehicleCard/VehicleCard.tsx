import { FC } from 'react'
import { MdOutlineColorLens, MdOutlineLocationOn, MdAttachMoney } from "react-icons/md";
import { MdEditNote, MdDeleteOutline  } from "react-icons/md";
import Button from '../Button/Button';


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
            <div className='button-container'>
                <Button className='card-button right-border-button' icon={MdEditNote} text='Edit'/>
                <Button className='card-button' icon={MdDeleteOutline} text='Delete'/>
            </div>
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
                        <div className='value'>{`${parseFloat(lat.toPrecision(5))}, ${parseFloat(long.toPrecision(5))}`}</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VehicleCard