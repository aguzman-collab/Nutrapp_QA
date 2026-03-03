import nutraelementos from '../../elementos/elementos';
import { normalice } from '../../support/commands';


class seccion10Acciones{
    validarcontacta_SEC10() {
        nutraelementos.obtenertextocontacta_SEC10().should('have.text', 'Contáctanos')
    }

    validarparrafocontac_SEC10() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenerparrafocontacta_SEC10().invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.parrafoContactanos_SEC10))})
        })
    }

    validarEscribirnombres_SEC10 = () => {
        nutraelementos.obtenerEscribirnombres_SEC10().type('Alixon MejorQA');
    }

    validarEscribirapellidos_SEC10 = () => {
        nutraelementos.obtenerEscribirapellidos_SEC10().type('Guzman Garzon');
    }

    validarEscribiremail_SEC10 = () => {
        nutraelementos.obtenerEscribiremail_SEC10().type('ali@gmail.com');
    }
    
    validarEscribirtelefono_SEC10 = () => {
        nutraelementos.obtenerEscribirtelefono_SEC10().type('3102456987')
    }

    validarEscribiraqui_SEC10 = () =>{
        nutraelementos.obtenerEscribiraqui_SEC10().type('Prueba')
    }

    clickbotonacepto_SEC10 (){
        nutraelementos.obtenerbotonacepto_SEC10().click();
    }

    

    clickbotonenviar_SEC10 (){
        nutraelementos.obtenerbotonenviar_SEC10().click(); 
    }

}
export default new seccion10Acciones();  