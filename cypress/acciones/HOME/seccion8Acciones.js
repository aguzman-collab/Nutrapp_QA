import {seccion8Home} from '../../elementos/elementos';
import { normalice } from '../../support/commands';

class seccion8Acciones{

    validarNuesClie_SEC8() {
        cy.fixture("example").then((data) => {
        seccion8Home.obtenertextoNuesClien_SEC8().should('have.text', data.TituloNuestrClient)
        })
    }

    validarNuesServiparrafo_SEC7() {
        cy.fixture("example").then((data) => {
            seccion8Home.obtenertextoNuesServiparrafo_SEC7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.Parrafoparrafo_SEC7))})
        })
    }

    validarPreguntatitulo_SEC8(){
        cy.fixture("example").then((data) => {
        seccion8Home.obtenertextoPregunta_SEC8().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TituloPregu8))})
        })
    }

    validarParrafopregunta_SEC8() {
        cy.fixture('example').then((data) => {
            seccion8Home.obtenerparrafopregunta_SEC8().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.items1[index]))}) 
            });
        });
    }

    clickbotonvermas_SEC7 (){
        seccion8Home.obtenerbotonvermas_SEC7().click();
        cy.url('https://nutrapp.com.co/index.php/nuestros-exitos/')
    }
}
export default new seccion8Acciones();  