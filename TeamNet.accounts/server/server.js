if(Meteor.isServer)
{

	/*Meteor.publish('allUsers', function () {
		return Meteor.users.find({}, {
			fields: {
				'profile.email': 1
			}			
		});
	});*/
	
	//Send Email with Meteor and gmail
	//Setup the MAIL_URL
	smtp = {
	    username: 'franzhflores@gmail.com',   // eg: server@gentlenode.com
	    password: '_1q2w3e4r',   // eg: 3eeP1gtizk5eziohfervU
	    server:   'smtp.gmail.com',  // eg: mail.gandi.net
	    port: 465
	}
 	process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;

 	// Test send an Email
 	/*Email.send({
	  from: "franzhflores@gmail.com",
	  to: "franzhflores@gmail.com",
	  subject: "Meteor Can Send Emails via Gmail",
	  text: "Its pretty easy to send emails via gmail."
	},  function(err){ console.log(err)});*/
	
}

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