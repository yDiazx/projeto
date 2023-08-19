import { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import './index.css';
 
function Layout() {
    const [foto, setFoto] = useState('');

    function pegarFoto() {
        fetch('https://dog.ceo/api/breeds/image/random ')
            .then(response => response.json())
            .then(data => setFoto(data.message))
            .catch(error => console.log(error));
    }

    useEffect(() => {
        pegarFoto();
    }, []);

    return (
        <div>
            <div className='layoutContainer'>
                <div className='menuContainer'>
                    <nav>
                        <Link to='/' >Home</Link>
                        <Link to='/eventos' >Eventos</Link>
                        <Link to='/qualquer' >Not Found</Link>
                    </nav>

                    <div className='userInfo' >
                        <Link to='/carrinho' >Carrinho</Link>
                        {foto && <img src={foto} alt="Foto usuário" />}
                    </div>
                </div>
            </div>

            <Outlet/>
        </div>
    )
}

export default Layout;
