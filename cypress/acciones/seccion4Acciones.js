import nutraelementos from '../elementos/elementos';
import { normalice } from '../support/commands';


class seccion4Acciones{

    validarquienessomos(){
        cy.fixture("example").then((data) => {
            nutraelementos.obtenertextosomos().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.PreguntaN1_4))})
        })
    }

    validarnutrappparrafo(){
        cy.fixture("example").then((data) => {
            nutraelementos.obtenertextosomosparrafo().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoN2_4))})
        })
    }

    clickbotonflecha1(){
        nutraelementos.obtenerbotonflecha1().click();
    }

    validarequipoespeci() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenertextoflecha1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoflechaN1_4))})
        })
    }

    clickbotonflecha2(){
        nutraelementos.obtenerbotonflecha2().click();
    }

     validarExpeyPresi() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenertextoflecha2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoflechaN2_4))})
        })
    }
    
    clickbotonflecha3(){
        nutraelementos.obtenerbotonflecha3().click(); 
    }

    validarSoluciSegur(){
        cy.fixture("example").then((data) => {
            nutraelementos.obtenertextoflecha3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoflechaN3_4))})
        })
    }
}
export default new seccion4Acciones(); 