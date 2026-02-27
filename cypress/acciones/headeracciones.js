import nutraelementos from "../elementos/elementos";

class headernutraAcciones{
    clickbotoncerrar (){
        nutraelementos.obtenerbotoncerrar().click();
    }
    
    clickbotonservicios (){
        nutraelementos.obtenerbotonservicios().click();
        cy.url('https://nutrapp.com.co/index.php/nuestros-servicios/')
    }

    clickbotonblog (){
        nutraelementos.obtenerbotonblog().click();
        cy.url('https://nutrapp.com.co/index.php/blog/')
    }

    clickbotoncontactanos (){
        nutraelementos.obtenerbotoncontactanos().click();
        cy.url('https://nutrapp.com.co/#contact')
    }

}
export default new headernutraAcciones();

