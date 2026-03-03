import nutraelementos from '../../elementos/elementos';
import { normalice } from '../../support/commands';


class NuesExito_SEC7Acciones{
    validartextoNuesExitO_SEC7() {
        nutraelementos.obtenertextoNuesExitO_SEC7().should('have.text', 'Nuestros éxitos')
    }  

    validarparrrafoNuesExito_SEC7() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenerparrrafoNuesExito_SEC7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrrafoNuesExito_SEC7))})
        })
    }

    validartextoAliv_SEC7() {
        nutraelementos.obtenertextoAliv_SEC7().should('have.text', 'Alivia')
    } 

    validarparrrafoAliv_SEC7() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenerparrrafoAliv_SEC7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrrafoAliv_SEC7))})
        })
    }

    validartextoAMF_SEC7() {
        nutraelementos.obtenertextoAMF_SEC7().should('have.text', 'AMF')
    } 

    validarparrrafoAMF_SEC7() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenerparrrafoAMF_SEC7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrrafoAMF_SEC7))})
        })
    }

   validartextoAPM_SEC7() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenertextoAPM_SEC7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TextoAPM_SEC7))})
        })
    }

    validarparrrafoAPM_SEC7() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenerparrrafoAPM_SEC7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrrafoAPM_SEC7))})
        })
    }

    validartextoNutra_SEC7() {
        nutraelementos.obtenertextoNutra_SEC7().should('have.text', 'Nutrabiotics')
    } 

    validarparrrafoNutra_SEC7() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenerparrrafoNutra_SEC7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrrafoNutra_SEC7))})
        })
    }

}
export default new NuesExito_SEC7Acciones(); 