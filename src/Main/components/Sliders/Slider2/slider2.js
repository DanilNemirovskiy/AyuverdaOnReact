import React from 'react';
import '../../../styles/Sliders/Slider2/slider2.css';
import Slider from '../../../../../node_modules/react-slick';
var arrow_left = require('../../../defaultProps.json/../images/arrow_left.png');
var arrow_right = require('../../../defaultProps.json/../images/arrow_right.png');



class Slider2 extends React.Component{
    render() {
        var settings = {
            dots: false,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            prevArrow: <img className="prevArrow" src={arrow_left} alt=""/>,
            nextArrow: <img className="nextArrow" src={arrow_right} alt=""/>,
        };
        return(
            <div className="slider2-wrapper">
                <div className="slider2">
                    <Slider {...settings}>
                        <li>
                           <ul>
                               {this.props.items.map ((item, index) =>
                                   <li key={index}><a href={item.link}><img src={item.img} alt=""/>{item.label}</a></li>
                               )}
                           </ul>
                        </li>
                        <li>
                            <ul>
                                {this.props.items.map ((item, index) =>
                                    <li key={index}><a href={item.link}><img src={item.img} alt=""/>{item.label}</a></li>
                                )}
                            </ul>
                        </li>
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Slider2;