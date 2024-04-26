import { FC } from 'react'
import { useDispatch } from 'react-redux';
import { deleteCarByID } from '../../store/carsSlice/carSlice';
import { Link } from 'react-router-dom';

import { MdOutlineColorLens, MdOutlineLocationOn, MdAttachMoney, MdEditNote, MdDelete } from "react-icons/md";
import Button from '../Button/Button';


import "./VehicleCard.css"

interface props {
    id: number,
    name: string,
    model: string,
    year: number,
    color: string,
    price: number,
    lat: number,
    long: number
}

const VehicleCard: FC<props> = ({ id, name, model, year, color, price, lat, long }) => {

    const dispatch = useDispatch();

    const useDeleteCar = () => {
        dispatch((deleteCarByID(id)))
    };

    return (
        <div className='card-container'>
            <div className='button-container'>
                <Link className='link' to={`/vehicles/${id}`}><Button className='card-button right-border-button' icon={MdEditNote} text='Edit'/></Link>
                <Button className='card-button' icon={MdDelete} text='Delete' onClick={useDeleteCar} />
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