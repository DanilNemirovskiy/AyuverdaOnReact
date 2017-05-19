import React from 'react';
import ReactDOM from 'react-dom';
import Logo from './Main/components/Header/Logo/logo.js';
import './Main/styles/Index/index.css';

class App extends React.Component{
    render() {
        return(
            <div className="header-wrapper">
                <div className="header">
                    <Logo/>
                </div>
            </div>
        )
    }
}
ReactDOM.render(<App />, document.getElementById('root'));

