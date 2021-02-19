const almac = document.querySelector('.almac');

almac.addEventListener('click',function(){
    document.getElementById('barra').classList.toggle('active');
});


function writing(str){
  let arrFromStr = str.split('');   //split tranforma el string en Array
  let i = 0;
  let printStr = setInterval(function(){

   document.body.style.fontSize = '';
   document.querySelector('.text').innerHTML += arrFromStr[i];
   i++;
   if (i === arrFromStr.length){
    clearInterval(printStr);
    // document.body.style.fontSize = '60px';
    // document.body.style.color = 'steelblue';
   }
  },100);
 };
 writing('mira a tu alrededor  aprecia los avances eso solo fue posible Gracias a los Desarrolladores (Los Heroes Olvidados que nadie admira y mucho menos quieren ser como Ellos)');






