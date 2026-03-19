import {BlogSEC4} from '../../elementos/elementos';
import { normalice } from '../../support/commands';

class seccion4blog{
    validartextotecno_SEC4() {
            cy.fixture("example").then((data) => {
                BlogSEC4.obtenertextotecno_SEC4().invoke('text').then(text =>
                    {expect(normalice(text)).to.contain(normalice(data.textotecno_SEC4))})
            })
        }
    
        validarparrafosDesaSoft_SEC4() {
            cy.fixture('example').then((data) => {
                BlogSEC4.obtenerparrafosDesaSoft_SEC4().each(($el, index) => {
                    cy.wrap($el).invoke('text').then(text => 
                        {expect(normalice(text)).to.contain(normalice(data.items7[index]))}) 
                });
            });
        } 


        validarparrafos1_SEC4() {
            cy.fixture("example").then((data) => {
                BlogSEC4.obtenerparrafos_SEC4().eq(1).invoke('text').then(text =>
                    {expect(normalice(text)).to.contain(normalice(data.Parrafos1_SEC4))})
            })
        }

        validarparrafos2_SEC4() {
            cy.fixture("example").then((data) => {
                BlogSEC4.obtenerparrafos_SEC4().eq(2).invoke('text').then(text =>
                    {expect(normalice(text)).to.contain(normalice(data.Parrafos2_SEC4))})
            })
        }

        validarparrafos3_SEC4() {
            cy.fixture("example").then((data) => {
                BlogSEC4.obtenerparrafos_SEC4().eq(3).invoke('text').then(text =>
                    {expect(normalice(text)).to.contain(normalice(data.Parrafos3_SEC4))})
            })
        }

        validarparrafos4_SEC4() {
            cy.fixture("example").then((data) => {
                BlogSEC4.obtenerparrafos_SEC4().eq(4).invoke('text').then(text =>
                    {expect(normalice(text)).to.contain(normalice(data.Parrafos4_SEC4))})
            })
        }

        validarparrafos5_SEC4() {
            cy.fixture("example").then((data) => {
                BlogSEC4.obtenerparrafos_SEC4().eq(5).invoke('text').then(text =>
                    {expect(normalice(text)).to.contain(normalice(data.Parrafos5_SEC4))})
            })
        }

        validarparrafos6_SEC4() {
            cy.fixture("example").then((data) => {
                BlogSEC4.obtenerparrafos_SEC4().eq(6).invoke('text').then(text =>
                    {expect(normalice(text)).to.contain(normalice(data.Parrafos6_SEC4))})
            })
        }
}
export default new seccion4blog();  