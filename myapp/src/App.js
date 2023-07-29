import Ticketlist from "./components/lesson2/Ticketlist.js";
import Cardticket from "./components/lesson2/Cardticket.js";
import Btn from "./components/lesson2/Btn.js";
import './App.css';
import Modal from "./components/lesson3/Modal.js";
import { useState } from "react";
import IMAGES from "./components/lesson2/Images.js";


function App() {
    const [openModal, setOpenModal] =useState(false)
    const [input, setInput] = useState("")
	
	  const handleSubmit = (event) => {
		  event.preventDefault()
		  console.log(input)
		  setInput("")
	  }

	  const handleInputChange = (event) => {
		  setInput(event.target.value)
	  }

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

      <div className="Cardticket_list">
        <img src={IMAGES.hanoi} style={{display: "block", width: "100%"}}/>
        <div className='Cardticket_list_text'>
        <Cardticket pic="IMAGES.hanoi" place="Ha Noi" day="Fri 28 Sep 2021" intro="Anim nisi sunt cillum culpa ut nulla pariatur aliqua."/>
          <div className='btns'>
            <Btn onOpen={()=> setOpenModal(true)} class="btn_buy_ticket" name="Buy Tickets" />
            <Btn class="btn_get_ticket" name="Get Tickets"/>
          </div>
        </div>
      </div>

      <div className="Cardticket_list">
        <img src={IMAGES.saigon} style={{display: "block", width:"100%"}}/>
        <div className='Cardticket_list_text'>
        <Cardticket place="Ho Chi Minh city" day="Tue 28 Dec 2021" intro="Anim nisi sunt cillum culpa ut nulla pariatur aliqua."/>
          <div className='btns'>
            <Btn onOpen={()=> setOpenModal(true)} class="btn_buy_ticket" name="Buy Tickets" />
            <Btn class="btn_get_ticket" name="Get Tickets"/>
          </div>
        </div>
      </div>

      <div className="Cardticket_list">
        <img src={IMAGES.danang} style={{display: "block", width:"100%"}}/>
      <div className='Cardticket_list_text'>
        <Cardticket place="Da nang" day="Thu 28 Nov 2021" intro="Anim nisi sunt cillum culpa ut nulla pariatur aliqua."/>
          <div className='btns'>
            <Btn onOpen={()=> setOpenModal(true)} class="btn_buy_ticket" name="Buy Tickets" />
            <Btn class="btn_get_ticket" name="Get Tickets"/>
          </div>
      </div>
      </div>

    </div>
    </div>

    {/* <div>
      <button onClick={() => setOpenModal(true)}>Modal</button>
    </div> */}

    <div>
      <Modal
       handleButton={handleSubmit}  
       onChange={handleInputChange}
       inValue={input}
       open = {openModal} 
       onclose={()=> setOpenModal(false)} />
    </div>

    </>
  );
}

export default App;
