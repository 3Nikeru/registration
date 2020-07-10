'use strict';

window.addEventListener('load', ()=>{
  const controller = new Controller('#login', '#pass1', '#pass2', '#email', '#form1');
  controller.activateListeners();
});