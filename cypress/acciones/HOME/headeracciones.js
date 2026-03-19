import { seccion1HeaderFooter } from '../../elementos/elementos';

class headernutraAcciones{
    clickbotoncerrar (){
        seccion1HeaderFooter.obtenerbotoncerrar().click();
    }
    
    clickbotonservicios (){
        seccion1HeaderFooter.obtenerbotonservicios().click();
        cy.url('https://nutrapp.com.co/index.php/nuestros-servicios/')
    }

    clickbotonblog (){
        seccion1HeaderFooter.obtenerbotonblog().click();
        cy.url('https://nutrapp.com.co/index.php/blog/')
    }

    clickbotoncontactanos (){
        seccion1HeaderFooter.obtenerbotoncontactanos().click();
        cy.url('https://nutrapp.com.co/#contact')
    }

}
export default new headernutraAcciones();

