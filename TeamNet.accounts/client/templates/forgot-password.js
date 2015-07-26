var ERRORS_KEY = 'resetPwdErrors';

Template.forgotpassword.onCreated(function() {
  Session.set(ERRORS_KEY, {});
});


Template.forgotpassword.helpers({
  errorMessages: function() {
    return _.values(Session.get(ERRORS_KEY));
  },
  errorClass: function(key) {
    return Session.get(ERRORS_KEY)[key] && 'error';
  }
});


Template.forgotpassword.events({	
	 'submit' : function(event, template) {
	 	event.preventDefault();
	 	console.log('recovery');
	 	var email = template.$('[name=email]').val();
	 	emailRegExpression = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
	 	var isValid = emailRegExpression.test(email);

	 	if(email && isValid)
	 	{	 		
		    console.log("pwd recovery");		    
		    var options = {
		        email: email
		    }
		    Accounts.forgotPassword(options, function(error){
		        console.log(error);
		    })		    
	 	}else{
	 		Session.set(ERRORS_KEY, {'none': 'Invalid email!'});
	 	}
  	}  
})