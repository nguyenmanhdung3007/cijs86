import React from 'react';
import "./Styles.css";
import Btn from './Btn.js';

const Cardticket = (props) => {    
    return (
        <>
           <div className='Cardticket_list'>
            <img src='../assets/danang.jpg' />
            <div className='Cardticket_list_text'>
            <h3>{props.place}</h3>
            <p className='place_time'>{props.day}</p>
            <p className='place_intro'>{props.intro}</p>
            <div className='btns'>
            <Btn class="btn_buy_ticket" name="Buy Tickets" />
            <Btn class="btn_get_ticket" name="Get Tickets"/>
            </div>
            </div>
            </div>   
        </>
    );
};

export default Cardticket;