//Irainian
import iranianImg1 from "./images/iranian1.jpg";
import iranianImg2 from "./images/iranian2.jpg";
import iranianImg3 from "./images/iranian3.jpg";
import iranianImg4 from "./images/iranian4.jpg";
import iranianImg5 from "./images/iranian5.jpg";
import iranianImg6 from "./images/iranian6.jpg";
import iranianImg7 from "./images/iranian7.jpg";
import iranianImg8 from "./images/iranian8.jpg";
import iranianImg9 from "./images/iranian9.jpg";
import iranianImg10 from "./images/iranian10.jpg";
import iranianImg11 from "./images/iranian11.jpg";
import iranianImg12 from "./images/iranian12.jpg";
//Non-Iranian
import nonIranian1 from "./images/non-irainian1.jpg";
import nonIranian2 from "./images/non-irainian2.jpg";
import nonIranian3 from "./images/non-irainian3.jpg";
import nonIranian4 from "./images/non-irainian4.jpg";
import nonIranian5 from "./images/non-irainian5.jpg";
import nonIranian6 from "./images/non-irainian6.jpg";
import nonIranian7 from "./images/non-irainian7.jpg";
import nonIranian8 from "./images/non-irainian8.jpg";
//pizza
import pizza1 from "./images/pizza1.jpg";
import pizza2 from "./images/pizza2.jpg";
import pizza3 from "./images/pizza3.jpg";
import pizza4 from "./images/pizza4.jpg";
import pizza5 from "./images/pizza5.jpg";
import pizza6 from "./images/pizza6.jpg";
import pizza7 from "./images/pizza7.jpg";
import pizza8 from "./images/pizza8.jpg";
//sandwich
import sandwich1 from "./images/sandwitch1.jpg";
import sandwich2 from "./images/sandwitch2.jpg";
import sandwich3 from "./images/sandwitch3.jpg";
import sandwich4 from "./images/sandwitch4.jpg";


export const images = [
    iranianImg1,
    iranianImg2,
    iranianImg3,
    iranianImg4,
    iranianImg5,
    iranianImg6,
    iranianImg7,
    iranianImg8,
    iranianImg9,
    iranianImg10,
    iranianImg11,
    iranianImg12,
    nonIranian1,
    nonIranian2,
    nonIranian3,
    nonIranian4,
    nonIranian5,
    nonIranian6,
    nonIranian7,
    nonIranian8,
    pizza1,
    pizza2,
    pizza3,
    pizza4,
    pizza5,
    pizza6,
    pizza7,
    pizza8,
    sandwich1,
    sandwich2,
    sandwich3,
    sandwich4,
]

export const foodsData = {
    iranian: [
        { name: "کوفته برنجی", id: 1, image: images[0], title: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز", price: "145000", discount: "35", stars: 5 },
        { name: "کشک بادمجان", id: 2, image: images[1], title: "بادمجان، کشک، نعناع خشک، مغز گردو، سیر، پیاز", price: "95000", discount: "0", stars: 5 },
        { name: "میرزا قاسمی", id: 3, image: images[2], title: "بادمجان، گوجه فرنگی، تخم مرغ، سیر، رب گوجه فرنگی", price: "142000", discount: "10", stars: 5 },
        { name: "باقلاقاتوق", id: 4, image: images[3], title: "پاچ باقلا، شوید خشک، کره، سیر، تخم مرغ", price: "180000", discount: "30", stars: 4 },
        { name: "فلافل", id: 5, image: images[4], title: "نخود، پیاز، تخم گشنیز، سیر، جعفری، سیب زمینی", price: "80000", discount: "35", stars: 3 },
        { name: "کله جوش", id: 6, image: images[5], title: "کشک، گردو، پیاز، نعناع خشک", price: "203000", discount: "5", stars: 4 },
        { name: "بورانی بادمجان", id: 7, image: images[6], title: "بادمجان قلمی، ماست چکیده، سیر، روغن زیتون، مغز گردو", price: "148000", discount: "22", stars: 5 },
        { name: "بادمجان شکم‌پر", id: 8, image: images[7], title: "بادمجان، پیاز، گوجه فرنگی	، سبزی خشک", price: "136000", discount: "18", stars: 4 },
        { name: "دلمه برگ کلم", id: 9, image: images[8], title: "کلم برگ، برنج، لپه پخته، پیاز، سبزی ", price: "209000", discount: "8", stars: 5 },
        { name: "دلمه برگ مو", id: 10, image: images[9], title: "پیاز، برنج، لپه، سبزی دلمه، سرکه", price: "195000", discount: "35", stars: 2 },
        { name: "کوکو سبزی", id: 11, image: images[10], title: "تخم مرغ، گردو، سیر، آرد، روغن مایع	", price: "270000", discount: "10", stars: 5 },
        { name: "کوکو سیب‌زمینی و عدس", id: 12, image: images[11], title: "عدس، سیب زمینی، پیاز متوسط،", price: "105000", discount: "20", stars: 1 },
    ]
    , non_Iranian: [
        { name: "پاستا سبزیجات", id: 13, image: images[12], title: "پاستا، قارچ، گوجه، کدوی خوردشده،", price: "140000", discount: "20", stars: 5 },
        { name: "پاستا بلونز", id: 14, image: images[13], title: "اسپاگتی، گوشت چرخ کرده، هویج،", price: "160000", discount: "12", stars: 4 },
        { name: "راتاتویی", id: 15, image: images[14], title: "بادمجان، گوجه فرنگی، کدو سبز، پیاز", price: "95000", discount: "45", stars: 4 },
        { name: "لازانیا", id: 16, image: images[15], title: "لازانیا، قارچ، ریحان تازه، جعفری تازه، ", price: "150000", discount: "0", stars: 5 },
        { name: "سوشی", id: 17, image: images[16], title: "جلبک دریایی/ نوری، برنج کته، سرکه ", price: "85000", discount: "15", stars: 4 },
        { name: "پاکورا سبزیجات", id: 18, image: images[17], title: "گرام ماسالا، پودر کاری، سیر له شده،", price: "110000", discount: "8", stars: 4 },
        { name: "کالزونه اسفناج", id: 19, image: images[18], title: "اسفناج، قارچ، پنیر موزارلا یا پنیر ", price: "177000", discount: "17", stars: 5 },
        { name: "پالاک پنیر", id: 20, image: images[19], title: "پنیر، اسفناج، گوجه، پیاز، سیر ", price: "180000", discount: "15", stars: 4 },
    ]
    , pizzas: [
        { name: "پیتزا روکولا", id: 21, image: images[20], title: "اسفناج، سبزی روکولا، آرد، پودر مایه خمیر، روغن زیتون، خردل، سیر، پنیر موزارلا و پارمسان، گوجه گیلاسی ،سس فلفل سبز تند ", price: "188000", discount: "12", stars: 5 },
        { name: "پیتزا بادمجان و زیتون", id: 22, image: images[21], title: "بادمجان کوچک، روغن زیتون، پنیر موزارلا، پنیر پارمزان، برگ ریحان، گوجه فرنگی، سس گوجه فرنگی", price: "150000", discount: "0", stars: 4 },
        { name: "پیتزا سبزیجات و خامه", id: 23, image: images[22], title: "نخود فرنگی پخته شده، ذرت نیم پز، فلفل دلمه‌ای رنگی، قارچ، سیر یا پیازچه خردشده", price: "185000", discount: "21", stars: 4 },
        { name: "پیتزا قارچ", id: 24, image: images[23], title: "قارچ، فلفل دلمه ای، رب گوجه فرنگی، پودر سیر، آویشن، مرزه، پنیر پیتزا گیاهی", price: "175000", discount: "25", stars: 3 },
        { name: "پیتزا پپرونی", id: 25, image: images[24], title: "تافو، فلفل قرمز خشک شده، پودر دانه‌های خردل، دانه رازیانه، پاپریکا دودی، پودر سیر، شکر نارگیل، پودر بادیان رومی ", price: "150000", discount: "0", stars: 4 },
        { name: "پیتزا اسفناج", id: 26, image: images[25], title: "اسفناج تازه، پیاز، سیر، پنیر پیتزا، قارچ", price: "252000", discount: "10", stars: 5 },
        { name: "پیتزا مارگاریتا", id: 27, image: images[26], title: "گوجه فرنگی، ریحان، سیر، پنیر پیتزا", price: "147000", discount: "13", stars: 2 },
        { name: "پیتزا پنیر", id: 28, image: images[27], title: "نان پیتزا، پنیر پیتزا، سس باربیکیو، گوجه فرنگی، سس کچاپ، سیر، روغن زیتون", price: "105000", discount: "16", stars: 3 },
    ]
    , sandwiches: [
        { name: "ساندویچ کتلت مخصوص", id: 29, image: images[28], title: "سیب زمینی، لوبیا قرمز،  بلغور گندم، نعناع خشک، پودر زیره، پودر جوز هندی، گوجه فرنگی، روغن زیتون", price: "205000", discount: "18", stars: 5 },
        { name: "ساندویچ سوسیس کوکتل", id: 30, image: images[29], title: "سوسیس گیاهی، پیاز، سیب زمینی،  رب گوجه فرنگی", price: "165000", discount: "35", stars: 4 },
        { name: "ساندویچ کتلت کدو سبز", id: 31, image: images[30], title: "کدو سبز، هویج، سیب زمینی، پیاز", price: "145000", discount: "0", stars: 5 },
        { name: "پنینی اسفناج", id: 32, image: images[31], title: " قارچ، اسفناج، پیاز، پنیر پیتزا، خامه، پودر پاپریکا، گردو، سرکه بالزامیک، سس مایونز", price: "190000", discount: "15", stars: 3 },
    ]
    , offer: [
        { name: "پیتزا قارچ", id: 24, image: images[23], title: "قارچ، فلفل دلمه ای، رب گوجه فرنگی، پودر سیر، آویشن، مرزه، پنیر پیتزا گیاهی", price: "175000", discount: "25", stars: 3 },
        { name: "باقلاقاتوق", id: 4, image: images[3], title: "پاچ باقلا، شوید خشک، کره، سیر، تخم مرغ", price: "180000", discount: "30", stars: 4 },
        { name: "پاستا سبزیجات", id: 13, image: images[12], title: "پاستا، قارچ، گوجه، کدوی خوردشده،", price: "140000", discount: "20", stars: 5 },
        { name: "راتاتویی", id: 15, image: images[14], title: "بادمجان، گوجه فرنگی، کدو سبز، پیاز", price: "95000", discount: "45", stars: 4 },
        { name: "کله جوش", id: 6, image: images[5], title: "کشک، گردو، پیاز، نعناع خشک", price: "203000", discount: "5", stars: 4 },
        { name: "ساندویچ سوسیس کوکتل", id: 30, image: images[29], title: "سوسیس گیاهی، پیاز، سیب زمینی،  رب گوجه فرنگی", price: "165000", discount: "35", stars: 4 },
        { name: "فلافل", id: 5, image: images[4], title: "نخود، پیاز، تخم گشنیز، سیر، جعفری، سیب زمینی", price: "80000", discount: "35", stars: 3 },
        { name: "پاستا بلونز", id: 14, image: images[13], title: "اسپاگتی، گوشت چرخ کرده، هویج،", price: "160000", discount: "12", stars: 4 },
        { name: "بورانی بادمجان", id: 7, image: images[6], title: "بادمجان قلمی، ماست چکیده، سیر، روغن زیتون، مغز گردو", price: "148000", discount: "22", stars: 5 },
        { name: "پیتزا پپرونی", id: 25, image: images[24], title: "تافو، فلفل قرمز خشک شده، پودر دانه‌های خردل، دانه رازیانه، پاپریکا دودی، پودر سیر، شکر نارگیل، پودر بادیان رومی ", price: "150000", discount: "0", stars: 4 },
        { name: "بادمجان شکم‌پر", id: 8, image: images[7], title: "بادمجان، پیاز، گوجه فرنگی	، سبزی خشک", price: "136000", discount: "18", stars: 4 },
        { name: "ساندویچ کتلت کدو سبز", id: 31, image: images[30], title: "کدو سبز، هویج، سیب زمینی، پیاز", price: "145000", discount: "0", stars: 5 },
        { name: "پنینی اسفناج", id: 32, image: images[31], title: " قارچ، اسفناج، پیاز، پنیر پیتزا، خامه، پودر پاپریکا، گردو، سرکه بالزامیک، سس مایونز", price: "190000", discount: "15", stars: 3 },

    ]
    , popular: [
        { name: "سوشی", id: 17, image: images[16], title: "جلبک دریایی/ نوری، برنج کته، سرکه ", price: "85000", discount: "15", stars: 4 },
        { name: "پاکورا سبزیجات", id: 18, image: images[17], title: "گرام ماسالا، پودر کاری، سیر له شده،", price: "110000", discount: "8", stars: 4 },
        { name: "باقلاقاتوق", id: 4, image: images[3], title: "پاچ باقلا، شوید خشک، کره، سیر، تخم مرغ", price: "180000", discount: "30", stars: 4 },
        { name: "کشک بادمجان", id: 2, image: images[1], title: "بادمجان، کشک، نعناع خشک، مغز گردو، سیر، پیاز", price: "95000", discount: "0", stars: 5 },
        { name: "کوفته برنجی", id: 1, image: images[0], title: "برنج سبزی کوفته لپه آرد نخودچی، گردو و زرشک و آلو پیاز", price: "145000", discount: "35", stars: 5 },
        { name: "فلافل", id: 5, image: images[4], title: "نخود، پیاز، تخم گشنیز، سیر، جعفری، سیب زمینی", price: "80000", discount: "35", stars: 3 },
        { name: "کالزونه اسفناج", id: 19, image: images[18], title: "اسفناج، قارچ، پنیر موزارلا یا پنیر ", price: "177000", discount: "17", stars: 5 },
        { name: "میرزا قاسمی", id: 3, image: images[2], title: "بادمجان، گوجه فرنگی، تخم مرغ، سیر، رب گوجه فرنگی", price: "142000", discount: "10", stars: 5 },
        { name: "پاستا سبزیجات", id: 13, image: images[12], title: "پاستا، قارچ، گوجه، کدوی خوردشده،", price: "140000", discount: "20", stars: 5 },
        { name: "پیتزا بادمجان و زیتون", id: 22, image: images[21], title: "بادمجان کوچک، روغن زیتون، پنیر موزارلا، پنیر پارمزان، برگ ریحان، گوجه فرنگی، سس گوجه فرنگی", price: "150000", discount: "0", stars: 4 },
        { name: "لازانیا", id: 16, image: images[15], title: "لازانیا، قارچ، ریحان تازه، جعفری تازه، ", price: "150000", discount: "0", stars: 5 },
        { name: "پیتزا پپرونی", id: 25, image: images[24], title: "تافو، فلفل قرمز خشک شده، پودر دانه‌های خردل، دانه رازیانه، پاپریکا دودی، پودر سیر، شکر نارگیل، پودر بادیان رومی ", price: "150000", discount: "0", stars: 4 },
        { name: "پیتزا روکولا", id: 21, image: images[20], title: "اسفناج، سبزی روکولا، آرد، پودر مایه خمیر، روغن زیتون، خردل، سیر، پنیر موزارلا و پارمسان، گوجه گیلاسی ،سس فلفل سبز تند ", price: "188000", discount: "12", stars: 5 },
        { name: "پیتزا سبزیجات و خامه", id: 23, image: images[22], title: "نخود فرنگی پخته شده، ذرت نیم پز، فلفل دلمه‌ای رنگی، قارچ، سیر یا پیازچه خردشده", price: "185000", discount: "21", stars: 4 },
        { name: "ساندویچ سوسیس کوکتل", id: 30, image: images[29], title: "سوسیس گیاهی، پیاز، سیب زمینی،  رب گوجه فرنگی", price: "165000", discount: "35", stars: 4 },
        { name: "پیتزا قارچ", id: 24, image: images[23], title: "قارچ، فلفل دلمه ای، رب گوجه فرنگی، پودر سیر، آویشن، مرزه، پنیر پیتزا گیاهی", price: "175000", discount: "25", stars: 3 },
        { name: "پیتزا اسفناج", id: 26, image: images[25], title: "اسفناج تازه، پیاز، سیر، پنیر پیتزا، قارچ", price: "252000", discount: "10", stars: 5 },
        { name: "پنینی اسفناج", id: 32, image: images[31], title: " قارچ، اسفناج، پیاز، پنیر پیتزا، خامه، پودر پاپریکا، گردو، سرکه بالزامیک، سس مایونز", price: "190000", discount: "15", stars: 3 },
        { name: "پاستا بلونز", id: 14, image: images[13], title: "اسپاگتی، گوشت چرخ کرده، هویج،", price: "160000", discount: "12", stars: 4 },
        { name: "پیتزا مارگاریتا", id: 27, image: images[26], title: "گوجه فرنگی، ریحان، سیر، پنیر پیتزا", price: "147000", discount: "13", stars: 2 },
        { name: "ساندویچ کتلت کدو سبز", id: 31, image: images[30], title: "کدو سبز، هویج، سیب زمینی، پیاز", price: "145000", discount: "0", stars: 5 },

    ]
}
