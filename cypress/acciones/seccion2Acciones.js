import nutraelementos from '../elementos/elementos';
import { normalice } from '../support/commands';

class seccion2Acciones{
    ///Validar textos 
    
    validarnuestrocompromiso(){
        cy.fixture("example").then((data) => {
            nutraelementos.obtenertextocompromiso().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.tituloPrincipal));});
        });
    }

    validarsitiosweb(){
        cy.fixture("example").then((data) => {
            nutraelementos.obtenertextositiosweb().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoPrincipal));});
        });
    }

    validarcuadroN1(){
        cy.fixture("example").then((data) =>{
            nutraelementos.obtenertextocuadro1().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.Parrafo1));});
        })
    }

    validarcuadroN2(){
        cy.fixture("example").then((data) => {
            nutraelementos.obtenertextocuadro2().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.Parrafo2));});
        });
    }


    validarcuadroN3(){
        cy.fixture("example").then((data) => {
            nutraelementos.obtenertextocuadro3().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.Parrafo3));});
        });
    }

    clickbotonconocemas(){
        nutraelementos.obtenerbotonconocemas().click();
        cy.url('href="#servicios"')
    }

}
export default new seccion2Acciones(); 