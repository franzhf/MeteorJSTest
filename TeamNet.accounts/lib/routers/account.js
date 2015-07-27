Router.map(function() {    
    this.route('signin');
    this.route('signup');
    this.route('forgotpassword'); 
});

// Customize rendering behavior, applying Hooks to Specific Routes
// check if the user has a valid credentials
Router.onBeforeAction(function() {
  if (! Meteor.userId()) {
    // if the user is not sign in, render the signin template    
    this.render('signin');
  } else {
    // otherwise don't hold up the rest of hooks or our route/action function
    this.next();
  }
}, { except: ['signup', 'forgotpassword'] }); // except get applied to those routes

/*Router.route('/', function () {
  this.render('profile'); 
});*/