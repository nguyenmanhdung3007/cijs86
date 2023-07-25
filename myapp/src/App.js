import Ticketlist from "./components/lesson2/Ticketlist.js";
import Cardticket from "./components/lesson2/Cardticket.js";
import Btn from "./components/lesson2/Btn.js";
import './App.css';
import Modal from "./components/lesson3/Modal.js";
import { useState } from "react";


function App() {
  return (
    <>
    <div className="Content">
      <h2 style={{color:"white", textAlign: "center"}}>WORK SHOP</h2>
      <p style={{color:"white", textAlign: "center"}}>lAliquiount amet minim laborum.</p>
    <div className='Ticket_container'>
      <ul className='Ticket_lists'>
      <Ticketlist month="September" status="Sold out"/>
      <Ticketlist month="November" status="Sold out"/>
      <Ticketlist month="December" status="3"/>
      </ul>
    </div>
    <div className="Card_container">
      <Cardticket place="Ha Noi" day="Fri 28 Sep 2021" intro="Anim nisi sunt cillum culpa ut nulla pariatur aliqua."/>
      <Cardticket place="Ho Chi Minh city" day="Tue 28 Dec 2021" intro="Anim nisi sunt cillum culpa ut nulla pariatur aliqua."/>
      <Cardticket place="Da nang" day="Thu 28 Nov 2021" intro="Anim nisi sunt cillum culpa ut nulla pariatur aliqua."/>
    </div>
    </div>
    <div>
      <Modal />
    </div>

    </>
  );
}

export default App;
