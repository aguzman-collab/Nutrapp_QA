import {seccion7Home} from '../../elementos/elementos';
import { normalice } from '../../support/commands';


class seccion7Acciones{

    validarNuesExit7() {
        cy.fixture("example").then((data) => {
        seccion7Home.obtenertextoNuesExito_SEC7().should('have.text', data.tituloNuesExito701)
        })
    }

    validarNuesServiparrafo_SEC7(){
        cy.fixture("example").then((data) => {
            seccion7Home.obtenertextoNuesServiparrafo_SEC71().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.Parrafoparrafo_SEC7))})
        })
    }

    clickbotonvermas_SEC7 (){
        seccion7Home.obtenerbotonvermas_SEC71().invoke('removeAttr', 'target').click();
        cy.url('https://nutrapp.com.co/index.php/nuestros-exitos/')
        cy.go('back')
    }

    validarAlivia7() {
        cy.fixture("example").then((data) => {
        seccion7Home.obtenertextoAlivia_SEC71().should('have.text', data.TituloAliv701)
        })
    }

    ValidarAMF7(){
        cy.fixture("example").then((data) => {
        seccion7Home.obtenertextoAMF_SEC71().should('have.text', data.TituloAMF701)
        })
    }

    ValidarAPM7(){
        cy.fixture("example").then((data) => {
       seccion7Home.obtenertextoAPM_SEC71().should('have.text', data.TituloAPM701)
        })// texto quemado
    }

    validarNutrabio(){
        cy.fixture("example").then((data) => {
       seccion7Home.obtenertextoNutrabio_SEC71().should('have.text', data.TituloNutra701)
        })// texto quemado
    }

    validarAliviaparrafo_SEC7() {
        cy.fixture("example").then((data) => {
            seccion7Home.obtenerparrafoAli_SEC71().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoAli_SEC7))})
        })
    }

    validarAmfparrafo_SEC7() {
        cy.fixture("example").then((data) => {
            seccion7Home.obtenerparrafoAMF_SEC71().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoAmf_SEC7))})
        })
    }

    validarApmparrafo_SEC7() {
        cy.fixture("example").then((data) => {
            seccion7Home.obtenerparrafoAPM_SEC71().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoApm_SEC7))})
        })
    }

    validarNutrabioparrafo_SEC7() {
        cy.fixture("example").then((data) => {
            seccion7Home.obtenerparrafoNutrabio_SEC71().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNutrabio_SEC7))})
        })
    }
}
export default new seccion7Acciones(); 