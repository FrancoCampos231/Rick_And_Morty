const validation = (userData) => {
    const errors = {}

    if(!/^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/.test(userData.email)) {
        errors.email = 'El email no es valido'
    }
    if(!userData.email){
        errors.email = 'Debe ingresar un email'
    }
    if(userData.email.length > 35) {
        errors.email = 'El email no de be superar los 35 caracteres'
    }
    if(!/.*\d+.*/.test(userData.password)) {
        errors.password = 'La contraseña debe tener al menos un número';
    }
    if(userData.password.length < 6 && userData.password.length > 10) {
        errors.password = 'La contraseña debe estar entre 6 y 10 caracteres';
    }

    return errors;
}

export default validation;
