import React from 'react';
import '../../../styles/Header/Basket/basket.css';
var basket = require('../../../defaultProps.json/../images/basket.png');


class Basket  extends React.Component {
    render() {
        return(
            <div className="basket">
                <ul>
                    <li>
                        <img src={basket} alt=""/>
                        <p>Корзина</p>
                        <p>товаров: 1000 (10 000 грн)</p>
                    </li>
                    {this.props.items.map((item, index) =>
                        <li key={index}><button><a href={item.link}>{item.label}</a></button></li>
                    )}
                </ul>
            </div>
        );
    }
}

export default Basket;