'use strict';

window.addEventListener('load', ()=>{
  const controller = new Controller('#login', '#pass1', '#pass2', '#email', '#form1', '#login_info', '#pass1_info', '#pass2_info', '#email_info');
  controller.activateListeners();
});