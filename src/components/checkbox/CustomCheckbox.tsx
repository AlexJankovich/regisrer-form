import s from './CustomCheckbox.module.scss'
import {useState} from "react";

interface CheckBoxProps {
    checkCallBack: (checked: boolean) => void
    link:string
}

const CustomCheckbox = (props: CheckBoxProps) => {

    const [isChecked, setIsChecked] = useState<boolean>(false)

    const checkHandler = () => {
        setIsChecked(!isChecked)
        props.checkCallBack(!isChecked)
    }

    return (
        <>
            <label className={s.checkBoxWrapper} >
                <input type="checkbox" checked={isChecked} onChange={checkHandler}/>
                <span> Принимаю  <a href={props.link}>условия</a> пользования</span>
            </label>
        </>
    )
}


export default CustomCheckbox;