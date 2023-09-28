import React, { useEffect, useState } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';

//Style
import styled from "./SingUp.module.scss";

//SVG
import tarkhineSVG from "../../assets/login/tarkhine.svg";

//validation
import { validation } from '../shared/validation';

const SignUp = () => {

    const [data, setData] = useState({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        isAccepted: false,
    });

    const [errors, setErrors] = useState({});
    const [isSelected, setIsSelected] = useState({});
    const [ cookies ,setCookies ,removeCookies ] = useCookies('');
    const navigate = useNavigate();

    useEffect(() => {
        setErrors({ ...validation("SIGN_UP", data) })

    }, [data, isSelected])

    const changeHandler = ({ target }) => {
        if (target.name === "isAccepted") {
            setData({ ...data, [target.name]: target.checked })

        } else {
            setData({ ...data, [target.name]: target.value })
        }
    }

    const blurHandler = ({ target }) => {
        setIsSelected({ ...isSelected, [target.name]: true })
    }

    const submitHandler = event => {
        event.preventDefault()

        if (Object.keys(errors).length) {
            setIsSelected({
                name: true,
                email: true,
                password: true,
                confirmPassword: true,
                isAccepted: true
            })
            console.log( errors )

        } else {
            setCookies( "user" ,{ name : data.name ,email : data.email ,password : data.password } ,{ path : "/" } )
            navigate( '/' ,{ replace : true } )
        }
    }

    return (
        <div className={ styled.signUp }>
            <form className={styled.signUpForm} onSubmit={submitHandler}>

                <div className={styled.imageSignUp} >
                    <img src={tarkhineSVG} alt="tarkhine photo" />
                </div>

                <div className={styled.inputSignUp} >
                    <label> نام </label>
                    <input
                        className={errors.name && isSelected.name && styled.inputInvalid}
                        placeholder='Radmehr fatemi'
                        type="text"
                        name='name'
                        value={data.name}
                        onChange={changeHandler}
                        onBlur={blurHandler}
                    />
                    {errors.name && isSelected.name && <span> {errors.name} </span>}
                </div>

                <div className={styled.inputSignUp} >
                    <label> ایمیل </label>
                    <input
                        className={errors.email && isSelected.email && styled.inputInvalid}
                        placeholder='fatemi81@gmail.com'
                        type="email"
                        name='email'
                        value={data.email}
                        onChange={changeHandler}
                        onBlur={blurHandler}
                    />
                    {errors.email && isSelected.email && <span> {errors.email} </span>}
                </div>

                <div className={styled.inputSignUp} >
                    <label> پسورد </label>
                    <input
                        className={errors.password && isSelected.password && styled.inputInvalid}
                        placeholder='Fatemi81Radmehr'
                        type="password"
                        name='password'
                        value={data.password}
                        onChange={changeHandler}
                        onBlur={blurHandler}
                    />
                    {errors.password && isSelected.password && <span> {errors.password} </span>}
                </div>

                <div className={styled.inputSignUp} >
                    <label> تایید پسورد </label>
                    <input
                        className={errors.confirmPassword && isSelected.confirmPassword && styled.inputInvalid}
                        placeholder='Fatemi81Radmehr'
                        type="password"
                        name='confirmPassword'
                        value={data.confirmPassword}
                        onChange={changeHandler}
                        onBlur={blurHandler}
                    />
                    {errors.confirmPassword && isSelected.confirmPassword && <span> {errors.confirmPassword} </span>}
                </div>

                <div className={styled.checkboxSignUp} >
                    <div>
                        <label> همه قوانین را می پذیرم </label>
                        <input
                            type="checkbox"
                            name='isAccepted'
                            value={data.isAccepted}
                            onChange={changeHandler}
                            onBlur={blurHandler}
                        />
                    </div>
                    {errors.isAccepted && isSelected.isAccepted && <span> {errors.isAccepted} </span>}
                </div>

                <div className={styled.buttonSignUp}>
                    <button type="submit" > ثبت نام </button>
                    <Link to="/login" > ورود </Link>
                </div>
            </form>

        </div>
    );
};

export default SignUp;
