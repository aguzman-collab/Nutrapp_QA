import seccion1NueAcciones from '../../acciones/NuestrServicios/seccion1Acciones'
import url from "../../url/url";

export function NutraServi (){

    context('Automatizaciones - Sección 1 - NueServi', () => {

        it("SECCIÓN 1 - Nuestros servicios", () =>{
        url.urlNuestroExito() 
        seccion1NueAcciones.validarNueServi_SEC1(); 
        seccion1NueAcciones.validarparrafoNueServi_SEC1();
        });
    })

}