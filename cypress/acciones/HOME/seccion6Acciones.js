import nutraelementos from '../../elementos/elementos';
import { normalice } from '../../support/commands';


class seccion6Acciones{

    ///Validar textos Principales
    validarTransfDigital() {
        nutraelementos.obtenertextotransfodigi().should('have.text', 'Transformación Digital')
    }

    validartransformaciondigitalparrafo(){
        cy.fixture("example").then((data) => {
            nutraelementos.obtenertextotransfoparrafoprinc().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.Parrafotransfodigi))})
        })
    }

    ///Flecha 1 

    clickbotonflecha1_SEC6(){
        nutraelementos.obtenerbotonflecha1_SEC6().click(); 
    }
    
    validarparrafoflecha1_SEC6() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenertextoflecha1_SEC6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.Parrafoflecha1_SEC6))})
         })
    }
    
    ///Flecha 2 

    clickbotonflecha2_SEC6(){
        nutraelementos.obtenerbotonflecha2_SEC6().click();
    }

    validarParrafoflecha2_SEC6() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenertextoflecha2_SEC6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.Parrafoflecha2_SEC6))})
        })
    }

    ///Flecha 3

    clickbotonflecha3_SEC6(){
        nutraelementos.obtenerbotonflecha3_SEC6().click();
    }

    validarParrafoflecha3_SEC6() {

        cy.fixture('example').then((data) => {

            nutraelementos.obtenertextoflecha3_SEC6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.Parrafoflecha3_SEC6))}) 

      // Iterar sobre cada <li> y validar su contenido
      cy.get('div[id="elementor-tab-content-7673"] ol li').each(($el, index) => {
        // Validar que el texto de cada <li> coincida con el texto en el fixture
        cy.wrap($el).should('have.text', data.items[index]);
      });
    });
    }

    ///Flecha 4

    clickbotonflecha4_SEC6(){
        nutraelementos.obtenerbotonflecha4_SEC6().click();
    }

    validarParrafoflecha4_SEC6() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenertextoflecha4_SEC6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.Parrafoflecha4_SEC6))})
        })
    }

    ///Flecha 5

    clickbotonflecha5_SEC6(){
        nutraelementos.obtenerbotonflecha5_SEC6().click();
    }

    validarParrafoflecha5_SEC6() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenertextoflecha5_SEC6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.Parrafoflecha5_SEC6))})
        })
    }

    ///Flecha 6

    clickbotonflecha6_SEC6(){
        nutraelementos.obtenerbotonflecha6_SEC6().click();
    }

    validarParrafoflecha6_SEC6() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenertextoflecha6_SEC6().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.Parrafoflecha6_SEC6))})
        })
    }
}
export default new seccion6Acciones(); 