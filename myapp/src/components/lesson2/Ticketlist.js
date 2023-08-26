import React from 'react';
import "./Styles.css";

const Ticketlist = (props) => {
    const {ticket} = props; 
    
    return (
        <>
        <li>{ticket.month}
        {ticket.isSoldout ? 
        <span className='sold_out'>Sold out</span> : 
        <span className='quantity'>{ticket.quantity}</span>}
        </li>
        
        </>
    );
};

export default Ticketlist;