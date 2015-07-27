var ERRORS_KEY = 'resetPwdErrors';

Template.forgotpassword.onCreated(function() {
  Session.set(ERRORS_KEY, {});
  Session.set('pwdSatus', false);
});


Template.forgotpassword.helpers({
  errorMessages: function() {
    return _.values(Session.get(ERRORS_KEY));
  },
  emailHasBeenSent: function(){
  	return Session.get('pwdSatus');
  }
});

Template.forgotpassword.events({	
	 'submit' : function(event, template) {
	 	errors = {};
	 	event.preventDefault();	 
	 	var email = template.$('[name=email]').val();
	 	if(email)
	 	{			
		    var options = {
		        email: email
		    }
		    Accounts.forgotPassword(options, function(error){
		        console.log(error);
		        if(error){
		        	Session.set(ERRORS_KEY, {'none': 'Email not found!'});
		        } else {
		        	Session.set('pwdSatus', true);
		        }
		       

		    })		    
	 	}else{
	 		Session.set(ERRORS_KEY, {'none': 'Invalid email!'});
	 	}
  	}  
})