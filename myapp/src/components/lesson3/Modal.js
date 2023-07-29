import React from 'react';

const Modal = (props) => {
    if (!props.open) return null;
    
    return (
        <>
            <div className="modal">
        <div className="modal_container">
            <div className="modal_close">
                <button onClick={props.onclose} className='closeBtn'>X</button>
            </div>
            <header className="modal_header">
                Tickets
            </header>

            <div className="modal_body">
                <label for="quantity" className="modal_label">
                    Tickets, $15 per person
                </label>
                <input type="text" class="modal_input"
                 value={props.inValueTicket} onChange={props.onTicketChange} placeholder="How many?"></input>

                <label for="email" className="modal-label">
                    Send To
                </label>
                <input type="email" class="modal_input"
                 value={props.inValueGmail} onChange={props.onGmailChange} placeholder="Enter email"></input>

                <button onClick={props.handleButton} className="buy_tickets">
                    PAY 
                </button>
            </div>
            
            <footer className="modal_footer">
                <p class="modal-help">Need <a href="">help?</a></p>
            </footer>
        </div>
            </div>
        </>
    );
};

export default Modal;