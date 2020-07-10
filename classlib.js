'use strict';

class Validator{
	constructor(){
		this.loginOk = false;
		this.pass1Ok = false;
		this.pass2Ok = false;
		this.emailOk = false;
	}

  checkLogin(login_value){
    this.loginOk = true;
 };

  checkPass1(pass1_value){
 	this.pass1Ok = true;
 };

  checkPass2(pass2_value){
 	this.pass2Ok = true;
 };

  checkEmail(email_value){
 	this.emailOk = true;
 };
 validate(){
 	return (this.loginOk == true && this.pass1Ok == true && this.pass2Ok == true && this.emailOk == true);
 }

}

class Controller{
  constructor(loginID, pass1Id, pass2Id, emailId, form1Id){
  	this.login = document.querySelector(loginID);
  	this.pass1 = document.querySelector(pass1Id);
  	this.pass2 = document.querySelector(pass2Id);
  	this.email = document.querySelector(emailId);
  	this.form1 = document.querySelector(form1Id);

  	this.validator = new Validator();
  }
  activateListeners(){
  	this.login.addEventListener('blur', ()=>{  this.validator.checkLogin(this.login.value);  });
  	this.pass1.addEventListener('blur', ()=>{  this.validator.checkPass1(this.pass1.value);  });
  	this.pass2.addEventListener('blur', ()=>{  this.validator.checkPass2(this.pass2.value);  });
  	this.email.addEventListener('blur', ()=>{  this.validator.checkEmail(this.email.value); });
  	this.form1.addEventListener('submit', ()=>{  
         alert(this.validator.validate());
         if (this.validator.validate()) {
         	this.form1.submit();
         } else {
         	alert('Отправка данных заблокирована!');
         }
         
  	  });
  }
}