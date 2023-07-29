import React from 'react';
import "./Styles.css";
import Btn from './Btn.js';
import IMAGES from './Images.js';

const Cardticket = (props) => {    
    return (
        <>
            <h3>{props.place}</h3>
            <p className='place_time'>{props.day}</p>
            <p className='place_intro'>{props.intro}</p>
        </>
    );
};

export default Cardticket;