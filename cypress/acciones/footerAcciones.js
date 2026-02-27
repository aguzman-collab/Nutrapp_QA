import nutraelementos from "../elementos/elementos";

class footernutraAcciones{ ///Footer Validar botones y url 
  
    clickbotonserviciosfo (){
        nutraelementos.obtenerbotonserviciosfo().click();
        cy.url('https://nutrapp.com.co/index.php/nuestros-servicios/')
    }

    clickbotonblogfo (){
        nutraelementos.obtenerbotonblogfo().click();
        cy.url('https://nutrapp.com.co/index.php/blog/')
    }

    clickbotoncontactanosfo (){
        nutraelementos.obtenerbotoncontactanosfo().click();
        cy.url('https://nutrapp.com.co/#contact')
    }


    ///Validar textos 
    validarnumero() {
        nutraelementos.obtenertextotelefono().should('have.text', '+57 321 2738151')
    }

    validarcorreo() {
        nutraelementos.obtenertextocorreo().should('have.text', 'eventos@nutrapp.com.co')
    }

    ///Validar URL T&C Y POLITICAS 

    clickbotontyc (){
        nutraelementos.obtenerbotontyC().click();
        cy.url('https://nutrapp.com.co/wp-content/uploads/2025/01/TERMINOS-Y-CONDICIONES-NUTRAPP-INNOVATIONS-SAS-1.docx.pdf')
    }

    clickbotonpoliticas (){
        nutraelementos.obtenerbotonpoliticas().click();
        cy.url('https://nutrapp.com.co/wp-content/uploads/2025/01/POLITICA-DE-PROTECCION-DE-DATOS-PERSONALES-NUTRAPP-2025.pdf')
    }

}
export default new footernutraAcciones();

