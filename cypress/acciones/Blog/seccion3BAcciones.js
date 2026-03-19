import {BlogSEC3} from '../../elementos/elementos';
import { normalice } from '../../support/commands';

class seccion3blog{

    validartextohabili_SEC3() {
        cy.fixture("example").then((data) => {
            BlogSEC3.obtenertextohabili_SEC3().invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.textohabili_SEC3))})
        })
    }

    validarparrafolasempre_SEC3() {
        cy.fixture('example').then((data) => {
            BlogSEC3.obtenerparrafolasempre_SEC3().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.items4[index]))}) 
            });
        });
    }

    validarparrafoademas_SEC3() {
        cy.fixture("example").then((data) => {
            BlogSEC3.obtenerparrafoademas_SEC3().invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.Parrafoademas_SEC3))})
        })
    }

    validarparrafo5habili_SEC3() {
        cy.fixture("example").then((data) => {
            BlogSEC3.obtenerparrafo5habili_SEC3().invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.Parrafo5habili_SEC3))})
        })
    }

    validarparrafo1_5habili_SEC3() {
        cy.fixture('example').then((data) => {
            BlogSEC3.obtenerparrafo1_5habili_SEC3().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.items5[index]))}) 
            });
        });
    }
    
    ///2
    validarparrafo2_5habili_SEC3() {
        cy.fixture("example").then((data) => {
            BlogSEC3.obtenerparrafo2_5habili_SEC3().invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.Parrafo2_5habili_SEC3))})
        })
    }

    validarparrafo21_5habili_SEC3() {
        cy.fixture('example').then((data) => {
            BlogSEC3.obtenerparrafo21_5habili_SEC3().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.items6[index]))}) 
            });
        });
    }
}
export default new seccion3blog();  