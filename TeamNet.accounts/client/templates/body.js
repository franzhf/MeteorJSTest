
//client Run code when a client or a server starts.
Meteor.startup(function () {
    Meteor.subscribe('allUsers');
});

Template.appBody.events({ 
  'click #log-out': function() {
      Meteor.logout();
      Router.go('signin');
  }  
});

Template.appBody.helpers({
    connected: function() {
    if (Session.get(SHOW_CONNECTION_ISSUE_KEY)) {
      return Meteor.status().connected;
    } else {
      return true;
    }
  }
});