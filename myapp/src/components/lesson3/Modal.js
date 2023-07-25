import React from 'react';

const Modal = () => {
    return (
        <>
    <div className="modal">
        <div className="modal_container">
            <div className="modal_close">
                <i className="ti-close"></i>
            </div>
            <header className="modal_header">
                <i className=""></i>
                Tickets
            </header>

            <div className="modal_body">
                <label for="quantity" className="modal_label">
                    <i className="ti-shopping-cart"></i>
                    Tickets, $15 per person
                </label>

                {/* <input id="quantity" type="text" className="modal-input" placeholder="How many?">
                
                <label for="email" className="modal-label">
                    <i className="ti-user"></i>
                    Send To
                </label> */}

                {/* <input id="email" type="email" className="modal-input" placeholder="Enter email">

                <button id="buy-tickets">
                    PAY <i className="ti-check"></i>
                </button> */}

            </div>
            
            <footer className="modal_footer">
            </footer>
        </div>
    </div>

        </>
    );
};

export default Modal;