import React from 'react';
import { useState } from 'react';
import './Styles.css';
import Modal from "../lesson3/Modal";


const Btn = (props) => {
    return (
        <div>
            <button className={props.class} onClick={props.onOpen}
            >{props.name}</button>
        </div>
        
    );
};
export default Btn;