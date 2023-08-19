import { useState } from 'react';
import './index.css';

function EventCard({ event }) {
  const [quantidy, setQauntidy] = useState(0);

  function increases() {
    setQauntidy(quantidy + 1)
  }

  function decreases () {
    if(quantidy === 0) return
    setQauntidy(quantidy - 1)
  }

  function handleBuyEvent() {
    const storageCart = localStorage.getItem('cart');
    const cart = JSON.parse(storageCart);

    const item = {
      name: event.name,
      date: event.date,
      quantidy,
      price: event.price  
    }
    
    if (!cart) {
      localStorage.setItem("cart", JSON.stringify([item]));
    } else {

      const cartEvent = cart.find((element) => element.name === event.name);

      if(cartEvent) {
        const index = cart.findIndex((element) => element.name === event.name);

        cart[index] = {
          ...cart[index],
          quantidy: quantidy + cartEvent.quantidy
        } 
      } else {
        cart.push(item)
      }

      localStorage.setItem("cart", JSON.stringify(cart));
      setQauntidy(0);
    }
  }

  return (
    <div className="cardContainer">
      <div>{event.id}</div>

      <div className="eventDetails">
        <p>{event.name}</p>
        <p>{event.date} - {event.price} R$</p>
      </div>

      <div className='cardQuantityContainer'>
        <button 
          className='cardQuantityButton'
          onClick={decreases}
        >-</button>
        <div className='cardQuantityDisplay'> {quantidy} </div>
        <button 
          className='cardQuantityButton'
          onClick={increases}  
        >+</button>
      </div>

      <button className='buyButton' onClick={handleBuyEvent}>Comprar</button>
    </div>
  )
}

export default EventCard;