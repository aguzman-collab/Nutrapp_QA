import { headerSuites } from './flujos/header';
import { FooterSuites } from './flujos/footer';
import { BlogSuites } from './flujos/blogs'; 
import { NutraServi } from './flujos/nuestrosServicios';
import { HomeSuites } from './flujos/home';

beforeEach(() =>{
    cy.viewport(1200,800)
})

    headerSuites(),
    FooterSuites(),
    BlogSuites(),
    NutraServi(),
    HomeSuites()


