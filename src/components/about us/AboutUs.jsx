import React from 'react';

import styled from "./AboutUs.module.scss";

//Image
import image1 from "./img/image1.jpg";
import image2 from "./img/image2.jpg";

//SVG
import userSVG from "./svg/user.svg";
import wifiSVG from "./svg/wifi.svg";
import menuBoardSVG from "./svg/menuBoard.svg";
import diagramSVG from "./svg/diagram.svg";

//Components
import Footer from '../Footer';
import ScrollToTop from '../shared/ScrollToTop';

const AboutUs = () => {
    return (
        <>
            <div className={styled.aboutUs} >
                <div className={styled.aboutUsBanner}>
                    <p> درباره ترخینه بیشتر بدانید! </p>
                </div>

                <div className={styled.aboutUsFields}>
                    <div className={styled.aboutUsField1}>
                        <h3> درباره ما </h3>
                    </div>
                    <div className={styled.aboutUsField2}>
                        <div className={styled.aboutUsField2FlexText}>
                            <p> رستوران‌های زنجیره‌ای ترخینه در سال ۱۳۶۸ افتتاح گردیده‌اند و در طی این سال‌ها همواره با ارائه غذاهای باکیفیت و سرویس سریع و به موقع در تلاش برای جلب رضایت مشتریان خود بوده‌اند. در طی این سال‌ها اولویت جلب رضایت مشتریان بوده است.
                            </p>
                            <p> دراین خصوص ترخینه همیشه در تلاش بوده تا در طی این زمان‌ها کیفیت غذاهای خود را در بهترین حالت نگه داشته و حتی با نوسانات قیمت‌های مواد اولیه در بازار قیمت خود را ثابت نگه داشته است. ترخینه شعبات خودرا افتتاح کرده که بسیار شیک و مدرن می‌باشند و برای برگزاری جشن‌های کوچک و بزرگ شما مشتریان عزیز توانایی پذیرایی با کیفیت بالا را دارند. سالن پذیرایی شعبات در دو طبقه مجزا به همراه راه پله مدرن و آسانسور برای افراد کم‌توان و سالخورده آماده ارائه سرویس به شما عزیزان می‌باشند.
                                چشم انداز: در آینده ای نزدیک تالار پذیرایی شعبات راه اندازی شده و آماده برگزاری جشن‌ها و مراسم‌های بزرگ شما خواهند بود . به امید آن روز که همه ایرانیان سالم و سلامت باشند.
                            </p>
                        </div>
                        <div className={styled.aboutUsField2IMG}>
                            <img src={image2} alt="place photo" />
                        </div>
                    </div>

                    <div className={styled.aboutUsField3}>
                        <div>
                            <img src={userSVG} alt="user photo" />
                            <span> پرسنلی مجرب و حرفه‌ای </span>
                        </div>

                        <div>
                            <img src={diagramSVG} alt="user photo" />
                            <span> کیفیت بالای غذا ها </span>
                        </div>

                        <div>
                            <img src={wifiSVG} alt="user photo" />
                            <span> محیطی دلنشین و آرام </span>
                        </div>

                        <div>
                            <img src={menuBoardSVG} alt="user photo" />
                            <span> منوی متنوع </span>
                        </div>

                    </div>

                </div>
            </div>
            <ScrollToTop />
            <Footer />
        </>
    );
};

export default AboutUs;