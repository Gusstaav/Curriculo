import './index.css'
import { ImagePerfil } from './images'
import { Infos } from './infos'
import { CardBottons } from './bottons_navigations'
export function Card(){
    return(
        <div className="Card">
            <ImagePerfil />
            <Infos />
            <CardBottons />
        </div>
    )
}