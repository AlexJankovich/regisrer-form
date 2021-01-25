import s from './Button.module.scss';

interface ButtonProps {
    title: string
    isDisabled?: boolean
}

const Button: React.FC<ButtonProps> = ({title, isDisabled = false}) => {
    return (
        <button
            className={!isDisabled
                ? s.button
                : `${s.buttonDisabled}`}
            disabled={isDisabled}>
            <span className={!isDisabled ? s.title : s.titleDisabled}>{title}</span>
        </button>
    );
};

export default Button;