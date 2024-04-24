import { FC } from 'react'
import { IconType } from 'react-icons';
import "./Button.css";

interface props {
    icon?: IconType;
    text: string;
    className?: string;
}

const Button: FC<props> = ({ icon: Icon, text, className }) => {
    return (
        <button className={`button ${className} ${Icon ? 'icon-button' : ''}`}>
            {Icon && <Icon id='icon' />}
            <span id='text'>{text}</span>
        </button>
    )
}

export default Button
