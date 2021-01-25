import {useEffect, useState} from 'react';

export interface Validations {
    isEmpty?: boolean
    minLength?: number
    maxLength?: number
    pattern?: RegExp
    errorMesage?: string
}


export const useInput = (initValue: string, validations: Validations) => {
    const [value, setValue] = useState<string>(initValue);
    const validData = useValidation(value, validations);

    const changeValueHandler = (value: string) => {
        setValue(value);
    };

    return {
        value,
        changeValueHandler,
        ...validData
    };
};

const useValidation = (value: string, validations: Validations) => {

    const [errorMessage, setErrorMessage] = useState<string>('');

    useEffect(() => {
        if (validations.isEmpty && value.length === 0) {
            setErrorMessage('заполните поле');
        } else if (validations.maxLength && value.length > validations.maxLength) {
            setErrorMessage(`не более ${validations.maxLength}`);
        } else if (validations.minLength && value.length < validations.minLength) {
            setErrorMessage(`не менее ${validations.minLength}`);
        } else if (validations.pattern && !validations.pattern.test(String(value).toLowerCase().trim())) {
            setErrorMessage(`${validations.errorMesage}`);
        } else {
            setErrorMessage('');
        }
    }, [value]);

    return {
        errorMessage
    };

};