import { validateEmail } from "../helpers/validateEmail";


export function validateNameInput(value: string) {
    if (!value) {
        return 'Это обязательное поле';
    }
    if (value.length < 3) {
        return 'Допустимая длина: от 3 символов';
    }
    if (value.length > 15) {
        return 'Допустимая длина: 15 символов';
    }
}


export function validateEmailInput(value: string) {
    if (!value) {
        return 'Это обязательное поле';
    }
    if (!validateEmail(value)) {
        return 'Неверный формат e-mail';
    }
}


export function validatePasswordInput(value: string) {
    if (!value) {
        return 'Это обязательное поле';
    }
}


export function validatePasswordRepeatInput(value: string, password: string) {
    const passwordValidation = validatePasswordInput(value);
    if (passwordValidation) {
        return passwordValidation;
    }
    if (value !== password) {
        return 'Пароли не совпадают'
    }
}
