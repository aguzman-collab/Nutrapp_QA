import {BlogSEC2} from '../../elementos/elementos';
import { normalice } from '../../support/commands';

class seccion2blog{
    
    validartextolainteli_SEC2 (){
        BlogSEC2.obtenertextolainteli_SEC2
    }


    validarparrafolainteli_SEC2() {
        cy.fixture('example').then((data) => {
            BlogSEC2.obtenerparrafolainteli_SEC2().each(($el, index) => {
                cy.wrap($el).invoke('text').then(text => 
                    {expect(normalice(text)).to.contain(normalice(data.items2[index]))}) 
            });
        });
    }


    validarparrafolaIA_SEC2() {
        cy.fixture('example').then((data) => {
            BlogSEC2.obtenerparrafolaIA_SEC2().each(($el, index) => { 
                cy.wrap($el).invoke('text').then(text => 
                {expect(normalice(text)).to.contain(normalice(data.items3[index]))}) 
            });
        });
    }

     ///Validacion link 
            ///Publicaciones Recientes 
            clickbotonlink1_SEC2 (){
                BlogSEC2.obtenerbotonlink1_SEC2()
                cy.url('https://nutrapp.com.co/index.php/2024/12/11/las-tecnologias-que-tendran-mas-demanda-este-2023-en-el-desarrollo-de-software-y-aplicaciones-web-2/')
            }
    
            volverPaginaAnterior = () => {
            cy.go('back')
            }
    
            clickbotonlink2_SEC2 (){
                BlogSEC2.obtenerbotonlink2_SEC2().eq(1).click();
                cy.url('https://nutrapp.com.co/index.php/2024/12/11/que-habilidades-requieren-las-empresas-de-sus-trabajadores-en-el-camino-a-la-transformacion-digital/')
            }
    
            clickbotonlink3_SEC2 (){
                BlogSEC2.obtenerbotonlink3_SEC2()
                cy.url('https://nutrapp.com.co/index.php/2024/12/11/la-inteligencia-artificial-en-el-desarrollo-de-nuevos-negocios-digitales-2/')
            }
    
    
    
        ///Validacion link 
            ///NUESTROS SERVICIOS
            clickbotonlink1LaaS_SEC2 (){
                BlogSEC2.obtenerbotonlink1LaaS_SEC2()
                cy.url('https://nutrapp.com.co/index.php/nuestros-servicios/#laas')
            }
    
            clickbotonlink2OpeServi_SEC2 (){
                BlogSEC2.obtenerbotonlink2OpeServi_SEC2()
                cy.url('https://nutrapp.com.co/index.php/nuestros-servicios/#operacion-servicios')
            }
    
            clickbotonlink3Saas_SEC2 (){
                BlogSEC2.obtenerbotonlink3Saas_SEC2()
                cy.url('https://nutrapp.com.co/index.php/nuestros-servicios/#saas')
            }
    
            clickbotonlink4Consult_SEC2 (){
                BlogSEC2.obtenerbotonlink4Consult_SEC2()
                cy.url('https://nutrapp.com.co/index.php/nuestros-servicios/#consultoria')
            }
    
    
    
        ///Validacion link 
            ///Imagenes
            clickbotonlink1imagenes_SEC2 (){
                BlogSEC2.obtenerbotonlink1imagen_SEC2()
                cy.url('https://nutrapp.com.co/index.php/2024/12/11/las-tecnologias-que-tendran-mas-demanda-este-2023-en-el-desarrollo-de-software-y-aplicaciones-web-2/')
            }  
    
            clickbotonlink2imagenes_SEC2 (){
                BlogSEC2.obtenerbotonlink2imagen_SEC2()
                cy.url('https://nutrapp.com.co/index.php/2024/12/11/que-habilidades-requieren-las-empresas-de-sus-trabajadores-en-el-camino-a-la-transformacion-digital/')
            } 


}
export default new seccion2blog(); 