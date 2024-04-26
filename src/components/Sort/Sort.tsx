import Button from "../../components/Button/Button";
import { MdOutlineSort } from "react-icons/md";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { togglePriceSort, toggleYearSort } from "../../store/sortSlice/sortSlice";

import "./Sort.css"

const Sort = () => {

    const { priceSort, yearSort } = useSelector((state: RootState) => state.sort)
    const dispatch = useDispatch();

    const togglePrice = () => {
        dispatch(togglePriceSort())
    };

    const toggleYear = () => {
        dispatch(toggleYearSort())
    };

    return (
        <div className="sort-container">
            <div className="sorter">
                <Button text="Price" icon={MdOutlineSort} className={`sort-button ${priceSort ? '' : 'flip-icon'}`} onClick={togglePrice}></Button>
            </div>
            <div className="sorter">
                <Button text="Year" icon={MdOutlineSort} className={`sort-button ${yearSort ? '' : 'flip-icon'}`} onClick={toggleYear}></Button>
            </div>
        </div>
    )
}

export default Sort
