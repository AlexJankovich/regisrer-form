import {FormEvent, useState} from 'react';
import {useInput} from '../../inputHook/UseInput';
import {emailValidation, phoneValidations} from '../../utils/validations';
import Button from '../button/Button';
import CustomInput from '../input/CustomInput';
import Select from '../select/CustomSelect';
import s from './Form.module.scss';
import CustomCheckbox from "../checkbox/CustomCheckbox";


const Form = () => {

    const name = useInput('', {isEmpty: true});
    const email = useInput('', {...emailValidation});
    const language = useInput('', {});
    const phone = useInput('', {...phoneValidations})
    const [isAgree, setIsAgree] = useState<boolean>(false)


    const agreeCheckHandler = (check: boolean) => {
        setIsAgree(check)
    }

    let isSubmitDisabled: boolean =
        name.errorMessage === ''
        && email.errorMessage === ''
        && phone.errorMessage === ''
        && isAgree
    ;

    const submitHandler = (e: FormEvent) => {
        e.preventDefault()
        const data = {
            name: name.value,
            email: email.value,
            phone: phone.value,
            language: language.value,
            isAgree: isAgree
        }
        console.log(data)
    }

    return (
        <div className={s.wrapper}>
            <div className={s.title}>
                <h1> Регистрация </h1>
                <span>Уже есть аккаунт? <a href="#">войти</a></span>
            </div>
            <form onSubmit={submitHandler}>
                <CustomInput
                    text={name.value}
                    label={'Имя'}
                    errorText={name.errorMessage}
                    onChangeValueHandler={name.changeValueHandler}
                    type={'text'}/>
                <CustomInput
                    text={email.value}
                    label={'Email'}
                    onChangeValueHandler={email.changeValueHandler}
                    type={'text'}
                    errorText={email.errorMessage}
                />
                <CustomInput
                    text={`${phone.value}`}
                    label={'Телфон'}
                    errorText={phone.errorMessage}
                    onChangeValueHandler={phone.changeValueHandler}
                    type={'text'}
                />
                <Select
                    errorText={''}
                    languageValue={language.changeValueHandler}/>
                <CustomCheckbox
                    checkCallBack={agreeCheckHandler}
                    link={''}/>
                <Button
                    title={'title'}
                    isDisabled={!isSubmitDisabled}/>
            </form>
        </div>
    );
};


export default Form;