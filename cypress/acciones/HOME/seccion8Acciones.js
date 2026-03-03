import nutraelementos from '../../elementos/elementos';
import { normalice } from '../../support/commands';

class seccion8Acciones{

    validarNuesClie_SEC8() {
        nutraelementos.obtenertextoNuesClien_SEC8().should('have.text', 'Nuestros clientes')
    }

    validarNuesServiparrafo_SEC7() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenertextoNuesServiparrafo_SEC7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.Parrafoparrafo_SEC7))})
        })
    }

    validarPreguntatitulo_SEC8(){
        nutraelementos.obtenertextoPregunta_SEC8().should('have.text', '¿Preparado para promover tu negocio?')
    }

    validarParrafopregunta_SEC8() {
        cy.fixture('example').then((data) => {
            // Iterar sobre cada <li> y validar su contenido
            cy.get('div[data-id="e45049d"] ul li span').each(($el, index) => {
                // Validar que el texto de cada <li> coincida con el texto en el fixture
                cy.wrap($el).invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.items1[index]))}) 
            });
        });
    }

    clickbotonvermas_SEC7 (){
        nutraelementos.obtenerbotonvermas_SEC7().click();
        cy.url('https://nutrapp.com.co/index.php/nuestros-exitos/')
    }
}
export default new seccion8Acciones();  