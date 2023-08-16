import './index.css'
import Card from '../card/index.js';
import Image_Perfil from '../image-perfil';
import { Name } from '../name';
import { Email } from '../email';
import { Number } from '../number';
import { Linkedln } from '../link-linkedln';
function Perfil(){
    return(
        <div id='perfil'>
          <Card />  
          <Name />
          <Email />
          <Number />
          <Linkedln />
        </div>
    )
}

export default Perfil;