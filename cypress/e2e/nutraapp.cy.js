import headernutraAcciones from '../acciones/HOME/headeracciones';
import footernutraAcciones from '../acciones/HOME/footerAcciones';
import seccion2Acciones from '../acciones/HOME/seccion2Acciones';
import seccion3Acciones from '../acciones/HOME/seccion3Acciones';
import seccion4Acciones from '../acciones/HOME/seccion4Acciones';
import seccion5Acciones from '../acciones/HOME/seccion5Acciones';
import seccion6Acciones from '../acciones/HOME/seccion6Acciones';
import seccion7Acciones from '../acciones/HOME/seccion7Acciones';
import seccion8Acciones from '../acciones/HOME/seccion8Acciones';
import seccion9Acciones from '../acciones/HOME/seccion9Acciones';
import seccion10Acciones from '../acciones/HOME/seccion10Acciones';
import seccion1NueAcciones from '../acciones/NuestrServicios/seccion1Acciones'; 
import seccion1blog from '../acciones/Blog/seccion1BAcciones'; 
import seccion2blog from '../acciones/Blog/seccion2BAcciones'; 
import seccionlinkAcciones from '../acciones/Blog/seccion2BlinkAcciones';
import seccion3BAcciones from '../acciones/Blog/seccion3BAcciones';
import seccion3BlinkAcciones from '../acciones/Blog/seccion3BlinkAcciones';
import seccion4BAcciones from '../acciones/Blog/seccion4BAcciones';
import seccion4BlinkAcciones from '../acciones/Blog/seccion4BlinkAcciones'; 
import nuestrosexitosSEC7Acciones from '../acciones/HOME/nuestrosexitosSEC7Acciones';

beforeEach(() =>{
    cy.viewport(1200,800)
})
require('cypress-xpath');

describe('NutraApp Automatizaciones',() => { ///Contenedor proyecto total 

    context('Automatizaciones - Sección 1', () => { ///Contenedor secciones 
        it("SECCIÓN 1 - HEADER", () =>{
        cy.visit('https://nutrapp.com.co/')
        headernutraAcciones.clickbotoncerrar();
        headernutraAcciones.clickbotonservicios();
        headernutraAcciones.clickbotonblog();
        headernutraAcciones.clickbotoncontactanos();
        headernutraAcciones.clickbotoncerrar();
        });

        it("SECCIÓN 1 - FOOTER", () =>{
        cy.visit('https://nutrapp.com.co/')
        headernutraAcciones.clickbotoncerrar();
        footernutraAcciones.clickbotonserviciosfo ();
        footernutraAcciones.clickbotonblogfo ();
        footernutraAcciones.clickbotoncontactanosfo ();
        headernutraAcciones.clickbotoncerrar();
        footernutraAcciones.validarnumero (); 
        footernutraAcciones.validarcorreo ();
        footernutraAcciones.clickbotontyc (); 
        footernutraAcciones.clickbotonpoliticas (); 
        });
    });


    context('Automatizaciones - Sección 2', () => {

        it("SECCIÓN 2 - Nuestro compromiso", () =>{
        cy.visit('https://nutrapp.com.co/')
        headernutraAcciones.clickbotoncerrar();
        seccion2Acciones.validarnuestrocompromiso(); 
        seccion2Acciones.validarsitiosweb(); 
        seccion2Acciones.validarcuadroN1(); 
        seccion2Acciones.validarcuadroN2(); 
        seccion2Acciones.validarcuadroN3(); 
        seccion2Acciones.clickbotonconocemas(); 
        });
    });
        
        
    context('Automatizaciones - Sección 3', () => {

        it("SECCIÓN 3 - Nuestros servicios", () =>{
        cy.visit('https://nutrapp.com.co/')
        headernutraAcciones.clickbotoncerrar();
        seccion3Acciones.validarNuestrosServicios(); 
        seccion3Acciones.validarDesarrolloWeb();
        });
    });


    context('Automatizaciones - Sección 4', () => {

        it("SECCIÓN 4 - ¿Quiénes somos?", () =>{
        cy.visit('https://nutrapp.com.co/')
        headernutraAcciones.clickbotoncerrar();
        seccion4Acciones.validarquienessomos(); 
        seccion4Acciones.validarnutrappparrafo();
        seccion4Acciones.clickbotonflecha1(); 
        seccion4Acciones.validarequipoespeci(); 
        seccion4Acciones.clickbotonflecha2();
        seccion4Acciones.validarExpeyPresi();
        seccion4Acciones.clickbotonflecha3(); 
        seccion4Acciones.validarSoluciSegur();
        });
    });


    context('Automatizaciones - Sección 5', () => {

        it("SECCIÓN 5 - Equipo", () =>{
        cy.visit('https://nutrapp.com.co/') 
        headernutraAcciones.clickbotoncerrar();
        seccion5Acciones.clickflechacarrusel();
        });
    });


    context('Automatizaciones - Sección 6', () => {

        it("SECCIÓN 6 - Transformacion Digital", () =>{
        cy.visit('https://nutrapp.com.co/') 
        headernutraAcciones.clickbotoncerrar();
        seccion6Acciones.validarTransfDigital(); 
        seccion6Acciones.validartransformaciondigitalparrafo(); 
        seccion6Acciones.clickbotonflecha1_SEC6(); 
        seccion6Acciones.validarparrafoflecha1_SEC6(); 
        seccion6Acciones.clickbotonflecha2_SEC6(); 
        seccion6Acciones.validarParrafoflecha2_SEC6(); 
        seccion6Acciones.clickbotonflecha3_SEC6();
        seccion6Acciones.validarParrafoflecha3_SEC6(); 
        seccion6Acciones.clickbotonflecha4_SEC6(); 
        seccion6Acciones.validarParrafoflecha4_SEC6();
        seccion6Acciones.clickbotonflecha5_SEC6(); 
        seccion6Acciones.validarParrafoflecha5_SEC6();
        seccion6Acciones.clickbotonflecha6_SEC6(); 
        seccion6Acciones.validarParrafoflecha6_SEC6();
        });
    });


    context('Automatizaciones - Sección 7', () => {

        it("SECCIÓN 7 - Transformacion Digital", () =>{
        cy.visit('https://nutrapp.com.co/') 
        headernutraAcciones.clickbotoncerrar();
        seccion7Acciones.validarNuesExit7(); 
        seccion7Acciones.validarNuesServiparrafo_SEC7();
        seccion7Acciones.clickbotonvermas_SEC7();
        seccion7Acciones.validarAlivia7();
        seccion7Acciones.ValidarAMF7(); 
        seccion7Acciones.ValidarAPM7();
        seccion7Acciones.validarNutrabio(); 
        seccion7Acciones.validarAliviaparrafo_SEC7();
        seccion7Acciones.validarAmfparrafo_SEC7();
        seccion7Acciones.validarAmfparrafo_SEC7(); 
        seccion7Acciones.validarNutrabioparrafo_SEC7(); 
        });
    });

    context('Automatizaciones - Nuestros Exitos_SEC7', () => {

        it.only ("SECCIÓN 7 - Nuestros Exitos_SEC7", () =>{
        cy.visit('https://nutrapp.com.co/index.php/nuestros-exitos/') 
        nuestrosexitosSEC7Acciones.validartextoNuesExitO_SEC7();
        nuestrosexitosSEC7Acciones.validarparrrafoNuesExito_SEC7(); 
        nuestrosexitosSEC7Acciones.validartextoAliv_SEC7();
        nuestrosexitosSEC7Acciones.validarparrrafoAliv_SEC7();
        nuestrosexitosSEC7Acciones.validartextoAMF_SEC7();
        nuestrosexitosSEC7Acciones.validarparrrafoAMF_SEC7();
        nuestrosexitosSEC7Acciones.validartextoAPM_SEC7();
        nuestrosexitosSEC7Acciones.validarparrrafoAPM_SEC7();
        nuestrosexitosSEC7Acciones.validartextoNutra_SEC7();
        nuestrosexitosSEC7Acciones.validarparrrafoNutra_SEC7();
        }); 
    }); 


    context('Automatizaciones - Sección 8', () => {

        it("SECCIÓN 8 - Nuestros clientes", () =>{
        cy.visit('https://nutrapp.com.co/') 
        headernutraAcciones.clickbotoncerrar();
        seccion8Acciones.validarNuesClie_SEC8();
        seccion8Acciones.validarPreguntatitulo_SEC8(); 
        seccion8Acciones.validarParrafopregunta_SEC8();
        });
    });


    context('Automatizaciones - Sección 9', () => {

        it("SECCIÓN 9 - Nuestras Últimas Noticias", () =>{
        cy.visit('https://nutrapp.com.co/') 
        headernutraAcciones.clickbotoncerrar();
        seccion9Acciones.validarNuesUltiNoti_SEC9();
        seccion9Acciones.validarparrafoNuesUltiNoti_SEC9();
        seccion9Acciones.validarparrafoimagen1_SEC9();
        seccion9Acciones.validarparrafoimagen2_SEC9();
        seccion9Acciones.validarparrafoimagen3_SEC9();
        seccion9Acciones.clickbotonimagen1_SEC9();
        headernutraAcciones.clickbotoncerrar();
        seccion9Acciones.clickbotonimagen2_SEC9(); 
        headernutraAcciones.clickbotoncerrar();
        seccion9Acciones.clickbotonimagen3_SEC9();
        });
    });


    context('Automatizaciones - Sección 10', () => {

        it("SECCIÓN 10 - Contáctanos", () =>{
        cy.visit('https://nutrapp.com.co/') 
        headernutraAcciones.clickbotoncerrar();
        seccion10Acciones.validarcontacta_SEC10(); 
        seccion10Acciones.validarparrafocontac_SEC10();
        seccion10Acciones.validarEscribirnombres_SEC10();
        seccion10Acciones.validarEscribirapellidos_SEC10();
        seccion10Acciones.validarEscribiremail_SEC10();
        seccion10Acciones.validarEscribirtelefono_SEC10();
        seccion10Acciones.validarEscribiraqui_SEC10(); 
        seccion10Acciones.clickbotonacepto_SEC10(); 
        seccion10Acciones.clickbotonpoliticas_SEC10(); 
        seccion10Acciones.clickbotonenviar_SEC10(); 
        });
    });


    context('Automatizaciones - Sección 1 - NueServi', () => {

        it("SECCIÓN 1 - Nuestros servicios", () =>{
        cy.visit('https://nutrapp.com.co/index.php/nuestros-servicios/') 
        seccion1NueAcciones.validarNueServi_SEC1(); 
        seccion1NueAcciones.validarparrafoNueServi_SEC1();
        });
    });


    context('Automatizaciones - Sección 1 - BLOG', () => {

        it("SECCIÓN 1 - BLOG", () =>{
        cy.visit('https://nutrapp.com.co/index.php/blog/') 
        seccion1blog.validarblog_SEC1(); 
        seccion1blog.validarparrafoblog_SEC1();
        seccion1blog.validarparrafoblog_SEC1();
        });
    });


    context('Automatizaciones - Sección 2 - BLOG', () => {

        it("SECCIÓN 2 - BLOG", () =>{
        cy.visit('https://nutrapp.com.co/index.php/blog/') 
        seccion2blog.clickbotonlink1 ();
        seccion2blog.validartextolainteli_SEC2(); 
        seccion2blog.validarparrafolainteli_SEC2(); 
        seccion2blog.validarparrafolaIA_SEC2();
        
        });
    });

    context('Automatizaciones - Sección 2_1 - BLOG', () => {

        it("SECCIÓNlinks2_1- BLOG_LINK", () =>{
        cy.visit('https://nutrapp.com.co/index.php/2024/12/11/la-inteligencia-artificial-en-el-desarrollo-de-nuevos-negocios-digitales-2/') 
        seccionlinkAcciones.clickbotonlink1_SEC2();
        seccionlinkAcciones.volverPaginaAnterior();
        seccionlinkAcciones.clickbotonlink2_SEC2(); 
        seccionlinkAcciones.volverPaginaAnterior();
        seccionlinkAcciones.clickbotonlink3_SEC2();

        ///Validacion link 
        ///NUESTROS SERVICIOS
        cy.visit('https://nutrapp.com.co/index.php/2024/12/11/la-inteligencia-artificial-en-el-desarrollo-de-nuevos-negocios-digitales-2/') 
        seccionlinkAcciones.clickbotonlink1LaaS_SEC2();
        seccionlinkAcciones.clickbotonlink2OpeServi_SEC2();
        seccionlinkAcciones.clickbotonlink3Saas_SEC2();
        seccionlinkAcciones.clickbotonlink4Consult_SEC2();

        ///Validacion link 
        ///Imagenes
        seccionlinkAcciones.clickbotonlink1imagenes_SEC2();
        seccionlinkAcciones.volverPaginaAnterior(); 
        seccionlinkAcciones.clickbotonlink2imagenes_SEC2();
        });
    });


    context('Automatizaciones - Sección 3 - BLOG', () => {

        it("SECCIÓN 3 - BLOG", () =>{
        cy.visit('https://nutrapp.com.co/index.php/2024/12/11/que-habilidades-requieren-las-empresas-de-sus-trabajadores-en-el-camino-a-la-transformacion-digital/') 
        seccion3BAcciones.validartextohabili_SEC3(); 
        seccion3BAcciones.validarparrafolasempre_SEC3();
        seccion3BAcciones.validarparrafoademas_SEC3(); 
        seccion3BAcciones.validarparrafo5habili_SEC3(); 
        seccion3BAcciones.validarparrafo1_5habili_SEC3();
        seccion3BAcciones.validarparrafo2_5habili_SEC3();
        seccion3BAcciones.validarparrafo21_5habili_SEC3();
        });
    });


    context('Automatizaciones - Sección 3_1 - BLOG', () => {

        it("SECCIÓNlinks3_1- BLOG_LINK", () =>{
        cy.visit('https://nutrapp.com.co/index.php/2024/12/11/que-habilidades-requieren-las-empresas-de-sus-trabajadores-en-el-camino-a-la-transformacion-digital/') 
        seccion3BlinkAcciones.clickbotonlink1_SEC3();
        seccion3BlinkAcciones.clickbotonlink2_SEC3(); 
        seccion3BlinkAcciones.clickbotonlink3_SEC3();

        ///Validacion link 
        ///NUESTROS SERVICIOS
        cy.visit('https://nutrapp.com.co/index.php/2024/12/11/que-habilidades-requieren-las-empresas-de-sus-trabajadores-en-el-camino-a-la-transformacion-digital/')
        seccion3BlinkAcciones.clickbotonlink1LaaS_SEC3();
        seccion3BlinkAcciones.clickbotonlink2OpeServi_SEC3();
        seccion3BlinkAcciones.clickbotonlink3Saas_SEC3();
        seccion3BlinkAcciones.clickbotonlink4Consult_SEC3();

        ///Validacion link 
        ///Imagenes
        cy.visit('https://nutrapp.com.co/index.php/2024/12/11/que-habilidades-requieren-las-empresas-de-sus-trabajadores-en-el-camino-a-la-transformacion-digital/')
        seccion3BlinkAcciones.clickbotonlink1imagenes_SEC3();
        seccionlinkAcciones.volverPaginaAnterior(); 
        seccion3BlinkAcciones.clickbotonlink2imagenes_SEC3();
        });
    });

    context('Automatizaciones - Sección 4 - BLOG', () => {

        it("SECCIÓN 4 - BLOG", () =>{
        cy.visit('https://nutrapp.com.co/index.php/2024/12/11/las-tecnologias-que-tendran-mas-demanda-este-2023-en-el-desarrollo-de-software-y-aplicaciones-web-2/') 
        seccion4BAcciones.validartextotecno_SEC4();
        seccion4BAcciones.validarparrafosDesaSoft_SEC4();
        seccion4BAcciones.validarparrafos1_SEC4(); 
        seccion4BAcciones.validarparrafos2_SEC4();
        seccion4BAcciones.validarparrafos3_SEC4();
        seccion4BAcciones.validarparrafos4_SEC4();
        seccion4BAcciones.validarparrafos5_SEC4();
        seccion4BAcciones.validarparrafos6_SEC4();
        });
    });

    context('Automatizaciones - Sección 4_1 - BLOG', () => {

        it("SECCIÓNlinks4_1- BLOG_LINK", () =>{
        cy.visit('https://nutrapp.com.co/index.php/2024/12/11/las-tecnologias-que-tendran-mas-demanda-este-2023-en-el-desarrollo-de-software-y-aplicaciones-web-2/') 
        seccion4BlinkAcciones.clickbotonlink1_SEC4()
        seccion4BlinkAcciones.clickbotonlink2_SEC4(); 
        seccion4BlinkAcciones.clickbotonlink3_SEC4();

        ///Validacion link 
        ///NUESTROS SERVICIOS
        cy.visit('https://nutrapp.com.co/index.php/2024/12/11/las-tecnologias-que-tendran-mas-demanda-este-2023-en-el-desarrollo-de-software-y-aplicaciones-web-2/')
        seccion4BlinkAcciones.clickbotonlink1LaaS_SEC4();
        seccion4BlinkAcciones.clickbotonlink2OpeServi_SEC4();
        seccion4BlinkAcciones.clickbotonlink3Saas_SEC4();
        seccion4BlinkAcciones.clickbotonlink4Consult_SEC4();

        ///Validacion link 
        ///Imagenes
        cy.visit('https://nutrapp.com.co/index.php/2024/12/11/las-tecnologias-que-tendran-mas-demanda-este-2023-en-el-desarrollo-de-software-y-aplicaciones-web-2/')
        seccion4BlinkAcciones.clickbotonlink1imagenes_SEC4();
        seccionlinkAcciones.volverPaginaAnterior(); 
        seccion4BlinkAcciones.clickbotonlink2imagenes_SEC4();
        });
    });


}); 