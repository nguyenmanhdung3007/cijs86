import Ticketlist from "./components/lesson2/Ticketlist.js";
import Cardticket from "./components/lesson2/Cardticket.js";
import Btn from "./components/lesson2/Btn.js";

function App() {
  return (
    <>
    <div className="Ticket-list">
      <Ticketlist />
      <Ticketlist />
      <Ticketlist />
    </div>
    <div className="Card-tickets">
      <div>
      <Cardticket />
      <Btn /> 
      </div>
      <div>
      <Cardticket />
      <Btn /> 
      </div>
      <div>
      <Cardticket />
      <Btn /> 
      </div>
    </div>

    </>
  );
}

export default App;
