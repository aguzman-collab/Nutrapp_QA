import nutraelementos from '../../elementos/elementos';
import { normalice } from '../../support/commands';

class seccion1NueAcciones{
    validarNueServi_SEC1() {
        nutraelementos.obtenertextoNueServi_SEC1().should('have.text', 'Nuestros servicios')
    }

    validarparrafoNueServi_SEC1() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenerparrafoNueServi_SEC1().invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNueServi_SEC1))})
        })
    }
}
export default new seccion1NueAcciones();  