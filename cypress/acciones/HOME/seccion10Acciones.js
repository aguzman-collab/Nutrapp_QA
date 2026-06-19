import {seccion10Home} from '../../elementos/elementos';
import { normalice } from '../../support/commands';


class seccion10Acciones{
    validarcontacta_SEC10() {
        cy.fixture("example").then((data) => {
            seccion10Home.obtenertextocontacta_SEC10().invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.TituloConta10))}) 
        })
    }

    validarparrafocontac_SEC10() {
        cy.fixture("example").then((data) => {
            seccion10Home.obtenerparrafocontacta_SEC10().invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.parrafoContactanos_SEC10))})
        })
    }

    validarEscribirnombres_SEC10 = () => {
        seccion10Home.obtenerEscribirnombres_SEC10().type(Cypress.env('nombre')); 
    }

    validarEscribirapellidos_SEC10 = () => {
        seccion10Home.obtenerEscribirapellidos_SEC10().type(Cypress.env('Apellidos')); 
    }

    validarEscribiremail_SEC10 = () => {
        seccion10Home.obtenerEscribiremail_SEC10().type(Cypress.env('Email'), { force: true }); 
    }
    
    validarEscribirtelefono_SEC10 = () => {
        seccion10Home.obtenerEscribirtelefono_SEC10().type(Cypress.env('Telefono'));
    }

    validarEscribiraqui_SEC10 = () =>{
        seccion10Home.obtenerEscribiraqui_SEC10().type(Cypress.env('Escribiraqui')); 
    }

    clickbotonacepto_SEC10 (){
        seccion10Home.obtenerbotonacepto_SEC10().click();
    }

    clickbotonpoliticas_SEC10 (){
        seccion10Home.obtenerbotonpoliticas_SEC10().click();
        cy.url('https://s3-amf.s3.us-east-1.amazonaws.com/Terminos+y+condiciones/POLÍTICA+DE+TRATAMIENTO+DE+DATOS+PERSONALES+NUTRAPP+INNOVATIONS+SAS+2025.pdf')
    }
    

    clickbotonenviar_SEC10 (){
        seccion10Home.obtenerbotonenviar_SEC10().click(); 
    }

}
export default new seccion10Acciones();  