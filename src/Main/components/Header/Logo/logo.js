import React from 'react';
import ReactDOM from 'react-dom';
import '../../../styles/Header/Logo/logo.css';
var logo  =  require('../../../defaultProps.json/../images/logo.png');

class Logo extends React.Component {
    render(){
        return(
           <div className="logo">
               <a href="#"><img src={logo} alt="здесь должна быть картинка"/></a>
           </div>
        );
    }
}

export default Logo;