import React from 'react';
import '../../../styles/Header/Contacts/contacts.css';


class Contacts extends React.Component{
    render() {
        return(
            <div className="contacts">
                <p>Вопросы в Skype</p>
                <p>+(66)80-638-69-44</p>
                {this.props.items.map((item, index) =>
                    <p><a href={item.link} key={index}>{item.label}</a></p>
                )}
            </div>
        )
    }
}

export default Contacts;