if(Meteor.isServer)
{
	console.log('Run server side');
	var  smtp = process.env;
	console.log(smtp);
}