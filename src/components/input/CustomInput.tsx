import {ChangeEvent, useState, FocusEvent} from 'react';
import s from './CustomInput.module.scss';

interface InputProps {
    text: string
    type?: 'text' | 'password'
    label: string
    errorText?: string
    onChangeValueHandler: (value: string) => void
}

const CustomInput = (props: InputProps) => {
    const [isOnFocus, setIsOnfocus] = useState<boolean>(false);
    const [isDarty, setIsDarty] = useState<boolean>(false)
    const [isTouched, setIsTouched] = useState<boolean>(false)

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.onChangeValueHandler(e.target.value)
    }

    const onFocusHandler = () => {
        setIsOnfocus(true)
    }

    const onBlurHandler = (e: FocusEvent<HTMLInputElement>) => {
        setIsOnfocus(false)
        setIsTouched(true)
        e.target.value && props.errorText ? setIsDarty(true) : setIsDarty(false)
    }

    return (
        <div className={s.inputWrapper}>
            <label
                htmlFor={props.label}
                className={isOnFocus ? `${s.label} ${s.labelHidden}` : `${s.label}`}>
                {props.label}
            </label>
            <input
                placeholder={props.label}
                value={props.text}
                type={props.type}
                className={s.input}
                id={props.label}
                onChange={changeHandler}
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
            />

            <span
                className={props.errorText && isTouched
                    ? `${s.errorMessage}`
                    : `${s.errorMessage} ${s.errorMessageHidden}`}
            >{props.errorText || ''}</span>
        </div>
    );
};

export default CustomInput;