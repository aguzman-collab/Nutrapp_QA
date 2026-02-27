import nutraelementos from '../elementos/elementos';
import { normalice } from '../support/commands';


class seccion9Acciones{

    validarNuesUltiNoti_SEC9() {
            nutraelementos.obtenertextoNuesUltiNoti_SEC9().should('have.text', 'Nuestras Últimas Noticias')
        }

    validarparrafoNuesUltiNoti_SEC9() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenerparrafoNuesUltiNoti_SEC9().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.ParrafoNuesUltiNoti_SEC9))})
        })
    }

    validarparrafoimagen1_SEC9() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenerparrafoimagen1_SEC9().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.parrafoimagen1_SEC9))})
        })
    }

    validarparrafoimagen2_SEC9() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenerparrafoimagen2_SEC9().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.parrafoimagen2_SEC9))})
        })
    }

    validarparrafoimagen3_SEC9() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenerparrafoimagen3_SEC9().invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.parrafoimagen3_SEC9))})
        })
    }

    clickbotonimagen1_SEC9(){
        nutraelementos.obtenerbotonimagen1_SEC9().click();
        cy.url('https://nutrapp.com.co/index.php/2024/12/11/la-inteligencia-artificial-en-el-desarrollo-de-nuevos-negocios-digitales-2/')
        cy.go('back')
    }

    clickbotonimagen2_SEC9(){
        nutraelementos.obtenerbotonimagen2_SEC9().click();
        cy.url('https://nutrapp.com.co/index.php/2024/12/11/que-habilidades-requieren-las-empresas-de-sus-trabajadores-en-el-camino-a-la-transformacion-digital/')
        cy.go('back')
    }

    clickbotonimagen3_SEC9(){
        nutraelementos.obtenerbotonimagen3_SEC9().click();
        cy.url('https://nutrapp.com.co/index.php/2024/12/11/las-tecnologias-que-tendran-mas-demanda-este-2023-en-el-desarrollo-de-software-y-aplicaciones-web-2/')
        cy.go('back')
    }

}
export default new seccion9Acciones();  