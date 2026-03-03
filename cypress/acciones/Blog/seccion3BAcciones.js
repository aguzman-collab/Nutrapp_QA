import nutraelementos from '../../elementos/elementos';
import { normalice } from '../../support/commands';

class seccion3blog{

    validartextohabili_SEC3() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenertextohabili_SEC3().invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.textohabili_SEC3))})
        })
    }

    validarparrafolasempre_SEC3() {
        cy.fixture('example').then((data) => {
                // Iterar sobre cada <li> y validar su contenido
            cy.get('div[data-id="6cae12c"] p').each(($el, index) => {
                    // Validar que el texto de cada <li> coincida con el texto en el fixture
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.items4[index]))}) 
            });
        });
    }

    validarparrafoademas_SEC3() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenerparrafoademas_SEC3().invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.Parrafoademas_SEC3))})
        })
    }

    validarparrafo5habili_SEC3() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenerparrafo5habili_SEC3().invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.Parrafo5habili_SEC3))})
        })
    }

    validarparrafo1_5habili_SEC3() {
        cy.fixture('example').then((data) => {
                // Iterar sobre cada <li> y validar su contenido
            cy.get('div[data-id="4df74ce"] li ol li').each(($el, index) => {
                    // Validar que el texto de cada <li> coincida con el texto en el fixture
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.items5[index]))}) 
            });
        });
    }
    
    ///2
    validarparrafo2_5habili_SEC3() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenerparrafo2_5habili_SEC3().invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.Parrafo2_5habili_SEC3))})
        })
    }

    validarparrafo21_5habili_SEC3() {
        cy.fixture('example').then((data) => {
                // Iterar sobre cada <li> y validar su contenido
            cy.get('div[data-id="79a152c"] ol li').each(($el, index) => {
                    // Validar que el texto de cada <li> coincida con el texto en el fixture
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.items6[index]))}) 
            });
        });
    }
}
export default new seccion3blog();  