import React from 'react';
import '../../../../styles/Content/Left/Accordion/accordion.css';
import Collapsible from 'react-collapsible';



class Accordion extends React.Component{
    render() {
        function isMinus() {
            document.getElementsByClassName('.firstElem').innerHTML = '-';
        }
        function isActive() {
            document.getElementsByClassName('.allElem').style.color = '#f0ad3c';
        }
        return(
            <div className="accordion">
                <Collapsible trigger={<a className="allElem"><span className="firstElem">+</span>  Аюрведические препараты</a>} className="start" openedClassName="start" >
                    <div>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                    </div>
                </Collapsible>
                <Collapsible trigger={<a className="allElem"><span  className="firstElem">+</span>  Аюрведическая косметика,
                    <b> масла и средства гигиены</b></a>} className="start" openedClassName="start" >
                    <div>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                    </div>
                </Collapsible>
                <Collapsible trigger={<a className="allElem"><span  className="firstElem">+</span>  Арома палочки</a>} className="start" openedClassName="start" >
                    <div>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                    </div>
                </Collapsible>
                <Collapsible trigger={<a className="allElem"><span className="firstElem">+</span>  Книги</a>} className="start" openedClassName="start" >
                    <div>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                    </div>
                </Collapsible>
                <Collapsible trigger={<a className="allElem"><span className="firstElem">+</span>  Сувениры</a>} className="start" openedClassName="start" >
                    <div>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                    </div>
                </Collapsible>
                <Collapsible trigger={<a className="allElem"><span  className="firstElem">+</span>  Специи и чаи</a>} className="start" openedClassName="start" >
                    <div>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                    </div>
                </Collapsible>
                <Collapsible trigger={<a className="allElem"><span className="firstElem">+</span>  Распродажи</a>} className="start" openedClassName="start" >
                    <div>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                        <p>Lorem ipsum</p>
                    </div>
                </Collapsible>
            </div>
        )
    }
}


export default Accordion;