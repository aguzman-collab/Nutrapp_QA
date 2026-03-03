import nutraelementos from '../../elementos/elementos';
import { normalice } from '../../support/commands';

class seccion4blog{
    validartextotecno_SEC4() {
            cy.fixture("example").then((data) => {
                nutraelementos.obtenertextotecno_SEC4().invoke('text').then(text =>
                    {expect(normalice(text)).to.contain(normalice(data.textotecno_SEC4))})
            })
        }
    
        validarparrafosDesaSoft_SEC4() {
            cy.fixture('example').then((data) => {
                    // Iterar sobre cada <li> y validar su contenido
                cy.get('div[data-id="cbeb93c"] p').each(($el, index) => {
                        // Validar que el texto de cada <li> coincida con el texto en el fixture
                    cy.wrap($el).invoke('text').then(text => 
                        {expect(normalice(text)).to.contain(normalice(data.items7[index]))}) 
                });
            });
        } 

        validarparrafos1_SEC4() {
            cy.fixture("example").then((data) => {
                nutraelementos.obtenerparrafos1_SEC4().invoke('text').then(text =>
                    {expect(normalice(text)).to.contain(normalice(data.Parrafos1_SEC4))})
            })
        }

        validarparrafos2_SEC4() {
            cy.fixture("example").then((data) => {
                nutraelementos.obtenerparrafos2_SEC4().invoke('text').then(text =>
                    {expect(normalice(text)).to.contain(normalice(data.Parrafos2_SEC4))})
            })
        }

        validarparrafos3_SEC4() {
            cy.fixture("example").then((data) => {
                nutraelementos.obtenerparrafos3_SEC4().invoke('text').then(text =>
                    {expect(normalice(text)).to.contain(normalice(data.Parrafos3_SEC4))})
            })
        }

        validarparrafos4_SEC4() {
            cy.fixture("example").then((data) => {
                nutraelementos.obtenerparrafos4_SEC4().invoke('text').then(text =>
                    {expect(normalice(text)).to.contain(normalice(data.Parrafos4_SEC4))})
            })
        }

        validarparrafos5_SEC4() {
            cy.fixture("example").then((data) => {
                nutraelementos.obtenerparrafos5_SEC4().invoke('text').then(text =>
                    {expect(normalice(text)).to.contain(normalice(data.Parrafos5_SEC4))})
            })
        }

        validarparrafos6_SEC4() {
            cy.fixture("example").then((data) => {
                nutraelementos.obtenerparrafos6_SEC4().invoke('text').then(text =>
                    {expect(normalice(text)).to.contain(normalice(data.Parrafos6_SEC4))})
            })
        }
}
export default new seccion4blog();  