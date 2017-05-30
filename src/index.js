import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Main/components/Header/Logo/logo.js';
import Form from './Main/components/Header/Form/form.js';
import Contacts from './Main/components/Header/Contacts/contacts.js';
import Basket from './Main/components/Header/Basket/basket.js';
import Navigation from './Main/components/Navigation/navigation.js';
import Slider1 from './Main/components/Sliders/Slider1/slider1.js';
import Slider2 from './Main/components/Sliders/Slider2/slider2.js';
import Accordion from './Main/components/Content/Left/Accordion/accordion.js';
import News from './Main/components/Content/Left/News/news.js';
import './Main/styles/Index/index.css';


const email = [
    {
        link: '/ayurvedabest@mail.ru',
        label: 'ayurvedabest@mail.ru'
    },
]

const navigation = [
    {
        link: '/Главная',
        label: 'Главная'
    },
    {
        link: '/Акции/Новости',
        label: 'Акции/Новости'
    },
    {
        link: '/Оплата_и_Доставка',
        label: 'Оплата и Доставка'
    },
    {
        link: '/Каталог',
        label: 'Каталог'
    },
    {
        link: '/Аюрв.Консультация',
        label: 'Аюрв.Консультация'
    },
    {
        link: '/Кому_Оптом',
        label: 'Кому Оптом'
    },
    {
        link: '/Статьи_по_Аюрведе',
        label: 'Статьи по Аюрведе'
    },
]

const order = [
    {
        link: 'Оформить_Заказ',
        label: 'Оформить Заказ'
    }
]



const slider2 = [
    {
        link: '/Аюрведические_препараты',
        img: './images/slider2-1.png',
        label: 'Аюрведические препараты'
    },
    {
        link: '/Аюрвидическая_косметика,масла_и_средства_гигиены',
        img: './images/slider2-2.png',
        label: 'Аюрвидическая косметика,'  +
        'масла и средства гигиены'
    },
    {
        link: '/Арома_палочки',
        img: './images/slider2-3.png',
        label: 'Арома палочки'

    },
    {
        link: '/Специи_и_чаи',
        label: 'Специи и чаи',
        img: './images/slider2-4.png'
    }
]


class App extends React.Component{
    render() {
        return(
            <div>
                <div className="header-wrapper">
                    <div className="header">
                        <Logo/>
                        <Form/>
                        <Contacts items={email}/>
                        <Basket items={order}/>
                    </div>
                </div>
                <div className="navigation-wrapper">
                    <div className="navigation">
                        <Navigation items={navigation}/>
                    </div>
                </div>
                <div className="sliders-wrapper">
                    <div className="sliders">
                        <Slider1/>
                        <Slider2 items={slider2}/>
                    </div>
                </div>
                <div className="content-wrapper">
                    <div className="content">
                        <div className="left">
                            <Accordion/>
                            <News/>
                        </div>
                        <div className="right">

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

