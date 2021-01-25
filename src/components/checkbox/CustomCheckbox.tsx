import s from './CustomCheckbox.module.scss'
import {useState} from "react";
import mask from './../../assets/img/Maskmask.png'

interface CheckBoxProps {
    checkCallBack: (checked: boolean) => void
}

const CustomCheckbox = (props: CheckBoxProps) => {

    const [isChecked, setIsChecked] = useState<boolean>(false)

    const checkHandler = () => {
        setIsChecked(!isChecked)
        props.checkCallBack(!isChecked)
    }

    return (
        <div className={s.checkBoxWrapper}>
            <div
                className={isChecked ? `${s.checkbox} ${s.checked}` : s.checkbox}
                onClick={checkHandler}
            >
                <img src={mask} alt="" className={isChecked ? '' : s.hidden}/>
            </div>
            <span> Принимаю  <a href="#">условия</a> пользования</span>
        </div>
    )
}


export default CustomCheckbox;