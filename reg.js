'use strict';

window.addEventListener('load', ()=>{
  let form = document.querySelector('#form1');
  form.addEventListener('submit', ()=>{
   let access = confirm('Are u sure?');
   if (access===true){
      form.submit();
   }else{
   	alert('ЧС!');
   };
  });
});