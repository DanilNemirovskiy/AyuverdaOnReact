import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Main/components/Header/Logo/logo.js';
import Form from './Main/components/Header/Form/form.js';
import Contacts from './Main/components/Header/Contacts/contacts.js';
import Basket from './Main/components/Header/Basket/basket.js';
import Navigation from './Main/components/Navigation/navigation.js';
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
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

