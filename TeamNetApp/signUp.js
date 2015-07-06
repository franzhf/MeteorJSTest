Template.signUp.events({
	'submit form': function (event, template) {
		event.preventDefault();
		console.log("sign up");
		var email = template.find('#email').value;
		var pwd = template.find('#password').value;
		var fn = template.find('#firstName').value;
		var ln = template.find('#lastName').value;
		Accounts.createUser({
			username: fn + ln,
			password: pwd,
			email: email,
			profile: {
				fisrtName: ln,
				lastName: fn
			}
			
			}, function (resp) {
			console.log(resp);
		});
	}
});