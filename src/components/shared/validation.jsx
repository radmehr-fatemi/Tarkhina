export const validation = ( type ,data ) => {
    const errors = {}
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const requiredField = " این فیلد الزامی است ";

    if( type === "LOGIN" || type === "SIGN_UP" ) {

        if(!data.email) {
            errors.email = requiredField
        } else if( !emailRegex.test(data.email) ) {
            errors.email = "ایمیل معتبر نیست"
        }else {
            delete errors.email
        }

        if( !data.password ) {
            errors.password = requiredField
        } else if ( data.password.length < 6 ) {
            errors.password = " پسور بایر بیشتر از 6 کاراکتر باشد ";
        } else {
            delete errors.password
        }
    }

    if( type === "SIGN_UP" ) {

        if( !data.name.trim() ) {
            errors.name = requiredField
        } else {
            delete errors.name
        }

        if( !data.confirmPassword ) {
            errors.confirmPassword = requiredField
        } else if( data.confirmPassword !== data.password ) {
            errors.confirmPassword = " پسورد ها یکسان نیستند "
        } else {
            delete errors.confirmPassword
        }

        if( !data.isAccepted ) {
            errors.isAccepted = requiredField
        } else {
            delete errors.isAccepted
        }
    }

    return errors
}