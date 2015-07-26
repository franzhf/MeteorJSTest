var ERRORS_KEY = 'signupErrors';
Template.signup.onCreated(function() {
  Session.set(ERRORS_KEY, {});
});


Template.signup.helpers({
  errorMessages: function() {
    return _.values(Session.get(ERRORS_KEY));
  },
  errorClass: function(key) {
    return Session.get(ERRORS_KEY)[key] && 'error';
  }
});

Template.signup.events({
  'submit': function(event, template) {
    event.preventDefault();

    var name = template.$('[name=name]').val();
    var lastName = template.$('[name=lastName]').val();
    var email = template.$('[name=email]').val();
    var password = template.$('[name=password]').val();
    var confirm = template.$('[name=confirm]').val();

    var errors = {};

    if (! name) {
      errors.name = 'Name is required';
    }

    if (! lastName) {
      errors.lastName = 'Last Name is required';
    }


    if (! email) {
      errors.email = 'Email is required';
    }

    if (! password) {
      errors.password = 'Password is required';
    }

    if (confirm !== password) {
      errors.confirm = 'Please confirm your password';
    }

    //Calls a server method if the entry email alredy exists on DB, it will return true otherwise false
    Meteor.call('isDuplicateEmail', email, function (error, result) {

      console.log(error);
      console.log(result);
      if (!error){
        if(result){
          errors.duplicateEmail = 'The email already exists';
        }

        Session.set(ERRORS_KEY, errors);
          if (_.keys(errors).length) {
            return;
          }      
          Accounts.createUser({
              username: name,            
              profile: {
                name: name,
                lastName: lastName
              },
              email: email,
              password: password      
          }, function(error) {
              if (error) {
                return Session.set(ERRORS_KEY, {'none': error.reason});
              }

              Router.go('profile');
          });
        }    
    });
  }
});


function createUser(name, lastName, email, password) {  

}