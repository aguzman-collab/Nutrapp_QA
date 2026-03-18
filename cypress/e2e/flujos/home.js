import headernutraAcciones from "../../acciones/HOME/headeracciones";
import seccion2Acciones from '../../acciones/HOME/seccion2Acciones';
import seccion3Acciones from '../../acciones/HOME/seccion3Acciones';
import seccion4Acciones from '../../acciones/HOME/seccion4Acciones';
import seccion5Acciones from '../../acciones/HOME/seccion5Acciones';
import seccion6Acciones from '../../acciones/HOME/seccion6Acciones';
import seccion7Acciones from '../../acciones/HOME/seccion7Acciones';
import NuesExito_SEC7Acciones from "../../acciones/HOME/nuestrosexitosSEC7Acciones";
import seccion8Acciones from '../../acciones/HOME/seccion8Acciones';
import seccion9Acciones from '../../acciones/HOME/seccion9Acciones';
import seccion10Acciones from '../../acciones/HOME/seccion10Acciones';
import seccionlinkAcciones from '../../acciones/Blog/seccion2BlinkAcciones';
import url from "../../url/url";

beforeEach(() =>{
    cy.viewport(1200,800)
})
require('cypress-xpath');

export function HomeSuites (){
 context('Automatizaciones - Sección 2', () => {

        it("SECCIÓN 2 - Nuestro compromiso", () =>{
        url.urlBase()
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
        url.urlBase()
        headernutraAcciones.clickbotoncerrar();
        seccion3Acciones.validarNuestrosServicios(); 
        seccion3Acciones.validarDesarrolloWeb();
        });
    });


    context('Automatizaciones - Sección 4', () => {

        it("SECCIÓN 4 - ¿Quiénes somos?", () =>{
        url.urlBase()
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
        url.urlBase()
        headernutraAcciones.clickbotoncerrar();
        seccion5Acciones.clickflechacarrusel();
        });
    });


    context('Automatizaciones - Sección 6', () => {

        it("SECCIÓN 6 - Transformacion Digital", () =>{
        url.urlBase()
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
        url.urlBase()
        seccion7Acciones.validarNuesExit7(); 
        seccion7Acciones.validarNuesServiparrafo_SEC7();
        headernutraAcciones.clickbotoncerrar();
        seccion7Acciones.clickbotonvermas_SEC7();
        headernutraAcciones.clickbotoncerrar();
        seccionlinkAcciones.volverPaginaAnterior(); 
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

        it("SECCIÓN 7 - Nuestros Exitos_SEC7", () =>{
        url.urlNuesExito()
        NuesExito_SEC7Acciones.validartextoNuesExitO_SEC7_2();
        NuesExito_SEC7Acciones.validarparrrafoNuesExito_SEC7_2(); 
        NuesExito_SEC7Acciones.validartextoAliv_SEC7_2();
        NuesExito_SEC7Acciones.validarparrrafoAliv_SEC7_2();
        NuesExito_SEC7Acciones.validartextoAMF_SEC7_2();
        NuesExito_SEC7Acciones.validarparrrafoAMF_SEC7_2();
        NuesExito_SEC7Acciones.validartextoAPM_SEC7_2();
        NuesExito_SEC7Acciones.validarparrrafoAPM_SEC7_2();
        NuesExito_SEC7Acciones.validartextoNutra_SEC7_2();
        NuesExito_SEC7Acciones.validarparrrafoNutra_SEC7_2();
        }); 
    }); 


    context('Automatizaciones - Sección 8', () => {

        it("SECCIÓN 8 - Nuestros clientes", () =>{
        url.urlBase()
        seccion8Acciones.validarNuesClie_SEC8();
        seccion8Acciones.validarPreguntatitulo_SEC8(); 
        seccion8Acciones.validarParrafopregunta_SEC8();
        });
    });


    context('Automatizaciones - Sección 9', () => {

        it("SECCIÓN 9 - Nuestras Últimas Noticias", () =>{
        url.urlBase()
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
        url.urlBase()
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

}