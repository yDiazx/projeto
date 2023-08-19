import { useEffect, useState } from 'react';

function Cart() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const storageCart = localStorage.getItem('cart');
        if(storageCart) {
            setCart(JSON.parse(storageCart));
        }
    }, []);

    return (
        <div>
            <ul>
                {cart.map(event => {
                    return (
                        <li>{event.name} - {event.date} - {event.quantidy} - {event.quantidy * event.price} R$</li>
                    )
                })}
            </ul>

            <div>
                Valor total: 500  R$
            </div>
        </div>
    )
}

export default Cart;