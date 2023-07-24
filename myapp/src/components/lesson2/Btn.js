import React from 'react';
import { useState } from 'react';


const Btn = () => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };

    const handleMouseLeave = () => {
        setIsHover(false);
    };

    const btn_buy_ticket = {
        backgroundColor: '#000',
        color: '#fff',
        textDecoration: 'none',
        padding: '11px 16px',
        display: 'inline-block',
        marginTop: '15px',
        border: 'none',
        backgroundColor: isHover ? '#000' : '#ccc',
        color: isHover? '#fff' : '#000',
    };
    const btn_get_ticket = {
    
    };

    return (
        <div>
            <button className='' style={btn_buy_ticket} 
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}>Buy Tickets</button>
            <button className='' style={btn_get_ticket} 
            onMouseEnter={handleMouseEnter} 
            onMouseLeave={handleMouseLeave}>Get free</button> 
        </div>
    );
};

export default Btn;