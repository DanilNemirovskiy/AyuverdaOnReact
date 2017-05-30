import React from 'react';
import '../../styles/Navigation/navigation.css';
var rect  =  require('../../defaultProps.json/../images/rect.png');


class Navigation extends React.Component{
    render() {
        return(
            <div className="navigation">
                <ul>
                    {this.props.items.map((item, index) =>
                        <li key={index}><a href={item.link}>{item.label}</a><img src={rect} alt=""/></li>
                    )}
                </ul>
            </div>
        )
    }
}

export default Navigation;