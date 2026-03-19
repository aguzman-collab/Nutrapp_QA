import seccion1blog from '../../acciones/Blog/seccion1BAcciones'; 
import seccion2blog from '../../acciones/Blog/seccion2BAcciones'; 
import seccionlinkAcciones from '../../acciones/Blog/seccion2BlinkAcciones';
import seccion3BAcciones from '../../acciones/Blog/seccion3BAcciones';
import seccion3BlinkAcciones from '../../acciones/Blog/seccion3BlinkAcciones';
import seccion4BAcciones from '../../acciones/Blog/seccion4BAcciones';
import seccion4BlinkAcciones from '../../acciones/Blog/seccion4BlinkAcciones'; 
import url from "../../url/url";

export function BlogSuites (){
    context('Automatizaciones - Sección 1 - BLOG', () => {
        it("SECCIÓN 1 - BLOG", () =>{
            url.urlBlog()
            seccion1blog.validarblog_SEC1(); 
            seccion1blog.validarparrafoblog_SEC1();
            seccion1blog.validarparrafoblog_SEC1();
        });
    });
        
        
    context('Automatizaciones - Sección 2 - BLOG', () => {
        it("SECCIÓN 2 - BLOG", () =>{
            url.urlSEC2_1Blog()
            seccion2blog.validartextolainteli_SEC2(); 
            seccion2blog.validarparrafolainteli_SEC2(); 
            seccion2blog.validarparrafolaIA_SEC2();
        });
    });
        
            context('Automatizaciones - Sección 2_1 - BLOG', () => {
        
                it("SECCIÓNlinks2_1- BLOG_LINK", () =>{
                url.urlSEC2_1Blog()
                seccionlinkAcciones.clickbotonlink1_SEC2();
                seccionlinkAcciones.volverPaginaAnterior();
                seccionlinkAcciones.clickbotonlink2_SEC2(); 
                seccionlinkAcciones.volverPaginaAnterior();
                seccionlinkAcciones.clickbotonlink3_SEC2();
        
                ///Validacion link 
                ///NUESTROS SERVICIOS
                url.urlSEC2_1Blog()
                seccionlinkAcciones.clickbotonlink1LaaS_SEC2();
                seccionlinkAcciones.clickbotonlink2OpeServi_SEC2();
                seccionlinkAcciones.clickbotonlink3Saas_SEC2();
                seccionlinkAcciones.clickbotonlink4Consult_SEC2();
        
                ///Validacion link 
                ///Imagenes
                url.urlSEC2_1Blog()
                seccionlinkAcciones.clickbotonlink1imagenes_SEC2();
                seccionlinkAcciones.volverPaginaAnterior(); 
                seccionlinkAcciones.clickbotonlink2imagenes_SEC2();
                });
            });
        
        
            context('Automatizaciones - Sección 3 - BLOG', () => {
        
                it("SECCIÓN 3 - BLOG", () =>{
                url.urlSEC3_Blog()
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
                url.urlSEC3_Blog()
                seccion3BlinkAcciones.clickbotonlink1_SEC3();
                seccion3BlinkAcciones.clickbotonlink2_SEC3(); 
                seccion3BlinkAcciones.clickbotonlink3_SEC3();
        
                ///Validacion link 
                ///NUESTROS SERVICIOS
                url.urlSEC3_Blog()
                seccion3BlinkAcciones.clickbotonlink1LaaS_SEC3();
                seccion3BlinkAcciones.clickbotonlink2OpeServi_SEC3();
                seccion3BlinkAcciones.clickbotonlink3Saas_SEC3();
                seccion3BlinkAcciones.clickbotonlink4Consult_SEC3();
        
                ///Validacion link 
                ///Imagenes
                url.urlSEC3_Blog()
                seccion3BlinkAcciones.clickbotonlink1imagenes_SEC3();
                seccionlinkAcciones.volverPaginaAnterior(); 
                seccion3BlinkAcciones.clickbotonlink2imagenes_SEC3();
                });
            });
        
            context('Automatizaciones - Sección 4 - BLOG', () => {
        
                it("SECCIÓN 4 - BLOG", () =>{
                url.urlSEC4_Blog()
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
                url.urlSEC4_Blog()
                seccion4BlinkAcciones.clickbotonlink1_SEC4()
                seccion4BlinkAcciones.clickbotonlink2_SEC4(); 
                seccion4BlinkAcciones.clickbotonlink3_SEC4();
        
                ///Validacion link 
                ///NUESTROS SERVICIOS
                url.urlSEC4_Blog()
                seccion4BlinkAcciones.clickbotonlink1LaaS_SEC4();
                seccion4BlinkAcciones.clickbotonlink2OpeServi_SEC4();
                seccion4BlinkAcciones.clickbotonlink3Saas_SEC4();
                seccion4BlinkAcciones.clickbotonlink4Consult_SEC4();
        
                ///Validacion link 
                ///Imagenes
                url.urlSEC4_Blog()
                seccion4BlinkAcciones.clickbotonlink1imagenes_SEC4();
                seccionlinkAcciones.volverPaginaAnterior(); 
                seccion4BlinkAcciones.clickbotonlink2imagenes_SEC4();
                });
            });
}