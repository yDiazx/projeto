import { useNavigate } from 'react-router-dom';

function NotFound(){
    const navigate = useNavigate();

    function navigateToHomePage() {
        navigate('/')
    }

    return(
        <div>
            <h1>não achooooou</h1>
            <button onClick={navigateToHomePage}>Ir para HomePage</button>
        </div>
    )
}

export default NotFound;