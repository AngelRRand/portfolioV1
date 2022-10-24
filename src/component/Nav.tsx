import logo from '../assets/NavBotton/PJprueba.gif'
import nutria from '../assets/NavBotton/nutria.gif'
import logoSinCasco from '../assets/NavBotton/PJpruebaSinCasco.gif'
import nutriaSinCasco from '../assets/NavBotton/nutriaSinCasco.gif'


import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import './Nav.css'
const Nav = () => {
    const location = useLocation();

    if(location.pathname.toString() !== '/'){
        return (
            <nav className="nav">
                <div className='container_perfil left_perfil'>
                    <img 
                        src={location.pathname.toString() === '/about/' ? logoSinCasco : logo} 
                        alt="" 
                        className='img_perfil '/>
                    <h2>Orasio</h2>
                </div>

                h2

                <div className='container_perfil rigth_perfil'>
                    <img 
                        src={location.pathname.toString() === '/about/' ? nutriaSinCasco : nutria} 
                        alt="" 
                        className='img_perfil '/>
                    <h2>Orasio</h2>
                </div>
            </nav>
        )  
    }else{
        return <></>
    }
}

export default Nav