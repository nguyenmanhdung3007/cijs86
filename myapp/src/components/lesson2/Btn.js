import React from 'react';
import './Styles.css';



const Btn = (props) => {
    return (
        <div>
            <button className={props.class} onClick={props.onOpen}
            >{props.name}</button>
        </div>
        
    );
};
export default Btn;