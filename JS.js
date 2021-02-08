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
 writing('los Programadores estan construyendo el mundo en la sombra, son artistas que nadie Idolatra, nadie quiere ser como ellos . pero aun asi son los protagonistas que todos ignoran ');






