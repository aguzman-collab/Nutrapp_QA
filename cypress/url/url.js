class url {
    urlBase = () => cy.visit('https://nutrapp.com.co')

    urlNuesExito = () => cy.visit('https://nutrapp.com.co/index.php/nuestros-exitos/', {timeout: 60000})
    
    urlBlog = () => cy.visit('https://nutrapp.com.co/index.php/blog/')

    urlSEC2_1Blog = () => cy.visit('https://nutrapp.com.co/index.php/2024/12/11/la-inteligencia-artificial-en-el-desarrollo-de-nuevos-negocios-digitales-2/') 

    urlSEC3_Blog = () => cy.visit('https://nutrapp.com.co/index.php/2024/12/11/que-habilidades-requieren-las-empresas-de-sus-trabajadores-en-el-camino-a-la-transformacion-digital/') 

    urlSEC4_Blog = () => cy.visit('https://nutrapp.com.co/index.php/2024/12/11/las-tecnologias-que-tendran-mas-demanda-este-2023-en-el-desarrollo-de-software-y-aplicaciones-web-2/')

    urlNuestroExito = () => cy.visit('https://nutrapp.com.co/index.php/nuestros-servicios/') 

}

module.exports = new url();