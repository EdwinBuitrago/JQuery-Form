var main = function(){
  $('.dropdown img').click(function(){
    $('.dropdown-menu').toggle();
  });
  
$('form').submit(function(){
  	var Email = $('#email').val();
  	var Password = $('#password').val();
  		if (Email === '') { 
        $('.email-error').text('Please enter your email');
      }
      if (Password === ''){
        $('.password-error').text('Please enter your password');
      }    
    
      return false;
 });   
 
};
$(document).ready(main);
