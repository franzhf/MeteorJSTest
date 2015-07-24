var ERRORS_KEY = 'signinErrors';

Template.signin.onCreated(function() {
  Session.set(ERRORS_KEY, {});
});

Template.signin.helpers({
  errorMessages: function() {
    return _.values(Session.get(ERRORS_KEY));
  },
  errorClass: function(key) {
    return Session.get(ERRORS_KEY)[key] && 'error';
  }
});

Template.signin.events({
  'submit': function(event, template) {
    event.preventDefault();
    
    var email = template.$('[name=email]').val();
    var password = template.$('[name=password]').val();    
    var errors = {};

    if (! email) {
      errors.email = 'Email is required';
    }

    if (! password) {
      errors.password = 'Password is required';
    }  
   
    
    Meteor.loginWithPassword(email, password, function(error) {
      if (error) {
        return Session.set(ERRORS_KEY, {'none': error.reason});
      }

      var user = Meteor.user();      
      var profile = user.profile;
      console.log( Meteor.user());
      console.log('Welcome!!!   ' + profile);     
      Router.go('profile');
    });
  },

  'click #btn-pwd-recovery' : function(event) {
    console.log(Meteor.user())
    console.log("pwd recovery");
    
    if (Meteor.user()){
      var email = Meteor.user().emails[0].address;
      var options = {
          email: email
      }
      Accounts.forgotPassword(options, function(error){
        console.log(error);
      })
    }    
  }  

});

