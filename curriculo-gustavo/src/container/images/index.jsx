import './index.css'

import Image from '../../images/perfil.jpg'

export function ImagePerfil(){
    return(
        <div className="CardPerfil">
            <img className="imgPerfil" src={Image} />
        </div>
    )
}