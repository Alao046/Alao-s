var regSurname= document.getElementById('reg-surname');
var regName= document.getElementById('reg-name');
var regDept= document.getElementById('reg-dept');
var regAdress= document.getElementById('reg-adress');
var regEmail= document.getElementById('reg-email');
var regPhone= document.getElementById('reg-phone');
var regMale= document.getElementById('reg-male');
var regFemale= document.getElementById('reg-female');
var regDate= document.querySelector('[data-reg-date]');
var regSubmit= document.querySelector('[data-reg-submit]');

var profileSurname= document.getElementById('profile-surname');
var profileName= document.getElementById('profile-name');
var profileDept= document.getElementById('profile-dept');
var profileAdress= document.getElementById('profile-adress');
var profileEmail= document.getElementById('profile-email');
var profilePhone= document.getElementById('profile-phone');
var profileGender= document.getElementById('profile-gender');
var profileDate= document.querySelector('[profile-date]');


regSubmit.onclick=function(){
  this.style.backgroundColor='red';
  window.location.href="profile.html";
  profileSurname.innerHTML=regSurname.value;

}

// profileSurname.onload=function(){
//   profileSurname.innerHTML=regSurname.value;
// }


