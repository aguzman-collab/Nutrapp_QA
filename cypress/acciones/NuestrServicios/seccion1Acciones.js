import {NueServi_SEC1} from '../../elementos/elementos';
import { normalice } from '../../support/commands';

class seccion1NueAcciones{
    validarNueServi_SEC1() {
        cy.fixture("example").then((data) => {
        NueServi_SEC1.obtenertextoNueServi_SEC1().should('have.text', data.TituloNuesServi1) 
        })
    }

    validarparrafoNueServi_SEC1() {
        cy.fixture("example").then((data) => {
            NueServi_SEC1.obtenerparrafoNueServi_SEC1().invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNueServi_SEC1))})
        })
    }
}
export default new seccion1NueAcciones();  