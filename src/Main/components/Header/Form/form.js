import React from 'react';
import ReactDOM from 'react-dom';
import './Main/styles/Form/form.css';

class Form extends React.Component{
    render() {
        return(
            <div className="form">
                <form action="">
                    <input type="text" placeholder="Поиск..."/>
                </form>
            </div>
        )
    }
}

export default Form;