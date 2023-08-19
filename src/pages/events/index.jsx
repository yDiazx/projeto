import { useState } from 'react';
import "./index.css";
import EventCard from "../../components/eventCard";

function Events() {
    const initialEvents = [
        {
          name: "Forró do Piu Piu",
          date: "22/06",
          price: 350,
          id: 1
        },
        {
          name: "Roberto Carlhos na Concha",
          date: "02/03",
          price: 550,
          id: 2
        },
        {
          name: "Campeonato Brasileiro de Bodyboard",
          date: "12/12",
          price: 32,
          id: 3
        }
      ];
    
      const [events, setEvents] = useState(initialEvents);
    
      return (
        <div className='container'>
          <div className="eventCardsContainer">
            {events.map((event) => {
              return (
                <EventCard key={event.id} event={event} />
              )
            })}
          </div>
        </div>
      );
}

export default Events;