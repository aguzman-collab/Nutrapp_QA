import nutraelementos from '../../elementos/elementos';

class seccion4linkblog{

    ///Validacion link 
        ///Publicaciones Recientes 
        clickbotonlink1_SEC4 (){
            nutraelementos.obtenerbotonlink1_SEC4()
            cy.url('https://nutrapp.com.co/index.php/2024/12/11/las-tecnologias-que-tendran-mas-demanda-este-2023-en-el-desarrollo-de-software-y-aplicaciones-web-2/')
        }

        volverPaginaAnterior = () => {
        cy.go('back')
        }

        clickbotonlink2_SEC4 (){
            nutraelementos.obtenerbotonlink2_SEC4().eq(1).click();
            cy.url('https://nutrapp.com.co/index.php/2024/12/11/que-habilidades-requieren-las-empresas-de-sus-trabajadores-en-el-camino-a-la-transformacion-digital/')
        }

        volverPaginaAnterior = () => {
        cy.go('back')
        }

        clickbotonlink3_SEC4 (){
            nutraelementos.obtenerbotonlink3_SEC4()
            cy.url('https://nutrapp.com.co/index.php/2024/12/11/la-inteligencia-artificial-en-el-desarrollo-de-nuevos-negocios-digitales-2/')
        }



    ///Validacion link 
        ///NUESTROS SERVICIOS
        clickbotonlink1LaaS_SEC4 (){
            nutraelementos.obtenerbotonlink1LaaS_SEC4()
            cy.url('https://nutrapp.com.co/index.php/nuestros-servicios/#laas')
        }

        clickbotonlink2OpeServi_SEC4 (){
            nutraelementos.obtenerbotonlink2OpeServi_SEC4()
            cy.url('https://nutrapp.com.co/index.php/nuestros-servicios/#operacion-servicios')
        }

        clickbotonlink3Saas_SEC4 (){
            nutraelementos.obtenerbotonlink3Saas_SEC4()
            cy.url('https://nutrapp.com.co/index.php/nuestros-servicios/#saas')
        }

        clickbotonlink4Consult_SEC4 (){
            nutraelementos.obtenerbotonlink4Consult_SEC4()
            cy.url('https://nutrapp.com.co/index.php/nuestros-servicios/#consultoria')
        }



    ///Validacion link 
        ///Imagenes
        clickbotonlink1imagenes_SEC4 (){
            nutraelementos.obtenerbotonlink1imagen_SEC4()
            cy.url('https://nutrapp.com.co/index.php/2024/12/11/las-tecnologias-que-tendran-mas-demanda-este-2023-en-el-desarrollo-de-software-y-aplicaciones-web-2/')
        }  

        clickbotonlink2imagenes_SEC4 (){
            nutraelementos.obtenerbotonlink2imagen_SEC4()
            cy.url('https://nutrapp.com.co/index.php/2024/12/11/que-habilidades-requieren-las-empresas-de-sus-trabajadores-en-el-camino-a-la-transformacion-digital/')
        } 
}
export default new seccion4linkblog()