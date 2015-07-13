Template.home.helpers({
	"click js-logout": function () {
		Meteor.logout();
        Router.go('signin');	    
	}
});	