function downloadpdf(){


  document.getElementById("download-espanish").addEventListener("click", function() {
    window.location.href = "https://drive.google.com/file/d/18eXXb_bjGjST7RJDu88WGIOyaFFZL1Q6/view?usp=sharing";
  });
 document.getElementById("download-english").addEventListener("click", function() {
    window.location.href = "https://drive.google.com/file/d/1RkqBvcLOurU5jsydtUmJA92JQ7LZTmRi/view?usp=sharing";
  }); 

}


(function translate(){
  // Creación de una nueva instancia de URLSearchParams para codificar los parámetros a enviar
const encodedParams = new URLSearchParams();
// Agregar el parámetro "text" con el texto a traducir
encodedParams.append("text", "Adultes, enfants…tout le monde erre dans la rue. Nous n’avons plus rien. Nous sommes dehors avec nos quatre enfants\", répète-t-elle en ajoutant qu’ils ont \"fabriqué des tentes de fortunes\" dans le centre-ville de Gaziantep, à une trentaine de kilomètres de là. \"Nous n’avons pas de nouvelles de nos proches. Tout le monde est mort, soupire-t-elle, la voix étranglée par l’émotion. Que Dieu aide la Turquie et son peuple. Je n’ai pas de mot. Dieu, aide nous !");
// Agregar el parámetro "source" con el código de idioma de origen (FR = francés)
encodedParams.append("source", "FR");
// Agregar el parámetro "target" con el código de idioma de destino (ES = español)
encodedParams.append("target", "ES");
// Agregar el parámetro "base64_source" con el valor "no" para indicar que el texto de origen no está codificado en base64
encodedParams.append("base64_source", "no");
// Agregar el parámetro "base64_target" con el valor "no" para indicar que el texto de destino no está codificado en base64
encodedParams.append("base64_target", "no");
// Creación de un objeto "options" con los parámetros para la petición
const options = {
	method: 'POST', // El método de la petición es POST
	headers: { // Encabezados de la petición
		'content-type': 'application/x-www-form-urlencoded', // Tipo de contenido de la petición
		'X-RapidAPI-Key': '367f42d815msh43e3509ef2e77c9p19b833jsncd65aa610574', // La clave de la API RapidAPI
		'X-RapidAPI-Host': 'fast-deepl-translator.p.rapidapi.com' // El host de la API RapidAPI
	},
	body: encodedParams // Los parámetros codificados para la petición
};
// La URL de la API de traducción
const LinkApi = "https://fast-deepl-translator.p.rapidapi.com/api/translate"

/*  async function fetchData(){
  const respuesta = await fetch(LinkApi, options)
  const data = respuesta.json()
  return data;
} */

// Realización de la petición fetch a la API de traducción
    fetch(LinkApi, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err)); 
 

/* 
  async function fetchData(LinkApi){
    const response = await fetch(LinkApi, options)
    const data = response.json()
    return data;
  }(async ()=>{
    try{
      const recibo = fetchData(LinkApi);
      console.log(recibo);
    }catch(error){
      console.log(error);
    }

  })() */
 
 
})();
 
 (function ($) {
  
  "use strict";

    // AOS ANIMATIONS
    AOS.init();

    // NAVBAR
    $('.navbar-nav .nav-link').click(function(){
        $(".navbar-collapse").collapse('hide');
    });

    // NEWS IMAGE RESIZE
    function NewsImageResize(){
      $(".navbar").scrollspy({ offset: -76 });
      
      var LargeImage = $('.large-news-image').height();

      var MinusHeight = LargeImage - 6;

      $('.news-two-column').css({'height' : (MinusHeight - LargeImage / 2) + 'px'});
    }

    $(window).on("resize", NewsImageResize);
    $(document).on("ready", NewsImageResize);

    $('a[href*="#"]').click(function (event) {
      if (
        location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
          event.preventDefault();
          $('html, body').animate({
            scrollTop: target.offset().top - 66
          }, 1000);
        }
      }
    });
    
  })(window.jQuery);

  
