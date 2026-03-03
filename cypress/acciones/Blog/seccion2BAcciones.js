import nutraelementos from '../../elementos/elementos';
import { normalice } from '../../support/commands';

class seccion2blog{
    clickbotonlink1 (){
        nutraelementos.obtenerbotonlink1_SEC2().eq(0).click();
        cy.url('https://nutrapp.com.co/index.php/2024/12/11/la-inteligencia-artificial-en-el-desarrollo-de-nuevos-negocios-digitales-2/')
    }

    validartextolainteli_SEC2 (){
        nutraelementos.obtenertextolainteli_SEC2
    }

    validartextolainteli_SEC2() {
        cy.fixture("example").then((data) => {
            nutraelementos.obtenertextolainteli_SEC2().invoke('text').then(text =>
                {expect(normalice(text)).to.contain(normalice(data.textolainteli_SEC2))})
        })
    }


    validarparrafolainteli_SEC2() {
        cy.fixture('example').then((data) => {
                // Iterar sobre cada <li> y validar su contenido
            cy.get('div[data-id="6cae12c"] p').each(($el, index) => {
                    // Validar que el texto de cada <li> coincida con el texto en el fixture
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.items2[index]))}) 
            });
        });
    }


    validarparrafolaIA_SEC2() {
        cy.fixture('example').then((data) => {
            // Iterar sobre cada <li> y validar su contenido
            cy.get('div[data-id="cc43154"] ul li').each(($el, index) => {
                // Validar que el texto de cada <li> coincida con el texto en el fixture
                cy.wrap($el).invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.items3[index]))}) 
            });
        });
    }

     ///Validacion link 
            ///Publicaciones Recientes 
            clickbotonlink1_SEC2 (){
                nutraelementos.obtenerbotonlink1_SEC2()
                cy.url('https://nutrapp.com.co/index.php/2024/12/11/las-tecnologias-que-tendran-mas-demanda-este-2023-en-el-desarrollo-de-software-y-aplicaciones-web-2/')
            }
    
            volverPaginaAnterior = () => {
            cy.go('back')
            }
    
            clickbotonlink2_SEC2 (){
                nutraelementos.obtenerbotonlink2_SEC2().eq(1).click();
                cy.url('https://nutrapp.com.co/index.php/2024/12/11/que-habilidades-requieren-las-empresas-de-sus-trabajadores-en-el-camino-a-la-transformacion-digital/')
            }
    
            clickbotonlink3_SEC2 (){
                nutraelementos.obtenerbotonlink3_SEC2()
                cy.url('https://nutrapp.com.co/index.php/2024/12/11/la-inteligencia-artificial-en-el-desarrollo-de-nuevos-negocios-digitales-2/')
            }
    
    
    
        ///Validacion link 
            ///NUESTROS SERVICIOS
            clickbotonlink1LaaS_SEC2 (){
                nutraelementos.obtenerbotonlink1LaaS_SEC2()
                cy.url('https://nutrapp.com.co/index.php/nuestros-servicios/#laas')
            }
    
            clickbotonlink2OpeServi_SEC2 (){
                nutraelementos.obtenerbotonlink2OpeServi_SEC2()
                cy.url('https://nutrapp.com.co/index.php/nuestros-servicios/#operacion-servicios')
            }
    
            clickbotonlink3Saas_SEC2 (){
                nutraelementos.obtenerbotonlink3Saas_SEC2()
                cy.url('https://nutrapp.com.co/index.php/nuestros-servicios/#saas')
            }
    
            clickbotonlink4Consult_SEC2 (){
                nutraelementos.obtenerbotonlink4Consult_SEC2()
                cy.url('https://nutrapp.com.co/index.php/nuestros-servicios/#consultoria')
            }
    
    
    
        ///Validacion link 
            ///Imagenes
            clickbotonlink1imagenes_SEC2 (){
                nutraelementos.obtenerbotonlink1imagen_SEC2()
                cy.url('https://nutrapp.com.co/index.php/2024/12/11/las-tecnologias-que-tendran-mas-demanda-este-2023-en-el-desarrollo-de-software-y-aplicaciones-web-2/')
            }  
    
            clickbotonlink2imagenes_SEC2 (){
                nutraelementos.obtenerbotonlink2imagen_SEC2()
                cy.url('https://nutrapp.com.co/index.php/2024/12/11/que-habilidades-requieren-las-empresas-de-sus-trabajadores-en-el-camino-a-la-transformacion-digital/')
            } 


}
export default new seccion2blog(); 