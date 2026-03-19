import {seccionNutraExitoHome} from '../../elementos/elementos';
import { normalice } from '../../support/commands';


class NuesExito_SEC7Acciones{

    validartextoNuesExitO_SEC7_2() {
        cy.fixture("example").then((data) => {
        seccionNutraExitoHome.obtenertextoNuesExitO_SEC7_2().should('have.text', data.TituloNuestsExi) 
        })
    }

    validarparrrafoNuesExito_SEC7_2() {
        cy.fixture("example").then((data) => {
            seccionNutraExitoHome.obtenerparrrafoNuesExito_SEC7_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrrafoNuesExito_SEC7))})
        })
    }

    validartextoAliv_SEC7_2() {
        cy.fixture("example").then((data) => {
        seccionNutraExitoHome.obtenertextoAliv_SEC7_2().should('have.text', data.TituloAliv)
        }) 
    } 

    validarparrrafoAliv_SEC7_2() {
        cy.fixture("example").then((data) => {
            seccionNutraExitoHome.obtenerparrrafoAliv_SEC7_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrrafoAliv_SEC7))})
        })
    }

    validartextoAMF_SEC7_2() {
        cy.fixture("example").then((data) => {
            seccionNutraExitoHome.obtenertextoAMF_SEC7_2().should('have.text', data.TituloAMF)
        })    
    } 

    validarparrrafoAMF_SEC7_2() {
        cy.fixture("example").then((data) => {
            seccionNutraExitoHome.obtenerparrrafoAMF_SEC7_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrrafoAMF_SEC7))})
        })
    }

   validartextoAPM_SEC7_2() {
        cy.fixture("example").then((data) => {
            seccionNutraExitoHome.obtenertextoAPM_SEC7_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.TextoAPM_SEC7))})
        })
    }

    validarparrrafoAPM_SEC7_2() {
        cy.fixture("example").then((data) => {
            seccionNutraExitoHome.obtenerparrrafoAPM_SEC7_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrrafoAPM_SEC7))})
        })
    }

    validartextoNutra_SEC7_2() {
        cy.fixture("example").then((data) => {
        seccionNutraExitoHome.obtenertextoNutra_SEC7_2().should('have.text', data.TituloNutra) 
        })
    } 

    validarparrrafoNutra_SEC7_2() {
        cy.fixture("example").then((data) => {
            seccionNutraExitoHome.obtenerparrrafoNutra_SEC7_2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrrafoNutra_SEC7))})
        })
    }

}
export default new NuesExito_SEC7Acciones(); 