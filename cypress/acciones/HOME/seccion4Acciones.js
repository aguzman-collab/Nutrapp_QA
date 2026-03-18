import {seccion4Home} from '../../elementos/elementos';
import { normalice } from '../../support/commands';


class seccion4Acciones{

    validarquienessomos(){
        cy.fixture("example").then((data) => {
            seccion4Home.obtenertextosomos().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.PreguntaN1_4))})
        })
    }

    validarnutrappparrafo(){
        cy.fixture("example").then((data) => {
            seccion4Home.obtenertextosomosparrafo().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoN2_4))})
        })
    }

    clickbotonflecha1(){
        seccion4Home.obtenerbotonflecha1().click();
    }

    validarequipoespeci() {
        cy.fixture("example").then((data) => {
            seccion4Home.obtenertextoflecha1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoflechaN1_4))})
        })
    }

    clickbotonflecha2(){
        seccion4Home.obtenerbotonflecha2().click();
    }

     validarExpeyPresi() {
        cy.fixture("example").then((data) => {
            seccion4Home.obtenertextoflecha2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoflechaN2_4))})
        })
    }
    
    clickbotonflecha3(){
        seccion4Home.obtenerbotonflecha3().click(); 
    }

    validarSoluciSegur(){
        cy.fixture("example").then((data) => {
            seccion4Home.obtenertextoflecha3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoflechaN3_4))})
        })
    }
}
export default new seccion4Acciones(); 