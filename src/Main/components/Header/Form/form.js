import React from 'react';
import '../../../styles/Header/Form/form.css';


class Form extends React.Component{
    render() {
        return(
            <div className="form">
                <form autoComplete="on">
                    <input  type="text" placeholder="Поиск..."/>
                </form>
            </div>
        )
    }
}

export default Form;