import { Link, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { getCarByID, editCarByID } from "../../store/carsSlice/carSlice";
import React, { useEffect, useState } from "react";
import { MdOutlineColorLens, MdOutlineLocationOn, MdAttachMoney, MdOutlineSave, MdOutlineCancel } from "react-icons/md";
import Button from "../../components/Button/Button";


import "../../components/VehicleCard/VehicleCard.css"
import './EditCardPage.css'

const EditCardPage = () => {

    const { car, loading, error } = useSelector((state: RootState) => state.cars);

    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        if (!loading) {
            dispatch(getCarByID(Number(id)));
        }

    }, [loading, dispatch, id]);

    useEffect(() => {
        if (!loading && car) {
            setEditedName(car.name);
            setEditedModel(car.model);
            setEditedPrice(car.price);
        }
    }, [loading, car]);



    const [editedName, setEditedName] = useState(car.name)
    const [editedModel, setEditedModel] = useState(car.model)
    const [editedPrice, setEditedPrice] = useState(car.price)

    const HandleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedName(e.target.value)
    }

    const HandleModelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEditedModel(e.target.value)
    }

    const HandlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        let price = parseInt(e.target.value, 10)
        if (isNaN(price)) {
            price = 0
        }
        setEditedPrice(price)
    }

    const SaveEdit = (e: React.MouseEvent<HTMLButtonElement>) => {
        dispatch(editCarByID({ id: Number(id), name: editedName, model: editedModel, price: editedPrice }));

    }

    if (error) {
        return (
            <>{error}</>
        )
    }

    return (
        <>
            {loading ? <>Loading...</> :
                <div className="edit-form-container">
                    <div className='card-container edit-card-container'>
                        <div className=' edit-form'>
                            <h2>Edit Car Form</h2>
                            <div className="row">
                                <div className="subtitle edit-subtitle">Name:</div>
                                <input type="text" value={editedName} onChange={HandleNameChange} className="input value edit-value" />
                            </div>
                            <div className="row">
                                <div className="subtitle edit-subtitle">Model:</div>
                                <input type="text" value={editedModel} onChange={HandleModelChange} className="input value edit-value" />
                            </div>
                            <div className="row">
                                <div className="subtitle edit-subtitle">Year:</div>
                                <div className="value edit-value">{car.year}</div>
                            </div>
                            <div className='row card-field'>
                                <MdOutlineColorLens id='icon' />
                                <div className='column' id='body'>
                                    <div className='subtitle edit-subtitle'>Color</div>
                                    <div className='row color-row'>
                                        <div className='value'>{`${car.color}`}</div>
                                        <div className='color-box' style={{ backgroundColor: `${car.color}` }}></div>
                                    </div>
                                </div>
                            </div>
                            <div className='row card-field'>
                                <MdAttachMoney id='icon' />
                                <div className='column' id='body'>
                                    <div className='subtitle edit-subtitle'>Price</div>
                                    <input type="text" value={editedPrice} className="input value edit-value" onChange={HandlePriceChange} />
                                </div>
                            </div>
                            <div className='row card-field'>
                                <MdOutlineLocationOn id='icon' />
                                <div className='column' id='body'>
                                    <div className='subtitle edit-subtitle'>Currently at:</div>
                                    <div className='value'>{`${parseFloat(car.latitude.toPrecision(5))}, ${parseFloat(car.longitude.toPrecision(5))}`}</div>
                                </div>
                            </div>
                            <div className="row tip">
                                * you can only edit underlined values
                            </div>
                            <div className="row">
                                <Link className="link" to={'/'}><Button text="Save" className="edit-button" icon={MdOutlineSave} onClick={SaveEdit}></Button></Link>
                                <Link className="link" to={'/'}><Button text="Cancel" className="edit-button" icon={MdOutlineCancel}></Button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}

export default EditCardPage;
