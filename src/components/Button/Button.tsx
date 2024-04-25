import { FC } from 'react'
import { IconType } from 'react-icons';
import "./Button.css";

interface props {
    icon?: IconType;
    text?: string;
    className?: string;
    onClick?: (e:React.MouseEvent<HTMLButtonElement>) => void; //temp
}

const Button: FC<props> = ({ icon: Icon, text, className, onClick }) => {
    return (
        <button className={`button ${className} ${Icon ? 'icon-button' : ''}`} onClick={onClick}>
            {Icon && <Icon id='icon' />}
            <span id='text'>{text}</span>
        </button>
    )
}

export default Button
