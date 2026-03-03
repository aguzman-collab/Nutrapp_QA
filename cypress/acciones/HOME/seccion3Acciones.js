import nutraelementos from '../../elementos/elementos';
import { normalice } from '../../support/commands';


class seccion3Acciones{
    

    validarNuestrosServicios() {
        nutraelementos.obtenertextoNuesServi().should('have.text','Nuestros servicios')
    }

    validarDesarrolloWeb(){
        cy.fixture("example").then((data) => {
            nutraelementos.obtenertextosdesarroweb().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoN1_3))})
        })
    }

    clickbotonvermas(){
        nutraelementos.obtenerbotonvermas().click();
        cy.url('href="https://nutrapp.com.co/index.php/nuestros-servicios/"')
    }
}
export default new seccion3Acciones(); 