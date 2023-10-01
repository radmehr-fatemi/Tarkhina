import React from 'react';
import { Link } from 'react-router-dom';

//Style
import styled from "./Footer.module.scss";

//SVG
import twiterSVG from "../assets/svg/twiterHome.svg";
import instagramSVG from "../assets/svg/instagramHome.svg";
import telegramSVG from "../assets/svg/telegramHome.svg";

const Footer = () => {
    return (
        <div className={styled.homePageFooterBackground}>
            <div className={styled.homePageFooter} >

                <div className={styled.footerField1}>

                    <div className={styled.homePageFooterSection1}>
                        <h1> دسترسی آسان </h1>

                        <ul>
                            <li><Link> پرسش‌های متداول </Link></li>
                            <li><Link> قوانین ترخینه </Link></li>
                            <li><Link> حریم خصوصی </Link></li>
                            <li>
                                <Link><img src={twiterSVG} alt="twitter photo" /></Link>
                                <Link><img src={instagramSVG} alt="instagram photo" /></Link>
                                <Link><img src={telegramSVG} alt="telegram photo" /></Link>
                            </li>
                        </ul>
                    </div>

                    <div className={styled.homePageFooterSection2}>
                        <h1> شعبه‌های ترخینه </h1>

                        <ul>
                            <li><Link to="/okatebatbranch" > شعبه اکباتان </Link></li>
                            <li><Link to="/okatebatbranch" > شعبه چالوس </Link></li>
                            <li><Link to="/okatebatbranch" > شعبه اقدسیه </Link></li>
                            <li><Link to="/okatebatbranch" > شعبه ونک </Link></li>
                        </ul>
                    </div>
                </div>

                <div className={styled.footerField2}>

                    <div className={styled.footerField2Details}>
                        <h1> پیام به ترخینه  </h1>

                        <div className={styled.footerDetails}>
                            <div className={ styled.footerDetailsInputs }>
                                <input type="text" placeholder='نام و نام خانوادگی' />
                                <input type="text" placeholder='شماره تماس' />
                                <input type="email" placeholder='آدرس ایمیل (اختیاری)' />
                            </div>


                            <div className={styled.footerField2Massage}>
                                <input type="text" placeholder='پیام شما' />
                            </div>
                        </div>
                    </div>

                    <div className={styled.footerField2Button}>
                        <button type="submit"> ارسال پیام </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;