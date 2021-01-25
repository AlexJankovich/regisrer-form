import s from './Select.module.scss'
import DropDown from './../../assets/img/Iconicon.png'
import {useState} from "react";
import {LanguageList} from "./languageList";

interface SelectProps {
    errorText: string
    languageValue: (value: string) => void
}

const Select = (props: SelectProps) => {
    const option = Object.keys(LanguageList).filter((i: any) => typeof LanguageList[i] === "number")

    const [activeNumber, setActiveNumber] = useState<number>(0)
    const [collapsed, setCollapsed] = useState<boolean>(true)

    const onClickHandler = () => {
        setCollapsed(!collapsed)
    }

    const selectHandler = (id: number) => {
        setActiveNumber(id)
        setCollapsed(true)
        if (id !== 0) {
            props.languageValue(option[id])
        } else {
            props.languageValue(option[1])
        }
    }

    return (
        <div className={s.selectWrapper}>
            <label htmlFor='select'>Язык</label>
            <div id="select" className={collapsed ? s.select : `${s.select} ${s.checked}`}>
                <span>{option[activeNumber]}</span>
                <div className={collapsed ? `${s.option} ${s.hidden}` : s.option}>

                    {
                        option.map((i, index) => {
                            return <div
                                className={activeNumber === index ? s.itemActive : s.item}
                                key={index}
                                onClick={() => selectHandler(index)}>
                                {i}
                            </div>
                        })
                    }

                </div>
                <div role={'button'} className={s.icon} onClick={onClickHandler}>
                    <img src={DropDown}/>
                </div>
            </div>
        </div>
    )
}

export default Select;