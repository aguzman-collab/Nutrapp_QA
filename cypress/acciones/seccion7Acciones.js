import nutraelementos from '../elementos/elementos';
import { normalice } from '../support/commands';


class seccion7Acciones{

    validarNuesExit7() {
        nutraelementos.obtenertextoNuesServi_SEC7().should('have.text', 'Nuestros éxitos')
    }

    validarNuesServiparrafo_SEC7() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenertextoNuesServiparrafo_SEC7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.Parrafoparrafo_SEC7))})
        })
    }

    clickbotonvermas_SEC7 (){
        nutraelementos.obtenerbotonvermas_SEC7().click();
        cy.url('https://nutrapp.com.co/index.php/nuestros-exitos/')
    }

    validarAlivia7() {
        nutraelementos.obtenertextoAlivia_SEC7().should('have.text', 'Alivia')
    }

    ValidarAMF7(){
        nutraelementos.obtenertextoAMF_SEC7().should('have.text', 'AMF')
    }

    ValidarAPM7(){
       nutraelementos.obtenertextoAPM_SEC7().should('have.text', 'APM')
    }

    validarNutrabio(){
      nutraelementos.obtenertextoNutrabio_SEC7().should('have.text', 'Nutrabiotics')
    }

    validarAliviaparrafo_SEC7() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenerparrafoAli_SEC7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoAli_SEC7))})
        })
    }

    validarAmfparrafo_SEC7() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenerparrafoAMF_SEC7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoAmf_SEC7))})
        })
    }

    validarApmparrafo_SEC7() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenerparrafoAPM_SEC7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoApm_SEC7))})
        })
    }

    validarNutrabioparrafo_SEC7() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenerparrafoNutrabio_SEC7().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNutrabio_SEC7))})
        })
    }
}
export default new seccion7Acciones(); 