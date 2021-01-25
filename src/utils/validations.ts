import {Validations} from '../inputHook/UseInput';


export const emailValidation: Validations = {
    isEmpty: true,
    errorMesage: 'это не похоже на Email',
    pattern: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
};

export const passwordValidations: Validations = {
    isEmpty: true,
    maxLength: 12,
    minLength: 6
}

export const phoneValidations: Validations = {
    isEmpty: true,
    maxLength: 11,
    pattern: /(8)[\s(]?(\d{3})[\s)]?(\d{3})[\s-]?(\d{2})[\s-]?(\d{2})/,
    errorMesage: 'введети корректный номер'
}