Meteor.startup(function () {

	console.log('startup');
  smtp = {
	    username: 'franzhflores@gmail.com',   // eg: server@gentlenode.com
	    password: '_1q2w3e4r',   // eg: 3eeP1gtizk5eziohfervU
	    server:   'smtp.gmail.com',  // eg: mail.gandi.net
	    port: 25
	}
 	process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;
});

if(Meteor.isServer)
{
	 smtp = {
	    username: 'franzhflores@gmail.com',   // eg: server@gentlenode.com
	    password: '_1q2w3e4r',   // eg: 3eeP1gtizk5eziohfervU
	    server:   'smtp.gmail.com',  // eg: mail.gandi.net
	    port: 25
	}
 	process.env.MAIL_URL = 'smtp://' + encodeURIComponent(smtp.username) + ':' + encodeURIComponent(smtp.password) + '@' + encodeURIComponent(smtp.server) + ':' + smtp.port;

 	Email.send({
	  from: "franzhflores@gmail.com",
	  to: "franzhflores@gmail.com",
	  subject: "Meteor Can Send Emails via Gmail",
	  text: "Its pretty easy to send emails via gmail."
	});
	console.log('Run server side');
	var  smtp = process.env;	
	console.log(process.env.MAIL_URL);
}

