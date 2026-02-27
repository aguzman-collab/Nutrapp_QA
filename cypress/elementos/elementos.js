class nutraelementos{
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


    ///(SECCION 2)
    /// Validar textos HOME 
    obtenertextocompromiso = () => cy.get('h2[class="elementor-heading-title elementor-size-default"]').first().click(); 
    obtenertextositiosweb = () => cy.get('div[data-id="e06285c"] div[class="elementor-widget-container"]'); 
    obtenertextocuadro1 = () => cy.get('div[data-id="56acc22"] div[class="elementor-widget-container"]'); 
    obtenertextocuadro2 = () => cy.get('div[data-id="3a753b4"] div[class="elementor-widget-container"]'); 
    obtenertextocuadro3 = () => cy.get('div[data-id="7968a50"] div[class="elementor-widget-container"]'); 

    ///Boton HOME
    obtenerbotonconocemas = () => cy.get('div[data-id="7bca1a3"] span.elementor-button-text'); 


    ///(SECCION 3)
    ///Validar textos HOME 
    obtenertextoNuesServi = () => cy.get('div[data-id="ca74e02"] h2[class="elementor-heading-title elementor-size-default"]');
    obtenertextosdesarroweb = () => cy.get('div[data-id="c36e64f"] div[class="elementor-widget-container"]')
    obtenerbotonvermas = () => cy.get('div[data-id="8a8db3d"] a[class="elementor-button elementor-button-link elementor-size-sm"]')
    

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


    ///(SECCION 5)
    ///Botones carrusel 
    obtenerflechacarrusel = () => cy.get('div[class="elementor-swiper-button elementor-swiper-button-next"]').first().click(); // el primero 

    
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


    ///(SECCION 7)
    obtenertextoNuesServi_SEC7 = () => cy.get('div[data-id="c56c0c6"] h2[class="elementor-heading-title elementor-size-default"]')
    obtenertextoNuesServiparrafo_SEC7 = () => cy.get('div[data-id="6fb4f30"] p')
    obtenerbotonvermas_SEC7 = () => cy.get('div[data-id="6fb4f30"] strong')
    obtenertextoAlivia_SEC7 = () => cy.get('div[data-id="0c27ae4"] h2[class="elementor-heading-title elementor-size-default"]')
    obtenertextoAMF_SEC7 = () => cy.get('div[data-id="3faed9e"] h2[class="elementor-heading-title elementor-size-default"]')
    obtenertextoAPM_SEC7 = () => cy.get('div[data-id="4eb3c1e"] h2[class="elementor-heading-title elementor-size-default"]')
    obtenertextoNutrabio_SEC7 = () => cy.get('div[data-id="35846f6"] h2[class="elementor-heading-title elementor-size-default"]')
    obtenerparrafoAli_SEC7 = () => cy.get('div[data-id="2961ed2"] p')
    obtenerparrafoAMF_SEC7 = () => cy.get('div[data-id="385d374"] p')
    obtenerparrafoAPM_SEC7 = () => cy.get('div[data-id="443d830"] p')
    obtenerparrafoNutrabio_SEC7 = () => cy.get('div[data-id="e26856a"] p')

    ///(SECCION 8)
    obtenertextoNuesClien_SEC8 = () => cy.get('div[data-id="4746070"] h2[class="elementor-heading-title elementor-size-default"]')
    obtenertextoPregunta_SEC8 = () => cy.get('div[data-id="e45049d"] strong')
    obtenerparrafopregunta_SEC8 = () => cy.get('div[data-id="e45049d"] ul li span')

    ///(SECCION 9)
    obtenertextoNuesUltiNoti_SEC9 = () => cy.get('div[data-id="8d76661"] h2[class="elementor-heading-title elementor-size-default"]')
    obtenerparrafoNuesUltiNoti_SEC9 = () => cy.get('div[data-id="1a65742"] p')
    obtenerparrafoimagen1_SEC9 = () => cy.get('div[data-id="019f159"] h1')
    obtenerparrafoimagen2_SEC9 = () => cy.get('div[data-id="04fcbcf"] h1')
    obtenerparrafoimagen3_SEC9 = () => cy.get('div[data-id="f9cd3c3"] h1')
    obtenerbotonimagen1_SEC9 = () => cy.get('div[data-id="019f159"] strong')
    obtenerbotonimagen2_SEC9 = () => cy.get('div[data-id="04fcbcf"] strong')
    obtenerbotonimagen3_SEC9 = () => cy.get('div[data-id="f9cd3c3"] strong')

    ///(SECCION 10)
    obtenertextocontacta_SEC10 = () => cy.get('div[data-id="4a6c5aa"] h2')
    obtenerparrafocontacta_SEC10 = () => cy.get('div[data-id="3a12ae4"] p') 
    obtenerEscribirnombres_SEC10 = () => cy.get('input[name="firstname"]')
    obtenerEscribirapellidos_SEC10 = () => cy.get('input[id="lastname-1327d4f2-a958-4c45-a7b8-3f752265a4c0"]')
    obtenerEscribiremail_SEC10 = () => cy.get('input[id="email-1327d4f2-a958-4c45-a7b8-3f752265a4c0"]')
    obtenerEscribirtelefono_SEC10 = () => cy.get('input[id="phone-1327d4f2-a958-4c45-a7b8-3f752265a4c0"]')
    obtenerEscribiraqui_SEC10 = () => cy.get('[id="message-1327d4f2-a958-4c45-a7b8-3f752265a4c0"]')
    obtenerbotonacepto_SEC10 = () => cy.get('input[id="datadip2024-1327d4f2-a958-4c45-a7b8-3f752265a4c0"]')
    obtenerbotonpoliticas_SEC10 = () => cy.get('div [class="hs_datadip2024 hs-datadip2024 hs-fieldtype-booleancheckbox field hs-form-field"] a')
    obtenerbotonenviar_SEC10 = () => cy.get('div[class="actions"] input')
} 
export default new nutraelementos();
