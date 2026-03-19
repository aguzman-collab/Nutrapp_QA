import headernutraAcciones from "../../acciones/HOME/headeracciones";
import url from "../../url/url";

export function headerSuites (){
    context('Automatizaciones - Sección 1', () => { ///Contenedor secciones 
            it("SECCIÓN 1 - HEADER", () =>{
            url.urlBase()
            headernutraAcciones.clickbotoncerrar();
            headernutraAcciones.clickbotonservicios();
            headernutraAcciones.clickbotonblog();
            headernutraAcciones.clickbotoncontactanos();
            headernutraAcciones.clickbotoncerrar();
            });
        });
}