import React from 'react';
import { useState } from 'react';
import './Styles.css';
import Modal from "../lesson3/Modal";
import useModal from '../lesson3/useModal';


const Btn = (props) => {
    return (
        <div>
            <button className={props.class}
            >{props.name}</button>
            <Modal />
        </div>
        
    );
};
export default Btn;