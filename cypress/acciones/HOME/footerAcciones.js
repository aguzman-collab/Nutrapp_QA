import { seccion1HeaderFooter } from '../../elementos/elementos';

class footernutraAcciones{ ///Footer Validar botones y url 
  
    clickbotonserviciosfo (){
        seccion1HeaderFooter.obtenerbotonserviciosfo().click();
        cy.url('https://nutrapp.com.co/index.php/nuestros-servicios/')
    }

    clickbotonblogfo (){
        seccion1HeaderFooter.obtenerbotonblogfo().click();
        cy.url('https://nutrapp.com.co/index.php/blog/')
    }

    clickbotoncontactanosfo (){
        seccion1HeaderFooter.obtenerbotoncontactanosfo().click();
        cy.url('https://nutrapp.com.co/#contact')
    }


    ///Validar textos 
    validarnumero() {
        seccion1HeaderFooter.obtenertextotelefono().should('have.text', '+57 321 2738151')
    }

    validarcorreo() {
        seccion1HeaderFooter.obtenertextocorreo().should('have.text', 'eventos@nutrapp.com.co')
    }

    ///Validar URL T&C Y POLITICAS 

    clickbotontyc (){
        seccion1HeaderFooter.obtenerbotontyC().click();
        cy.url('https://nutrapp.com.co/wp-content/uploads/2025/01/TERMINOS-Y-CONDICIONES-NUTRAPP-INNOVATIONS-SAS-1.docx.pdf')
    
    }

    clickbotonpoliticas (){
        seccion1HeaderFooter.obtenerbotonpoliticas().click();
        cy.url('https://nutrapp.com.co/wp-content/uploads/2025/01/POLITICA-DE-PROTECCION-DE-DATOS-PERSONALES-NUTRAPP-2025.pdf')
    }

}
export default new footernutraAcciones();

