function validation(values) {
    let errors = {};

    // Expresión regular
    const name_pattern = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
    const email_pattern = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const fhone_pattern = /^[0-9]+$/;
   

    if (values.name === '') {
        errors.name = 'Name is Required*'
    } else if(!name_pattern.test(values.name)){
        errors.name = 'invalid name*'
        console.log('ivalido')
    }


    if (values.email === '') {
        errors.email = 'Email is Required*'
    } else if(!email_pattern.test(values.email)){
        errors.email = "email did'nt match*"
    }

    
    if (values.fhone === '') {
        errors.fhone = 'Fhone is Required*'
    } else if(!fhone_pattern.test(values.fhone)){
        errors.fhone = 'invalid number*'
    }


    if (values.addres === '') {
        errors.addres = 'Addres is Required*'
    }

    return errors;
}

export default validation;