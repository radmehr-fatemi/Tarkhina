import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//Style
import styled from "./SingUp.module.scss";

//SVG
import tarkhineSVG from "../assets/login/tarkhine.svg";

//validation
import { validation } from './shared/validation';

const Login = () => {

    const [data, setData] = useState({
        email: '',
        password: '',
    });

    const [errors, setErrors] = useState({});
    const [isSelected, setIsSelected] = useState({});

    useEffect(() => {
        setErrors({ ...validation("LOGIN", data) })

    }, [data, isSelected])

    const changeHandler = ({ target }) => {
        setData({ ...data, [target.name]: target.value })
    }

    const blurHandler = ({ target }) => {
        setIsSelected({ ...isSelected, [target.name]: true })
    }

    const submitHandler = event => {
        event.preventDefault()

        if (Object.keys(errors).length) {
            setIsSelected({
                email: true,
                password: true,
            })
            setIsSuccess(true)

        } else {
            setIsSuccess(true)
        }
    }

    return (
        <div className={styled.signUp}>
            <form className={styled.signUpForm} onSubmit={submitHandler}>
                <br />
                <br />
                <br />
                <br />

                <div className={styled.imageSignUp} >
                    <img src={tarkhineSVG} alt="tarkhine photo" />
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

                <br />
                <br />

                <div className={styled.buttonSignUp}>
                    <button type="submit" > ورود</button>
                    <Link to="/signup" > ثبت نام </Link>
                </div>
            </form>

        </div>
    );
};

export default Login;
