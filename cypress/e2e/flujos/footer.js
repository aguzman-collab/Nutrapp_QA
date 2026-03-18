import footernutraAcciones from "../../acciones/HOME/footerAcciones";
import headernutraAcciones from "../../acciones/HOME/headeracciones"
import url from "../../url/url";

export function FooterSuites (){
    it("SECCIÓN 1 - FOOTER", () =>{
        url.urlBase()
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
}