import {seccion5Home} from '../../elementos/elementos';
import { normalice } from '../../support/commands';


class seccion5Acciones{

    clickflechacarrusel(){
        seccion5Home.obtenerflechacarrusel().first().click(); 
    }
}
export default new seccion5Acciones(); 