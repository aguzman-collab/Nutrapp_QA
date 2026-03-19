import {BlogSEC1} from '../../elementos/elementos';
import { normalice } from '../../support/commands';

class seccion1blog{
    validarblog_SEC1() {
        cy.fixture("example").then((data) => {
        BlogSEC1.obtenertextoblog_SEC1().should('have.text', data.TituloBlog)
        }) 
    }

    validarparrafoblog_SEC1() {
        cy.fixture("example").then((data) => {
            BlogSEC1.obtenerparrafoblog_SEC1().invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.Parrafoblog_SEC1))})
        })
    }
}
export default new seccion1blog();  