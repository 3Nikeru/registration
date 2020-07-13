'use strict';

class Validator{
	constructor(){
		this.loginOk = false;
		this.pass1Ok = false;
		this.pass2Ok = false;
		this.emailOk = false;
	}

  checkLogin(login_value){
  	let reg = /^[a-zA-Z][a-zA-Z0-9\-]{6,10}$/;
    this.loginOk = reg.test(login_value);
 };

  checkPass1(pass1_value){
  	let reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9_\.\-]{8,16}$/;
 	this.pass1Ok = reg.test(pass1_value);
 };

  checkPass2(pass1_value, pass2_value){
 	this.pass2Ok = (pass1_value == pass2_value);
 };

  checkEmail(email_value){
  	let reg = /^[a-zA-Z0-9_\.\-]+@[a-z]+\.[a-z]{2,4}$/;
 	this.emailOk = reg.test(email_value);
 };
 validate(){
 	return (this.loginOk == true && this.pass1Ok == true && this.pass2Ok == true && this.emailOk == true);
 }

}

class Controller{
  constructor(loginID, pass1Id, pass2Id, emailId, form1Id, info1, info2, info3, info4){
  	this.login = document.querySelector(loginID);
  	this.pass1 = document.querySelector(pass1Id);
  	this.pass2 = document.querySelector(pass2Id);
  	this.email = document.querySelector(emailId);
  	this.form1 = document.querySelector(form1Id);
    
  	this.validator = new Validator();

  	this.login_info = document.querySelector(info1);
  	this.pass1_info = document.querySelector(info2);
  	this.pass2_info = document.querySelector(info3);
  	this.email_info = document.querySelector(info4);
  }
  activateListeners(){
  	this.login.addEventListener('blur', ()=>{ 
  	 this.validator.checkLogin(this.login.value);
  	 if(this.validator.loginOk){
  	 	this.login.style.boxShadow = '0 0 green, 0 0 10px green';
  	 	this.login_info.style = 'none';
  	 } else {
  	 	this.login.style.boxShadow = '0 0 red, 0 0 10px red';
  	 	this.login_info.style = 'inline';
  	 } 
  	});
  	this.pass1.addEventListener('blur', ()=>{  this.validator.checkPass1(this.pass1.value);  });
  	this.pass2.addEventListener('blur', ()=>{  this.validator.checkPass2( this.pass1.value, this.pass2.value);  });
  	this.email.addEventListener('blur', ()=>{  this.validator.checkEmail(this.email.value);  });
  	this.form1.addEventListener('submit', ()=>{  
         if (this.validator.validate()) {
         	this.form1.submit();
         } else {
         	alert('Отправка данных заблокирована!');
         }
  	  });
  }
}