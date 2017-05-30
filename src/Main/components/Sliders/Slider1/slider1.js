import React from 'react';
import '../../../styles/Sliders/Slider1/slider1.css';
import Slider from '../../../../../node_modules/react-slick';
var slider1 = require('../../../defaultProps.json/../images/slider1.jpg');



class Slider1  extends React.Component {
    render() {
        var settings = {
            dots: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            dotsClass: 'dots'
        };
        return(
            <div className="slider1-wrapper">
                <div className="slider1">
                    <Slider {...settings}>
                        <li>
                            <img  className="slider1-img" src={slider1} alt=""/>
                            <h1><span>Природа </span> - наш доктор!<br/>
                            Лучшие аюрведические травы <br/>и специи из Индии!</h1>
                        </li>
                        <li>
                            <img  className="slider1-img " src={slider1} alt=""/>
                        </li>
                        <li>
                            <img className="slider1-img " src={slider1} alt=""/>
                        </li>
                        <li>
                            <img className="slider1-img " src={slider1} alt=""/>
                        </li>
                    </Slider>
                </div>
            </div>
        );
    }
}

export default Slider1;