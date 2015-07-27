if(Meteor.isServer)
{
	// Setup the MAIL_URL
	// 
	smtp = {
	    username: 'franzmeteortest@gmail.com',
	    password: 'Control123',
	    server:   'smtp.gmail.com',
	    port: 587
	}
 	process.env.MAIL_URL = 'smtp://' + 
 	                        encodeURIComponent(smtp.username) + ':' + 
 	                        encodeURIComponent(smtp.password) + '@' + 
 	                        encodeURIComponent(smtp.server) + ':' + 
 	                        smtp.port;
	console.log(process.env.MAIL_URL);
	// Test the Email packege
 	/*Email.send({
	  from: "franzhflores@gmail.com",
	  to: "franzmeteortest@gmail.com",
	  subject: "Meteor Can Send Emails via Gmail",
	  text: "Its pretty easy to send emails via gmail."
	},  function(err){ console.log(err)});
	*/
}

// verify if the email already exists on the user collections
// 
Meteor.methods({
	isDuplicateEmail: function(email){
		var emailExists = false;		
		var user = Meteor.users.findOne({'emails.address': email});
		console.log(user);
		if(user) {
			emailExists = true;
		}
		return emailExists;
	}
})