import {seccion3Home} from '../../elementos/elementos';
import { normalice } from '../../support/commands';


class seccion3Acciones{
    

    validarNuestrosServicios() {
        cy.fixture("example").then((data) => {
        seccion3Home.obtenertextoNuesServi().should('have.text', data.TituloNuestServi3)
        }) 
    }

    validarDesarrolloWeb(){
        cy.fixture("example").then((data) => {
            seccion3Home.obtenertextosdesarroweb().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoN1_3))})
        })
    }

    clickbotonvermas(){
        seccion3Home.obtenerbotonvermas().click();
        cy.url('href="https://nutrapp.com.co/index.php/nuestros-servicios/"')
    }
}
export default new seccion3Acciones(); 