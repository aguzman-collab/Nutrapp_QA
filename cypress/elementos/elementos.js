class seccion1HeaderFooter {
    ///(SECCION 1)
    /// Validar header en boton y url 
    obtenerbotoncerrar = () => cy.get('svg[data-name="Layer 1"]');
    obtenerbotonservicios = () => cy.get('li#menu-item-1268');
    obtenerbotonblog = () => cy.get('li#menu-item-1267');
    obtenerbotoncontactanos = () => cy.get('li#menu-item-2233');

    /// Validar Footer en boton y url 
    obtenerbotonserviciosfo = () => cy.get('li#menu-item-1268');
    obtenerbotonblogfo = () => cy.get('li#menu-item-1267');
    obtenerbotoncontactanosfo = () => cy.get('li#menu-item-2233');

    ///Validar Footer Texto Telefono y Correos 
    obtenertextotelefono = () => cy.get('div[data-id="b88f6ca"] h2[class="elementor-heading-title elementor-size-default"]');
    obtenertextocorreo = () => cy.get('div[data-id="04a9624"] h2[class="elementor-heading-title elementor-size-default"]');


    ///Validar Footer en boton y url de T&C y Politicas 
    //obtenerbotontyc = () => cy.get('div[data-id="f883f79"] a["Términos y Condiciones"]');
    obtenerbotontyC = () => cy.get('div[data-id="f883f79"]').contains('a', 'Términos y Condiciones');
    obtenerbotonpoliticas = () => cy.get('div[data-id="f883f79"]').contains('a', 'Política de Tratamiento de Datos');

}

class seccion2Home {
    ///(SECCION 2)
    /// Validar textos HOME 
    obtenertextocompromiso = () => cy.get('h2[class="elementor-heading-title elementor-size-default"]') 
    obtenertextositiosweb = () => cy.get('div[data-id="e06285c"] div[class="elementor-widget-container"]'); 
    obtenertextocuadro1 = () => cy.get('div[data-id="56acc22"] div[class="elementor-widget-container"]'); 
    obtenertextocuadro2 = () => cy.get('div[data-id="3a753b4"] div[class="elementor-widget-container"]'); 
    obtenertextocuadro3 = () => cy.get('div[data-id="7968a50"] div[class="elementor-widget-container"]'); 

    ///Boton HOME
    obtenerbotonconocemas = () => cy.get('div[data-id="7bca1a3"] span.elementor-button-text'); 

}
class seccion3Home {
    ///(SECCION 3)
    ///Validar textos HOME 
    obtenertextoNuesServi = () => cy.get('div[data-id="ca74e02"] h2[class="elementor-heading-title elementor-size-default"]');
    obtenertextosdesarroweb = () => cy.get('div[data-id="c36e64f"] div[class="elementor-widget-container"]')
    obtenerbotonvermas = () => cy.get('div[data-id="8a8db3d"] a[class="elementor-button elementor-button-link elementor-size-sm"]')
    
}

class seccion4Home {
    ///(SECCION 4)
    ///Validar textos HOME 
    obtenertextosomos = () => cy.get('div[data-id="57ba2af"] h2[class="elementor-heading-title elementor-size-default"]')
    obtenertextosomosparrafo = () => cy.get('div[data-id="cb02ecf"] div[class="elementor-widget-container"]')
    obtenerbotonflecha1 = () => cy.get('div[id="equipo-especializado"]');
    obtenertextoflecha1 = () => cy.get('div[id="elementor-tab-content-2681"]')
    obtenerbotonflecha2 = () => cy.get('div[id="experiencia-y-precisin"]')
    obtenertextoflecha2 = () => cy.get('div[id="elementor-tab-content-2682"]')
    obtenerbotonflecha3 = () => cy.get('div[id="soluciones-seguras"]')
    obtenertextoflecha3 = () => cy.get('div[id="elementor-tab-content-2683"]')
}

class seccion5Home {
    ///(SECCION 5)
    ///Botones carrusel 
    obtenerflechacarrusel = () => cy.get('div[class="elementor-swiper-button elementor-swiper-button-next"]')
}

class seccion6Home {
    ///(SECCION 6)
    ///Validar textos HOME 
    obtenertextotransfodigi = () => cy.get('div[data-id="f9ae7a7"] h2[class="elementor-heading-title elementor-size-default"]');
    obtenertextotransfoparrafoprinc = () => cy.get('div[data-id="19d14d3"] div[class="elementor-widget-container"]')

    ///obtenerflecha1
    obtenerbotonflecha1_SEC6 = () => cy.get('div[id="elementor-tab-title-7671"]')
    obtenertextoflecha1_SEC6 = () => cy.get('div[id="elementor-tab-content-7671"]')

    ///obtenerflecha2
    obtenerbotonflecha2_SEC6 = () => cy.get('div[id="elementor-tab-title-7672"]')
    obtenertextoflecha2_SEC6 = () => cy.get('div[id="elementor-tab-content-7672"]')

    ///obtenerflecha3
    obtenerbotonflecha3_SEC6 = () => cy.get('div[id="elementor-tab-title-7673"]')
    obtenertextoflecha3_SEC6 = () => cy.get('div[id="elementor-tab-content-7673"]')

    ///obtenerflecha4
    obtenerbotonflecha4_SEC6 = () => cy.get('div[id="elementor-tab-title-7674"]')
    obtenertextoflecha4_SEC6 = () => cy.get('div[id="elementor-tab-content-7674"]')

    ///obtenerflecha5
    obtenerbotonflecha5_SEC6 = () => cy.get('div[id="elementor-tab-title-7675"]')
    obtenertextoflecha5_SEC6 = () => cy.get('div[id="elementor-tab-content-7675"]')

    ///obtenerflecha6
    obtenerbotonflecha6_SEC6 = () => cy.get('div[id="elementor-tab-title-7676"]')
    obtenertextoflecha6_SEC6 = () => cy.get('div[id="elementor-tab-content-7676"]')    
}

class seccion7Home {
    ///(SECCION 7)
    obtenertextoNuesExito_SEC7 = () => cy.get('div[data-id="c56c0c6"] h2')
    obtenertextoNuesServiparrafo_SEC71 = () => cy.get('div[data-id="6fb4f30"] p')
    obtenerbotonvermas_SEC71 = () => cy.get('div[data-id="6fb4f30"] span a')
    obtenertextoAlivia_SEC71 = () => cy.get('div[data-id="0c27ae4"] h2')
    obtenertextoAMF_SEC71 = () => cy.get('div[data-id="3faed9e"] h2')
    obtenertextoAPM_SEC71 = () => cy.get('div[data-id="4eb3c1e"] h2[class="elementor-heading-title elementor-size-default"]')
    obtenertextoNutrabio_SEC71 = () => cy.get('div[data-id="35846f6"] h2[class="elementor-heading-title elementor-size-default"]')
    obtenerparrafoAli_SEC71 = () => cy.get('div[data-id="2961ed2"] p')
    obtenerparrafoAMF_SEC71 = () => cy.get('div[data-id="385d374"] p')
    obtenerparrafoAPM_SEC71 = () => cy.get('div[data-id="443d830"] p')
    obtenerparrafoNutrabio_SEC71 = () => cy.get('div[data-id="e26856a"] p')
}

class seccionNutraExitoHome {
    ///(NUESTROS EXITOS_SEC7)
    obtenertextoNuesExitO_SEC7_2 = () => cy.get('div[data-id="0ac976c"] h2')
    obtenerparrrafoNuesExito_SEC7_2 = () => cy.get('div[data-id="3820241"] p')
    obtenertextoAliv_SEC7_2 = () => cy.get('div[data-id="0fefc66"] h2')
    obtenerparrrafoAliv_SEC7_2 = () => cy.get('div[data-id="ae59a2a"] p')
    obtenertextoAMF_SEC7_2 = () => cy.get('div[data-id="7d7152e"] h2')
    obtenerparrrafoAMF_SEC7_2 = () => cy.get('div[data-id="46de9e9"] p')
    obtenertextoAPM_SEC7_2 = () => cy.get('div[data-id="2280835"] h2')
    obtenerparrrafoAPM_SEC7_2 = () => cy.get('div[data-id="4c1fa07"] p')
    obtenertextoNutra_SEC7_2 = () => cy.get('div[data-id="8ef9eb0"] h2')
    obtenerparrrafoNutra_SEC7_2 = () => cy.get('div[data-id="8db6ee7"] p')
}

class seccion8Home {
    ///(SECCION 8)
    obtenertextoNuesClien_SEC8 = () => cy.get('div[data-id="4746070"] h2[class="elementor-heading-title elementor-size-default"]')
    obtenertextoPregunta_SEC8 = () => cy.get('div[data-id="e45049d"] strong')
    obtenerparrafopregunta_SEC8 = () => cy.get('div[data-id="e45049d"] ul li span')
}


class seccion9Home {
    ///(SECCION 9)
    obtenertextoNuesUltiNoti_SEC9 = () => cy.get('div[data-id="8d76661"] h2[class="elementor-heading-title elementor-size-default"]')
    obtenerparrafoNuesUltiNoti_SEC9 = () => cy.get('div[data-id="1a65742"] p')
    obtenerparrafoimagen1_SEC9 = () => cy.get('div[data-id="019f159"] h1')
    obtenerparrafoimagen2_SEC9 = () => cy.get('div[data-id="04fcbcf"] h1')
    obtenerparrafoimagen3_SEC9 = () => cy.get('div[data-id="f9cd3c3"] h1')
    obtenerbotonimagen1_SEC9 = () => cy.get('div[data-id="019f159"] a')
    obtenerbotonimagen2_SEC9 = () => cy.get('div[data-id="04fcbcf"] a')
    obtenerbotonimagen3_SEC9 = () => cy.get('div[data-id="f9cd3c3"] a')
}

class seccion10Home {
    ///(SECCION 10)
    obtenertextocontacta_SEC10 = () => cy.get('div[data-id="4a6c5aa"] h2')
    obtenerparrafocontacta_SEC10 = () => cy.get('div[data-id="3a12ae4"] p') 
    obtenerEscribirnombres_SEC10 = () => cy.get('input[name="firstname"]')
    obtenerEscribirapellidos_SEC10 = () => cy.get('input[id="lastname-1327d4f2-a958-4c45-a7b8-3f752265a4c0"]')
    obtenerEscribiremail_SEC10 = () => cy.get('input[id="email-1327d4f2-a958-4c45-a7b8-3f752265a4c0"]', {timeout: 10000})
    obtenerEscribirtelefono_SEC10 = () => cy.get('input[id="phone-1327d4f2-a958-4c45-a7b8-3f752265a4c0"]')
    obtenerEscribiraqui_SEC10 = () => cy.get('[id="message-1327d4f2-a958-4c45-a7b8-3f752265a4c0"]')
    obtenerbotonacepto_SEC10 = () => cy.get('input[id="datadip2024-1327d4f2-a958-4c45-a7b8-3f752265a4c0"]')
    obtenerbotonpoliticas_SEC10 = () => cy.get('div [class="hs_datadip2024 hs-datadip2024 hs-fieldtype-booleancheckbox field hs-form-field"] a')
    obtenerbotonenviar_SEC10 = () => cy.get('div[class="actions"] input')
}

class NueServi_SEC1 {
    ///NUESTROS SERVICIOS 
    obtenertextoNueServi_SEC1 = () => cy.get('div[data-id="f21b884"] h2')
    obtenerparrafoNueServi_SEC1 = () => cy.get('div[data-id="004d92d"] p')
}

class BlogSEC1{
    ///BLOG (SECCION 1)
    obtenertextoblog_SEC1 = () => cy.get('div[data-id="2c73204"] h2')
    obtenerparrafoblog_SEC1 = () => cy.get('div[data-id="622e04e"] p')
}

class BlogSEC2{
    ///BLOG (SECCION 2) //utilizar EQ del 0 al 2
    obtenertextolainteli_SEC2 = () => cy.get('div[data-id="a2672b8"] h1')
    obtenerparrafolainteli_SEC2 = ()  => cy.get('div[data-id="6cae12c"] p')
    obtenerparrafolaIA_SEC2 = () => cy.get('div[data-id="cc43154"] ul li')
}

class BlogSEC2_LINK{
    ///BLOG (SECCION_2LINKS Publicaciones Recientes)
    obtenerbotonlinks_SEC2 = () => cy.get('div[data-id="52b8ac0"] h3 a')

    ///BLOG (SECCION_2LINKS NUESTROS SERVICIOS)
    obtenerbotonlink1LaaS_SEC2 = () => cy.get('div [data-id="c482a04"] h2')
    obtenerbotonlink2OpeServi_SEC2 = () => cy.get('div [data-id="b85f1b4"] h2')
    obtenerbotonlink3Saas_SEC2 = () => cy.get('div[data-id="e05f4f4"] h2')
    obtenerbotonlink4Consult_SEC2 = () => cy.get('div[data-id="4e4611a"] h2')

    ///BLOG (SECCION_2LINKS Imagenes)
    obtenerbotonlinksimagen_SEC2 = () => cy.get('div[data-id="77671ca"] h3')
}

class BlogSEC3{
    ///BLOG (SECCION 3)
    obtenertextohabili_SEC3 = () => cy.get('div[data-id="a2672b8"] h1')
    obtenerparrafolasempre_SEC3 = () => cy.get('div[data-id="6cae12c"] p')
    obtenerparrafoademas_SEC3 = () => cy.get('div[data-id="cc43154"] p')
    obtenerparrafo5habili_SEC3 = () => cy.get('div[data-id="4df74ce"] ul li')
    obtenerparrafo1_5habili_SEC3 = () => cy.get('div[data-id="4df74ce"] li ol li')
    obtenerparrafo2_5habili_SEC3 = () => cy.get('div[data-id="79a152c"] ul li')
    obtenerparrafo21_5habili_SEC3 = () => cy.get('div[data-id="79a152c"] ol li')
}

class BlogSEC3_LINK{ 
    ///BLOG (SECCION_3LINKS Publicaciones Recientes)
    obtenerbotonlinks_SEC3 = () => cy.get('div[data-id="52b8ac0"] h3 a')

    ///BLOG (SECCION_3LINKS NUESTROS SERVICIOS)
    obtenerbotonlink1LaaS_SEC3 = () => cy.get('div [data-id="c482a04"] h2')
    obtenerbotonlink2OpeServi_SEC3 = () => cy.get('div [data-id="b85f1b4"] h2')
    obtenerbotonlink3Saas_SEC3= () => cy.get('div[data-id="e05f4f4"] h2')
    obtenerbotonlink4Consult_SEC3 = () => cy.get('div[data-id="4e4611a"] h2')

    ///BLOG (SECCION_3LINKS Imagenes)
    obtenerbotonlinksimagen_SEC3 = () => cy.get('div[data-id="77671ca"] h3')
}

class BlogSEC4{
    ///BLOG (SECCION 4)
    obtenertextotecno_SEC4 = () => cy.get('div[data-id="a2672b8"] h1')
    obtenerparrafosDesaSoft_SEC4 = () => cy.get('div[data-id="cbeb93c"] p')
    obtenerparrafos_SEC4= () => cy.get('div[class="elementor-widget-container"] p') //Se tiene que unificar 

}

class BlogSEC4_LINK{
    ///BLOG (SECCION_3LINKS Publicaciones Recientes)
    obtenerbotonlinks_SEC4 = () => cy.get('div[data-id="52b8ac0"] h3 a')

    ///BLOG (SECCION_4LINKS NUESTROS SERVICIOS)
    obtenerbotonlink1LaaS_SEC4 = () => cy.get('div [data-id="c482a04"] h2')
    obtenerbotonlink2OpeServi_SEC4 = () => cy.get('div [data-id="b85f1b4"] h2')
    obtenerbotonlink3Saas_SEC4 = () => cy.get('div[data-id="e05f4f4"] h2')
    obtenerbotonlink4Consult_SEC4 = () => cy.get('div[data-id="4e4611a"] h2')

    ///BLOG (SECCION_4LINKS Imagenes)
    obtenerbotonlinksimagen_SEC4 = () => cy.get('div[data-id="77671ca"] h3')
}


module.exports = {
    seccion1HeaderFooter: new seccion1HeaderFooter(),
    seccion2Home: new seccion2Home(),
    seccion3Home: new seccion3Home(),
    seccion4Home: new seccion4Home(),
    seccion5Home: new seccion5Home(),
    seccion6Home: new seccion6Home(),
    seccion7Home: new seccion7Home(),
    seccionNutraExitoHome: new seccionNutraExitoHome(),
    seccion8Home: new seccion8Home(),
    seccion9Home: new seccion9Home(),
    seccion10Home: new seccion10Home(),
    NueServi_SEC1: new NueServi_SEC1(),
    BlogSEC1: new BlogSEC1(),
    BlogSEC2: new BlogSEC2(),
    BlogSEC2_LINK: new BlogSEC2_LINK(),
    BlogSEC3: new BlogSEC3(),
    BlogSEC3_LINK: new BlogSEC3_LINK(),
    BlogSEC4: new BlogSEC4(),
    BlogSEC4_LINK: new BlogSEC4_LINK(),
};
