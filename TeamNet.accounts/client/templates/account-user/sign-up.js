var ERRORS_KEY = 'signupErrors';
Template.signup.onCreated(function() {
  Session.set(ERRORS_KEY, {});
});


Template.signup.helpers({
  errorMessages: function() {
    return _.values(Session.get(ERRORS_KEY));
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

    Session.set(ERRORS_KEY, errors);
      if (_.keys(errors).length) {
        return;
    }  

    //Calls a server method if the entry email alredy exists on DB, the user won't be registered
    Meteor.call('isDuplicateEmail', email, function (error, result) {
      errors = {};    
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

              Router.go('home');
          });
        }    
    });
  }
});